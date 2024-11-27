// SAMPLE_CONTRACTS 데이터
export const SAMPLE_CONTRACTS = {
    "0": {
        "id": "0",
        "channel": "GA",
        "age": 47,
        "gndr": "남",
        "unt_pd_nm": "내Mom대로 5.10.5",
        "silson_discount": [
            {
                "tag": "노후",
                "kmv_adj": -50000.0
            },
            {
                "tag": "유병자",
                "kmv_adj": -150000.0
            },
            {
                "tag": "일반",
                "kmv_adj": -153233.18489799998
            },
            {
                "tag": "출생전",
                "kmv_adj": -664667.2603089998
            }
        ],
        "items": [
            {
                "id": "640261",
                "name": "영구치상실치료비(상해및질병)",
                "quantity": 30000,
                "theme": "치아",
                "totalPrice": 2624.0,
                "totalProfit": 72407.0703125
            },
            {
                "id": "630696",
                "name": "자녀_치석제거(스케일링)치료비",
                "quantity": 10000,
                "theme": "치아",
                "totalPrice": 552.0,
                "totalProfit": 15131.2333984375
            },
            {
                "id": "640288",
                "name": "신치아보철치료비(임플란트 무제한)(2년감액형)[재식립 임플란트치료비보장]",
                "quantity": 2000000,
                "theme": "치아",
                "totalPrice": 1396.0,
                "totalProfit": 89445.9453125
            },
            {
                "id": "640147",
                "name": "갱신형 치아보철치료비(상해 및 질병)",
                "quantity": 1500000,
                "theme": "치아",
                "totalPrice": 61325.0,
                "totalProfit": 28875.939453125
            },
            {
                "id": "640169",
                "name": "치아보존치료비(크라운무제한)(유치및영구치,상해및질병)",
                "quantity": 300000,
                "theme": "치아",
                "totalPrice": 24795.0,
                "totalProfit": 465746.4375
            },
            {
                "id": "640149",
                "name": "자녀 치아근관치료비(유치 및 영구치, 상해 및 질병)",
                "quantity": 30000,
                "theme": "치아",
                "totalPrice": 1236.0,
                "totalProfit": 31121.46484375
            },
            {
                "id": "640153",
                "name": "자녀 치아촬영비(X-ray 및 파노라마)",
                "quantity": 10000,
                "theme": "치아",
                "totalPrice": 1249.0,
                "totalProfit": 36174.90234375
            },
            {
                "id": "610030",
                "name": "후유장해담보(외모추상2배)",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 84.0,
                "totalProfit": 253.6338653564453
            },
            {
                "id": "631301",
                "name": "치주소파술치료비",
                "quantity": 20000,
                "theme": "치아",
                "totalPrice": 390.0,
                "totalProfit": -3180.771484375
            }
        ],
        "availableItems": [
            {
                "id": "610918",
                "name": "골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.0013799276470368776,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 157.0,
                        "totalProfit": 2359.281494140625
                    },
                    "200000": {
                        "totalPrice": 314.0,
                        "totalProfit": 4762.8271484375
                    }
                }
            },
            {
                "id": "610468",
                "name": "중대상해수술비",
                "theme": "수술",
                "confidence": 0.0036176481557453444,
                "availableQuantities": [
                    4000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "4000000": {
                        "totalPrice": 280.0,
                        "totalProfit": 7134.88427734375
                    },
                    "5000000": {
                        "totalPrice": 350.0,
                        "totalProfit": 8929.5439453125
                    },
                    "10000000": {
                        "totalPrice": 700.0,
                        "totalProfit": 17903.3125
                    },
                    "20000000": {
                        "totalPrice": 1400.0,
                        "totalProfit": 35850.6796875
                    }
                }
            },
            {
                "id": "640521",
                "name": "치아보철치료비(임플란트 연간3개한)",
                "theme": "치아",
                "confidence": 0.004948868838728055,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 3590.0,
                        "totalProfit": -27505.58203125
                    },
                    "200000": {
                        "totalPrice": 7180.0,
                        "totalProfit": -54965.7109375
                    },
                    "300000": {
                        "totalPrice": 10769.0,
                        "totalProfit": -82453.5859375
                    },
                    "500000": {
                        "totalPrice": 17949.0,
                        "totalProfit": -137375.09375
                    },
                    "1000000": {
                        "totalPrice": 35898.0,
                        "totalProfit": -274707.53125
                    }
                }
            },
            {
                "id": "640181",
                "name": "신깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.02414441810758991,
                "availableQuantities": [
                    100000,
                    300000,
                    500000,
                    600000,
                    1000000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 45.0,
                        "totalProfit": 1084.6143798828125
                    },
                    "300000": {
                        "totalPrice": 135.0,
                        "totalProfit": 3341.834228515625
                    },
                    "500000": {
                        "totalPrice": 225.0,
                        "totalProfit": 5599.083984375
                    },
                    "600000": {
                        "totalPrice": 270.0,
                        "totalProfit": 6727.7177734375
                    },
                    "1000000": {
                        "totalPrice": 450.0,
                        "totalProfit": 11242.296875
                    }
                }
            },
            {
                "id": "640525",
                "name": "신치아보철치료비(임플란트 연간3개한)[재식립 임플란트치료비보장]",
                "theme": "치아",
                "confidence": 0.033439977497043936,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000,
                    1300000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 159.0,
                        "totalProfit": 10277.24609375
                    },
                    "500000": {
                        "totalPrice": 265.0,
                        "totalProfit": 17154.095703125
                    },
                    "1000000": {
                        "totalPrice": 530.0,
                        "totalProfit": 34352.08203125
                    },
                    "1300000": {
                        "totalPrice": 689.0,
                        "totalProfit": 44673.56640625
                    }
                }
            },
            {
                "id": "640288",
                "name": "신치아보철치료비(임플란트 무제한)(2년감액형)[재식립 임플란트치료비보장]",
                "theme": "치아",
                "confidence": 0.21604919096844108,
                "availableQuantities": [
                    500000,
                    1000000,
                    1500000,
                    2000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 349.0,
                        "totalProfit": 22333.171875
                    },
                    "1000000": {
                        "totalPrice": 698.0,
                        "totalProfit": 44700.8515625
                    },
                    "1500000": {
                        "totalPrice": 1047.0,
                        "totalProfit": 67078.28125
                    },
                    "2000000": {
                        "totalPrice": 1396.0,
                        "totalProfit": 89445.9453125
                    }
                }
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.010286983054187756,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 92.0,
                        "totalProfit": 1506.8980712890625
                    },
                    "200000": {
                        "totalPrice": 184.0,
                        "totalProfit": 3057.87158203125
                    },
                    "300000": {
                        "totalPrice": 276.0,
                        "totalProfit": 4608.958984375
                    },
                    "500000": {
                        "totalPrice": 460.0,
                        "totalProfit": 7711.0029296875
                    }
                }
            },
            {
                "id": "610912",
                "name": "골절(치아파절제외)진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.0012390341335256111,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 489.0,
                        "totalProfit": 5156.8447265625
                    },
                    "200000": {
                        "totalPrice": 978.0,
                        "totalProfit": 10357.765625
                    },
                    "300000": {
                        "totalPrice": 1467.0,
                        "totalProfit": 15558.8330078125
                    },
                    "400000": {
                        "totalPrice": 1956.0,
                        "totalProfit": 20759.759765625
                    },
                    "500000": {
                        "totalPrice": 2445.0,
                        "totalProfit": 25960.833984375
                    }
                }
            },
            {
                "id": "640517",
                "name": "특정 임플란트 치조골 이식술 치료비(연간3개한)",
                "theme": "치아",
                "confidence": 0.011559552780854212,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1857.0,
                        "totalProfit": -27980.091796875
                    },
                    "200000": {
                        "totalPrice": 3714.0,
                        "totalProfit": -55915.64453125
                    },
                    "300000": {
                        "totalPrice": 5571.0,
                        "totalProfit": -83851.453125
                    },
                    "500000": {
                        "totalPrice": 9285.0,
                        "totalProfit": -139722.46875
                    }
                }
            },
            {
                "id": "630696",
                "name": "자녀_치석제거(스케일링)치료비",
                "theme": "치아",
                "confidence": 0.06375431486385127,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 552.0,
                        "totalProfit": 15131.2333984375
                    }
                }
            },
            {
                "id": "640520",
                "name": "치아보철치료비(임플란트 무제한)",
                "theme": "치아",
                "confidence": 0.040325329174773626,
                "availableQuantities": [
                    300000,
                    400000,
                    500000,
                    700000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 13712.0,
                        "totalProfit": -98156.3828125
                    },
                    "400000": {
                        "totalPrice": 18282.0,
                        "totalProfit": -130869.4296875
                    },
                    "500000": {
                        "totalPrice": 22853.0,
                        "totalProfit": -163568.984375
                    },
                    "700000": {
                        "totalPrice": 31994.0,
                        "totalProfit": -228982.453125
                    },
                    "1000000": {
                        "totalPrice": 45705.0,
                        "totalProfit": -327117.375
                    }
                }
            },
            {
                "id": "640153",
                "name": "자녀 치아촬영비(X-ray 및 파노라마)",
                "theme": "치아",
                "confidence": 0.401786645077346,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1249.0,
                        "totalProfit": 36174.90234375
                    }
                }
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    1000000,
                    100000000,
                    200000000,
                    300000000
                ],
                "recommendedQuantity": 300000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 80.0,
                        "totalProfit": 1065.6845703125
                    },
                    "100000000": {
                        "totalPrice": 8040.0,
                        "totalProfit": 112461.8828125
                    },
                    "200000000": {
                        "totalPrice": 16080.0,
                        "totalProfit": 224967.890625
                    },
                    "300000000": {
                        "totalPrice": 24120.0,
                        "totalProfit": 337474.09375
                    }
                }
            },
            {
                "id": "640261",
                "name": "영구치상실치료비(상해및질병)",
                "theme": "치아",
                "confidence": 0.5089490370768955,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 1749.0,
                        "totalProfit": 48253.734375
                    },
                    "30000": {
                        "totalPrice": 2624.0,
                        "totalProfit": 72407.0703125
                    },
                    "50000": {
                        "totalPrice": 4374.0,
                        "totalProfit": 120726.96875
                    }
                }
            },
            {
                "id": "610030",
                "name": "후유장해담보(외모추상2배)",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 84.0,
                        "totalProfit": 253.6338653564453
                    }
                }
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.003965738012655544,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 748.0,
                        "totalProfit": 10288.2744140625
                    },
                    "200000": {
                        "totalPrice": 1496.0,
                        "totalProfit": 20620.642578125
                    }
                }
            },
            {
                "id": "640147",
                "name": "갱신형 치아보철치료비(상해 및 질병)",
                "theme": "치아",
                "confidence": 0.0514436567426634,
                "availableQuantities": [
                    500000,
                    700000,
                    1000000,
                    1500000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 20442.0,
                        "totalProfit": 9603.6103515625
                    },
                    "700000": {
                        "totalPrice": 28618.0,
                        "totalProfit": 13446.1591796875
                    },
                    "1000000": {
                        "totalPrice": 40883.0,
                        "totalProfit": 19227.888671875
                    },
                    "1500000": {
                        "totalPrice": 61325.0,
                        "totalProfit": 28875.939453125
                    }
                }
            },
            {
                "id": "610470",
                "name": "상해수술위로금",
                "theme": "수술",
                "confidence": 0.0030872255166440776,
                "availableQuantities": [
                    100000,
                    200000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 429.0,
                        "totalProfit": 6249.314453125
                    },
                    "200000": {
                        "totalPrice": 858.0,
                        "totalProfit": 12542.82421875
                    },
                    "500000": {
                        "totalPrice": 2145.0,
                        "totalProfit": 31423.328125
                    },
                    "1000000": {
                        "totalPrice": 4290.0,
                        "totalProfit": 62890.71875
                    }
                }
            },
            {
                "id": "640516",
                "name": "특정 임플란트 치조골 이식술 치료비(무제한)",
                "theme": "치아",
                "confidence": 0.11173964717881117,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 2454.0,
                        "totalProfit": -36189.20703125
                    },
                    "200000": {
                        "totalPrice": 4908.0,
                        "totalProfit": -72333.9921875
                    },
                    "300000": {
                        "totalPrice": 7362.0,
                        "totalProfit": -108478.6484375
                    }
                }
            },
            {
                "id": "631301",
                "name": "치주소파술치료비",
                "theme": "치아",
                "confidence": 0.13007931503617898,
                "availableQuantities": [
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 390.0,
                        "totalProfit": -3180.771484375
                    }
                }
            },
            {
                "id": "640169",
                "name": "치아보존치료비(크라운무제한)(유치및영구치,상해및질병)",
                "theme": "치아",
                "confidence": 0.5772510092100217,
                "availableQuantities": [
                    10000,
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 827.0,
                        "totalProfit": 15491.6767578125
                    },
                    "100000": {
                        "totalPrice": 8265.0,
                        "totalProfit": 155219.1875
                    },
                    "200000": {
                        "totalPrice": 16530.0,
                        "totalProfit": 310482.8125
                    },
                    "300000": {
                        "totalPrice": 24795.0,
                        "totalProfit": 465746.4375
                    }
                }
            },
            {
                "id": "640524",
                "name": "신치아보철치료비(임플란트 연간3개한)[치아보철치료비보장]",
                "theme": "치아",
                "confidence": 0.033439977497043936,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 10769.0,
                        "totalProfit": -82453.5859375
                    },
                    "500000": {
                        "totalPrice": 17949.0,
                        "totalProfit": -137375.09375
                    },
                    "1000000": {
                        "totalPrice": 35898.0,
                        "totalProfit": -274707.53125
                    }
                }
            },
            {
                "id": "640156",
                "name": "갱신형 치아보존치료비(유치및영구치,상해및질병)",
                "theme": "치아",
                "confidence": 0.05701605144261787,
                "availableQuantities": [
                    10000,
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 685.0,
                        "totalProfit": 15537.787109375
                    },
                    "100000": {
                        "totalPrice": 6854.0,
                        "totalProfit": 155873.875
                    },
                    "200000": {
                        "totalPrice": 13708.0,
                        "totalProfit": 311791.875
                    },
                    "300000": {
                        "totalPrice": 20562.0,
                        "totalProfit": 467710.1875
                    }
                }
            },
            {
                "id": "640149",
                "name": "자녀 치아근관치료비(유치 및 영구치, 상해 및 질병)",
                "theme": "치아",
                "confidence": 0.3472488941813875,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 824.0,
                        "totalProfit": 20733.01953125
                    },
                    "30000": {
                        "totalPrice": 1236.0,
                        "totalProfit": 31121.46484375
                    },
                    "50000": {
                        "totalPrice": 2060.0,
                        "totalProfit": 51898.77734375
                    }
                }
            },
            {
                "id": "610884",
                "name": "신골절치료비(치아파절포함)",
                "theme": "골절/화상",
                "confidence": 0.002718416025393978,
                "availableQuantities": [
                    1000000,
                    5000000,
                    10000000,
                    14000000,
                    15000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1601.0,
                        "totalProfit": 24811.296875
                    },
                    "5000000": {
                        "totalPrice": 8005.0,
                        "totalProfit": 124233.921875
                    },
                    "10000000": {
                        "totalPrice": 16010.0,
                        "totalProfit": 248511.96875
                    },
                    "14000000": {
                        "totalPrice": 22414.0,
                        "totalProfit": 347934.375
                    },
                    "15000000": {
                        "totalPrice": 24015.0,
                        "totalProfit": 372790.03125
                    }
                }
            },
            {
                "id": "610464",
                "name": "상해흉터복원수술비",
                "theme": "수술",
                "confidence": 0.004135639014242667,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 3500.0,
                        "totalProfit": 76482.75
                    }
                }
            }
        ]
    },
    "1": {
        "id": "1",
        "channel": "TA",
        "age": 0,
        "gndr": "남",
        "unt_pd_nm": "내Mom대로 5.10.5",
        "silson_discount": [
            {
                "tag": "노후",
                "kmv_adj": -50000.0
            },
            {
                "tag": "유병자",
                "kmv_adj": -50000.0
            },
            {
                "tag": "일반",
                "kmv_adj": -603092.382323
            },
            {
                "tag": "출생전",
                "kmv_adj": -679850.4646500001
            }
        ],
        "items": [
            {
                "id": "632404",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)(출생전)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 45.0,
                "totalProfit": 54.5947265625
            },
            {
                "id": "632136",
                "name": "131대질병수술비(관절염,생식기질환)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 27.0,
                "totalProfit": 179.835485
            },
            {
                "id": "611035",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해3종]",
                "quantity": 500000,
                "theme": "수술",
                "totalPrice": 110.0,
                "totalProfit": 2656.540258
            },
            {
                "id": "632137",
                "name": "131대질병수술비(치핵)",
                "quantity": 200000,
                "theme": "수술",
                "totalPrice": 38.0,
                "totalProfit": 49.976242
            },
            {
                "id": "630996",
                "name": "뇌혈관질환진단비(태아가입용)(출생전)",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 120.0,
                "totalProfit": -6950.096629
            },
            {
                "id": "630766",
                "name": "허혈성심장질환수술비",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 81.0,
                "totalProfit": 1772.743058
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "quantity": 200000,
                "theme": "골절/화상",
                "totalPrice": 916.0,
                "totalProfit": 5397.49958
            },
            {
                "id": "631398",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)(출생전)",
                "quantity": 400000,
                "theme": "입원일당",
                "totalPrice": 840.0,
                "totalProfit": -5188.3564453125
            },
            {
                "id": "632405",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)(출생전)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 350.0,
                "totalProfit": 330.74664306640625
            },
            {
                "id": "630971",
                "name": "질병후유장해(3~100%)",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 6.0,
                "totalProfit": -371.03381
            },
            {
                "id": "632133",
                "name": "131대질병수술비(심장질환)",
                "quantity": 5000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 8515.375
            },
            {
                "id": "611037",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해5종]",
                "quantity": 5000000,
                "theme": "수술",
                "totalPrice": 50.0,
                "totalProfit": 1309.809462
            },
            {
                "id": "640154",
                "name": "응급실내원비(응급)",
                "quantity": 50000,
                "theme": "기타",
                "totalPrice": 1435.0,
                "totalProfit": 23847.82878
            },
            {
                "id": "611071",
                "name": "신화상치료비Q(중증화상및부식진단비)",
                "quantity": 30000000,
                "theme": "골절/화상",
                "totalPrice": 30.0,
                "totalProfit": 285.884476
            },
            {
                "id": "633014",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)",
                "quantity": 200000,
                "theme": "입원일당",
                "totalPrice": 740.0,
                "totalProfit": -99006.142126
            },
            {
                "id": "630670",
                "name": "추간판장애(디스크질환)수술비",
                "quantity": 1000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 2689.564697265625
            },
            {
                "id": "631823",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병1종]",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 13240.5849609375
            },
            {
                "id": "611010",
                "name": "특정외상성손상진단비",
                "quantity": 2000000,
                "theme": "기타",
                "totalPrice": 0.0,
                "totalProfit": 28178.244140625
            },
            {
                "id": "611073",
                "name": "골절수술비ⅡQ(출생전)",
                "quantity": 500000,
                "theme": "골절/화상",
                "totalPrice": 45.0,
                "totalProfit": -14.848053
            },
            {
                "id": "631057",
                "name": "허혈성심장질환수술비(출생전)",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 9.0,
                "totalProfit": 13.457260131835938
            },
            {
                "id": "632407",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)(출생전)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 20.0,
                "totalProfit": 25.87033462524414
            },
            {
                "id": "630527",
                "name": "유사암진단비",
                "quantity": 10000000,
                "theme": "3대진단",
                "totalPrice": 190.0,
                "totalProfit": 2224.747419
            },
            {
                "id": "611075",
                "name": "상해수술비Q(출생전)",
                "quantity": 1000000,
                "theme": "수술",
                "totalPrice": 300.0,
                "totalProfit": -27.35432243347168
            },
            {
                "id": "630763",
                "name": "뇌혈관질환 수술비",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 139.0,
                "totalProfit": 2245.044542
            },
            {
                "id": "610464",
                "name": "상해흉터복원수술비",
                "quantity": 5000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 74627.296875
            },
            {
                "id": "632141",
                "name": "131대질병수술비(특정다빈도29대질병)",
                "quantity": 200000,
                "theme": "수술",
                "totalPrice": 70.0,
                "totalProfit": 1540.011589
            },
            {
                "id": "631397",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)",
                "quantity": 400000,
                "theme": "입원일당",
                "totalPrice": 0.0,
                "totalProfit": -24435.294921875
            },
            {
                "id": "633021",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)(출생전)",
                "quantity": 200000,
                "theme": "입원일당",
                "totalPrice": 1020.0,
                "totalProfit": -11110.697395
            },
            {
                "id": "640207",
                "name": "응급실내원비(응급)(출생전)",
                "quantity": 50000,
                "theme": "기타",
                "totalPrice": 1210.0,
                "totalProfit": 2089.681463
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "quantity": 70000,
                "theme": "입원일당",
                "totalPrice": 2464.0,
                "totalProfit": 19409.85757
            },
            {
                "id": "611068",
                "name": "5대골절수술비Q(출생전)",
                "quantity": 2000000,
                "theme": "골절/화상",
                "totalPrice": 20.0,
                "totalProfit": -15.518795013427734
            },
            {
                "id": "630094",
                "name": "충수염수술비",
                "quantity": 200000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 292.48529052734375
            },
            {
                "id": "631972",
                "name": "질병수술비Q",
                "quantity": 200000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 22201.72265625
            },
            {
                "id": "640045",
                "name": "각막이식수술비",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": -0.3049519956111908
            },
            {
                "id": "611033",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해1종]",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 1020.0,
                "totalProfit": 24386.951887
            },
            {
                "id": "630995",
                "name": "뇌혈관질환수술비(출생전)",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 35.0,
                "totalProfit": 94.478526
            },
            {
                "id": "611072",
                "name": "골절수술비ⅡQ",
                "quantity": 500000,
                "theme": "골절/화상",
                "totalPrice": 0.0,
                "totalProfit": 2664.92529296875
            },
            {
                "id": "632139",
                "name": "131대질병수술비(후각특정질환)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 727.0816650390625
            },
            {
                "id": "631050",
                "name": "특정전염병진단비(출생전)",
                "quantity": 100000,
                "theme": "기타",
                "totalPrice": 2.0,
                "totalProfit": -3.1201939582824707
            },
            {
                "id": "631973",
                "name": "질병수술비Q(출생전)",
                "quantity": 200000,
                "theme": "수술",
                "totalPrice": 624.0,
                "totalProfit": 211.5728302001953
            },
            {
                "id": "640384",
                "name": "아나필락시스진단비(응급, 연간1회한)(출생전)",
                "quantity": 2000000,
                "theme": "기타",
                "totalPrice": 80.0,
                "totalProfit": 108.56645202636719
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 340.0,
                "totalProfit": 8327.686496
            },
            {
                "id": "632140",
                "name": "131대질병수술비(백내장)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 4.0,
                "totalProfit": -12.982229
            },
            {
                "id": "610805",
                "name": "일반상해입원일당(1일이상)(출생전)",
                "quantity": 70000,
                "theme": "입원일당",
                "totalPrice": 329.0,
                "totalProfit": 468.8974914550781
            },
            {
                "id": "610792",
                "name": "5대골절진단비(출생전)",
                "quantity": 2000000,
                "theme": "골절/화상",
                "totalPrice": 100.0,
                "totalProfit": -9.094694137573242
            },
            {
                "id": "620235",
                "name": "의료사고법률비용",
                "quantity": 2000000,
                "theme": "재물/배상",
                "totalPrice": 2.0,
                "totalProfit": 5.130629
            },
            {
                "id": "632341",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 0.0,
                "totalProfit": 2762.9775390625
            },
            {
                "id": "611266",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)(출생전)",
                "quantity": 200000,
                "theme": "입원일당",
                "totalPrice": 80.0,
                "totalProfit": -89.113844
            },
            {
                "id": "611067",
                "name": "5대골절수술비Q",
                "quantity": 2000000,
                "theme": "골절/화상",
                "totalPrice": 0.0,
                "totalProfit": -3511.982177734375
            },
            {
                "id": "631827",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병5종]",
                "quantity": 5000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": -7364.30712890625
            },
            {
                "id": "632532",
                "name": "131대질병수술비(편도염)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 3713.201904296875
            },
            {
                "id": "631826",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병4종]",
                "quantity": 1000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 3823.412353515625
            },
            {
                "id": "632138",
                "name": "131대질병수술비(뇌혈관질환)",
                "quantity": 5000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 2221.583740234375
            },
            {
                "id": "611034",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해2종]",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 210.0,
                "totalProfit": 4426.407995
            },
            {
                "id": "630110",
                "name": "조혈모세포이식수술비",
                "quantity": 50000000,
                "theme": "수술",
                "totalPrice": 250.0,
                "totalProfit": 4030.117628
            },
            {
                "id": "640443",
                "name": "7대장기이식대기등록",
                "quantity": 10000000,
                "theme": "기타",
                "totalPrice": 0.0,
                "totalProfit": 5456.66943359375
            },
            {
                "id": "631828",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병6종]",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 1600.0,
                "totalProfit": 31962.685967
            },
            {
                "id": "630092",
                "name": "호흡기관련질병수술비",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 1290.77978515625
            },
            {
                "id": "631829",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병7종]",
                "quantity": 20000000,
                "theme": "수술",
                "totalPrice": 1800.0,
                "totalProfit": -122015.622632
            },
            {
                "id": "611264",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)",
                "quantity": 200000,
                "theme": "입원일당",
                "totalPrice": 260.0,
                "totalProfit": -29152.82582
            },
            {
                "id": "610910",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)(출생전)",
                "quantity": 400000,
                "theme": "입원일당",
                "totalPrice": 64.0,
                "totalProfit": 109.58795928955078
            },
            {
                "id": "610680",
                "name": "심한상해수술비",
                "quantity": 2000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 3431.218505859375
            },
            {
                "id": "632343",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 120.0,
                "totalProfit": 1889.009639
            },
            {
                "id": "611070",
                "name": "신화상치료비Q(화상진단비)",
                "quantity": 200000,
                "theme": "골절/화상",
                "totalPrice": 102.0,
                "totalProfit": 522.156009
            },
            {
                "id": "631560",
                "name": "양성뇌종양진단비Ⅱ",
                "quantity": 5000000,
                "theme": "기타",
                "totalPrice": 0.0,
                "totalProfit": 1369.9854736328125
            },
            {
                "id": "610781",
                "name": "일반상해후유장해(3~100%)",
                "quantity": 100000000,
                "theme": "사망후유",
                "totalPrice": 1500.0,
                "totalProfit": 39746.923938
            },
            {
                "id": "632406",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)(출생전)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 750.0,
                "totalProfit": 750.9512329101562
            },
            {
                "id": "631957",
                "name": "질병입원일당(1일이상)Q(출생전)",
                "quantity": 70000,
                "theme": "입원일당",
                "totalPrice": 9170.0,
                "totalProfit": -37522.880108
            },
            {
                "id": "632526",
                "name": "131대질병수술비(유방의장애)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": -2256.05517578125
            },
            {
                "id": "631824",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병2종]",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 2001.304931640625
            },
            {
                "id": "632342",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 0.0,
                "totalProfit": 12015.673828125
            },
            {
                "id": "631956",
                "name": "질병입원일당(1일이상)Q",
                "quantity": 70000,
                "theme": "입원일당",
                "totalPrice": 5432.0,
                "totalProfit": -486239.650272
            },
            {
                "id": "631562",
                "name": "양성뇌종양진단비Ⅱ(출생전)",
                "quantity": 5000000,
                "theme": "기타",
                "totalPrice": 5.0,
                "totalProfit": 0.565265
            },
            {
                "id": "610468",
                "name": "중대상해수술비",
                "quantity": 20000000,
                "theme": "수술",
                "totalPrice": 620.0,
                "totalProfit": 14366.351944
            },
            {
                "id": "632340",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 0.0,
                "totalProfit": 1279.085693359375
            },
            {
                "id": "631025",
                "name": "유사암진단비(감액없음)(출생전)",
                "quantity": 10000000,
                "theme": "3대진단",
                "totalPrice": 40.0,
                "totalProfit": 6.758663177490234
            },
            {
                "id": "611074",
                "name": "상해수술비Q",
                "quantity": 1000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 12833.01171875
            },
            {
                "id": "630078",
                "name": "시청각질환수술비",
                "quantity": 100000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": -164.52212524414062
            },
            {
                "id": "630383",
                "name": "뇌혈관질환진단비(태아가입용)",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 420.0,
                "totalProfit": -6487.559926
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "quantity": 400000,
                "theme": "입원일당",
                "totalPrice": 0.0,
                "totalProfit": 345.7928161621094
            },
            {
                "id": "631063",
                "name": "희귀난치성7대질환진단비(출생전)",
                "quantity": 10000000,
                "theme": "기타",
                "totalPrice": 30.0,
                "totalProfit": -1.0573760271072388
            },
            {
                "id": "631059",
                "name": "허혈성심장질환진단비(감액없음)(출생전)",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 22.0,
                "totalProfit": 18.786645889282227
            },
            {
                "id": "631381",
                "name": "중대한재생불량성빈혈진단비",
                "quantity": 5000000,
                "theme": "기타",
                "totalPrice": 0.0,
                "totalProfit": 127.3036117553711
            },
            {
                "id": "610359",
                "name": "팔및손가락장해담보",
                "quantity": 40000000,
                "theme": "사망후유",
                "totalPrice": 200.0,
                "totalProfit": 5749.389832
            },
            {
                "id": "611038",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해6종]",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 434.940185546875
            },
            {
                "id": "631825",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병3종]",
                "quantity": 500000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 4367.734375
            },
            {
                "id": "632403",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)(출생전)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 45.0,
                "totalProfit": -4.801578998565674
            },
            {
                "id": "631045",
                "name": "질병후유장해(3~100%)(출생전)",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 3.0,
                "totalProfit": -7.282697
            },
            {
                "id": "632339",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 0.0,
                "totalProfit": -549.3626708984375
            },
            {
                "id": "632134",
                "name": "131대질병수술비(특정31대질병)",
                "quantity": 5000000,
                "theme": "수술",
                "totalPrice": 900.0,
                "totalProfit": 14040.185485
            },
            {
                "id": "640056",
                "name": "5대장기이식수술비",
                "quantity": 50000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 222.02035522460938
            },
            {
                "id": "640382",
                "name": "아나필락시스진단비(응급, 연간1회한)",
                "quantity": 2000000,
                "theme": "기타",
                "totalPrice": 0.0,
                "totalProfit": 2690.914794921875
            },
            {
                "id": "630108",
                "name": "특정전염병위로금",
                "quantity": 100000,
                "theme": "기타",
                "totalPrice": 5.0,
                "totalProfit": 42.690225
            },
            {
                "id": "632520",
                "name": "131대질병수술비(다빈도62대질병)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 12766.1416015625
            },
            {
                "id": "610923",
                "name": "골절진단비Ⅱ(출생전)",
                "quantity": 200000,
                "theme": "골절/화상",
                "totalPrice": 100.0,
                "totalProfit": -1.707163
            },
            {
                "id": "610813",
                "name": "일반상해후유장해(3~100%)(출생전)",
                "quantity": 100000000,
                "theme": "사망후유",
                "totalPrice": 200.0,
                "totalProfit": 348.5473327636719
            },
            {
                "id": "610487",
                "name": "5대골절진단비",
                "quantity": 2000000,
                "theme": "골절/화상",
                "totalPrice": 0.0,
                "totalProfit": -1731.0247802734375
            },
            {
                "id": "611039",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해7종]",
                "quantity": 20000000,
                "theme": "수술",
                "totalPrice": 40.0,
                "totalProfit": 1067.529729
            },
            {
                "id": "631061",
                "name": "호흡기관련질병수술비(출생전)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 3.0,
                "totalProfit": -4.510785102844238
            },
            {
                "id": "611069",
                "name": "신화상치료비Q(화상수술비Q)",
                "quantity": 200000,
                "theme": "골절/화상",
                "totalPrice": 12.0,
                "totalProfit": 229.570281
            },
            {
                "id": "611036",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해4종]",
                "quantity": 1000000,
                "theme": "수술",
                "totalPrice": 40.0,
                "totalProfit": 719.062983
            },
            {
                "id": "630388",
                "name": "희귀난치성 7대질환진단비",
                "quantity": 10000000,
                "theme": "기타",
                "totalPrice": 110.0,
                "totalProfit": 1044.93529
            }
        ],
        "availableItems": [
            {
                "id": "610299",
                "name": "상해50%이상고도후유장해",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    30000000,
                    40000000,
                    50000000,
                    60000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4941.18798828125
                    },
                    "40000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5938.84423828125
                    },
                    "50000000": {
                        "totalPrice": 352.805,
                        "totalProfit": 10974.268679834997
                    },
                    "60000000": {
                        "totalPrice": 433.3953488372093,
                        "totalProfit": 12228.840890674419
                    }
                }
            },
            {
                "id": "631397",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.1306462596724932,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": -36629.453125
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -48823.61328125
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": -24435.294921875
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": -61017.76953125
                    }
                }
            },
            {
                "id": "610805",
                "name": "일반상해입원일당(1일이상)(출생전)",
                "theme": "입원일당",
                "confidence": 0.016313038117863363,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    60000,
                    70000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 94.0,
                        "totalProfit": 131.12477111816406
                    },
                    "30000": {
                        "totalPrice": 141.0,
                        "totalProfit": 198.6793212890625
                    },
                    "50000": {
                        "totalPrice": 235.0,
                        "totalProfit": 333.78839111328125
                    },
                    "60000": {
                        "totalPrice": 282.0,
                        "totalProfit": 401.34295654296875
                    },
                    "70000": {
                        "totalPrice": 329.0,
                        "totalProfit": 468.8974914550781
                    }
                }
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.031526276235990656,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1131.3316650390625
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 738.5621948242188
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1916.870361328125
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 345.7928161621094
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1524.1009521484375
                    }
                }
            },
            {
                "id": "631045",
                "name": "질병후유장해(3~100%)(출생전)",
                "theme": "사망후유",
                "confidence": 0.2231318351004539,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 30.0,
                        "totalProfit": -25.183801651000977
                    },
                    "20000000": {
                        "totalPrice": 60.0,
                        "totalProfit": -46.383296966552734
                    },
                    "30000000": {
                        "totalPrice": 90.0,
                        "totalProfit": -67.58279418945312
                    },
                    "50000000": {
                        "totalPrice": 150.0,
                        "totalProfit": -109.98178100585938
                    }
                }
            },
            {
                "id": "610620",
                "name": "일반상해 80%이상후유장해 재활자금",
                "theme": "사망후유",
                "confidence": 0.0010139810476012794,
                "availableQuantities": [
                    50000000,
                    100000000,
                    200000000,
                    300000000,
                    400000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 23754.77734375
                    },
                    "100000000": {
                        "totalPrice": 358.23655913978496,
                        "totalProfit": 12055.642134387093
                    },
                    "200000000": {
                        "totalPrice": 567.5,
                        "totalProfit": 14941.569883749999
                    },
                    "300000000": {
                        "totalPrice": 798.3571428571429,
                        "totalProfit": 25236.495395785718
                    },
                    "400000000": {
                        "totalPrice": 1053.3333333333333,
                        "totalProfit": 30354.951902
                    }
                }
            },
            {
                "id": "631050",
                "name": "특정전염병진단비(출생전)",
                "theme": "기타",
                "confidence": 0.11858960573138874,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 2.0,
                        "totalProfit": -3.1201939582824707
                    }
                }
            },
            {
                "id": "631611",
                "name": "뇌졸중통원일당(1일이상 30일한도)[뇌졸중통원일당]",
                "theme": "입원일당",
                "confidence": 0.009122815290147253,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": 222.6163787841797
                    }
                }
            },
            {
                "id": "632384",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)",
                "theme": "3대진단",
                "confidence": 0.014094489267156257,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4521.56396484375
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1323.570068359375
                    },
                    "70000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3150.99658203125
                    },
                    "80000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3607.849609375
                    },
                    "100000000": {
                        "totalPrice": 86.82608695652173,
                        "totalProfit": 15850.988946347823
                    }
                }
            },
            {
                "id": "610468",
                "name": "중대상해수술비",
                "theme": "수술",
                "confidence": 0.01688175826141837,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14909.8232421875
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3692.107666015625
                    },
                    "20000000": {
                        "totalPrice": 824.8410504492052,
                        "totalProfit": 23219.69193350103
                    }
                }
            },
            {
                "id": "610740",
                "name": "일반상해입원일당(1일이상) 추가",
                "theme": "입원일당",
                "confidence": 1.0536028410689058e-05,
                "availableQuantities": [
                    10000,
                    20000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": 13501.6943359375
                    },
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 33824.9375
                    },
                    "50000": {
                        "totalPrice": 1760.0,
                        "totalProfit": 20666.57964
                    }
                }
            },
            {
                "id": "610889",
                "name": "일반상해수술입원일당(1일이상 20일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.001042445922637255,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 54.0,
                        "totalProfit": 96.49671173095703
                    },
                    "30000": {
                        "totalPrice": 81.0,
                        "totalProfit": 146.73721313476562
                    },
                    "50000": {
                        "totalPrice": 135.0,
                        "totalProfit": 247.21823120117188
                    }
                }
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "theme": "골절/화상",
                "confidence": 0.0552676648648394,
                "availableQuantities": [
                    200000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 500.1683349609375
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2688.748046875
                    },
                    "1000000": {
                        "totalPrice": 601.1974025974026,
                        "totalProfit": 8458.512688786457
                    }
                }
            },
            {
                "id": "631422",
                "name": "32대질병관혈수술비(연간1회한)[14대질병]",
                "theme": "수술",
                "confidence": 0.10014958943049472,
                "availableQuantities": [
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -87.20287322998047
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": -66.7178726196289
                    }
                }
            },
            {
                "id": "632113",
                "name": "저체중아(2.5kg이하)입원일당(3일이상 60일한도)",
                "theme": "태아출생",
                "confidence": 0.18564163850487544,
                "availableQuantities": [
                    10000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 555.0,
                        "totalProfit": -930.9823608398438
                    },
                    "50000": {
                        "totalPrice": 2775.0,
                        "totalProfit": -4608.6025390625
                    }
                }
            },
            {
                "id": "630999",
                "name": "다발성소아암진단비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.16542403932693997,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 180.0,
                        "totalProfit": 90.89886474609375
                    },
                    "20000000": {
                        "totalPrice": 270.0,
                        "totalProfit": 138.34042358398438
                    },
                    "30000000": {
                        "totalPrice": 450.0,
                        "totalProfit": 233.2235565185547
                    },
                    "50000000": {
                        "totalPrice": 450.0,
                        "totalProfit": 234.36983426815664
                    }
                }
            },
            {
                "id": "632120",
                "name": "독감(인플루엔자)및특정9대감염병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.27965331837178836,
                "availableQuantities": [
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": -38245.859375
                    }
                }
            },
            {
                "id": "610933",
                "name": "신화상치료비(중증화상및부식진단비)",
                "theme": "골절/화상",
                "confidence": 0.0552676648648394,
                "availableQuantities": [
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 297.1268005371094
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 526.5289916992188
                    }
                }
            },
            {
                "id": "640181",
                "name": "신깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.08588999667177401,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3458.2099609375
                    },
                    "1000000": {
                        "totalPrice": 484.8623718887262,
                        "totalProfit": 9753.30957779911
                    }
                }
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "theme": "입원일당",
                "confidence": 0.006565098164146193,
                "availableQuantities": [
                    20000,
                    30000,
                    40000,
                    50000,
                    70000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7477.0625
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12493.1591796875
                    },
                    "40000": {
                        "totalPrice": 0.0,
                        "totalProfit": 17509.3828125
                    },
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4969.0029296875
                    },
                    "70000": {
                        "totalPrice": 3164.12,
                        "totalProfit": 16121.20847249033
                    }
                }
            },
            {
                "id": "631826",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병4종]",
                "theme": "수술",
                "confidence": 0.3096443026577207,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7693.96630859375
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3823.412353515625
                    }
                }
            },
            {
                "id": "611267",
                "name": "상급병실(1인실) 종합병원 일반상해수술입원일당(1일이상 10일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.020446488780127264,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 3.0,
                        "totalProfit": 0.6770129799842834
                    },
                    "200000": {
                        "totalPrice": 6.0,
                        "totalProfit": 5.338334083557129
                    },
                    "300000": {
                        "totalPrice": 9.0,
                        "totalProfit": 9.999654769897461
                    }
                }
            },
            {
                "id": "631720",
                "name": "특정9대감염병진단비(연간1회한, 태아가입용)(출생전)",
                "theme": "3대진단",
                "confidence": 0.22393847707723916,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1324.0,
                        "totalProfit": 2343.951171875
                    },
                    "200000": {
                        "totalPrice": 2648.0,
                        "totalProfit": 4691.88671875
                    },
                    "300000": {
                        "totalPrice": 3972.0,
                        "totalProfit": 7039.82177734375
                    }
                }
            },
            {
                "id": "631405",
                "name": "선천이상수술비Ⅱ[특정선천이상](출생전)",
                "theme": "수술",
                "confidence": 0.11040273760169486,
                "availableQuantities": [
                    2000000,
                    3000000,
                    4000000,
                    5000000,
                    6000000
                ],
                "recommendedQuantity": 6000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 5888.0,
                        "totalProfit": 9081.8291015625
                    },
                    "3000000": {
                        "totalPrice": 8832.0,
                        "totalProfit": 13624.7353515625
                    },
                    "4000000": {
                        "totalPrice": 11776.0,
                        "totalProfit": 18167.642578125
                    },
                    "5000000": {
                        "totalPrice": 14720.0,
                        "totalProfit": 22710.548828125
                    },
                    "6000000": {
                        "totalPrice": 17664.0,
                        "totalProfit": 27253.455078125
                    }
                }
            },
            {
                "id": "633014",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.18212690128058648,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -51439.171875
                    },
                    "200000": {
                        "totalPrice": 946.9600997506234,
                        "totalProfit": -64660.058757481536
                    }
                }
            },
            {
                "id": "630994",
                "name": "뇌혈관질환수술비(출생전)",
                "theme": "3대진단",
                "confidence": 0.003914965087690891,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 31.836734693877553,
                        "totalProfit": 94.09993404081634
                    }
                }
            },
            {
                "id": "640205",
                "name": "신깁스치료비(출생전)",
                "theme": "골절/화상",
                "confidence": 0.048056261774074495,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 128.0,
                        "totalProfit": 173.0152587890625
                    },
                    "1000000": {
                        "totalPrice": 128.0,
                        "totalProfit": 239.2001980175438
                    }
                }
            },
            {
                "id": "611074",
                "name": "상해수술비Q",
                "theme": "수술",
                "confidence": 0.17372192747809045,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 51473.41015625
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12833.01171875
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 128754.15625
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 25713.140625
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 77233.671875
                    }
                }
            },
            {
                "id": "632216",
                "name": "신생아특정질환및외상진단비(호흡기질환)",
                "theme": "태아출생",
                "confidence": 0.20381785721240964,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 1266.3203378817414,
                        "totalProfit": 2004.208411274797
                    }
                }
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.6369259407606489,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": -9155.58984375
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -2324.365234375
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": -958.0176391601562
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -4601.431640625
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1413.4530029296875
                    }
                }
            },
            {
                "id": "632411",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.006790894204408148,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 450.0,
                        "totalProfit": -22.512353
                    },
                    "50000000": {
                        "totalPrice": 750.0,
                        "totalProfit": 716.1205535121951
                    },
                    "70000000": {
                        "totalPrice": 1050.0,
                        "totalProfit": 1052.9254150390625
                    },
                    "80000000": {
                        "totalPrice": 1200.0,
                        "totalProfit": 1203.9124755859375
                    },
                    "100000000": {
                        "totalPrice": 1500.0,
                        "totalProfit": 1505.88671875
                    }
                }
            },
            {
                "id": "610803",
                "name": "일반상해50%이상후유장해재활자금(출생전)",
                "theme": "사망후유",
                "confidence": 0.0006717393721850577,
                "availableQuantities": [
                    30000000,
                    40000000,
                    50000000,
                    60000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 50.0,
                        "totalProfit": 54.616790771484375
                    },
                    "40000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 54.65924125000001
                    },
                    "50000000": {
                        "totalPrice": 50.0,
                        "totalProfit": 60.056996528497415
                    },
                    "60000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 66.3370132446289
                    }
                }
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "theme": "골절/화상",
                "confidence": 0.0552676648648394,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 241.21282958984375
                    }
                }
            },
            {
                "id": "631061",
                "name": "호흡기관련질병수술비(출생전)",
                "theme": "수술",
                "confidence": 0.15036540121783273,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 2.0,
                        "totalProfit": -6.248042106628418
                    },
                    "300000": {
                        "totalPrice": 3.0,
                        "totalProfit": -4.510785102844238
                    }
                }
            },
            {
                "id": "630766",
                "name": "허혈성심장질환수술비",
                "theme": "3대진단",
                "confidence": 0.20176181770768337,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 922.52392578125
                    },
                    "5000000": {
                        "totalPrice": 459.08,
                        "totalProfit": 12337.874579013334
                    },
                    "10000000": {
                        "totalPrice": 700.4711538461538,
                        "totalProfit": 17926.0601808374
                    }
                }
            },
            {
                "id": "631949",
                "name": "요관역류(Ⅳ~Ⅴ등급)진단비(연간1회한)(출생전)",
                "theme": "3대진단",
                "confidence": 0.0993582150608684,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 40.0,
                        "totalProfit": 47.50128173828125
                    }
                }
            },
            {
                "id": "632343",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)",
                "theme": "3대진단",
                "confidence": 0.3728964774828914,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1131.058837890625
                    },
                    "20000000": {
                        "totalPrice": 647.9911504424779,
                        "totalProfit": 16908.041314407226
                    },
                    "30000000": {
                        "totalPrice": 1102.6779324055667,
                        "totalProfit": 26972.421342589627
                    },
                    "50000000": {
                        "totalPrice": 1212.4479166666667,
                        "totalProfit": 28835.920489190084
                    },
                    "100000000": {
                        "totalPrice": 990.3066884176183,
                        "totalProfit": 21167.035594187913
                    }
                }
            },
            {
                "id": "610912",
                "name": "골절(치아파절제외)진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.05218146649524756,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1893.499267578125
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3834.290283203125
                    },
                    "300000": {
                        "totalPrice": 1309.4892307692307,
                        "totalProfit": 18420.892294425747
                    },
                    "500000": {
                        "totalPrice": 2363.269230769231,
                        "totalProfit": 30689.409081243582
                    }
                }
            },
            {
                "id": "631063",
                "name": "희귀난치성7대질환진단비(출생전)",
                "theme": "기타",
                "confidence": 0.22621308612080812,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 15.0,
                        "totalProfit": -2.5208420753479004
                    },
                    "10000000": {
                        "totalPrice": 30.0,
                        "totalProfit": -1.0573760271072388
                    }
                }
            },
            {
                "id": "631139",
                "name": "유사암수술비",
                "theme": "수술",
                "confidence": 0.008452015940520691,
                "availableQuantities": [
                    1000000,
                    2000000,
                    4000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2065.523193359375
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1009.2521362304688
                    },
                    "4000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 164.22654724121094
                    },
                    "5000000": {
                        "totalPrice": 35.10526315789474,
                        "totalProfit": 1.7088824210526175
                    },
                    "10000000": {
                        "totalPrice": 76.73913043478261,
                        "totalProfit": -1407.1258019275363
                    }
                }
            },
            {
                "id": "631381",
                "name": "중대한재생불량성빈혈진단비",
                "theme": "기타",
                "confidence": 0.24142211082517867,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 127.3036117553711
                    }
                }
            },
            {
                "id": "632497",
                "name": "전이암진단비(특정전이암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.0030134186624827977,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 38.88055419921875
                    }
                }
            },
            {
                "id": "611265",
                "name": "상급병실(1인실) 종합병원 일반상해수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.0300185544952307,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1777.3868408203125
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 561.0908203125
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1169.2401123046875
                    }
                }
            },
            {
                "id": "610807",
                "name": "일반상해입원일당(1일이상30일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.0015796360799824598,
                "availableQuantities": [
                    20000,
                    30000,
                    40000,
                    50000,
                    70000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 79.16546762589928,
                        "totalProfit": 183.2513821366907
                    },
                    "30000": {
                        "totalPrice": 117.82608695652173,
                        "totalProfit": 247.51774976699033
                    },
                    "40000": {
                        "totalPrice": 152.0,
                        "totalProfit": 272.8109130859375
                    },
                    "50000": {
                        "totalPrice": 190.0,
                        "totalProfit": 342.00970458984375
                    },
                    "70000": {
                        "totalPrice": 266.0,
                        "totalProfit": 480.4073181152344
                    }
                }
            },
            {
                "id": "610359",
                "name": "팔및손가락장해담보",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    40000000
                ],
                "recommendedQuantity": 40000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2979.511962890625
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6006.00048828125
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4492.75634765625
                    },
                    "40000000": {
                        "totalPrice": 257.0869565217391,
                        "totalProfit": 8645.702324747277
                    }
                }
            },
            {
                "id": "610853",
                "name": "종합병원 일반상해입원일당(1일이상)(출생전)",
                "theme": "입원일당",
                "confidence": 0.013209611549564992,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 54.0,
                        "totalProfit": 82.0845718383789
                    },
                    "30000": {
                        "totalPrice": 81.0,
                        "totalProfit": 125.11901092529297
                    },
                    "50000": {
                        "totalPrice": 135.0,
                        "totalProfit": 211.18788146972656
                    }
                }
            },
            {
                "id": "631084",
                "name": "암진단비(유사암제외)(출생전)",
                "theme": "3대진단",
                "confidence": 0.006724319112327225,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 720.0,
                        "totalProfit": 589.0194230416665
                    },
                    "50000000": {
                        "totalPrice": 1200.8695652173913,
                        "totalProfit": 1387.3595955913047
                    },
                    "70000000": {
                        "totalPrice": 1680.0,
                        "totalProfit": 2456.6249461999996
                    },
                    "80000000": {
                        "totalPrice": 1920.0,
                        "totalProfit": 1819.89013671875
                    },
                    "100000000": {
                        "totalPrice": 2400.0,
                        "totalProfit": 2275.85888671875
                    }
                }
            },
            {
                "id": "632404",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.2673325301238607,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 9.0,
                        "totalProfit": 7.73150110244751
                    },
                    "20000000": {
                        "totalPrice": 18.0,
                        "totalProfit": 19.447307586669922
                    },
                    "30000000": {
                        "totalPrice": 27.0,
                        "totalProfit": 31.16311264038086
                    },
                    "50000000": {
                        "totalPrice": 45.0,
                        "totalProfit": 54.5947265625
                    },
                    "100000000": {
                        "totalPrice": 90.0,
                        "totalProfit": 113.17375183105469
                    }
                }
            },
            {
                "id": "610935",
                "name": "상해사고부상치료비[1등급]",
                "theme": "수술",
                "confidence": 0.0007558534669110618,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 20791.40234375
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12456.05078125
                    },
                    "10000000": {
                        "totalPrice": 2012.4,
                        "totalProfit": 59104.372990066666
                    }
                }
            },
            {
                "id": "631415",
                "name": "32대질병관혈수술비(연간1회한)[9대질병]",
                "theme": "수술",
                "confidence": 0.0030727689614969108,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 13384.2001953125
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 26815.431640625
                    }
                }
            },
            {
                "id": "610910",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.01623548430063734,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 16.0,
                        "totalProfit": 24.40875816345215
                    },
                    "200000": {
                        "totalPrice": 32.0,
                        "totalProfit": 52.80182647705078
                    },
                    "300000": {
                        "totalPrice": 48.0,
                        "totalProfit": 81.19489288330078
                    },
                    "400000": {
                        "totalPrice": 64.0,
                        "totalProfit": 109.58795928955078
                    },
                    "500000": {
                        "totalPrice": 80.0,
                        "totalProfit": 137.98101806640625
                    }
                }
            },
            {
                "id": "610852",
                "name": "종합병원 일반상해입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.0286709054621685,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1432.92626953125
                    },
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4393.0
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2912.92529296875
                    },
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7353.0732421875
                    }
                }
            },
            {
                "id": "630092",
                "name": "호흡기관련질병수술비",
                "theme": "수술",
                "confidence": 0.12782655859343114,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2014.67578125
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1290.77978515625
                    }
                }
            },
            {
                "id": "631414",
                "name": "32대질병관혈수술비(연간1회한)[9대질병]",
                "theme": "수술",
                "confidence": 0.10014958943049472,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6503.9921875
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 21789.77734375
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 10871.357421875
                    }
                }
            },
            {
                "id": "632492",
                "name": "전이암진단비(림프절전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.006927323849253413,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 695.1589965820312
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1437.3387451171875
                    }
                }
            },
            {
                "id": "633015",
                "name": "상급병실(1인실) 종합병원 질병수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.06582554625815565,
                "availableQuantities": [
                    100000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 528.6325073242188
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1679.904541015625
                    }
                }
            },
            {
                "id": "630110",
                "name": "조혈모세포이식수술비",
                "theme": "수술",
                "confidence": 0.2680561078913758,
                "availableQuantities": [
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2507.43798828125
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4210.48046875
                    },
                    "50000000": {
                        "totalPrice": 298.72695500218435,
                        "totalProfit": 6422.399576506135
                    }
                }
            },
            {
                "id": "632406",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.2869403732611156,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 150.0,
                        "totalProfit": 147.00283813476562
                    },
                    "20000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 297.98992919921875
                    },
                    "30000000": {
                        "totalPrice": 450.0,
                        "totalProfit": 448.9770202636719
                    },
                    "50000000": {
                        "totalPrice": 750.0,
                        "totalProfit": 750.9512329101562
                    },
                    "100000000": {
                        "totalPrice": 1500.0,
                        "totalProfit": 1505.88671875
                    }
                }
            },
            {
                "id": "631013",
                "name": "식중독입원일당(출생전)",
                "theme": "입원일당",
                "confidence": 0.08297897842378159,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 29.0,
                        "totalProfit": -13.56370735168457
                    },
                    "20000": {
                        "totalPrice": 58.0,
                        "totalProfit": -23.14310646057129
                    },
                    "30000": {
                        "totalPrice": 87.0,
                        "totalProfit": -32.72250747680664
                    }
                }
            },
            {
                "id": "632340",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)",
                "theme": "3대진단",
                "confidence": 0.34348471277700904,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 837.0576171875
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2163.23486328125
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 394.9181213378906
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1279.085693359375
                    },
                    "100000000": {
                        "totalPrice": 3783.220228384992,
                        "totalProfit": 73767.97794012907
                    }
                }
            },
            {
                "id": "630993",
                "name": "뇌졸중진단비(태아가입용)추가(출생전)",
                "theme": "3대진단",
                "confidence": NaN,
                "availableQuantities": [
                    5000000,
                    9000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 25.0,
                        "totalProfit": -570.8139038085938
                    },
                    "9000000": {
                        "totalPrice": 45.0,
                        "totalProfit": -1024.277587890625
                    },
                    "10000000": {
                        "totalPrice": 50.0,
                        "totalProfit": -1137.6435546875
                    }
                }
            },
            {
                "id": "630388",
                "name": "희귀난치성 7대질환진단비",
                "theme": "기타",
                "confidence": 0.19596012478600566,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 463.5174825174825,
                        "totalProfit": 14612.95608023777
                    },
                    "10000000": {
                        "totalPrice": 666.3417341040463,
                        "totalProfit": 17103.674998003713
                    }
                }
            },
            {
                "id": "632403",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.2575286085552333,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 8.162790697674419,
                        "totalProfit": -5.36468
                    },
                    "20000000": {
                        "totalPrice": 18.0,
                        "totalProfit": -4.31121301651001
                    },
                    "30000000": {
                        "totalPrice": 27.0,
                        "totalProfit": -4.474668025970459
                    },
                    "50000000": {
                        "totalPrice": 45.0,
                        "totalProfit": -4.801578998565674
                    },
                    "100000000": {
                        "totalPrice": 90.0,
                        "totalProfit": -5.618855953216553
                    }
                }
            },
            {
                "id": "611169",
                "name": "비운전자용 자동차사고부상치료비(Ⅱ)",
                "theme": "운전/비용",
                "confidence": 0.05806767970291569,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 28104.03125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14028.52734375
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 42179.53515625
                    }
                }
            },
            {
                "id": "631431",
                "name": "32대질병관혈수술비(연간1회한)[4대질병]",
                "theme": "수술",
                "confidence": 0.0030727689614969108,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2092.62158203125
                    },
                    "300000": {
                        "totalPrice": 58.476190476190474,
                        "totalProfit": 2856.0877419285703
                    }
                }
            },
            {
                "id": "630357",
                "name": "모야모야병개두수술비",
                "theme": "수술",
                "confidence": 0.18909674055391473,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1803.9739990234375
                    }
                }
            },
            {
                "id": "630972",
                "name": "질병후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.00032773180095528994,
                "availableQuantities": [
                    20000000,
                    30000000,
                    40000000,
                    49000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -14323.8779296875
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -11701.58984375
                    },
                    "40000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -5874.283203125
                    },
                    "49000000": {
                        "totalPrice": 245.0,
                        "totalProfit": -13856.792036
                    }
                }
            },
            {
                "id": "632385",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.014094489267156257,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 28732.21875
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 20098.458984375
                    },
                    "70000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 8586.7666015625
                    },
                    "80000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14342.60546875
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 22976.375
                    }
                }
            },
            {
                "id": "631064",
                "name": "암진단비(유사암제외)",
                "theme": "3대진단",
                "confidence": 0.011620787752927342,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 75904.7734375
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 86755.0234375
                    },
                    "70000000": {
                        "totalPrice": 2162.423076923077,
                        "totalProfit": 54985.956366692306
                    },
                    "80000000": {
                        "totalPrice": 2534.818181818182,
                        "totalProfit": 68278.49213413637
                    },
                    "100000000": {
                        "totalPrice": 2858.45,
                        "totalProfit": 57696.76814565001
                    }
                }
            },
            {
                "id": "631899",
                "name": "계속받는 특정항암호르몬약물허가치료비(연간1회한)",
                "theme": "기타",
                "confidence": 0.00036957715122316285,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 6.0,
                        "totalProfit": 310.16973260000003
                    }
                }
            },
            {
                "id": "632140",
                "name": "131대질병수술비(백내장)",
                "theme": "수술",
                "confidence": 0.4355379875447357,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 106.24193548387096,
                        "totalProfit": 872.9945320806454
                    },
                    "300000": {
                        "totalPrice": 124.08477272727272,
                        "totalProfit": 598.5655931186247
                    }
                }
            },
            {
                "id": "632383",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)",
                "theme": "3대진단",
                "confidence": 0.014094489267156257,
                "availableQuantities": [
                    20000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -712.7000732421875
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1711.2449951171875
                    },
                    "70000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -2376.94189453125
                    },
                    "80000000": {
                        "totalPrice": 87.0,
                        "totalProfit": -8936.4879565
                    },
                    "100000000": {
                        "totalPrice": 100.30434782608695,
                        "totalProfit": -10398.742629130436
                    }
                }
            },
            {
                "id": "631858",
                "name": "질병수술비(특정5대질병 제외)",
                "theme": "수술",
                "confidence": 0.211964049679383,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 16627.412109375
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3287.79345703125
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 9957.6005859375
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6622.66015625
                    }
                }
            },
            {
                "id": "631398",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.06324313524586188,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 420.0,
                        "totalProfit": -2596.17041015625
                    },
                    "300000": {
                        "totalPrice": 630.0,
                        "totalProfit": -3892.263427734375
                    },
                    "400000": {
                        "totalPrice": 840.0,
                        "totalProfit": -5188.3564453125
                    },
                    "500000": {
                        "totalPrice": 1050.0,
                        "totalProfit": -6484.44970703125
                    }
                }
            },
            {
                "id": "610886",
                "name": "신골절치료비(치아파절포함)",
                "theme": "골절/화상",
                "confidence": 0.009926053570130157,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 134738.546875
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 26909.974609375
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 40388.515625
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 67345.71875
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 13431.439453125
                    }
                }
            },
            {
                "id": "631134",
                "name": "암수술비(유사암제외)(출생전)",
                "theme": "수술",
                "confidence": 0.002542297462746261,
                "availableQuantities": [
                    1000000,
                    4000000,
                    5000000,
                    10000000,
                    15000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 136.0,
                        "totalProfit": 188.19122314453125
                    },
                    "4000000": {
                        "totalPrice": 170.0,
                        "totalProfit": 236.235107421875
                    },
                    "5000000": {
                        "totalPrice": 340.0,
                        "totalProfit": 476.45452880859375
                    },
                    "10000000": {
                        "totalPrice": 510.0,
                        "totalProfit": 716.6739501953125
                    },
                    "15000000": {
                        "totalPrice": 510.0,
                        "totalProfit": 971.2490313333333
                    }
                }
            },
            {
                "id": "630939",
                "name": "뇌혈관질환수술비",
                "theme": "수술",
                "confidence": 0.00613129189565951,
                "availableQuantities": [
                    10000000,
                    30000000,
                    40000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2561.947021484375
                    },
                    "30000000": {
                        "totalPrice": 232.0,
                        "totalProfit": 19766.073529
                    },
                    "40000000": {
                        "totalPrice": 32.0,
                        "totalProfit": 7489.875527
                    }
                }
            },
            {
                "id": "631263",
                "name": "종합병원 질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.040439906635602374,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": -12998.046875
                    },
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": -64802.32421875
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": -25949.1171875
                    },
                    "50000": {
                        "totalPrice": 3659.644578313253,
                        "totalProfit": -81706.51769744515
                    }
                }
            },
            {
                "id": "630697",
                "name": "암진단비(유사암 제외)",
                "theme": "3대진단",
                "confidence": 0.16789580360349704,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 73825.4453125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7340.2431640625
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 22114.73046875
                    },
                    "50000000": {
                        "totalPrice": 13162.929692832764,
                        "totalProfit": 314106.53222874214
                    },
                    "100000000": {
                        "totalPrice": 11410.507897934387,
                        "totalProfit": 246008.92584259043
                    }
                }
            },
            {
                "id": "632410",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.006790894204408148,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 210.0,
                        "totalProfit": 196.85427856445312
                    },
                    "50000000": {
                        "totalPrice": 350.0,
                        "totalProfit": 330.74664306640625
                    },
                    "70000000": {
                        "totalPrice": 490.0,
                        "totalProfit": 464.6390075683594
                    },
                    "80000000": {
                        "totalPrice": 560.0,
                        "totalProfit": 531.585205078125
                    },
                    "100000000": {
                        "totalPrice": 700.0,
                        "totalProfit": 665.4776000976562
                    }
                }
            },
            {
                "id": "630763",
                "name": "뇌혈관질환 수술비",
                "theme": "수술",
                "confidence": 0.19043445131651868,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1131.9132080078125
                    },
                    "10000000": {
                        "totalPrice": 605.2227995110024,
                        "totalProfit": 16998.977999373357
                    }
                }
            },
            {
                "id": "632520",
                "name": "131대질병수술비(다빈도62대질병)",
                "theme": "수술",
                "confidence": 0.49989025373953694,
                "availableQuantities": [
                    300000,
                    500000,
                    700000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12766.1416015625
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6359.57373046875
                    },
                    "700000": {
                        "totalPrice": 0.0,
                        "totalProfit": 25579.287109375
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3796.946533203125
                    },
                    "2000000": {
                        "totalPrice": 2978.928909952607,
                        "totalProfit": 64223.18698752956
                    }
                }
            },
            {
                "id": "631037",
                "name": "질병입원일당(1일이상30일한도)(출생전)",
                "theme": null,
                "confidence": 0.007002354052419091,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    70000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1173.0,
                        "totalProfit": 1024.476278
                    },
                    "20000": {
                        "totalPrice": 2345.5135135135133,
                        "totalProfit": 1766.615710189189
                    },
                    "30000": {
                        "totalPrice": 3518.2340425531916,
                        "totalProfit": -819.7914954999999
                    },
                    "40000": {
                        "totalPrice": 4692.0,
                        "totalProfit": 1014.6375122070312
                    },
                    "70000": {
                        "totalPrice": 8211.0,
                        "totalProfit": 1778.6038818359375
                    }
                }
            },
            {
                "id": "631166",
                "name": "5대기관질병수술비(Ⅱ)(연간1회한)",
                "theme": "수술",
                "confidence": 0.18410243185542577,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 68713.5078125
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 34333.16796875
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 137474.375
                    },
                    "20000000": {
                        "totalPrice": 7004.106990014266,
                        "totalProfit": 196331.27531236096
                    },
                    "30000000": {
                        "totalPrice": 10753.736842105263,
                        "totalProfit": 297214.52878934203
                    }
                }
            },
            {
                "id": "631170",
                "name": "5대기관질병수술비(Ⅱ)(연간1회한)(출생전)",
                "theme": "수술",
                "confidence": 0.0038822151473006986,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 210.79623413085938
                    },
                    "10000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 425.5767517089844
                    },
                    "20000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 640.3572998046875
                    },
                    "30000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 622.2167358888889
                    }
                }
            },
            {
                "id": "610487",
                "name": "5대골절진단비",
                "theme": "골절/화상",
                "confidence": 0.017179990237135415,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": -6782.48876953125
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -10150.12890625
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1731.0247802734375
                    },
                    "3000000": {
                        "totalPrice": 1302.9628099173553,
                        "totalProfit": 5314.83022913044
                    }
                }
            },
            {
                "id": "610812",
                "name": "일반상해후유장해(20~100%)(출생전)",
                "theme": "사망후유",
                "confidence": 0.00025782119937307944,
                "availableQuantities": [
                    50000000,
                    100000000,
                    150000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 50.0,
                        "totalProfit": -73.8054428100586
                    },
                    "100000000": {
                        "totalPrice": 100.0,
                        "totalProfit": -143.62657165527344
                    },
                    "150000000": {
                        "totalPrice": 150.0,
                        "totalProfit": -213.4477081298828
                    }
                }
            },
            {
                "id": "611075",
                "name": "상해수술비Q(출생전)",
                "theme": "수술",
                "confidence": 0.18352584904671793,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 150.0,
                        "totalProfit": -15.669315338134766
                    },
                    "1000000": {
                        "totalPrice": 300.0,
                        "totalProfit": -27.35432243347168
                    },
                    "2000000": {
                        "totalPrice": 600.0,
                        "totalProfit": -50.72433853149414
                    },
                    "3000000": {
                        "totalPrice": 900.0,
                        "totalProfit": -74.09435272216797
                    },
                    "5000000": {
                        "totalPrice": 1500.0,
                        "totalProfit": -120.83438110351562
                    }
                }
            },
            {
                "id": "631954",
                "name": "중등증이상아토피진단비",
                "theme": "기타",
                "confidence": 0.0775284819746242,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 40565.35546875
                    },
                    "300000": {
                        "totalPrice": 1538.421052631579,
                        "totalProfit": 53484.62087657894
                    },
                    "500000": {
                        "totalPrice": 2610.0631487889273,
                        "totalProfit": 98646.15790289876
                    }
                }
            },
            {
                "id": "632481",
                "name": "전이암진단비(특정전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.1941685462285693,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2336.38330078125
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1144.5924072265625
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 548.726318359375
                    }
                }
            },
            {
                "id": "630990",
                "name": "급성심근경색증진단비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.06707479595312485,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 3.0,
                        "totalProfit": 4.070553779602051
                    },
                    "20000000": {
                        "totalPrice": 6.0,
                        "totalProfit": 12.125414848327637
                    },
                    "30000000": {
                        "totalPrice": 9.0,
                        "totalProfit": 20.18027687072754
                    }
                }
            },
            {
                "id": "631265",
                "name": "종합병원 질병입원일당(1일이상)(출생전)",
                "theme": "입원일당",
                "confidence": 0.010349376582658283,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1820.0,
                        "totalProfit": -2192.104736328125
                    },
                    "20000": {
                        "totalPrice": 2730.0,
                        "totalProfit": -3286.1650390625
                    },
                    "30000": {
                        "totalPrice": 3640.0,
                        "totalProfit": -4380.22509765625
                    },
                    "40000": {
                        "totalPrice": 3640.0,
                        "totalProfit": -10202.279343799999
                    },
                    "50000": {
                        "totalPrice": 4550.0,
                        "totalProfit": -5474.28564453125
                    }
                }
            },
            {
                "id": "630331",
                "name": "질병고도후유장해",
                "theme": "사망후유",
                "confidence": 0.006464122798138205,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    40000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1475.40869140625
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1170.937744140625
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 866.4515380859375
                    },
                    "40000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 561.9806518554688
                    },
                    "50000000": {
                        "totalPrice": 652.6716417910447,
                        "totalProfit": 19689.623665305964
                    }
                }
            },
            {
                "id": "610916",
                "name": "골절(치아파절제외)진단비Ⅱ(출생전)",
                "theme": "골절/화상",
                "confidence": 0.02372022186380346,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 126.0,
                        "totalProfit": 21.067283630371094
                    },
                    "200000": {
                        "totalPrice": 83.20289855072464,
                        "totalProfit": 36.24624982608694
                    },
                    "300000": {
                        "totalPrice": 125.15107913669065,
                        "totalProfit": 50.746542688910225
                    },
                    "500000": {
                        "totalPrice": 210.0,
                        "totalProfit": 37.76834487915039
                    }
                }
            },
            {
                "id": "610936",
                "name": "상해사고부상치료비[2등급]",
                "theme": "수술",
                "confidence": 0.0007558534669110618,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 64401.2265625
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 214780.484375
                    },
                    "10000000": {
                        "totalPrice": 10056.416666666666,
                        "totalProfit": 292166.28779916663
                    }
                }
            },
            {
                "id": "640353",
                "name": "기흉진단비(태아가입용) 추가(출생전)",
                "theme": "기타",
                "confidence": 0.33763287209968046,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 18.34270668029785
                    }
                }
            },
            {
                "id": "633022",
                "name": "상급병실(1인실) 종합병원 질병수술입원일당(1일이상 10일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.026049278242187918,
                "availableQuantities": [
                    100000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 30.0,
                        "totalProfit": 42.025718688964844
                    },
                    "300000": {
                        "totalPrice": 90.0,
                        "totalProfit": 134.0457763671875
                    }
                }
            },
            {
                "id": "611266",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.0691097277803566,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 80.0,
                        "totalProfit": -66.0396728515625
                    },
                    "200000": {
                        "totalPrice": 80.0,
                        "totalProfit": 35.146803258366816
                    }
                }
            },
            {
                "id": "631060",
                "name": "허혈성심장질환진단비(감액없음)추가(출생전)",
                "theme": "3대진단",
                "confidence": 0.0017137870126218138,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 11.0,
                        "totalProfit": 7.4011688232421875
                    }
                }
            },
            {
                "id": "631824",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병2종]",
                "theme": "수술",
                "confidence": 0.29003645952046575,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3025.515869140625
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2001.304931640625
                    }
                }
            },
            {
                "id": "632134",
                "name": "131대질병수술비(특정31대질병)",
                "theme": "수술",
                "confidence": 0.38651837970159847,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 28562.98828125
                    },
                    "5000000": {
                        "totalPrice": 1514.1621262458473,
                        "totalProfit": 34115.70870185542
                    },
                    "10000000": {
                        "totalPrice": 2653.0415667466027,
                        "totalProfit": 53547.129976112694
                    }
                }
            },
            {
                "id": "631376",
                "name": "질병수술입원일당(1일이상 20일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.0024926699101560264,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 136.0,
                        "totalProfit": 93.9029769897461
                    },
                    "30000": {
                        "totalPrice": 204.0,
                        "totalProfit": 142.84661865234375
                    },
                    "50000": {
                        "totalPrice": 340.0,
                        "totalProfit": 240.73390197753906
                    }
                }
            },
            {
                "id": "631406",
                "name": "32대질병관혈수술비(연간1회한)[5대질병]",
                "theme": "수술",
                "confidence": 0.10014958943049472,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 87308.4765625
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 21791.755859375
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 13056.1435546875
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 43630.6640625
                    }
                }
            },
            {
                "id": "632480",
                "name": "전이암진단비(림프절전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.1941685462285693,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2017.3560791015625
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 496.8509826660156
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 985.1008911132812
                    }
                }
            },
            {
                "id": "611264",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.08903390322848338,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -31322.125
                    },
                    "200000": {
                        "totalPrice": 299.11420118343193,
                        "totalProfit": -16212.51901338541
                    }
                }
            },
            {
                "id": "630463",
                "name": "말기신부전증진단비",
                "theme": "수술",
                "confidence": 0.07389943896410374,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 46.46174621582031
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 186.80397033691406
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -0.4233410060405731
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 93.16510772705078
                    }
                }
            },
            {
                "id": "632341",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.35328863434563645,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14002.7900390625
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6977.9072265625
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1358.0009765625
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2762.9775390625
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4167.9541015625
                    }
                }
            },
            {
                "id": "610780",
                "name": "일반상해후유장해(20~100%)",
                "theme": "사망후유",
                "confidence": 0.0007494468868916293,
                "availableQuantities": [
                    10000000,
                    50000000,
                    100000000,
                    150000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -4120.279296875
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -861.7179565429688
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -12266.6728515625
                    },
                    "150000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -8193.478515625
                    }
                }
            },
            {
                "id": "610814",
                "name": "일반상해후유장해(3~100%)(출생전)",
                "theme": "사망후유",
                "confidence": 0.001429629248822256,
                "availableQuantities": [
                    50000000,
                    100000000,
                    200000000,
                    300000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 400.0,
                        "totalProfit": 701.0789794921875
                    },
                    "100000000": {
                        "totalPrice": 600.0,
                        "totalProfit": 1053.610595703125
                    },
                    "200000000": {
                        "totalPrice": 611.7647058823529,
                        "totalProfit": 1463.8495357058825
                    },
                    "300000000": {
                        "totalPrice": 666.6666666666666,
                        "totalProfit": 1847.7506325555555
                    }
                }
            },
            {
                "id": "640384",
                "name": "아나필락시스진단비(응급, 연간1회한)(출생전)",
                "theme": "기타",
                "confidence": 0.24480354005675845,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 52.291072845458984
                    },
                    "2000000": {
                        "totalPrice": 80.0,
                        "totalProfit": 108.56645202636719
                    }
                }
            },
            {
                "id": "632342",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.3630925559142639,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 20057.453125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3973.908447265625
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 40161.89453125
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12015.673828125
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7994.791015625
                    }
                }
            },
            {
                "id": "632409",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.006790894204408148,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 45.0,
                        "totalProfit": 54.5947265625
                    },
                    "50000000": {
                        "totalPrice": 63.0,
                        "totalProfit": 78.02633666992188
                    },
                    "70000000": {
                        "totalPrice": 72.0,
                        "totalProfit": 89.74214172363281
                    },
                    "80000000": {
                        "totalPrice": 90.0,
                        "totalProfit": 113.17375183105469
                    },
                    "100000000": {
                        "totalPrice": 88.0,
                        "totalProfit": 135.46053199999997
                    }
                }
            },
            {
                "id": "640386",
                "name": "특정생검조직병리검사비(급여,연간1회한)",
                "theme": "기타",
                "confidence": 0.0990485737763565,
                "availableQuantities": [
                    300000,
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1399.836181640625
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1038.0185546875
                    }
                }
            },
            {
                "id": "630998",
                "name": "뇌혈관질환진단비(태아가입용)추가(출생전)",
                "theme": "3대진단",
                "confidence": 0.001791970420568584,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 60.0,
                        "totalProfit": -2911.216796875
                    }
                }
            },
            {
                "id": "631404",
                "name": "선천이상수술비Ⅱ[특정선천이상]",
                "theme": "수술",
                "confidence": 0.11040273760169486,
                "availableQuantities": [
                    2000000,
                    3000000,
                    4000000,
                    5000000,
                    6000000
                ],
                "recommendedQuantity": 6000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 23218.27734375
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 29034.591796875
                    },
                    "4000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 17401.96484375
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 11585.650390625
                    },
                    "6000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 34850.90625
                    }
                }
            },
            {
                "id": "630383",
                "name": "뇌혈관질환진단비(태아가입용)",
                "theme": "3대진단",
                "confidence": 0.21686047805236602,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -5484.15625
                    },
                    "20000000": {
                        "totalPrice": 3666.9644736842106,
                        "totalProfit": 77330.23598313324
                    }
                }
            },
            {
                "id": "632407",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.29674429482974307,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 4.0,
                        "totalProfit": 1.9866219758987427
                    },
                    "20000000": {
                        "totalPrice": 8.0,
                        "totalProfit": 7.957550048828125
                    },
                    "30000000": {
                        "totalPrice": 12.0,
                        "totalProfit": 13.928478240966797
                    },
                    "50000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 25.87033462524414
                    },
                    "100000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 55.7249755859375
                    }
                }
            },
            {
                "id": "610887",
                "name": "신골절치료비(치아파절포함)(출생전)",
                "theme": "골절/화상",
                "confidence": 0.0029683909409601366,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 121.0,
                        "totalProfit": 187.1798095703125
                    },
                    "2000000": {
                        "totalPrice": 242.0,
                        "totalProfit": 378.34393310546875
                    },
                    "3000000": {
                        "totalPrice": 363.0,
                        "totalProfit": 569.508056640625
                    },
                    "5000000": {
                        "totalPrice": 605.0,
                        "totalProfit": 951.8363037109375
                    },
                    "10000000": {
                        "totalPrice": 1210.0,
                        "totalProfit": 1907.656982421875
                    }
                }
            },
            {
                "id": "632339",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)",
                "theme": "3대진단",
                "confidence": 0.33368079120838157,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1553.9530029296875
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -2558.53955078125
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -5069.92041015625
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -549.3626708984375
                    },
                    "100000000": {
                        "totalPrice": 2177.2247557003257,
                        "totalProfit": 32357.04396436377
                    }
                }
            },
            {
                "id": "633021",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.08514190934548357,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1020.0,
                        "totalProfit": -8113.79052734375
                    },
                    "200000": {
                        "totalPrice": 1026.4039408866995,
                        "totalProfit": -7645.821137461484
                    }
                }
            },
            {
                "id": "632138",
                "name": "131대질병수술비(뇌혈관질환)",
                "theme": "수술",
                "confidence": 0.41593014440748083,
                "availableQuantities": [
                    1000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1087.209228515625
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 179.62635803222656
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2221.583740234375
                    },
                    "10000000": {
                        "totalPrice": 512.8283783783784,
                        "totalProfit": 14436.44933619393
                    }
                }
            },
            {
                "id": "632387",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)",
                "theme": "3대진단",
                "confidence": 0.014094489267156257,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1303.9345703125
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3555.60107421875
                    },
                    "70000000": {
                        "totalPrice": 126.0,
                        "totalProfit": 5137.918614555554
                    },
                    "80000000": {
                        "totalPrice": 142.75,
                        "totalProfit": 4946.28978075
                    },
                    "100000000": {
                        "totalPrice": 172.47826086956522,
                        "totalProfit": 5515.031051130434
                    }
                }
            },
            {
                "id": "611010",
                "name": "특정외상성손상진단비",
                "theme": "기타",
                "confidence": 0.03207769592971043,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7009.3466796875
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14065.6455078125
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 28178.244140625
                    }
                }
            },
            {
                "id": "632526",
                "name": "131대질병수술비(유방의장애)",
                "theme": "수술",
                "confidence": 0.5096941753081644,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -2256.05517578125
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": -3758.7236328125
                    },
                    "1000000": {
                        "totalPrice": 26.017214397496087,
                        "totalProfit": -7760.14322809162
                    }
                }
            },
            {
                "id": "631403",
                "name": "선천이상수술비Ⅱ[다발성선천이상(연간6회한)](출생전)",
                "theme": "태아출생",
                "confidence": 0.11040273760169486,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 156.0,
                        "totalProfit": -1458.9669189453125
                    },
                    "200000": {
                        "totalPrice": 233.0,
                        "totalProfit": -2192.538818359375
                    },
                    "300000": {
                        "totalPrice": 311.0,
                        "totalProfit": -2918.595458984375
                    },
                    "400000": {
                        "totalPrice": 311.0,
                        "totalProfit": -4225.892278840001
                    }
                }
            },
            {
                "id": "631430",
                "name": "32대질병관혈수술비(연간1회한)[4대질병]",
                "theme": "수술",
                "confidence": 0.10014958943049472,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2328.9130859375
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1547.8258056640625
                    }
                }
            },
            {
                "id": "630024",
                "name": "항암방사선약물치료비",
                "theme": "3대진단",
                "confidence": 0.2113128984433039,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 20170.8515625
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1974.8082275390625
                    },
                    "10000000": {
                        "totalPrice": 1320.0546296296295,
                        "totalProfit": 34053.89302979906
                    },
                    "20000000": {
                        "totalPrice": 2255.10599078341,
                        "totalProfit": 57740.05124294444
                    },
                    "30000000": {
                        "totalPrice": 2772.4716006884682,
                        "totalProfit": 69708.84486209831
                    }
                }
            },
            {
                "id": "631019",
                "name": "암진단비(유사암제외)(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.12463429772706086,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 720.0,
                        "totalProfit": 679.9686279296875
                    },
                    "20000000": {
                        "totalPrice": 481.08474576271186,
                        "totalProfit": 673.1197439220341
                    },
                    "30000000": {
                        "totalPrice": 722.3516237402016,
                        "totalProfit": 795.3129171760087
                    },
                    "50000000": {
                        "totalPrice": 1200.0,
                        "totalProfit": 1135.937255859375
                    },
                    "100000000": {
                        "totalPrice": 2400.0,
                        "totalProfit": 2275.85888671875
                    }
                }
            },
            {
                "id": "631953",
                "name": "특정요로감염(N39.0) 및 신생아요로감염진단비(연간1회한)(출생전)",
                "theme": "기타",
                "confidence": 0.1364692019641319,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 1901.5096566523605,
                        "totalProfit": 5028.51594224718
                    }
                }
            },
            {
                "id": "610777",
                "name": "일반상해입원일당(1일이상30일한도)",
                "theme": "입원일당",
                "confidence": 0.0015240246497844185,
                "availableQuantities": [
                    20000,
                    30000,
                    40000,
                    50000,
                    70000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14046.8310546875
                    },
                    "30000": {
                        "totalPrice": 1495.549356223176,
                        "totalProfit": 45156.988520353465
                    },
                    "40000": {
                        "totalPrice": 1693.3692307692309,
                        "totalProfit": 38840.62427332306
                    },
                    "50000": {
                        "totalPrice": 2338.6666666666665,
                        "totalProfit": 74727.80452340622
                    },
                    "70000": {
                        "totalPrice": 3104.294117647059,
                        "totalProfit": 80554.09677458824
                    }
                }
            },
            {
                "id": "632317",
                "name": "암 내시경검사비(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.03331594088433725,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1.0,
                        "totalProfit": 189.51173939072854
                    }
                }
            },
            {
                "id": "631897",
                "name": "특정호르몬약물허가치료비[특정항암]",
                "theme": "3대진단",
                "confidence": 0.0004969342774918188,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 56.77655029296875
                    },
                    "1000000": {
                        "totalPrice": 6.0,
                        "totalProfit": 245.97747650000002
                    }
                }
            },
            {
                "id": "632136",
                "name": "131대질병수술비(관절염,생식기질환)",
                "theme": "수술",
                "confidence": 0.39632230127022594,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 91.24587570621469,
                        "totalProfit": 1597.3043576683262
                    }
                }
            },
            {
                "id": "610923",
                "name": "골절진단비Ⅱ(출생전)",
                "theme": "골절/화상",
                "confidence": 0.04477642048844121,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 50.0,
                        "totalProfit": 3.1679258666666668
                    },
                    "200000": {
                        "totalPrice": 99.63836477987421,
                        "totalProfit": 16.157515632179404
                    },
                    "300000": {
                        "totalPrice": 149.6056338028169,
                        "totalProfit": 21.62027362206571
                    },
                    "500000": {
                        "totalPrice": 250.0,
                        "totalProfit": 2.031122922897339
                    }
                }
            },
            {
                "id": "610792",
                "name": "5대골절진단비(출생전)",
                "theme": "골절/화상",
                "confidence": 0.006088101787197512,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 25.0,
                        "totalProfit": -5.261903762817383
                    },
                    "1000000": {
                        "totalPrice": 50.0,
                        "totalProfit": -6.539501190185547
                    },
                    "2000000": {
                        "totalPrice": 100.0,
                        "totalProfit": -9.094694137573242
                    },
                    "3000000": {
                        "totalPrice": 150.0,
                        "totalProfit": -11.649887084960938
                    }
                }
            },
            {
                "id": "611034",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해2종]",
                "theme": "수술",
                "confidence": 0.05001398916156688,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 176.98717948717947,
                        "totalProfit": 4446.506260410256
                    },
                    "300000": {
                        "totalPrice": 254.2959442332066,
                        "totalProfit": 6818.85092161192
                    }
                }
            },
            {
                "id": "632139",
                "name": "131대질병수술비(후각특정질환)",
                "theme": "수술",
                "confidence": 0.42573406597610824,
                "availableQuantities": [
                    300000,
                    700000,
                    1000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 727.0816650390625
                    },
                    "700000": {
                        "totalPrice": 189.72727272727272,
                        "totalProfit": 2187.5712270363642
                    },
                    "1000000": {
                        "totalPrice": 261.4238070805541,
                        "totalProfit": 3974.2541486659816
                    }
                }
            },
            {
                "id": "632405",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.2771364516924882,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 70.0,
                        "totalProfit": 62.9619026184082
                    },
                    "20000000": {
                        "totalPrice": 140.0,
                        "totalProfit": 129.90809631347656
                    },
                    "30000000": {
                        "totalPrice": 210.0,
                        "totalProfit": 196.85427856445312
                    },
                    "50000000": {
                        "totalPrice": 350.0,
                        "totalProfit": 330.74664306640625
                    },
                    "100000000": {
                        "totalPrice": 700.0,
                        "totalProfit": 665.4776000976562
                    }
                }
            },
            {
                "id": "630019",
                "name": "질병 중환자실입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.0343487886732565,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": -277971.9375
                    },
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -166801.953125
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": -111216.9609375
                    },
                    "300000": {
                        "totalPrice": 2844.7441860465115,
                        "totalProfit": -168617.5479743256
                    },
                    "500000": {
                        "totalPrice": 4878.604651162791,
                        "totalProfit": -299194.02887579077
                    }
                }
            },
            {
                "id": "632408",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.006790894204408148,
                "availableQuantities": [
                    20000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 63.0,
                        "totalProfit": -5.128489017486572
                    },
                    "50000000": {
                        "totalPrice": 72.0,
                        "totalProfit": -5.291944980621338
                    },
                    "70000000": {
                        "totalPrice": 63.0,
                        "totalProfit": -64.76185166666664
                    },
                    "80000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 17.88874225
                    },
                    "100000000": {
                        "totalPrice": 90.0,
                        "totalProfit": -5.618855953216553
                    }
                }
            },
            {
                "id": "630936",
                "name": "유사암진단비",
                "theme": "3대진단",
                "confidence": 0.0005107536041936165,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000,
                    6000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 476.7556457519531
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1000.6165161132812
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 267.10107421875
                    },
                    "6000000": {
                        "totalPrice": 528.0,
                        "totalProfit": 6956.619629
                    },
                    "10000000": {
                        "totalPrice": 244.0,
                        "totalProfit": 4262.0453196
                    }
                }
            },
            {
                "id": "632532",
                "name": "131대질병수술비(편도염)",
                "theme": "수술",
                "confidence": 0.5194980968767918,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3713.201904296875
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1833.021728515625
                    },
                    "1000000": {
                        "totalPrice": 174.0498753117207,
                        "totalProfit": 4435.529416907406
                    }
                }
            },
            {
                "id": "630236",
                "name": "심장관련소아특정질병진단비",
                "theme": null,
                "confidence": 0.16666581257072666,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 143.15428130624838,
                        "totalProfit": -5279.537802750899
                    }
                }
            },
            {
                "id": "632133",
                "name": "131대질병수술비(심장질환)",
                "theme": "수술",
                "confidence": 0.376714458132971,
                "availableQuantities": [
                    1000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5090.37353515625
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1665.3973388671875
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 8515.375
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 17077.86328125
                    }
                }
            },
            {
                "id": "630971",
                "name": "질병후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.2360067203287044,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -10410.8564453125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -17320.0234375
                    },
                    "30000000": {
                        "totalPrice": 5959.415517241379,
                        "totalProfit": 133772.38472213442
                    },
                    "50000000": {
                        "totalPrice": 5306.807831523527,
                        "totalProfit": 85805.06941171746
                    }
                }
            },
            {
                "id": "631898",
                "name": "특정호르몬약물허가치료비[갑상선암수술후]",
                "theme": "3대진단",
                "confidence": 0.0004969342774918188,
                "availableQuantities": [
                    500000,
                    4000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 554.8182373046875
                    },
                    "4000000": {
                        "totalPrice": 4.0,
                        "totalProfit": 551.1342825
                    }
                }
            },
            {
                "id": "632490",
                "name": "전이암진단비(림프절전이암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.1490757762511686,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 3.0,
                        "totalProfit": -3.794437885284424
                    },
                    "10000000": {
                        "totalPrice": 5.0,
                        "totalProfit": -5.381494045257568
                    },
                    "20000000": {
                        "totalPrice": 10.0,
                        "totalProfit": -6.778679847717285
                    }
                }
            },
            {
                "id": "630527",
                "name": "유사암진단비",
                "theme": "3대진단",
                "confidence": 0.31062493353081483,
                "availableQuantities": [
                    2000000,
                    4000000,
                    6000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 755.5960693359375
                    },
                    "4000000": {
                        "totalPrice": 333.72222222222223,
                        "totalProfit": 5832.165202040214
                    },
                    "6000000": {
                        "totalPrice": 494.7881729920565,
                        "totalProfit": 9034.005330207596
                    },
                    "10000000": {
                        "totalPrice": 627.4041650597763,
                        "totalProfit": 12344.536911622059
                    },
                    "20000000": {
                        "totalPrice": 906.4469931804092,
                        "totalProfit": 12804.27902489764
                    }
                }
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.09078237653540466,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7665.3955078125
                    },
                    "200000": {
                        "totalPrice": 1184.3385003604903,
                        "totalProfit": 18219.433865857656
                    },
                    "300000": {
                        "totalPrice": 1824.7456896551723,
                        "totalProfit": 27873.072548806005
                    },
                    "500000": {
                        "totalPrice": 2793.594585671839,
                        "totalProfit": 40138.0189620826
                    }
                }
            },
            {
                "id": "630246",
                "name": "만성당뇨합병증진단비",
                "theme": "기타",
                "confidence": 0.12309288579377746,
                "availableQuantities": [
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -87.65580749511719
                    },
                    "5000000": {
                        "totalPrice": 124.75562851782364,
                        "totalProfit": 3137.1856472036666
                    }
                }
            },
            {
                "id": "631012",
                "name": "소아탈장수술비(출생전)",
                "theme": "수술",
                "confidence": 0.19250889779733743,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 95.0,
                        "totalProfit": 124.60958099365234
                    }
                }
            },
            {
                "id": "640443",
                "name": "7대장기이식대기등록",
                "theme": "기타",
                "confidence": 0.32423331164694025,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5456.66943359375
                    }
                }
            },
            {
                "id": "631972",
                "name": "질병수술비Q",
                "theme": "수술",
                "confidence": 0.3970741619826203,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 8852.4814453125
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 22201.72265625
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4402.72900390625
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 13302.2177734375
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 17751.974609375
                    }
                }
            },
            {
                "id": "632412",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.006790894204408148,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 12.0,
                        "totalProfit": 4.55777
                    },
                    "50000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 28.266159707317073
                    },
                    "70000000": {
                        "totalPrice": 28.0,
                        "totalProfit": 17.623348666666665
                    },
                    "80000000": {
                        "totalPrice": 32.0,
                        "totalProfit": 43.783119201660156
                    },
                    "100000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 55.7249755859375
                    }
                }
            },
            {
                "id": "630381",
                "name": "뇌졸중진단비(태아가입용)",
                "theme": "3대진단",
                "confidence": 0.07187521352910599,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -723.5941772460938
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1399.9918212890625
                    }
                }
            },
            {
                "id": "632377",
                "name": "암수술비(유사암제외)(25%체증형)",
                "theme": "수술",
                "confidence": 0.008546922272606816,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000,
                    15000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2638.72900390625
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 20095.908203125
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6667.30615234375
                    },
                    "15000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 13381.607421875
                    }
                }
            },
            {
                "id": "610804",
                "name": "일반상해80%이상후유장해재활자금(출생전)",
                "theme": "사망후유",
                "confidence": 0.00035416502269797846,
                "availableQuantities": [
                    50000000,
                    100000000,
                    200000000,
                    300000000,
                    400000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 5.5164316875
                    },
                    "100000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 64.47245025634766
                    },
                    "200000000": {
                        "totalPrice": 80.0,
                        "totalProfit": 132.92921447753906
                    },
                    "300000000": {
                        "totalPrice": 120.0,
                        "totalProfit": 201.38597106933594
                    },
                    "400000000": {
                        "totalPrice": 160.0,
                        "totalProfit": 269.84271240234375
                    }
                }
            },
            {
                "id": "630207",
                "name": "고액암진단비",
                "theme": "3대진단",
                "confidence": 0.02288235580707823,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4472.09228515625
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 13510.2919921875
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 22548.505859375
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 8991.203125
                    }
                }
            },
            {
                "id": "632132",
                "name": "독감(인플루엔자)및특정9대감염병입원일당(1일이상 30일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.2502852347783101,
                "availableQuantities": [
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 270.0,
                        "totalProfit": -1422.1842041015625
                    }
                }
            },
            {
                "id": "631055",
                "name": "항암방사선약물치료비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.23677391624336808,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 180.0,
                        "totalProfit": 214.42767333984375
                    },
                    "5000000": {
                        "totalPrice": 89.6234393878373,
                        "totalProfit": 130.17065830902493
                    },
                    "10000000": {
                        "totalPrice": 179.21225382932167,
                        "totalProfit": 262.6218540306682
                    },
                    "20000000": {
                        "totalPrice": 360.0,
                        "totalProfit": 432.83966064453125
                    },
                    "30000000": {
                        "totalPrice": 540.0,
                        "totalProfit": 651.2516479492188
                    }
                }
            },
            {
                "id": "610781",
                "name": "일반상해후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.030441954930985754,
                "availableQuantities": [
                    1000000,
                    10000000,
                    50000000,
                    100000000,
                    200000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 41267.29296875
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 20610.14453125
                    },
                    "50000000": {
                        "totalPrice": 1370.1622464898596,
                        "totalProfit": 43107.52496751058
                    },
                    "100000000": {
                        "totalPrice": 2417.1757679180887,
                        "totalProfit": 75143.30787148463
                    },
                    "200000000": {
                        "totalPrice": 4615.186567164179,
                        "totalProfit": 149751.9182388753
                    }
                }
            },
            {
                "id": "632141",
                "name": "131대질병수술비(특정다빈도29대질병)",
                "theme": "수술",
                "confidence": 0.4453419091133632,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2371.979248046875
                    },
                    "200000": {
                        "totalPrice": 145.216091954023,
                        "totalProfit": 3729.7233063551043
                    },
                    "300000": {
                        "totalPrice": 205.50588235294117,
                        "totalProfit": 5919.8784601000025
                    },
                    "400000": {
                        "totalPrice": 264.5597235932873,
                        "totalProfit": 6847.559889514606
                    }
                }
            },
            {
                "id": "631169",
                "name": "5대기관질병수술비(Ⅱ)(연간1회한)(출생전)",
                "theme": "수술",
                "confidence": 0.1521060369771905,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 210.79623413085938
                    },
                    "5000000": {
                        "totalPrice": 49.608938547486034,
                        "totalProfit": 128.29120532276116
                    },
                    "10000000": {
                        "totalPrice": 99.14098972922503,
                        "totalProfit": 268.3639882252335
                    },
                    "20000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 425.5767517089844
                    },
                    "30000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 640.3572998046875
                    }
                }
            },
            {
                "id": "631612",
                "name": "뇌졸중통원일당(1일이상 30일한도)[뇌졸중상급종합병원통원일당]",
                "theme": "입원일당",
                "confidence": 0.009122815290147253,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 437.0927734375
                    }
                }
            },
            {
                "id": "611039",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해7종]",
                "theme": "수술",
                "confidence": 0.09903359700470414,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 243.615478515625
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 534.3374633789062
                    },
                    "20000000": {
                        "totalPrice": 98.87265366212735,
                        "totalProfit": 2829.2356406335157
                    }
                }
            },
            {
                "id": "611033",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해1종]",
                "theme": "수술",
                "confidence": 0.04021006759293943,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 16870.134765625
                    },
                    "200000": {
                        "totalPrice": 902.7820512820513,
                        "totalProfit": 27639.87311181196
                    },
                    "300000": {
                        "totalPrice": 1236.260544217687,
                        "totalProfit": 34531.78831139447
                    }
                }
            },
            {
                "id": "611068",
                "name": "5대골절수술비Q(출생전)",
                "theme": "골절/화상",
                "confidence": 0.07448497055970098,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 10.0,
                        "totalProfit": -9.751550674438477
                    },
                    "2000000": {
                        "totalPrice": 20.0,
                        "totalProfit": -15.518795013427734
                    }
                }
            },
            {
                "id": "630387",
                "name": "중증세균성수막염진단비",
                "theme": "기타",
                "confidence": 0.16849582574844577,
                "availableQuantities": [
                    5000000,
                    9000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1295.1851806640625
                    },
                    "9000000": {
                        "totalPrice": 24.677419354838708,
                        "totalProfit": -1055.3748682857142
                    },
                    "10000000": {
                        "totalPrice": 28.221960255978445,
                        "totalProfit": -1214.590105419453
                    }
                }
            },
            {
                "id": "632115",
                "name": "신생아입원일당(1일이상 120일한도)",
                "theme": "태아출생",
                "confidence": 0.1603307977699921,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1475.0,
                        "totalProfit": -3814.651611328125
                    }
                }
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "theme": "3대진단",
                "confidence": 0.2886805808389468,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4244.80517578125
                    },
                    "20000000": {
                        "totalPrice": 2461.6294526498696,
                        "totalProfit": 63012.45773693168
                    },
                    "30000000": {
                        "totalPrice": 2982.440366972477,
                        "totalProfit": 102210.59546351378
                    }
                }
            },
            {
                "id": "632386",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.014094489267156257,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 34511.40625
                    },
                    "50000000": {
                        "totalPrice": 1010.7272727272727,
                        "totalProfit": 20081.223089863637
                    },
                    "70000000": {
                        "totalPrice": 1400.0,
                        "totalProfit": 32261.220141000005
                    },
                    "80000000": {
                        "totalPrice": 1584.0,
                        "totalProfit": 28161.85373925
                    },
                    "100000000": {
                        "totalPrice": 1936.5217391304348,
                        "totalProfit": 32116.742292260868
                    }
                }
            },
            {
                "id": "630790",
                "name": "뇌혈관질환진단비보장(태아가입용) 추가",
                "theme": "3대진단",
                "confidence": 0.0016469138913922292,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -6552.98291015625
                    }
                }
            },
            {
                "id": "631402",
                "name": "선천이상수술비Ⅱ[다발성선천이상(연간6회한)]",
                "theme": "수술",
                "confidence": 0.11040273760169486,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -28337.685546875
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": -14192.3310546875
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -21265.0078125
                    },
                    "400000": {
                        "totalPrice": 111.72,
                        "totalProfit": -27297.114690440005
                    }
                }
            },
            {
                "id": "610761",
                "name": "대중교통이용중교통상해후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.0015853966135919715,
                "availableQuantities": [
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1225.9647216796875
                    }
                }
            },
            {
                "id": "630094",
                "name": "충수염수술비",
                "theme": "수술",
                "confidence": 0.2062327202420608,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 292.48529052734375
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 500.30010986328125
                    },
                    "500000": {
                        "totalPrice": 167.367050789586,
                        "totalProfit": 1781.9579723047943
                    }
                }
            },
            {
                "id": "631560",
                "name": "양성뇌종양진단비Ⅱ",
                "theme": "기타",
                "confidence": 0.40974812352882867,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    25000000,
                    30000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1369.9854736328125
                    },
                    "10000000": {
                        "totalPrice": 156.64221678891604,
                        "totalProfit": 3122.8869399099835
                    },
                    "20000000": {
                        "totalPrice": 245.09734513274336,
                        "totalProfit": 4746.709280560001
                    },
                    "25000000": {
                        "totalPrice": 296.1885245901639,
                        "totalProfit": 6221.2655443360645
                    },
                    "30000000": {
                        "totalPrice": 343.0449002217295,
                        "totalProfit": 6622.175160296335
                    }
                }
            },
            {
                "id": "630710",
                "name": "암진단비(유사암 및 소액암 제외)",
                "theme": "3대진단",
                "confidence": 0.00427417236285517,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 13978.2021484375
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 20990.796875
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 35016.00390625
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6965.59228515625
                    }
                }
            },
            {
                "id": "630789",
                "name": "뇌졸중진단비보장(태아가입용) 추가",
                "theme": "3대진단",
                "confidence": NaN,
                "availableQuantities": [
                    5000000,
                    9000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -522.7809448242188
                    },
                    "9000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -998.4161987304688
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -903.2919921875
                    }
                }
            },
            {
                "id": "610813",
                "name": "일반상해후유장해(3~100%)(출생전)",
                "theme": null,
                "confidence": 0.027300340807156296,
                "availableQuantities": [
                    1000000,
                    10000000,
                    50000000,
                    100000000,
                    200000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 2.2937062937062938,
                        "totalProfit": 0.02977263636363634
                    },
                    "10000000": {
                        "totalPrice": 21.515151515151516,
                        "totalProfit": 58.91330058015267
                    },
                    "50000000": {
                        "totalPrice": 105.55081127241674,
                        "totalProfit": 237.29105369888774
                    },
                    "100000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 348.5473327636719
                    },
                    "200000000": {
                        "totalPrice": 400.0,
                        "totalProfit": 701.0789794921875
                    }
                }
            },
            {
                "id": "630464",
                "name": "16대특정암진단비",
                "theme": "3대진단",
                "confidence": 0.02636130033238244,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 23852.490234375
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 9512.7607421875
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14292.6669921875
                    },
                    "50000000": {
                        "totalPrice": 3182.410714285714,
                        "totalProfit": 65149.60815896071
                    }
                }
            },
            {
                "id": "631057",
                "name": "허혈성심장질환수술비(출생전)",
                "theme": "수술",
                "confidence": 0.1960130942028673,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 2.0,
                        "totalProfit": 1.5808659791946411
                    },
                    "5000000": {
                        "totalPrice": 5.0,
                        "totalProfit": 5.62493896484375
                    },
                    "10000000": {
                        "totalPrice": 9.0,
                        "totalProfit": 13.457260131835938
                    }
                }
            },
            {
                "id": "631150",
                "name": "암직접치료입원일당(Ⅱ)(요양병원제외, 1일이상)(출생전)",
                "theme": "입원일당",
                "confidence": 0.004762214093654181,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 210.0,
                        "totalProfit": 362.53680419921875
                    }
                }
            },
            {
                "id": "631719",
                "name": "특정9대감염병진단비(연간1회한, 태아가입용)",
                "theme": "기타",
                "confidence": 0.22393847707723916,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 51299.1484375
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 34183.7734375
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 17068.3984375
                    }
                }
            },
            {
                "id": "631957",
                "name": "질병입원일당(1일이상)Q(출생전)",
                "theme": "입원일당",
                "confidence": 0.3687502932720628,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000,
                    70000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 2620.0,
                        "totalProfit": -7822.06103515625
                    },
                    "20000": {
                        "totalPrice": 3930.0,
                        "totalProfit": -11731.099609375
                    },
                    "30000": {
                        "totalPrice": 6550.0,
                        "totalProfit": -19549.17578125
                    },
                    "50000": {
                        "totalPrice": 9170.0,
                        "totalProfit": -27367.251953125
                    },
                    "70000": {
                        "totalPrice": 9171.284403669724,
                        "totalProfit": -44565.52425280331
                    }
                }
            },
            {
                "id": "610680",
                "name": "심한상해수술비",
                "theme": "수술",
                "confidence": 0.007358572877232327,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6909.501953125
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3431.218505859375
                    }
                }
            },
            {
                "id": "631025",
                "name": "유사암진단비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.25498315777839853,
                "availableQuantities": [
                    2000000,
                    4000000,
                    6000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 8.0,
                        "totalProfit": -1.8357130289077759
                    },
                    "4000000": {
                        "totalPrice": 16.0,
                        "totalProfit": 0.3128809928894043
                    },
                    "6000000": {
                        "totalPrice": 24.0,
                        "totalProfit": 2.461474895477295
                    },
                    "10000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 6.758663177490234
                    },
                    "20000000": {
                        "totalPrice": 80.0,
                        "totalProfit": 17.50163459777832
                    }
                }
            },
            {
                "id": "631167",
                "name": "5대기관질병수술비(Ⅱ)(연간1회한)",
                "theme": "수술",
                "confidence": 0.006109132811750226,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 223152.140625
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 74352.578125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 148752.375
                    },
                    "30000000": {
                        "totalPrice": 4595.266666666666,
                        "totalProfit": 226532.2981490334
                    }
                }
            },
            {
                "id": "631829",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병7종]",
                "theme": "수술",
                "confidence": 0.33905606736360294,
                "availableQuantities": [
                    3000000,
                    5000000,
                    6000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -31956.287109375
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -38338.1484375
                    },
                    "6000000": {
                        "totalPrice": 785.26,
                        "totalProfit": -35078.88583582
                    },
                    "10000000": {
                        "totalPrice": 1362.496679946879,
                        "totalProfit": -55922.498017408274
                    },
                    "20000000": {
                        "totalPrice": 2477.1830188679246,
                        "totalProfit": -110738.82826728377
                    }
                }
            },
            {
                "id": "640045",
                "name": "각막이식수술비",
                "theme": "수술",
                "confidence": 0.5790353817994307,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -0.3049519956111908
                    }
                }
            },
            {
                "id": "631359",
                "name": "질병수술입원일당(1일이상 20일한도)",
                "theme": "입원일당",
                "confidence": 0.015317162762833082,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7910.7744140625
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4727.63623046875
                    },
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3136.06884765625
                    }
                }
            },
            {
                "id": "640154",
                "name": "응급실내원비(응급)",
                "theme": "기타",
                "confidence": 0.5322832877116654,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 25601.791015625
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 10212.5302734375
                    },
                    "50000": {
                        "totalPrice": 1621.9189907038513,
                        "totalProfit": 39506.99276636783
                    },
                    "100000": {
                        "totalPrice": 3115.2995234853643,
                        "totalProfit": 42926.107350848084
                    }
                }
            },
            {
                "id": "631273",
                "name": "특정선천이상진단비",
                "theme": "태아출생",
                "confidence": 0.14830942081997492,
                "availableQuantities": [
                    500000,
                    800000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 4430.0,
                        "totalProfit": -7003.85595703125
                    },
                    "800000": {
                        "totalPrice": 7088.0,
                        "totalProfit": -11199.2236328125
                    },
                    "1000000": {
                        "totalPrice": 8860.0,
                        "totalProfit": -13996.134765625
                    }
                }
            },
            {
                "id": "631864",
                "name": "질병수술비(특정5대질병 제외)(출생전)",
                "theme": "수술",
                "confidence": 0.13836454061088244,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 129.0,
                        "totalProfit": -22.524871826171875
                    },
                    "200000": {
                        "totalPrice": 258.0,
                        "totalProfit": -41.06543731689453
                    },
                    "300000": {
                        "totalPrice": 387.0,
                        "totalProfit": -59.60600280761719
                    },
                    "500000": {
                        "totalPrice": 645.0,
                        "totalProfit": -96.6871337890625
                    }
                }
            },
            {
                "id": "630963",
                "name": "질병입원일당(1일이상30일한도)",
                "theme": "입원일당",
                "confidence": 0.010164895629949329,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": -12453.3603515625
                    },
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": -49672.51171875
                    },
                    "30000": {
                        "totalPrice": 4343.371794871795,
                        "totalProfit": 51780.25945888312
                    },
                    "40000": {
                        "totalPrice": 3189.9333333333334,
                        "totalProfit": -65673.05296646665
                    },
                    "50000": {
                        "totalPrice": 8143.066666666667,
                        "totalProfit": 16518.295444866664
                    }
                }
            },
            {
                "id": "631908",
                "name": "특정NGS유전자패널검사비(급여,연간1회한)",
                "theme": "3대진단",
                "confidence": 0.11655278756100151,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 19.971014492753625,
                        "totalProfit": 878.3348110910571
                    }
                }
            },
            {
                "id": "610880",
                "name": "일반상해수술입원일당(1일이상 20일한도)",
                "theme": "입원일당",
                "confidence": 0.007440259802531277,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6985.6591796875
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 10501.9853515625
                    },
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 17534.744140625
                    }
                }
            },
            {
                "id": "640056",
                "name": "5대장기이식수술비",
                "theme": null,
                "confidence": 0.6284099871331253,
                "availableQuantities": [
                    10000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1299.28076171875
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 222.02035522460938
                    }
                }
            },
            {
                "id": "631042",
                "name": "질병중환자실입원일당(1일이상)(출생전)",
                "theme": "입원일당",
                "confidence": 0.01666093259901795,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 13120.0,
                        "totalProfit": -1657.9200439453125
                    },
                    "100000": {
                        "totalPrice": 6560.792452830188,
                        "totalProfit": -2503.6892893660383
                    },
                    "200000": {
                        "totalPrice": 13126.027397260274,
                        "totalProfit": -6393.434694123285
                    },
                    "300000": {
                        "totalPrice": 19680.0,
                        "totalProfit": -2484.887939453125
                    },
                    "500000": {
                        "totalPrice": 32800.0,
                        "totalProfit": -4138.82373046875
                    }
                }
            },
            {
                "id": "630991",
                "name": "급성심근경색증진단비(감액없음)추가(출생전)",
                "theme": "3대진단",
                "confidence": 0.00011951558332597498,
                "availableQuantities": [
                    2000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 1.0,
                        "totalProfit": 0.6327340006828308
                    },
                    "10000000": {
                        "totalPrice": 3.0,
                        "totalProfit": 4.070553779602051
                    },
                    "20000000": {
                        "totalPrice": 6.0,
                        "totalProfit": 12.125414848327637
                    }
                }
            },
            {
                "id": "632491",
                "name": "전이암진단비(특정전이암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.1490757762511686,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 10.0,
                        "totalProfit": 17.448123931884766
                    },
                    "10000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 38.88055419921875
                    },
                    "20000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 81.74541473388672
                    }
                }
            },
            {
                "id": "631967",
                "name": "상급종합병원 질병입원일당(1일이상)Q(출생전)",
                "theme": "입원일당",
                "confidence": 0.04017168551827729,
                "availableQuantities": [
                    20000,
                    30000,
                    40000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 974.0,
                        "totalProfit": -1430.322509765625
                    },
                    "30000": {
                        "totalPrice": 1461.0,
                        "totalProfit": -2143.49169921875
                    },
                    "40000": {
                        "totalPrice": 1948.0,
                        "totalProfit": -2856.66064453125
                    },
                    "50000": {
                        "totalPrice": 2435.0,
                        "totalProfit": -3569.829833984375
                    },
                    "100000": {
                        "totalPrice": 4870.0,
                        "totalProfit": -7135.67529296875
                    }
                }
            },
            {
                "id": "630995",
                "name": "뇌혈관질환수술비(출생전)",
                "theme": null,
                "confidence": 0.16003975809380253,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 35.0,
                        "totalProfit": 68.37158203125
                    },
                    "10000000": {
                        "totalPrice": 33.38172920065253,
                        "totalProfit": 85.67680360320061
                    }
                }
            },
            {
                "id": "631018",
                "name": "암진단비(유사암및소액암제외)(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.0031616743077440314,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 120.0,
                        "totalProfit": 110.79783630371094
                    },
                    "10000000": {
                        "totalPrice": 240.0,
                        "totalProfit": 225.57998657226562
                    },
                    "20000000": {
                        "totalPrice": 480.0,
                        "totalProfit": 455.144287109375
                    },
                    "30000000": {
                        "totalPrice": 720.0,
                        "totalProfit": 684.7085571289062
                    },
                    "50000000": {
                        "totalPrice": 1200.0,
                        "totalProfit": 1143.837158203125
                    }
                }
            },
            {
                "id": "632137",
                "name": "131대질병수술비(치핵)",
                "theme": "수술",
                "confidence": 0.40612622283885336,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -38.19648361206055
                    },
                    "200000": {
                        "totalPrice": 80.84255492270138,
                        "totalProfit": 365.03405199714996
                    },
                    "300000": {
                        "totalPrice": 107.9905808477237,
                        "totalProfit": 464.97874767978993
                    }
                }
            },
            {
                "id": "631085",
                "name": "유사암진단비(출생전)",
                "theme": "3대진단",
                "confidence": 0.008089418240067559,
                "availableQuantities": [
                    4000000,
                    10000000,
                    14000000,
                    16000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "4000000": {
                        "totalPrice": 56.0,
                        "totalProfit": 11.055850982666016
                    },
                    "10000000": {
                        "totalPrice": 40.22222222222222,
                        "totalProfit": 14.87020118888889
                    },
                    "14000000": {
                        "totalPrice": 56.0,
                        "totalProfit": 30.812622833333336
                    },
                    "16000000": {
                        "totalPrice": 64.0,
                        "totalProfit": 13.204444885253906
                    },
                    "20000000": {
                        "totalPrice": 80.0,
                        "totalProfit": 17.50163459777832
                    }
                }
            },
            {
                "id": "640204",
                "name": "깁스치료비(출생전)",
                "theme": "골절/화상",
                "confidence": 0.42185305509945603,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 46.0,
                        "totalProfit": 4.840159893035889
                    },
                    "300000": {
                        "totalPrice": 69.0,
                        "totalProfit": 9.25239372253418
                    },
                    "500000": {
                        "totalPrice": 115.0,
                        "totalProfit": 18.076860427856445
                    },
                    "1000000": {
                        "totalPrice": 230.0,
                        "totalProfit": 40.138031005859375
                    },
                    "2000000": {
                        "totalPrice": 460.0,
                        "totalProfit": 84.26036834716797
                    }
                }
            },
            {
                "id": "631956",
                "name": "질병입원일당(1일이상)Q",
                "theme": "입원일당",
                "confidence": 0.35894637170343535,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000,
                    70000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": -360470.75
                    },
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": -72131.734375
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": -216301.25
                    },
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": -144216.484375
                    },
                    "70000": {
                        "totalPrice": 8504.42857142857,
                        "totalProfit": -490016.18689266255
                    }
                }
            },
            {
                "id": "630670",
                "name": "추간판장애(디스크질환)수술비",
                "theme": "수술",
                "confidence": 0.2099278426664433,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2689.564697265625
                    },
                    "2000000": {
                        "totalPrice": 535.9465370595383,
                        "totalProfit": 16989.443566815236
                    }
                }
            },
            {
                "id": "631562",
                "name": "양성뇌종양진단비Ⅱ(출생전)",
                "theme": "기타",
                "confidence": 0.3166307983182194,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    25000000,
                    30000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 5.0,
                        "totalProfit": -0.1730434924849699
                    },
                    "10000000": {
                        "totalPrice": 10.0,
                        "totalProfit": 3.182231801015229
                    },
                    "20000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 10.538143157958984
                    },
                    "25000000": {
                        "totalPrice": 25.0,
                        "totalProfit": 14.168754577636719
                    },
                    "30000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 17.799367904663086
                    }
                }
            },
            {
                "id": "630981",
                "name": "16대특정암진단비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.02193433368127256,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 220.0,
                        "totalProfit": 151.58392333984375
                    },
                    "20000000": {
                        "totalPrice": 330.0,
                        "totalProfit": 229.36802673339844
                    },
                    "30000000": {
                        "totalPrice": 550.0,
                        "totalProfit": 384.9362487792969
                    },
                    "50000000": {
                        "totalPrice": 550.0,
                        "totalProfit": 394.0599281515151
                    }
                }
            },
            {
                "id": "631911",
                "name": "암 MRI촬영검사비(급여,연간1회한)",
                "theme": "3대진단",
                "confidence": 0.006006269464719809,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 18.914285714285715,
                        "totalProfit": 617.3359213142855
                    }
                }
            },
            {
                "id": "630355",
                "name": "소아백혈병진단비",
                "theme": "기타",
                "confidence": 0.11385319311379358,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2741.787353515625
                    },
                    "20000000": {
                        "totalPrice": 186.38838550247118,
                        "totalProfit": 2535.509300241765
                    }
                }
            },
            {
                "id": "631827",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병5종]",
                "theme": "수술",
                "confidence": 0.3194482242263481,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -4925.2255859375
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -12242.5126953125
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -7364.30712890625
                    }
                }
            },
            {
                "id": "610789",
                "name": "일반상해후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.01441696061475375,
                "availableQuantities": [
                    30000000,
                    50000000,
                    100000000,
                    200000000,
                    300000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 82574.7890625
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 123885.765625
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12346.1259765625
                    },
                    "200000000": {
                        "totalPrice": 3870.5882352941176,
                        "totalProfit": 119186.144835
                    },
                    "300000000": {
                        "totalPrice": 5704.0,
                        "totalProfit": 140702.46239555554
                    }
                }
            },
            {
                "id": "631011",
                "name": "소아백혈병진단비(출생전)",
                "theme": null,
                "confidence": 0.12256408280227896,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 30.155038759689923,
                        "totalProfit": -8.895050325581396
                    },
                    "20000000": {
                        "totalPrice": 60.0,
                        "totalProfit": -3.777116060256958
                    }
                }
            },
            {
                "id": "631828",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병6종]",
                "theme": "수술",
                "confidence": 0.32925214579497547,
                "availableQuantities": [
                    3000000,
                    5000000,
                    6000000,
                    7000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 9914.734375
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 19876.5859375
                    },
                    "6000000": {
                        "totalPrice": 2034.4754098360656,
                        "totalProfit": 55441.56589086886
                    },
                    "7000000": {
                        "totalPrice": 2182.278846153846,
                        "totalProfit": 51024.16772925963
                    },
                    "10000000": {
                        "totalPrice": 3034.019673503558,
                        "totalProfit": 74911.74700476117
                    }
                }
            },
            {
                "id": "632125",
                "name": "아토피진단비",
                "theme": "기타",
                "confidence": 0.13601310602393293,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 98371.4609375
                    }
                }
            },
            {
                "id": "611038",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해6종]",
                "theme": "수술",
                "confidence": 0.08922967543607668,
                "availableQuantities": [
                    3000000,
                    5000000,
                    7000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 242.12930297851562
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 917.0888671875
                    },
                    "7000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 627.8634643554688
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 434.940185546875
                    }
                }
            },
            {
                "id": "640042",
                "name": "3대장애위로금",
                "theme": "사망후유",
                "confidence": 0.35099380490441434,
                "availableQuantities": [
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -6463.01123046875
                    }
                }
            },
            {
                "id": "611130",
                "name": "신생아특정질환및외상진단비(출산외상)",
                "theme": "태아출생",
                "confidence": 0.09575804682838746,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 68.0,
                        "totalProfit": 52.60722732543945
                    }
                }
            },
            {
                "id": "630984",
                "name": "2대질병입원일당(1일이상)(출생전)",
                "theme": "입원일당",
                "confidence": 0.009220598490504052,
                "availableQuantities": [
                    20000,
                    30000,
                    40000
                ],
                "recommendedQuantity": 40000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 100.0,
                        "totalProfit": 201.31520080566406
                    },
                    "30000": {
                        "totalPrice": 151.0,
                        "totalProfit": 311.4801330566406
                    },
                    "40000": {
                        "totalPrice": 201.0,
                        "totalProfit": 414.1298828125
                    }
                }
            },
            {
                "id": "631407",
                "name": "32대질병관혈수술비(연간1회한)[5대질병]",
                "theme": "수술",
                "confidence": 0.0030727689614969108,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 42158.78125
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 21055.876953125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 84365.0
                    }
                }
            },
            {
                "id": "631059",
                "name": "허혈성심장질환진단비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.2890764881039127,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 11.0,
                        "totalProfit": 7.4011688232421875
                    },
                    "20000000": {
                        "totalPrice": 22.0,
                        "totalProfit": 18.786645889282227
                    }
                }
            },
            {
                "id": "630996",
                "name": "뇌혈관질환진단비(태아가입용)(출생전)",
                "theme": "3대진단",
                "confidence": 0.2403674813920117,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 120.0,
                        "totalProfit": -5818.44921875
                    },
                    "20000000": {
                        "totalPrice": 116.97449428320141,
                        "totalProfit": -6685.495152524985
                    }
                }
            },
            {
                "id": "631423",
                "name": "32대질병관혈수술비(연간1회한)[14대질병]",
                "theme": "수술",
                "confidence": 0.0030727689614969108,
                "availableQuantities": [
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 44.71950149536133
                    },
                    "500000": {
                        "totalPrice": 14.261904761904763,
                        "totalProfit": -258.27496814285706
                    }
                }
            },
            {
                "id": "640207",
                "name": "응급실내원비(응급)(출생전)",
                "theme": null,
                "confidence": 0.4281278122928162,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 1210.0,
                        "totalProfit": 1530.8031005859375
                    },
                    "30000": {
                        "totalPrice": 723.9164490861618,
                        "totalProfit": 1252.272718778068
                    },
                    "50000": {
                        "totalPrice": 1198.687230989957,
                        "totalProfit": 1990.332055634829
                    },
                    "100000": {
                        "totalPrice": 2420.0,
                        "totalProfit": 3065.590576171875
                    }
                }
            },
            {
                "id": "631026",
                "name": "유사암진단비(감액없음)추가(출생전)",
                "theme": "3대진단",
                "confidence": 0.000554197535687256,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000,
                    6000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 1.3871779441833496
                    },
                    "3000000": {
                        "totalPrice": 12.0,
                        "totalProfit": 11.063726
                    },
                    "5000000": {
                        "totalPrice": 20.0,
                        "totalProfit": -17.608072
                    },
                    "6000000": {
                        "totalPrice": 24.0,
                        "totalProfit": 2.461474895477295
                    },
                    "10000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 6.758663177490234
                    }
                }
            },
            {
                "id": "631825",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병3종]",
                "theme": "수술",
                "confidence": 0.2998403810890932,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3263.937744140625
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5471.3603515625
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2160.290283203125
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4367.734375
                    }
                }
            },
            {
                "id": "631131",
                "name": "암수술비(유사암제외)",
                "theme": "수술",
                "confidence": 0.004847798769840074,
                "availableQuantities": [
                    1000000,
                    4000000,
                    5000000,
                    10000000,
                    15000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 16954.716796875
                    },
                    "4000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1086.4517822265625
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4486.7939453125
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 11287.48046875
                    },
                    "15000000": {
                        "totalPrice": 390.0,
                        "totalProfit": 5787.287375333333
                    }
                }
            },
            {
                "id": "611037",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해5종]",
                "theme": "수술",
                "confidence": 0.07942575386744924,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 518.846923828125
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1367.99365234375
                    },
                    "5000000": {
                        "totalPrice": 115.6359400998336,
                        "totalProfit": 3611.777613267401
                    }
                }
            },
            {
                "id": "630734",
                "name": "재진단암 진단비(1년대기형)",
                "theme": "3대진단",
                "confidence": 0.009194703476444608,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 44783.5859375
                    },
                    "10000000": {
                        "totalPrice": 5667.523255813953,
                        "totalProfit": 162801.78908475587
                    },
                    "20000000": {
                        "totalPrice": 4602.816666666667,
                        "totalProfit": 152888.35030221668
                    },
                    "30000000": {
                        "totalPrice": 4938.1625,
                        "totalProfit": 153131.51956726253
                    }
                }
            },
            {
                "id": "631272",
                "name": "선천이상진단비",
                "theme": "수술",
                "confidence": 0.18864709144082525,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 907.0,
                        "totalProfit": -5676.07275390625
                    },
                    "200000": {
                        "totalPrice": 1814.0,
                        "totalProfit": -11340.568359375
                    }
                }
            },
            {
                "id": "631823",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[질병1종]",
                "theme": "수술",
                "confidence": 0.28023253795183833,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 26528.263671875
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 39815.94921875
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 13240.5849609375
                    }
                }
            },
            {
                "id": "631973",
                "name": "질병수술비Q(출생전)",
                "theme": "수술",
                "confidence": 0.4068780835512477,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 312.0,
                        "totalProfit": 103.79426574707031
                    },
                    "200000": {
                        "totalPrice": 624.0,
                        "totalProfit": 211.5728302001953
                    },
                    "300000": {
                        "totalPrice": 936.0,
                        "totalProfit": 319.3514099121094
                    },
                    "400000": {
                        "totalPrice": 1248.0,
                        "totalProfit": 427.1299743652344
                    },
                    "500000": {
                        "totalPrice": 1560.0,
                        "totalProfit": 534.9085693359375
                    }
                }
            },
            {
                "id": "640382",
                "name": "아나필락시스진단비(응급, 연간1회한)",
                "theme": "기타",
                "confidence": 0.29899320745087044,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5428.80615234375
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2690.914794921875
                    }
                }
            },
            {
                "id": "631966",
                "name": "상급종합병원 질병입원일당(1일이상)Q",
                "theme": "입원일당",
                "confidence": 0.04017168551827729,
                "availableQuantities": [
                    20000,
                    30000,
                    40000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": -15936.130859375
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": -23880.70703125
                    },
                    "40000": {
                        "totalPrice": 0.0,
                        "totalProfit": -39769.86328125
                    },
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": -31825.28515625
                    },
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -79492.75
                    }
                }
            },
            {
                "id": "630992",
                "name": "뇌졸중진단비(태아가입용)(출생전)",
                "theme": "3대진단",
                "confidence": 0.07624765723631352,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 50.0,
                        "totalProfit": -1137.6435546875
                    },
                    "20000000": {
                        "totalPrice": 100.0,
                        "totalProfit": -2271.302734375
                    }
                }
            },
            {
                "id": "611035",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해3종]",
                "theme": "수술",
                "confidence": 0.05981791073019433,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2224.36474609375
                    },
                    "400000": {
                        "totalPrice": 121.14393939393939,
                        "totalProfit": 3853.750690613638
                    },
                    "500000": {
                        "totalPrice": 140.950016772895,
                        "totalProfit": 3990.1364451624695
                    }
                }
            },
            {
                "id": "631051",
                "name": "특정희귀난치성질환수술비(출생전)",
                "theme": "수술",
                "confidence": NaN,
                "availableQuantities": [
                    1000000,
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 32.0,
                        "totalProfit": -56.94271469116211
                    },
                    "3000000": {
                        "totalPrice": 96.0,
                        "totalProfit": -162.85952758789062
                    }
                }
            },
            {
                "id": "632131",
                "name": "급성신우신염진단비(출생전)",
                "theme": "기타",
                "confidence": 0.2025673601986931,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 558.0,
                        "totalProfit": 940.4121704101562
                    },
                    "300000": {
                        "totalPrice": 837.0,
                        "totalProfit": 1412.6104736328125
                    },
                    "500000": {
                        "totalPrice": 1395.0,
                        "totalProfit": 2357.0068359375
                    }
                }
            },
            {
                "id": "610806",
                "name": "일반상해입원일당(1일이상)추가(출생전)",
                "theme": "입원일당",
                "confidence": 3.063248764440639e-05,
                "availableQuantities": [
                    10000,
                    20000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 94.0,
                        "totalProfit": 165.79403686523438
                    },
                    "20000": {
                        "totalPrice": 235.0,
                        "totalProfit": 420.4615478515625
                    },
                    "50000": {
                        "totalPrice": 235.0,
                        "totalProfit": 675.140817
                    }
                }
            },
            {
                "id": "630986",
                "name": "5대고액치료비암진단비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.0183735358572631,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 110.0,
                        "totalProfit": 76.398193359375
                    },
                    "20000000": {
                        "totalPrice": 220.0,
                        "totalProfit": 156.78070068359375
                    },
                    "30000000": {
                        "totalPrice": 330.0,
                        "totalProfit": 237.1632080078125
                    },
                    "50000000": {
                        "totalPrice": 550.0,
                        "totalProfit": 397.9281921386719
                    }
                }
            },
            {
                "id": "632382",
                "name": "암수술비(유사암제외)(25%체증형)(출생전)",
                "theme": "수술",
                "confidence": 0.0041961209956001486,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000,
                    15000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 72.0,
                        "totalProfit": 135.25424194335938
                    },
                    "5000000": {
                        "totalPrice": 180.0,
                        "totalProfit": 344.112060546875
                    },
                    "10000000": {
                        "totalPrice": 360.0,
                        "totalProfit": 692.2084350585938
                    },
                    "15000000": {
                        "totalPrice": 540.0,
                        "totalProfit": 1040.3048095703125
                    }
                }
            },
            {
                "id": "632496",
                "name": "전이암진단비(림프절전이암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.0030134186624827977,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 5.0,
                        "totalProfit": -5.381494045257568
                    }
                }
            },
            {
                "id": "631142",
                "name": "유사암수술비(출생전)",
                "theme": "수술",
                "confidence": 0.005872047220875554,
                "availableQuantities": [
                    1000000,
                    2000000,
                    4000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 24.0,
                        "totalProfit": 40.97932815551758
                    },
                    "2000000": {
                        "totalPrice": 12.0,
                        "totalProfit": 8.1739095
                    },
                    "4000000": {
                        "totalPrice": 24.0,
                        "totalProfit": 71.812519875
                    },
                    "5000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 52.220237731933594
                    },
                    "10000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 108.42478942871094
                    }
                }
            },
            {
                "id": "631065",
                "name": "유사암진단비",
                "theme": "3대진단",
                "confidence": 0.015839775714102104,
                "availableQuantities": [
                    4000000,
                    9000000,
                    10000000,
                    14000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "4000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 739.3106079101562
                    },
                    "9000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1722.1944580078125
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3884.55419921875
                    },
                    "14000000": {
                        "totalPrice": 126.0,
                        "totalProfit": -726.5186178333333
                    },
                    "20000000": {
                        "totalPrice": 179.0,
                        "totalProfit": 2017.0378639599999
                    }
                }
            },
            {
                "id": "630451",
                "name": "2대질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.01150703007827121,
                "availableQuantities": [
                    20000,
                    30000,
                    40000
                ],
                "recommendedQuantity": 40000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1438.9276123046875
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1067.4559326171875
                    },
                    "40000": {
                        "totalPrice": 0.0,
                        "totalProfit": 695.984619140625
                    }
                }
            },
            {
                "id": "630271",
                "name": "식중독입원일당",
                "theme": "입원일당",
                "confidence": 0.07851315216210403,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1413.3424072265625
                    },
                    "20000": {
                        "totalPrice": 37.0,
                        "totalProfit": -1366.6031103
                    },
                    "30000": {
                        "totalPrice": 54.23121387283237,
                        "totalProfit": -2332.365804135049
                    }
                }
            },
            {
                "id": "631015",
                "name": "심장관련소아특정질병진단비(출생전)",
                "theme": "기타",
                "confidence": 0.18338582153994568,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 324.0,
                        "totalProfit": -247.67593383789062
                    }
                }
            },
            {
                "id": "631089",
                "name": "16대특정암진단비(출생전)",
                "theme": "3대진단",
                "confidence": 0.0012408997306957176,
                "availableQuantities": [
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 330.0,
                        "totalProfit": 229.36802673339844
                    },
                    "50000000": {
                        "totalPrice": 550.0,
                        "totalProfit": 384.9362487792969
                    }
                }
            },
            {
                "id": "632493",
                "name": "전이암진단비(특정전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.006927323849253413,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1324.0909423828125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2695.182373046875
                    }
                }
            },
            {
                "id": "610939",
                "name": "상해사고부상치료비[5등급]",
                "theme": "수술",
                "confidence": 0.0007558534669110618,
                "availableQuantities": [
                    50000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4631.4013671875
                    },
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 9310.111328125
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2308.36328125
                    }
                }
            },
            {
                "id": "630231",
                "name": "급성심근경색증진단비_갱신형",
                "theme": "3대진단",
                "confidence": 0.00014246266578996715,
                "availableQuantities": [
                    2000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 384.2860107421875
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 815.71923828125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 43.61088562011719
                    }
                }
            },
            {
                "id": "632118",
                "name": "급성신우신염진단비",
                "theme": "기타",
                "confidence": 0.2295685554550138,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3196.182861328125
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4817.68359375
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 16168.1875
                    },
                    "1000000": {
                        "totalPrice": 1581.6947368421052,
                        "totalProfit": 53923.94221885265
                    }
                }
            },
            {
                "id": "630662",
                "name": "갱신형 16대특정암진단비",
                "theme": "3대진단",
                "confidence": 0.001362814407813002,
                "availableQuantities": [
                    10000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7288.9541015625
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 36632.74609375
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 21960.837890625
                    }
                }
            },
            {
                "id": "631865",
                "name": "질병수술비(특정5대질병 제외)(출생전)",
                "theme": "수술",
                "confidence": 0.0025508125138309122,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 258.0,
                        "totalProfit": -41.06543731689453
                    },
                    "300000": {
                        "totalPrice": 387.0,
                        "totalProfit": -59.60600280761719
                    },
                    "500000": {
                        "totalPrice": 645.0,
                        "totalProfit": -96.6871337890625
                    }
                }
            },
            {
                "id": "630788",
                "name": "허혈성심장질환진단비(감액없음)추가",
                "theme": "3대진단",
                "confidence": 0.001664042406817951,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3061.03515625
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1506.9456787109375
                    }
                }
            },
            {
                "id": "631912",
                "name": "암 양전자단층촬영(PET)검사비(급여,연간1회한)",
                "theme": "3대진단",
                "confidence": 0.00590420188019032,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1.0,
                        "totalProfit": 7.7123413043478255
                    }
                }
            },
            {
                "id": "632119",
                "name": "건선특정치료비(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.18885881063160317,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 647.89111328125
                    }
                }
            },
            {
                "id": "610937",
                "name": "상해사고부상치료비[3등급]",
                "theme": "수술",
                "confidence": 0.0007558534669110618,
                "availableQuantities": [
                    300000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3614.85400390625
                    },
                    "1000000": {
                        "totalPrice": 645.7142857142857,
                        "totalProfit": 16311.894957367347
                    }
                }
            },
            {
                "id": "631058",
                "name": "허혈성심장질환진단비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.005954643672743965,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 11.0,
                        "totalProfit": 5.475372056338028
                    },
                    "20000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 32.9287351
                    }
                }
            },
            {
                "id": "630229",
                "name": "급성심근경색증진단비",
                "theme": null,
                "confidence": 0.07877411022751046,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2374.27685546875
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1567.178955078125
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 759.9033203125
                    }
                }
            },
            {
                "id": "630384",
                "name": "뇌혈관질환진단비(태아가입용)_갱신형",
                "theme": "3대진단",
                "confidence": 0.005174542348571013,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -14905.0791015625
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -7476.02685546875
                    }
                }
            },
            {
                "id": "630519",
                "name": "특정희귀난치성질환수술비",
                "theme": "수술",
                "confidence": 0.03780654157715278,
                "availableQuantities": [
                    1000000,
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -511.38470458984375
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1440.1778564453125
                    }
                }
            },
            {
                "id": "632117",
                "name": "천식지속상태(급성중증천식)진단비",
                "theme": "기타",
                "confidence": 0.17937963577838684,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 8308.0888671875
                    }
                }
            },
            {
                "id": "610464",
                "name": "상해흉터복원수술비",
                "theme": "수술",
                "confidence": 0.011135291056515615,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 74627.296875
                    }
                }
            },
            {
                "id": "610938",
                "name": "상해사고부상치료비[4등급]",
                "theme": "수술",
                "confidence": 0.0007558534669110618,
                "availableQuantities": [
                    300000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 84564.796875
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 25336.517578125
                    }
                }
            },
            {
                "id": "630997",
                "name": "뇌혈관질환진단비(태아가입용)(출생전)",
                "theme": "3대진단",
                "confidence": 0.005372753023559127,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 60.0,
                        "totalProfit": -2911.216796875
                    },
                    "20000000": {
                        "totalPrice": 120.0,
                        "totalProfit": -5818.44921875
                    }
                }
            },
            {
                "id": "631046",
                "name": "질병후유장해(3~100%)추가(출생전)",
                "theme": "사망후유",
                "confidence": 0.0002698000187536134,
                "availableQuantities": [
                    20000000,
                    30000000,
                    40000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 53.333333333333336,
                        "totalProfit": -116.18448333333333
                    },
                    "30000000": {
                        "totalPrice": 90.0,
                        "totalProfit": -67.58279418945312
                    },
                    "40000000": {
                        "totalPrice": 120.0,
                        "totalProfit": -88.78228759765625
                    }
                }
            },
            {
                "id": "610482",
                "name": "안전사고위로금",
                "theme": "기타",
                "confidence": 0.004960638209441257,
                "availableQuantities": [
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 75.43168812589414,
                        "totalProfit": 1859.2460681968505
                    }
                }
            },
            {
                "id": "611073",
                "name": "골절수술비ⅡQ(출생전)",
                "theme": "골절/화상",
                "confidence": 0.12762126527919887,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 90.0,
                        "totalProfit": -18.868492126464844
                    },
                    "500000": {
                        "totalPrice": 45.254364089775564,
                        "totalProfit": -0.8424200872817957
                    },
                    "1000000": {
                        "totalPrice": 90.57218309859155,
                        "totalProfit": -3.578728917180615
                    },
                    "2000000": {
                        "totalPrice": 180.0,
                        "totalProfit": -33.75267791748047
                    }
                }
            },
            {
                "id": "631859",
                "name": "질병수술비(특정5대질병 제외)",
                "theme": "수술",
                "confidence": 0.009180563253867827,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 10537.1591796875
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 26413.41015625
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 15829.244140625
                    }
                }
            },
            {
                "id": "630938",
                "name": "허혈성심장질환진단비",
                "theme": "3대진단",
                "confidence": 0.015048514111946982,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    40000000,
                    50000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7980.77734375
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 11994.6787109375
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 16008.578125
                    },
                    "40000000": {
                        "totalPrice": 216.0,
                        "totalProfit": 30294.892784
                    },
                    "50000000": {
                        "totalPrice": 127.5,
                        "totalProfit": 20448.3704295
                    }
                }
            },
            {
                "id": "620927",
                "name": "저체중아(2.5kg이하)출생",
                "theme": "태아출생",
                "confidence": 0.08313443622208232,
                "availableQuantities": [
                    500000,
                    1000000,
                    1500000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 4800.0,
                        "totalProfit": -4475.9794921875
                    },
                    "1000000": {
                        "totalPrice": 9600.0,
                        "totalProfit": -8940.3818359375
                    },
                    "1500000": {
                        "totalPrice": 14400.0,
                        "totalProfit": -13404.783203125
                    },
                    "2000000": {
                        "totalPrice": 19200.0,
                        "totalProfit": -17869.185546875
                    }
                }
            },
            {
                "id": "631271",
                "name": "임신27주이내조산치료비",
                "theme": "기타",
                "confidence": 0.2044758025362095,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 710.0,
                        "totalProfit": 981.453125
                    },
                    "2000000": {
                        "totalPrice": 1420.0,
                        "totalProfit": 1974.483642578125
                    },
                    "3000000": {
                        "totalPrice": 2130.0,
                        "totalProfit": 2967.51416015625
                    }
                }
            },
            {
                "id": "632214",
                "name": "신생아질환수술비",
                "theme": "태아출생",
                "confidence": 0.19481329495672872,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 662.6445859872612,
                        "totalProfit": 1230.9944062503193
                    }
                }
            },
            {
                "id": "640449",
                "name": "특정단순창상봉합술치료비(급여,연간3회한)",
                "theme": "기타",
                "confidence": 0.30590812158249925,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6190.2021484375
                    }
                }
            },
            {
                "id": "611072",
                "name": "골절수술비ⅡQ",
                "theme": "골절/화상",
                "confidence": 0.11781734371057141,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 10801.2255859375
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2664.92529296875
                    },
                    "1000000": {
                        "totalPrice": 1122.9132340052586,
                        "totalProfit": 17003.54614280194
                    },
                    "2000000": {
                        "totalPrice": 2171.8809523809523,
                        "totalProfit": 28052.607893509507
                    }
                }
            },
            {
                "id": "630200",
                "name": "다발성소아암진단",
                "theme": "3대진단",
                "confidence": 0.14959432431092268,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2539.3271484375
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7711.93115234375
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5125.62939453125
                    },
                    "50000000": {
                        "totalPrice": 859.5490405117271,
                        "totalProfit": 14195.44826775752
                    }
                }
            },
            {
                "id": "620235",
                "name": "의료사고법률비용",
                "theme": "재물/배상",
                "confidence": 0.1398131302860398,
                "availableQuantities": [
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 2.0,
                        "totalProfit": 14.682941706737596
                    }
                }
            },
            {
                "id": "630632",
                "name": "아토피진단비(중증)",
                "theme": "기타",
                "confidence": 0.09273855834573412,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 357.7142857142857,
                        "totalProfit": 14528.32497464286
                    },
                    "200000": {
                        "totalPrice": 670.8709677419355,
                        "totalProfit": 22088.4214613871
                    },
                    "300000": {
                        "totalPrice": 993.2962655601659,
                        "totalProfit": 34652.33749300788
                    }
                }
            },
            {
                "id": "611067",
                "name": "5대골절수술비Q",
                "theme": "골절/화상",
                "confidence": 0.06468104899107352,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1779.5345458984375
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -3511.982177734375
                    }
                }
            },
            {
                "id": "631952",
                "name": "특정요로감염(N39.0) 및 신생아요로감염진단비(연간1회한)",
                "theme": "기타",
                "confidence": 0.1364692019641319,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 1405.6882352941177,
                        "totalProfit": 48616.636381731274
                    }
                }
            },
            {
                "id": "630078",
                "name": "시청각질환수술비",
                "theme": "수술",
                "confidence": 0.13273023007131526,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -164.52212524414062
                    }
                }
            },
            {
                "id": "620320",
                "name": "출생위험(Ⅱ)",
                "theme": "태아출생",
                "confidence": 0.02880991436742543,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 9538.993808049536,
                        "totalProfit": 8924.359144578946
                    },
                    "10000000": {
                        "totalPrice": 16830.0,
                        "totalProfit": 3124.6025390625
                    },
                    "20000000": {
                        "totalPrice": 33660.0,
                        "totalProfit": 6260.7822265625
                    }
                }
            },
            {
                "id": "630577",
                "name": "정신질병장애진단비",
                "theme": "기타",
                "confidence": 0.1484158411610369,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 34.2087980173482,
                        "totalProfit": -153.21828070248452
                    }
                }
            },
            {
                "id": "630108",
                "name": "특정전염병위로금",
                "theme": "기타",
                "confidence": 0.11028488369531697,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 6.7272727272727275,
                        "totalProfit": 96.12906644938441
                    }
                }
            },
            {
                "id": "632255",
                "name": "특정선천이상및신경계질환재활치료비(급여,연간90회한)",
                "theme": "기타",
                "confidence": 0.07476420478063263,
                "availableQuantities": [
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 17012.6328125
                    }
                }
            },
            {
                "id": "631147",
                "name": "암직접치료입원일당(Ⅱ)(요양병원제외, 1일이상)",
                "theme": "입원일당",
                "confidence": 0.008737583530226337,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 19091.291015625
                    }
                }
            },
            {
                "id": "630638",
                "name": "결핵 진단비",
                "theme": "기타",
                "confidence": 0.12846424957238903,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -133.15322875976562
                    }
                }
            },
            {
                "id": "630452",
                "name": "2대질병수술비",
                "theme": "수술",
                "confidence": 0.0031817780116519833,
                "availableQuantities": [
                    40000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "40000": {
                        "totalPrice": 0.0,
                        "totalProfit": 46.26222229003906
                    },
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -25.124799728393555
                    }
                }
            },
            {
                "id": "631948",
                "name": "요관역류(Ⅰ~Ⅴ등급)진단비(연간1회한)(출생전)",
                "theme": "기타",
                "confidence": 0.10546315212895689,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 30.0,
                        "totalProfit": 47.029483795166016
                    }
                }
            },
            {
                "id": "632217",
                "name": "신생아특정질환및외상진단비(복부장기질환)",
                "theme": "태아출생",
                "confidence": 0.20381785721240964,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 336.0513320337882,
                        "totalProfit": 519.9217243011383
                    }
                }
            },
            {
                "id": "611036",
                "name": "수술비(1~7종, 연간3회한)(태아고급형)[상해4종]",
                "theme": "수술",
                "confidence": 0.06962183229882178,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 107.34630956088446,
                        "totalProfit": 3044.6587281368043
                    }
                }
            },
            {
                "id": "611066",
                "name": "아동학대피해치료비(친족제외,연간1회한)",
                "theme": "기타",
                "confidence": 0.03215009976136871,
                "availableQuantities": [
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 120.0349434737924,
                        "totalProfit": 1170.6099733165472
                    }
                }
            },
            {
                "id": "631947",
                "name": "요관역류(Ⅳ~Ⅴ등급)진단비(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.10015196917273862,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1261.3177490234375
                    }
                }
            },
            {
                "id": "631946",
                "name": "요관역류(Ⅰ~Ⅴ등급)진단비(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.10630866869325094,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 40.5965598123534,
                        "totalProfit": 1199.061560057948
                    }
                }
            },
            {
                "id": "611061",
                "name": "특정이물제거치료비Ⅰ(급여,연간1회한)",
                "theme": "기타",
                "confidence": 0.03423443675500732,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 133.5710455764075,
                        "totalProfit": 5742.670278910066
                    }
                }
            },
            {
                "id": "632122",
                "name": "척추측만증(Cobb's 각도20도이상)진단비",
                "theme": "기타",
                "confidence": 0.14003400770620636,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2723.19091796875
                    }
                }
            },
            {
                "id": "640447",
                "name": "특정관장처치비(급여,응급실내원)",
                "theme": "기타",
                "confidence": 0.09852200923786743,
                "availableQuantities": [
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 706.29345703125
                    }
                }
            },
            {
                "id": "640352",
                "name": "기흉진단비(태아가입용) 추가",
                "theme": "3대진단",
                "confidence": 0.33763287209968046,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 163.83023071289062
                    }
                }
            },
            {
                "id": "660052",
                "name": "가족일상생활중배상책임(Ⅲ)",
                "theme": "재물/배상",
                "confidence": 0.5167992899423686,
                "availableQuantities": [
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -8062.71240234375
                    }
                }
            },
            {
                "id": "611131",
                "name": "특정화상처치비(급여,연간5회한)",
                "theme": "기타",
                "confidence": 0.08390256435984446,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1279.8658447265625
                    }
                }
            },
            {
                "id": "610456",
                "name": "스쿨존내어린이교통사고위로금",
                "theme": null,
                "confidence": 0.004069430929911248,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -3.784907102584839
                    }
                }
            },
            {
                "id": "611065",
                "name": "성장판손상골절진단비(출생전)",
                "theme": "기타",
                "confidence": 0.053327364595517464,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 10.0,
                        "totalProfit": 2.2101538714218667
                    }
                }
            },
            {
                "id": "610454",
                "name": "유괴납치피해일당",
                "theme": "입원일당",
                "confidence": 0.0013688641305632304,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 47.39122009277344
                    }
                }
            },
            {
                "id": "611064",
                "name": "성장판손상골절진단비",
                "theme": "기타",
                "confidence": 0.05578853481962245,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 102.73792800702371,
                        "totalProfit": 1372.2895571770646
                    }
                }
            },
            {
                "id": "630356",
                "name": "소아탈장수술비",
                "theme": null,
                "confidence": 0.17915587989924872,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 34.948028564453125
                    }
                }
            }
        ]
    },
    "2": {
        "id": "2",
        "channel": "GA",
        "age": 0,
        "gndr": "남",
        "unt_pd_nm": "The좋은 알뜰",
        "silson_discount": [
            {
                "tag": "노후",
                "kmv_adj": -50000.0
            },
            {
                "tag": "유병자",
                "kmv_adj": -150000.0
            },
            {
                "tag": "일반",
                "kmv_adj": -589410.501296
            },
            {
                "tag": "출생전",
                "kmv_adj": -664667.2603089998
            }
        ],
        "items": [
            {
                "id": "631045",
                "name": "질병후유장해(3~100%)(출생전)",
                "quantity": 50000000,
                "theme": "사망후유",
                "totalPrice": 150.0,
                "totalProfit": -109.6668472290039
            },
            {
                "id": "632133",
                "name": "131대질병수술비(심장질환)",
                "quantity": 5000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 5644.3486328125
            },
            {
                "id": "610852",
                "name": "종합병원 일반상해입원일당(1일이상)",
                "quantity": 50000,
                "theme": "입원일당",
                "totalPrice": 655.0,
                "totalProfit": -3759.747427
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "quantity": 300000,
                "theme": "골절/화상",
                "totalPrice": 0.0,
                "totalProfit": 5094.44921875
            },
            {
                "id": "631972",
                "name": "질병수술비Q",
                "quantity": 500000,
                "theme": "수술",
                "totalPrice": 1955.0,
                "totalProfit": 18104.313189
            },
            {
                "id": "640207",
                "name": "응급실내원비(응급)(출생전)",
                "quantity": 100000,
                "theme": "기타",
                "totalPrice": 2420.0,
                "totalProfit": 1900.42138671875
            },
            {
                "id": "630383",
                "name": "뇌혈관질환진단비(태아가입용)",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 340.0,
                "totalProfit": -7479.844254
            },
            {
                "id": "610933",
                "name": "신화상치료비(중증화상및부식진단비)",
                "quantity": 50000000,
                "theme": "골절/화상",
                "totalPrice": 0.0,
                "totalProfit": 627.8564453125
            },
            {
                "id": "632134",
                "name": "131대질병수술비(특정31대질병)",
                "quantity": 5000000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 14404.216796875
            },
            {
                "id": "631562",
                "name": "양성뇌종양진단비Ⅱ(출생전)",
                "quantity": 20000000,
                "theme": "기타",
                "totalPrice": 20.0,
                "totalProfit": 9.003053665161133
            },
            {
                "id": "640154",
                "name": "응급실내원비(응급)",
                "quantity": 100000,
                "theme": "기타",
                "totalPrice": 2430.0,
                "totalProfit": 18164.454726
            },
            {
                "id": "610813",
                "name": "일반상해후유장해(3~100%)(출생전)",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 100.0,
                "totalProfit": 171.7863006591797
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "quantity": 200000,
                "theme": "골절/화상",
                "totalPrice": 0.0,
                "totalProfit": 246.29173278808594
            },
            {
                "id": "632526",
                "name": "131대질병수술비(유방의장애)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": -2793.23828125
            },
            {
                "id": "632136",
                "name": "131대질병수술비(관절염,생식기질환)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 21.0,
                "totalProfit": 32.416102
            },
            {
                "id": "633021",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)(출생전)",
                "quantity": 200000,
                "theme": "입원일당",
                "totalPrice": 1020.0,
                "totalProfit": -14347.084896
            },
            {
                "id": "630971",
                "name": "질병후유장해(3~100%)",
                "quantity": 50000000,
                "theme": "사망후유",
                "totalPrice": 250.0,
                "totalProfit": -18292.480596
            },
            {
                "id": "631962",
                "name": "질병중환자실 입원일당(1일이상)Q",
                "quantity": 100000,
                "theme": "입원일당",
                "totalPrice": 0.0,
                "totalProfit": -54462.0703125
            },
            {
                "id": "640382",
                "name": "아나필락시스진단비(응급, 연간1회한)",
                "quantity": 2000000,
                "theme": "기타",
                "totalPrice": 0.0,
                "totalProfit": 2886.359130859375
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "quantity": 400000,
                "theme": "입원일당",
                "totalPrice": 0.0,
                "totalProfit": 85.6644058227539
            },
            {
                "id": "632139",
                "name": "131대질병수술비(후각특정질환)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 1136.7645263671875
            },
            {
                "id": "610853",
                "name": "종합병원 일반상해입원일당(1일이상)(출생전)",
                "quantity": 50000,
                "theme": "입원일당",
                "totalPrice": 135.0,
                "totalProfit": 176.8050994873047
            },
            {
                "id": "633014",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)",
                "quantity": 200000,
                "theme": "입원일당",
                "totalPrice": 620.0,
                "totalProfit": -132561.735413
            },
            {
                "id": "632520",
                "name": "131대질병수술비(다빈도62대질병)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 12141.4033203125
            },
            {
                "id": "611264",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)",
                "quantity": 200000,
                "theme": "입원일당",
                "totalPrice": 0.0,
                "totalProfit": -40789.625
            },
            {
                "id": "631265",
                "name": "종합병원 질병입원일당(1일이상)(출생전)",
                "quantity": 50000,
                "theme": "입원일당",
                "totalPrice": 4550.0,
                "totalProfit": -25009.930557
            },
            {
                "id": "610910",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)(출생전)",
                "quantity": 400000,
                "theme": "입원일당",
                "totalPrice": 64.0,
                "totalProfit": 148.355026
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "quantity": 300000,
                "theme": "골절/화상",
                "totalPrice": 129.0,
                "totalProfit": 381.460684
            },
            {
                "id": "631973",
                "name": "질병수술비Q(출생전)",
                "quantity": 500000,
                "theme": "수술",
                "totalPrice": 1560.0,
                "totalProfit": 532.1647338867188
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 0.0,
                "totalProfit": 10548.9736328125
            },
            {
                "id": "632141",
                "name": "131대질병수술비(특정다빈도29대질병)",
                "quantity": 200000,
                "theme": "수술",
                "totalPrice": 60.0,
                "totalProfit": 1533.967548
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "quantity": 70000,
                "theme": "입원일당",
                "totalPrice": 2093.0,
                "totalProfit": 3429.815212
            },
            {
                "id": "632137",
                "name": "131대질병수술비(치핵)",
                "quantity": 200000,
                "theme": "수술",
                "totalPrice": 32.0,
                "totalProfit": -81.50468
            },
            {
                "id": "631560",
                "name": "양성뇌종양진단비Ⅱ",
                "quantity": 20000000,
                "theme": "기타",
                "totalPrice": 0.0,
                "totalProfit": 98.47274780273438
            },
            {
                "id": "611266",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)(출생전)",
                "quantity": 200000,
                "theme": "입원일당",
                "totalPrice": 80.0,
                "totalProfit": -88.17547607421875
            },
            {
                "id": "620235",
                "name": "의료사고법률비용",
                "quantity": 2000000,
                "theme": "재물/배상",
                "totalPrice": 0.0,
                "totalProfit": 27.997150421142578
            },
            {
                "id": "630996",
                "name": "뇌혈관질환진단비(태아가입용)(출생전)",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 120.0,
                "totalProfit": -5059.49462890625
            },
            {
                "id": "632532",
                "name": "131대질병수술비(편도염)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": 1014.4207153320312
            },
            {
                "id": "631263",
                "name": "종합병원 질병입원일당(1일이상)",
                "quantity": 50000,
                "theme": "입원일당",
                "totalPrice": 1985.0,
                "totalProfit": -177901.301548
            },
            {
                "id": "631957",
                "name": "질병입원일당(1일이상)Q(출생전)",
                "quantity": 70000,
                "theme": "입원일당",
                "totalPrice": 9170.0,
                "totalProfit": -36979.01171875
            },
            {
                "id": "610801",
                "name": "상해중환자실입원일당(1일이상)(출생전)",
                "quantity": 100000,
                "theme": "입원일당",
                "totalPrice": 90.0,
                "totalProfit": 181.3552703857422
            },
            {
                "id": "631346",
                "name": "갑상선기능항진증치료비",
                "quantity": 1000000,
                "theme": "기타",
                "totalPrice": 0.0,
                "totalProfit": 156.5203399658203
            },
            {
                "id": "610781",
                "name": "일반상해후유장해(3~100%)",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 0.0,
                "totalProfit": 23464.578125
            },
            {
                "id": "610805",
                "name": "일반상해입원일당(1일이상)(출생전)",
                "quantity": 70000,
                "theme": "입원일당",
                "totalPrice": 329.0,
                "totalProfit": 436.2166442871094
            },
            {
                "id": "640204",
                "name": "깁스치료비(출생전)",
                "quantity": 300000,
                "theme": "골절/화상",
                "totalPrice": 230.0,
                "totalProfit": 59.082916259765625
            },
            {
                "id": "631059",
                "name": "허혈성심장질환진단비(감액없음)(출생전)",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 22.0,
                "totalProfit": 16.596097946166992
            },
            {
                "id": "632140",
                "name": "131대질병수술비(백내장)",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 0.0,
                "totalProfit": -41.75815963745117
            },
            {
                "id": "640384",
                "name": "아나필락시스진단비(응급, 연간1회한)(출생전)",
                "quantity": 2000000,
                "theme": "기타",
                "totalPrice": 80.0,
                "totalProfit": 108.14888763427734
            },
            {
                "id": "631956",
                "name": "질병입원일당(1일이상)Q",
                "quantity": 70000,
                "theme": "입원일당",
                "totalPrice": 4627.0,
                "totalProfit": -642844.166013
            },
            {
                "id": "610469",
                "name": "상해중환자실 입원일당(1일이상)",
                "quantity": 100000,
                "theme": "입원일당",
                "totalPrice": 0.0,
                "totalProfit": 99928.8671875
            },
            {
                "id": "610923",
                "name": "골절진단비Ⅱ(출생전)",
                "quantity": 300000,
                "theme": "골절/화상",
                "totalPrice": 150.0,
                "totalProfit": 17.948841094970703
            },
            {
                "id": "631963",
                "name": "질병중환자실 입원일당(1일이상)Q(출생전)",
                "quantity": 100000,
                "theme": "입원일당",
                "totalPrice": 6580.0,
                "totalProfit": -1161.14574
            },
            {
                "id": "632132",
                "name": "독감(인플루엔자)및특정9대감염병입원일당(1일이상 30일한도)(출생전)",
                "quantity": 30000,
                "theme": "입원일당",
                "totalPrice": 270.0,
                "totalProfit": -1828.6585693359375
            },
            {
                "id": "632120",
                "name": "독감(인플루엔자)및특정9대감염병입원일당(1일이상 30일한도)",
                "quantity": 30000,
                "theme": "입원일당",
                "totalPrice": 0.0,
                "totalProfit": -49903.4296875
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "quantity": 300000,
                "theme": "골절/화상",
                "totalPrice": 0.0,
                "totalProfit": -6218.552734375
            },
            {
                "id": "632138",
                "name": "131대질병수술비(뇌혈관질환)",
                "quantity": 5000000,
                "theme": "수술",
                "totalPrice": 60.0,
                "totalProfit": 1183.452496
            },
            {
                "id": "631398",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)(출생전)",
                "quantity": 400000,
                "theme": "입원일당",
                "totalPrice": 840.0,
                "totalProfit": -4970.7607421875
            },
            {
                "id": "631397",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)",
                "quantity": 400000,
                "theme": "입원일당",
                "totalPrice": 0.0,
                "totalProfit": -34936.3359375
            }
        ],
        "availableItems": [
            {
                "id": "610299",
                "name": "상해50%이상고도후유장해",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    10000000,
                    20000000,
                    50000000,
                    60000000
                ],
                "recommendedQuantity": 60000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 8218.857421875
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2708.530029296875
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1330.9603271484375
                    },
                    "60000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6841.31591796875
                    }
                }
            },
            {
                "id": "631397",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.13186163487586128,
                "availableQuantities": [
                    30000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": -23306.40234375
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": -3535.512451171875
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -58196.20703125
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": -34936.3359375
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": -46566.2734375
                    }
                }
            },
            {
                "id": "632215",
                "name": "신생아 인큐베이터입원일당(1일이상 120일한도)",
                "theme": "태아출생",
                "confidence": 0.12964560399635097,
                "availableQuantities": [
                    10000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1629.0,
                        "totalProfit": -9551.2060546875
                    },
                    "30000": {
                        "totalPrice": 2172.0,
                        "totalProfit": -12731.0927734375
                    },
                    "40000": {
                        "totalPrice": 2715.0,
                        "totalProfit": -15910.98046875
                    },
                    "50000": {
                        "totalPrice": 5173.255604225715,
                        "totalProfit": -13467.688706764202
                    }
                }
            },
            {
                "id": "610805",
                "name": "일반상해입원일당(1일이상)(출생전)",
                "theme": "입원일당",
                "confidence": 0.01849525955171615,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    60000,
                    70000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 94.0,
                        "totalProfit": 121.7967758178711
                    },
                    "30000": {
                        "totalPrice": 141.0,
                        "totalProfit": 184.68075561523438
                    },
                    "50000": {
                        "totalPrice": 235.0,
                        "totalProfit": 310.4486999511719
                    },
                    "60000": {
                        "totalPrice": 282.0,
                        "totalProfit": 373.3326721191406
                    },
                    "70000": {
                        "totalPrice": 329.0,
                        "totalProfit": 436.2166442871094
                    }
                }
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.04881242358104001,
                "availableQuantities": [
                    30000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1564.2720947265625
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 597.7897338867188
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1242.111328125
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 85.6644058227539
                    },
                    "500000": {
                        "totalPrice": 136.73045822102426,
                        "totalProfit": 1837.7556250215637
                    }
                }
            },
            {
                "id": "631045",
                "name": "질병후유장해(3~100%)(출생전)",
                "theme": "사망후유",
                "confidence": 0.12966322687015253,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 30.0,
                        "totalProfit": -25.110301971435547
                    },
                    "20000000": {
                        "totalPrice": 60.0,
                        "totalProfit": -46.24943923950195
                    },
                    "30000000": {
                        "totalPrice": 90.0,
                        "totalProfit": -67.3885726928711
                    },
                    "50000000": {
                        "totalPrice": 150.0,
                        "totalProfit": -109.6668472290039
                    }
                }
            },
            {
                "id": "631815",
                "name": "수술비(1~7종, 연간3회한)[질병7종]",
                "theme": "수술",
                "confidence": 0.008661149261781222,
                "availableQuantities": [
                    10000000,
                    15000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 23386.58984375
                    },
                    "15000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 11670.0234375
                    },
                    "20000000": {
                        "totalPrice": 570.516129032258,
                        "totalProfit": 20212.688546330643
                    }
                }
            },
            {
                "id": "610620",
                "name": "일반상해 80%이상후유장해 재활자금",
                "theme": "사망후유",
                "confidence": 0.0005084490062889259,
                "availableQuantities": [
                    50000000,
                    100000000,
                    200000000,
                    400000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6543.20751953125
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 26312.57421875
                    },
                    "200000000": {
                        "totalPrice": 475.0,
                        "totalProfit": 20429.668962714288
                    },
                    "400000000": {
                        "totalPrice": 898.1818181818181,
                        "totalProfit": 26195.27852245454
                    }
                }
            },
            {
                "id": "631050",
                "name": "특정전염병진단비(출생전)",
                "theme": "기타",
                "confidence": 0.07200150406685848,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 2.0,
                        "totalProfit": -3.1109979152679443
                    }
                }
            },
            {
                "id": "631611",
                "name": "뇌졸중통원일당(1일이상 30일한도)[뇌졸중통원일당]",
                "theme": "입원일당",
                "confidence": 0.006566831862977237,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": 309.3827819824219
                    }
                }
            },
            {
                "id": "632381",
                "name": "암수술비(유사암제외)(25%체증형)(출생전)",
                "theme": "수술",
                "confidence": 0.1654267535278096,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000,
                    10000000,
                    15000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 71.68079800498754,
                        "totalProfit": 149.00171105735646
                    },
                    "3000000": {
                        "totalPrice": 107.32835820895522,
                        "totalProfit": 224.37998994392515
                    },
                    "5000000": {
                        "totalPrice": 179.59361393323658,
                        "totalProfit": 370.6518018514104
                    },
                    "10000000": {
                        "totalPrice": 360.0,
                        "totalProfit": 577.2427368164062
                    },
                    "15000000": {
                        "totalPrice": 540.0,
                        "totalProfit": 867.8496704101562
                    }
                }
            },
            {
                "id": "632384",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)",
                "theme": "3대진단",
                "confidence": 0.0125076991433439,
                "availableQuantities": [
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1554.39599609375
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3155.353515625
                    }
                }
            },
            {
                "id": "610918",
                "name": "골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.044866584808316366,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1760.7032470703125
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5978.0732421875
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1158.285888671875
                    },
                    "1000000": {
                        "totalPrice": 1191.4656862745098,
                        "totalProfit": 24314.515625885728
                    },
                    "2000000": {
                        "totalPrice": 2051.846153846154,
                        "totalProfit": 42467.66815148253
                    }
                }
            },
            {
                "id": "631346",
                "name": "갑상선기능항진증치료비",
                "theme": "3대진단",
                "confidence": 0.0925026420566948,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 156.5203399658203
                    }
                }
            },
            {
                "id": "631787",
                "name": "4대양성종양진단비(골·관절연골 양성종양)",
                "theme": "3대진단",
                "confidence": 0.07092400736334108,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4773.0078125
                    }
                }
            },
            {
                "id": "610468",
                "name": "중대상해수술비",
                "theme": "수술",
                "confidence": 0.0065118641372896935,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 8818.875
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4386.1181640625
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 17684.40234375
                    }
                }
            },
            {
                "id": "610889",
                "name": "일반상해수술입원일당(1일이상 20일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.0021642992765053084,
                "availableQuantities": [
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 81.0,
                        "totalProfit": 142.50437927246094
                    },
                    "40000": {
                        "totalPrice": 108.0,
                        "totalProfit": 191.32957458496094
                    },
                    "50000": {
                        "totalPrice": 135.0,
                        "totalProfit": 240.15475463867188
                    }
                }
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "theme": "골절/화상",
                "confidence": 0.0802457083126919,
                "availableQuantities": [
                    200000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 230.69532775878906
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1339.6041259765625
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 646.5361328125
                    }
                }
            },
            {
                "id": "631422",
                "name": "32대질병관혈수술비(연간1회한)[14대질병]",
                "theme": "수술",
                "confidence": 0.06908996294248558,
                "availableQuantities": [
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -110.36492919921875
                    },
                    "500000": {
                        "totalPrice": 65.87362637362638,
                        "totalProfit": 582.3337213684902
                    }
                }
            },
            {
                "id": "632120",
                "name": "독감(인플루엔자)및특정9대감염병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.2098369036229612,
                "availableQuantities": [
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": -49903.4296875
                    }
                }
            },
            {
                "id": "610933",
                "name": "신화상치료비(중증화상및부식진단비)",
                "theme": "골절/화상",
                "confidence": 0.09748708762303672,
                "availableQuantities": [
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1077.4486083984375
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 627.8564453125
                    }
                }
            },
            {
                "id": "640181",
                "name": "신깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.08128340853394804,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1077.1966552734375
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1855.9630126953125
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3758.384765625
                    }
                }
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "theme": "입원일당",
                "confidence": 0.0,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    60000,
                    70000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 170.2859649658203
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 387.264404296875
                    },
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 97.98454284667969
                    },
                    "60000": {
                        "totalPrice": 0.0,
                        "totalProfit": 314.8874206542969
                    },
                    "70000": {
                        "totalPrice": 3437.6796296296297,
                        "totalProfit": 1765.3131496327162
                    }
                }
            },
            {
                "id": "611267",
                "name": "상급병실(1인실) 종합병원 일반상해수술입원일당(1일이상 10일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.014537962895667276,
                "availableQuantities": [
                    50000,
                    70000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 2.0,
                        "totalProfit": -1.0144109725952148
                    },
                    "70000": {
                        "totalPrice": 3.0,
                        "totalProfit": 0.5261120200157166
                    },
                    "100000": {
                        "totalPrice": 2.963864306784661,
                        "totalProfit": 1.2224510221729485
                    }
                }
            },
            {
                "id": "631720",
                "name": "특정9대감염병진단비(연간1회한, 태아가입용)(출생전)",
                "theme": "3대진단",
                "confidence": 0.15231589433081472,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 3972.0,
                        "totalProfit": 6263.97412109375
                    },
                    "200000": {
                        "totalPrice": 2644.651880424301,
                        "totalProfit": 6103.683924795898
                    },
                    "300000": {
                        "totalPrice": 3968.9698469151076,
                        "totalProfit": 7178.864206287728
                    }
                }
            },
            {
                "id": "631810",
                "name": "수술비(1~7종, 연간3회한)[질병2종]",
                "theme": "수술",
                "confidence": 0.008661149261781222,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 60.0,
                        "totalProfit": 3475.85884
                    },
                    "300000": {
                        "totalPrice": 84.1,
                        "totalProfit": 3514.109290706667
                    }
                }
            },
            {
                "id": "631807",
                "name": "수술비(1~7종, 연간3회한)[질병6종]",
                "theme": "수술",
                "confidence": 0.11875667249563698,
                "availableQuantities": [
                    3000000,
                    5000000,
                    6000000,
                    7000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 16594.89453125
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14217.505859375
                    },
                    "6000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 23727.05078125
                    },
                    "7000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 11840.1318359375
                    },
                    "10000000": {
                        "totalPrice": 2711.1443388072603,
                        "totalProfit": 101106.47101156227
                    }
                }
            },
            {
                "id": "633014",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.21330375158858333,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -139080.125
                    },
                    "200000": {
                        "totalPrice": 956.6905158069884,
                        "totalProfit": -63509.576492973065
                    }
                }
            },
            {
                "id": "631803",
                "name": "수술비(1~7종, 연간3회한)[질병2종]",
                "theme": "수술",
                "confidence": 0.11875667249563698,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3212.649658203125
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2126.219482421875
                    }
                }
            },
            {
                "id": "640205",
                "name": "신깁스치료비(출생전)",
                "theme": "골절/화상",
                "confidence": 0.0373607618675622,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 38.0,
                        "totalProfit": 47.15777587890625
                    },
                    "500000": {
                        "totalPrice": 64.0,
                        "totalProfit": 86.23502349853516
                    },
                    "1000000": {
                        "totalPrice": 128.0,
                        "totalProfit": 176.4412078857422
                    }
                }
            },
            {
                "id": "611018",
                "name": "수술비(1~7종, 연간3회한)[상해7종]",
                "theme": "수술",
                "confidence": 0.06870591209491707,
                "availableQuantities": [
                    5000000,
                    6000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 735.0713500976562
                    },
                    "6000000": {
                        "totalPrice": 28.857142857142858,
                        "totalProfit": 1722.8371766666667
                    },
                    "10000000": {
                        "totalPrice": 57.014150943396224,
                        "totalProfit": 2624.1013414858485
                    },
                    "20000000": {
                        "totalPrice": 101.39528619528619,
                        "totalProfit": 4401.2893874946085
                    }
                }
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.5755634474874014,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": -972.4591674804688
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -6218.552734375
                    },
                    "500000": {
                        "totalPrice": 745.2538598169149,
                        "totalProfit": 8131.949418537914
                    },
                    "1000000": {
                        "totalPrice": 1468.6373456790122,
                        "totalProfit": 12290.711720051695
                    },
                    "2000000": {
                        "totalPrice": 2857.3801862828113,
                        "totalProfit": 19266.570182944022
                    }
                }
            },
            {
                "id": "631442",
                "name": "계속받는 항암방사선약물치료비(급여)(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.19997637389571968,
                "availableQuantities": [
                    100000,
                    1000000,
                    10000000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 349.7879638671875
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 41488.48828125
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4106.89697265625
                    }
                }
            },
            {
                "id": "632411",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.004762517741491385,
                "availableQuantities": [
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 750.0,
                        "totalProfit": 686.6710815429688
                    },
                    "100000000": {
                        "totalPrice": 1500.0,
                        "totalProfit": 1377.313232421875
                    }
                }
            },
            {
                "id": "610803",
                "name": "일반상해50%이상후유장해재활자금(출생전)",
                "theme": "사망후유",
                "confidence": 0.0004892087662266673,
                "availableQuantities": [
                    10000000,
                    20000000,
                    50000000,
                    60000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 10.0,
                        "totalProfit": 7.703433036804199
                    },
                    "20000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 19.378032684326172
                    },
                    "50000000": {
                        "totalPrice": 50.0,
                        "totalProfit": 54.401832580566406
                    },
                    "60000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 66.07643127441406
                    }
                }
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "theme": "골절/화상",
                "confidence": 0.06300432900234708,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 246.29173278808594
                    }
                }
            },
            {
                "id": "611012",
                "name": "수술비(1~7종, 연간3회한)[상해1종]",
                "theme": "수술",
                "confidence": 0.06870591209491707,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 27146.623046875
                    },
                    "200000": {
                        "totalPrice": 926.1517857142857,
                        "totalProfit": 40016.52061146428
                    },
                    "300000": {
                        "totalPrice": 1151.7372034956304,
                        "totalProfit": 47938.05728263897
                    }
                }
            },
            {
                "id": "631061",
                "name": "호흡기관련질병수술비(출생전)",
                "theme": "수술",
                "confidence": 0.08944073822170187,
                "availableQuantities": [
                    100000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1.0,
                        "totalProfit": -5.099534034729004
                    },
                    "300000": {
                        "totalPrice": 3.0,
                        "totalProfit": -4.497928142547607
                    }
                }
            },
            {
                "id": "631805",
                "name": "수술비(1~7종, 연간3회한)[질병4종]",
                "theme": "수술",
                "confidence": 0.11875667249563698,
                "availableQuantities": [
                    500000,
                    600000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1911.2615966796875
                    },
                    "600000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1584.9320068359375
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3216.639892578125
                    }
                }
            },
            {
                "id": "611025",
                "name": "수술비(1~7종, 연간3회한)[상해7종]",
                "theme": "수술",
                "confidence": 0.0026020568152926122,
                "availableQuantities": [
                    10000000,
                    15000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 302.5011901855469
                    },
                    "15000000": {
                        "totalPrice": 15.0,
                        "totalProfit": 736.530707
                    },
                    "20000000": {
                        "totalPrice": 19.97979797979798,
                        "totalProfit": 888.0094817777774
                    }
                }
            },
            {
                "id": "631621",
                "name": "급성심근경색증통원일당(1일이상 30일한도)[급성심근경색증통원일당]",
                "theme": "입원일당",
                "confidence": 0.006509669347063575,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": -17.687847137451172
                    }
                }
            },
            {
                "id": "631622",
                "name": "급성심근경색증통원일당(1일이상 30일한도)[급성심근경색증상급종합병원통원일당]",
                "theme": "입원일당",
                "confidence": 0.006509669347063575,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 97.81890869140625
                    }
                }
            },
            {
                "id": "632343",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)",
                "theme": "3대진단",
                "confidence": 0.3002820197678297,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1027.353759765625
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 311.27313232421875
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3533.5009765625
                    },
                    "50000000": {
                        "totalPrice": 1165.648408433237,
                        "totalProfit": 31983.959368962725
                    },
                    "100000000": {
                        "totalPrice": 995.4566128067025,
                        "totalProfit": 24805.48742410966
                    }
                }
            },
            {
                "id": "631063",
                "name": "희귀난치성7대질환진단비(출생전)",
                "theme": "기타",
                "confidence": 0.1325202679526345,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 15.0,
                        "totalProfit": -2.523451089859009
                    },
                    "5000000": {
                        "totalPrice": 30.0,
                        "totalProfit": -1.0757349729537964
                    },
                    "10000000": {
                        "totalPrice": 29.996533795493935,
                        "totalProfit": -1.92529499432936
                    }
                }
            },
            {
                "id": "631139",
                "name": "유사암수술비",
                "theme": "수술",
                "confidence": 0.0038032166167270534,
                "availableQuantities": [
                    4000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "4000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 380.3895263671875
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 294.9823913574219
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 807.336669921875
                    }
                }
            },
            {
                "id": "631381",
                "name": "중대한재생불량성빈혈진단비",
                "theme": "기타",
                "confidence": 0.14884575915534987,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 10.46266170129361,
                        "totalProfit": 357.065948967403
                    }
                }
            },
            {
                "id": "631962",
                "name": "질병중환자실 입원일당(1일이상)Q",
                "theme": "입원일당",
                "confidence": 0.20319217364202669,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": -108877.609375
                    },
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -54462.0703125
                    },
                    "200000": {
                        "totalPrice": 1981.4648742411102,
                        "totalProfit": -93859.35985391491
                    },
                    "300000": {
                        "totalPrice": 2997.7952127659573,
                        "totalProfit": -146560.63964908276
                    },
                    "500000": {
                        "totalPrice": 4865.637168141593,
                        "totalProfit": -233803.98567905137
                    }
                }
            },
            {
                "id": "632497",
                "name": "전이암진단비(특정전이암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.001953569475701607,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 37.21414566040039
                    }
                }
            },
            {
                "id": "611265",
                "name": "상급병실(1인실) 종합병원 일반상해수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.030647614737517183,
                "availableQuantities": [
                    50000,
                    70000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 444.1102600097656
                    },
                    "70000": {
                        "totalPrice": 0.0,
                        "totalProfit": 654.4024658203125
                    },
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 303.9098205566406
                    }
                }
            },
            {
                "id": "610807",
                "name": "일반상해입원일당(1일이상30일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.002306681671638186,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 76.0,
                        "totalProfit": 130.53282165527344
                    },
                    "20000": {
                        "totalPrice": 114.0,
                        "totalProfit": 197.78482055664062
                    },
                    "30000": {
                        "totalPrice": 152.0,
                        "totalProfit": 265.0368347167969
                    },
                    "40000": {
                        "totalPrice": 153.76,
                        "totalProfit": 378.58466338
                    },
                    "50000": {
                        "totalPrice": 190.0,
                        "totalProfit": 332.288818359375
                    }
                }
            },
            {
                "id": "610853",
                "name": "종합병원 일반상해입원일당(1일이상)(출생전)",
                "theme": "입원일당",
                "confidence": 0.01881463243958138,
                "availableQuantities": [
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 54.176308539944905,
                        "totalProfit": 125.00250070994474
                    },
                    "30000": {
                        "totalPrice": 81.32656826568265,
                        "totalProfit": 163.1204610157044
                    },
                    "40000": {
                        "totalPrice": 108.0,
                        "totalProfit": 140.64984130859375
                    },
                    "50000": {
                        "totalPrice": 135.0,
                        "totalProfit": 176.8050994873047
                    }
                }
            },
            {
                "id": "631084",
                "name": "암진단비(유사암제외)(출생전)",
                "theme": "3대진단",
                "confidence": 0.0035317443905800746,
                "availableQuantities": [
                    30000000,
                    40000000,
                    50000000,
                    70000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 720.0,
                        "totalProfit": 806.8020865
                    },
                    "40000000": {
                        "totalPrice": 960.0,
                        "totalProfit": 147.42358576923078
                    },
                    "50000000": {
                        "totalPrice": 1200.0,
                        "totalProfit": 1030.5382080078125
                    },
                    "70000000": {
                        "totalPrice": 1680.0,
                        "totalProfit": 1444.3419189453125
                    },
                    "100000000": {
                        "totalPrice": 2400.0,
                        "totalProfit": 2065.047607421875
                    }
                }
            },
            {
                "id": "610799",
                "name": "상해수술비(출생전)",
                "theme": null,
                "confidence": 0.00023959997296073277,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 300.0,
                        "totalProfit": -116.9461441040039
                    },
                    "500000": {
                        "totalPrice": 600.0,
                        "totalProfit": -229.92112731933594
                    },
                    "1000000": {
                        "totalPrice": 286.46153846153845,
                        "totalProfit": -56.14498097435897
                    },
                    "2000000": {
                        "totalPrice": 600.0,
                        "totalProfit": -549.0027221153846
                    }
                }
            },
            {
                "id": "611015",
                "name": "수술비(1~7종, 연간3회한)[상해4종]",
                "theme": "수술",
                "confidence": 0.06870591209491707,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 126.0236311239193,
                        "totalProfit": 5569.5501756395615
                    }
                }
            },
            {
                "id": "632404",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.2010193225154051,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 9.0,
                        "totalProfit": 6.98884391784668
                    },
                    "20000000": {
                        "totalPrice": 18.0,
                        "totalProfit": 17.948850631713867
                    },
                    "30000000": {
                        "totalPrice": 27.0,
                        "totalProfit": 28.908857345581055
                    },
                    "50000000": {
                        "totalPrice": 45.0,
                        "totalProfit": 50.82887268066406
                    },
                    "100000000": {
                        "totalPrice": 90.0,
                        "totalProfit": 105.62890625
                    }
                }
            },
            {
                "id": "610935",
                "name": "상해사고부상치료비[1등급]",
                "theme": "수술",
                "confidence": 0.0011432811685015032,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 40218.94140625
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 20086.205078125
                    }
                }
            },
            {
                "id": "631415",
                "name": "32대질병관혈수술비(연간1회한)[9대질병]",
                "theme": "수술",
                "confidence": 0.001972568156891998,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 25589.927734375
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12771.6982421875
                    }
                }
            },
            {
                "id": "610910",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.03283693627117072,
                "availableQuantities": [
                    30000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 32.0,
                        "totalProfit": 52.350341796875
                    },
                    "200000": {
                        "totalPrice": 48.0,
                        "totalProfit": 80.51109313964844
                    },
                    "300000": {
                        "totalPrice": 64.0,
                        "totalProfit": 108.67184448242188
                    },
                    "400000": {
                        "totalPrice": 62.85877318116976,
                        "totalProfit": 138.6510219611428
                    },
                    "500000": {
                        "totalPrice": 80.0,
                        "totalProfit": 136.8325958251953
                    }
                }
            },
            {
                "id": "610852",
                "name": "종합병원 일반상해입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.029883171813293315,
                "availableQuantities": [
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": -2936.004638671875
                    },
                    "30000": {
                        "totalPrice": 652.8143157894737,
                        "totalProfit": 10635.260117509277
                    },
                    "40000": {
                        "totalPrice": 877.46,
                        "totalProfit": 1632.8165819199992
                    },
                    "50000": {
                        "totalPrice": 1035.820781312928,
                        "totalProfit": 1087.5571825830648
                    }
                }
            },
            {
                "id": "630092",
                "name": "호흡기관련질병수술비",
                "theme": "수술",
                "confidence": 0.07550712768928619,
                "availableQuantities": [
                    100000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2260.304443359375
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 708.4385986328125
                    }
                }
            },
            {
                "id": "631414",
                "name": "32대질병관혈수술비(연간1회한)[9대질병]",
                "theme": "수술",
                "confidence": 0.06908996294248558,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 345.23809523809524,
                        "totalProfit": 12985.742815425532
                    },
                    "5000000": {
                        "totalPrice": 548.9666876178504,
                        "totalProfit": 19429.59649650408
                    },
                    "10000000": {
                        "totalPrice": 1004.8101807802093,
                        "totalProfit": 33707.7355127883
                    }
                }
            },
            {
                "id": "632492",
                "name": "전이암진단비(림프절전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.0059256780984289275,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 850.9456176757812
                    },
                    "20000000": {
                        "totalPrice": 59.77777777777778,
                        "totalProfit": -1845.4417994444448
                    }
                }
            },
            {
                "id": "630110",
                "name": "조혈모세포이식수술비",
                "theme": "수술",
                "confidence": 0.14743223187815613,
                "availableQuantities": [
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2300.171875
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3864.640625
                    },
                    "50000000": {
                        "totalPrice": 308.0053697827679,
                        "totalProfit": 7567.909001282376
                    }
                }
            },
            {
                "id": "632406",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.2010193225154051,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 150.0,
                        "totalProfit": 134.35150491208788
                    },
                    "20000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 332.742043898734
                    },
                    "30000000": {
                        "totalPrice": 450.0,
                        "totalProfit": 528.9721037636211
                    },
                    "50000000": {
                        "totalPrice": 750.0,
                        "totalProfit": 686.6710815429688
                    },
                    "100000000": {
                        "totalPrice": 1500.0,
                        "totalProfit": 1377.313232421875
                    }
                }
            },
            {
                "id": "632340",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)",
                "theme": "3대진단",
                "confidence": 0.3002820197678297,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1075.1212158203125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3692.612060546875
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 701.23486328125
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1822.96533203125
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 327.27972412109375
                    }
                }
            },
            {
                "id": "630993",
                "name": "뇌졸중진단비(태아가입용)추가(출생전)",
                "theme": "3대진단",
                "confidence": NaN,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 50.0,
                        "totalProfit": -1532.469864
                    }
                }
            },
            {
                "id": "631443",
                "name": "암직접치료통원일당(상급종합병원)",
                "theme": "입원일당",
                "confidence": 0.09781746342784976,
                "availableQuantities": [
                    30000,
                    50000,
                    100000,
                    200000,
                    600000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4018.14501953125
                    },
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6727.9296875
                    },
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 81247.0078125
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 27051.314453125
                    },
                    "600000": {
                        "totalPrice": 6089.496240601504,
                        "totalProfit": 223073.3892318759
                    }
                }
            },
            {
                "id": "630388",
                "name": "희귀난치성 7대질환진단비",
                "theme": "기타",
                "confidence": 0.11349626137773829,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 869.102294921875
                    },
                    "5000000": {
                        "totalPrice": 500.4280652019844,
                        "totalProfit": 18524.485886638446
                    },
                    "10000000": {
                        "totalPrice": 648.5970692052626,
                        "totalProfit": 20749.431010535664
                    }
                }
            },
            {
                "id": "611023",
                "name": "수술비(1~7종, 연간3회한)[상해5종]",
                "theme": "수술",
                "confidence": 0.0026020568152926122,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 892.6717529296875
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 516.9690551757812
                    }
                }
            },
            {
                "id": "632403",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.2010193225154051,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 18.0,
                        "totalProfit": -7.001107215881348
                    },
                    "20000000": {
                        "totalPrice": 27.0,
                        "totalProfit": -8.516080856323242
                    },
                    "30000000": {
                        "totalPrice": 45.0,
                        "totalProfit": -11.546028137207031
                    },
                    "50000000": {
                        "totalPrice": 90.0,
                        "totalProfit": -19.120895385742188
                    },
                    "100000000": {
                        "totalPrice": 88.98238747553816,
                        "totalProfit": -29.732032630960152
                    }
                }
            },
            {
                "id": "631431",
                "name": "32대질병관혈수술비(연간1회한)[4대질병]",
                "theme": "수술",
                "confidence": 0.001972568156891998,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2574.35595703125
                    }
                }
            },
            {
                "id": "632385",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.0125076991433439,
                "availableQuantities": [
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 18405.080078125
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 9179.2646484375
                    }
                }
            },
            {
                "id": "631064",
                "name": "암진단비(유사암제외)",
                "theme": "3대진단",
                "confidence": 0.006321779998450353,
                "availableQuantities": [
                    30000000,
                    40000000,
                    50000000,
                    70000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 74743.2578125
                    },
                    "40000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 37348.359375
                    },
                    "50000000": {
                        "totalPrice": 1551.0978260869565,
                        "totalProfit": 32905.28775533696
                    },
                    "70000000": {
                        "totalPrice": 2275.0,
                        "totalProfit": 47704.608585999995
                    },
                    "100000000": {
                        "totalPrice": 3328.864077669903,
                        "totalProfit": 64566.67023519419
                    }
                }
            },
            {
                "id": "632140",
                "name": "131대질병수술비(백내장)",
                "theme": "수술",
                "confidence": 0.4070080820779174,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": -59.04515838623047
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -41.75815963745117
                    }
                }
            },
            {
                "id": "632383",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)",
                "theme": "3대진단",
                "confidence": 0.0125076991433439,
                "availableQuantities": [
                    10000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -8981.140625
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -4513.8583984375
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -940.03173828125
                    }
                }
            },
            {
                "id": "631398",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.0503949271741245,
                "availableQuantities": [
                    30000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 63.0,
                        "totalProfit": -376.4803771972656
                    },
                    "200000": {
                        "totalPrice": 420.0,
                        "totalProfit": -2487.365966796875
                    },
                    "300000": {
                        "totalPrice": 630.0,
                        "totalProfit": -3729.063232421875
                    },
                    "400000": {
                        "totalPrice": 840.0,
                        "totalProfit": -4970.7607421875
                    },
                    "500000": {
                        "totalPrice": 1050.0,
                        "totalProfit": -6212.4580078125
                    }
                }
            },
            {
                "id": "610886",
                "name": "신골절치료비(치아파절포함)",
                "theme": "골절/화상",
                "confidence": 0.012967674414253526,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14276.998046875
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 71571.453125
                    },
                    "3000000": {
                        "totalPrice": 2905.4285714285716,
                        "totalProfit": 75260.16991923809
                    },
                    "5000000": {
                        "totalPrice": 4888.251764705882,
                        "totalProfit": 112796.96546568704
                    },
                    "10000000": {
                        "totalPrice": 9210.181818181818,
                        "totalProfit": 202835.97467517352
                    }
                }
            },
            {
                "id": "631134",
                "name": "암수술비(유사암제외)(출생전)",
                "theme": "수술",
                "confidence": 0.001109205530729497,
                "availableQuantities": [
                    4000000,
                    5000000,
                    10000000,
                    15000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "4000000": {
                        "totalPrice": 340.0,
                        "totalProfit": 474.60009765625
                    },
                    "5000000": {
                        "totalPrice": 510.0,
                        "totalProfit": 713.8857421875
                    },
                    "10000000": {
                        "totalPrice": 340.0,
                        "totalProfit": 614.8909113860752
                    },
                    "15000000": {
                        "totalPrice": 510.0,
                        "totalProfit": 961.8967239999998
                    }
                }
            },
            {
                "id": "631263",
                "name": "종합병원 질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.037287031663376095,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": -73934.203125
                    },
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": -36990.3671875
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": -184765.71875
                    },
                    "40000": {
                        "totalPrice": 0.0,
                        "totalProfit": -110878.0390625
                    },
                    "50000": {
                        "totalPrice": 3893.089285714286,
                        "totalProfit": -59675.35110716963
                    }
                }
            },
            {
                "id": "632410",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.004762517741491385,
                "availableQuantities": [
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 350.0,
                        "totalProfit": 298.8942565917969
                    },
                    "100000000": {
                        "totalPrice": 700.0,
                        "totalProfit": 601.7596435546875
                    }
                }
            },
            {
                "id": "632520",
                "name": "131대질병수술비(다빈도62대질병)",
                "theme": "수술",
                "confidence": 0.44149084069860706,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12141.4033203125
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3609.8486328125
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 24329.337890625
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6047.435546875
                    }
                }
            },
            {
                "id": "631037",
                "name": "질병입원일당(1일이상30일한도)(출생전)",
                "theme": null,
                "confidence": 0.0043690375960417915,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 40000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1173.0,
                        "totalProfit": -218.01211547851562
                    },
                    "20000": {
                        "totalPrice": 2346.0,
                        "totalProfit": -432.0530700683594
                    },
                    "30000": {
                        "totalPrice": 3519.0,
                        "totalProfit": -646.093994140625
                    },
                    "40000": {
                        "totalPrice": 4692.0,
                        "totalProfit": -860.1349487304688
                    },
                    "50000": {
                        "totalPrice": 5865.0,
                        "totalProfit": -1074.1759033203125
                    }
                }
            },
            {
                "id": "631784",
                "name": "4대양성종양진단비(대장 양성종양및특정폴립)",
                "theme": "3대진단",
                "confidence": 0.07092400736334108,
                "availableQuantities": [
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -2034.71630859375
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1239.4400634765625
                    }
                }
            },
            {
                "id": "631166",
                "name": "5대기관질병수술비(Ⅱ)(연간1회한)",
                "theme": "수술",
                "confidence": 0.10273499167670563,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 230414.59375
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 38363.46875
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 153594.078125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 22999.33984375
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 76773.625
                    }
                }
            },
            {
                "id": "631170",
                "name": "5대기관질병수술비(Ⅱ)(연간1회한)(출생전)",
                "theme": "수술",
                "confidence": 0.0020386642505456415,
                "availableQuantities": [
                    1000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 10.0,
                        "totalProfit": 30.828279428571427
                    },
                    "5000000": {
                        "totalPrice": 50.0,
                        "totalProfit": 132.4294016
                    },
                    "10000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 209.99685668945312
                    },
                    "20000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 423.9648742675781
                    }
                }
            },
            {
                "id": "611013",
                "name": "수술비(1~7종, 연간3회한)[상해2종]",
                "theme": "수술",
                "confidence": 0.06870591209491707,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 168.69387755102042,
                        "totalProfit": 6667.1609322448985
                    },
                    "300000": {
                        "totalPrice": 249.75,
                        "totalProfit": 10132.557165392913
                    }
                }
            },
            {
                "id": "632349",
                "name": "암수술비(유사암제외)(25%체증형)",
                "theme": "수술",
                "confidence": 0.2579436247985641,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000,
                    10000000,
                    15000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 11172.580078125
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7432.8759765625
                    },
                    "5000000": {
                        "totalPrice": 1309.3551970378207,
                        "totalProfit": 36153.78415794384
                    },
                    "10000000": {
                        "totalPrice": 1855.6198103955542,
                        "totalProfit": 51484.40479773573
                    },
                    "15000000": {
                        "totalPrice": 1971.2107843137255,
                        "totalProfit": 49154.554564235295
                    }
                }
            },
            {
                "id": "610487",
                "name": "5대골절진단비",
                "theme": "골절/화상",
                "confidence": 0.009553331453991397,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1935.365966796875
                    },
                    "1000000": {
                        "totalPrice": 510.7028436018957,
                        "totalProfit": 3812.4830699318145
                    },
                    "2000000": {
                        "totalPrice": 979.538056206089,
                        "totalProfit": 6708.092230713417
                    },
                    "3000000": {
                        "totalPrice": 1387.4099836333878,
                        "totalProfit": 6302.7302215982
                    }
                }
            },
            {
                "id": "631802",
                "name": "수술비(1~7종, 연간3회한)[질병1종]",
                "theme": "수술",
                "confidence": 0.11875667249563698,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1190.923076923077,
                        "totalProfit": 54365.237756128205
                    },
                    "200000": {
                        "totalPrice": 2437.590163934426,
                        "totalProfit": 91615.8310554481
                    },
                    "300000": {
                        "totalPrice": 3273.464760638298,
                        "totalProfit": 129529.48269225961
                    }
                }
            },
            {
                "id": "632481",
                "name": "전이암진단비(특정전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.1438164126696641,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1154.877685546875
                    },
                    "10000000": {
                        "totalPrice": 1440.0004887585533,
                        "totalProfit": 43478.657308683025
                    },
                    "20000000": {
                        "totalPrice": 1478.4782958199357,
                        "totalProfit": 42347.170583272746
                    }
                }
            },
            {
                "id": "630990",
                "name": "급성심근경색증진단비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.03854527006829761,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 3.0,
                        "totalProfit": 4.053382873535156
                    },
                    "20000000": {
                        "totalPrice": 6.0,
                        "totalProfit": 12.077933311462402
                    },
                    "30000000": {
                        "totalPrice": 9.0,
                        "totalProfit": 20.102481842041016
                    }
                }
            },
            {
                "id": "631265",
                "name": "종합병원 질병입원일당(1일이상)(출생전)",
                "theme": "입원일당",
                "confidence": 0.008583663193536019,
                "availableQuantities": [
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 2730.0,
                        "totalProfit": -11044.4228515625
                    },
                    "30000": {
                        "totalPrice": 3640.0,
                        "totalProfit": -14724.57421875
                    },
                    "40000": {
                        "totalPrice": 4550.0,
                        "totalProfit": -18404.724609375
                    },
                    "50000": {
                        "totalPrice": 4549.756097560976,
                        "totalProfit": -17792.456819008126
                    }
                }
            },
            {
                "id": "610936",
                "name": "상해사고부상치료비[2등급]",
                "theme": "수술",
                "confidence": 0.0011432811685015032,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 107618.171875
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 215282.875
                    }
                }
            },
            {
                "id": "611019",
                "name": "수술비(1~7종, 연간3회한)[상해1종]",
                "theme": "수술",
                "confidence": 0.0026020568152926122,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 28375.923828125
                    }
                }
            },
            {
                "id": "611266",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.03973990827632778,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 40.0,
                        "totalProfit": -46.07332229614258
                    },
                    "200000": {
                        "totalPrice": 80.0,
                        "totalProfit": -88.17547607421875
                    }
                }
            },
            {
                "id": "632134",
                "name": "131대질병수술비(특정31대질병)",
                "theme": "수술",
                "confidence": 0.3208011855261933,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 28855.029296875
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14404.216796875
                    },
                    "10000000": {
                        "totalPrice": 2696.464301955434,
                        "totalProfit": 66137.7372096177
                    }
                }
            },
            {
                "id": "631406",
                "name": "32대질병관혈수술비(연간1회한)[5대질병]",
                "theme": "수술",
                "confidence": 0.06908996294248558,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 92920.2890625
                    },
                    "5000000": {
                        "totalPrice": 1299.5057471264367,
                        "totalProfit": 49798.36000666369
                    },
                    "10000000": {
                        "totalPrice": 2283.6785714285716,
                        "totalProfit": 81908.29446728295
                    },
                    "20000000": {
                        "totalPrice": 4357.416243654822,
                        "totalProfit": 170967.21440575298
                    }
                }
            },
            {
                "id": "632480",
                "name": "전이암진단비(림프절전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.1438164126696641,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 231.71669006347656
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 468.24285888671875
                    },
                    "20000000": {
                        "totalPrice": 1021.5200964630225,
                        "totalProfit": 19400.854186102977
                    }
                }
            },
            {
                "id": "611264",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.07356742012043165,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -20418.078125
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": -40789.625
                    }
                }
            },
            {
                "id": "630463",
                "name": "말기신부전증진단비",
                "theme": "수술",
                "confidence": 0.03888757486870981,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    50000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 66.70285034179688
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 520.4790649414062
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 10.01302719116211
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 180.2066650390625
                    }
                }
            },
            {
                "id": "632341",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.3002820197678297,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14404.49609375
                    },
                    "20000000": {
                        "totalPrice": 2453.6610455311975,
                        "totalProfit": 67467.03274551009
                    },
                    "30000000": {
                        "totalPrice": 3639.983682983683,
                        "totalProfit": 103252.08785565213
                    },
                    "50000000": {
                        "totalPrice": 4004.5878336436995,
                        "totalProfit": 105772.74283888258
                    },
                    "100000000": {
                        "totalPrice": 3509.5409934171157,
                        "totalProfit": 81861.69265483644
                    }
                }
            },
            {
                "id": "640384",
                "name": "아나필락시스진단비(응급, 연간1회한)(출생전)",
                "theme": "기타",
                "confidence": 0.18993690035022265,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 52.08885955810547
                    },
                    "2000000": {
                        "totalPrice": 80.0,
                        "totalProfit": 108.14888763427734
                    }
                }
            },
            {
                "id": "632342",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.3002820197678297,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7860.81298828125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 19721.826171875
                    },
                    "30000000": {
                        "totalPrice": 1970.2813717848792,
                        "totalProfit": 50829.36058050275
                    },
                    "50000000": {
                        "totalPrice": 2521.1707670043415,
                        "totalProfit": 58931.96446863837
                    },
                    "100000000": {
                        "totalPrice": 3387.9336124401916,
                        "totalProfit": 64926.23706701738
                    }
                }
            },
            {
                "id": "632409",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.004762517741491385,
                "availableQuantities": [
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 45.0,
                        "totalProfit": 50.82887268066406
                    },
                    "100000000": {
                        "totalPrice": 90.0,
                        "totalProfit": 105.62890625
                    }
                }
            },
            {
                "id": "630383",
                "name": "뇌혈관질환진단비(태아가입용)",
                "theme": "3대진단",
                "confidence": 0.11555595384427263,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -7673.9345703125
                    },
                    "20000000": {
                        "totalPrice": 3706.458147645805,
                        "totalProfit": 96469.28413267585
                    }
                }
            },
            {
                "id": "632407",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.2010193225154051,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 12.0,
                        "totalProfit": 13.020179748535156
                    },
                    "20000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 24.347742080688477
                    },
                    "30000000": {
                        "totalPrice": 11.934728033472803,
                        "totalProfit": 17.82164594300084
                    },
                    "50000000": {
                        "totalPrice": 19.776876267748477,
                        "totalProfit": 30.677050504854375
                    },
                    "100000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 52.66665267944336
                    }
                }
            },
            {
                "id": "610887",
                "name": "신골절치료비(치아파절포함)(출생전)",
                "theme": "골절/화상",
                "confidence": 0.006017622447733961,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 120.85537190082644,
                        "totalProfit": 277.0295534504132
                    },
                    "2000000": {
                        "totalPrice": 240.04195804195805,
                        "totalProfit": 557.7208282727272
                    },
                    "3000000": {
                        "totalPrice": 363.0,
                        "totalProfit": 673.9535633888889
                    },
                    "5000000": {
                        "totalPrice": 605.0,
                        "totalProfit": 951.6786499023438
                    },
                    "10000000": {
                        "totalPrice": 1210.0,
                        "totalProfit": 1907.3284912109375
                    }
                }
            },
            {
                "id": "631814",
                "name": "수술비(1~7종, 연간3회한)[질병6종]",
                "theme": "수술",
                "confidence": 0.008661149261781222,
                "availableQuantities": [
                    5000000,
                    7000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 16497.32421875
                    },
                    "7000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 11770.5126953125
                    },
                    "10000000": {
                        "totalPrice": 407.83561643835617,
                        "totalProfit": 21716.576666328758
                    }
                }
            },
            {
                "id": "632339",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)",
                "theme": "3대진단",
                "confidence": 0.3002820197678297,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1685.57958984375
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -866.09716796875
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -4144.111328125
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -8241.5810546875
                    },
                    "100000000": {
                        "totalPrice": 2179.7532934131737,
                        "totalProfit": 25076.087158147482
                    }
                }
            },
            {
                "id": "631141",
                "name": "유사암수술비(출생전)",
                "theme": "수술",
                "confidence": 0.13249479791000865,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 18.0,
                        "totalProfit": 29.62303352355957
                    },
                    "2000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 52.0191650390625
                    },
                    "3000000": {
                        "totalPrice": 18.0,
                        "totalProfit": 39.60091112647059
                    },
                    "5000000": {
                        "totalPrice": 29.993774642041917,
                        "totalProfit": 67.39341601289253
                    },
                    "10000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 108.0094985961914
                    }
                }
            },
            {
                "id": "633021",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.07693272107336885,
                "availableQuantities": [
                    50000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 510.0,
                        "totalProfit": -5284.93212890625
                    },
                    "100000": {
                        "totalPrice": 1020.0,
                        "totalProfit": -10565.892578125
                    },
                    "200000": {
                        "totalPrice": 1023.9103869653768,
                        "totalProfit": -7428.558412933525
                    }
                }
            },
            {
                "id": "611021",
                "name": "수술비(1~7종, 연간3회한)[상해3종]",
                "theme": "수술",
                "confidence": 0.0026020568152926122,
                "availableQuantities": [
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3245.557373046875
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2587.13916015625
                    }
                }
            },
            {
                "id": "632138",
                "name": "131대질병수술비(뇌혈관질환)",
                "theme": "수술",
                "confidence": 0.3725253234572278,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2512.608154296875
                    },
                    "5000000": {
                        "totalPrice": 348.18660112870924,
                        "totalProfit": 11836.801135026984
                    },
                    "10000000": {
                        "totalPrice": 526.1540212443095,
                        "totalProfit": 17288.459359150675
                    }
                }
            },
            {
                "id": "632387",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)",
                "theme": "3대진단",
                "confidence": 0.0125076991433439,
                "availableQuantities": [
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1893.489013671875
                    },
                    "100000000": {
                        "totalPrice": 148.425068119891,
                        "totalProfit": 4588.191664245228
                    }
                }
            },
            {
                "id": "611010",
                "name": "특정외상성손상진단비",
                "theme": "기타",
                "confidence": 0.05245671208053684,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 27995.869140625
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 13974.6806640625
                    }
                }
            },
            {
                "id": "632526",
                "name": "131대질병수술비(유방의장애)",
                "theme": "수술",
                "confidence": 0.4587322200089519,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -2793.23828125
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": -4632.32275390625
                    },
                    "1000000": {
                        "totalPrice": 25.130072463768116,
                        "totalProfit": -11236.799747600971
                    }
                }
            },
            {
                "id": "631430",
                "name": "32대질병관혈수술비(연간1회한)[4대질병]",
                "theme": "수술",
                "confidence": 0.06908996294248558,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1636.9852294921875
                    },
                    "300000": {
                        "totalPrice": 157.46125845033802,
                        "totalProfit": 5608.026630982829
                    }
                }
            },
            {
                "id": "630024",
                "name": "항암방사선약물치료비",
                "theme": "3대진단",
                "confidence": 0.14547413296698128,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12867.4501953125
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1890.5673828125
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 19324.44140625
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6410.46044921875
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3181.96533203125
                    }
                }
            },
            {
                "id": "610777",
                "name": "일반상해입원일당(1일이상30일한도)",
                "theme": "입원일당",
                "confidence": 0.00026684100050584485,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6393.9892578125
                    },
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 25715.814453125
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12834.6083984375
                    },
                    "40000": {
                        "totalPrice": 0.0,
                        "totalProfit": 19275.205078125
                    },
                    "50000": {
                        "totalPrice": 2428.840336134454,
                        "totalProfit": 92143.73690852942
                    }
                }
            },
            {
                "id": "632136",
                "name": "131대질병수술비(관절염,생식기질환)",
                "theme": "수술",
                "confidence": 0.3380425648365381,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 91.41773767204448,
                        "totalProfit": 1311.1131079598288
                    }
                }
            },
            {
                "id": "610923",
                "name": "골절진단비Ⅱ(출생전)",
                "theme": "골절/화상",
                "confidence": 0.08379648574560615,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 100.0,
                        "totalProfit": 10.642172813415527
                    },
                    "300000": {
                        "totalPrice": 150.0,
                        "totalProfit": 17.948841094970703
                    },
                    "500000": {
                        "totalPrice": 250.0,
                        "totalProfit": 32.56217956542969
                    }
                }
            },
            {
                "id": "631963",
                "name": "질병중환자실 입원일당(1일이상)Q(출생전)",
                "theme": "입원일당",
                "confidence": 0.22043355295237152,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 3290.1275399913534,
                        "totalProfit": -895.2452157222227
                    },
                    "100000": {
                        "totalPrice": 6580.259631490787,
                        "totalProfit": -1789.2684234632306
                    },
                    "200000": {
                        "totalPrice": 13160.781589231437,
                        "totalProfit": -4493.001089029134
                    },
                    "300000": {
                        "totalPrice": 19740.0,
                        "totalProfit": -2493.37255859375
                    },
                    "500000": {
                        "totalPrice": 32900.0,
                        "totalProfit": -4152.9736328125
                    }
                }
            },
            {
                "id": "610792",
                "name": "5대골절진단비(출생전)",
                "theme": "골절/화상",
                "confidence": 0.0012984680826614396,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 50.0,
                        "totalProfit": 0.48437198996543884
                    },
                    "1000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 4.939909934997559
                    },
                    "2000000": {
                        "totalPrice": 150.0,
                        "totalProfit": 9.395447731018066
                    },
                    "3000000": {
                        "totalPrice": 150.6474820143885,
                        "totalProfit": 26.021565580035976
                    }
                }
            },
            {
                "id": "632139",
                "name": "131대질병수술비(후각특정질환)",
                "theme": "수술",
                "confidence": 0.3897667027675726,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1136.7645263671875
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 703.79248046875
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2343.73193359375
                    }
                }
            },
            {
                "id": "632405",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.2010193225154051,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 70.65934065934066,
                        "totalProfit": 57.68743924175826
                    },
                    "20000000": {
                        "totalPrice": 140.5366726296959,
                        "totalProfit": 144.1907133140794
                    },
                    "30000000": {
                        "totalPrice": 210.0,
                        "totalProfit": 177.7480926513672
                    },
                    "50000000": {
                        "totalPrice": 350.0,
                        "totalProfit": 298.8942565917969
                    },
                    "100000000": {
                        "totalPrice": 700.0,
                        "totalProfit": 601.7596435546875
                    }
                }
            },
            {
                "id": "610469",
                "name": "상해중환자실 입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.009084659661799603,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 39943.58984375
                    },
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 99928.8671875
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 59938.68359375
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 19948.509765625
                    },
                    "500000": {
                        "totalPrice": 3106.5598194130926,
                        "totalProfit": 147318.79002216717
                    }
                }
            },
            {
                "id": "632408",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.004762517741491385,
                "availableQuantities": [
                    10000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 9.0,
                        "totalProfit": -5.486134052276611
                    },
                    "50000000": {
                        "totalPrice": 45.0,
                        "totalProfit": -11.546028137207031
                    },
                    "100000000": {
                        "totalPrice": 90.0,
                        "totalProfit": -19.120895385742188
                    }
                }
            },
            {
                "id": "631806",
                "name": "수술비(1~7종, 연간3회한)[질병5종]",
                "theme": "수술",
                "confidence": 0.11875667249563698,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 847.3965454101562
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4423.31201171875
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1741.372802734375
                    },
                    "5000000": {
                        "totalPrice": 1064.4532640949556,
                        "totalProfit": 40603.331954656795
                    }
                }
            },
            {
                "id": "610488",
                "name": "5대골절수술비",
                "theme": "골절/화상",
                "confidence": 0.007508776686190305,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 40.27777777777778,
                        "totalProfit": 568.0602762777777
                    },
                    "1000000": {
                        "totalPrice": 76.39018691588785,
                        "totalProfit": 29.673724619158904
                    },
                    "2000000": {
                        "totalPrice": 148.41749323715058,
                        "totalProfit": 360.7865850849141
                    }
                }
            },
            {
                "id": "632532",
                "name": "131대질병수술비(편도염)",
                "theme": "수술",
                "confidence": 0.4759735993192967,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1014.4207153320312
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3545.75830078125
                    },
                    "1000000": {
                        "totalPrice": 177.36192293928187,
                        "totalProfit": 4843.194022231691
                    }
                }
            },
            {
                "id": "632133",
                "name": "131대질병수술비(심장질환)",
                "theme": "수술",
                "confidence": 0.30355980621584844,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 9438.3271484375
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5644.3486328125
                    },
                    "10000000": {
                        "totalPrice": 1313.0451441578148,
                        "totalProfit": 43230.54315982083
                    }
                }
            },
            {
                "id": "630971",
                "name": "질병후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.13350820368474892,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -3945.665283203125
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -7844.798828125
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -19542.19921875
                    },
                    "50000000": {
                        "totalPrice": 4801.821124361159,
                        "totalProfit": 88966.49022016137
                    }
                }
            },
            {
                "id": "632490",
                "name": "전이암진단비(림프절전이암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.10067158290590619,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 5.0,
                        "totalProfit": -6.093846797943115
                    },
                    "10000000": {
                        "totalPrice": 10.0,
                        "totalProfit": -8.216526985168457
                    },
                    "20000000": {
                        "totalPrice": 10.0,
                        "totalProfit": -10.914901861853826
                    }
                }
            },
            {
                "id": "630527",
                "name": "유사암진단비",
                "theme": "3대진단",
                "confidence": 0.20622247546323116,
                "availableQuantities": [
                    2000000,
                    4000000,
                    6000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 144.656982421875
                    },
                    "4000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 910.1796264648438
                    },
                    "6000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 527.3666381835938
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1867.001220703125
                    },
                    "20000000": {
                        "totalPrice": 822.2200820966214,
                        "totalProfit": 6620.313816971251
                    }
                }
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.1266246067781056,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12806.15625
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5094.44921875
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7665.111328125
                    }
                }
            },
            {
                "id": "630246",
                "name": "만성당뇨합병증진단비",
                "theme": "기타",
                "confidence": 0.06340802279066611,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 124.52082119976704,
                        "totalProfit": 3850.012492267475
                    }
                }
            },
            {
                "id": "640443",
                "name": "7대장기이식대기등록",
                "theme": "기타",
                "confidence": 0.2739673848007475,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 309.0970158730159,
                        "totalProfit": 13606.022173020734
                    }
                }
            },
            {
                "id": "631939",
                "name": "4대양성종양진단비(대장 양성종양및특정폴립)(출생전)",
                "theme": "3대진단",
                "confidence": 0.04952883735066144,
                "availableQuantities": [
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 3.0,
                        "totalProfit": 5.126099109649658
                    },
                    "500000": {
                        "totalPrice": 5.0,
                        "totalProfit": 11.190942764282227
                    }
                }
            },
            {
                "id": "631972",
                "name": "질병수술비Q",
                "theme": "수술",
                "confidence": 0.27495866141514114,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 18645.712890625
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 14907.267578125
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3691.907470703125
                    },
                    "400000": {
                        "totalPrice": 3120.133204009053,
                        "totalProfit": 38446.01647946557
                    },
                    "500000": {
                        "totalPrice": 3924.5658047086067,
                        "totalProfit": 50760.46171178078
                    }
                }
            },
            {
                "id": "632412",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.004762517741491385,
                "availableQuantities": [
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 52.66665267944336
                    },
                    "100000000": {
                        "totalPrice": 39.163987138263664,
                        "totalProfit": 66.80838502893897
                    }
                }
            },
            {
                "id": "611020",
                "name": "수술비(1~7종, 연간3회한)[상해2종]",
                "theme": "수술",
                "confidence": 0.0026020568152926122,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5511.19775390625
                    }
                }
            },
            {
                "id": "630381",
                "name": "뇌졸중진단비(태아가입용)",
                "theme": "3대진단",
                "confidence": 0.03773809642445736,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 470.05224609375
                    },
                    "20000000": {
                        "totalPrice": 3577.3684210526317,
                        "totalProfit": 132050.45465189475
                    }
                }
            },
            {
                "id": "610804",
                "name": "일반상해80%이상후유장해재활자금(출생전)",
                "theme": "사망후유",
                "confidence": 0.0002599752283100155,
                "availableQuantities": [
                    50000000,
                    100000000,
                    200000000,
                    400000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 80.0,
                        "totalProfit": 132.41152954101562
                    },
                    "100000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 91.62374172916662
                    },
                    "200000000": {
                        "totalPrice": 80.0,
                        "totalProfit": 199.0095518
                    },
                    "400000000": {
                        "totalPrice": 160.0,
                        "totalProfit": 268.7942199707031
                    }
                }
            },
            {
                "id": "631940",
                "name": "4대양성종양진단비(위·십이지장·소화계통 양성종양및특정폴립)(출생전)",
                "theme": "3대진단",
                "confidence": 0.04952883735066144,
                "availableQuantities": [
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 1.0,
                        "totalProfit": -2.588407039642334
                    },
                    "500000": {
                        "totalPrice": 1.0,
                        "totalProfit": -2.8467319011688232
                    }
                }
            },
            {
                "id": "611017",
                "name": "수술비(1~7종, 연간3회한)[상해6종]",
                "theme": "수술",
                "confidence": 0.06870591209491707,
                "availableQuantities": [
                    3000000,
                    5000000,
                    7000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1316.236572265625
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 362.2297668457031
                    },
                    "7000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 907.398193359375
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 634.7894897460938
                    }
                }
            },
            {
                "id": "632132",
                "name": "독감(인플루엔자)및특정9대감염병입원일당(1일이상 30일한도)(출생전)",
                "theme": "입원일당",
                "confidence": 0.19205236153549657,
                "availableQuantities": [
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 270.0,
                        "totalProfit": -1828.6585693359375
                    }
                }
            },
            {
                "id": "631055",
                "name": "항암방사선약물치료비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.14124361507467034,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 54.0,
                        "totalProfit": 57.159568786621094
                    },
                    "5000000": {
                        "totalPrice": 90.0,
                        "totalProfit": 97.91339111328125
                    },
                    "10000000": {
                        "totalPrice": 180.0,
                        "totalProfit": 199.79794311523438
                    },
                    "20000000": {
                        "totalPrice": 360.0,
                        "totalProfit": 403.5670471191406
                    },
                    "30000000": {
                        "totalPrice": 540.0,
                        "totalProfit": 607.336181640625
                    }
                }
            },
            {
                "id": "610781",
                "name": "일반상해후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.008394260208630466,
                "availableQuantities": [
                    1000000,
                    10000000,
                    50000000,
                    100000000,
                    200000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 23464.578125
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 46975.5078125
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 93995.4921875
                    },
                    "100000000": {
                        "totalPrice": 2456.9043110580014,
                        "totalProfit": 80644.44117997639
                    },
                    "200000000": {
                        "totalPrice": 4837.951008645533,
                        "totalProfit": 160066.86914244882
                    }
                }
            },
            {
                "id": "631808",
                "name": "수술비(1~7종, 연간3회한)[질병7종]",
                "theme": "수술",
                "confidence": 0.11875667249563698,
                "availableQuantities": [
                    3000000,
                    5000000,
                    6000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3048.71875
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3667.76904296875
                    },
                    "6000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6143.9697265625
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1810.6185302734375
                    },
                    "20000000": {
                        "totalPrice": 1691.3054003724394,
                        "totalProfit": 62889.883658530256
                    }
                }
            },
            {
                "id": "610470",
                "name": "상해수술위로금",
                "theme": "수술",
                "confidence": 0.024155311502604342,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000,
                    2000000,
                    2500000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 16582.72265625
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 41526.6953125
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 8268.009765625
                    },
                    "2000000": {
                        "totalPrice": 5475.632768361582,
                        "totalProfit": 66090.8045713503
                    },
                    "2500000": {
                        "totalPrice": 6549.090909090909,
                        "totalProfit": 95335.91973048053
                    }
                }
            },
            {
                "id": "632141",
                "name": "131대질병수술비(특정다빈도29대질병)",
                "theme": "수술",
                "confidence": 0.42424946138826225,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1587.35400390625
                    },
                    "200000": {
                        "totalPrice": 139.81761582127817,
                        "totalProfit": 4034.608319476615
                    }
                }
            },
            {
                "id": "631169",
                "name": "5대기관질병수술비(Ⅱ)(연간1회한)(출생전)",
                "theme": "수술",
                "confidence": 0.08480779653235422,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 60.21923828125
                    },
                    "5000000": {
                        "totalPrice": 50.0,
                        "totalProfit": 103.0128402709961
                    },
                    "10000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 209.99685668945312
                    },
                    "20000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 423.9648742675781
                    },
                    "30000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 637.932861328125
                    }
                }
            },
            {
                "id": "631612",
                "name": "뇌졸중통원일당(1일이상 30일한도)[뇌졸중상급종합병원통원일당]",
                "theme": "입원일당",
                "confidence": 0.006566831862977237,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 815.39990234375
                    }
                }
            },
            {
                "id": "611016",
                "name": "수술비(1~7종, 연간3회한)[상해5종]",
                "theme": "수술",
                "confidence": 0.06870591209491707,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 917.0699462890625
                    },
                    "3000000": {
                        "totalPrice": 96.97142857142858,
                        "totalProfit": 5076.876322342857
                    },
                    "5000000": {
                        "totalPrice": 161.67747972551467,
                        "totalProfit": 7297.77107599251
                    }
                }
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "theme": "3대진단",
                "confidence": 0.1786095008938347,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 15846.8984375
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 10548.9736328125
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5251.22265625
                    }
                }
            },
            {
                "id": "632386",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.0125076991433439,
                "availableQuantities": [
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 23848.21875
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 47742.96875
                    }
                }
            },
            {
                "id": "630094",
                "name": "충수염수술비",
                "theme": "수술",
                "confidence": 0.12259760175450092,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 444.51220703125
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 729.0079956054688
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 237.88497924804688
                    }
                }
            },
            {
                "id": "631560",
                "name": "양성뇌종양진단비Ⅱ",
                "theme": "기타",
                "confidence": 0.2775751107074274,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    25000000,
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 388.701171875
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 243.59674072265625
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 98.47274780273438
                    },
                    "25000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 316.14410400390625
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 25.910118103027344
                    }
                }
            },
            {
                "id": "630789",
                "name": "뇌졸중진단비보장(태아가입용) 추가",
                "theme": "3대진단",
                "confidence": NaN,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 100.0,
                        "totalProfit": -835.311163
                    }
                }
            },
            {
                "id": "610813",
                "name": "일반상해후유장해(3~100%)(출생전)",
                "theme": null,
                "confidence": 0.03664449165748151,
                "availableQuantities": [
                    1000000,
                    10000000,
                    50000000,
                    100000000,
                    200000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 171.7863006591797
                    },
                    "10000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 347.54376220703125
                    },
                    "50000000": {
                        "totalPrice": 102.16528329123061,
                        "totalProfit": 224.037734791591
                    },
                    "100000000": {
                        "totalPrice": 207.9004217673079,
                        "totalProfit": 437.41119679691025
                    },
                    "200000000": {
                        "totalPrice": 400.0,
                        "totalProfit": 699.0587158203125
                    }
                }
            },
            {
                "id": "631785",
                "name": "4대양성종양진단비(위·십이지장·소화계통 양성종양및특정폴립)",
                "theme": "3대진단",
                "confidence": 0.07092400736334108,
                "availableQuantities": [
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 346.7491760253906
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 608.669677734375
                    }
                }
            },
            {
                "id": "631719",
                "name": "특정9대감염병진단비(연간1회한, 태아가입용)",
                "theme": "기타",
                "confidence": 0.15231589433081472,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 20910.677734375
                    },
                    "200000": {
                        "totalPrice": 1927.4383726528647,
                        "totalProfit": 48261.689356029674
                    },
                    "300000": {
                        "totalPrice": 2904.36090109551,
                        "totalProfit": 56974.61104122652
                    }
                }
            },
            {
                "id": "631957",
                "name": "질병입원일당(1일이상)Q(출생전)",
                "theme": "입원일당",
                "confidence": 0.2186601541653421,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000,
                    70000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1310.2349102773246,
                        "totalProfit": -911.14954019149
                    },
                    "20000": {
                        "totalPrice": 2620.2491582491584,
                        "totalProfit": 110.69168024999993
                    },
                    "30000": {
                        "totalPrice": 3930.0,
                        "totalProfit": -15850.4169921875
                    },
                    "50000": {
                        "totalPrice": 6550.0,
                        "totalProfit": -26414.71484375
                    },
                    "70000": {
                        "totalPrice": 9170.0,
                        "totalProfit": -36979.01171875
                    }
                }
            },
            {
                "id": "631138",
                "name": "유사암수술비",
                "theme": "수술",
                "confidence": 0.15463039843119233,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1454.202880859375
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 703.762451171875
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 403.6159362792969
                    },
                    "5000000": {
                        "totalPrice": 252.65510742555597,
                        "totalProfit": 490.69579962039694
                    },
                    "10000000": {
                        "totalPrice": 372.33080054274086,
                        "totalProfit": 1006.5665739370082
                    }
                }
            },
            {
                "id": "610680",
                "name": "심한상해수술비",
                "theme": "수술",
                "confidence": 0.0014201862208924258,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 7280.65234375
                    },
                    "2000000": {
                        "totalPrice": 255.59695160276556,
                        "totalProfit": 10725.90311206165
                    }
                }
            },
            {
                "id": "631804",
                "name": "수술비(1~7종, 연간3회한)[질병3종]",
                "theme": "수술",
                "confidence": 0.11875667249563698,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5460.2255859375
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3257.51220703125
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4358.8642578125
                    }
                }
            },
            {
                "id": "631025",
                "name": "유사암진단비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.15541509193051872,
                "availableQuantities": [
                    2000000,
                    4000000,
                    6000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 16.0,
                        "totalProfit": 0.42921099066734314
                    },
                    "4000000": {
                        "totalPrice": 24.0,
                        "totalProfit": 2.6294000148773193
                    },
                    "6000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 7.0297770500183105
                    },
                    "10000000": {
                        "totalPrice": 80.0,
                        "totalProfit": 18.030719757080078
                    },
                    "20000000": {
                        "totalPrice": 81.10344827586206,
                        "totalProfit": 15.533899761904765
                    }
                }
            },
            {
                "id": "611014",
                "name": "수술비(1~7종, 연간3회한)[상해3종]",
                "theme": "수술",
                "confidence": 0.06870591209491707,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3025.531982421875
                    },
                    "400000": {
                        "totalPrice": 141.2537313432836,
                        "totalProfit": 5976.328236761194
                    },
                    "500000": {
                        "totalPrice": 144.40048989589712,
                        "totalProfit": 5999.145741895835
                    }
                }
            },
            {
                "id": "631167",
                "name": "5대기관질병수술비(Ⅱ)(연간1회한)",
                "theme": "수술",
                "confidence": 0.0032182279161464744,
                "availableQuantities": [
                    1000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 76654.71875
                    },
                    "5000000": {
                        "totalPrice": 597.8571428571429,
                        "totalProfit": 38973.97139085714
                    },
                    "10000000": {
                        "totalPrice": 1153.1882352941177,
                        "totalProfit": 69801.83751919994
                    },
                    "20000000": {
                        "totalPrice": 2862.8571428571427,
                        "totalProfit": 147534.20627657144
                    },
                    "30000000": {
                        "totalPrice": 2140.8333333333335,
                        "totalProfit": 104146.26243533334
                    }
                }
            },
            {
                "id": "610600",
                "name": "상해수술비_추가",
                "theme": "수술",
                "confidence": 5.806031707773793e-05,
                "availableQuantities": [
                    500000,
                    1000000,
                    1500000,
                    2000000,
                    2500000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 32868.43359375
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 43840.10546875
                    },
                    "1500000": {
                        "totalPrice": 1988.4,
                        "totalProfit": 24774.574639
                    },
                    "2000000": {
                        "totalPrice": 2333.3333333333335,
                        "totalProfit": 38929.035470333336
                    },
                    "2500000": {
                        "totalPrice": 3489.0,
                        "totalProfit": 37936.731155375
                    }
                }
            },
            {
                "id": "640045",
                "name": "각막이식수술비",
                "theme": "수술",
                "confidence": 0.47132098749975326,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -31.11111831665039
                    }
                }
            },
            {
                "id": "640154",
                "name": "응급실내원비(응급)",
                "theme": "기타",
                "confidence": 0.4479678408312205,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6292.63671875
                    },
                    "30000": {
                        "totalPrice": 1028.114953271028,
                        "totalProfit": 38121.922698614835
                    },
                    "50000": {
                        "totalPrice": 1663.3717653434494,
                        "totalProfit": 48736.90224806489
                    },
                    "100000": {
                        "totalPrice": 3170.73039555864,
                        "totalProfit": 56153.0330049753
                    }
                }
            },
            {
                "id": "630963",
                "name": "질병입원일당(1일이상30일한도)",
                "theme": "입원일당",
                "confidence": 0.006190995143639556,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": -84812.71875
                    },
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": -21238.078125
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": -42429.625
                    },
                    "40000": {
                        "totalPrice": 0.0,
                        "totalProfit": -63621.171875
                    },
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": -106004.265625
                    }
                }
            },
            {
                "id": "631468",
                "name": "계속받는 항암방사선약물치료비(급여)(연간1회한)(출생전)",
                "theme": "기타",
                "confidence": 0.12951508451485008,
                "availableQuantities": [
                    100000,
                    1000000,
                    10000000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 4.0,
                        "totalProfit": 1.9368159770965576
                    },
                    "1000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 69.40036010742188
                    },
                    "10000000": {
                        "totalPrice": 400.0,
                        "totalProfit": 729.744140625
                    }
                }
            },
            {
                "id": "610880",
                "name": "일반상해수술입원일당(1일이상 20일한도)",
                "theme": "입원일당",
                "confidence": 0.011335658933536384,
                "availableQuantities": [
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 15165.5771484375
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6038.2939453125
                    },
                    "40000": {
                        "totalPrice": 0.0,
                        "totalProfit": 12123.1552734375
                    },
                    "50000": {
                        "totalPrice": 0.0,
                        "totalProfit": 9080.7099609375
                    }
                }
            },
            {
                "id": "640056",
                "name": "5대장기이식수술비",
                "theme": null,
                "confidence": 0.5167125031516444,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 569.595458984375
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 877.7644653320312
                    },
                    "30000000": {
                        "totalPrice": 123.97787610619469,
                        "totalProfit": 3204.9245887876127
                    },
                    "50000000": {
                        "totalPrice": 185.03169513013648,
                        "totalProfit": 4129.230977798565
                    }
                }
            },
            {
                "id": "631130",
                "name": "암수술비(유사암제외)",
                "theme": "수술",
                "confidence": 0.067560770386836,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000,
                    10000000,
                    15000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5584.822265625
                    },
                    "3000000": {
                        "totalPrice": 1069.1754385964912,
                        "totalProfit": 25860.09518301754
                    },
                    "5000000": {
                        "totalPrice": 1200.8895184135977,
                        "totalProfit": 27264.356236573993
                    },
                    "10000000": {
                        "totalPrice": 1795.6091370558377,
                        "totalProfit": 37760.96083812705
                    },
                    "15000000": {
                        "totalPrice": 1292.6935483870968,
                        "totalProfit": 25004.50446383871
                    }
                }
            },
            {
                "id": "630991",
                "name": "급성심근경색증진단비(감액없음)추가(출생전)",
                "theme": "3대진단",
                "confidence": 0.00010749696094885299,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 3.0,
                        "totalProfit": 4.053382873535156
                    }
                }
            },
            {
                "id": "632491",
                "name": "전이암진단비(특정전이암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.10067158290590619,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 78.39945983886719
                    },
                    "10000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 48.57297594583773
                    },
                    "20000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 101.064526412656
                    }
                }
            },
            {
                "id": "611024",
                "name": "수술비(1~7종, 연간3회한)[상해6종]",
                "theme": "수술",
                "confidence": 0.0026020568152926122,
                "availableQuantities": [
                    5000000,
                    7000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 896.1296997070312
                    },
                    "7000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1300.134765625
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 626.796630859375
                    }
                }
            },
            {
                "id": "632137",
                "name": "131대질병수술비(치핵)",
                "theme": "수술",
                "confidence": 0.3552839441468829,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -172.61329650878906
                    },
                    "200000": {
                        "totalPrice": 80.30573453608247,
                        "totalProfit": -75.39463434698487
                    },
                    "300000": {
                        "totalPrice": 113.29876259727006,
                        "totalProfit": -183.54764467497438
                    }
                }
            },
            {
                "id": "631085",
                "name": "유사암진단비(출생전)",
                "theme": "3대진단",
                "confidence": 0.0034550458732038104,
                "availableQuantities": [
                    6000000,
                    10000000,
                    18000000,
                    19000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "6000000": {
                        "totalPrice": 24.0,
                        "totalProfit": 2.6294000148773193
                    },
                    "10000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 7.0297770500183105
                    },
                    "18000000": {
                        "totalPrice": 72.0,
                        "totalProfit": 15.83053207397461
                    },
                    "19000000": {
                        "totalPrice": 76.0,
                        "totalProfit": 16.930625915527344
                    },
                    "20000000": {
                        "totalPrice": 80.0,
                        "totalProfit": 18.030719757080078
                    }
                }
            },
            {
                "id": "640204",
                "name": "깁스치료비(출생전)",
                "theme": "골절/화상",
                "confidence": 0.3122422939688667,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 115.0,
                        "totalProfit": 27.555875778198242
                    },
                    "300000": {
                        "totalPrice": 230.0,
                        "totalProfit": 59.082916259765625
                    },
                    "500000": {
                        "totalPrice": 114.79337587359466,
                        "totalProfit": 75.85827893181127
                    },
                    "1000000": {
                        "totalPrice": 229.8227848101266,
                        "totalProfit": 152.63253311064182
                    },
                    "2000000": {
                        "totalPrice": 460.0,
                        "totalProfit": 122.13700103759766
                    }
                }
            },
            {
                "id": "631956",
                "name": "질병입원일당(1일이상)Q",
                "theme": "입원일당",
                "confidence": 0.20141877485499732,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000,
                    70000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 0.0,
                        "totalProfit": -481235.40625
                    },
                    "20000": {
                        "totalPrice": 3524.23212783852,
                        "totalProfit": 52622.5208889662
                    },
                    "30000": {
                        "totalPrice": 4884.378858024691,
                        "totalProfit": 35446.98346788838
                    },
                    "50000": {
                        "totalPrice": 6880.636047186231,
                        "totalProfit": -138745.08325606878
                    },
                    "70000": {
                        "totalPrice": 9605.38880484115,
                        "totalProfit": -533216.8235468784
                    }
                }
            },
            {
                "id": "630670",
                "name": "추간판장애(디스크질환)수술비",
                "theme": "수술",
                "confidence": 0.11641800384358655,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1359.8582763671875
                    },
                    "2000000": {
                        "totalPrice": 529.5157466383581,
                        "totalProfit": 18906.03065787376
                    }
                }
            },
            {
                "id": "631469",
                "name": "암직접치료통원일당(상급종합병원)(출생전)",
                "theme": "입원일당",
                "confidence": 0.07035939373456444,
                "availableQuantities": [
                    30000,
                    50000,
                    100000,
                    200000,
                    600000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 65.0,
                        "totalProfit": 110.72055053710938
                    },
                    "50000": {
                        "totalPrice": 130.0,
                        "totalProfit": 225.41226196289062
                    },
                    "100000": {
                        "totalPrice": 260.0,
                        "totalProfit": 454.79571533203125
                    },
                    "200000": {
                        "totalPrice": 780.0,
                        "totalProfit": 1372.3294677734375
                    },
                    "600000": {
                        "totalPrice": 776.0330578512396,
                        "totalProfit": 1754.2243788208327
                    }
                }
            },
            {
                "id": "610818",
                "name": "상해수술비(출생전)",
                "theme": "수술",
                "confidence": 0.00016890975759710784,
                "availableQuantities": [
                    1000000,
                    3000000,
                    4000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 300.0,
                        "totalProfit": -78.90914129999997
                    },
                    "3000000": {
                        "totalPrice": 900.0,
                        "totalProfit": -1731.023923
                    },
                    "4000000": {
                        "totalPrice": 1200.0,
                        "totalProfit": -929.989373
                    }
                }
            },
            {
                "id": "631133",
                "name": "암수술비(유사암제외)(출생전)",
                "theme": "수술",
                "confidence": 0.0468864411829004,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000,
                    10000000,
                    15000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 67.86729857819905,
                        "totalProfit": 121.29338447619035
                    },
                    "3000000": {
                        "totalPrice": 101.71812080536913,
                        "totalProfit": 185.0360891677852
                    },
                    "5000000": {
                        "totalPrice": 170.0,
                        "totalProfit": 235.314453125
                    },
                    "10000000": {
                        "totalPrice": 340.0,
                        "totalProfit": 474.60009765625
                    },
                    "15000000": {
                        "totalPrice": 510.0,
                        "totalProfit": 713.8857421875
                    }
                }
            },
            {
                "id": "631562",
                "name": "양성뇌종양진단비Ⅱ(출생전)",
                "theme": "기타",
                "confidence": 0.20666180561105293,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    25000000,
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 5.0,
                        "totalProfit": -0.7276110053062439
                    },
                    "10000000": {
                        "totalPrice": 10.0,
                        "totalProfit": 2.515944004058838
                    },
                    "20000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 9.003053665161133
                    },
                    "25000000": {
                        "totalPrice": 25.0,
                        "totalProfit": 12.24660873413086
                    },
                    "30000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 15.490163803100586
                    }
                }
            },
            {
                "id": "630644",
                "name": "이차암진단비",
                "theme": "3대진단",
                "confidence": 0.002408933050753862,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1765.84521484375
                    },
                    "10000000": {
                        "totalPrice": 1071.4285714285713,
                        "totalProfit": 20020.08566142857
                    },
                    "20000000": {
                        "totalPrice": 714.3589743589744,
                        "totalProfit": 9954.149551435898
                    },
                    "30000000": {
                        "totalPrice": 3217.5,
                        "totalProfit": 57161.670939724994
                    },
                    "50000000": {
                        "totalPrice": 1634.1707317073171,
                        "totalProfit": 25291.556575317078
                    }
                }
            },
            {
                "id": "630984",
                "name": "2대질병입원일당(1일이상)(출생전)",
                "theme": "입원일당",
                "confidence": 0.005651634473571107,
                "availableQuantities": [
                    20000,
                    30000,
                    40000
                ],
                "recommendedQuantity": 40000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 100.0,
                        "totalProfit": 200.55494689941406
                    },
                    "30000": {
                        "totalPrice": 151.0,
                        "totalProfit": 310.304931640625
                    },
                    "40000": {
                        "totalPrice": 201.0,
                        "totalProfit": 412.5679931640625
                    }
                }
            },
            {
                "id": "631407",
                "name": "32대질병관혈수술비(연간1회한)[5대질병]",
                "theme": "수술",
                "confidence": 0.001972568156891998,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 96954.2421875
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 48453.7734375
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 24203.38671875
                    }
                }
            },
            {
                "id": "631059",
                "name": "허혈성심장질환진단비(감액없음)(출생전)",
                "theme": "3대진단",
                "confidence": 0.16925983369044373,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 11.0,
                        "totalProfit": 6.312465190887451
                    },
                    "20000000": {
                        "totalPrice": 22.0,
                        "totalProfit": 16.596097946166992
                    }
                }
            },
            {
                "id": "630996",
                "name": "뇌혈관질환진단비(태아가입용)(출생전)",
                "theme": "3대진단",
                "confidence": 0.13524960653853912,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 59.39622641509434,
                        "totalProfit": -3362.7539623645853
                    },
                    "20000000": {
                        "totalPrice": 120.0,
                        "totalProfit": -5059.49462890625
                    }
                }
            },
            {
                "id": "610801",
                "name": "상해중환자실입원일당(1일이상)(출생전)",
                "theme": null,
                "confidence": 0.0014476892861552983,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 45.0,
                        "totalProfit": 88.69205474853516
                    },
                    "100000": {
                        "totalPrice": 90.0,
                        "totalProfit": 181.3552703857422
                    },
                    "200000": {
                        "totalPrice": 180.0,
                        "totalProfit": 366.6817321777344
                    },
                    "300000": {
                        "totalPrice": 270.0,
                        "totalProfit": 552.0081787109375
                    },
                    "500000": {
                        "totalPrice": 450.0,
                        "totalProfit": 922.6610717773438
                    }
                }
            },
            {
                "id": "631423",
                "name": "32대질병관혈수술비(연간1회한)[14대질병]",
                "theme": "수술",
                "confidence": 0.001972568156891998,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": -95.77802276611328
                    }
                }
            },
            {
                "id": "640207",
                "name": "응급실내원비(응급)(출생전)",
                "theme": null,
                "confidence": 0.33538401516306526,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 484.0,
                        "totalProfit": 376.9073486328125
                    },
                    "30000": {
                        "totalPrice": 726.0,
                        "totalProfit": 567.3466186523438
                    },
                    "50000": {
                        "totalPrice": 1210.0,
                        "totalProfit": 948.22509765625
                    },
                    "100000": {
                        "totalPrice": 2420.0,
                        "totalProfit": 1900.42138671875
                    }
                }
            },
            {
                "id": "631131",
                "name": "암수술비(유사암제외)",
                "theme": "수술",
                "confidence": 0.0023940820858410175,
                "availableQuantities": [
                    4000000,
                    5000000,
                    10000000,
                    15000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "4000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 9814.51953125
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2583.059814453125
                    },
                    "10000000": {
                        "totalPrice": 279.60526315789474,
                        "totalProfit": 5381.883241826315
                    },
                    "15000000": {
                        "totalPrice": 390.0,
                        "totalProfit": 6315.722961333333
                    }
                }
            },
            {
                "id": "631973",
                "name": "질병수술비Q(출생전)",
                "theme": "수술",
                "confidence": 0.29220004072548594,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 936.0,
                        "totalProfit": 317.7103576660156
                    },
                    "200000": {
                        "totalPrice": 1248.0,
                        "totalProfit": 424.93756103515625
                    },
                    "300000": {
                        "totalPrice": 937.0419547079857,
                        "totalProfit": 390.9639705166229
                    },
                    "400000": {
                        "totalPrice": 1249.0457346740188,
                        "totalProfit": 474.2960405374878
                    },
                    "500000": {
                        "totalPrice": 1560.0,
                        "totalProfit": 532.1647338867188
                    }
                }
            },
            {
                "id": "640382",
                "name": "아나필락시스진단비(응급, 연간1회한)",
                "theme": "기타",
                "confidence": 0.244361629076565,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5819.25
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2886.359130859375
                    }
                }
            },
            {
                "id": "630992",
                "name": "뇌졸중진단비(태아가입용)(출생전)",
                "theme": "3대진단",
                "confidence": 0.043851133014530766,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 100.0,
                        "totalProfit": -2263.416015625
                    },
                    "20000000": {
                        "totalPrice": 98.94736842105263,
                        "totalProfit": -2913.5996258684218
                    }
                }
            },
            {
                "id": "631051",
                "name": "특정희귀난치성질환수술비(출생전)",
                "theme": "수술",
                "confidence": NaN,
                "availableQuantities": [
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 96.0,
                        "totalProfit": -162.34359741210938
                    }
                }
            },
            {
                "id": "632131",
                "name": "급성신우신염진단비(출생전)",
                "theme": "기타",
                "confidence": 0.14941157892299392,
                "availableQuantities": [
                    100000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 279.0,
                        "totalProfit": 466.4194030761719
                    },
                    "300000": {
                        "totalPrice": 837.0,
                        "totalProfit": 1407.2005615234375
                    },
                    "500000": {
                        "totalPrice": 1395.0,
                        "totalProfit": 2347.981689453125
                    }
                }
            },
            {
                "id": "632496",
                "name": "전이암진단비(림프절전이암진단비)(출생전)",
                "theme": "3대진단",
                "confidence": 0.001953569475701607,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 5.0,
                        "totalProfit": -7.350200270676693
                    }
                }
            },
            {
                "id": "631142",
                "name": "유사암수술비(출생전)",
                "theme": "수술",
                "confidence": 0.002381993818830378,
                "availableQuantities": [
                    4000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "4000000": {
                        "totalPrice": 24.0,
                        "totalProfit": 40.82109832763672
                    },
                    "5000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 52.0191650390625
                    },
                    "10000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 108.0094985961914
                    }
                }
            },
            {
                "id": "631065",
                "name": "유사암진단비",
                "theme": "3대진단",
                "confidence": 0.008235467768161257,
                "availableQuantities": [
                    6000000,
                    10000000,
                    19000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "6000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1635.304443359375
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 484.5533142089844
                    },
                    "19000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 838.6222534179688
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1723.8199462890625
                    }
                }
            },
            {
                "id": "630451",
                "name": "2대질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.006893657384506998,
                "availableQuantities": [
                    20000,
                    30000,
                    40000
                ],
                "recommendedQuantity": 40000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 0.0,
                        "totalProfit": 676.408935546875
                    },
                    "30000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1091.3853759765625
                    },
                    "40000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1464.63330078125
                    }
                }
            },
            {
                "id": "631089",
                "name": "16대특정암진단비(출생전)",
                "theme": "3대진단",
                "confidence": 0.0006364804133159053,
                "availableQuantities": [
                    10000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 110.0,
                        "totalProfit": 75.64358520507812
                    },
                    "30000000": {
                        "totalPrice": 330.0,
                        "totalProfit": 234.87307739257812
                    },
                    "50000000": {
                        "totalPrice": 550.0,
                        "totalProfit": 394.10260009765625
                    }
                }
            },
            {
                "id": "632493",
                "name": "전이암진단비(특정전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.0059256780984289275,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1153.8406982421875
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2354.276611328125
                    }
                }
            },
            {
                "id": "610939",
                "name": "상해사고부상치료비[5등급]",
                "theme": "수술",
                "confidence": 0.0011432811685015032,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 10115.1337890625
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5034.18359375
                    }
                }
            },
            {
                "id": "630231",
                "name": "급성심근경색증진단비_갱신형",
                "theme": "3대진단",
                "confidence": 0.00010926531770178149,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 441.3577575683594
                    }
                }
            },
            {
                "id": "632118",
                "name": "급성신우신염진단비",
                "theme": "기타",
                "confidence": 0.1646247564739313,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 5028.09619140625
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 16868.533203125
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 8411.078125
                    }
                }
            },
            {
                "id": "630662",
                "name": "갱신형 16대특정암진단비",
                "theme": "3대진단",
                "confidence": 0.0007037036231396828,
                "availableQuantities": [
                    10000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 19057.8125
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6321.580078125
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 31794.044921875
                    }
                }
            },
            {
                "id": "632119",
                "name": "건선특정치료비(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.13267107967686198,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 653.8212280273438
                    }
                }
            },
            {
                "id": "610937",
                "name": "상해사고부상치료비[3등급]",
                "theme": "수술",
                "confidence": 0.0011432811685015032,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 13015.7314453125
                    }
                }
            },
            {
                "id": "630229",
                "name": "급성심근경색증진단비",
                "theme": null,
                "confidence": 0.04889133187095913,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2517.22900390625
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1662.6304931640625
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 807.9036865234375
                    }
                }
            },
            {
                "id": "630519",
                "name": "특정희귀난치성질환수술비",
                "theme": "수술",
                "confidence": 0.01762688628785758,
                "availableQuantities": [
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -1317.27392578125
                    }
                }
            },
            {
                "id": "632117",
                "name": "천식지속상태(급성중증천식)진단비",
                "theme": "기타",
                "confidence": 0.12353461772729238,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 8482.7958984375
                    }
                }
            },
            {
                "id": "610464",
                "name": "상해흉터복원수술비",
                "theme": "수술",
                "confidence": 0.00707053212583107,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 89502.96875
                    }
                }
            },
            {
                "id": "610938",
                "name": "상해사고부상치료비[4등급]",
                "theme": "수술",
                "confidence": 0.0011432811685015032,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 83172.3671875
                    }
                }
            },
            {
                "id": "631813",
                "name": "수술비(1~7종, 연간3회한)[질병5종]",
                "theme": "수술",
                "confidence": 0.008661149261781222,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 4236.99462890625
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 2523.57421875
                    }
                }
            },
            {
                "id": "631941",
                "name": "4대양성종양진단비(중이·호흡계통·흉곽내기관 양성종양)(출생전)",
                "theme": "3대진단",
                "confidence": 0.04952883735066144,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 3.0,
                        "totalProfit": 3.7229819297790527
                    }
                }
            },
            {
                "id": "610919",
                "name": "골절수술비Ⅱ(출생전)",
                "theme": "골절/화상",
                "confidence": 0.010097811651722964,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 180.0,
                        "totalProfit": -9.887395858764648
                    },
                    "1000000": {
                        "totalPrice": 92.7061310782241,
                        "totalProfit": 17.3008813715499
                    },
                    "2000000": {
                        "totalPrice": 180.68965517241378,
                        "totalProfit": -40.770914224137925
                    }
                }
            },
            {
                "id": "610791",
                "name": "5대골절수술비(출생전)",
                "theme": "골절/화상",
                "confidence": 0.0001734518854722379,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 10.0,
                        "totalProfit": -9.341032318407962
                    },
                    "2000000": {
                        "totalPrice": 20.0,
                        "totalProfit": -12.719828605651855
                    }
                }
            },
            {
                "id": "620235",
                "name": "의료사고법률비용",
                "theme": "재물/배상",
                "confidence": 0.08077918542973253,
                "availableQuantities": [
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 27.997150421142578
                    }
                }
            },
            {
                "id": "631786",
                "name": "4대양성종양진단비(중이·호흡계통·흉곽내기관 양성종양)",
                "theme": "3대진단",
                "confidence": 0.07092400736334108,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 510.7132568359375
                    }
                }
            },
            {
                "id": "630078",
                "name": "시청각질환수술비",
                "theme": "수술",
                "confidence": 0.07377821988853858,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": -293.4147644042969
                    }
                }
            },
            {
                "id": "630577",
                "name": "정신질병장애진단비",
                "theme": "기타",
                "confidence": 0.08292181410050277,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": -696.8464965820312
                    }
                }
            },
            {
                "id": "630108",
                "name": "특정전염병위로금",
                "theme": "기타",
                "confidence": 0.058706576453986074,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 40.4974479675293
                    }
                }
            },
            {
                "id": "631942",
                "name": "4대양성종양진단비(골·관절연골 양성종양)(출생전)",
                "theme": "3대진단",
                "confidence": 0.04952883735066144,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 15.0,
                        "totalProfit": 22.409862518310547
                    }
                }
            },
            {
                "id": "630638",
                "name": "결핵 진단비",
                "theme": "기타",
                "confidence": 0.06938638812838556,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": -200.59829711914062
                    }
                }
            },
            {
                "id": "611022",
                "name": "수술비(1~7종, 연간3회한)[상해4종]",
                "theme": "수술",
                "confidence": 0.0026020568152926122,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 1401.333740234375
                    }
                }
            },
            {
                "id": "631812",
                "name": "수술비(1~7종, 연간3회한)[질병4종]",
                "theme": "수술",
                "confidence": 0.008661149261781222,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 3362.419677734375
                    }
                }
            },
            {
                "id": "631811",
                "name": "수술비(1~7종, 연간3회한)[질병3종]",
                "theme": "수술",
                "confidence": 0.008661149261781222,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 6117.9169921875
                    }
                }
            },
            {
                "id": "631809",
                "name": "수술비(1~7종, 연간3회한)[질병1종]",
                "theme": "수술",
                "confidence": 0.008661149261781222,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 828.1052631578947,
                        "totalProfit": 44384.85040758552
                    }
                }
            }
        ]
    },
    "3": {
        "id": "3",
        "channel": "TA",
        "age": 24,
        "gndr": "남",
        "unt_pd_nm": "The좋은 알파",
        "silson_discount": [
            {
                "tag": "노후",
                "kmv_adj": -50000.0
            },
            {
                "tag": "유병자",
                "kmv_adj": -50000.0
            },
            {
                "tag": "일반",
                "kmv_adj": -194915.95471100006
            },
            {
                "tag": "출생전",
                "kmv_adj": -679850.4646500001
            }
        ],
        "items": [
            {
                "id": "630527",
                "name": "유사암진단비",
                "quantity": 10000000,
                "theme": "3대진단",
                "totalPrice": 1500.0,
                "totalProfit": 16969.3828125
            },
            {
                "id": "633380",
                "name": "암진단비(유사암제외)(면책기간미적용)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 56950.0,
                "totalProfit": 1135481.625
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "quantity": 50000000,
                "theme": "사망후유",
                "totalPrice": 2400.0,
                "totalProfit": 75708.8359375
            },
            {
                "id": "633391",
                "name": "암직접치료통원일당(상급종합병원)(면책기간미적용)",
                "quantity": 50000,
                "theme": "입원일당",
                "totalPrice": 2455.0,
                "totalProfit": 58772.0546875
            },
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "quantity": 50000000,
                "theme": "사망후유",
                "totalPrice": 300.0,
                "totalProfit": 9253.802734375
            },
            {
                "id": "630228",
                "name": "뇌혈관질환진단",
                "quantity": 30000000,
                "theme": "3대진단",
                "totalPrice": 26970.0,
                "totalProfit": 502887.71875
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "quantity": 30000000,
                "theme": "3대진단",
                "totalPrice": 17490.0,
                "totalProfit": 354185.28125
            }
        ],
        "availableItems": [
            {
                "id": "611343",
                "name": "일반상해입원 간병인비용지원(간병인비용 1,500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 4.838431462714286e-05,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 114.0,
                        "totalProfit": 4145.06201171875
                    }
                }
            },
            {
                "id": "631397",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.14663861682069793,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 200.0,
                        "totalProfit": -1299.6832275390625
                    },
                    "300000": {
                        "totalPrice": 300.0,
                        "totalProfit": -1927.8753662109375
                    },
                    "400000": {
                        "totalPrice": 400.0,
                        "totalProfit": -2555.821533203125
                    },
                    "500000": {
                        "totalPrice": 500.0,
                        "totalProfit": -3184.0302734375
                    }
                }
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.07034317612635306,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 12.0,
                        "totalProfit": 175.12379455566406
                    },
                    "300000": {
                        "totalPrice": 18.0,
                        "totalProfit": 284.3323669433594
                    },
                    "400000": {
                        "totalPrice": 24.0,
                        "totalProfit": 393.5115966796875
                    },
                    "500000": {
                        "totalPrice": 30.0,
                        "totalProfit": 502.6803283691406
                    }
                }
            },
            {
                "id": "610918",
                "name": "골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.04619579957940667,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 168.0,
                        "totalProfit": 4179.65625
                    },
                    "200000": {
                        "totalPrice": 336.0,
                        "totalProfit": 8402.5341796875
                    },
                    "300000": {
                        "totalPrice": 504.0,
                        "totalProfit": 12625.419921875
                    },
                    "500000": {
                        "totalPrice": 840.0,
                        "totalProfit": 21071.150390625
                    },
                    "1000000": {
                        "totalPrice": 1680.0,
                        "totalProfit": 42185.53515625
                    }
                }
            },
            {
                "id": "631346",
                "name": "갑상선기능항진증치료비",
                "theme": "3대진단",
                "confidence": 0.04004151698735016,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 120.0,
                        "totalProfit": 2344.317626953125
                    }
                }
            },
            {
                "id": "633332",
                "name": "당뇨병진단비Ⅱ[당화혈색소 11.0%이상]",
                "theme": "기타",
                "confidence": 0.004565965373715857,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 390.0,
                        "totalProfit": 2333.897216796875
                    },
                    "2000000": {
                        "totalPrice": 780.0,
                        "totalProfit": 4711.03564453125
                    },
                    "3000000": {
                        "totalPrice": 1170.0,
                        "totalProfit": 7088.4140625
                    },
                    "5000000": {
                        "totalPrice": 1950.0,
                        "totalProfit": 11842.939453125
                    }
                }
            },
            {
                "id": "610468",
                "name": "중대상해수술비",
                "theme": "수술",
                "confidence": 0.01427349092191063,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 355.0,
                        "totalProfit": 12759.8017578125
                    },
                    "10000000": {
                        "totalPrice": 710.0,
                        "totalProfit": 25562.796875
                    },
                    "20000000": {
                        "totalPrice": 1420.0,
                        "totalProfit": 51168.95703125
                    }
                }
            },
            {
                "id": "633116",
                "name": "질병입원 간병인비용지원(간병인비용 500만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.013403021141711673,
                "availableQuantities": [
                    100000,
                    300000,
                    600000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 117.0,
                        "totalProfit": 3592.007568359375
                    },
                    "300000": {
                        "totalPrice": 352.0,
                        "totalProfit": 10921.2216796875
                    },
                    "600000": {
                        "totalPrice": 704.0,
                        "totalProfit": 21885.3984375
                    },
                    "1000000": {
                        "totalPrice": 1173.0,
                        "totalProfit": 36484.68359375
                    }
                }
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "theme": "골절/화상",
                "confidence": 0.04585700675437849,
                "availableQuantities": [
                    100000,
                    200000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 62.0,
                        "totalProfit": 763.8607788085938
                    },
                    "200000": {
                        "totalPrice": 124.0,
                        "totalProfit": 1570.985107421875
                    },
                    "500000": {
                        "totalPrice": 310.0,
                        "totalProfit": 3992.311279296875
                    }
                }
            },
            {
                "id": "633391",
                "name": "암직접치료통원일당(상급종합병원)(면책기간미적용)",
                "theme": "입원일당",
                "confidence": 0.02997306020424487,
                "availableQuantities": [
                    20000,
                    50000,
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 982.0,
                        "totalProfit": 23482.685546875
                    },
                    "50000": {
                        "totalPrice": 2455.0,
                        "totalProfit": 58772.0546875
                    },
                    "100000": {
                        "totalPrice": 4910.0,
                        "totalProfit": 117587.640625
                    },
                    "200000": {
                        "totalPrice": 9820.0,
                        "totalProfit": 235218.59375
                    },
                    "300000": {
                        "totalPrice": 14730.0,
                        "totalProfit": 352849.53125
                    }
                }
            },
            {
                "id": "610933",
                "name": "신화상치료비(중증화상및부식진단비)",
                "theme": "골절/화상",
                "confidence": 0.04585700675437849,
                "availableQuantities": [
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 1951.519287109375
                    },
                    "30000000": {
                        "totalPrice": 90.0,
                        "totalProfit": 2948.98779296875
                    },
                    "50000000": {
                        "totalPrice": 150.0,
                        "totalProfit": 4943.7373046875
                    }
                }
            },
            {
                "id": "630955",
                "name": "상급종합병원질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.015242948929353142,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    70000,
                    100000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 854.0,
                        "totalProfit": 16934.6875
                    },
                    "30000": {
                        "totalPrice": 1281.0,
                        "totalProfit": 25423.77734375
                    },
                    "50000": {
                        "totalPrice": 2135.0,
                        "totalProfit": 42401.69921875
                    },
                    "70000": {
                        "totalPrice": 2989.0,
                        "totalProfit": 59379.859375
                    },
                    "100000": {
                        "totalPrice": 4270.0,
                        "totalProfit": 84846.9296875
                    }
                }
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "theme": "입원일당",
                "confidence": 0.01907835836920504,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 748.0,
                        "totalProfit": 18549.98046875
                    },
                    "20000": {
                        "totalPrice": 1496.0,
                        "totalProfit": 37143.171875
                    },
                    "30000": {
                        "totalPrice": 2244.0,
                        "totalProfit": 55736.359375
                    },
                    "40000": {
                        "totalPrice": 2992.0,
                        "totalProfit": 74329.734375
                    },
                    "50000": {
                        "totalPrice": 3740.0,
                        "totalProfit": 92922.9375
                    }
                }
            },
            {
                "id": "633392",
                "name": "암수술비(유사암제외)(25%체증형)(면책기간미적용)",
                "theme": "수술",
                "confidence": 0.10015023026939088,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000,
                    10000000,
                    15000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 1704.0,
                        "totalProfit": 31569.330078125
                    },
                    "3000000": {
                        "totalPrice": 2556.0,
                        "totalProfit": 47375.6796875
                    },
                    "5000000": {
                        "totalPrice": 4260.0,
                        "totalProfit": 78988.53125
                    },
                    "10000000": {
                        "totalPrice": 8520.0,
                        "totalProfit": 158020.359375
                    },
                    "15000000": {
                        "totalPrice": 12780.0,
                        "totalProfit": 237052.46875
                    }
                }
            },
            {
                "id": "630228",
                "name": "뇌혈관질환진단",
                "theme": "3대진단",
                "confidence": 0.08861169528605764,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 4495.0,
                        "totalProfit": 83778.3359375
                    },
                    "10000000": {
                        "totalPrice": 8990.0,
                        "totalProfit": 167600.203125
                    },
                    "20000000": {
                        "totalPrice": 17980.0,
                        "totalProfit": 335243.9375
                    },
                    "30000000": {
                        "totalPrice": 26970.0,
                        "totalProfit": 502887.71875
                    }
                }
            },
            {
                "id": "633315",
                "name": "질병입원 간병인비용지원(간병인비용 500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0005265120704559429,
                "availableQuantities": [
                    400000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 538.0,
                        "totalProfit": 15733.4716796875
                    },
                    "500000": {
                        "totalPrice": 673.0,
                        "totalProfit": 19706.66015625
                    },
                    "1000000": {
                        "totalPrice": 1346.0,
                        "totalProfit": 39456.56640625
                    }
                }
            },
            {
                "id": "631807",
                "name": "수술비(1~7종, 연간3회한)[질병6종]",
                "theme": "수술",
                "confidence": 0.205902160668828,
                "availableQuantities": [
                    500000,
                    1000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 415.0,
                        "totalProfit": 9658.8564453125
                    },
                    "1000000": {
                        "totalPrice": 830.0,
                        "totalProfit": 19360.994140625
                    },
                    "3000000": {
                        "totalPrice": 2490.0,
                        "totalProfit": 58170.15234375
                    },
                    "5000000": {
                        "totalPrice": 4150.0,
                        "totalProfit": 96978.8671875
                    },
                    "10000000": {
                        "totalPrice": 8300.0,
                        "totalProfit": 194001.296875
                    }
                }
            },
            {
                "id": "633014",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.12996276287715305,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 330.0,
                        "totalProfit": -1831.6787109375
                    },
                    "200000": {
                        "totalPrice": 660.0,
                        "totalProfit": -3620.17041015625
                    }
                }
            },
            {
                "id": "631803",
                "name": "수술비(1~7종, 연간3회한)[질병2종]",
                "theme": "수술",
                "confidence": 0.205902160668828,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 640.0,
                        "totalProfit": 14259.9814453125
                    },
                    "300000": {
                        "totalPrice": 960.0,
                        "totalProfit": 21411.453125
                    }
                }
            },
            {
                "id": "610834",
                "name": "수술비(1~5종)[상해3종]",
                "theme": "수술",
                "confidence": 0.006778855225017485,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 135.0,
                        "totalProfit": 937.1736450195312
                    },
                    "1000000": {
                        "totalPrice": 270.0,
                        "totalProfit": 1917.6209716796875
                    }
                }
            },
            {
                "id": "611018",
                "name": "수술비(1~7종, 연간3회한)[상해7종]",
                "theme": "수술",
                "confidence": 0.04892322394768657,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 70.0,
                        "totalProfit": 1758.1802978515625
                    },
                    "10000000": {
                        "totalPrice": 140.0,
                        "totalProfit": 3559.6201171875
                    },
                    "20000000": {
                        "totalPrice": 280.0,
                        "totalProfit": 7162.4814453125
                    }
                }
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.25606811412583647,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 216.0,
                        "totalProfit": 4613.31689453125
                    },
                    "300000": {
                        "totalPrice": 324.0,
                        "totalProfit": 6941.755859375
                    },
                    "400000": {
                        "totalPrice": 432.0,
                        "totalProfit": 9270.017578125
                    },
                    "500000": {
                        "totalPrice": 540.0,
                        "totalProfit": 11598.4638671875
                    },
                    "1000000": {
                        "totalPrice": 1080.0,
                        "totalProfit": 23240.140625
                    }
                }
            },
            {
                "id": "611300",
                "name": "일반상해입원 간병인비용지원(간병인비용 2,000만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0013965402559070286,
                "availableQuantities": [
                    1000000,
                    1500000,
                    2500000,
                    4000000,
                    5000000
                ],
                "recommendedQuantity": 1500000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 65.0,
                        "totalProfit": 2705.318603515625
                    },
                    "1500000": {
                        "totalPrice": 98.0,
                        "totalProfit": 4109.17529296875
                    },
                    "2500000": {
                        "totalPrice": 163.0,
                        "totalProfit": 6857.857421875
                    },
                    "4000000": {
                        "totalPrice": 260.0,
                        "totalProfit": 10951.3935546875
                    },
                    "5000000": {
                        "totalPrice": 325.0,
                        "totalProfit": 13699.931640625
                    }
                }
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "theme": "골절/화상",
                "confidence": 0.04585700675437849,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 7.0,
                        "totalProfit": 170.73585510253906
                    },
                    "200000": {
                        "totalPrice": 14.0,
                        "totalProfit": 384.6846923828125
                    }
                }
            },
            {
                "id": "611012",
                "name": "수술비(1~7종, 연간3회한)[상해1종]",
                "theme": "수술",
                "confidence": 0.04892322394768657,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 510.0,
                        "totalProfit": 15308.46484375
                    },
                    "200000": {
                        "totalPrice": 1020.0,
                        "totalProfit": 30660.142578125
                    },
                    "300000": {
                        "totalPrice": 1530.0,
                        "totalProfit": 46011.8203125
                    }
                }
            },
            {
                "id": "630766",
                "name": "허혈성심장질환수술비",
                "theme": "3대진단",
                "confidence": 0.13778684690424287,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 1362.0,
                        "totalProfit": 25142.599609375
                    },
                    "10000000": {
                        "totalPrice": 2723.0,
                        "totalProfit": 50269.3984375
                    },
                    "20000000": {
                        "totalPrice": 5446.0,
                        "totalProfit": 100582.375
                    },
                    "30000000": {
                        "totalPrice": 8169.0,
                        "totalProfit": 150895.3125
                    },
                    "50000000": {
                        "totalPrice": 13615.0,
                        "totalProfit": 251520.9375
                    }
                }
            },
            {
                "id": "631805",
                "name": "수술비(1~7종, 연간3회한)[질병4종]",
                "theme": "수술",
                "confidence": 0.205902160668828,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 789.0,
                        "totalProfit": 17914.603515625
                    },
                    "500000": {
                        "totalPrice": 1315.0,
                        "totalProfit": 29886.666015625
                    },
                    "1000000": {
                        "totalPrice": 2630.0,
                        "totalProfit": 59816.625
                    }
                }
            },
            {
                "id": "632997",
                "name": "표적항암약물허가치료비Ⅱ(비급여)",
                "theme": "기타",
                "confidence": 0.07605006944912786,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 90.0,
                        "totalProfit": 8607.306640625
                    },
                    "50000000": {
                        "totalPrice": 150.0,
                        "totalProfit": 14374.86328125
                    },
                    "70000000": {
                        "totalPrice": 210.0,
                        "totalProfit": 20142.1015625
                    },
                    "80000000": {
                        "totalPrice": 240.0,
                        "totalProfit": 23025.51953125
                    },
                    "100000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 28793.0546875
                    }
                }
            },
            {
                "id": "633314",
                "name": "질병입원 간병인비용지원(간병인비용 300만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0003101469352627429,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 477.0,
                        "totalProfit": 13886.2607421875
                    },
                    "300000": {
                        "totalPrice": 715.0,
                        "totalProfit": 20821.599609375
                    },
                    "500000": {
                        "totalPrice": 1192.0,
                        "totalProfit": 34751.02734375
                    }
                }
            },
            {
                "id": "610835",
                "name": "수술비(1~5종)[상해4종]",
                "theme": "수술",
                "confidence": 0.006778855225017485,
                "availableQuantities": [
                    1000000,
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 9.0,
                        "totalProfit": 148.57273864746094
                    },
                    "2000000": {
                        "totalPrice": 18.0,
                        "totalProfit": 340.4189147949219
                    },
                    "5000000": {
                        "totalPrice": 46.0,
                        "totalProfit": 974.1267700195312
                    }
                }
            },
            {
                "id": "610912",
                "name": "골절(치아파절제외)진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.039735840274499404,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 470.0,
                        "totalProfit": 6686.48974609375
                    },
                    "200000": {
                        "totalPrice": 940.0,
                        "totalProfit": 13416.1904296875
                    },
                    "300000": {
                        "totalPrice": 1410.0,
                        "totalProfit": 20145.91015625
                    },
                    "400000": {
                        "totalPrice": 1880.0,
                        "totalProfit": 26875.8203125
                    },
                    "500000": {
                        "totalPrice": 2350.0,
                        "totalProfit": 33605.53125
                    }
                }
            },
            {
                "id": "631381",
                "name": "중대한재생불량성빈혈진단비",
                "theme": "기타",
                "confidence": 0.035113670291889956,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 24.0,
                        "totalProfit": 408.1693420410156
                    }
                }
            },
            {
                "id": "611265",
                "name": "상급병실(1인실) 종합병원 일반상해수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.025374351483128426,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 20.0,
                        "totalProfit": 267.669921875
                    },
                    "200000": {
                        "totalPrice": 40.0,
                        "totalProfit": 578.5359497070312
                    },
                    "300000": {
                        "totalPrice": 60.0,
                        "totalProfit": 889.4088745117188
                    }
                }
            },
            {
                "id": "633341",
                "name": "2-3인실 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.04446925197168518,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1105.0,
                        "totalProfit": 25228.173828125
                    }
                }
            },
            {
                "id": "632279",
                "name": "표적항암약물허가치료비Ⅱ",
                "theme": "기타",
                "confidence": 0.2250296840269966,
                "availableQuantities": [
                    10000000,
                    30000000,
                    50000000,
                    70000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 110.0,
                        "totalProfit": 8458.3955078125
                    },
                    "30000000": {
                        "totalPrice": 330.0,
                        "totalProfit": 25461.822265625
                    },
                    "50000000": {
                        "totalPrice": 550.0,
                        "totalProfit": 42465.61328125
                    },
                    "70000000": {
                        "totalPrice": 770.0,
                        "totalProfit": 59469.33203125
                    },
                    "100000000": {
                        "totalPrice": 1100.0,
                        "totalProfit": 84974.5
                    }
                }
            },
            {
                "id": "611015",
                "name": "수술비(1~7종, 연간3회한)[상해4종]",
                "theme": "수술",
                "confidence": 0.04892322394768657,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 270.0,
                        "totalProfit": 6365.4052734375
                    }
                }
            },
            {
                "id": "633117",
                "name": "질병입원 간병인비용지원(간병인비용 1,000만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.002841643524837543,
                "availableQuantities": [
                    900000,
                    1000000,
                    1500000,
                    2000000
                ],
                "recommendedQuantity": 900000,
                "priceAndProfitByQuantity": {
                    "900000": {
                        "totalPrice": 564.0,
                        "totalProfit": 17990.701171875
                    },
                    "1000000": {
                        "totalPrice": 627.0,
                        "totalProfit": 20013.853515625
                    },
                    "1500000": {
                        "totalPrice": 941.0,
                        "totalProfit": 30071.8671875
                    },
                    "2000000": {
                        "totalPrice": 1254.0,
                        "totalProfit": 40070.94140625
                    }
                }
            },
            {
                "id": "633331",
                "name": "당뇨병진단비Ⅱ[당화혈색소 9.0%이상]",
                "theme": "기타",
                "confidence": 0.004565965373715857,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 910.0,
                        "totalProfit": 9354.23828125
                    },
                    "2000000": {
                        "totalPrice": 1820.0,
                        "totalProfit": 18751.7265625
                    },
                    "3000000": {
                        "totalPrice": 2730.0,
                        "totalProfit": 28149.21875
                    },
                    "5000000": {
                        "totalPrice": 4550.0,
                        "totalProfit": 46944.171875
                    }
                }
            },
            {
                "id": "633312",
                "name": "질병입원 간병인비용지원(간병인비용 700만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0001618697430993857,
                "availableQuantities": [
                    100000,
                    600000,
                    1000000,
                    1500000,
                    3500000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 86.0,
                        "totalProfit": 2693.37451171875
                    },
                    "600000": {
                        "totalPrice": 516.0,
                        "totalProfit": 16376.328125
                    },
                    "1000000": {
                        "totalPrice": 860.0,
                        "totalProfit": 27322.47265625
                    },
                    "1500000": {
                        "totalPrice": 1290.0,
                        "totalProfit": 41005.62890625
                    },
                    "3500000": {
                        "totalPrice": 3010.0,
                        "totalProfit": 95737.1015625
                    }
                }
            },
            {
                "id": "632653",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(특정심장질환)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.1519784422340553,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 186.0,
                        "totalProfit": 3823.573974609375
                    },
                    "5000000": {
                        "totalPrice": 310.0,
                        "totalProfit": 6401.64892578125
                    }
                }
            },
            {
                "id": "633234",
                "name": "간병인지원 질병입원일당(Ⅰ)(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.024601981108443357,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 5.0,
                        "totalProfit": 398.8098449707031
                    },
                    "20000": {
                        "totalPrice": 10.0,
                        "totalProfit": 840.7926635742188
                    }
                }
            },
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "theme": "사망후유",
                "confidence": 0.10828327181536145,
                "availableQuantities": [
                    1000000,
                    10000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 6.0,
                        "totalProfit": 142.57199096679688
                    },
                    "10000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 1816.1768798828125
                    },
                    "30000000": {
                        "totalPrice": 180.0,
                        "totalProfit": 5534.97265625
                    },
                    "50000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 9253.802734375
                    },
                    "100000000": {
                        "totalPrice": 600.0,
                        "totalProfit": 18550.82421875
                    }
                }
            },
            {
                "id": "610852",
                "name": "종합병원 일반상해입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.01982526203455563,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 272.0,
                        "totalProfit": 5828.65283203125
                    },
                    "20000": {
                        "totalPrice": 544.0,
                        "totalProfit": 11700.7861328125
                    },
                    "30000": {
                        "totalPrice": 816.0,
                        "totalProfit": 17572.921875
                    },
                    "50000": {
                        "totalPrice": 1360.0,
                        "totalProfit": 29317.15625
                    }
                }
            },
            {
                "id": "611344",
                "name": "일반상해입원 간병인비용지원(간병인비용 2,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 5.5284851932142854e-05,
                "availableQuantities": [
                    100000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 7.0,
                        "totalProfit": 232.80177307128906
                    },
                    "1000000": {
                        "totalPrice": 67.0,
                        "totalProfit": 2538.942626953125
                    }
                }
            },
            {
                "id": "633382",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)(면책기간미적용)",
                "theme": "3대진단",
                "confidence": 0.018291146480200613,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 519.0,
                        "totalProfit": 10295.5341796875
                    },
                    "10000000": {
                        "totalPrice": 5191.0,
                        "totalProfit": 103401.546875
                    },
                    "20000000": {
                        "totalPrice": 10382.0,
                        "totalProfit": 206846.375
                    },
                    "30000000": {
                        "totalPrice": 15573.0,
                        "totalProfit": 310291.1875
                    },
                    "50000000": {
                        "totalPrice": 25955.0,
                        "totalProfit": 517181.15625
                    }
                }
            },
            {
                "id": "633015",
                "name": "상급병실(1인실) 종합병원 질병수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.04891640251620447,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 110.0,
                        "totalProfit": 3127.046142578125
                    },
                    "200000": {
                        "totalPrice": 220.0,
                        "totalProfit": 6297.353515625
                    },
                    "300000": {
                        "totalPrice": 330.0,
                        "totalProfit": 9467.943359375
                    }
                }
            },
            {
                "id": "630110",
                "name": "조혈모세포이식수술비",
                "theme": "수술",
                "confidence": 0.015484222861407956,
                "availableQuantities": [
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 160.0,
                        "totalProfit": 4966.2275390625
                    },
                    "30000000": {
                        "totalPrice": 240.0,
                        "totalProfit": 7471.0966796875
                    },
                    "50000000": {
                        "totalPrice": 400.0,
                        "totalProfit": 12480.50390625
                    }
                }
            },
            {
                "id": "630093",
                "name": "당뇨병수술비",
                "theme": "수술",
                "confidence": 0.0033011346025467853,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 56.0,
                        "totalProfit": -1295.3997802734375
                    }
                }
            },
            {
                "id": "633313",
                "name": "질병입원 간병인비용지원(간병인비용 200만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0016728706526493286,
                "availableQuantities": [
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 700.0,
                        "totalProfit": 17347.98046875
                    },
                    "300000": {
                        "totalPrice": 1049.0,
                        "totalProfit": 25984.52734375
                    },
                    "400000": {
                        "totalPrice": 1399.0,
                        "totalProfit": 34680.13671875
                    }
                }
            },
            {
                "id": "611297",
                "name": "일반상해입원 간병인비용지원(간병인비용 500만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.009149521245874115,
                "availableQuantities": [
                    600000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 332.0,
                        "totalProfit": 13741.279296875
                    },
                    "1000000": {
                        "totalPrice": 553.0,
                        "totalProfit": 22911.04296875
                    }
                }
            },
            {
                "id": "611345",
                "name": "2-3인실 상급종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.02355205892580024,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 25.0,
                        "totalProfit": 419.13323974609375
                    }
                }
            },
            {
                "id": "632648",
                "name": "혈전용해치료비Ⅱ(뇌졸중)",
                "theme": "기타",
                "confidence": 0.1360180501733769,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 178.0,
                        "totalProfit": 2634.812255859375
                    },
                    "5000000": {
                        "totalPrice": 445.0,
                        "totalProfit": 6651.98974609375
                    },
                    "10000000": {
                        "totalPrice": 890.0,
                        "totalProfit": 13347.5234375
                    }
                }
            },
            {
                "id": "611263",
                "name": "간호·간병통합서비스 사용 일반상해입원일당(1일이상180일한도)",
                "theme": "입원일당",
                "confidence": 0.06113006540781856,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 480.0,
                        "totalProfit": 11696.6474609375
                    },
                    "70000": {
                        "totalPrice": 672.0,
                        "totalProfit": 16392.630859375
                    }
                }
            },
            {
                "id": "633333",
                "name": "고혈압(원발성)대상질병진단비[고혈압(원발성)]",
                "theme": "기타",
                "confidence": 0.0034991566953214287,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 2410.0,
                        "totalProfit": 41152.37109375
                    }
                }
            },
            {
                "id": "632140",
                "name": "131대질병수술비(백내장)",
                "theme": "수술",
                "confidence": 0.09654272168581028,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 333.0,
                        "totalProfit": -2815.025634765625
                    },
                    "300000": {
                        "totalPrice": 499.0,
                        "totalProfit": -4231.44580078125
                    }
                }
            },
            {
                "id": "631766",
                "name": "다빈치로봇 암수술비(특정암)",
                "theme": "3대진단",
                "confidence": 0.18806679306346477,
                "availableQuantities": [
                    1000000,
                    2000000,
                    2500000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 15.0,
                        "totalProfit": 1094.5997314453125
                    },
                    "2000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 2232.50146484375
                    },
                    "2500000": {
                        "totalPrice": 38.0,
                        "totalProfit": 2834.05419921875
                    },
                    "5000000": {
                        "totalPrice": 75.0,
                        "totalProfit": 5646.44677734375
                    },
                    "10000000": {
                        "totalPrice": 150.0,
                        "totalProfit": 11336.49609375
                    }
                }
            },
            {
                "id": "631858",
                "name": "질병수술비(특정5대질병 제외)",
                "theme": "수술",
                "confidence": 0.17844569167012977,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    800000,
                    1000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 2508.0,
                        "totalProfit": 70978.1796875
                    },
                    "300000": {
                        "totalPrice": 3762.0,
                        "totalProfit": 106489.046875
                    },
                    "500000": {
                        "totalPrice": 6270.0,
                        "totalProfit": 177510.703125
                    },
                    "800000": {
                        "totalPrice": 10032.0,
                        "totalProfit": 284043.25
                    },
                    "1000000": {
                        "totalPrice": 12540.0,
                        "totalProfit": 355064.96875
                    }
                }
            },
            {
                "id": "611342",
                "name": "일반상해입원 간병인비용지원(간병인비용 1,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 5.94266911691e-05,
                "availableQuantities": [
                    600000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 137.0,
                        "totalProfit": 4953.837890625
                    },
                    "1000000": {
                        "totalPrice": 228.0,
                        "totalProfit": 8265.3857421875
                    },
                    "2000000": {
                        "totalPrice": 456.0,
                        "totalProfit": 16573.955078125
                    }
                }
            },
            {
                "id": "631263",
                "name": "종합병원 질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.050451089617740676,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1233.0,
                        "totalProfit": 28450.662109375
                    },
                    "20000": {
                        "totalPrice": 2466.0,
                        "totalProfit": 56944.6015625
                    },
                    "30000": {
                        "totalPrice": 3699.0,
                        "totalProfit": 85438.53125
                    },
                    "50000": {
                        "totalPrice": 6165.0,
                        "totalProfit": 142426.375
                    }
                }
            },
            {
                "id": "630763",
                "name": "뇌혈관질환 수술비",
                "theme": "수술",
                "confidence": 0.13649285537110342,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 1165.0,
                        "totalProfit": 29748.19921875
                    },
                    "10000000": {
                        "totalPrice": 2330.0,
                        "totalProfit": 59539.53125
                    },
                    "20000000": {
                        "totalPrice": 4660.0,
                        "totalProfit": 119122.25
                    },
                    "30000000": {
                        "totalPrice": 6990.0,
                        "totalProfit": 178705.0
                    },
                    "50000000": {
                        "totalPrice": 11650.0,
                        "totalProfit": 297870.53125
                    }
                }
            },
            {
                "id": "633121",
                "name": "간병인사용 질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.05232158359196472,
                "availableQuantities": [
                    50000,
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 15.0,
                        "totalProfit": 388.4200439453125
                    },
                    "150000": {
                        "totalPrice": 45.0,
                        "totalProfit": 1251.824951171875
                    }
                }
            },
            {
                "id": "632520",
                "name": "131대질병수술비(다빈도62대질병)",
                "theme": "수술",
                "confidence": 0.09654272168581028,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 1170.0,
                        "totalProfit": 26582.98828125
                    },
                    "500000": {
                        "totalPrice": 1950.0,
                        "totalProfit": 44333.9375
                    },
                    "1000000": {
                        "totalPrice": 3900.0,
                        "totalProfit": 88711.4140625
                    },
                    "2000000": {
                        "totalPrice": 7800.0,
                        "totalProfit": 177466.078125
                    }
                }
            },
            {
                "id": "631166",
                "name": "5대기관질병수술비(Ⅱ)(연간1회한)",
                "theme": "수술",
                "confidence": 0.03746942935061403,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 2250.0,
                        "totalProfit": 59970.765625
                    },
                    "5000000": {
                        "totalPrice": 3750.0,
                        "totalProfit": 99980.265625
                    },
                    "10000000": {
                        "totalPrice": 7500.0,
                        "totalProfit": 200003.875
                    },
                    "20000000": {
                        "totalPrice": 15000.0,
                        "totalProfit": 400051.25
                    },
                    "30000000": {
                        "totalPrice": 22500.0,
                        "totalProfit": 600098.625
                    }
                }
            },
            {
                "id": "611013",
                "name": "수술비(1~7종, 연간3회한)[상해2종]",
                "theme": "수술",
                "confidence": 0.04892322394768657,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 200.0,
                        "totalProfit": 6060.21484375
                    },
                    "300000": {
                        "totalPrice": 300.0,
                        "totalProfit": 9111.916015625
                    }
                }
            },
            {
                "id": "610487",
                "name": "5대골절진단비",
                "theme": "골절/화상",
                "confidence": 0.011167938478567186,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 415.0,
                        "totalProfit": 6540.0009765625
                    },
                    "1000000": {
                        "totalPrice": 830.0,
                        "totalProfit": 13123.51171875
                    },
                    "2000000": {
                        "totalPrice": 1660.0,
                        "totalProfit": 26290.521484375
                    },
                    "3000000": {
                        "totalPrice": 2490.0,
                        "totalProfit": 39457.546875
                    }
                }
            },
            {
                "id": "610836",
                "name": "수술비(1~5종)[상해5종]",
                "theme": "수술",
                "confidence": 0.006778855225017485,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 9.0,
                        "totalProfit": -355.43115234375
                    },
                    "5000000": {
                        "totalPrice": 16.0,
                        "totalProfit": -504.95550537109375
                    },
                    "10000000": {
                        "totalPrice": 31.0,
                        "totalProfit": -1025.3629150390625
                    }
                }
            },
            {
                "id": "632277",
                "name": "계속받는 표적항암약물허가치료비Ⅱ(연간1회한)",
                "theme": "기타",
                "confidence": 0.03246868599594521,
                "availableQuantities": [
                    10000000,
                    30000000,
                    50000000,
                    70000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 23132.12890625
                    },
                    "30000000": {
                        "totalPrice": 600.0,
                        "totalProfit": 69484.4765625
                    },
                    "50000000": {
                        "totalPrice": 1000.0,
                        "totalProfit": 115836.7890625
                    },
                    "70000000": {
                        "totalPrice": 1400.0,
                        "totalProfit": 162189.078125
                    },
                    "100000000": {
                        "totalPrice": 2000.0,
                        "totalProfit": 231717.5625
                    }
                }
            },
            {
                "id": "631802",
                "name": "수술비(1~7종, 연간3회한)[질병1종]",
                "theme": "수술",
                "confidence": 0.205902160668828,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 2440.0,
                        "totalProfit": 58890.32421875
                    },
                    "200000": {
                        "totalPrice": 4880.0,
                        "totalProfit": 117824.0703125
                    },
                    "300000": {
                        "totalPrice": 7320.0,
                        "totalProfit": 176757.859375
                    }
                }
            },
            {
                "id": "632985",
                "name": "간병인사용 질병입원일당(1일이상180일한도)(요양병원)",
                "theme": "입원일당",
                "confidence": 0.09625339613864224,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 774.0,
                        "totalProfit": 19405.919921875
                    },
                    "50000": {
                        "totalPrice": 1935.0,
                        "totalProfit": 48579.5625
                    }
                }
            },
            {
                "id": "632504",
                "name": "뇌혈관질환수술비(25%체증형)",
                "theme": "수술",
                "confidence": 0.17376793662408682,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 480.0,
                        "totalProfit": 12148.046875
                    },
                    "5000000": {
                        "totalPrice": 1200.0,
                        "totalProfit": 30434.998046875
                    },
                    "10000000": {
                        "totalPrice": 2400.0,
                        "totalProfit": 60912.90625
                    },
                    "20000000": {
                        "totalPrice": 4800.0,
                        "totalProfit": 121869.078125
                    },
                    "30000000": {
                        "totalPrice": 7200.0,
                        "totalProfit": 182825.265625
                    }
                }
            },
            {
                "id": "633339",
                "name": "2-3인실 상급종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.04467870730518222,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 355.0,
                        "totalProfit": 7264.6494140625
                    }
                }
            },
            {
                "id": "632995",
                "name": "계속받는 표적항암약물허가치료비Ⅱ(연간1회한)(비급여)",
                "theme": "기타",
                "confidence": 0.011124440560884971,
                "availableQuantities": [
                    10000000,
                    30000000,
                    50000000,
                    70000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 50.0,
                        "totalProfit": 7730.720703125
                    },
                    "30000000": {
                        "totalPrice": 150.0,
                        "totalProfit": 23280.666015625
                    },
                    "50000000": {
                        "totalPrice": 250.0,
                        "totalProfit": 38830.21484375
                    },
                    "70000000": {
                        "totalPrice": 350.0,
                        "totalProfit": 54380.203125
                    },
                    "100000000": {
                        "totalPrice": 500.0,
                        "totalProfit": 77704.7734375
                    }
                }
            },
            {
                "id": "632984",
                "name": "간병인사용 질병입원일당(1일이상180일한도)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.09625339613864224,
                "availableQuantities": [
                    30000,
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 909.0,
                        "totalProfit": 26770.013671875
                    },
                    "100000": {
                        "totalPrice": 3030.0,
                        "totalProfit": 89334.28125
                    },
                    "150000": {
                        "totalPrice": 4545.0,
                        "totalProfit": 134023.328125
                    },
                    "200000": {
                        "totalPrice": 6060.0,
                        "totalProfit": 178712.078125
                    }
                }
            },
            {
                "id": "632134",
                "name": "131대질병수술비(특정31대질병)",
                "theme": "수술",
                "confidence": 0.09654272168581028,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 1911.0,
                        "totalProfit": 47641.48828125
                    },
                    "5000000": {
                        "totalPrice": 3185.0,
                        "totalProfit": 79431.640625
                    },
                    "10000000": {
                        "totalPrice": 6370.0,
                        "totalProfit": 158906.5
                    }
                }
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    1000000,
                    10000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 48.0,
                        "totalProfit": 1471.773681640625
                    },
                    "10000000": {
                        "totalPrice": 480.0,
                        "totalProfit": 15107.0
                    },
                    "30000000": {
                        "totalPrice": 1440.0,
                        "totalProfit": 45407.875
                    },
                    "50000000": {
                        "totalPrice": 2400.0,
                        "totalProfit": 75708.8359375
                    },
                    "100000000": {
                        "totalPrice": 4800.0,
                        "totalProfit": 151460.90625
                    }
                }
            },
            {
                "id": "631724",
                "name": "항암양성자방사선치료비",
                "theme": "3대진단",
                "confidence": 0.2162518820230284,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    40000000
                ],
                "recommendedQuantity": 40000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 6492.49169921875
                    },
                    "20000000": {
                        "totalPrice": 120.0,
                        "totalProfit": 13028.3125
                    },
                    "30000000": {
                        "totalPrice": 180.0,
                        "totalProfit": 19564.10546875
                    },
                    "40000000": {
                        "totalPrice": 240.0,
                        "totalProfit": 26099.939453125
                    }
                }
            },
            {
                "id": "640047",
                "name": "인공관절수술비",
                "theme": "수술",
                "confidence": 0.12560039408519266,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 110.0,
                        "totalProfit": 2473.09619140625
                    },
                    "2000000": {
                        "totalPrice": 220.0,
                        "totalProfit": 4989.47265625
                    }
                }
            },
            {
                "id": "633330",
                "name": "당뇨병진단비Ⅱ[당화혈색소 7.0%이상]",
                "theme": "기타",
                "confidence": 0.004565965373715857,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 1350.0,
                        "totalProfit": 34851.81640625
                    },
                    "1000000": {
                        "totalPrice": 2700.0,
                        "totalProfit": 69746.8671875
                    },
                    "2000000": {
                        "totalPrice": 5400.0,
                        "totalProfit": 139536.953125
                    }
                }
            },
            {
                "id": "611264",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.06522394629908781,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 70.0,
                        "totalProfit": -6335.95751953125
                    },
                    "200000": {
                        "totalPrice": 140.0,
                        "totalProfit": -12628.486328125
                    }
                }
            },
            {
                "id": "633122",
                "name": "간호·간병통합서비스 사용 질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.0533424476318746,
                "availableQuantities": [
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "70000": {
                        "totalPrice": 27.0,
                        "totalProfit": 628.2676391601562
                    }
                }
            },
            {
                "id": "633383",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)(면책기간미적용)",
                "theme": "3대진단",
                "confidence": 0.018291146480200613,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 369.0,
                        "totalProfit": 7462.37060546875
                    },
                    "10000000": {
                        "totalPrice": 3690.0,
                        "totalProfit": 75014.8515625
                    },
                    "20000000": {
                        "totalPrice": 7380.0,
                        "totalProfit": 150073.25
                    },
                    "30000000": {
                        "totalPrice": 11070.0,
                        "totalProfit": 225131.375
                    },
                    "50000000": {
                        "totalPrice": 18450.0,
                        "totalProfit": 375248.1875
                    }
                }
            },
            {
                "id": "611302",
                "name": "간병인사용 일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.03281714424014121,
                "availableQuantities": [
                    50000,
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 2.0,
                        "totalProfit": 5.556825160980225
                    },
                    "150000": {
                        "totalPrice": 6.0,
                        "totalProfit": 103.2281494140625
                    }
                }
            },
            {
                "id": "632505",
                "name": "허혈성심장질환수술비(25%체증형)",
                "theme": "수술",
                "confidence": 0.1739137988092478,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 557.0,
                        "totalProfit": 10243.5634765625
                    },
                    "5000000": {
                        "totalPrice": 1392.0,
                        "totalProfit": 25643.87890625
                    },
                    "10000000": {
                        "totalPrice": 2784.0,
                        "totalProfit": 51330.6796875
                    },
                    "20000000": {
                        "totalPrice": 5568.0,
                        "totalProfit": 102704.6171875
                    },
                    "30000000": {
                        "totalPrice": 8352.0,
                        "totalProfit": 154078.625
                    }
                }
            },
            {
                "id": "611261",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.06340583067695704,
                "availableQuantities": [
                    30000,
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 435.0,
                        "totalProfit": 8132.31005859375
                    },
                    "100000": {
                        "totalPrice": 1450.0,
                        "totalProfit": 27208.861328125
                    },
                    "150000": {
                        "totalPrice": 2175.0,
                        "totalProfit": 40834.91015625
                    },
                    "200000": {
                        "totalPrice": 2900.0,
                        "totalProfit": 54460.9609375
                    }
                }
            },
            {
                "id": "632138",
                "name": "131대질병수술비(뇌혈관질환)",
                "theme": "수술",
                "confidence": 0.09654272168581028,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 699.0,
                        "totalProfit": 17731.8046875
                    },
                    "5000000": {
                        "totalPrice": 1165.0,
                        "totalProfit": 29582.021484375
                    },
                    "10000000": {
                        "totalPrice": 2330.0,
                        "totalProfit": 59207.5625
                    }
                }
            },
            {
                "id": "611298",
                "name": "일반상해입원 간병인비용지원(간병인비용 1,000만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0018929951350803427,
                "availableQuantities": [
                    900000,
                    1000000,
                    1500000,
                    2000000
                ],
                "recommendedQuantity": 900000,
                "priceAndProfitByQuantity": {
                    "900000": {
                        "totalPrice": 199.0,
                        "totalProfit": 8102.2841796875
                    },
                    "1000000": {
                        "totalPrice": 221.0,
                        "totalProfit": 9000.64453125
                    },
                    "1500000": {
                        "totalPrice": 332.0,
                        "totalProfit": 13551.9599609375
                    },
                    "2000000": {
                        "totalPrice": 442.0,
                        "totalProfit": 18044.48828125
                    }
                }
            },
            {
                "id": "610833",
                "name": "수술비(1~5종)[상해2종]",
                "theme": "수술",
                "confidence": 0.006778855225017485,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 126.0,
                        "totalProfit": 1057.4432373046875
                    },
                    "200000": {
                        "totalPrice": 252.0,
                        "totalProfit": 2158.262451171875
                    },
                    "300000": {
                        "totalPrice": 378.0,
                        "totalProfit": 3258.87109375
                    }
                }
            },
            {
                "id": "633338",
                "name": "이상지질혈증(고지혈증포함)대상질병진단비[중증 이상지질혈증(고지혈증포함)]",
                "theme": "기타",
                "confidence": 0.002935344510479614,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 350.0,
                        "totalProfit": 4795.60009765625
                    },
                    "2000000": {
                        "totalPrice": 700.0,
                        "totalProfit": 9634.6728515625
                    }
                }
            },
            {
                "id": "632526",
                "name": "131대질병수술비(유방의장애)",
                "theme": "수술",
                "confidence": 0.09654272168581028,
                "availableQuantities": [
                    100000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 2.0,
                        "totalProfit": -1837.53857421875
                    },
                    "300000": {
                        "totalPrice": 6.0,
                        "totalProfit": -5426.63916015625
                    },
                    "500000": {
                        "totalPrice": 10.0,
                        "totalProfit": -9015.75390625
                    },
                    "1000000": {
                        "totalPrice": 19.0,
                        "totalProfit": -18047.326171875
                    }
                }
            },
            {
                "id": "611299",
                "name": "일반상해입원 간병인비용지원(간병인비용 1,500만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0013269823848164714,
                "availableQuantities": [
                    1000000,
                    1500000,
                    2500000,
                    3000000
                ],
                "recommendedQuantity": 1500000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 110.0,
                        "totalProfit": 4475.2998046875
                    },
                    "1500000": {
                        "totalPrice": 165.0,
                        "totalProfit": 6734.73974609375
                    },
                    "2500000": {
                        "totalPrice": 275.0,
                        "totalProfit": 11253.234375
                    },
                    "3000000": {
                        "totalPrice": 330.0,
                        "totalProfit": 13512.4755859375
                    }
                }
            },
            {
                "id": "611335",
                "name": "일반상해입원 간병인비용지원(간병인비용 200만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0037964403899945287,
                "availableQuantities": [
                    200000,
                    600000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 266.0,
                        "totalProfit": 10277.48046875
                    },
                    "600000": {
                        "totalPrice": 797.0,
                        "totalProfit": 30859.759765625
                    },
                    "1000000": {
                        "totalPrice": 1329.0,
                        "totalProfit": 51500.671875
                    }
                }
            },
            {
                "id": "632136",
                "name": "131대질병수술비(관절염,생식기질환)",
                "theme": "수술",
                "confidence": 0.09654272168581028,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 162.0,
                        "totalProfit": 1244.5113525390625
                    },
                    "300000": {
                        "totalPrice": 243.0,
                        "totalProfit": 1888.405029296875
                    }
                }
            },
            {
                "id": "611303",
                "name": "간호·간병통합서비스 사용 일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.032939969333724416,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 2.0,
                        "totalProfit": -17.408246994018555
                    },
                    "70000": {
                        "totalPrice": 3.0,
                        "totalProfit": 5.0760111808776855
                    }
                }
            },
            {
                "id": "633311",
                "name": "질병입원 간병인비용지원(간병인비용 300만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0007930283992669572,
                "availableQuantities": [
                    100000,
                    300000,
                    400000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 179.0,
                        "totalProfit": 5504.185546875
                    },
                    "300000": {
                        "totalPrice": 536.0,
                        "totalProfit": 16539.91015625
                    },
                    "400000": {
                        "totalPrice": 715.0,
                        "totalProfit": 22087.08203125
                    },
                    "500000": {
                        "totalPrice": 894.0,
                        "totalProfit": 27634.17578125
                    },
                    "1000000": {
                        "totalPrice": 1787.0,
                        "totalProfit": 55252.94921875
                    }
                }
            },
            {
                "id": "632139",
                "name": "131대질병수술비(후각특정질환)",
                "theme": "수술",
                "confidence": 0.09654272168581028,
                "availableQuantities": [
                    300000,
                    1000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 125.0,
                        "totalProfit": 2143.0634765625
                    },
                    "1000000": {
                        "totalPrice": 415.0,
                        "totalProfit": 7145.52294921875
                    }
                }
            },
            {
                "id": "633119",
                "name": "질병입원 간병인비용지원(간병인비용 2,000만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.002163380797666457,
                "availableQuantities": [
                    100000,
                    1500000,
                    2500000,
                    4000000
                ],
                "recommendedQuantity": 1500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 30.0,
                        "totalProfit": 938.6278686523438
                    },
                    "1500000": {
                        "totalPrice": 449.0,
                        "totalProfit": 14625.6552734375
                    },
                    "2500000": {
                        "totalPrice": 748.0,
                        "totalProfit": 24385.34375
                    },
                    "4000000": {
                        "totalPrice": 1196.0,
                        "totalProfit": 38995.48046875
                    }
                }
            },
            {
                "id": "610469",
                "name": "상해중환자실 입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.022452132630891054,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 320.0,
                        "totalProfit": 13887.9892578125
                    },
                    "100000": {
                        "totalPrice": 640.0,
                        "totalProfit": 27819.244140625
                    },
                    "200000": {
                        "totalPrice": 1280.0,
                        "totalProfit": 55681.671875
                    },
                    "300000": {
                        "totalPrice": 1920.0,
                        "totalProfit": 83544.203125
                    },
                    "500000": {
                        "totalPrice": 3200.0,
                        "totalProfit": 139269.1875
                    }
                }
            },
            {
                "id": "630019",
                "name": "질병 중환자실입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.0242500508553568,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 70.0,
                        "totalProfit": 655.3543701171875
                    },
                    "100000": {
                        "totalPrice": 140.0,
                        "totalProfit": 1354.2314453125
                    },
                    "200000": {
                        "totalPrice": 280.0,
                        "totalProfit": 2751.964599609375
                    },
                    "300000": {
                        "totalPrice": 420.0,
                        "totalProfit": 4149.7177734375
                    },
                    "500000": {
                        "totalPrice": 700.0,
                        "totalProfit": 6945.21728515625
                    }
                }
            },
            {
                "id": "633310",
                "name": "질병입원 간병인비용지원(간병인비용 200만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.005975077338780115,
                "availableQuantities": [
                    400000,
                    600000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 1044.0,
                        "totalProfit": 28671.19140625
                    },
                    "600000": {
                        "totalPrice": 1566.0,
                        "totalProfit": 43028.53125
                    },
                    "1000000": {
                        "totalPrice": 2610.0,
                        "totalProfit": 71742.75
                    }
                }
            },
            {
                "id": "631806",
                "name": "수술비(1~7종, 연간3회한)[질병5종]",
                "theme": "수술",
                "confidence": 0.205902160668828,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 350.0,
                        "totalProfit": 8041.96630859375
                    },
                    "1000000": {
                        "totalPrice": 700.0,
                        "totalProfit": 16127.228515625
                    },
                    "2000000": {
                        "totalPrice": 1400.0,
                        "totalProfit": 32297.736328125
                    },
                    "3000000": {
                        "totalPrice": 2100.0,
                        "totalProfit": 48468.265625
                    },
                    "5000000": {
                        "totalPrice": 3500.0,
                        "totalProfit": 80809.2265625
                    }
                }
            },
            {
                "id": "610488",
                "name": "5대골절수술비",
                "theme": "골절/화상",
                "confidence": 0.009181681189186986,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 55.0,
                        "totalProfit": 335.860595703125
                    },
                    "1000000": {
                        "totalPrice": 110.0,
                        "totalProfit": 715.2001342773438
                    },
                    "2000000": {
                        "totalPrice": 220.0,
                        "totalProfit": 1473.6375732421875
                    }
                }
            },
            {
                "id": "632310",
                "name": "갑상선기능저하증진단비",
                "theme": "기타",
                "confidence": 0.03526669862231312,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 365.0,
                        "totalProfit": 6767.6240234375
                    },
                    "1000000": {
                        "totalPrice": 730.0,
                        "totalProfit": 13578.7607421875
                    }
                }
            },
            {
                "id": "632532",
                "name": "131대질병수술비(편도염)",
                "theme": "수술",
                "confidence": 0.09654272168581028,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 17.0,
                        "totalProfit": 231.04779052734375
                    },
                    "500000": {
                        "totalPrice": 28.0,
                        "totalProfit": 394.1120300292969
                    },
                    "1000000": {
                        "totalPrice": 56.0,
                        "totalProfit": 831.2055053710938
                    }
                }
            },
            {
                "id": "632133",
                "name": "131대질병수술비(심장질환)",
                "theme": "수술",
                "confidence": 0.09654272168581028,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 1341.0,
                        "totalProfit": 28288.541015625
                    },
                    "5000000": {
                        "totalPrice": 2235.0,
                        "totalProfit": 47176.2734375
                    },
                    "10000000": {
                        "totalPrice": 4470.0,
                        "totalProfit": 94396.0390625
                    }
                }
            },
            {
                "id": "630971",
                "name": "질병후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.05094570668344262,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 6250.0,
                        "totalProfit": 99615.0234375
                    },
                    "10000000": {
                        "totalPrice": 12500.0,
                        "totalProfit": 199273.34375
                    },
                    "20000000": {
                        "totalPrice": 25000.0,
                        "totalProfit": 398589.96875
                    },
                    "30000000": {
                        "totalPrice": 37500.0,
                        "totalProfit": 597906.625
                    },
                    "50000000": {
                        "totalPrice": 62500.0,
                        "totalProfit": 996539.8125
                    }
                }
            },
            {
                "id": "630527",
                "name": "유사암진단비",
                "theme": "3대진단",
                "confidence": 0.2817544762972552,
                "availableQuantities": [
                    200000,
                    2000000,
                    4000000,
                    6000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 30.0,
                        "totalProfit": 297.0498962402344
                    },
                    "2000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 3359.27197265625
                    },
                    "4000000": {
                        "totalPrice": 600.0,
                        "totalProfit": 6761.79736328125
                    },
                    "6000000": {
                        "totalPrice": 900.0,
                        "totalProfit": 10164.328125
                    },
                    "10000000": {
                        "totalPrice": 1500.0,
                        "totalProfit": 16969.3828125
                    }
                }
            },
            {
                "id": "633337",
                "name": "이상지질혈증(고지혈증포함)대상질병진단비[중등증이상 이상지질혈증(고지혈증포함)]",
                "theme": "기타",
                "confidence": 0.002935344510479614,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 655.0,
                        "totalProfit": 8914.9873046875
                    },
                    "1000000": {
                        "totalPrice": 1310.0,
                        "totalProfit": 17873.158203125
                    }
                }
            },
            {
                "id": "633118",
                "name": "질병입원 간병인비용지원(간병인비용 1,500만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0020122267595232856,
                "availableQuantities": [
                    1500000,
                    2500000,
                    3000000
                ],
                "recommendedQuantity": 1500000,
                "priceAndProfitByQuantity": {
                    "1500000": {
                        "totalPrice": 635.0,
                        "totalProfit": 20496.212890625
                    },
                    "2500000": {
                        "totalPrice": 1058.0,
                        "totalProfit": 34169.7265625
                    },
                    "3000000": {
                        "totalPrice": 1269.0,
                        "totalProfit": 40976.921875
                    }
                }
            },
            {
                "id": "633390",
                "name": "계속받는 항암방사선약물치료비(급여)(연간1회한)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.04027179400226834,
                "availableQuantities": [
                    100000,
                    200000,
                    1000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 511.0,
                        "totalProfit": 13272.3818359375
                    },
                    "200000": {
                        "totalPrice": 1023.0,
                        "totalProfit": 26646.38671875
                    },
                    "1000000": {
                        "totalPrice": 5114.0,
                        "totalProfit": 133345.875
                    },
                    "3000000": {
                        "totalPrice": 15342.0,
                        "totalProfit": 400124.71875
                    },
                    "5000000": {
                        "totalPrice": 25570.0,
                        "totalProfit": 666903.5625
                    }
                }
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.06298781582687396,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 716.0,
                        "totalProfit": 13740.6328125
                    },
                    "200000": {
                        "totalPrice": 1432.0,
                        "totalProfit": 27524.5078125
                    },
                    "300000": {
                        "totalPrice": 2148.0,
                        "totalProfit": 41308.59765625
                    },
                    "400000": {
                        "totalPrice": 2864.0,
                        "totalProfit": 55092.4765625
                    },
                    "500000": {
                        "totalPrice": 3580.0,
                        "totalProfit": 68876.578125
                    }
                }
            },
            {
                "id": "630246",
                "name": "만성당뇨합병증진단비",
                "theme": "기타",
                "confidence": 0.02661775381223133,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 184.0,
                        "totalProfit": 3941.330322265625
                    },
                    "3000000": {
                        "totalPrice": 276.0,
                        "totalProfit": 5933.63671875
                    },
                    "5000000": {
                        "totalPrice": 460.0,
                        "totalProfit": 9918.5478515625
                    }
                }
            },
            {
                "id": "632502",
                "name": "6대심장질환진단비",
                "theme": "3대진단",
                "confidence": 0.028132070437491784,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 2257.0,
                        "totalProfit": 34798.75
                    },
                    "2000000": {
                        "totalPrice": 4514.0,
                        "totalProfit": 69640.8984375
                    },
                    "3000000": {
                        "totalPrice": 6771.0,
                        "totalProfit": 104483.0546875
                    },
                    "5000000": {
                        "totalPrice": 11285.0,
                        "totalProfit": 174167.09375
                    },
                    "10000000": {
                        "totalPrice": 22570.0,
                        "totalProfit": 348377.625
                    }
                }
            },
            {
                "id": "632986",
                "name": "간호·간병통합서비스 사용 질병입원일당(1일이상180일한도)",
                "theme": "입원일당",
                "confidence": 0.09467839918731906,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1775.0,
                        "totalProfit": 44566.96875
                    },
                    "70000": {
                        "totalPrice": 2485.0,
                        "totalProfit": 62411.23046875
                    }
                }
            },
            {
                "id": "611017",
                "name": "수술비(1~7종, 연간3회한)[상해6종]",
                "theme": "수술",
                "confidence": 0.04892322394768657,
                "availableQuantities": [
                    3000000,
                    5000000,
                    7000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 51.0,
                        "totalProfit": 1390.439208984375
                    },
                    "5000000": {
                        "totalPrice": 85.0,
                        "totalProfit": 2346.203369140625
                    },
                    "7000000": {
                        "totalPrice": 119.0,
                        "totalProfit": 3302.073974609375
                    },
                    "10000000": {
                        "totalPrice": 170.0,
                        "totalProfit": 4735.88134765625
                    }
                }
            },
            {
                "id": "632652",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(뇌졸중)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.1519784422340553,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 159.0,
                        "totalProfit": 3463.34033203125
                    },
                    "5000000": {
                        "totalPrice": 265.0,
                        "totalProfit": 5800.93212890625
                    }
                }
            },
            {
                "id": "631808",
                "name": "수술비(1~7종, 연간3회한)[질병7종]",
                "theme": "수술",
                "confidence": 0.205902160668828,
                "availableQuantities": [
                    5000000,
                    6000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 1050.0,
                        "totalProfit": 23885.802734375
                    },
                    "6000000": {
                        "totalPrice": 1260.0,
                        "totalProfit": 28671.724609375
                    },
                    "10000000": {
                        "totalPrice": 2100.0,
                        "totalProfit": 47815.1484375
                    },
                    "20000000": {
                        "totalPrice": 4200.0,
                        "totalProfit": 95673.84375
                    }
                }
            },
            {
                "id": "610470",
                "name": "상해수술위로금",
                "theme": "수술",
                "confidence": 0.04461228890116993,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000,
                    1500000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 840.0,
                        "totalProfit": 17249.27734375
                    },
                    "300000": {
                        "totalPrice": 1260.0,
                        "totalProfit": 25895.689453125
                    },
                    "500000": {
                        "totalPrice": 2100.0,
                        "totalProfit": 43188.21875
                    },
                    "1000000": {
                        "totalPrice": 4200.0,
                        "totalProfit": 86419.734375
                    },
                    "1500000": {
                        "totalPrice": 6300.0,
                        "totalProfit": 129651.5546875
                    }
                }
            },
            {
                "id": "611262",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원)",
                "theme": "입원일당",
                "confidence": 0.06340654048984709,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 46.0,
                        "totalProfit": 1189.780029296875
                    },
                    "50000": {
                        "totalPrice": 115.0,
                        "totalProfit": 3039.62939453125
                    }
                }
            },
            {
                "id": "632141",
                "name": "131대질병수술비(특정다빈도29대질병)",
                "theme": "수술",
                "confidence": 0.09654272168581028,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 174.0,
                        "totalProfit": 2896.557861328125
                    },
                    "200000": {
                        "totalPrice": 348.0,
                        "totalProfit": 5836.35302734375
                    }
                }
            },
            {
                "id": "633381",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)(면책기간미적용)",
                "theme": "3대진단",
                "confidence": 0.018291146480200613,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 261.0,
                        "totalProfit": 3852.919189453125
                    },
                    "10000000": {
                        "totalPrice": 2610.0,
                        "totalProfit": 38916.53125
                    },
                    "20000000": {
                        "totalPrice": 5220.0,
                        "totalProfit": 77876.609375
                    },
                    "30000000": {
                        "totalPrice": 7830.0,
                        "totalProfit": 116836.3984375
                    },
                    "50000000": {
                        "totalPrice": 13050.0,
                        "totalProfit": 194756.328125
                    }
                }
            },
            {
                "id": "633384",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)(면책기간미적용)",
                "theme": "3대진단",
                "confidence": 0.018291146480200613,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 135.0,
                        "totalProfit": 2589.46337890625
                    },
                    "10000000": {
                        "totalPrice": 1350.0,
                        "totalProfit": 26285.525390625
                    },
                    "20000000": {
                        "totalPrice": 2700.0,
                        "totalProfit": 52614.328125
                    },
                    "30000000": {
                        "totalPrice": 4050.0,
                        "totalProfit": 78943.109375
                    },
                    "50000000": {
                        "totalPrice": 6750.0,
                        "totalProfit": 131600.984375
                    }
                }
            },
            {
                "id": "611016",
                "name": "수술비(1~7종, 연간3회한)[상해5종]",
                "theme": "수술",
                "confidence": 0.04892322394768657,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 140.0,
                        "totalProfit": 3898.048095703125
                    },
                    "3000000": {
                        "totalPrice": 210.0,
                        "totalProfit": 5868.5849609375
                    },
                    "5000000": {
                        "totalPrice": 350.0,
                        "totalProfit": 9810.1943359375
                    }
                }
            },
            {
                "id": "631228",
                "name": "수술비(1~5종)[질병3종]",
                "theme": "수술",
                "confidence": 0.032783609694575125,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 665.0,
                        "totalProfit": -7723.28955078125
                    },
                    "1000000": {
                        "totalPrice": 1330.0,
                        "totalProfit": -15403.30078125
                    }
                }
            },
            {
                "id": "633385",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)(면책기간미적용)",
                "theme": "3대진단",
                "confidence": 0.018291146480200613,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 109.0,
                        "totalProfit": 2235.473388671875
                    },
                    "10000000": {
                        "totalPrice": 1090.0,
                        "totalProfit": 22746.326171875
                    },
                    "20000000": {
                        "totalPrice": 2180.0,
                        "totalProfit": 45536.21875
                    },
                    "30000000": {
                        "totalPrice": 3270.0,
                        "totalProfit": 68325.8125
                    },
                    "50000000": {
                        "totalPrice": 5450.0,
                        "totalProfit": 113905.296875
                    }
                }
            },
            {
                "id": "631728",
                "name": "다빈치로봇 암수술비(암(특정암제외))",
                "theme": "3대진단",
                "confidence": 0.18806679306346477,
                "availableQuantities": [
                    2000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 16.0,
                        "totalProfit": 812.22998046875
                    },
                    "10000000": {
                        "totalPrice": 80.0,
                        "totalProfit": 4234.984375
                    }
                }
            },
            {
                "id": "611309",
                "name": "간병인지원 일반상해입원일당(Ⅰ)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.012827849653328885,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1550.0,
                        "totalProfit": 56009.14453125
                    },
                    "20000": {
                        "totalPrice": 3100.0,
                        "totalProfit": 112061.4453125
                    }
                }
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "theme": "3대진단",
                "confidence": 0.2288316632569853,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 2915.0,
                        "totalProfit": 58994.6796875
                    },
                    "10000000": {
                        "totalPrice": 5830.0,
                        "totalProfit": 118032.9140625
                    },
                    "20000000": {
                        "totalPrice": 11660.0,
                        "totalProfit": 236109.109375
                    },
                    "30000000": {
                        "totalPrice": 17490.0,
                        "totalProfit": 354185.28125
                    },
                    "50000000": {
                        "totalPrice": 29150.0,
                        "totalProfit": 590337.625
                    }
                }
            },
            {
                "id": "630094",
                "name": "충수염수술비",
                "theme": "수술",
                "confidence": 0.019122700603766744,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 84.0,
                        "totalProfit": 1733.60546875
                    },
                    "300000": {
                        "totalPrice": 125.0,
                        "totalProfit": 2563.977783203125
                    },
                    "500000": {
                        "totalPrice": 209.0,
                        "totalProfit": 4340.61572265625
                    }
                }
            },
            {
                "id": "611301",
                "name": "일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.0020179307066592,
                "availableQuantities": [
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 4.0,
                        "totalProfit": 23.005245208740234
                    },
                    "30000": {
                        "totalPrice": 6.0,
                        "totalProfit": 56.26245880126953
                    }
                }
            },
            {
                "id": "631560",
                "name": "양성뇌종양진단비Ⅱ",
                "theme": "기타",
                "confidence": 0.11598413314856515,
                "availableQuantities": [
                    5000000,
                    7000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 245.0,
                        "totalProfit": 4803.19140625
                    },
                    "7000000": {
                        "totalPrice": 343.0,
                        "totalProfit": 6741.72265625
                    },
                    "10000000": {
                        "totalPrice": 490.0,
                        "totalProfit": 9649.634765625
                    }
                }
            },
            {
                "id": "611346",
                "name": "2-3인실 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.02337650106574974,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 225.0,
                        "totalProfit": 5163.1064453125
                    }
                }
            },
            {
                "id": "633120",
                "name": "질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.004271031366530058,
                "availableQuantities": [
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 36.0,
                        "totalProfit": 914.6565551757812
                    },
                    "30000": {
                        "totalPrice": 54.0,
                        "totalProfit": 1393.472900390625
                    }
                }
            },
            {
                "id": "633336",
                "name": "이상지질혈증(고지혈증포함)대상질병진단비[이상지질혈증(고지혈증포함)]",
                "theme": "기타",
                "confidence": 0.002935344510479614,
                "availableQuantities": [
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 2784.0,
                        "totalProfit": 34904.234375
                    },
                    "500000": {
                        "totalPrice": 4640.0,
                        "totalProfit": 58202.24609375
                    }
                }
            },
            {
                "id": "631138",
                "name": "유사암수술비",
                "theme": "수술",
                "confidence": 0.08360953412091733,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 116.0,
                        "totalProfit": -1389.4840087890625
                    },
                    "2000000": {
                        "totalPrice": 232.0,
                        "totalProfit": -2735.70361328125
                    },
                    "3000000": {
                        "totalPrice": 348.0,
                        "totalProfit": -4081.91796875
                    },
                    "5000000": {
                        "totalPrice": 580.0,
                        "totalProfit": -6774.36767578125
                    },
                    "10000000": {
                        "totalPrice": 1160.0,
                        "totalProfit": -13505.4765625
                    }
                }
            },
            {
                "id": "631804",
                "name": "수술비(1~7종, 연간3회한)[질병3종]",
                "theme": "수술",
                "confidence": 0.205902160668828,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 546.0,
                        "totalProfit": 10903.482421875
                    },
                    "400000": {
                        "totalPrice": 728.0,
                        "totalProfit": 14552.48828125
                    },
                    "500000": {
                        "totalPrice": 910.0,
                        "totalProfit": 18201.46875
                    }
                }
            },
            {
                "id": "631229",
                "name": "수술비(1~5종)[질병4종]",
                "theme": "수술",
                "confidence": 0.032783609694575125,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 163.0,
                        "totalProfit": -1087.5614013671875
                    },
                    "2000000": {
                        "totalPrice": 326.0,
                        "totalProfit": -2131.657958984375
                    },
                    "3000000": {
                        "totalPrice": 489.0,
                        "totalProfit": -3175.7509765625
                    },
                    "5000000": {
                        "totalPrice": 815.0,
                        "totalProfit": -5264.17333984375
                    }
                }
            },
            {
                "id": "640490",
                "name": "중증질환자(뇌혈관질환) 산정특례대상 진단비(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.011334634203639945,
                "availableQuantities": [
                    3000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 72.0,
                        "totalProfit": 3913.98876953125
                    },
                    "10000000": {
                        "totalPrice": 240.0,
                        "totalProfit": 13147.7353515625
                    },
                    "20000000": {
                        "totalPrice": 480.0,
                        "totalProfit": 26339.103515625
                    },
                    "30000000": {
                        "totalPrice": 720.0,
                        "totalProfit": 39530.4765625
                    }
                }
            },
            {
                "id": "611014",
                "name": "수술비(1~7종, 연간3회한)[상해3종]",
                "theme": "수술",
                "confidence": 0.04892322394768657,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 111.0,
                        "totalProfit": 2990.061767578125
                    },
                    "400000": {
                        "totalPrice": 148.0,
                        "totalProfit": 4001.47314453125
                    },
                    "500000": {
                        "totalPrice": 185.0,
                        "totalProfit": 5012.396484375
                    }
                }
            },
            {
                "id": "640045",
                "name": "각막이식수술비",
                "theme": "수술",
                "confidence": 0.12951332753000586,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 17.0,
                        "totalProfit": 271.336669921875
                    },
                    "20000000": {
                        "totalPrice": 34.0,
                        "totalProfit": 585.883056640625
                    }
                }
            },
            {
                "id": "640154",
                "name": "응급실내원비(응급)",
                "theme": "기타",
                "confidence": 0.10930925798380635,
                "availableQuantities": [
                    30000,
                    50000,
                    70000,
                    100000,
                    120000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 711.0,
                        "totalProfit": 20566.578125
                    },
                    "50000": {
                        "totalPrice": 1185.0,
                        "totalProfit": 34306.46875
                    },
                    "70000": {
                        "totalPrice": 1659.0,
                        "totalProfit": 48046.59765625
                    },
                    "100000": {
                        "totalPrice": 2370.0,
                        "totalProfit": 68656.4453125
                    },
                    "120000": {
                        "totalPrice": 2844.0,
                        "totalProfit": 82396.3046875
                    }
                }
            },
            {
                "id": "640497",
                "name": "중증질환자(심장질환) 산정특례대상 진단비(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.10800445879676997,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 315.0,
                        "totalProfit": 14727.392578125
                    },
                    "10000000": {
                        "totalPrice": 630.0,
                        "totalProfit": 29498.34375
                    },
                    "20000000": {
                        "totalPrice": 1260.0,
                        "totalProfit": 59040.2109375
                    },
                    "30000000": {
                        "totalPrice": 1890.0,
                        "totalProfit": 88582.125
                    }
                }
            },
            {
                "id": "640491",
                "name": "중증질환자(심장질환) 산정특례대상 진단비(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.0122994786586461,
                "availableQuantities": [
                    3000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 99.0,
                        "totalProfit": 6953.38525390625
                    },
                    "10000000": {
                        "totalPrice": 330.0,
                        "totalProfit": 23279.701171875
                    },
                    "20000000": {
                        "totalPrice": 660.0,
                        "totalProfit": 46602.73046875
                    },
                    "30000000": {
                        "totalPrice": 990.0,
                        "totalProfit": 69926.0390625
                    }
                }
            },
            {
                "id": "632484",
                "name": "유사암수술비(25%체증형)",
                "theme": "수술",
                "confidence": 0.11413051134162629,
                "availableQuantities": [
                    400000,
                    2000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 47.0,
                        "totalProfit": -534.3681030273438
                    },
                    "2000000": {
                        "totalPrice": 236.0,
                        "totalProfit": -2440.81005859375
                    },
                    "3000000": {
                        "totalPrice": 354.0,
                        "totalProfit": -3639.354248046875
                    },
                    "5000000": {
                        "totalPrice": 590.0,
                        "totalProfit": -6036.9462890625
                    },
                    "10000000": {
                        "totalPrice": 1180.0,
                        "totalProfit": -12030.3701171875
                    }
                }
            },
            {
                "id": "640056",
                "name": "5대장기이식수술비",
                "theme": null,
                "confidence": 0.15498399139920127,
                "availableQuantities": [
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 156.0,
                        "totalProfit": 2743.8125
                    },
                    "30000000": {
                        "totalPrice": 234.0,
                        "totalProfit": 4137.53564453125
                    },
                    "50000000": {
                        "totalPrice": 390.0,
                        "totalProfit": 6924.80908203125
                    }
                }
            },
            {
                "id": "640496",
                "name": "중증질환자(뇌혈관질환) 산정특례대상 진단비(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.10488506139604628,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 410.0,
                        "totalProfit": 16869.4296875
                    },
                    "20000000": {
                        "totalPrice": 820.0,
                        "totalProfit": 33782.12890625
                    },
                    "30000000": {
                        "totalPrice": 1230.0,
                        "totalProfit": 50694.828125
                    }
                }
            },
            {
                "id": "632137",
                "name": "131대질병수술비(치핵)",
                "theme": "수술",
                "confidence": 0.09654272168581028,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 105.0,
                        "totalProfit": 624.7210083007812
                    },
                    "200000": {
                        "totalPrice": 210.0,
                        "totalProfit": 1292.4053955078125
                    },
                    "300000": {
                        "totalPrice": 315.0,
                        "totalProfit": 1960.3560791015625
                    }
                }
            },
            {
                "id": "630670",
                "name": "추간판장애(디스크질환)수술비",
                "theme": "수술",
                "confidence": 0.05907662591856844,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 976.0,
                        "totalProfit": 29845.291015625
                    },
                    "2000000": {
                        "totalPrice": 1952.0,
                        "totalProfit": 59734.12109375
                    }
                }
            },
            {
                "id": "630022",
                "name": "질병수술위로금",
                "theme": "수술",
                "confidence": 0.08038384925897127,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1684.0,
                        "totalProfit": 3627.828125
                    },
                    "200000": {
                        "totalPrice": 3368.0,
                        "totalProfit": 7298.90087890625
                    },
                    "300000": {
                        "totalPrice": 5052.0,
                        "totalProfit": 10970.2822265625
                    },
                    "500000": {
                        "totalPrice": 8420.0,
                        "totalProfit": 18312.6015625
                    },
                    "1000000": {
                        "totalPrice": 16840.0,
                        "totalProfit": 36668.44921875
                    }
                }
            },
            {
                "id": "631226",
                "name": "수술비(1~5종)[질병1종]",
                "theme": "수술",
                "confidence": 0.032783609694575125,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 607.0,
                        "totalProfit": -3278.587890625
                    },
                    "200000": {
                        "totalPrice": 1214.0,
                        "totalProfit": -6513.9228515625
                    }
                }
            },
            {
                "id": "610766",
                "name": "상급종합병원일반상해입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.0061004336548729715,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    70000,
                    100000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 98.0,
                        "totalProfit": 1926.0357666015625
                    },
                    "30000": {
                        "totalPrice": 147.0,
                        "totalProfit": 2910.723388671875
                    },
                    "50000": {
                        "totalPrice": 245.0,
                        "totalProfit": 4880.0947265625
                    },
                    "70000": {
                        "totalPrice": 343.0,
                        "totalProfit": 6849.26220703125
                    },
                    "100000": {
                        "totalPrice": 490.0,
                        "totalProfit": 9803.435546875
                    }
                }
            },
            {
                "id": "632649",
                "name": "혈전용해치료비Ⅱ(특정심장질환)",
                "theme": "기타",
                "confidence": 0.1360180501733769,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 80.0,
                        "totalProfit": -1250.73046875
                    },
                    "5000000": {
                        "totalPrice": 200.0,
                        "totalProfit": -3061.450927734375
                    },
                    "10000000": {
                        "totalPrice": 400.0,
                        "totalProfit": -6079.3984375
                    }
                }
            },
            {
                "id": "633335",
                "name": "고혈압(원발성)대상질병진단비[중증 고혈압(원발성)]",
                "theme": "기타",
                "confidence": 0.0034991566953214287,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 160.0,
                        "totalProfit": 2710.328369140625
                    },
                    "2000000": {
                        "totalPrice": 320.0,
                        "totalProfit": 5464.18505859375
                    }
                }
            },
            {
                "id": "633380",
                "name": "암진단비(유사암제외)(면책기간미적용)",
                "theme": "3대진단",
                "confidence": 0.00043554072785341425,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1139.0,
                        "totalProfit": 22667.07421875
                    },
                    "10000000": {
                        "totalPrice": 11390.0,
                        "totalProfit": 227061.703125
                    },
                    "20000000": {
                        "totalPrice": 22780.0,
                        "totalProfit": 454166.6875
                    },
                    "30000000": {
                        "totalPrice": 34170.0,
                        "totalProfit": 681271.625
                    },
                    "50000000": {
                        "totalPrice": 56950.0,
                        "totalProfit": 1135481.625
                    }
                }
            },
            {
                "id": "633389",
                "name": "항암방사선약물치료비(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.05893228658698916,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 972.0,
                        "totalProfit": 18806.0859375
                    },
                    "3000000": {
                        "totalPrice": 1458.0,
                        "totalProfit": 28231.06640625
                    },
                    "5000000": {
                        "totalPrice": 2430.0,
                        "totalProfit": 47080.67578125
                    },
                    "10000000": {
                        "totalPrice": 4860.0,
                        "totalProfit": 94204.6015625
                    },
                    "20000000": {
                        "totalPrice": 9720.0,
                        "totalProfit": 188452.46875
                    }
                }
            },
            {
                "id": "633388",
                "name": "암수술비(유사암제외)(면책기간미적용)",
                "theme": "수술",
                "confidence": 0.01749834454142043,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000,
                    6000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 1628.0,
                        "totalProfit": 25357.494140625
                    },
                    "3000000": {
                        "totalPrice": 2442.0,
                        "totalProfit": 38058.04296875
                    },
                    "5000000": {
                        "totalPrice": 4070.0,
                        "totalProfit": 63458.83203125
                    },
                    "6000000": {
                        "totalPrice": 4884.0,
                        "totalProfit": 76159.375
                    },
                    "10000000": {
                        "totalPrice": 8140.0,
                        "totalProfit": 126961.2109375
                    }
                }
            },
            {
                "id": "630026",
                "name": "질병입원일당",
                "theme": "입원일당",
                "confidence": 0.015011956873433886,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 2850.0,
                        "totalProfit": 72260.34375
                    },
                    "20000": {
                        "totalPrice": 5700.0,
                        "totalProfit": 144564.21875
                    },
                    "30000": {
                        "totalPrice": 8550.0,
                        "totalProfit": 216868.078125
                    },
                    "40000": {
                        "totalPrice": 11400.0,
                        "totalProfit": 289171.96875
                    },
                    "50000": {
                        "totalPrice": 14250.0,
                        "totalProfit": 361475.84375
                    }
                }
            },
            {
                "id": "630239",
                "name": "말기폐질환진단비",
                "theme": "기타",
                "confidence": 0.003208160939445657,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 5080.0,
                        "totalProfit": 108188.703125
                    },
                    "10000000": {
                        "totalPrice": 10160.0,
                        "totalProfit": 216420.59375
                    },
                    "20000000": {
                        "totalPrice": 20320.0,
                        "totalProfit": 432884.75
                    },
                    "30000000": {
                        "totalPrice": 30480.0,
                        "totalProfit": 649348.9375
                    },
                    "50000000": {
                        "totalPrice": 50800.0,
                        "totalProfit": 1082277.0
                    }
                }
            },
            {
                "id": "631230",
                "name": "수술비(1~5종)[질병5종]",
                "theme": "수술",
                "confidence": 0.032783609694575125,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 2322.0,
                        "totalProfit": 49261.07421875
                    },
                    "5000000": {
                        "totalPrice": 3870.0,
                        "totalProfit": 82130.46875
                    },
                    "10000000": {
                        "totalPrice": 7740.0,
                        "totalProfit": 164304.421875
                    }
                }
            },
            {
                "id": "631227",
                "name": "수술비(1~5종)[질병2종]",
                "theme": "수술",
                "confidence": 0.032783609694575125,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 321.0,
                        "totalProfit": -25697.525390625
                    },
                    "200000": {
                        "totalPrice": 642.0,
                        "totalProfit": -51351.796875
                    },
                    "300000": {
                        "totalPrice": 963.0,
                        "totalProfit": -77006.0546875
                    }
                }
            },
            {
                "id": "631726",
                "name": "항암세기조절방사선치료비",
                "theme": "3대진단",
                "confidence": 0.2136416187784835,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 110.0,
                        "totalProfit": 7353.5693359375
                    },
                    "20000000": {
                        "totalPrice": 220.0,
                        "totalProfit": 14750.458984375
                    }
                }
            },
            {
                "id": "610464",
                "name": "상해흉터복원수술비",
                "theme": "수술",
                "confidence": 0.014473595410433642,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 4000.0,
                        "totalProfit": 127136.625
                    }
                }
            },
            {
                "id": "610832",
                "name": "수술비(1~5종)[상해1종]",
                "theme": "수술",
                "confidence": 0.006778855225017485,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 197.0,
                        "totalProfit": 4321.47998046875
                    },
                    "200000": {
                        "totalPrice": 394.0,
                        "totalProfit": 8686.3857421875
                    }
                }
            },
            {
                "id": "633334",
                "name": "고혈압(원발성)대상질병진단비[중등증이상 고혈압(원발성)]",
                "theme": "기타",
                "confidence": 0.0034991566953214287,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1120.0,
                        "totalProfit": 18864.296875
                    }
                }
            },
            {
                "id": "630144",
                "name": "질병사망(Ⅱ)",
                "theme": "사망후유",
                "confidence": 0.007109248535210458,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 5370.0,
                        "totalProfit": 135865.796875
                    },
                    "20000000": {
                        "totalPrice": 10740.0,
                        "totalProfit": 271775.15625
                    },
                    "30000000": {
                        "totalPrice": 16110.0,
                        "totalProfit": 407684.5625
                    },
                    "50000000": {
                        "totalPrice": 26850.0,
                        "totalProfit": 679503.0
                    },
                    "100000000": {
                        "totalPrice": 53700.0,
                        "totalProfit": 1359049.625
                    }
                }
            }
        ]
    },
    "4": {
        "id": "4",
        "channel": "TM",
        "age": 19,
        "gndr": "여",
        "unt_pd_nm": "간편 3.10.5(세)",
        "silson_discount": [
            {
                "tag": "노후",
                "kmv_adj": -50000.0
            },
            {
                "tag": "유병자",
                "kmv_adj": -150056.12836499998
            },
            {
                "tag": "일반",
                "kmv_adj": -300183.807736
            },
            {
                "tag": "출생전",
                "kmv_adj": -292560.75043533335
            }
        ],
        "items": [
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 3.0,
                "totalProfit": 153.98277282714844
            },
            {
                "id": "632342",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)",
                "quantity": 40000000,
                "theme": "3대진단",
                "totalPrice": 1520.0,
                "totalProfit": -29920.270219
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 2260.0,
                "totalProfit": 54706.265625
            },
            {
                "id": "632505",
                "name": "허혈성심장질환수술비(25%체증형)",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 1155.0,
                "totalProfit": 57699.02734375
            },
            {
                "id": "632339",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)",
                "quantity": 40000000,
                "theme": "3대진단",
                "totalPrice": 6044.0,
                "totalProfit": -320330.527434
            },
            {
                "id": "630228",
                "name": "뇌혈관질환진단",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 7520.0,
                "totalProfit": 76825.6640625
            },
            {
                "id": "632340",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)",
                "quantity": 40000000,
                "theme": "3대진단",
                "totalPrice": 4824.0,
                "totalProfit": -26297.251397
            },
            {
                "id": "632341",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)",
                "quantity": 40000000,
                "theme": "3대진단",
                "totalPrice": 3360.0,
                "totalProfit": -37243.478286
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 13.0,
                "totalProfit": 732.268310546875
            },
            {
                "id": "632504",
                "name": "뇌혈관질환수술비(25%체증형)",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 1503.0,
                "totalProfit": 48800.7578125
            },
            {
                "id": "630527",
                "name": "유사암진단비",
                "quantity": 8000000,
                "theme": "3대진단",
                "totalPrice": 3016.0,
                "totalProfit": 7326.700821
            },
            {
                "id": "631442",
                "name": "계속받는 항암방사선약물치료비(급여)(연간1회한)",
                "quantity": 100000,
                "theme": "기타",
                "totalPrice": 168.0,
                "totalProfit": 7808.044921875
            },
            {
                "id": "632343",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)",
                "quantity": 40000000,
                "theme": "3대진단",
                "totalPrice": 1480.0,
                "totalProfit": -1806.459082
            }
        ],
        "availableItems": [
            {
                "id": "611343",
                "name": "일반상해입원 간병인비용지원(간병인비용 1,500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 2.6053092491538462e-05,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 116.0,
                        "totalProfit": 5613.015625
                    }
                }
            },
            {
                "id": "631397",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.07895925521114504,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 120.0,
                        "totalProfit": -7206.01025390625
                    },
                    "300000": {
                        "totalPrice": 180.0,
                        "totalProfit": -10786.146484375
                    },
                    "400000": {
                        "totalPrice": 240.0,
                        "totalProfit": -14366.2822265625
                    },
                    "500000": {
                        "totalPrice": 300.0,
                        "totalProfit": -17946.41796875
                    }
                }
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.03787709483726703,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 12.0,
                        "totalProfit": 215.8618927001953
                    },
                    "300000": {
                        "totalPrice": 18.0,
                        "totalProfit": 346.6698913574219
                    },
                    "400000": {
                        "totalPrice": 24.0,
                        "totalProfit": 477.46246337890625
                    },
                    "500000": {
                        "totalPrice": 30.0,
                        "totalProfit": 608.2704467773438
                    }
                }
            },
            {
                "id": "610918",
                "name": "골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.02487466131198821,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 89.0,
                        "totalProfit": 292.4056701660156
                    },
                    "200000": {
                        "totalPrice": 178.0,
                        "totalProfit": 630.5221557617188
                    },
                    "300000": {
                        "totalPrice": 267.0,
                        "totalProfit": 968.6664428710938
                    },
                    "500000": {
                        "totalPrice": 445.0,
                        "totalProfit": 1644.92724609375
                    },
                    "1000000": {
                        "totalPrice": 890.0,
                        "totalProfit": 3335.55126953125
                    }
                }
            },
            {
                "id": "633332",
                "name": "당뇨병진단비Ⅱ[당화혈색소 11.0%이상]",
                "theme": "기타",
                "confidence": 0.008303904002401184,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 70.0,
                        "totalProfit": -2988.156005859375
                    },
                    "1000000": {
                        "totalPrice": 140.0,
                        "totalProfit": -5930.6298828125
                    },
                    "2000000": {
                        "totalPrice": 280.0,
                        "totalProfit": -11815.5625
                    },
                    "3000000": {
                        "totalPrice": 420.0,
                        "totalProfit": -17700.49609375
                    },
                    "5000000": {
                        "totalPrice": 700.0,
                        "totalProfit": -29470.361328125
                    }
                }
            },
            {
                "id": "610468",
                "name": "중대상해수술비",
                "theme": "수술",
                "confidence": 0.0076857258810288,
                "availableQuantities": [
                    3000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 99.0,
                        "totalProfit": 6611.791015625
                    },
                    "5000000": {
                        "totalPrice": 165.0,
                        "totalProfit": 11050.1337890625
                    },
                    "10000000": {
                        "totalPrice": 330.0,
                        "totalProfit": 22145.962890625
                    },
                    "20000000": {
                        "totalPrice": 660.0,
                        "totalProfit": 44337.65234375
                    }
                }
            },
            {
                "id": "633116",
                "name": "질병입원 간병인비용지원(간병인비용 500만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.013327008084249269,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1083.0,
                        "totalProfit": 67641.9296875
                    }
                }
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "theme": "골절/화상",
                "confidence": 0.024692234406203804,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 69.0,
                        "totalProfit": 1336.2835693359375
                    },
                    "200000": {
                        "totalPrice": 138.0,
                        "totalProfit": 2718.263671875
                    }
                }
            },
            {
                "id": "610933",
                "name": "신화상치료비(중증화상및부식진단비)",
                "theme": "골절/화상",
                "confidence": 0.024692234406203804,
                "availableQuantities": [
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 1230.850830078125
                    },
                    "30000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 1869.1455078125
                    },
                    "50000000": {
                        "totalPrice": 50.0,
                        "totalProfit": 3145.73486328125
                    }
                }
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "theme": "입원일당",
                "confidence": 0.010272962198802714,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 685.0,
                        "totalProfit": 28052.900390625
                    },
                    "20000": {
                        "totalPrice": 1370.0,
                        "totalProfit": 56151.5078125
                    },
                    "30000": {
                        "totalPrice": 2055.0,
                        "totalProfit": 84250.140625
                    },
                    "40000": {
                        "totalPrice": 2740.0,
                        "totalProfit": 112348.75
                    },
                    "50000": {
                        "totalPrice": 3425.0,
                        "totalProfit": 140447.390625
                    }
                }
            },
            {
                "id": "630228",
                "name": "뇌혈관질환진단",
                "theme": "3대진단",
                "confidence": 0.047713989769415655,
                "availableQuantities": [
                    5000000,
                    10000000,
                    15000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 1880.0,
                        "totalProfit": 19172.140625
                    },
                    "10000000": {
                        "totalPrice": 3760.0,
                        "totalProfit": 38389.97265625
                    },
                    "15000000": {
                        "totalPrice": 5640.0,
                        "totalProfit": 57607.83203125
                    },
                    "20000000": {
                        "totalPrice": 7520.0,
                        "totalProfit": 76825.6640625
                    },
                    "30000000": {
                        "totalPrice": 11280.0,
                        "totalProfit": 115261.3671875
                    }
                }
            },
            {
                "id": "633315",
                "name": "질병입원 간병인비용지원(간병인비용 500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0006563624967611538,
                "availableQuantities": [
                    400000,
                    1000000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 481.0,
                        "totalProfit": 27550.251953125
                    },
                    "1000000": {
                        "totalPrice": 1203.0,
                        "totalProfit": 68987.5390625
                    }
                }
            },
            {
                "id": "631807",
                "name": "수술비(1~7종, 연간3회한)[질병6종]",
                "theme": "수술",
                "confidence": 0.13256552663396276,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000,
                    6000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 820.0,
                        "totalProfit": 18354.83984375
                    },
                    "3000000": {
                        "totalPrice": 1230.0,
                        "totalProfit": 27555.13671875
                    },
                    "5000000": {
                        "totalPrice": 2050.0,
                        "totalProfit": 45955.71484375
                    },
                    "6000000": {
                        "totalPrice": 2460.0,
                        "totalProfit": 55155.99609375
                    },
                    "10000000": {
                        "totalPrice": 4100.0,
                        "totalProfit": 91957.15625
                    }
                }
            },
            {
                "id": "633014",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.17987728220269628,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 270.0,
                        "totalProfit": -19273.921875
                    },
                    "200000": {
                        "totalPrice": 540.0,
                        "totalProfit": -38502.12109375
                    }
                }
            },
            {
                "id": "631803",
                "name": "수술비(1~7종, 연간3회한)[질병2종]",
                "theme": "수술",
                "confidence": 0.13256552663396276,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 460.0,
                        "totalProfit": 11524.2861328125
                    },
                    "300000": {
                        "totalPrice": 690.0,
                        "totalProfit": 17309.283203125
                    }
                }
            },
            {
                "id": "610834",
                "name": "수술비(1~5종)[상해3종]",
                "theme": "수술",
                "confidence": 0.0036501528134709536,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 40.0,
                        "totalProfit": -2007.4993896484375
                    },
                    "1000000": {
                        "totalPrice": 80.0,
                        "totalProfit": -3969.30029296875
                    }
                }
            },
            {
                "id": "611018",
                "name": "수술비(1~7종, 연간3회한)[상해7종]",
                "theme": "수술",
                "confidence": 0.026343274433369694,
                "availableQuantities": [
                    5000000,
                    6000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 10.0,
                        "totalProfit": 382.76263427734375
                    },
                    "6000000": {
                        "totalPrice": 12.0,
                        "totalProfit": 468.44659423828125
                    },
                    "10000000": {
                        "totalPrice": 20.0,
                        "totalProfit": 811.2368774414062
                    },
                    "20000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 1668.2125244140625
                    }
                }
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.2968160671346182,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 184.0,
                        "totalProfit": 4718.77685546875
                    },
                    "300000": {
                        "totalPrice": 276.0,
                        "totalProfit": 7101.04150390625
                    },
                    "400000": {
                        "totalPrice": 368.0,
                        "totalProfit": 9483.2783203125
                    },
                    "500000": {
                        "totalPrice": 460.0,
                        "totalProfit": 11865.54296875
                    }
                }
            },
            {
                "id": "631442",
                "name": "계속받는 항암방사선약물치료비(급여)(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.09960523723651439,
                "availableQuantities": [
                    100000,
                    1000000,
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 168.0,
                        "totalProfit": 7808.044921875
                    },
                    "1000000": {
                        "totalPrice": 1678.0,
                        "totalProfit": 78319.9609375
                    },
                    "2000000": {
                        "totalPrice": 3356.0,
                        "totalProfit": 156685.625
                    },
                    "5000000": {
                        "totalPrice": 8390.0,
                        "totalProfit": 391782.65625
                    }
                }
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "theme": "골절/화상",
                "confidence": 0.024692234406203804,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 6.0,
                        "totalProfit": 242.1163787841797
                    },
                    "200000": {
                        "totalPrice": 12.0,
                        "totalProfit": 529.9423828125
                    }
                }
            },
            {
                "id": "611012",
                "name": "수술비(1~7종, 연간3회한)[상해1종]",
                "theme": "수술",
                "confidence": 0.026343274433369694,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 190.0,
                        "totalProfit": 6719.2783203125
                    },
                    "200000": {
                        "totalPrice": 380.0,
                        "totalProfit": 13484.294921875
                    },
                    "300000": {
                        "totalPrice": 570.0,
                        "totalProfit": 20249.3125
                    }
                }
            },
            {
                "id": "630766",
                "name": "허혈성심장질환수술비",
                "theme": "3대진단",
                "confidence": 0.07419291756382308,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 566.0,
                        "totalProfit": 28263.9453125
                    },
                    "10000000": {
                        "totalPrice": 1132.0,
                        "totalProfit": 56573.5859375
                    },
                    "20000000": {
                        "totalPrice": 2264.0,
                        "totalProfit": 113192.890625
                    }
                }
            },
            {
                "id": "631805",
                "name": "수술비(1~7종, 연간3회한)[질병4종]",
                "theme": "수술",
                "confidence": 0.13256552663396276,
                "availableQuantities": [
                    400000,
                    500000,
                    600000,
                    800000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 496.0,
                        "totalProfit": 14971.931640625
                    },
                    "500000": {
                        "totalPrice": 620.0,
                        "totalProfit": 18726.34765625
                    },
                    "600000": {
                        "totalPrice": 744.0,
                        "totalProfit": 22480.75
                    },
                    "800000": {
                        "totalPrice": 992.0,
                        "totalProfit": 29989.5859375
                    },
                    "1000000": {
                        "totalPrice": 1240.0,
                        "totalProfit": 37498.40625
                    }
                }
            },
            {
                "id": "632997",
                "name": "표적항암약물허가치료비Ⅱ(비급여)",
                "theme": "기타",
                "confidence": 0.14116296592463276,
                "availableQuantities": [
                    30000000,
                    50000000,
                    70000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 14274.66796875
                    },
                    "50000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 23821.837890625
                    },
                    "70000000": {
                        "totalPrice": 140.0,
                        "totalProfit": 33368.87109375
                    },
                    "80000000": {
                        "totalPrice": 160.0,
                        "totalProfit": 38142.375
                    },
                    "100000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 47689.5859375
                    }
                }
            },
            {
                "id": "633314",
                "name": "질병입원 간병인비용지원(간병인비용 300만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00037026699761874614,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 428.0,
                        "totalProfit": 24505.974609375
                    }
                }
            },
            {
                "id": "610835",
                "name": "수술비(1~5종)[상해4종]",
                "theme": "수술",
                "confidence": 0.0036501528134709536,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 3.0,
                        "totalProfit": 35.10239791870117
                    },
                    "2000000": {
                        "totalPrice": 5.0,
                        "totalProfit": 29.635845184326172
                    },
                    "3000000": {
                        "totalPrice": 8.0,
                        "totalProfit": 110.44945526123047
                    },
                    "5000000": {
                        "totalPrice": 14.0,
                        "totalProfit": 272.07391357421875
                    }
                }
            },
            {
                "id": "632343",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)",
                "theme": "3대진단",
                "confidence": 0.405725247611644,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 37.0,
                        "totalProfit": -894.7316284179688
                    },
                    "10000000": {
                        "totalPrice": 370.0,
                        "totalProfit": -8535.9501953125
                    },
                    "20000000": {
                        "totalPrice": 740.0,
                        "totalProfit": -17026.162109375
                    },
                    "30000000": {
                        "totalPrice": 1110.0,
                        "totalProfit": -25516.373046875
                    },
                    "50000000": {
                        "totalPrice": 1850.0,
                        "totalProfit": -42496.796875
                    }
                }
            },
            {
                "id": "610912",
                "name": "골절(치아파절제외)진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.02139622168626891,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 313.0,
                        "totalProfit": -2526.10791015625
                    },
                    "200000": {
                        "totalPrice": 626.0,
                        "totalProfit": -5006.5185546875
                    },
                    "300000": {
                        "totalPrice": 939.0,
                        "totalProfit": -7486.9013671875
                    },
                    "500000": {
                        "totalPrice": 1565.0,
                        "totalProfit": -12447.6943359375
                    }
                }
            },
            {
                "id": "631381",
                "name": "중대한재생불량성빈혈진단비",
                "theme": "기타",
                "confidence": 0.018907360926402286,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 9.0,
                        "totalProfit": -33.32179260253906
                    }
                }
            },
            {
                "id": "611265",
                "name": "상급병실(1인실) 종합병원 일반상해수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.013663112337069154,
                "availableQuantities": [
                    20000,
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 2.0,
                        "totalProfit": 4.087106227874756
                    },
                    "100000": {
                        "totalPrice": 10.0,
                        "totalProfit": 203.3771209716797
                    },
                    "200000": {
                        "totalPrice": 20.0,
                        "totalProfit": 452.4928894042969
                    },
                    "300000": {
                        "totalPrice": 30.0,
                        "totalProfit": 701.608642578125
                    }
                }
            },
            {
                "id": "633341",
                "name": "2-3인실 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.05918956507347432,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 274.0,
                        "totalProfit": 9542.6005859375
                    },
                    "50000": {
                        "totalPrice": 685.0,
                        "totalProfit": 23925.1171875
                    }
                }
            },
            {
                "id": "632279",
                "name": "표적항암약물허가치료비Ⅱ",
                "theme": "기타",
                "confidence": 0.17688290346132796,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 17898.3125
                    },
                    "20000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 35842.52734375
                    },
                    "30000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 53786.71875
                    },
                    "50000000": {
                        "totalPrice": 500.0,
                        "totalProfit": 89675.1328125
                    },
                    "100000000": {
                        "totalPrice": 1000.0,
                        "totalProfit": 179396.296875
                    }
                }
            },
            {
                "id": "611015",
                "name": "수술비(1~7종, 연간3회한)[상해4종]",
                "theme": "수술",
                "confidence": 0.026343274433369694,
                "availableQuantities": [
                    400000,
                    500000,
                    600000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 56.0,
                        "totalProfit": 1998.591064453125
                    },
                    "500000": {
                        "totalPrice": 70.0,
                        "totalProfit": 2509.68017578125
                    },
                    "600000": {
                        "totalPrice": 84.0,
                        "totalProfit": 3020.755859375
                    },
                    "1000000": {
                        "totalPrice": 140.0,
                        "totalProfit": 5065.07080078125
                    }
                }
            },
            {
                "id": "611341",
                "name": "일반상해입원 간병인비용지원(간병인비용 700만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 3.102178272193077e-05,
                "availableQuantities": [
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 154.0,
                        "totalProfit": 8172.51171875
                    }
                }
            },
            {
                "id": "633331",
                "name": "당뇨병진단비Ⅱ[당화혈색소 9.0%이상]",
                "theme": "기타",
                "confidence": 0.008303904002401184,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 230.0,
                        "totalProfit": -7444.060546875
                    },
                    "1000000": {
                        "totalPrice": 460.0,
                        "totalProfit": -14842.458984375
                    },
                    "2000000": {
                        "totalPrice": 920.0,
                        "totalProfit": -29639.244140625
                    },
                    "3000000": {
                        "totalPrice": 1380.0,
                        "totalProfit": -44436.03125
                    },
                    "5000000": {
                        "totalPrice": 2300.0,
                        "totalProfit": -74029.6015625
                    }
                }
            },
            {
                "id": "632653",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(특정심장질환)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.25767447776167757,
                "availableQuantities": [
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 21.0,
                        "totalProfit": 237.13038635253906
                    }
                }
            },
            {
                "id": "633234",
                "name": "간병인지원 질병입원일당(Ⅰ)(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.03632069138374294,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 3.0,
                        "totalProfit": 816.5040283203125
                    },
                    "20000": {
                        "totalPrice": 6.0,
                        "totalProfit": 1678.77685546875
                    }
                }
            },
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "theme": "사망후유",
                "confidence": 0.058306377131348466,
                "availableQuantities": [
                    1000000,
                    10000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 3.0,
                        "totalProfit": 153.98277282714844
                    },
                    "10000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 1951.21484375
                    },
                    "50000000": {
                        "totalPrice": 150.0,
                        "totalProfit": 9938.9892578125
                    },
                    "100000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 19923.716796875
                    }
                }
            },
            {
                "id": "611344",
                "name": "일반상해입원 간병인비용지원(간병인비용 2,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 2.9768766425e-05,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 67.0,
                        "totalProfit": 3541.863525390625
                    }
                }
            },
            {
                "id": "633015",
                "name": "상급병실(1인실) 종합병원 질병수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.06920722878505807,
                "availableQuantities": [
                    20000,
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 20.0,
                        "totalProfit": 1068.1839599609375
                    },
                    "100000": {
                        "totalPrice": 100.0,
                        "totalProfit": 5523.86083984375
                    },
                    "200000": {
                        "totalPrice": 200.0,
                        "totalProfit": 11093.4462890625
                    },
                    "300000": {
                        "totalPrice": 300.0,
                        "totalProfit": 16663.044921875
                    }
                }
            },
            {
                "id": "630110",
                "name": "조혈모세포이식수술비",
                "theme": "수술",
                "confidence": 0.008337658463835053,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 50.0,
                        "totalProfit": 2241.011474609375
                    },
                    "20000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 4527.76123046875
                    }
                }
            },
            {
                "id": "632340",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)",
                "theme": "3대진단",
                "confidence": 0.1749560168424132,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 121.0,
                        "totalProfit": -3030.594482421875
                    },
                    "10000000": {
                        "totalPrice": 1206.0,
                        "totalProfit": -30239.701171875
                    },
                    "20000000": {
                        "totalPrice": 2412.0,
                        "totalProfit": -60433.69921875
                    },
                    "30000000": {
                        "totalPrice": 3618.0,
                        "totalProfit": -90627.65625
                    },
                    "50000000": {
                        "totalPrice": 6030.0,
                        "totalProfit": -151015.640625
                    }
                }
            },
            {
                "id": "631443",
                "name": "암직접치료통원일당(상급종합병원)",
                "theme": "입원일당",
                "confidence": 0.05103771099569962,
                "availableQuantities": [
                    50000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1300.0,
                        "totalProfit": 46172.46484375
                    },
                    "100000": {
                        "totalPrice": 2600.0,
                        "totalProfit": 92390.625
                    }
                }
            },
            {
                "id": "633313",
                "name": "질병입원 간병인비용지원(간병인비용 200만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0019579150938034695,
                "availableQuantities": [
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 1259.0,
                        "totalProfit": 52681.33984375
                    }
                }
            },
            {
                "id": "611297",
                "name": "일반상해입원 간병인비용지원(간병인비용 500만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.004926665286239908,
                "availableQuantities": [
                    100000,
                    1000000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 58.0,
                        "totalProfit": 3664.121826171875
                    },
                    "1000000": {
                        "totalPrice": 575.0,
                        "totalProfit": 36619.12109375
                    }
                }
            },
            {
                "id": "611345",
                "name": "2-3인실 상급종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.012681877883123206,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 6.0,
                        "totalProfit": 76.09661865234375
                    },
                    "50000": {
                        "totalPrice": 15.0,
                        "totalProfit": 258.8628845214844
                    }
                }
            },
            {
                "id": "632648",
                "name": "혈전용해치료비Ⅱ(뇌졸중)",
                "theme": "기타",
                "confidence": 0.2246105109007388,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 40.0,
                        "totalProfit": -872.2954711914062
                    },
                    "5000000": {
                        "totalPrice": 100.0,
                        "totalProfit": -2112.136474609375
                    },
                    "10000000": {
                        "totalPrice": 200.0,
                        "totalProfit": -4178.57568359375
                    }
                }
            },
            {
                "id": "611263",
                "name": "간호·간병통합서비스 사용 일반상해입원일당(1일이상180일한도)",
                "theme": "입원일당",
                "confidence": 0.032916189065748454,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 375.0,
                        "totalProfit": -7576.25390625
                    },
                    "70000": {
                        "totalPrice": 525.0,
                        "totalProfit": -10588.4638671875
                    }
                }
            },
            {
                "id": "633319",
                "name": "질병입원 간병인비용지원(간병인비용 2,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00013019582878130657,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 295.0,
                        "totalProfit": 17158.025390625
                    }
                }
            },
            {
                "id": "632140",
                "name": "131대질병수술비(백내장)",
                "theme": "수술",
                "confidence": 0.06741204509687684,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 73.0,
                        "totalProfit": -24916.619140625
                    },
                    "200000": {
                        "totalPrice": 147.0,
                        "totalProfit": -49700.8359375
                    },
                    "300000": {
                        "totalPrice": 220.0,
                        "totalProfit": -74571.7421875
                    }
                }
            },
            {
                "id": "631858",
                "name": "질병수술비(특정5대질병 제외)",
                "theme": "수술",
                "confidence": 0.1128833232868374,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000,
                    600000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1084.0,
                        "totalProfit": 38150.90625
                    },
                    "200000": {
                        "totalPrice": 2168.0,
                        "totalProfit": 76347.5078125
                    },
                    "300000": {
                        "totalPrice": 3252.0,
                        "totalProfit": 114544.1328125
                    },
                    "500000": {
                        "totalPrice": 5420.0,
                        "totalProfit": 190937.359375
                    },
                    "600000": {
                        "totalPrice": 6504.0,
                        "totalProfit": 229133.984375
                    }
                }
            },
            {
                "id": "611342",
                "name": "일반상해입원 간병인비용지원(간병인비용 1,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 3.199898755259231e-05,
                "availableQuantities": [
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 141.0,
                        "totalProfit": 6827.68310546875
                    }
                }
            },
            {
                "id": "631263",
                "name": "종합병원 질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.027165971332629595,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 787.0,
                        "totalProfit": 30426.6328125
                    },
                    "20000": {
                        "totalPrice": 1574.0,
                        "totalProfit": 60898.95703125
                    },
                    "30000": {
                        "totalPrice": 2361.0,
                        "totalProfit": 91371.3125
                    },
                    "40000": {
                        "totalPrice": 3148.0,
                        "totalProfit": 121843.65625
                    },
                    "50000": {
                        "totalPrice": 3935.0,
                        "totalProfit": 152316.015625
                    }
                }
            },
            {
                "id": "630697",
                "name": "암진단비(유사암 제외)",
                "theme": "3대진단",
                "confidence": 0.1425008617196217,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 393.0,
                        "totalProfit": -14409.5546875
                    },
                    "10000000": {
                        "totalPrice": 3930.0,
                        "totalProfit": -143684.125
                    },
                    "20000000": {
                        "totalPrice": 7860.0,
                        "totalProfit": -287322.5
                    },
                    "30000000": {
                        "totalPrice": 11790.0,
                        "totalProfit": -430960.90625
                    },
                    "50000000": {
                        "totalPrice": 19650.0,
                        "totalProfit": -718237.6875
                    }
                }
            },
            {
                "id": "630763",
                "name": "뇌혈관질환 수술비",
                "theme": "수술",
                "confidence": 0.07349615289213263,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 728.0,
                        "totalProfit": 23921.7265625
                    },
                    "10000000": {
                        "totalPrice": 1455.0,
                        "totalProfit": 47802.46875
                    },
                    "20000000": {
                        "totalPrice": 2910.0,
                        "totalProfit": 95650.6328125
                    }
                }
            },
            {
                "id": "632520",
                "name": "131대질병수술비(다빈도62대질병)",
                "theme": "수술",
                "confidence": 0.18945410658223477,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 672.0,
                        "totalProfit": 15821.3662109375
                    },
                    "300000": {
                        "totalPrice": 1008.0,
                        "totalProfit": 23754.935546875
                    },
                    "500000": {
                        "totalPrice": 1680.0,
                        "totalProfit": 39622.0234375
                    }
                }
            },
            {
                "id": "611013",
                "name": "수술비(1~7종, 연간3회한)[상해2종]",
                "theme": "수술",
                "confidence": 0.026343274433369694,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 120.0,
                        "totalProfit": 4899.2021484375
                    },
                    "300000": {
                        "totalPrice": 180.0,
                        "totalProfit": 7371.68017578125
                    }
                }
            },
            {
                "id": "632349",
                "name": "암수술비(유사암제외)(25%체증형)",
                "theme": "수술",
                "confidence": 0.22433661233618943,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 403.0,
                        "totalProfit": -7108.05517578125
                    },
                    "2000000": {
                        "totalPrice": 806.0,
                        "totalProfit": -14170.4140625
                    },
                    "3000000": {
                        "totalPrice": 1209.0,
                        "totalProfit": -21232.744140625
                    },
                    "5000000": {
                        "totalPrice": 2015.0,
                        "totalProfit": -35357.41796875
                    },
                    "10000000": {
                        "totalPrice": 4030.0,
                        "totalProfit": -70669.140625
                    }
                }
            },
            {
                "id": "610487",
                "name": "5대골절진단비",
                "theme": "골절/화상",
                "confidence": 0.0060135053346131,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 310.0,
                        "totalProfit": 4824.4189453125
                    },
                    "1000000": {
                        "totalPrice": 620.0,
                        "totalProfit": 9694.5341796875
                    },
                    "2000000": {
                        "totalPrice": 1240.0,
                        "totalProfit": 19434.79296875
                    },
                    "3000000": {
                        "totalPrice": 1860.0,
                        "totalProfit": 29175.052734375
                    }
                }
            },
            {
                "id": "610836",
                "name": "수술비(1~5종)[상해5종]",
                "theme": "수술",
                "confidence": 0.0036501528134709536,
                "availableQuantities": [
                    3000000,
                    5000000,
                    6000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 2.0,
                        "totalProfit": -628.58251953125
                    },
                    "5000000": {
                        "totalPrice": 4.0,
                        "totalProfit": -959.6508178710938
                    },
                    "6000000": {
                        "totalPrice": 5.0,
                        "totalProfit": -1125.16943359375
                    },
                    "10000000": {
                        "totalPrice": 8.0,
                        "totalProfit": -1873.583251953125
                    }
                }
            },
            {
                "id": "632277",
                "name": "계속받는 표적항암약물허가치료비Ⅱ(연간1회한)",
                "theme": "기타",
                "confidence": 0.028343279797022176,
                "availableQuantities": [
                    10000000,
                    20000000,
                    50000000,
                    70000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 180.0,
                        "totalProfit": 54980.31640625
                    },
                    "20000000": {
                        "totalPrice": 360.0,
                        "totalProfit": 110006.8515625
                    },
                    "50000000": {
                        "totalPrice": 900.0,
                        "totalProfit": 275086.25
                    },
                    "70000000": {
                        "totalPrice": 1260.0,
                        "totalProfit": 385139.15625
                    },
                    "100000000": {
                        "totalPrice": 1800.0,
                        "totalProfit": 550218.6875
                    }
                }
            },
            {
                "id": "631802",
                "name": "수술비(1~7종, 연간3회한)[질병1종]",
                "theme": "수술",
                "confidence": 0.13256552663396276,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1750.0,
                        "totalProfit": 57662.2109375
                    },
                    "200000": {
                        "totalPrice": 3500.0,
                        "totalProfit": 115370.1640625
                    },
                    "300000": {
                        "totalPrice": 5250.0,
                        "totalProfit": 173078.109375
                    }
                }
            },
            {
                "id": "632481",
                "name": "전이암진단비(특정전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.1269091658954174,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 925.0,
                        "totalProfit": -41876.30078125
                    },
                    "10000000": {
                        "totalPrice": 1850.0,
                        "totalProfit": -83706.8984375
                    }
                }
            },
            {
                "id": "630331",
                "name": "질병고도후유장해",
                "theme": "사망후유",
                "confidence": 0.009841710099527577,
                "availableQuantities": [
                    1000000,
                    10000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 55.0,
                        "totalProfit": 1849.4248046875
                    },
                    "10000000": {
                        "totalPrice": 548.0,
                        "totalProfit": 18733.794921875
                    },
                    "30000000": {
                        "totalPrice": 1644.0,
                        "totalProfit": 56292.8359375
                    },
                    "50000000": {
                        "totalPrice": 2740.0,
                        "totalProfit": 93851.859375
                    },
                    "100000000": {
                        "totalPrice": 5480.0,
                        "totalProfit": 187749.4375
                    }
                }
            },
            {
                "id": "632504",
                "name": "뇌혈관질환수술비(25%체증형)",
                "theme": "수술",
                "confidence": 0.23683213328302297,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 301.0,
                        "totalProfit": 9758.111328125
                    },
                    "5000000": {
                        "totalPrice": 752.0,
                        "totalProfit": 24420.6640625
                    },
                    "10000000": {
                        "totalPrice": 1503.0,
                        "totalProfit": 48800.7578125
                    },
                    "20000000": {
                        "totalPrice": 3006.0,
                        "totalProfit": 97647.2109375
                    }
                }
            },
            {
                "id": "633339",
                "name": "2-3인실 상급종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.059311857487251145,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 92.0,
                        "totalProfit": 2268.9375
                    },
                    "50000": {
                        "totalPrice": 230.0,
                        "totalProfit": 5740.9599609375
                    }
                }
            },
            {
                "id": "632995",
                "name": "계속받는 표적항암약물허가치료비Ⅱ(연간1회한)(비급여)",
                "theme": "기타",
                "confidence": 0.021008726640531092,
                "availableQuantities": [
                    10000000,
                    30000000,
                    50000000,
                    80000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 15738.984375
                    },
                    "30000000": {
                        "totalPrice": 120.0,
                        "totalProfit": 47309.15625
                    },
                    "50000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 78879.625
                    },
                    "80000000": {
                        "totalPrice": 320.0,
                        "totalProfit": 126234.9375
                    },
                    "100000000": {
                        "totalPrice": 400.0,
                        "totalProfit": 157805.4375
                    }
                }
            },
            {
                "id": "630222",
                "name": "뇌졸중진단비",
                "theme": "3대진단",
                "confidence": 0.013710476677541208,
                "availableQuantities": [
                    5000000,
                    10000000,
                    15000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 895.0,
                        "totalProfit": 17553.48828125
                    },
                    "10000000": {
                        "totalPrice": 1790.0,
                        "totalProfit": 35152.6875
                    },
                    "15000000": {
                        "totalPrice": 2685.0,
                        "totalProfit": 52751.8984375
                    },
                    "20000000": {
                        "totalPrice": 3580.0,
                        "totalProfit": 70351.09375
                    },
                    "30000000": {
                        "totalPrice": 5370.0,
                        "totalProfit": 105549.5
                    }
                }
            },
            {
                "id": "632134",
                "name": "131대질병수술비(특정31대질병)",
                "theme": "수술",
                "confidence": 0.06741204509687684,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 224.0,
                        "totalProfit": 8934.6826171875
                    },
                    "2000000": {
                        "totalPrice": 448.0,
                        "totalProfit": 17915.056640625
                    },
                    "3000000": {
                        "totalPrice": 672.0,
                        "totalProfit": 26895.4765625
                    },
                    "5000000": {
                        "totalPrice": 1120.0,
                        "totalProfit": 44856.2734375
                    }
                }
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    1000000,
                    10000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 13.0,
                        "totalProfit": 732.268310546875
                    },
                    "10000000": {
                        "totalPrice": 130.0,
                        "totalProfit": 7734.1767578125
                    },
                    "50000000": {
                        "totalPrice": 650.0,
                        "totalProfit": 38853.8046875
                    },
                    "100000000": {
                        "totalPrice": 1300.0,
                        "totalProfit": 77753.3359375
                    }
                }
            },
            {
                "id": "631724",
                "name": "항암양성자방사선치료비",
                "theme": "3대진단",
                "confidence": 0.1750307680924429,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 8758.765625
                    },
                    "20000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 17563.587890625
                    },
                    "30000000": {
                        "totalPrice": 90.0,
                        "totalProfit": 26368.4140625
                    }
                }
            },
            {
                "id": "640047",
                "name": "인공관절수술비",
                "theme": "수술",
                "confidence": 0.10593279205394793,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 95.0,
                        "totalProfit": 2731.008056640625
                    },
                    "2000000": {
                        "totalPrice": 190.0,
                        "totalProfit": 5507.71435546875
                    }
                }
            },
            {
                "id": "633330",
                "name": "당뇨병진단비Ⅱ[당화혈색소 7.0%이상]",
                "theme": "기타",
                "confidence": 0.008303904002401184,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 675.0,
                        "totalProfit": 21188.57421875
                    },
                    "1000000": {
                        "totalPrice": 1350.0,
                        "totalProfit": 42422.83203125
                    },
                    "2000000": {
                        "totalPrice": 2700.0,
                        "totalProfit": 84891.359375
                    }
                }
            },
            {
                "id": "632480",
                "name": "전이암진단비(림프절전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.1269091658954174,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 1085.0,
                        "totalProfit": -107326.3359375
                    },
                    "10000000": {
                        "totalPrice": 2170.0,
                        "totalProfit": -214606.984375
                    }
                }
            },
            {
                "id": "611264",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.0351205864687396,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 50.0,
                        "totalProfit": -15236.7138671875
                    },
                    "200000": {
                        "totalPrice": 100.0,
                        "totalProfit": -30427.703125
                    }
                }
            },
            {
                "id": "633122",
                "name": "간호·간병통합서비스 사용 질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.05601478846658385,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 8.0,
                        "totalProfit": 188.71897888183594
                    },
                    "70000": {
                        "totalPrice": 11.0,
                        "totalProfit": 265.1739807128906
                    }
                }
            },
            {
                "id": "632341",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.2518790937654901,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 84.0,
                        "totalProfit": -2705.72509765625
                    },
                    "10000000": {
                        "totalPrice": 840.0,
                        "totalProfit": -26645.833984375
                    },
                    "20000000": {
                        "totalPrice": 1680.0,
                        "totalProfit": -53245.9453125
                    },
                    "30000000": {
                        "totalPrice": 2520.0,
                        "totalProfit": -79846.0390625
                    },
                    "50000000": {
                        "totalPrice": 4200.0,
                        "totalProfit": -133046.25
                    }
                }
            },
            {
                "id": "632342",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.3288021706885671,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 38.0,
                        "totalProfit": -1654.6551513671875
                    },
                    "10000000": {
                        "totalPrice": 380.0,
                        "totalProfit": -16135.1845703125
                    },
                    "20000000": {
                        "totalPrice": 760.0,
                        "totalProfit": -32224.6328125
                    },
                    "30000000": {
                        "totalPrice": 1140.0,
                        "totalProfit": -48314.09765625
                    },
                    "50000000": {
                        "totalPrice": 1900.0,
                        "totalProfit": -80492.9921875
                    }
                }
            },
            {
                "id": "611302",
                "name": "간병인사용 일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.017670769975460653,
                "availableQuantities": [
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "150000": {
                        "totalPrice": 3.0,
                        "totalProfit": 65.83584594726562
                    }
                }
            },
            {
                "id": "632505",
                "name": "허혈성심장질환수술비(25%체증형)",
                "theme": "수술",
                "confidence": 0.31300094797622474,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 231.0,
                        "totalProfit": 11503.2373046875
                    },
                    "5000000": {
                        "totalPrice": 578.0,
                        "totalProfit": 28869.99609375
                    },
                    "10000000": {
                        "totalPrice": 1155.0,
                        "totalProfit": 57699.02734375
                    },
                    "20000000": {
                        "totalPrice": 2310.0,
                        "totalProfit": 115443.7421875
                    }
                }
            },
            {
                "id": "632339",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)",
                "theme": "3대진단",
                "confidence": 0.09803293991933629,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 151.0,
                        "totalProfit": -11541.7998046875
                    },
                    "10000000": {
                        "totalPrice": 1511.0,
                        "totalProfit": -114919.8828125
                    },
                    "20000000": {
                        "totalPrice": 3022.0,
                        "totalProfit": -229794.0625
                    },
                    "30000000": {
                        "totalPrice": 4533.0,
                        "totalProfit": -344668.21875
                    },
                    "50000000": {
                        "totalPrice": 7555.0,
                        "totalProfit": -574416.5625
                    }
                }
            },
            {
                "id": "611261",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0341416011337461,
                "availableQuantities": [
                    100000,
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1580.0,
                        "totalProfit": -27707.994140625
                    },
                    "150000": {
                        "totalPrice": 2370.0,
                        "totalProfit": -41539.11328125
                    }
                }
            },
            {
                "id": "611338",
                "name": "일반상해입원 간병인비용지원(간병인비용 200만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0005745552598205385,
                "availableQuantities": [
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 639.0,
                        "totalProfit": 23984.484375
                    }
                }
            },
            {
                "id": "632138",
                "name": "131대질병수술비(뇌혈관질환)",
                "theme": "수술",
                "confidence": 0.06741204509687684,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 145.0,
                        "totalProfit": 4638.025390625
                    },
                    "2000000": {
                        "totalPrice": 290.0,
                        "totalProfit": 9321.7685546875
                    },
                    "3000000": {
                        "totalPrice": 435.0,
                        "totalProfit": 14005.5166015625
                    },
                    "5000000": {
                        "totalPrice": 725.0,
                        "totalProfit": 23373.0234375
                    }
                }
            },
            {
                "id": "610833",
                "name": "수술비(1~5종)[상해2종]",
                "theme": "수술",
                "confidence": 0.0036501528134709536,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 55.0,
                        "totalProfit": -798.5233154296875
                    },
                    "200000": {
                        "totalPrice": 110.0,
                        "totalProfit": -1551.3370361328125
                    },
                    "300000": {
                        "totalPrice": 165.0,
                        "totalProfit": -2304.12158203125
                    }
                }
            },
            {
                "id": "632526",
                "name": "131대질병수술비(유방의장애)",
                "theme": "수술",
                "confidence": 0.18945410658223477,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 25.0,
                        "totalProfit": 278.5302429199219
                    },
                    "300000": {
                        "totalPrice": 37.0,
                        "totalProfit": 397.31292724609375
                    },
                    "500000": {
                        "totalPrice": 62.0,
                        "totalProfit": 721.5519409179688
                    }
                }
            },
            {
                "id": "611335",
                "name": "일반상해입원 간병인비용지원(간병인비용 200만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.002044237133073977,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1297.0,
                        "totalProfit": 63852.75390625
                    }
                }
            },
            {
                "id": "633233",
                "name": "간병인지원 질병입원일당(Ⅰ)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.04840678136747548,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1901.0,
                        "totalProfit": 355307.84375
                    },
                    "20000": {
                        "totalPrice": 3802.0,
                        "totalProfit": 710661.5
                    }
                }
            },
            {
                "id": "611340",
                "name": "일반상해입원 간병인비용지원(간병인비용 500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00017904022236695384,
                "availableQuantities": [
                    400000,
                    1000000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 238.0,
                        "totalProfit": 13656.4697265625
                    },
                    "1000000": {
                        "totalPrice": 595.0,
                        "totalProfit": 34209.7109375
                    }
                }
            },
            {
                "id": "632136",
                "name": "131대질병수술비(관절염,생식기질환)",
                "theme": "수술",
                "confidence": 0.06741204509687684,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 202.0,
                        "totalProfit": -1987.1956787109375
                    },
                    "200000": {
                        "totalPrice": 404.0,
                        "totalProfit": -3928.684326171875
                    },
                    "300000": {
                        "totalPrice": 606.0,
                        "totalProfit": -5870.14111328125
                    }
                }
            },
            {
                "id": "632139",
                "name": "131대질병수술비(후각특정질환)",
                "theme": "수술",
                "confidence": 0.06741204509687684,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 31.0,
                        "totalProfit": 324.5006408691406
                    },
                    "300000": {
                        "totalPrice": 46.0,
                        "totalProfit": 466.2677917480469
                    }
                }
            },
            {
                "id": "610469",
                "name": "상해중환자실 입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.012089609878172107,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 360.0,
                        "totalProfit": 28103.890625
                    },
                    "100000": {
                        "totalPrice": 720.0,
                        "totalProfit": 56253.4921875
                    },
                    "200000": {
                        "totalPrice": 1440.0,
                        "totalProfit": 112552.71875
                    },
                    "300000": {
                        "totalPrice": 2160.0,
                        "totalProfit": 168851.9375
                    }
                }
            },
            {
                "id": "630019",
                "name": "질병 중환자실입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.013057719691345969,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 55.0,
                        "totalProfit": 311.907958984375
                    },
                    "100000": {
                        "totalPrice": 110.0,
                        "totalProfit": 669.5123291015625
                    },
                    "200000": {
                        "totalPrice": 220.0,
                        "totalProfit": 1384.763427734375
                    },
                    "300000": {
                        "totalPrice": 330.0,
                        "totalProfit": 2100.014404296875
                    }
                }
            },
            {
                "id": "633310",
                "name": "질병입원 간병인비용지원(간병인비용 200만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0071623517600961,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 2400.0,
                        "totalProfit": 122312.1953125
                    }
                }
            },
            {
                "id": "631806",
                "name": "수술비(1~7종, 연간3회한)[질병5종]",
                "theme": "수술",
                "confidence": 0.13256552663396276,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    4000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 330.0,
                        "totalProfit": 7338.17529296875
                    },
                    "2000000": {
                        "totalPrice": 660.0,
                        "totalProfit": 14722.0732421875
                    },
                    "3000000": {
                        "totalPrice": 990.0,
                        "totalProfit": 22105.970703125
                    },
                    "4000000": {
                        "totalPrice": 1320.0,
                        "totalProfit": 29489.869140625
                    },
                    "5000000": {
                        "totalPrice": 1650.0,
                        "totalProfit": 36873.76953125
                    }
                }
            },
            {
                "id": "610488",
                "name": "5대골절수술비",
                "theme": "골절/화상",
                "confidence": 0.004943982178792993,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 24.0,
                        "totalProfit": -396.9734191894531
                    },
                    "500000": {
                        "totalPrice": 40.0,
                        "totalProfit": -631.1477661132812
                    },
                    "1000000": {
                        "totalPrice": 80.0,
                        "totalProfit": -1216.59716796875
                    },
                    "2000000": {
                        "totalPrice": 160.0,
                        "totalProfit": -2387.455810546875
                    }
                }
            },
            {
                "id": "632532",
                "name": "131대질병수술비(편도염)",
                "theme": "수술",
                "confidence": 0.18945410658223477,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 20.0,
                        "totalProfit": 572.1356811523438
                    },
                    "300000": {
                        "totalPrice": 29.0,
                        "totalProfit": 794.3671264648438
                    },
                    "500000": {
                        "totalPrice": 49.0,
                        "totalProfit": 1412.20947265625
                    }
                }
            },
            {
                "id": "632133",
                "name": "131대질병수술비(심장질환)",
                "theme": "수술",
                "confidence": 0.06741204509687684,
                "availableQuantities": [
                    1000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 146.0,
                        "totalProfit": 6586.08056640625
                    },
                    "3000000": {
                        "totalPrice": 438.0,
                        "totalProfit": 19849.69140625
                    },
                    "5000000": {
                        "totalPrice": 730.0,
                        "totalProfit": 33113.30078125
                    }
                }
            },
            {
                "id": "630971",
                "name": "질병후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.027432303598776797,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 546.0,
                        "totalProfit": -60549.7890625
                    },
                    "10000000": {
                        "totalPrice": 5460.0,
                        "totalProfit": -605086.5
                    },
                    "20000000": {
                        "totalPrice": 10920.0,
                        "totalProfit": -1210127.25
                    },
                    "30000000": {
                        "totalPrice": 16380.0,
                        "totalProfit": -1815168.0
                    },
                    "50000000": {
                        "totalPrice": 27300.0,
                        "totalProfit": -3025249.5
                    }
                }
            },
            {
                "id": "630527",
                "name": "유사암진단비",
                "theme": "3대진단",
                "confidence": 0.1517139487754451,
                "availableQuantities": [
                    100000,
                    2000000,
                    4000000,
                    6000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 38.0,
                        "totalProfit": -171.59716796875
                    },
                    "2000000": {
                        "totalPrice": 754.0,
                        "totalProfit": -3083.6328125
                    },
                    "4000000": {
                        "totalPrice": 1508.0,
                        "totalProfit": -6121.54150390625
                    },
                    "6000000": {
                        "totalPrice": 2262.0,
                        "totalProfit": -9159.4501953125
                    },
                    "10000000": {
                        "totalPrice": 3770.0,
                        "totalProfit": -15235.2529296875
                    }
                }
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.033916516214470595,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 490.0,
                        "totalProfit": 4408.2197265625
                    },
                    "200000": {
                        "totalPrice": 980.0,
                        "totalProfit": 8862.1474609375
                    },
                    "300000": {
                        "totalPrice": 1470.0,
                        "totalProfit": 13316.10546875
                    },
                    "400000": {
                        "totalPrice": 1960.0,
                        "totalProfit": 17770.033203125
                    },
                    "500000": {
                        "totalPrice": 2450.0,
                        "totalProfit": 22223.9921875
                    }
                }
            },
            {
                "id": "630246",
                "name": "만성당뇨합병증진단비",
                "theme": "기타",
                "confidence": 0.014332636668124562,
                "availableQuantities": [
                    1000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 33.0,
                        "totalProfit": 597.5355224609375
                    },
                    "3000000": {
                        "totalPrice": 99.0,
                        "totalProfit": 1884.0439453125
                    },
                    "5000000": {
                        "totalPrice": 165.0,
                        "totalProfit": 3170.56640625
                    }
                }
            },
            {
                "id": "632986",
                "name": "간호·간병통합서비스 사용 질병입원일당(1일이상180일한도)",
                "theme": "입원일당",
                "confidence": 0.09447647380806427,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1210.0,
                        "totalProfit": 47486.46484375
                    },
                    "70000": {
                        "totalPrice": 1694.0,
                        "totalProfit": 66499.3359375
                    }
                }
            },
            {
                "id": "611017",
                "name": "수술비(1~7종, 연간3회한)[상해6종]",
                "theme": "수술",
                "confidence": 0.026343274433369694,
                "availableQuantities": [
                    3000000,
                    4000000,
                    5000000,
                    6000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 9.0,
                        "totalProfit": 375.7234802246094
                    },
                    "4000000": {
                        "totalPrice": 12.0,
                        "totalProfit": 516.1918334960938
                    },
                    "5000000": {
                        "totalPrice": 15.0,
                        "totalProfit": 656.6887817382812
                    },
                    "6000000": {
                        "totalPrice": 18.0,
                        "totalProfit": 797.1571044921875
                    },
                    "10000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 1359.075439453125
                    }
                }
            },
            {
                "id": "632652",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(뇌졸중)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.25767447776167757,
                "availableQuantities": [
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 42.0,
                        "totalProfit": 334.5216369628906
                    }
                }
            },
            {
                "id": "610781",
                "name": "일반상해후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.01428995737061806,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 290.0,
                        "totalProfit": 11212.138671875
                    },
                    "20000000": {
                        "totalPrice": 580.0,
                        "totalProfit": 22470.015625
                    },
                    "30000000": {
                        "totalPrice": 870.0,
                        "totalProfit": 33727.87890625
                    },
                    "50000000": {
                        "totalPrice": 1450.0,
                        "totalProfit": 56243.62109375
                    },
                    "100000000": {
                        "totalPrice": 2900.0,
                        "totalProfit": 112532.9765625
                    }
                }
            },
            {
                "id": "631808",
                "name": "수술비(1~7종, 연간3회한)[질병7종]",
                "theme": "수술",
                "confidence": 0.13256552663396276,
                "availableQuantities": [
                    5000000,
                    6000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 500.0,
                        "totalProfit": 11233.7578125
                    },
                    "6000000": {
                        "totalPrice": 600.0,
                        "totalProfit": 13489.6474609375
                    },
                    "10000000": {
                        "totalPrice": 1000.0,
                        "totalProfit": 22513.23828125
                    },
                    "20000000": {
                        "totalPrice": 2000.0,
                        "totalProfit": 45072.21484375
                    }
                }
            },
            {
                "id": "610470",
                "name": "상해수술위로금",
                "theme": "수술",
                "confidence": 0.02402200171601458,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 456.0,
                        "totalProfit": 13012.095703125
                    },
                    "300000": {
                        "totalPrice": 684.0,
                        "totalProfit": 19541.025390625
                    },
                    "500000": {
                        "totalPrice": 1140.0,
                        "totalProfit": 32598.845703125
                    },
                    "1000000": {
                        "totalPrice": 2280.0,
                        "totalProfit": 65243.38671875
                    },
                    "2000000": {
                        "totalPrice": 4560.0,
                        "totalProfit": 130532.515625
                    }
                }
            },
            {
                "id": "611262",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원)",
                "theme": "입원일당",
                "confidence": 0.034141983340686896,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 160.0,
                        "totalProfit": 430.560546875
                    }
                }
            },
            {
                "id": "632141",
                "name": "131대질병수술비(특정다빈도29대질병)",
                "theme": "수술",
                "confidence": 0.06741204509687684,
                "availableQuantities": [
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 113.0,
                        "totalProfit": -5651.54638671875
                    },
                    "150000": {
                        "totalPrice": 170.0,
                        "totalProfit": -8411.1201171875
                    },
                    "200000": {
                        "totalPrice": 226.0,
                        "totalProfit": -11257.4052734375
                    }
                }
            },
            {
                "id": "611016",
                "name": "수술비(1~7종, 연간3회한)[상해5종]",
                "theme": "수술",
                "confidence": 0.026343274433369694,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    4000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 50.0,
                        "totalProfit": 1879.982666015625
                    },
                    "2000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 3805.689208984375
                    },
                    "3000000": {
                        "totalPrice": 150.0,
                        "totalProfit": 5731.3955078125
                    },
                    "4000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 7657.10205078125
                    },
                    "5000000": {
                        "totalPrice": 250.0,
                        "totalProfit": 9582.80859375
                    }
                }
            },
            {
                "id": "631228",
                "name": "수술비(1~5종)[질병3종]",
                "theme": "수술",
                "confidence": 0.01765271291246353,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 345.0,
                        "totalProfit": -43162.17578125
                    },
                    "1000000": {
                        "totalPrice": 690.0,
                        "totalProfit": -86278.65625
                    }
                }
            },
            {
                "id": "611309",
                "name": "간병인지원 일반상해입원일당(Ⅰ)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.0069073036594847845,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1720.0,
                        "totalProfit": 137194.8125
                    },
                    "20000": {
                        "totalPrice": 3440.0,
                        "totalProfit": 274435.4375
                    }
                }
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "theme": "3대진단",
                "confidence": 0.123217049446069,
                "availableQuantities": [
                    5000000,
                    10000000,
                    15000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 565.0,
                        "totalProfit": 13642.2802734375
                    },
                    "10000000": {
                        "totalPrice": 1130.0,
                        "totalProfit": 27330.26953125
                    },
                    "15000000": {
                        "totalPrice": 1695.0,
                        "totalProfit": 41018.2734375
                    },
                    "20000000": {
                        "totalPrice": 2260.0,
                        "totalProfit": 54706.265625
                    },
                    "30000000": {
                        "totalPrice": 3390.0,
                        "totalProfit": 82082.2578125
                    }
                }
            },
            {
                "id": "611301",
                "name": "일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.0010865780728164924,
                "availableQuantities": [
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 2.0,
                        "totalProfit": 37.990665435791016
                    }
                }
            },
            {
                "id": "631560",
                "name": "양성뇌종양진단비Ⅱ",
                "theme": "기타",
                "confidence": 0.08399921308172532,
                "availableQuantities": [
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 96.0,
                        "totalProfit": -3644.412353515625
                    },
                    "5000000": {
                        "totalPrice": 240.0,
                        "totalProfit": -9042.412109375
                    }
                }
            },
            {
                "id": "611346",
                "name": "2-3인실 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.012587346727711399,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 86.0,
                        "totalProfit": 2616.447021484375
                    },
                    "50000": {
                        "totalPrice": 215.0,
                        "totalProfit": 6609.7265625
                    }
                }
            },
            {
                "id": "633120",
                "name": "질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.0063265754638033534,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 9.0,
                        "totalProfit": 404.66552734375
                    },
                    "20000": {
                        "totalPrice": 18.0,
                        "totalProfit": 855.025146484375
                    }
                }
            },
            {
                "id": "631138",
                "name": "유사암수술비",
                "theme": "수술",
                "confidence": 0.04502051837280164,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    4000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 278.0,
                        "totalProfit": -19994.107421875
                    },
                    "2000000": {
                        "totalPrice": 556.0,
                        "totalProfit": -39942.50390625
                    },
                    "3000000": {
                        "totalPrice": 834.0,
                        "totalProfit": -59890.87109375
                    },
                    "4000000": {
                        "totalPrice": 1112.0,
                        "totalProfit": -79839.265625
                    },
                    "5000000": {
                        "totalPrice": 1390.0,
                        "totalProfit": -99787.6484375
                    }
                }
            },
            {
                "id": "631804",
                "name": "수술비(1~7종, 연간3회한)[질병3종]",
                "theme": "수술",
                "confidence": 0.13256552663396276,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 288.0,
                        "totalProfit": 5140.75732421875
                    },
                    "400000": {
                        "totalPrice": 384.0,
                        "totalProfit": 6869.580078125
                    },
                    "500000": {
                        "totalPrice": 480.0,
                        "totalProfit": 8598.4169921875
                    }
                }
            },
            {
                "id": "631229",
                "name": "수술비(1~5종)[질병4종]",
                "theme": "수술",
                "confidence": 0.01765271291246353,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 70.0,
                        "totalProfit": -5556.03955078125
                    },
                    "2000000": {
                        "totalPrice": 140.0,
                        "totalProfit": -11066.365234375
                    },
                    "3000000": {
                        "totalPrice": 210.0,
                        "totalProfit": -16576.666015625
                    },
                    "5000000": {
                        "totalPrice": 350.0,
                        "totalProfit": -27597.306640625
                    }
                }
            },
            {
                "id": "611014",
                "name": "수술비(1~7종, 연간3회한)[상해3종]",
                "theme": "수술",
                "confidence": 0.026343274433369694,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 66.0,
                        "totalProfit": 2453.2421875
                    },
                    "400000": {
                        "totalPrice": 88.0,
                        "totalProfit": 3286.222412109375
                    },
                    "500000": {
                        "totalPrice": 110.0,
                        "totalProfit": 4119.2158203125
                    }
                }
            },
            {
                "id": "640045",
                "name": "각막이식수술비",
                "theme": "수술",
                "confidence": 0.13684012597119272,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 4.0,
                        "totalProfit": -34.40664291381836
                    },
                    "20000000": {
                        "totalPrice": 8.0,
                        "totalProfit": -23.114341735839844
                    }
                }
            },
            {
                "id": "640056",
                "name": "5대장기이식수술비",
                "theme": null,
                "confidence": 0.16501136638223796,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000,
                    40000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 35.0,
                        "totalProfit": 782.8287963867188
                    },
                    "20000000": {
                        "totalPrice": 70.0,
                        "totalProfit": 1611.362548828125
                    },
                    "30000000": {
                        "totalPrice": 105.0,
                        "totalProfit": 2439.916015625
                    },
                    "40000000": {
                        "totalPrice": 140.0,
                        "totalProfit": 3268.4501953125
                    },
                    "50000000": {
                        "totalPrice": 175.0,
                        "totalProfit": 4097.00390625
                    }
                }
            },
            {
                "id": "631130",
                "name": "암수술비(유사암제외)",
                "theme": "수술",
                "confidence": 0.04086816957360478,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 389.0,
                        "totalProfit": -12330.9677734375
                    },
                    "2000000": {
                        "totalPrice": 778.0,
                        "totalProfit": -24616.236328125
                    },
                    "3000000": {
                        "totalPrice": 1167.0,
                        "totalProfit": -36901.46484375
                    },
                    "5000000": {
                        "totalPrice": 1945.0,
                        "totalProfit": -61471.96484375
                    },
                    "10000000": {
                        "totalPrice": 3890.0,
                        "totalProfit": -122898.2265625
                    }
                }
            },
            {
                "id": "632137",
                "name": "131대질병수술비(치핵)",
                "theme": "수술",
                "confidence": 0.06741204509687684,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 87.0,
                        "totalProfit": -1810.20556640625
                    },
                    "200000": {
                        "totalPrice": 173.0,
                        "totalProfit": -3661.396728515625
                    }
                }
            },
            {
                "id": "633318",
                "name": "질병입원 간병인비용지원(간병인비용 1,500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0001111575617194834,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 422.0,
                        "totalProfit": 23363.9375
                    }
                }
            },
            {
                "id": "630670",
                "name": "추간판장애(디스크질환)수술비",
                "theme": "수술",
                "confidence": 0.03181049087922916,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 443.0,
                        "totalProfit": 23325.0234375
                    }
                }
            },
            {
                "id": "631226",
                "name": "수술비(1~5종)[질병1종]",
                "theme": "수술",
                "confidence": 0.01765271291246353,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 438.0,
                        "totalProfit": -70804.5859375
                    },
                    "200000": {
                        "totalPrice": 876.0,
                        "totalProfit": -141563.46875
                    }
                }
            },
            {
                "id": "632649",
                "name": "혈전용해치료비Ⅱ(특정심장질환)",
                "theme": "기타",
                "confidence": 0.2246105109007388,
                "availableQuantities": [
                    2000000,
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 12.0,
                        "totalProfit": -1500.5947265625
                    },
                    "5000000": {
                        "totalPrice": 30.0,
                        "totalProfit": -3682.86962890625
                    },
                    "10000000": {
                        "totalPrice": 60.0,
                        "totalProfit": -7320.0302734375
                    }
                }
            },
            {
                "id": "611339",
                "name": "일반상해입원 간병인비용지원(간병인비용 300만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0001034933729607,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 216.0,
                        "totalProfit": 12385.982421875
                    }
                }
            },
            {
                "id": "630026",
                "name": "질병입원일당",
                "theme": "입원일당",
                "confidence": 0.008083361393387476,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 2177.0,
                        "totalProfit": 95082.96875
                    },
                    "20000": {
                        "totalPrice": 4354.0,
                        "totalProfit": 190211.640625
                    },
                    "30000": {
                        "totalPrice": 6531.0,
                        "totalProfit": 285340.3125
                    },
                    "40000": {
                        "totalPrice": 8708.0,
                        "totalProfit": 380469.0
                    },
                    "50000": {
                        "totalPrice": 10885.0,
                        "totalProfit": 475597.6875
                    }
                }
            },
            {
                "id": "633317",
                "name": "질병입원 간병인비용지원(간병인비용 1,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0001416483273300203,
                "availableQuantities": [
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 380.0,
                        "totalProfit": 21002.755859375
                    }
                }
            },
            {
                "id": "630239",
                "name": "말기폐질환진단비",
                "theme": "기타",
                "confidence": 0.0017274712750861229,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 715.0,
                        "totalProfit": 20824.798828125
                    },
                    "10000000": {
                        "totalPrice": 1430.0,
                        "totalProfit": 41695.30859375
                    },
                    "20000000": {
                        "totalPrice": 2860.0,
                        "totalProfit": 83436.3515625
                    },
                    "50000000": {
                        "totalPrice": 7150.0,
                        "totalProfit": 208659.484375
                    }
                }
            },
            {
                "id": "633316",
                "name": "질병입원 간병인비용지원(간병인비용 700만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0001422476125199435,
                "availableQuantities": [
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 351.0,
                        "totalProfit": 20384.19140625
                    }
                }
            },
            {
                "id": "631230",
                "name": "수술비(1~5종)[질병5종]",
                "theme": "수술",
                "confidence": 0.01765271291246353,
                "availableQuantities": [
                    3000000,
                    5000000,
                    6000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 1644.0,
                        "totalProfit": 20916.89453125
                    },
                    "5000000": {
                        "totalPrice": 2740.0,
                        "totalProfit": 34891.9609375
                    },
                    "6000000": {
                        "totalPrice": 3288.0,
                        "totalProfit": 41879.49609375
                    },
                    "10000000": {
                        "totalPrice": 5480.0,
                        "totalProfit": 69829.6328125
                    }
                }
            },
            {
                "id": "631227",
                "name": "수술비(1~5종)[질병2종]",
                "theme": "수술",
                "confidence": 0.01765271291246353,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 244.0,
                        "totalProfit": -71922.84375
                    },
                    "200000": {
                        "totalPrice": 488.0,
                        "totalProfit": -143800.0
                    },
                    "300000": {
                        "totalPrice": 732.0,
                        "totalProfit": -215677.109375
                    }
                }
            },
            {
                "id": "631726",
                "name": "항암세기조절방사선치료비",
                "theme": "3대진단",
                "confidence": 0.171107600370787,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 210.0,
                        "totalProfit": 27323.404296875
                    },
                    "20000000": {
                        "totalPrice": 420.0,
                        "totalProfit": 54692.84375
                    }
                }
            },
            {
                "id": "611336",
                "name": "일반상해입원 간병인비용지원(간병인비용 300만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0003095422051712154,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 440.0,
                        "totalProfit": 28006.3203125
                    }
                }
            },
            {
                "id": "610832",
                "name": "수술비(1~5종)[상해1종]",
                "theme": "수술",
                "confidence": 0.0036501528134709536,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 77.0,
                        "totalProfit": 1641.65673828125
                    },
                    "200000": {
                        "totalPrice": 154.0,
                        "totalProfit": 3329.015380859375
                    }
                }
            }
        ]
    }
};