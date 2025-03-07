import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
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


// 수익성 영향도 레벨을 정의하는 상수
// 각 레벨마다 임계값, 라벨, 색상, 아이콘을 지정
const PROFITABILITY_IMPACT_LEVELS = {
  MUCH_BETTER: { threshold: 100, label: '많이 개선', color: 'border-red-500 text-red-700 bg-red-50', icon: '▲▲' },
  BETTER: { threshold: 10, label: '개선', color: 'border-red-500 text-red-700', icon: '▲' },
  SIMILAR: { threshold: -1, label: '비슷', color: 'border-gray-500 text-gray-700', icon: '•' },
  WORSE: { threshold: -10, label: '하락', color: 'border-blue-500 text-blue-700', icon: '▼' },
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
  '수술': '수술',
  '할증/제도성': '할증/제도성',
  '3대진단': '3대진단',
  '사망후유': '사망후유',
  '기타': '기타',
  '운전/비용': '운전/비용',
  '재물/배상': '재물/배상',
  '골절/화상': '골절/화상',
  '입원일당': '입원일당',
  '의료비': '의료비',
  '치아': '치아',
  '태아출생': '태아출생',
  '재고자산': '재고자산',
  '화재손해': '화재손해',
  '배상책임': '배상책임',
  '통합': '통합',
  '예약': '예약',
  '건물': '건물'
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
  '수술': '수술',
  '할증/제도성': '할증/제도성',
  '3대진단': '3대진단',
  '사망후유': '사망후유',
  '기타': '기타',
  '운전/비용': '운전/비용',
  '재물/배상': '재물/배상',
  '골절/화상': '골절/화상',
  '입원일당': '입원일당',
  '의료비': '의료비',
  '치아': '치아',
  '태아출생': '태아출생',
  '재고자산': '재고자산',
  '화재손해': '화재손해',
  '배상책임': '배상책임',
  '통합': '통합',
  '예약': '예약',
  '건물': '건물'
};

// 금액을 만원 단위로 변환하는 함수 추가
const formatAmountToManWon = (amount) => {
  const manWon = Math.floor(amount / 10000);
  return `${manWon}만원`;
};

// channel별 KMV 목표값 상수 추가
const CHANNEL_KMV_TARGETS = {
  'GA': 1150,
  'TA': 1050,
  'TM': 630
};

const ContractProfitabilityAnalyzer = () => {
  // 상태 관리
  // 현재 선택된 계약 ID
  const [contractId, setContractId] = useState("");
  // 검색 쿼리 상태 추가
  const [searchQuery, setSearchQuery] = useState("");
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
  // 실손 할인 선택 상태 추가
  const [selectedSilsonType, setSelectedSilsonType] = useState(null);
  // 현재 계약 아이템 섹션 접힘 상��� 추가
  const [isContractItemsCollapsed, setIsContractItemsCollapsed] = useState(false);
  // 상태 추가
  const [isContractExpanded, setIsContractExpanded] = useState(false);
  const [isModificationsExpanded, setIsModificationsExpanded] = useState(false);

  // 스크롤을 위한 ref 추가
  const itemListRef = useRef(null);

  // 스크롤 초기화 함수
  const resetScroll = () => {
    if (itemListRef.current) {
      itemListRef.current.scrollTop = 0;
    }
  };

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
    const totals = items.reduce((sum, item) => ({
      totalPrice: sum.totalPrice + item.totalPrice,
      totalProfit: sum.totalProfit + item.totalProfit
    }), { totalPrice: 0, totalProfit: 0 });

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
      
      // 아이템들을 세트별로 그룹화하여 정렬
      const itemsToSort = [...foundContract.availableItems];
      const groups = [];
      const processedItems = new Set();

      // 먼저 세트 아이템들을 그룹화
      itemsToSort.forEach(item => {
        if (processedItems.has(item.id)) return;

        const setInfo = getSetInfo(foundContract.id, item.id);
        if (setInfo) {
          // 세트 아이템인 경우
          const groupItems = setInfo.ids.map(id => 
            itemsToSort.find(i => i.id === id)
          ).filter(Boolean);
          
          // 처리된 아이템들 표시
          setInfo.ids.forEach(id => processedItems.add(id));
          // 모든 그룹 아이템을 추가
          groups.push(...groupItems);
          
          // 세트의 첫 번째 아이템이 해당 세트의 대표 아이템인 경우에만 추가
          // if (setInfo.ids[0] === item.id) {
          //   groups.push(...groupItems);
          // }
        } else if (!processedItems.has(item.id)) {
          // 일반 아이템인 경우
          groups.push(item);
          processedItems.add(item.id);
        }
      });

      setSortedItems(groups);
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
        // 현재 세트의 모든 아이템이 원래 태와 동일한지 확인
        const isSetUnchanged = setInfo.ids.every(id => {
            const originalSetItem = contract?.items.find(i => i.id === id);
            const modSetItem = modifications.find(mod => mod.id === id);
            
            // 원래 있던 아이템이고 수량이 같은 경우 변경 ����음
            if (originalSetItem) {
                // 원래 아이템이 추가된 경우도 true 반환
                if (modSetItem?.action === 'add') {
                    return true; // 수량 변경하여 추가된 경우도 포함
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

    // modType이 'remove'일 때의 로직 수정
    if (modType === 'remove') {
        // 세트 아이템인 경우
        if (setInfo) {
            // 세트 아이템 삭제 로직은 그대로 유지
            const newModifications = modifications.filter(mod => 
                !setInfo.ids.includes(mod.id)
            );
            
            setInfo.ids.forEach(id => {
                const originalSetItem = contract?.items.find(i => i.id === id);
                if (originalSetItem) {
                    newModifications.push({
                        id: originalSetItem.id,
                        action: 'remove',
                        quantity: quantity || item.quantity
                    });
                }
            });
            
            setModifications(newModifications);
        } else {
            // 일반 아이템 삭제 로직 수정
            // 기존 아이템이든 아니든 삭제 처리
            const newModifications = modifications.filter(mod => mod.id !== item.id);
            if (originalItem) {
                newModifications.push({ id: item.id, action: 'remove', quantity: quantity || item.quantity });
            }
            setModifications(newModifications);
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
                // 현재 아이템인 경우 선택된 수량 사용, 그 외의 경우 해당 아이템의 현재 표시된 수량 사용
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
      // theme이 문자열인 경우와 배열�� 경우 모두 처리
      if (Array.isArray(item.theme)) {
        return item.theme.includes(theme);
      }
      return item.theme === theme;
    });
  };

  // ItemCard 컴포넌트를 ItemRow 컴포넌트로 변경
  const ItemRow = ({ item, showThemeBadge = false }) => {
    const status = getItemStatus(item);
    
    const getItemDetails = () => {
      return contract?.availableItems.find(i => i.id === item.id);
    };

    const details = getItemDetails();

    const getCurrentContractQuantity = () => {
      return contract?.items.find(i => i.id === item.id)?.quantity;
    };

    // 수량 상태 초기화 로직 수정
    const [previewQuantity, setPreviewQuantity] = useState(() => {
      const existingMod = modifications.find(mod => mod.id === item.id);
      const details = getItemDetails();
      
      if (existingMod && existingMod.action !== 'remove') {
        return existingMod.quantity;
      }
      if (details?.recommendedQuantity) {
        return details.recommendedQuantity;
      }

      return 0;
    });

    // handleQuantityChange 함수 수정
    const handleQuantityChange = (e) => {
      const newQuantity = Number(e.target.value);
      setPreviewQuantity(newQuantity);
      
      // 세트 아이템인 경우와 일반 아이템인 경우를 구분
      const setInfo = getSetInfo(contract?.id, item.id);
      
      if (setInfo) {
        // 현재 아이템의 수량만 변경
        if (status.included || status.originallyIncluded) {
          toggleItem(item, newQuantity, status.originallyIncluded ? 'modify' : 'add');
        }
      } else {
        // 일반 아이템 처리 (기존과 동일)
        if (status.included || status.originallyIncluded) {
          toggleItem(item, newQuantity, status.originallyIncluded ? 'modify' : 'add');
        }
      }
    };

    // 실제 아이템 추가/수정은 + 버튼 클릭시에만 발생
    const handleAddItem = () => {
      const setInfo = getSetInfo(contract?.id, item.id);
      
      // 세트 아이템인 경우
      if (setInfo) {
          // 세트의 모든 아이템에 대한 기존 수정사항 제거
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
      // 모든 경우에 availableItems의 값 사용
      const details = contract?.availableItems.find(i => i.id === item.id);
      return details?.priceAndProfitByQuantity[quantity] || { totalPrice: 0, totalProfit: 0 };
    };

    const metrics = getMetricsForQuantity(previewQuantity);
    const profitability = metrics.totalPrice > 0 
      ? ((metrics.totalProfit / metrics.totalPrice) * 100).toFixed(1) 
      : '0.0';

    // 세트 정보 가져오기
    const setInfo = getSetInfo(contract?.id, item.id);
    const isSetHeader = setInfo?.ids[0] === item.id;
    const isSetMember = !!setInfo;

    // 세트 전체 메트릭스 계산 함수 추가
    const calculateSetMetrics = () => {
      if (!setInfo || !isSetHeader) return null;

      const setMetrics = setInfo.ids.reduce((acc, id) => {
        const itemDetails = contract?.availableItems.find(i => i.id === id);
        const itemMod = modifications.find(mod => mod.id === id);
        const quantity = itemMod?.quantity || itemDetails?.recommendedQuantity || 0;
        const metrics = itemDetails?.priceAndProfitByQuantity[quantity] || { totalPrice: 0, totalProfit: 0 };

        return {
          totalPrice: acc.totalPrice + metrics.totalPrice,
          totalProfit: acc.totalProfit + metrics.totalProfit
        };
      }, { totalPrice: 0, totalProfit: 0 });

      const profitability = setMetrics.totalPrice > 0 
        ? ((setMetrics.totalProfit / setMetrics.totalPrice) * 100).toFixed(1) 
        : '0.0';

      return {
        ...setMetrics,
        profitability
      };
    };

    // 세트 전체 영향도 계산
    const calculateSetProfitabilityImpact = () => {
      if (!setInfo || !isSetHeader || !contract) return null;

      const currentMetrics = calculateMetrics(contract.items);
      const setMetrics = calculateSetMetrics();

      if (!setMetrics) return null;

      const newTotalPrice = currentMetrics.totalPrice + setMetrics.totalPrice;
      const newTotalProfit = currentMetrics.totalProfit + setMetrics.totalProfit;
      
      const currentProfitability = currentMetrics.totalPrice > 0 
        ? (currentMetrics.totalProfit / currentMetrics.totalPrice) * 100 
        : 0;
      const newProfitability = newTotalPrice > 0 
        ? (newTotalProfit / newTotalPrice) * 100 
        : 0;

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
        value: `${impact > 0 ? '+' : ''}${Math.floor(impact)}%`,  // Math.floor() 추가
        color: level.color
      };
    };

    // 동시 판매 불가능한 아이템 표시를 위한 배지 추가
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
      const originalItem = contract?.items.find(i => i.id === item.id);
        if (originalItem) {
          // 원본 아이템의 정보를 모두 포함하여 toggleItem 호출
          toggleItem(item, originalItem.quantity, 'remove');
        }
        else {
          toggleItem(item, null, 'remove');  // toggleItem remove 로직 사용
        }
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
          badge: <Badge variant="outline" className="border-yellow-500 text-yellow-700 bg-yellow-50">수량 변경</Badge>
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

        // 원래 상태가 아닌 경우 기존 로직 수행
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

    // 세트 아이템 표시 여부를 위한 상태 추가
    const [isSetExpanded, setIsSetExpanded] = useState(true);

    // 일반 아이템의 영향도 계산 함수 추가
    const calculateItemProfitabilityImpact = () => {
      if (!contract || (isSetMember && !isSetHeader)) return null;

      const currentMetrics = calculateMetrics(contract.items);
      
      // 현재 계약에 포함된 아이템인 경우 원본 값 사용
      const originalItem = contract.items.find(i => i.id === item.id);
      const itemMetrics = originalItem 
        ? { totalPrice: originalItem.totalPrice, totalProfit: originalItem.totalProfit }
        : getMetricsForQuantity(previewQuantity);

      if (!itemMetrics) return null;

      const newTotalPrice = currentMetrics.totalPrice + itemMetrics.totalPrice;
      const newTotalProfit = currentMetrics.totalProfit + itemMetrics.totalProfit;
      
      const currentProfitability = currentMetrics.totalPrice > 0 
        ? (currentMetrics.totalProfit / currentMetrics.totalPrice) * 100 
        : 0;
      const newProfitability = newTotalPrice > 0 
        ? (newTotalProfit / newTotalPrice) * 100 
        : 0;

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
        value: `${impact > 0 ? '+' : ''}${Math.floor(impact)}%`,  // Math.floor() 추가
        color: level.color
      };
    };

    // 영향도 표시를 위한 값 계산
    const profitabilityImpact = isSetHeader 
      ? calculateSetProfitabilityImpact() 
      : !isSetMember 
        ? calculateItemProfitabilityImpact()
        : null;

    return (
      <>
        {/* 세트 요약 행을 먼저 렌더링 */}
        {isSetHeader && (
          <>
            <tr 
              className="border-b last:border-b-0 bg-purple-50 cursor-pointer hover:bg-purple-100"
              onClick={() => setIsSetExpanded(!isSetExpanded)}
            >
              <td className="px-2 py-1 text-[12px]">
                <div className="flex items-center gap-1">
                  <Badge variant="outline" className="bg-purple-50 border-purple-200 text-purple-700">
                    세트 ({setInfo.ids.length}개)
                  </Badge>
                  <span className="text-purple-700 ml-1">
                    {isSetExpanded ? '▼' : '▶'}
                  </span>
                  {/* 세트의 모든 아이템의 테마를 수집하고 중복 제거하여 표시 */}
                  {showThemeBadge && (
                    <>                   
                      {Array.from(new Set(
                        setInfo.ids
                          .map(id => contract?.availableItems.find(i => i.id === id))
                          .filter(Boolean)
                          .flatMap(item => Array.isArray(item.theme) ? item.theme : [item.theme])
                      )).map(theme => (
                        <Badge key={theme} variant="outline" className="text-[12px] px-1 ml-1">
                          {THEME_LABELS[THEME_MAPPING[theme]] || theme}
                        </Badge>
                      ))}
                    </>
                  )}
                </div>
              </td>
              <td className="px-2 py-1 text-[12px] text-center">
                {profitabilityImpact && (
                  <Badge 
                    variant="outline" 
                    className={profitabilityImpact.color}
                  >
                    {profitabilityImpact.value}
                  </Badge>
                )}
              </td>
              <td className="px-2 py-1 text-[12px]">
                {/* 세트 전체 가입금액은 표시하지 않음 */}
              </td>
              <td className="px-2 py-1 text-[12px] text-right">
                ₩{Math.floor(calculateSetMetrics()?.totalPrice || 0).toLocaleString()}
              </td>
              <td className="px-2 py-1 text-[12px] text-right">
                ₩{Math.floor(calculateSetMetrics()?.totalProfit || 0).toLocaleString()}
              </td>
              <td className="px-2 py-1 text-[12px] text-right">
                {Math.floor(calculateSetMetrics()?.profitability || 0).toLocaleString()}%
              </td>
              <td className="px-2 py-1 text-[12px]">
                {/* 세트 전체 행에는 액션 버튼 없음 */}
              </td>
            </tr>
           
          </>
        )}

        {/* 세트 멤버 연결선 */}
        {isSetMember && (
          <tr className={`border-b last:border-b-0 ${
            status.modified ? (
              status.action === 'remove' 
                ? 'bg-red-50' // 삭제 예정
                : status.originallyIncluded 
                  ? 'bg-yellow-50' // 수량 변경
                  : 'bg-green-50' // 새로 추가
            ) : status.originallyIncluded 
              ? 'bg-blue-50' // 현재 계약
              : 'bg-white' // 기본 세트 멤버 스타일
          }`}>
            <td className="px-2 py-1 text-[12px]">
              <div className="flex items-center gap-1 ml-6">
                <span className="text-400 mr-1">└</span>
                <span className="font-medium text-[12px] whitespace-nowrap">{details?.name}</span>
                {showThemeBadge && details?.theme && (
                  Array.isArray(details.theme) 
                    ? details.theme.map(t => (
                        <Badge key={t} variant="outline" className="text-[12px] px-1">
                          {THEME_LABELS[THEME_MAPPING[t]] || t}
                        </Badge>
                      ))
                    : <Badge variant="outline" className="text-[12px] px-1">
                        {THEME_LABELS[THEME_MAPPING[details.theme]] || details.theme}
                      </Badge>
                )}
              </div>
            </td>
            <td className="px-2 py-1 text-[12px] text-center">
              {/* 세트 멤버는 개별 영향도를 표시하지 않음 */}
            </td>
            <td className="px-2 py-1 text-[12px]">
              <select 
                className="border rounded px-1 py-0.5 text-[12px] w-20"
                value={previewQuantity}
                onChange={handleQuantityChange}
                disabled={!contract}
              >
                {details?.availableQuantities?.map(q => (
                  <option key={q} value={q}>{formatAmountToManWon(q)}</option>
                ))}
              </select>
            </td>
            <td className="px-2 py-1 text-[12px] text-right">₩{Math.floor(metrics.totalPrice).toLocaleString()}</td>
            <td className="px-2 py-1 text-[12px] text-right">₩{Math.floor(metrics.totalProfit).toLocaleString()}</td>
            <td className="px-2 py-1 text-[12px] text-right">{Math.floor(profitability)}%</td>
            <td className="px-2 py-1 text-[12px]">
              <div className="flex justify-end gap-1">
                {status.modified && status.action === 'remove' ? (
                  <button
                    onClick={() => handleReAddItem()}
                    className="px-1 py-0.5 text-[12px] text-green-600 hover:bg-green-100 rounded"
                  >
                    +
                  </button>
                ) : status.originallyIncluded || status.modified ? (
                  <button
                    onClick={() => handleRemoveItem()}
                    className="px-1 py-0.5 text-[12px] text-red-600 hover:bg-red-100 rounded"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddItem()}
                    className="px-1 py-0.5 text-[12px] text-green-600 hover:bg-green-100 rounded"
                  >
                    +
                  </button>
                )}
              </div>
            </td>
          </tr>
        )}

        {/* 일반 아이템 행 (세트 멤버가 아닌 경우에만 렌더링) */}
        {!isSetMember && (
          <tr className={`border-b last:border-b-0 ${statusInfo.style}`}>
            <td className="px-2 py-1 text-[12px] w-[80%]">
              <div className={`flex items-center gap-1 ${isSetMember ? 'ml-6' : ''}`}>
                {/* 세트 표시 아이콘 */}
                {isSetHeader && (
                  <Badge variant="outline" className="text-[12px] px-1 bg-purple-50 border-purple-200 text-purple-700">
                    세트
                  </Badge>
                )}
                <span className="font-medium text-[12px] whitespace-nowrap">{details?.name}</span>
                {showThemeBadge && details?.theme && (
                  Array.isArray(details.theme) 
                    ? details.theme.map(t => (
                        <Badge key={t} variant="outline" className="text-[12px] px-1">
                          {THEME_LABELS[THEME_MAPPING[t]] || t}
                        </Badge>
                      ))
                    : <Badge variant="outline" className="text-[12px] px-1">
                        {THEME_LABELS[THEME_MAPPING[details.theme]] || details.theme}
                      </Badge>
                )}
              </div>
            </td>
            <td className="px-2 py-1 text-[12px] w-[10%] text-center">
              {profitabilityImpact && (
                <Badge 
                  variant="outline" 
                  className={profitabilityImpact.color}
                >
                  {profitabilityImpact.value}
                </Badge>
              )}
            </td>
            <td className="px-2 py-1 text-[12px] w-[10%]">
              {(
                <select 
                  className="border rounded px-1 py-0.5 text-[12px] w-20"
                  value={previewQuantity}
                  onChange={handleQuantityChange}
                  disabled={!contract}
                >
                  {details?.availableQuantities?.map(q => (
                    <option key={q} value={q}>{formatAmountToManWon(q)}</option>
                  ))}
                </select>
              )}
            </td>
            <td className="px-2 py-1 text-[12px] text-right w-[10%]">₩{Math.floor(metrics.totalPrice).toLocaleString()}</td>
            <td className="px-2 py-1 text-[12px] text-right w-[10%]">₩{Math.floor(metrics.totalProfit).toLocaleString()}</td>
            <td className="px-2 py-1 text-[12px] text-right w-[10%]">{Math.floor(profitability)}%</td>
            <td className="px-2 py-1 text-[12px] w-[5%]">
              <div className="flex justify-end gap-1">
                {status.modified && status.action === 'remove' ? (
                  <button
                    onClick={() => handleReAddItem()}
                    className="px-1 py-0.5 text-[12px] text-green-600 hover:bg-green-100 rounded"
                  >
                    +
                  </button>
                ) : status.originallyIncluded || status.modified ? (
                  <button
                    onClick={() => handleRemoveItem()}
                    className="px-1 py-0.5 text-[12px] text-red-600 hover:bg-red-100 rounded"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddItem()}
                    className="px-1 py-0.5 text-[12px] text-green-600 hover:bg-green-100 rounded"
                  >
                    +
                  </button>
                )}
              </div>
            </td>
          </tr>
        )}
      </>
    );
  };

  // 원본 계약의 메트릭스 계산 (수정)
  const originalMetrics = useMemo(() => {
    if (!contract) return { totalPrice: 0, totalProfit: 0, profitability: '0.0' };
    
    // items 배열의 값들을 직접 합산
    const totals = contract.items.reduce((sum, item) => ({
      totalPrice: sum.totalPrice + item.totalPrice,
      totalProfit: sum.totalProfit + item.totalProfit
    }), { totalPrice: 0, totalProfit: 0 });

    const profitability = totals.totalPrice > 0 
      ? ((totals.totalProfit / totals.totalPrice) * 100).toFixed(1) 
      : '0.0';

    return {
      ...totals,
      profitability
    };
  }, [contract]);

  // 수정된 getModifiedItems 함수
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
          const itemDetails = contract.availableItems.find(i => i.id === mod.id);
          const metrics = itemDetails?.priceAndProfitByQuantity[mod.quantity] || { totalPrice: 0, totalProfit: 0 };
          
          if (existingIndex !== -1) {
              // 기존 아이템 수정
              items[existingIndex] = {
                  id: mod.id,
                  quantity: mod.quantity,
                  totalPrice: metrics.totalPrice,
                  totalProfit: metrics.totalProfit
              };
          } else {
              // 새 아이템 추가
              items.push({
                  id: mod.id,
                  quantity: mod.quantity,
                  totalPrice: metrics.totalPrice,
                  totalProfit: metrics.totalProfit
              });
          }
      }
  });

  // 세트 아이템 처리 추가
  const setItems = new Set();
  items.forEach(item => {
      const setInfo = getSetInfo(contract.id, item.id);
      if (setInfo) {
          setInfo.ids.forEach(id => setItems.add(id));
      }
  });

  // 세트 아이템을 전체 아이템 목록에 추가
  setItems.forEach(id => {
      const itemDetails = contract.availableItems.find(i => i.id === id);
      if (itemDetails && !items.some(item => item.id === id)) {
          items.push({
              id: itemDetails.id,
              quantity: itemDetails.recommendedQuantity, // 기본 수량으로 추가
              totalPrice: itemDetails.priceAndProfitByQuantity[itemDetails.recommendedQuantity]?.totalPrice || 0,
              totalProfit: itemDetails.priceAndProfitByQuantity[itemDetails.recommendedQuantity]?.totalProfit || 0
          });
      }
  });

  return items;
}, [contract, modifications]);



  // 수정된 계약의 메트릭스 계산
  const modifiedMetrics = useMemo(() => {
    if (!contract) return { totalPrice: 0, totalProfit: 0, profitability: '0.0' };
    
    const modifiedItems = getModifiedItems();
    const metrics = calculateMetrics(modifiedItems);
    
    // 실손 할인은 별도로 표시하고 KMV에는 반영하지 않음
    return metrics;
    
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
        <CardHeader className="py-1">
        <h3 className="text-[15px] font-bold">계약 테마 구성</h3>
        </CardHeader>
        <CardContent className="py-1">
          <div className="space-y-2">
            {/* 프로그레스 바 컨테이너 */}
            <div className="w-full h-4 bg-gray-100 rounded-full flex">
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
            <div className="flex flex-wrap justify-center gap-4 text-[12px]">
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

  // 사용 가능한 테마만 필터링하는 함수 수정
  const getAvailableThemes = useMemo(() => {
    if (!sortedItems?.length) return ["all"];
    
    // 모든 아이템의 테마를 수집
    const availableThemes = new Set(["all"]);
    
    sortedItems.forEach(item => {
      if (Array.isArray(item.theme)) {
        item.theme.forEach(theme => availableThemes.add(theme));
      } else if (item.theme) {
        availableThemes.add(item.theme);
      }
    });
    
    // Set을 배열로 변환하고 정렬
    return Array.from(availableThemes).sort((a, b) => {
      // "all"은 항상 첫 번째
      if (a === "all") return -1;
      if (b === "all") return 1;
      
      // "기타"는 항상 마지막
      if (a === "기타") return 1;
      if (b === "기타") return -1;
      
      // 나머지는 알파벳 순
      return a.localeCompare(b);
    });
  }, [sortedItems]);

  // Tabs 컴포넌트 부분 수정
  <Tabs 
    defaultValue="all" 
    className="w-full"
    onValueChange={(value) => setSelectedType(value)}
  >
    <TabsList className="mb-4 flex flex-wrap gap-1">
      {getAvailableThemes.map(theme => (
        <TabsTrigger key={theme} value={theme}>
          {theme === "all" ? "전체" : THEME_LABELS[theme] || theme}
        </TabsTrigger>
      ))}
    </TabsList>

    {getAvailableThemes.map(theme => (
      <TabsContent key={theme} value={theme} className="space-y-2">
        {(sortedItems || [])
          .filter(item => {
            if (theme === "all") return true;
            
            // theme이 배열인 경우와 문자열인 경우 모두 처리
            const itemThemes = Array.isArray(item.theme) ? item.theme : [item.theme];
            return itemThemes.includes(theme);
          })
          .map(item => (
            <ItemRow 
              key={item.id} 
              item={item} 
              showThemeBadge={theme === "all"} 
            />
          ))}
      </TabsContent>
    ))}
  </Tabs>

  // JSX 렌더링
  return (
    <div className="flex flex-col h-screen">
      {/* 메인 컨텐츠 영역 */}
      <div className="flex flex-1 p-2 gap-2 overflow-hidden">
        {/* 왼쪽 패널*/}
        <div className="w-[50%] flex flex-col h-full overflow-hidden gap-4">
          {/* 검색과 기본 정보를 포함하는 카드 */}
          <Card className="w-full shadow-sm flex-shrink-0">
            <CardHeader className="py-1">
              <CardTitle>
                <h3 className="text-[15px] font-bold">계약 검색</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="py-1">
              <div className="flex items-center gap-4">
                {/* 검색 영역 */}
                <div className="flex items-center gap-2">
                  <input 
                    type="text"
                    placeholder="계약 번호 입력"
                    className="w-[200px] px-2 py-1 border rounded text-[12px]"
                    value={contractId}
                    onChange={(e) => setContractId(e.target.value)}
                  />
                  {contract?.silson_discount && (
                    <select
                      value={selectedSilsonType || ''}
                      onChange={(e) => setSelectedSilsonType(e.target.value)}
                      className="w-[100px] p-2 border rounded bg-white"
                    >
                      <option value="">차감선택</option>
                      {contract.silson_discount.map(discount => (
                        <option key={discount.tag} value={discount.tag}>
                          {discount.tag}
                        </option>
                      ))}
                    </select>
                  )}
                  <button
                    className="px-4 py-1 bg-red-500 text-white rounded flex items-center gap-2 hover:bg-red-600"
                    onClick={searchContract}
                  >
                    <Search size={12} />
                    검색
                  </button>
                </div>

                {/* 기본 정보 영역 */}
                <div className="border-l pl-4">
                  {contract ? (
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-gray-500">채널:</span>
                          <span className="text-sm font-medium">{contract.channel}</span>
                        </div>
                        <span className="text-sm text-gray-300">•</span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-gray-500">상품명:</span>
                          <span className="text-sm font-medium">{contract.unt_pd_nm}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-gray-500">나이:</span>
                          <span className="text-sm font-medium">{contract.age}세</span>
                        </div>
                        <span className="text-sm text-gray-300">•</span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-gray-500">성별:</span>
                          <span className="text-sm font-medium">{contract.gndr}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 text-center">
                      계약을 검색해주세요
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 테마 비율 표시 */}
          {getThemeRatioDisplay()}

          {/* 현재 계약 아이템과 중간 패널을 가로로 배치 */}
          <div className="flex flex-1 gap-2 overflow-hidden">
            <Card className={`flex flex-col overflow-hidden ${
              isContractExpanded ? 'flex-[3]' : 'flex-[1]'
            } ${
              isModificationsExpanded ? 'hidden' : ''  // 추가: 수정 사항이 확대되면 축소
            }`}>
              <CardHeader className="py-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-[15px] font-semibold">현재 계약 아이템</h3>
                  <button
                    onClick={() => {
                      setIsContractExpanded(!isContractExpanded);
                      setIsModificationsExpanded(false); // 다른 카드는 축소
                    }}
                    className={`
                      inline-flex items-center justify-center
                      min-w-[64px] px-3 py-1.5
                      text-[12px] font-medium
                      rounded-md shadow-sm
                      transition-all duration-200
                      ${isContractExpanded 
                        ? 'bg-white text-black-500 border border-black-500 hover:bg-blue-50 active:bg-blue-100' 
                        : 'bg-white text-black-500 border border-black-500 hover:bg-blue-50 active:bg-blue-100'
                      }
                    `}
                  >
                    {isContractExpanded ? '접기' : '펼치기'}
                  </button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-2 py-1 text-left text-[12px] w-[40%]">아이템명</th>
                        <th className="px-2 py-1 text-left text-[12px] w-[3%]"></th>
                        <th className="px-2 py-1 text-left text-[12px] w-[13%]">가입금액</th>
                        {isContractExpanded && (
                          <>
                          <th className="px-2 py-1 text-left text-[12px] w-[10%]">월납P</th>
                          <th className="px-2 py-1 text-left text-[12px] w-[10%]">KMV</th>
                          <th className="px-2 py-1 text-left text-[12px] w-[10%]">KMV(%)</th>
                          </>
                        )}
                        <th className="px-2 py-1 text-[12px] w-[5%]"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {contract?.items.reduce((acc, item) => {
                        const setInfo = getSetInfo(contract.id, item.id);
                        
                        // 이미 처리된 세트의 첫 번째 아이템인 경우에만 세트 전체를 처리
                        if (setInfo) {
                          const setItems = contract.items.filter(i => setInfo.ids.includes(i.id));
                          const firstSetItem = setItems[0];
                          
                          // 현재 아이템이 세트의 첫 번째 아이템인 경우에만 세트 전체를 처리
                          if (item.id === firstSetItem.id) {
                            const setMetrics = setItems.reduce((sum, i) => ({
                              totalPrice: sum.totalPrice + i.totalPrice,
                              totalProfit: sum.totalProfit + i.totalProfit
                            }), { totalPrice: 0, totalProfit: 0 });

                          // 세트 헤더 추가
                          acc.push({
                            type: 'set-header',
                            setId: setInfo.id,
                            itemId: item.id,
                            element: (
                              <tr key={`set-${setInfo.id}`} className="border-b last:border-b-0 bg-purple-50">
                                <td className="px-2 py-1 text-[12px]">
                                  <div className="flex items-center gap-1">
                                    <Badge variant="outline" className="bg-purple-50 border-purple-200 text-purple-700">
                                      세트 ({setItems.length}개)
                                    </Badge>
                                  </div>
                                </td>
                                <td className="px-2 py-1 text-[12px] text-center"></td>
                                <td className="px-2 py-1 text-[12px]"></td>
                                  {isContractExpanded && (
                                    <>
                                  <td className="px-2 py-1 text-[12px] text-right">
                                    ₩{Math.floor(setMetrics.totalPrice).toLocaleString()}
                                  </td>
                                  <td className="px-2 py-1 text-[12px] text-right">
                                    ₩{Math.floor(setMetrics.totalProfit).toLocaleString()}
                                  </td>
                                  <td className="px-2 py-1 text-[12px] text-right">
                                    {setMetrics.totalPrice > 0 
                                      ? Math.floor((setMetrics.totalProfit / setMetrics.totalPrice) * 100)
                                      : 0}%
                                  </td>
                                  </>
                                  )}
                                  <td className="px-2 py-1 text-[12px]"></td>
                              </tr>
                            )
                          });

                          // 세트의 모든 멤버 추가
                          setItems.forEach(setItem => {
                            acc.push({
                              type: 'set-member',
                              setId: setInfo.id,
                              itemId: setItem.id,
                              element: (
                                <tr key={setItem.id} className="border-b last:border-b-0">
                                  <td className="px-2 py-1 text-[12px]">
                                    <div className="flex items-center gap-1 ml-6 whitespace-nowrap">
                                      <span className="text-purple-400 mr-1">└</span>
                                      {setItem.name}
                                    </div>
                                  </td>
                                  <td className="px-2 py-1 text-[12px] text-center"></td>
                                  <td className="px-2 py-1 text-[12px] whitespace-nowrap">
                                    {formatAmountToManWon(setItem.quantity)}
                                  </td>
                                  {isContractExpanded && (
                                    <>
                                  <td className="px-2 py-1 text-[12px] text-right">
                                    ₩{Math.floor(setItem.totalPrice).toLocaleString()}
                                  </td>
                                  <td className="px-2 py-1 text-[12px] text-right">
                                    ₩{Math.floor(setItem.totalProfit).toLocaleString()}
                                  </td>
                                  <td className="px-2 py-1 text-[12px] text-right">
                                    {setItem.totalPrice > 0 
                                      ? Math.floor((setItem.totalProfit / setItem.totalPrice) * 100)
                                      : 0}%
                                  </td>
                                  </>
                                  )}
                                  <td className="px-2 py-1 text-[12px]">
                                    <div className="flex justify-end gap-1">
                                      <button
                                        onClick={() => toggleItem(setItem, null, 'remove')}
                                        className="px-1 py-0.5 text-[12px] text-red-600 hover:bg-red-100 rounded"
                                      >
                                        -
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              )
                            });
                          });
                        }
                      } else {
                        // 일반 아이템 추가
                        acc.push({
                          type: 'single',
                          itemId: item.id,
                          element: (
                            <tr key={item.id} className="border-b last:border-b-0">
                              <td className="font-medium text-[12px] whitespace-nowrap whitespace-nowrap">{item.name}</td>
                              <td className="px-2 py-1 text-[12px] text-center"></td>
                              <td className="px-2 py-1 text-[12px] whitespace-nowrap">
                                {formatAmountToManWon(item.quantity)}
                              </td>
                              {isContractExpanded && (
                                <>
                              <td className="px-2 py-1 text-[12px] text-right">
                                ₩{Math.floor(item.totalPrice).toLocaleString()}
                              </td>
                              <td className="px-2 py-1 text-[12px] text-right">
                                ₩{Math.floor(item.totalProfit).toLocaleString()}
                              </td>
                              <td className="px-2 py-1 text-[12px] text-right">
                                {item.totalPrice > 0 
                                  ? Math.floor((item.totalProfit / item.totalPrice) * 100)
                                  : 0}%
                              </td>
                              </>
                              )}
                              <td className="px-2 py-1 text-[12px]">
                                <div className="flex justify-end gap-1">
                                  <button
                                    onClick={() => toggleItem(item, null, 'remove')}
                                    className="px-1 py-0.5 text-[12px] text-red-600 hover:bg-red-100 rounded"
                                  >
                                    -
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        });
                      }
                      return acc;
                    }, []).map(row => row.element)}
                    {(!contract?.items || contract.items.length === 0) && (
                      <tr>
                        <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                          계약에 포함된 아이템이 없습니다
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
            </CardContent>
          </Card>

          {/* 수정 사항 부분 - isContractExpanded가 true일 때는 숨김 */}
          <div className={`flex-1 flex flex-col gap-2 overflow-hidden ${
            isContractExpanded ? 'hidden' : ''
          }`}>
            {/* 수정 사항 아이템 */}
            <Card className={`flex flex-col overflow-hidden ${
              isModificationsExpanded ? 'flex-[3]' : 'flex-[2]'
            }`}>
              <CardHeader className="py-1">
                <div className="flex justify-between items-center">
                  <CardTitle>
                    <h3 className="text-[15px] font-semibold">수정 사항</h3>
                  </CardTitle>
                  <button
                    onClick={() => {
                      setIsModificationsExpanded(!isModificationsExpanded);
                      setIsContractExpanded(false); // 다른 카드는 축소
                    }}
                    className={`
                      inline-flex items-center justify-center
                      min-w-[64px] px-3 py-1.5
                      text-[12px] font-medium
                      rounded-md shadow-sm
                      transition-all duration-200
                      ${isModificationsExpanded 
                        ? 'bg-white text-black-500 border border-black-500 hover:bg-blue-50 active:bg-blue-100' 
                        : 'bg-white text-black-500 border border-black-500 hover:bg-blue-50 active:bg-blue-100'
                      }
                    `}
                  >
                    {isModificationsExpanded ? '접기' : '펼치기'}
                  </button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto">
                <div className="overflow-auto max-h-full">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="border-b">
                        <th className="px-2 py-1 text-left text-[12px] w-[10%]">아이템명</th>
                        <th className="px-2 py-1 text-left text-[12px] w-[10%]">증가율</th>
                        <th className="px-2 py-1 text-left text-[12px] w-[10%]">가입금액</th>
                        <th className="px-2 py-1 text-left text-[12px] w-[10%]">월납P</th>
                        <th className="px-2 py-1 text-left text-[12px] w-[10%]">KMV</th>
                        <th className="px-2 py-1 text-left text-[12px] w-[10%]">KMV(%)</th>
                        <th className="px-2 py-1 text-left w-[1%]"></th>
                      </tr>
                    </thead>
                    <tbody>
                    {modifications.map(mod => (
                    <ItemRow key={mod.id} item={mod} />
                  ))}
                    </tbody>
                  </table>
                  {modifications.length === 0 && (
                    <div className="text-center text-gray-500 py-4">
                      수정 사항이 없습니다
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* 현재 계약 수익성 */}
            <Card className={`h-auto ${
              isModificationsExpanded ? 'hidden' : ''  // 수정 사항이 확대되면 숨김
            }`}>
              <div className="h-full p-2">
                <div className="flex items-center gap-1 mb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">현재 계약</CardTitle>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {/* 월납P */}
                  <div className="bg-gray-50 rounded-md p-1 text-center">
                    <div className="text-[12px] text-gray-500 mb-1">월납P&nbsp;&nbsp;
                      <span className="text-sm font-semibold text-gray-900">
                        ₩{Math.floor(originalMetrics.totalPrice).toLocaleString()}
                      </span>
                    </div>
                  </div>

              {/* KMV */}
              <div className="bg-gray-50 rounded-md p-1 text-center">
                <div className="flex flex-col">
                  <div className="text-[12px] text-gray-500 mb-1">KMV&nbsp;&nbsp;
                  <span className="text-sm font-semibold text-gray-900">
                    ₩{Math.floor(originalMetrics.totalProfit).toLocaleString()}
                  </span>
                  {selectedSilsonType && contract?.silson_discount && (
                    <div className="text-[12px] text-blue-600 mt-1 truncate" title={`차감 KMV: ₩${Math.floor(contract.silson_discount.find(d => d.tag === selectedSilsonType)?.kmv_adj || 0).toLocaleString()}`}>
                      차감: ₩{Math.floor(contract.silson_discount.find(d => d.tag === selectedSilsonType)?.kmv_adj || 0).toLocaleString()}
                    </div>
                  )}
                  </div>
                </div>
              </div>

              {/* KMV(%) */}
              <div className="bg-gray-50 rounded-md p-1 text-center">
                <div className="flex flex-col">
                  <div className="text-[12px] text-gray-500 mb-1">KMV(%)&nbsp;&nbsp;
                  <span className="text-sm font-semibold text-gray-900">
                    {Math.floor(originalMetrics.profitability)}%
                  </span>
                  {selectedSilsonType && contract?.silson_discount && (
                    <div className="text-[12px] text-blue-600 mt-1 truncate" title={`차감 후 KMV(%): ${Math.floor(((originalMetrics.totalProfit + (contract.silson_discount.find(d => d.tag === selectedSilsonType)?.kmv_adj || 0)) / originalMetrics.totalPrice) * 100)}%`}>
                      차감 후: {Math.floor(((originalMetrics.totalProfit + (contract.silson_discount.find(d => d.tag === selectedSilsonType)?.kmv_adj || 0)) / originalMetrics.totalPrice) * 100)}%
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

            {/* 수정 후 계약 수익성 */}
            <Card className={`h-auto ${
              isModificationsExpanded ? 'hidden' : ''  // 수정 사항이 확대되면 숨김
            }`}>
              <div className="h-full p-2">
                <div className="flex items-center gap-1 mb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">수정 후</CardTitle>

                {/* 영향도 배지 추가 */}
                {modifications.length > 0 && (() => {
                  const currentMetrics = calculateMetrics(contract.items);
                  const newTotalPrice = modifiedMetrics.totalPrice;
                  const newTotalProfit = modifiedMetrics.totalProfit;
                  
                  const currentProfitability = currentMetrics.totalPrice > 0 
                    ? (currentMetrics.totalProfit / currentMetrics.totalPrice) * 100 
                    : 0;
                  const newProfitability = newTotalPrice > 0 
                    ? (newTotalProfit / newTotalPrice) * 100 
                    : 0;

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

                  return (
                    <Badge 
                      variant="outline" 
                      className={level.color}
                    >
                      {`${impact > 0 ? '+' : ''}${Math.floor(impact)}%`}
                    </Badge>
                  );
                })()}
            </div>
            <div className="grid grid-cols-3 gap-4">
            {/* 월납P */}
            <div className={`bg-gray-50 rounded-md p-1 text-center ${
              modifiedMetrics.totalPrice !== originalMetrics.totalPrice 
                ? 'ring-2 ring-yellow-200' 
                : ''
            }`}>
              <div className="flex flex-col">
                <div className="text-[12px] text-gray-500 mb-1">월납P&nbsp;&nbsp;
                <span className="text-sm font-semibold text-gray-900">
                  ₩{Math.floor(modifiedMetrics.totalPrice).toLocaleString()}
                </span>
                {modifications.length > 0 && (
                  <div className="text-[12px] text-blue-600 mt-1">
                    {(Math.floor(modifiedMetrics.totalPrice) - Math.floor(originalMetrics.totalPrice)) > 0 ? '+' : ''}
                    ₩{(Math.floor(modifiedMetrics.totalPrice) - Math.floor(originalMetrics.totalPrice)).toLocaleString()}
                  </div>
                )}
                </div>
              </div>
            </div>

              {/* KMV */}
              <div className={`bg-gray-50 rounded-md p-1 text-center ${
                modifiedMetrics.totalProfit !== originalMetrics.totalProfit 
                  ? 'ring-2 ring-yellow-200' 
                  : ''
              }`}>
                <div className="flex flex-col">
                  <div className="text-[12px] text-gray-500 mb-1">KMV&nbsp;&nbsp;
                  <span className="text-sm font-semibold text-gray-900">
                    ₩{Math.floor(
                      modifiedMetrics.totalProfit + 
                      (selectedSilsonType && contract?.silson_discount 
                        ? (contract.silson_discount.find(d => d.tag === selectedSilsonType)?.kmv_adj || 0) 
                        : 0)
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
              </div>

              {/* KMV(%) */}
              <div className={`bg-gray-50 rounded-md p-1 text-center ${
                modifiedMetrics.profitability !== originalMetrics.profitability 
                  ? 'ring-2 ring-yellow-200' 
                  : ''
              }`}>
                <div className="flex flex-col">
                  <div className="text-[12px] text-gray-500 mb-1">KMV(%)&nbsp;&nbsp;
                  <span className={`text-sm font-semibold ${
                    contract?.channel ? (
                      ((modifiedMetrics.totalProfit + 
                        (selectedSilsonType && contract?.silson_discount 
                          ? (contract.silson_discount.find(d => d.tag === selectedSilsonType)?.kmv_adj || 0) 
                          : 0)) / modifiedMetrics.totalPrice) * 100 >= CHANNEL_KMV_TARGETS[contract.channel]
                        ? 'text-red-500'
                        : 'text-blue-500'
                    ) : 'text-gray-900'
                  }`}>
                    {Math.floor(
                      ((modifiedMetrics.totalProfit + 
                        (selectedSilsonType && contract?.silson_discount 
                          ? (contract.silson_discount.find(d => d.tag === selectedSilsonType)?.kmv_adj || 0) 
                          : 0)) / modifiedMetrics.totalPrice) * 100
                    )}%
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        </div>
      </div>
    </div>

        {/* 오른쪽 패널: 전체 아이템 목록 */}
        <Card className="w-[50%] flex flex-col h-full">
          <CardHeader className="py-1">
            <CardTitle>
              <div className="flex flex-col gap-2 w-full">
                {/* 상단 헤더 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[15px] font-semibold">전체 아이템</h3>
                    <div className="flex gap-1">
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
                                items: [item],
                                confidence: item.confidence || 0
                              });
                              processedItems.add(item.id);
                            }
                          });

                          // 2. 그룹 단위로 랜덤 정렬
                          const randomizedGroups = groups.sort(() => Math.random() - 0.5);

                          // 3. 정렬된 그룹에서 아이템 추출
                          const randomizedItems = randomizedGroups.flatMap(group => group.items);
                          const sortedRandomizedItems = randomizedItems.sort((a, b) => {
                            const aIncluded = contract.items.some(item => item.id === a.id);
                            const bIncluded = contract.items.some(item => item.id === b.id);
                            return aIncluded - bIncluded; // Non-included items first
                          });
                          setSortedItems(sortedRandomizedItems);
                          
                          // 스크롤 초기화 추가
                          resetScroll();
                        }}
                        className="px-2 py-1 text-[12px] bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                        disabled={!contract}
                      >
                        🎲 랜덤정렬
                      </button>
                      <button
                        onClick={() => {
                          if (!contract || !originalContract) return;
                          
                          const itemsToSort = [...originalContract.availableItems];
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
                              
                              // 세트의 평균 추천도 계산
                              const avgConfidence = groupItems.reduce((sum, item) => 
                                sum + (item.confidence || 0), 0) / groupItems.length;

                              groups.push({
                                type: 'set',
                                items: groupItems,
                                score: avgConfidence
                              });
                            } else {
                              // 일반 아이템인 경우
                              groups.push({
                                type: 'single',
                                items: [item],
                                score: item.confidence || 0
                              });
                              processedItems.add(item.id);
                            }
                          });

                          // 추천도 기준으로 정렬
                          groups.sort((a, b) => b.score - a.score);

                          const sortedRecommendedItems = groups.flatMap(group => group.items).sort((a, b) => {
                            const aIncluded = contract.items.some(item => item.id === a.id);
                            const bIncluded = contract.items.some(item => item.id === b.id);
                            return aIncluded - bIncluded; // Non-included items first
                          });
                          setSortedItems(sortedRecommendedItems);
                          resetScroll();
                        }}
                        className="px-2 py-1 text-[12px] bg-blue-100 hover:bg-blue-200 rounded transition-colors"
                        disabled={!contract}
                      >
                        ⭐ 추천정렬
                      </button>
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
                              
                              // 세트 전체의 메트릭스 계산
                              const setMetrics = groupItems.reduce((acc, item) => {
                                const metrics = item.priceAndProfitByQuantity[item.recommendedQuantity];
                                return {
                                  totalPrice: acc.totalPrice + (metrics?.totalPrice || 0),
                                  totalProfit: acc.totalProfit + (metrics?.totalProfit || 0)
                                };
                              }, { totalPrice: 0, totalProfit: 0 });

                              const setProfitability = setMetrics.totalPrice > 0 
                                ? (setMetrics.totalProfit / setMetrics.totalPrice) * 100 
                                : -Infinity;

                              groups.push({
                                type: 'set',
                                items: groupItems,
                                profitability: setProfitability
                              });
                            } else {
                              // 일반 아이템인 경우
                              const metrics = item.priceAndProfitByQuantity[item.recommendedQuantity];
                              const profitability = metrics?.totalPrice > 0 
                                ? (metrics.totalProfit / metrics.totalPrice) * 100 
                                : -Infinity;

                              groups.push({
                                type: 'single',
                                items: [item],
                                profitability: profitability
                              });
                              processedItems.add(item.id);
                            }
                          });

                          // 2. 모든 그룹을 KMV(%) 기준으로 정렬
                          groups.sort((a, b) => b.profitability - a.profitability);

                          // 3. 정렬된 그룹에서 아이템 추출
                          const sortedKMVItems = groups.flatMap(group => group.items).sort((a, b) => {
                            const aIncluded = contract.items.some(item => item.id === a.id);
                            const bIncluded = contract.items.some(item => item.id === b.id);
                            return aIncluded - bIncluded; // Non-included items first
                          });

                          setSortedItems(sortedKMVItems);
                          
                          // 스크롤 초기화
                          resetScroll();
                        }}
                        className="px-2 py-1 text-[12px] bg-green-100 hover:bg-green-200 rounded transition-colors"
                        disabled={!contract}
                      >
                        💰 KMV정렬
                      </button>
                      <button
                        onClick={() => {
                          if (!contract || !originalContract) return;
                          
                          const itemsToSort = [...originalContract.availableItems];
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
                              
                              // 세트 전체의 메트릭스와 평균 추천도 계산
                              const setMetrics = groupItems.reduce((acc, item) => {
                                const metrics = item.priceAndProfitByQuantity[item.recommendedQuantity];
                                return {
                                  totalPrice: acc.totalPrice + (metrics?.totalPrice || 0),
                                  totalProfit: acc.totalProfit + (metrics?.totalProfit || 0),
                                  confidence: acc.confidence + (item.confidence || 0)
                                };
                              }, { totalPrice: 0, totalProfit: 0, confidence: 0 });

                              const avgConfidence = setMetrics.confidence / groupItems.length;
                              const setProfitability = setMetrics.totalPrice > 0 
                                ? (setMetrics.totalProfit / setMetrics.totalPrice) * 100 
                                : 0;

                              groups.push({
                                type: 'set',
                                items: groupItems,
                                score: avgConfidence * setProfitability // 추천도와 수익률의 곱
                              });
                            } else {
                              // ��반 아이템인 경우
                              const metrics = item.priceAndProfitByQuantity[item.recommendedQuantity];
                              const profitability = metrics?.totalPrice > 0 
                                ? (metrics.totalProfit / metrics.totalPrice) * 100 
                                : 0;

                              groups.push({
                                type: 'single',
                                items: [item],
                                score: (item.confidence || 0) * profitability // 추천도와 수익률의 곱
                              });
                              processedItems.add(item.id);
                            }
                          });

                          // 추천도×KMV 점수로 정렬
                          groups.sort((a, b) => b.score - a.score);

                          const sortedRecommendationKMVItems = groups.flatMap(group => group.items).sort((a, b) => {
                            const aIncluded = contract.items.some(item => item.id === a.id);
                            const bIncluded = contract.items.some(item => item.id === b.id);
                            return aIncluded - bIncluded; // Non-included items first
                          });
                          setSortedItems(sortedRecommendationKMVItems);
                          resetScroll();
                        }}
                        className="px-2 py-1 text-[12px] bg-purple-100 hover:bg-purple-200 rounded transition-colors"
                        disabled={!contract}
                      >
                        🎯 추천×KMV정렬
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[12px] font-normal">
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
                      가입금액 변경
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-red-50 border border-red-200 rounded"></div>
                      삭제 예정
                    </span>
                  </div>
                </div>        
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent 
            ref={itemListRef}
            className="overflow-auto max-h-[calc(100vh-10rem)] flex-1"
          >
            <Tabs 
              defaultValue="all" 
              className="w-full"
              onValueChange={(value) => setSelectedType(value)}
            >
              <div className="flex justify-between mb-4">
                <TabsList className="flex flex-wrap gap-1">
                  {getAvailableThemes.map(theme => (
                    <TabsTrigger key={theme} value={theme}>
                      {theme === "all" ? "전체" : THEME_LABELS[theme] || theme}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {/* 검색 입력 필드를 테마 오른편에 배치 */}
                <input
                  type="text"
                  placeholder="아이템 검색..."
                  className="w-[200px] px-2 py-1 border rounded text-[12px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {getAvailableThemes.map(theme => (
                <TabsContent key={theme} value={theme}>
                  <div className="relative">
                    {/* 실제 데이터를 위한 테이블 */}
                    <CardContent className="py-1">
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b">
                                  <th className="px-2 py-1 text-left text-[12px] w-[60%]">아이템명</th>
                                  <th className="px-2 py-1 text-left text-[12px] w-[10%]">증가율</th>
                                  <th className="px-2 py-1 text-left text-[12px] w-[10%]">가입금액</th>
                                  <th className="px-2 py-1 text-left text-[12px] w-[10%]">월납P</th>
                                  <th className="px-2 py-1 text-left text-[12px] w-[10%]">KMV</th>
                                  <th className="px-2 py-1 text-left text-[12px] w-[10%]">KMV(%)</th>
                                  <th className="px-2 py-1 text-left w-[1%]"></th>
                                </tr>
                              </thead>
                            </table>
                          </div>
                        </CardContent>
                    <table className="w-full">
                      <tbody>
                        {(sortedItems || [])
                          .filter(item => {
                            if (theme === "all") return true;
                            const itemThemes = Array.isArray(item.theme) ? item.theme : [item.theme];
                            return itemThemes.includes(theme);
                          })
                          // 검색 쿼리에 ��라 필터링
                          .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                          .map(item => (
                            <ItemRow 
                              key={item.id} 
                              item={item} 
                              showThemeBadge={theme === "all"} 
                            />
                          ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      

      {/* 추가된 정보 */}
      <div className="bg-gray-100 p-4 text-center text-[12px] text-gray-700">
        목표치: GA +1150% 이상, TA +1050% 이상, TM +630% 이상
      </div>
    </div>
  );
};

export default ContractProfitabilityAnalyzer;