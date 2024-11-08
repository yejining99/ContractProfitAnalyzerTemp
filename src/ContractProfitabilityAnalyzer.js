import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import { Plus, Minus, Search, TrendingUp, TrendingDown } from "lucide-react";

// 샘플 데이터
const SAMPLE_CONTRACT = {
  id: "CT-2024-001",
  items: [
    { id: 1, name: "Item A", price: 1000, profit: 200, theme: "electronics", included: true },
    { id: 2, name: "Item B", price: 500, profit: 150, theme: "electronics", included: true },
  ]
};

const AVAILABLE_ITEMS = [
  { id: 1, name: "Item A", price: 1000, profit: 200, theme: "electronics" },
  { id: 2, name: "Item B", price: 500, profit: 150, theme: "electronics" },
  { id: 3, name: "Item C", price: 2000, profit: 400, theme: "furniture" },
  { id: 4, name: "Item D", price: 1500, profit: 250, theme: "furniture" },
  { id: 5, name: "Item E", price: 800, profit: 160, theme: "office" },
  { id: 6, name: "Item F", price: 1200, profit: 240, theme: "electronics" },
  { id: 7, name: "Item G", price: 900, profit: 180, theme: "furniture" },
  { id: 8, name: "Item H", price: 600, profit: 120, theme: "office" },
  { id: 9, name: "Item I", price: 1800, profit: 360, theme: "electronics" },
  { id: 10, name: "Item J", price: 2500, profit: 500, theme: "furniture" },
];

const ContractProfitabilityAnalyzer = () => {
  const [contractId, setContractId] = useState("");
  const [contract, setContract] = useState(null);
  const [modifications, setModifications] = useState([]);

//   const getItemStatus = (item) => {
//     if (!contract) return { included: false, modified: false };
   
//     const isOriginallyIncluded = contract.items.some(i => i.id === item.id);
//     const modification = modifications.find(mod => mod.id === item.id);
   
//     return {
//         included: (isOriginallyIncluded && !(modification?.action === 'remove')) ||
//                   (!isOriginallyIncluded && (modification?.action === 'add')),
//         modified: !!modification,
//         originallyIncluded: isOriginallyIncluded,
//         action: modification?.action
//       };
//   };
  const getItemStatus = (item) => {
    if (!contract) return { included: false, modified: false, originallyIncluded: false, action: null };
    
    const isOriginallyIncluded = contract.items.some(i => i.id === item.id);
    const modification = modifications.find(mod => mod.id === item.id);
    
    return {
    included: isOriginallyIncluded ? !modification?.action === 'remove' : modification?.action === 'add',
    modified: !!modification,
    originallyIncluded: isOriginallyIncluded,
    action: modification?.action
    };
  };

  const calculateMetrics = (items) => {
    const totalProfit = items.reduce((sum, item) => sum + item.profit, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    const profitability = totalPrice > 0 ? ((totalProfit / totalPrice) * 100).toFixed(1) : 0;
    return { totalPrice, totalProfit, profitability };
  };

  const searchContract = () => {
    setContract(SAMPLE_CONTRACT);
    setModifications([]);
  };

//   const toggleItem = (item) => {
//     const existingMod = modifications.find(mod => mod.id === item.id);
//     if (existingMod) {
//       setModifications(modifications.filter(mod => mod.id !== item.id));
//     } else {
//       const newMod = {
//         ...item,
//         action: contract.items.some(i => i.id === item.id) ? 'remove' : 'add'
//       };
//       setModifications([...modifications, newMod]);
//     }
//   };
    const toggleItem = (item) => {
        if (!contract) {
        // contract가 없으면 먼저 검색하도록 유도
        alert("계약을 먼저 검색해주세요");
        return;
        }
    
        const existingMod = modifications.find(mod => mod.id === item.id);
        if (existingMod) {
        setModifications(modifications.filter(mod => mod.id !== item.id));
        } else {
        const newMod = {
            ...item,
            action: contract.items.some(i => i.id === item.id) ? 'remove' : 'add'
        };
        setModifications([...modifications, newMod]);
        }
    };

//   const getCurrentItems = () => {
//     let items = [...(contract?.items || [])];
//     modifications.forEach(mod => {
//       if (mod.action === 'remove') {
//         items = items.filter(item => item.id !== mod.id);
//       } else if (mod.action === 'add') {
//         items.push(mod);
//       }
//     });
//     return items;
//   };
    const getCurrentItems = () => {
      if (!contract) return [];
        
      let items = [...contract.items];
      modifications.forEach(mod => {
        if (mod.action === 'remove') {
          items = items.filter(item => item.id !== mod.id);
        } else if (mod.action === 'add') {
          items.push(mod);
        }
      });
      return items;
    };

  const ItemCard = ({ item, showThemeBadge = false }) => {
    const status = getItemStatus(item);
   
    return (
      <div
        className={`flex justify-between items-center p-2 border rounded transition-colors
          ${status.originallyIncluded ? 'bg-blue-50 border-blue-200' : 'bg-white'}
          ${status.modified ? 'border-yellow-300 border-2' : ''}
        `}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium">{item.name}</span>
            <div className="flex gap-1">
              {status.originallyIncluded && (
                <Badge variant="secondary">현재 계약</Badge>
              )}
              {status.modified && (
                <Badge variant="outline" className="border-yellow-500 text-yellow-700">
                  {status.action === 'add' ? '추가 예정' : '제거 예정'}
                </Badge>
              )}
              {showThemeBadge && (
                <Badge variant="outline">{item.theme}</Badge>
              )}
            </div>
          </div>
          <div className="text-sm text-gray-500">
            가격: ₩{item.price.toLocaleString()} | 수익: ₩{item.profit.toLocaleString()} |
            수익률: {((item.profit / item.price) * 100).toFixed(1)}%
          </div>
        </div>
        {/* <button
          className={`p-2 rounded-full transition-colors ${
            status.originallyIncluded || status.action === 'add'
              ? 'text-red-500 hover:bg-red-50'
              : 'text-blue-500 hover:bg-blue-50'
          }`}
          onClick={() => toggleItem(item)}
          title={status.originallyIncluded || status.action === 'add' ? '제거' : '추가'}
        >
          {status.originallyIncluded || status.action === 'add' ? <Minus size={18} /> : <Plus size={18} />}
        </button> */}
        <button
          className={`p-2 rounded-full transition-colors ${
            status.included
              ? 'text-red-500 hover:bg-red-50'
              : 'text-blue-500 hover:bg-blue-50'
          }`}
          onClick={() => toggleItem(item)}
          title={status.included ? '제거' : '추가'}
        >
          {status.included ? <Minus size={18} /> : <Plus size={18} />}
        </button>

      </div>
    );
  };

  const originalMetrics = contract ? calculateMetrics(contract.items) : { totalPrice: 0, totalProfit: 0, profitability: 0 };
  const modifiedMetrics = contract ? calculateMetrics(getCurrentItems()) : { totalPrice: 0, totalProfit: 0, profitability: 0 };
  const profitabilityChange = (modifiedMetrics.profitability - originalMetrics.profitability).toFixed(1);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 p-4 gap-4 overflow-hidden">
        {/* 왼쪽 패널 */}
        <div className="w-1/2 flex flex-col gap-4">
          {/* 검색 영역 */}
          <Card className="shadow-sm">
            <CardContent className="py-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="계약 번호 입력"
                  className="flex-1 p-2 border rounded"
                  value={contractId}
                  onChange={(e) => setContractId(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2"
                  onClick={searchContract}
                >
                    <Search size={18} />
                    검색
                </button>
                {contract && contract.items.length === 0 && (
                  <div className="text-center text-gray-500 py-4">
                    계약에 포함된 아이템이 없습니다
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* 수정된 아이템 */}
          <Card className="flex-1 overflow-auto">
            <CardHeader className="py-3">
              <CardTitle>수정 사항</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {modifications.map(mod => (
                  <ItemCard key={mod.id} item={mod} />
                ))}
                {modifications.length === 0 && (
                  <div className="text-center text-gray-500 py-4">
                    수정 사항이 없습니다
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 오른쪽 패널 */}
        <Card className="w-1/2 overflow-hidden flex flex-col">
          <CardHeader className="py-3">
            <CardTitle className="flex items-center justify-between">
              <span>전체 아이템</span>
              <div className="flex items-center gap-3 text-sm font-normal">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-50 border border-blue-200 rounded"></div>
                  현재 계약
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-white border-2 border-yellow-300 rounded"></div>
                  수정 예정
                </span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto max-h-[calc(100vh-13rem)] flex-1">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">전체</TabsTrigger>
                <TabsTrigger value="electronics">전자기기</TabsTrigger>
                <TabsTrigger value="furniture">가구</TabsTrigger>
                <TabsTrigger value="office">사무용품</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-2">
                {AVAILABLE_ITEMS.map(item => (
                  <ItemCard key={item.id} item={item} showThemeBadge={true} />
                ))}
              </TabsContent>

              {["electronics", "furniture", "office"].map(theme => (
                <TabsContent key={theme} value={theme} className="space-y-2">
                  {AVAILABLE_ITEMS
                    .filter(item => item.theme === theme)
                    .map(item => (
                      <ItemCard key={item.id} item={item} />
                    ))}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* 하단 수익성 분석 패널 */}
      {contract && (
        <div className="border-t bg-gray-50">
          <div className="container mx-auto p-4">
            <div className="flex justify-between items-center gap-8">
              {/* 현재 계약 수익성 */}
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500 mb-1">현재 계약</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-sm text-gray-500">총 가격</div>
                    <div className="text-lg font-medium">₩{originalMetrics.totalPrice.toLocaleString()}</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-sm text-gray-500">총 수익</div>
                    <div className="text-lg font-medium">₩{originalMetrics.totalProfit.toLocaleString()}</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-sm text-gray-500">수익률</div>
                    <div className="text-lg font-medium">{originalMetrics.profitability}%</div>
                  </div>
                </div>
              </div>

              {/* 구분선 */}
              <div className="flex items-center gap-2">
                <div className="h-12 w-px bg-gray-300"></div>
              </div>

              {/* 수정 후 수익성 */}
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  수정 후
                  {profitabilityChange !== "0.0" && (
                    <Badge
                      variant={profitabilityChange > 0 ? "default" : "destructive"}
                      className="ml-2 flex items-center gap-1"
                    >
                      {profitabilityChange > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {profitabilityChange > 0 ? "+" : ""}{profitabilityChange}%
                    </Badge>
                  )}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-sm text-gray-500">총 가격</div>
                    <div className="text-lg font-medium">₩{modifiedMetrics.totalPrice.toLocaleString()}</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-sm text-gray-500">총 수익</div>
                    <div className="text-lg font-medium">₩{modifiedMetrics.totalProfit.toLocaleString()}</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-sm text-gray-500">수익률</div>
                    <div className="text-lg font-medium">{modifiedMetrics.profitability}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractProfitabilityAnalyzer;