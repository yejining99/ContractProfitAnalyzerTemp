// 샘플 계약 데이터 수정
export const SAMPLE_CONTRACTS = {
    '001': {
      id: "001",
      items: [
        { id: 1, quantity: 5 , theme: ["electronics", "furniture"]}, //id: cov_cd
        { id: 2, quantity: 1 , theme: ["electronics"]}, //
      ],
      availableItems: [
        { 
          id: 1, 
          name: "고성능 노트북", //담보이름
          theme: ["electronics", "furniture"], // 태그 (종수술, 자동차 등)
          confidence: 0.87,
          availableQuantities: [1, 2, 5], //필요한가? //가입금액
          // sorting: [숫자들 0.000XXX] (availItem 각각에 대해서 주기) 
          recommendedQuantity: 2, // 추천하는 가입금액. 이게 필요한가? (많이 팔리는 담보의 가입금액? 천원. 기본값)
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 1000000,    // 월납P
              totalProfit: 375000   //KMV값 (계산해야되는거)
            },
            2: {
              totalPrice: 1900000,  
              totalProfit: 700000   
            },
            5: {
              totalPrice: 4500000, 
              totalProfit: 1500000   
            }
          }
        },
        { 
          id: 2, 
          name: "무선 마우스",
          theme: "electronics",
          confidence: 0.87,
          availableQuantities: [1, 3, 10],
          recommendedQuantity: 3,
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 50000,
              totalProfit: 17500
            },
            3: {
              totalPrice: 135000,    // 3개 구매시 총액 (10% 할인)
              totalProfit: 45000
            },
            10: {
              totalPrice: 400000,    // 10개 구매시 총액 (20% 할인)
              totalProfit: 125000
            }
          }
        },
        { 
          id: 3, 
          name: "인체공학 의자",
          theme: "furniture",
          confidence: 0.92,
          availableQuantities: [1, 2, 3],
          recommendedQuantity: 2,
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 250000,
              totalProfit: 100000
            },
            2: {
              totalPrice: 475000,    // 5% 할인
              totalProfit: 175000
            },
            3: {
              totalPrice: 675000,    // 10% 할인
              totalProfit: 225000
            }
          }
        },
        { 
          id: 4, 
          name: "스탠딩 데스크",
          theme: "furniture",
          confidence: 0.92,
          availableQuantities: [1, 2, 3],
          recommendedQuantity: 1,
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 400000,
              totalProfit: 160000
            },
            2: {
              totalPrice: 760000,    // 5% 할인
              totalProfit: 280000
            },
            3: {
              totalPrice: 1080000,   // 10% 할인
              totalProfit: 360000
            }
          }
        },
        { 
          id: 5, 
          name: "모니터 받침대",
          theme: "office",
          confidence: 0.45,
          availableQuantities: [1, 5, 10],
          recommendedQuantity: 5,
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 80000,
              totalProfit: 24000
            },
            5: {
              totalPrice: 360000,    // 10% 할인
              totalProfit: 100000
            },
            10: {
              totalPrice: 640000,    // 20% 할인
              totalProfit: 160001
            }
          }
        },
        { 
          id: 6, 
          name: "문서 파쇄기",
          theme: "office",
          confidence: 0.83,
          availableQuantities: [1, 2, 3],
          recommendedQuantity: 1,
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 150000,
              totalProfit: 52500
            },
            2: {
              totalPrice: 285000,    // 5% 할인
              totalProfit: 90000
            },
            3: {
              totalPrice: 405000,    // 10% 할인
              totalProfit: 112500
            }
          }
        }
      ]
    },
    '002': {
      id: "002",
      items: [
        { id: 3, quantity: 3 },
        { id: 4, quantity: 2 }
      ],
      availableItems: [
        { 
          id: 3, 
          name: "인체공학 의자",
          theme: "furniture",
          confidence: 0.92,
          availableQuantities: [1, 2, 3],
          recommendedQuantity: 2,
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 250000,
              totalProfit: 100000
            },
            2: {
              totalPrice: 475000,
              totalProfit: 175000
            },
            3: {
              totalPrice: 675000,
              totalProfit: 225000
            }
          }
        },
        { 
          id: 4, 
          name: "스탠딩 데스크",
          theme: "furniture",
          confidence: 0.78,
          availableQuantities: [1, 2, 3],
          recommendedQuantity: 1,
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 400000,
              totalProfit: 160000
            },
            2: {
              totalPrice: 760000,
              totalProfit: 280000
            },
            3: {
              totalPrice: 1080000,
              totalProfit: 360000
            }
          }
        },
        { 
          id: 7, 
          name: "화상회의 카메라",
          theme: "electronics",
          confidence: 0.71,
          availableQuantities: [1, 2, 5],
          recommendedQuantity: 2,
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 200000,
              totalProfit: 70000
            },
            2: {
              totalPrice: 380000,    // 5% 할인
              totalProfit: 120000
            },
            5: {
              totalPrice: 900000,    // 10% 할인
              totalProfit: 250000
            }
          }
        },
        { 
          id: 8, 
          name: "회의실 스피커",
          theme: "electronics",
          confidence: 0.89,
          availableQuantities: [1, 2, 3],
          recommendedQuantity: 2,
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 180000,
              totalProfit: 63000
            },
            2: {
              totalPrice: 342000,    // 5% 할인
              totalProfit: 108000
            },
            3: {
              totalPrice: 486000,    // 10% 할인
              totalProfit: 135000
            }
          }
        },
        { 
          id: 9, 
          name: "책장",
          theme: "furniture",
          confidence: 0.55,
          availableQuantities: [1, 3, 5],
          recommendedQuantity: 3,
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 120000,
              totalProfit: 42000
            },
            3: {
              totalPrice: 324000,    // 10% 할인
              totalProfit: 108000
            },
            5: {
              totalPrice: 480000,    // 20% 할인
              totalProfit: 150000
            }
          }
        },
        { 
          id: 10, 
          name: "서류 보관함",
          theme: "office",
          confidence: 0.67,
          availableQuantities: [1, 5, 10],
          recommendedQuantity: 5,
          priceAndProfitByQuantity: {
            1: {
              totalPrice: 90000,
              totalProfit: 31500
            },
            5: {
              totalPrice: 405000,    // 10% 할인
              totalProfit: 135000
            },
            10: {
              totalPrice: 720000,    // 20% 할인
              totalProfit: 225000
            }
          }
        }
      ]
    }
  };

  /*
  주요 변수 설명:

  1. 계약 정보
  id: 계약 번호 (문자열)
  items: 현재 계약에 포함 아이템 배열
  availableItems: 선택 가능한 전체 아이템 배열
  
  2. 아이템 정보
  id: 아이템 고유 번호
  name: 아이템 이름
  theme: 카테고리 구분
  availableQuantities: 구매 가능한 수량 옵션
  recommendedQuantity: 권장 구매 수량
  priceAndProfitByQuantity: 수량별 가격/수익 정보

  3. 가격/수익 정보
  totalPrice: 총 판매 가격
  totalProfit: 예상 수익
  
  수량이 증가할수록 할인율 적용:
  2개: 5% 할인
  3-5개: 10% 할인
  10개: 20% 할인
  
  4. theme 테마(카테고리) *수정 필요
  electronics: 전자기기
  furniture: 가구
  office: 사무용품
  */

export const getContractThemeRatio = (contractId) => {
  const contract = SAMPLE_CONTRACTS[contractId];
  if (!contract) return null;

  // theme 카운트를 저장할 객체
  const themeCount = {
    electronics: 0,
    furniture: 0,
    office: 0
  };

  // 각 아이템의 theme 카운트
  contract.items.forEach(item => {
    const themes = Array.isArray(item.theme) ? item.theme : [item.theme];
    themes.forEach(theme => {
      themeCount[theme] += 1;
    });
  });

  // 총 카운트 계산 (중복 포함)
  const total = Object.values(themeCount).reduce((sum, count) => sum + count, 0);

  // 비율 계산 (백분율)
  return {
    electronics: (themeCount.electronics / total) * 100,
    furniture: (themeCount.furniture / total) * 100,
    office: (themeCount.office / total) * 100
  };
};
