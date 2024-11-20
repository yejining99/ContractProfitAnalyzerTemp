import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import { Plus, Minus, Search, TrendingUp, TrendingDown, PlusCircle } from "lucide-react";
import { SAMPLE_CONTRACTS } from './data/sample-contracts';
import { INCOMPATIBLE_ITEMS } from './data/incompatible-items';
import { SET_ITEMS } from './data/set-items';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./components/ui/select";

// 계약별 사용 가능한 아이템 목록을 조회하는 함수
const getAvailableItems = (contractId) => {
  return SAMPLE_CONTRACTS[contractId]?.availableItems || [];
};

// 수익성 영향도 레벨을 정의하는 상수
// 각 레벨마다 임계값, 라벨, 색상, 아이콘을 지정
const PROFITABILITY_IMPACT_LEVELS = {
  MUCH_BETTER: { threshold: 2.0, label: '많이 개선', color: 'border-red-500 text-red-700 bg-red-50', icon: '▲▲' },
  BETTER: { threshold: 0.5, label: '개선', color: 'border-red-500 text-red-700', icon: '▲' },
  SIMILAR: { threshold: -0.5, label: '비슷', color: 'border-gray-500 text-gray-700', icon: '•' },
  WORSE: { threshold: -2.0, label: '하락', color: 'border-blue-500 text-blue-700', icon: '▼' },
  MUCH_WORSE: { threshold: -Infinity, label: '많이 하락', color: 'border-blue-500 text-blue-700 bg-blue-50', icon: '▼▼' }
};

// 동시 판매 불가능한 아이템 체크 함수
// 현재 아이템이 기존 선택된 아이템들과 충돌하는지 확인
const checkIncompatibility = (contractId, itemId, currentItems, contract, modifications) => {
  const incompatiblePairs = INCOMPATIBLE_ITEMS[contractId] || [];
  
  // 현재 활성화된 아이템 목록 필터링 (삭제 예쩡인 아이템 제외)
  const activeItems = currentItems.filter(item => {
    const modification = modifications.find(mod => mod.id === item.id);
    // 삭제 예정인 아이템은 제외
    if (modification?.action === 'remove') return false;
    return true;
  });
  
  // 충돌 여부 확인
  for (const [id1, id2] of incompatiblePairs) {
    if (itemId === id1) {
      // 현재 아이템이 첫 번째 아이템인 경우
      if (activeItems.some(item => item.id === id2)) {
        const incompatibleItem = contract?.availableItems.find(i => i.id === id2);
        return {
          isIncompatible: true,
          incompatibleWith: id2,
          incompatibleItemName: incompatibleItem?.name
        };
      }
    } else if (itemId === id2) {
      // 현재 아이템이 두 번째 아이템인 경우
      if (activeItems.some(item => item.id === id1)) {
        const incompatibleItem = contract?.availableItems.find(i => i.id === id1);
        return {
          isIncompatible: true,
          incompatibleWith: id1,
          incompatibleItemName: incompatibleItem?.name
        };
      }
    }
  }
  
  return { isIncompatible: false };
};

// 세트 아이템 정보 조회 함수
// 특정 아이템이 세트에 포함되어 있는지 확인하고 세트 정보 반환
const getSetInfo = (contractId, itemId) => {
  const sets = SET_ITEMS[contractId] || [];
  const foundSet = sets.find(set => set.includes(itemId));
  if (foundSet) {
    return {
      ids: foundSet
    };
  }
  return null;
};

// theme 매핑 상수 추가
const THEME_MAPPING = {
  '종수술': '종수술',
  '자동차': '자동차',
  '암': '암',
  '일당': '일당',
  '일반질병상해':'일반질병상해',
  '2대': '2대',
  '재물':'재물'
};

// 계약의 테마 비율을 계산하는 함수
const getContractThemeRatio = (contractId) => {
  const contract = SAMPLE_CONTRACTS[contractId];
  if (!contract) return null;

  // theme 카운트를 저장할 객체
  const themeCount = Object.keys(THEME_MAPPING).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});

  // 각 아이템의 theme 카운트
  contract.items.forEach(item => {
    const themes = Array.isArray(item.theme) ? item.theme : [item.theme];
    themes.forEach(theme => {
      if (themeCount.hasOwnProperty(theme)) {
        themeCount[theme] += 1;
      }
    });
  });

  // 카운트가 0인 theme 제거
  Object.keys(themeCount).forEach(key => {
    if (themeCount[key] === 0) {
      delete themeCount[key];
    }
  });

  return themeCount;
};

// theme 표시용 레이블 매핑
const THEME_LABELS = {
  '종수술': '종수술',
  '자동차': '자동차',
  '암': '암',
  '일당': '일당',
  '일반질병상해':'일반질병상해',
  '2대': '2대',
  '재물':'재물'
};

const ContractProfitabilityAnalyzer = () => {
  // 상태 관리
  // 현재 선택된 계약 ID
  const [contractId, setContractId] = useState("");
  // 현재 계약 정보
  const [contract, setContract] = useState(null);
  // 계약 수정 사항 목록
  const [modifications, setModifications] = useState([]);
  // 상태 추가
  const [selectedType, setSelectedType] = useState("all");
  // 원본 계약 정보를 저장하는 상태 추가
  const [originalContract, setOriginalContract] = useState(null);
  // 정렬된 아이템을 저장하는 상태 추가
  const [sortedItems, setSortedItems] = useState([]);

  // 아이템의 현재 상태 확인 변수 (포함 여부, 수정 여부 등)
  const getItemStatus = (item) => {
    if (!contract) return { included: false, modified: false };
    
    const isOriginallyIncluded = contract.items?.some(i => i.id === item.id) || false;
    const modification = modifications?.find(mod => mod.id === item.id);
    const originalQuantity = contract.items?.find(i => i.id === item.id)?.quantity;
    
    // 수정사항이 있더라도 수량이 원래와 같은 경우 수정으로 표시하지 않음
    const isQuantityModified = modification?.quantity !== undefined && 
                             modification.quantity !== originalQuantity;
    
    return {
        included: isOriginallyIncluded && !modification?.action === 'remove' || 
                 !isOriginallyIncluded && modification?.action === 'add',
        modified: !!modification && (modification.action === 'remove' || isQuantityModified),
        originallyIncluded: isOriginallyIncluded,
        action: modification?.action
    };
  };

  // 메트릭스(총 가격, 총 익, 수익률) 계산 수
  const calculateMetrics = (items) => {
    const totals = items.reduce((sum, item) => {
      const itemDetails = contract?.availableItems.find(i => i.id === item.id);
      const metrics = itemDetails?.priceAndProfitByQuantity[item.quantity] || { totalPrice: 0, totalProfit: 0 };
      
      return {
        totalPrice: sum.totalPrice + metrics.totalPrice,
        totalProfit: sum.totalProfit + metrics.totalProfit
      };
    }, { totalPrice: 0, totalProfit: 0 });

    const profitability = totals.totalPrice > 0 
      ? ((totals.totalProfit / totals.totalPrice) * 100).toFixed(1) 
      : '0.0';

    return {
      ...totals,
      profitability
    };
  };

  // 계약 검색 함수
  const searchContract = () => {
    const foundContract = SAMPLE_CONTRACTS[contractId];
    if (foundContract) {
      setOriginalContract(foundContract);
      setContract(foundContract);
      setSortedItems(foundContract.availableItems);
      setModifications([]);
    } else {
      alert('계약을 찾을 수 없습니다.');
    }
  };

  // 아이템 토글(추가/제거/수정) 함수
  const toggleItem = (item, quantity = null, modType = 'add') => {
    const existingMod = modifications.find(mod => mod.id === item.id);
    const originalItem = contract?.items.find(i => i.id === item.id);
    const setInfo = getSetInfo(contract?.id, item.id);
    
    const actualQuantity = quantity || item.recommendedQuantity;

    // 세트 아이템 처리
    if (setInfo) {
        // 현재 세트의 모 아이템이 원래 태와 동일한지 확인
        const isSetUnchanged = setInfo.ids.every(id => {
            const originalSetItem = contract?.items.find(i => i.id === id);
            const modSetItem = modifications.find(mod => mod.id === id);
            
            // 원래 있던 아이템이고 수량이 같으면 변경 없음
            if (originalSetItem) {
                if (modSetItem?.action === 'add' && 
                    modSetItem.quantity === originalSetItem.quantity) {
                    return true;
                }
            }
            return false;
        });

        // 변경사항이 없으면 모든 수정사항 제거
        if (isSetUnchanged) {
            setModifications(modifications.filter(mod => 
                !setInfo.ids.includes(mod.id)
            ));
            return;
        }

        // ... rest of set handling code ...
    }

    // 일반 아이템 처리
    // 수량이 원래와 같은 경우 수정사항 제거
    if (originalItem && actualQuantity === originalItem.quantity) {
        setModifications(modifications.filter(mod => mod.id !== item.id));
        return;
    }

    if (modType === 'remove') {
        if (setInfo) {
            // 세트의 모든 아이템에 대한 삭제 리
            const newModifications = modifications.filter(mod => 
                !setInfo.ids.includes(mod.id)
            );
            
            // 기존 아이템들에 대해 삭제 처리 추가
            setInfo.ids.forEach(id => {
                const itemOriginal = contract?.items.find(i => i.id === id);
                if (itemOriginal) {
                    newModifications.push({
                        id,
                        action: 'remove'
                    });
                }
            });
            
            setModifications(newModifications);
        } else {
            // 일반 아이템 삭제
            if (originalItem) {
                setModifications([
                    ...modifications.filter(mod => mod.id !== item.id),
                    { id: item.id, action: 'remove' }
                ]);
            } else {
                setModifications(modifications.filter(mod => mod.id !== item.id));
            }
        }
        return;
    }

    // 추가/수정 로직
    if (setInfo && modType === 'add') {
        // 세트의 모든 아이템에 대한 기존 수정사항 제거
        const newModifications = modifications.filter(mod => 
            !setInfo.ids.includes(mod.id)
        );
        
        // 세트의 각 아이템을 현재 화면에 표시된 수량으로 추가
        setInfo.ids.forEach(id => {
            const itemDetails = contract?.availableItems.find(i => i.id === id);
            if (itemDetails) {
                // 현재 아이템인 경우 선택된 수 사용, 그 외의 경우 해당 아이템의 현재 표시된 수량 사용
                const itemMod = modifications.find(mod => mod.id === id);
                const itemQuantity = id === item.id ? 
                    actualQuantity : 
                    (itemMod?.quantity || itemDetails.recommendedQuantity);

                newModifications.push({
                    ...itemDetails,
                    quantity: itemQuantity,
                    action: 'add'
                });
            }
        });
        
        setModifications(newModifications);
    } else {
        // 일반 아이템 또는 세트 아이템의 개별 수량 변경
        if (existingMod) {
            const updatedModifications = modifications.map(mod => 
                mod.id === item.id 
                    ? { ...mod, quantity: actualQuantity, action: modType } 
                    : mod
            );
            setModifications(updatedModifications);
        } else {
            const newMod = {
                ...item,
                quantity: actualQuantity,
                action: modType
            };
            setModifications([...modifications, newMod]);
        }
    }
};

  const getCurrentItems = () => {
    if (!contract) return [];
    
    let items = [...contract.items];
    
    // 수정사항 적용
    modifications.forEach(mod => {
      if (mod.action === 'remove') {
        // 삭제 예정 아이템 제거
        items = items.filter(item => item.id !== mod.id);
      } else if (mod.action === 'add') {
        // 새로운 아이템 추가
        items.push(mod);
      } else {
        // 수량 변경
        items = items.map(item => 
          item.id === mod.id 
            ? { ...item, quantity: mod.quantity }
            : item
        );
      }
    });

    return items;
  };

  // 테마 필터링 함수 수정
  const filterItemsByTheme = (items, theme) => {
    if (theme === 'all') return items;
    return items.filter(item => {
      // theme이 문자열인 경우와 배열인 경우 모두 처리
      if (Array.isArray(item.theme)) {
        return item.theme.includes(theme);
      }
      return item.theme === theme;
    });
  };

  // ItemCard 컴포넌트 - 개별 아이템을 표시하는 위 컴포넌트
  const ItemCard = ({ item, showThemeBadge = false }) => {
    const status = getItemStatus(item);
    
    const getItemDetails = () => {
      return contract?.availableItems.find(i => i.id === item.id);
    };

    const details = getItemDetails();

    const getCurrentContractQuantity = () => {
      return contract?.items.find(i => i.id === item.id)?.quantity;
    };

    // 수량 상태 초화 로직 수정
    const [previewQuantity, setPreviewQuantity] = useState(() => {
      const existingMod = modifications.find(mod => mod.id === item.id);
      const originalItem = contract?.items.find(i => i.id === item.id);
      const details = getItemDetails();
      
      if (existingMod && existingMod.action !== 'remove') {
        return existingMod.quantity;
      }
      if (originalItem) {
        return originalItem.quantity;
      }
      return details?.recommendedQuantity || 0;
    });

    // useEffect 추가하여 modifications 변경 시 previewQuantity 동기화
    useEffect(() => {
      const existingMod = modifications.find(mod => mod.id === item.id);
      if (existingMod && existingMod.action !== 'remove') {
        setPreviewQuantity(existingMod.quantity);
      }
    }, [modifications, item.id]);

    const handleQuantityChange = (e) => {
      const newQuantity = Number(e.target.value);
      setPreviewQuantity(newQuantity);
      
      // 수정된 토글 아이템 호출
      if (status.included || status.originallyIncluded) {
        toggleItem(item, newQuantity, status.originallyIncluded ? 'modify' : 'add');
      }
    };

    // 실제 아이템 추가/수정은 + 버튼 클릭시에만 발생
    const handleAddItem = () => {
      const setInfo = getSetInfo(contract?.id, item.id);
      
      // 세트 아이템인 경우
      if (setInfo) {
          // 세트의 모든 아이템 대한 기존 수정사 제거
          const newModifications = modifications.filter(mod => 
              !setInfo.ids.includes(mod.id)
          );
          
          // 세트의 각 아이템을 현재 화면에 표시된 수량으로 추가
          setInfo.ids.forEach(id => {
              const itemDetails = contract?.availableItems.find(i => i.id === id);
              if (itemDetails) {
                  // 현재 아이템인 경우 선택된 수량 사용, 그 외의 경우 해당 아이템의 현재 표시된 수량 사용
                  const itemMod = modifications.find(mod => mod.id === id);
                  const itemQuantity = id === item.id ? 
                      previewQuantity : 
                      (itemMod?.quantity || itemDetails.recommendedQuantity);

                  newModifications.push({
                      ...itemDetails,
                      quantity: itemQuantity,
                      action: 'add'
                  });
              }
          });
          
          setModifications(newModifications);
      } else {
          // 일반 아이템인 경우 기존 로직 사용
          toggleItem(item, previewQuantity, 'add');
      }
    };

    const getMetricsForQuantity = (quantity) => {
      if (!details?.priceAndProfitByQuantity || !quantity) {
        return { totalPrice: 0, totalProfit: 0 };
      }
      return details.priceAndProfitByQuantity[quantity] || { totalPrice: 0, totalProfit: 0 };
    };

    const metrics = getMetricsForQuantity(previewQuantity);
    const profitability = metrics.totalPrice > 0 
      ? ((metrics.totalProfit / metrics.totalPrice) * 100).toFixed(1) 
      : '0.0';

    // 미리보기 수량으로 수익률 영향도 계산
    const calculateProfitabilityImpact = () => {
      const contractQuantity = getCurrentContractQuantity();
      const isModified = modifications.some(mod => mod.id === item.id);
      
      if (!contract || contractQuantity !== undefined || isModified) {
        return null;
      }

      // 현재 계약의 전체 수익률 계산
      const currentItems = contract.items.map(contractItem => {
        const itemDetails = contract.availableItems.find(i => i.id === contractItem.id);
        const metrics = itemDetails?.priceAndProfitByQuantity[contractItem.quantity] || 
                       { totalPrice: 0, totalProfit: 0 };
        return metrics;
      });

      const currentTotalPrice = currentItems.reduce((sum, item) => sum + item.totalPrice, 0);
      const currentTotalProfit = currentItems.reduce((sum, item) => sum + item.totalProfit, 0);
      const currentProfitability = currentTotalPrice ? (currentTotalProfit / currentTotalPrice) * 100 : 0;

      // 새 아이템 추가 시 수익률 계산
      const newItemMetrics = details?.priceAndProfitByQuantity[previewQuantity] || 
                            { totalPrice: 0, totalProfit: 0 };

      const newTotalPrice = currentTotalPrice + newItemMetrics.totalPrice;
      const newTotalProfit = currentTotalProfit + newItemMetrics.totalProfit;
      const newProfitability = newTotalPrice ? (newTotalProfit / newTotalPrice) * 100 : 0;

      const impact = newProfitability - currentProfitability;

      // 영향도 레벨 결정
      let level;
      if (impact > PROFITABILITY_IMPACT_LEVELS.MUCH_BETTER.threshold) {
        level = PROFITABILITY_IMPACT_LEVELS.MUCH_BETTER;
      } else if (impact > PROFITABILITY_IMPACT_LEVELS.BETTER.threshold) {
        level = PROFITABILITY_IMPACT_LEVELS.BETTER;
      } else if (impact > PROFITABILITY_IMPACT_LEVELS.SIMILAR.threshold) {
        level = PROFITABILITY_IMPACT_LEVELS.SIMILAR;
      } else if (impact > PROFITABILITY_IMPACT_LEVELS.WORSE.threshold) {
        level = PROFITABILITY_IMPACT_LEVELS.WORSE;
      } else {
        level = PROFITABILITY_IMPACT_LEVELS.MUCH_WORSE;
      }

      return {
        value: impact.toFixed(1),
        label: `${level.label} (${impact > 0 ? '+' : ''}${impact.toFixed(1)}%)`,
        color: level.color,
        icon: level.icon
      };
    };

    const profitabilityImpact = calculateProfitabilityImpact();

    // 동시 판매 불가 아이템 표시를 위한 배지 추가
    const getIncompatibilityWarning = () => {
      if (!contract) return null;

      const currentItems = getCurrentItems();
      const { isIncompatible, incompatibleItemName } = checkIncompatibility(
        contract.id,
        item.id,
        currentItems,
        contract,
        modifications
      );

      if (isIncompatible) {
        return {
          label: `${incompatibleItemName}와(과) 동시 판매 불가`,
          color: 'border-yellow-500 text-yellow-700 bg-yellow-50'
        };
      }

      return null;
    };

    const incompatibilityWarning = getIncompatibilityWarning();

    const handleRemoveItem = () => {
      toggleItem(item, null, 'remove');  // toggleItem의 remove 로직 사용
    };

    // 아이템 상태에 따른 스타일과 라벨 결정
    const getItemStatusInfo = () => {
      if (status.modified) {
        if (status.action === 'remove') {
          return {
            style: 'bg-red-50 border-red-200',
            badge: <Badge variant="outline" className="border-red-500 text-red-700 bg-red-50">삭제 예정</Badge>
          };
        }
        // 새로 추가된 아이템인 경우 (수량 변경과 관계없이)
        if (!status.originallyIncluded) {
          return {
            style: 'bg-green-50 border-green-200',
            badge: <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">새로 추가</Badge>
          };
        }
        // 기존 아이템의 수량 변경인 경우
        return {
          style: 'bg-yellow-50 border-yellow-200',
          badge: <Badge variant="outline" className="border-yellow-500 text-yellow-700 bg-yellow-50">량 변경</Badge>
        };
      }
      if (status.originallyIncluded) {
        return {
          style: 'bg-blue-50 border-blue-200',
          badge: <Badge variant="secondary">현재 계약</Badge>
        };
      }
      return {
        style: 'bg-white',
        badge: null
      };
    };

    const statusInfo = getItemStatusInfo();

    // 세트 정보 가오기
    const setInfo = getSetInfo(contract?.id, item.id);
    const isSetHeader = setInfo?.ids[0] === item.id;

    // handleReAddItem 함수 추가
    const handleReAddItem = () => {
      const setInfo = getSetInfo(contract?.id, item.id);
      
      if (setInfo) {
        // 세트의 모든 아이템이 원래 상태로 돌아가는지 확인
        const isRestoringToOriginal = setInfo.ids.every(id => {
          const originalItem = contract.items.find(i => i.id === id);
          return originalItem; // 래 계약에 있던 아이템인지 확인
        });

        if (isRestoringToOriginal) {
          // 원래 상태로 돌아가는 경우 모든 수정사항 제거
          setModifications(modifications.filter(mod => 
            !setInfo.ids.includes(mod.id)
          ));
          return;
        }

        // 원래 상태가 아닌 경우 기존 로직 행
        const newModifications = modifications.filter(mod => 
          !setInfo.ids.includes(mod.id)
        );
        
        setInfo.ids.forEach(id => {
          const itemDetails = contract?.availableItems.find(i => i.id === id);
          if (itemDetails) {
            const originalItem = contract.items.find(i => i.id === id);
            if (originalItem) {
              newModifications.push({
                ...itemDetails,
                quantity: originalItem.quantity,
                action: 'add'
              });
            }
          }
        });
        
        setModifications(newModifications);
      } else {
        // 일반 아이템 다시 추가
        toggleItem(item, previewQuantity, 'add');
      }
    };

    return (
      <div>
        {/* 세트 헤더 표시 (세트의 첫 번째 아이템인 경우에만) */}
        {isSetHeader && (
          <div className="flex items-center gap-2 mb-2 pl-2 text-sm text-purple-700 font-medium">
            <PlusCircle size={16} className="text-purple-500" />
            세트 아이템
          </div>
        )}
        
        {/* 아이템 카드 - 세트 아이템인 경우 들여쓰기 적용 */}
        <div className={`flex items-center p-2 rounded-lg border ${statusInfo.style} ${setInfo ? 'ml-3' : ''}`}>
          <div className="flex-1">
            {/* 한 줄로 표시되는 정보를 justify-between으로 분리 */}
            <div className="flex items-center justify-between">
              {/* 왼쪽: 이름과 수량 */}
              <div className="flex items-center gap-2">
                <span className="font-medium">{details?.name}</span>
                <select 
                  className="border rounded px-2 py-1 text-sm"
                  value={previewQuantity}
                  onChange={handleQuantityChange}
                  disabled={!contract}
                >
                  {details?.availableQuantities?.map(q => (
                    <option key={q} value={q}>{q}원</option>
                  ))}
                </select>
              </div>

              {/* 오른쪽: 보험료, KMV, 수익률 정보 */}
              <span className="text-gray-500">
                보험료: ₩{metrics.totalPrice.toLocaleString()} | 
                KMV: ₩{metrics.totalProfit.toLocaleString()} | 
                수익률: {profitability}%
              </span>
            </div>

            {/* 배지들은 그대로 아래에 유지 */}
            <div className="flex flex-wrap gap-1.5 items-center mt-1">
              {statusInfo.badge}
              {profitabilityImpact && (
                <Badge 
                  variant="outline" 
                  className={`flex items-center gap-1 ${profitabilityImpact.color}`}
                >
                  <span>{profitabilityImpact.icon}</span>
                  <span>{profitabilityImpact.label}</span>
                </Badge>
              )}
              {incompatibilityWarning && (
                <Badge 
                  variant="outline" 
                  className={`flex items-center gap-1 ${incompatibilityWarning.color}`}
                >
                  <span>⚠️</span>
                  <span>{incompatibilityWarning.label}</span>
                </Badge>
              )}
              {showThemeBadge && details?.theme && (
                Array.isArray(details.theme) ? (
                  details.theme.map(t => (
                    <Badge 
                      key={t}
                      variant="outline" 
                      className="text-gray-500 border-gray-300"
                    >
                      {THEME_LABELS[THEME_MAPPING[t]] || t}
                    </Badge>
                  ))
                ) : (
                  <Badge 
                    variant="outline" 
                    className="text-gray-500 border-gray-300"
                  >
                    {THEME_LABELS[THEME_MAPPING[details.theme]] || details.theme}
                  </Badge>
                )
              )}
            </div>
          </div>

          {/* 아이콘 영역 */}
          <div className="flex items-center gap-2 ml-2">
            {status.modified && status.action === 'remove' && (
              <div 
                onClick={handleReAddItem}
                className="cursor-pointer text-xl font-bold px-2 py-1 text-green-500 hover:text-green-700 hover:bg-green-50 rounded"
              >
                +
              </div>
            )}
            {(status.originallyIncluded || status.modified) && status.action !== 'remove' && (
              <div 
                onClick={handleRemoveItem}
                className="cursor-pointer text-xl font-bold px-2 py-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
              >
                −
              </div>
            )}
            {!status.modified && !status.originallyIncluded && (
              <div 
                onClick={handleAddItem}
                className="cursor-pointer text-xl font-bold px-2 py-1 text-green-500 hover:text-green-700 hover:bg-green-50 rounded"
              >
                +
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // 원본 계약의 메트릭스 계산 (수정)
  const originalMetrics = useMemo(() => {
    if (!contract) return { totalPrice: 0, totalProfit: 0, profitability: '0.0' };
    
    // contract.items를 직접 사하여 원본 계약 데이터만으로 계산
    return calculateMetrics(contract.items);
  }, [contract]);

  // 수정된 아이템 목록을 가져오는 함수 수정
  const getModifiedItems = useCallback(() => {
    if (!contract) return [];
    
    let items = [...contract.items];
    
    // 수정사항 적용
    modifications.forEach(mod => {
      const existingIndex = items.findIndex(item => item.id === mod.id);
      
      if (mod.action === 'remove') {
        // 아이템 제거
        if (existingIndex !== -1) {
          items.splice(existingIndex, 1);
        }
      } else {
        // 추가 또는 수정
        if (existingIndex !== -1) {
          // 기존 아이템 수정
          items[existingIndex] = {
            id: mod.id,
            quantity: mod.quantity
          };
        } else {
          // 새 아이템 추가
          items.push({
            id: mod.id,
            quantity: mod.quantity
          });
        }
      }
    });

    return items;
  }, [contract, modifications]);

  // 수정된 계약의 메트릭 계산
  const modifiedMetrics = useMemo(() => {
    if (!contract) return { totalPrice: 0, totalProfit: 0, profitability: '0.0' };
    
    const modifiedItems = getModifiedItems();
    return calculateMetrics(modifiedItems);
  }, [contract, modifications, getModifiedItems]);

  // 수익률 변화 계산
  const profitabilityChange = useMemo(() => {
    return (Number(modifiedMetrics.profitability) - Number(originalMetrics.profitability)).toFixed(1);
  }, [modifiedMetrics.profitability, originalMetrics.profitability]);

  // theme 비율을 계산하는 함수
  const getThemeRatioDisplay = () => {
    if (!contract) return null;
    
    const themeCount = getContractThemeRatio(contract.id);
    if (!themeCount) return null;

    const total = Object.values(themeCount).reduce((sum, count) => sum + count, 0);
    
    const ratio = {};
    Object.entries(themeCount).forEach(([theme, count]) => {
      ratio[theme] = Math.round((count / total) * 100);
    });

    return (
      <Card className="shadow-sm">
        <CardHeader className="py-2">
          <CardTitle>계약 테마 구성</CardTitle>
        </CardHeader>
        <CardContent className="py-2">
          <div className="space-y-2">
            {/* 프로그레스 바 컨테이너 */}
            <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden flex">
              {Object.entries(ratio).map(([theme, percentage], index) => (
                percentage > 0 && (
                  <div 
                    key={theme}
                    className={`h-full`}
                    style={{ 
                      width: `${percentage}%`,
                      backgroundColor: `hsl(${index * 45}, 70%, 50%)`
                    }}
                    title={`${theme}: ${percentage}%`}
                  />
                )
              ))}
            </div>

            {/* 범례 */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {Object.entries(ratio).map(([theme, percentage], index) => (
                percentage > 0 && (
                  <div key={theme} className="flex items-center gap-1">
                    <div 
                      className="w-3 h-3 rounded"
                      style={{ backgroundColor: `hsl(${index * 45}, 70%, 50%)` }}
                    ></div>
                    <span>{THEME_LABELS[theme]} ({percentage}%)</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };



  // JSX 렌더링
  return (
    <div className="flex flex-col h-screen">
      {/* 메인 컨텐츠 영역 */}
      <div className="flex flex-1 p-2 gap-2 overflow-hidden">
        {/* 왼쪽 패널: 계약 검색, 현재 계약 아이템, 수정 사항 */}
        <div className="w-1/2 flex flex-col gap-2">
          {/* 검색 영역 */}
          <Card className="shadow-sm">
            <CardContent className="py-2">
              <div className="flex items-center gap-2 mt-1">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-[140px] p-2 border rounded bg-white"
                >
                  <option value="all">전체</option>
                  <option value="sick">유병자실손</option>
                  <option value="old">노후손</option>
                  <option value="normal1">실손1</option>
                  <option value="normal2">실손2</option>
                </select>
                <input 
                  type="text"
                  placeholder="계약 번호 입력"
                  className="flex-1 p-2 border rounded"
                  value={contractId}
                  onChange={(e) => setContractId(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded flex items-center gap-2 hover:bg-red-600"
                  onClick={searchContract}
                >
                  <Search size={16} />
                  검색
                </button>
              </div>
            </CardContent>
          </Card>

          {/* 테마 비율 표시 - 검색 영역 아래에 추가 */}
          {getThemeRatioDisplay()}

          {/* 현재 계약 아이템 */}
          <Card className="flex-1 overflow-auto">
            <CardHeader className="py-2">
              <CardTitle>현재 계약 아이템</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {contract?.items.map(contractItem => {
                  // availableItems에서 해당 아이템의 상세 정보 찾기
                  const itemDetails = contract.availableItems.find(i => i.id === contractItem.id);
                  if (!itemDetails) return null;

                  // ItemCard에 전달할 통합 정보 구성
                  const itemWithDetails = {
                    ...itemDetails,
                    quantity: contractItem.quantity
                  };

                  return (
                    <ItemCard 
                      key={contractItem.id} 
                      item={itemWithDetails}
                    />
                  );
                })}
                {contract && contract.items.length === 0 && (
                  <div className="text-center text-gray-500 py-4">
                    계약에 포함된 아이템이 없습니다
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* 정된 아이템 */}
          <Card className="flex-1 overflow-auto">
            <CardHeader className="py-2">
              <CardTitle>수정 사항</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
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

        {/* 오른쪽 패널: 전체 아이템 목록 */}
        <Card className="w-1/2 overflow-hidden flex flex-col">
          <CardHeader className="py-2">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">전체 아이템</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (!contract || !originalContract) return;
                      
                      // 원본 데이터를 복사하여 사용
                      const itemsToSort = [...originalContract.availableItems];
                      
                      // 1. 모든 아이템을 그룹화 (세트 또는 단일 아이템)
                      const groups = [];
                      const processedItems = new Set();

                      itemsToSort.forEach(item => {
                        if (processedItems.has(item.id)) return;

                        const setInfo = getSetInfo(originalContract.id, item.id);
                        if (setInfo) {
                          // 세트 아이템인 경우
                          const groupItems = setInfo.ids.map(id => 
                            itemsToSort.find(i => i.id === id)
                          ).filter(Boolean);
                          
                          setInfo.ids.forEach(id => processedItems.add(id));
                          
                          groups.push({
                            type: 'set',
                            items: groupItems
                          });
                        } else {
                          // 일반 아이템인 경우
                          groups.push({
                            type: 'single',
                            items: [item]
                          });
                          processedItems.add(item.id);
                        }
                      });

                      // 2. 그룹 단위로 랜덤 정렬
                      const randomizedGroups = groups.sort(() => Math.random() - 0.5);

                      // 3. 정렬된 그룹에서 아이템 추출
                      const randomizedItems = randomizedGroups.flatMap(group => group.items);
                      
                      setSortedItems(randomizedItems);
                    }}
                    className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    disabled={!contract}
                  >
                    🎲 랜덤 정렬
                  </button>
                  <button
                    onClick={() => {
                      if (!contract || !originalContract) return;
                      
                      // 원본 데이터를 복사하여 사용
                      const itemsToSort = [...originalContract.availableItems];
                      
                      // 1. 모든 아이템을 그룹화 (세트 는 단일 아이템)
                      const groups = [];
                      const processedItems = new Set();

                      itemsToSort.forEach(item => {
                        if (processedItems.has(item.id)) return;

                        const setInfo = getSetInfo(originalContract.id, item.id);
                        if (setInfo) {
                          // 세트 아이템인 경우
                          const groupItems = setInfo.ids.map(id => 
                            itemsToSort.find(i => i.id === id)
                          ).filter(Boolean);
                          
                          setInfo.ids.forEach(id => processedItems.add(id));
                          
                          groups.push({
                            type: 'set',
                            items: groupItems,
                            confidence: Math.min(...groupItems.map(item => item.confidence || 0))
                          });
                        } else {
                          // 일반 아이템인 경우
                          groups.push({
                            type: 'single',
                            items: [item],
                            confidence: item.confidence || 0
                          });
                          processedItems.add(item.id);
                        }
                      });

                      // 2. 모든 그룹을 confidence 기준으로 정렬
                      groups.sort((a, b) => b.confidence - a.confidence);

                      // 3. 정렬된 그룹에서 아이템 추출
                      const sortedItems = groups.flatMap(group => group.items);

                      setSortedItems(sortedItems);
                    }}
                    className="px-3 py-1.5 text-sm bg-blue-100 hover:bg-blue-200 rounded-md transition-colors"
                    disabled={!contract}
                  >
                    ⭐ 추천 정렬
                  </button>
                  <button
                    onClick={() => {
                      if (!contract || !originalContract) return;
                      
                      // 원본 데이터를 복사하여 사���
                      const itemsToSort = [...originalContract.availableItems];
                      
                      // 1. 모든 아이템을 그룹화 (세트 또는 단일 아이템)
                      const groups = [];
                      const processedItems = new Set();

                      itemsToSort.forEach(item => {
                        if (processedItems.has(item.id)) return;

                        const setInfo = getSetInfo(originalContract.id, item.id);
                        if (setInfo) {
                          // 세트 아이템인 경우
                          const groupItems = setInfo.ids.map(id => 
                            itemsToSort.find(i => i.id === id)
                          ).filter(Boolean);
                          
                          setInfo.ids.forEach(id => processedItems.add(id));
                          
                          const maxProfitability = Math.max(...groupItems.map(item => {
                            const metrics = item.priceAndProfitByQuantity[item.recommendedQuantity];
                            return metrics ? (metrics.totalProfit / metrics.totalPrice) * 100 : 0;
                          }));

                          groups.push({
                            type: 'set',
                            items: groupItems,
                            profitability: maxProfitability
                          });
                        } else {
                          // 일반 아이템인 경우
                          const metrics = item.priceAndProfitByQuantity[item.recommendedQuantity];
                          const profitability = metrics ? (metrics.totalProfit / metrics.totalPrice) * 100 : 0;

                          groups.push({
                            type: 'single',
                            items: [item],
                            profitability: profitability
                          });
                          processedItems.add(item.id);
                        }
                      });

                      // 2. 모든 그룹을 수익률 기준으로 정렬
                      groups.sort((a, b) => b.profitability - a.profitability);

                      // 3. 정렬된 그룹에서 아이템 추출
                      const sortedItems = groups.flatMap(group => group.items);

                      setSortedItems(sortedItems);
                    }}
                    className="px-3 py-1.5 text-sm bg-green-100 hover:bg-green-200 rounded-md transition-colors"
                    disabled={!contract}
                  >
                    💰 KMV 정렬
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm font-normal">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-50 border border-blue-200 rounded"></div>
                  현재 계약
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-50 border border-green-200 rounded"></div>
                  새로 추가
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-yellow-50 border border-yellow-200 rounded"></div>
                  수량 변경
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-50 border border-red-200 rounded"></div>
                  삭제 예정
                </span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto max-h-[calc(100vh-10rem)] flex-1">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">전체</TabsTrigger>
                <TabsTrigger value="종수술">종수술</TabsTrigger>
                <TabsTrigger value="자동차">자동차</TabsTrigger>
                <TabsTrigger value="암">암</TabsTrigger>
                <TabsTrigger value="일당">일당</TabsTrigger>
                <TabsTrigger value="일반질병상해">일반질병상해</TabsTrigger>
                <TabsTrigger value="2대">2대</TabsTrigger>
                <TabsTrigger value="재물">재물</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-2">
                {(sortedItems || []).map(item => (
                  <ItemCard key={item.id} item={item} showThemeBadge={true} />
                ))}
              </TabsContent>

              {Object.keys(THEME_MAPPING).map(theme => (
                <TabsContent key={theme} value={theme} className="space-y-2">
                  {(sortedItems || [])
                    .filter(item => {
                      const itemTheme = Array.isArray(item.theme) 
                        ? item.theme
                        : [item.theme];
                      return itemTheme.includes(theme);
                    })
                    .map(item => (
                      <ItemCard key={item.id} item={item} />
                    ))}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* 하단 수익성 분석 ��널 */}
      {contract && (
        <div className="border-t bg-gray-50">
          <div className="container mx-auto p-2">
            <div className="flex justify-between items-center gap-4">
              {/* 현재 계약 수익성 */}
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500 mb-1">현재 계약</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white p-2 rounded-lg">
                    <div className="text-sm text-gray-500">총 가격</div>
                    <div className="text-lg font-medium">₩{originalMetrics.totalPrice.toLocaleString()}</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <div className="text-sm text-gray-500">총 수익</div>
                    <div className="text-lg font-medium">₩{originalMetrics.totalProfit.toLocaleString()}</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <div className="text-sm text-gray-500">수익률</div>
                    <div className="text-lg font-medium">{originalMetrics.profitability}%</div>
                  </div>
                </div>
              </div>

              {/* 구분선 */}
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-px bg-gray-300"></div>
                {profitabilityChange !== "0.0" && (
                  <div className={`text-lg font-bold ${
                    Number(profitabilityChange) > 0 
                      ? 'text-red-500' 
                      : 'text-blue-500'
                  }`}>
                    {profitabilityChange > 0 ? '▲' : '▼'} {Math.abs(profitabilityChange)}%
                  </div>
                )}
              </div>

              {/* 수정 후 수익성 */}
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  수정 후
                  {profitabilityChange !== "0.0" && (
                    <Badge 
                      variant="outline"
                      className={`ml-2 flex items-center gap-1 ${
                        Number(profitabilityChange) > 0
                          ? 'border-red-500 text-red-700 bg-red-50'
                          : 'border-blue-500 text-blue-700 bg-blue-50'
                      }`}
                    >
                      {Number(profitabilityChange) > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {profitabilityChange > 0 ? "+" : ""}{profitabilityChange}%
                    </Badge>
                  )}
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className={`bg-white p-2 rounded-lg ${
                    modifiedMetrics.totalPrice !== originalMetrics.totalPrice 
                      ? 'ring-2 ring-offset-2 ring-yellow-200' 
                      : ''
                  }`}>
                    <div className="text-sm text-gray-500">총 가격</div>
                    <div className="text-lg font-medium">₩{modifiedMetrics.totalPrice.toLocaleString()}</div>
                  </div>
                  <div className={`bg-white p-2 rounded-lg ${
                    modifiedMetrics.totalProfit !== originalMetrics.totalProfit 
                      ? 'ring-2 ring-offset-2 ring-yellow-200' 
                      : ''
                  }`}>
                    <div className="text-sm text-gray-500">총 수익</div>
                    <div className="text-lg font-medium">₩{modifiedMetrics.totalProfit.toLocaleString()}</div>
                  </div>
                  <div className={`bg-white p-2 rounded-lg ${
                    modifiedMetrics.profitability !== originalMetrics.profitability 
                      ? 'ring-2 ring-offset-2 ring-yellow-200' 
                      : ''
                  }`}>
                    <div className="text-sm text-gray-500">수익률</div>
                    <div className={`text-lg font-medium ${
                      Number(profitabilityChange) !== 0
                        ? Number(profitabilityChange) > 0 
                          ? 'text-red-500' 
                          : 'text-blue-500'
                        : ''
                    }`}>
                      {modifiedMetrics.profitability}%
                    </div>
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