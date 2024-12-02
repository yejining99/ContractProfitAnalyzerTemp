// SAMPLE_CONTRACTS 데이터
export const SAMPLE_CONTRACTS = {
    "0": {
        "id": "0",
        "channel": "GA",
        "age": 34,
        "gndr": "여",
        "unt_pd_nm": "간편 3.10.5(세)",
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
                "kmv_adj": -213845.883877
            },
            {
                "tag": "출생전",
                "kmv_adj": -150000.0
            }
        ],
        "items": [
            {
                "id": "610015",
                "name": "일반상해사망",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 24.0,
                "totalProfit": 1156.578206
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 6960.0,
                "totalProfit": -197649.568264
            },
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 5.0,
                "totalProfit": 253.266407
            },
            {
                "id": "630228",
                "name": "뇌혈관질환진단",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 18240.0,
                "totalProfit": -350261.92126
            }
        ],
        "availableItems": [
            {
                "id": "632546",
                "name": "130대질병수술비(후각특정질환)",
                "theme": "수술",
                "confidence": 0.1529472964000925,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 20.0,
                        "totalProfit": 657.020043
                    },
                    "200000": {
                        "totalPrice": 40.0,
                        "totalProfit": 1363.129811
                    },
                    "300000": {
                        "totalPrice": 60.0,
                        "totalProfit": 2069.267891
                    },
                    "500000": {
                        "totalPrice": 100.0,
                        "totalProfit": 3481.515739
                    }
                }
            },
            {
                "id": "632548",
                "name": "130대질병수술비(치핵)",
                "theme": "수술",
                "confidence": 0.1529472964000925,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 128.0,
                        "totalProfit": -5540.019447
                    },
                    "200000": {
                        "totalPrice": 256.0,
                        "totalProfit": -11030.95497
                    }
                }
            },
            {
                "id": "633120",
                "name": "질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.006416503254864025,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 27.0,
                        "totalProfit": 1733.996575
                    },
                    "20000": {
                        "totalPrice": 54.0,
                        "totalProfit": 3517.082197
                    },
                    "30000": {
                        "totalPrice": 81.0,
                        "totalProfit": 5300.196809
                    }
                }
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.11022867769702943,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 918.0,
                        "totalProfit": 31142.439863
                    },
                    "200000": {
                        "totalPrice": 1836.0,
                        "totalProfit": 62333.954483
                    }
                }
            },
            {
                "id": "632550",
                "name": "130대질병수술비(편도염)",
                "theme": "수술",
                "confidence": 0.1529472964000925,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 5.0,
                        "totalProfit": 179.008019
                    },
                    "200000": {
                        "totalPrice": 10.0,
                        "totalProfit": 408.083849
                    },
                    "300000": {
                        "totalPrice": 15.0,
                        "totalProfit": 636.183033
                    },
                    "500000": {
                        "totalPrice": 26.0,
                        "totalProfit": 1190.256932
                    }
                }
            },
            {
                "id": "611345",
                "name": "2-3인실 상급종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.04121610312015042,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 12.0,
                        "totalProfit": 655.985266
                    },
                    "30000": {
                        "totalPrice": 18.0,
                        "totalProfit": 1008.54905
                    },
                    "50000": {
                        "totalPrice": 30.0,
                        "totalProfit": 1713.648037
                    }
                }
            },
            {
                "id": "630653",
                "name": "계속암치료비",
                "theme": "3대진단",
                "confidence": 0.00131802842527855,
                "availableQuantities": [
                    100000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 3373.0,
                        "totalProfit": 256134.752715
                    },
                    "300000": {
                        "totalPrice": 10118.0,
                        "totalProfit": 768406.544661
                    },
                    "500000": {
                        "totalPrice": 16863.0,
                        "totalProfit": 1280678.329962
                    },
                    "1000000": {
                        "totalPrice": 33725.0,
                        "totalProfit": 2561309.845065
                    }
                }
            },
            {
                "id": "630026",
                "name": "질병입원일당",
                "theme": "입원일당",
                "confidence": 0.0262709245285093,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 6032.0,
                        "totalProfit": 350958.956503
                    },
                    "20000": {
                        "totalPrice": 12064.0,
                        "totalProfit": 701966.998488
                    }
                }
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "theme": "골절/화상",
                "confidence": 0.08024976182016236,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 117.0,
                        "totalProfit": 4376.616002
                    },
                    "200000": {
                        "totalPrice": 234.0,
                        "totalProfit": 8802.325455
                    }
                }
            },
            {
                "id": "631422",
                "name": "32대질병관혈수술비(연간1회한)[14대질병]",
                "theme": "수술",
                "confidence": 0.07621164439748723,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 73.0,
                        "totalProfit": -764.26985
                    },
                    "200000": {
                        "totalPrice": 145.0,
                        "totalProfit": -1575.379726
                    },
                    "300000": {
                        "totalPrice": 218.0,
                        "totalProfit": -2290.562716
                    }
                }
            },
            {
                "id": "632541",
                "name": "130대질병수술비(특정31대질병)",
                "theme": "수술",
                "confidence": 0.1529472964000925,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 514.0,
                        "totalProfit": 29303.344735
                    },
                    "2000000": {
                        "totalPrice": 1028.0,
                        "totalProfit": 58655.769553
                    },
                    "3000000": {
                        "totalPrice": 1542.0,
                        "totalProfit": 88008.220931
                    },
                    "5000000": {
                        "totalPrice": 2570.0,
                        "totalProfit": 146713.108522
                    }
                }
            },
            {
                "id": "630572",
                "name": "갱신형 뇌출혈수술비",
                "theme": "3대진단",
                "confidence": 0.001992027241077025,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 90.0,
                        "totalProfit": 2624.841204
                    },
                    "2000000": {
                        "totalPrice": 180.0,
                        "totalProfit": 5298.759902
                    }
                }
            },
            {
                "id": "632543",
                "name": "130대질병수술비(백내장)",
                "theme": "수술",
                "confidence": 0.1529472964000925,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 224.0,
                        "totalProfit": -58320.404115
                    },
                    "200000": {
                        "totalPrice": 448.0,
                        "totalProfit": -116591.725488
                    },
                    "300000": {
                        "totalPrice": 672.0,
                        "totalProfit": -174863.011566
                    }
                }
            },
            {
                "id": "631130",
                "name": "암수술비(유사암제외)",
                "theme": "3대진단",
                "confidence": 0.10231150743524049,
                "availableQuantities": [
                    200000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 206.0,
                        "totalProfit": 4092.071901
                    },
                    "1000000": {
                        "totalPrice": 1028.0,
                        "totalProfit": 20464.930692
                    },
                    "2000000": {
                        "totalPrice": 2056.0,
                        "totalProfit": 40978.958548
                    },
                    "3000000": {
                        "totalPrice": 3084.0,
                        "totalProfit": 61493.007385
                    },
                    "5000000": {
                        "totalPrice": 5140.0,
                        "totalProfit": 102521.084079
                    }
                }
            },
            {
                "id": "630717",
                "name": "유사암진단비",
                "theme": "3대진단",
                "confidence": 0.022830220819175878,
                "availableQuantities": [
                    200000,
                    2000000,
                    4000000,
                    6000000
                ],
                "recommendedQuantity": 6000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 130.0,
                        "totalProfit": 73.202295
                    },
                    "2000000": {
                        "totalPrice": 1302.0,
                        "totalProfit": 1365.611239
                    },
                    "4000000": {
                        "totalPrice": 2604.0,
                        "totalProfit": 2780.340623
                    },
                    "6000000": {
                        "totalPrice": 3906.0,
                        "totalProfit": 4195.070007
                    }
                }
            },
            {
                "id": "630331",
                "name": "질병고도후유장해",
                "theme": "사망후유",
                "confidence": 0.03198555782346463,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 130.0,
                        "totalProfit": 5322.870212
                    }
                }
            },
            {
                "id": "630951",
                "name": "갑상선암(초기제외)진단비",
                "theme": "3대진단",
                "confidence": 0.026476870780790848,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 238.0,
                        "totalProfit": 4488.874802
                    }
                }
            },
            {
                "id": "631196",
                "name": "5대기관질병수술비(연간1회한)[관혈]",
                "theme": "3대진단",
                "confidence": 0.16644891738381118,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 751.0,
                        "totalProfit": 55585.216452
                    },
                    "2000000": {
                        "totalPrice": 1502.0,
                        "totalProfit": 111219.513923
                    },
                    "3000000": {
                        "totalPrice": 2253.0,
                        "totalProfit": 166853.836101
                    },
                    "5000000": {
                        "totalPrice": 3755.0,
                        "totalProfit": 278122.468062
                    }
                }
            },
            {
                "id": "631430",
                "name": "32대질병관혈수술비(연간1회한)[4대질병]",
                "theme": "수술",
                "confidence": 0.07621164439748723,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 415.0,
                        "totalProfit": 19017.02855
                    },
                    "200000": {
                        "totalPrice": 831.0,
                        "totalProfit": 38180.048011
                    },
                    "300000": {
                        "totalPrice": 1246.0,
                        "totalProfit": 57246.166271
                    }
                }
            },
            {
                "id": "632651",
                "name": "혈전용해치료비Ⅱ(특정심장질환)(연간1회한)",
                "theme": "기타",
                "confidence": 0.0869042177525353,
                "availableQuantities": [
                    1000000,
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 62.0,
                        "totalProfit": -574.401337
                    },
                    "2000000": {
                        "totalPrice": 124.0,
                        "totalProfit": -1099.709521
                    },
                    "5000000": {
                        "totalPrice": 310.0,
                        "totalProfit": -2675.584305
                    }
                }
            },
            {
                "id": "611261",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.11096020368467482,
                "availableQuantities": [
                    30000,
                    50000,
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 909.0,
                        "totalProfit": -8185.353737
                    },
                    "50000": {
                        "totalPrice": 1515.0,
                        "totalProfit": -13609.522154
                    },
                    "100000": {
                        "totalPrice": 3030.0,
                        "totalProfit": -27169.960105
                    },
                    "150000": {
                        "totalPrice": 4545.0,
                        "totalProfit": -40730.364241
                    },
                    "200000": {
                        "totalPrice": 6060.0,
                        "totalProfit": -54290.802192
                    }
                }
            },
            {
                "id": "633515",
                "name": "특정순환계질환진단비",
                "theme": "기타",
                "confidence": 0.005070796062470975,
                "availableQuantities": [
                    100000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 525.0,
                        "totalProfit": 25484.289587
                    },
                    "1000000": {
                        "totalPrice": 5250.0,
                        "totalProfit": 255282.594618
                    },
                    "2000000": {
                        "totalPrice": 10500.0,
                        "totalProfit": 510614.04877
                    },
                    "3000000": {
                        "totalPrice": 15750.0,
                        "totalProfit": 765945.502922
                    },
                    "5000000": {
                        "totalPrice": 26250.0,
                        "totalProfit": 1276608.41832
                    }
                }
            },
            {
                "id": "632650",
                "name": "혈전용해치료비Ⅱ(뇌졸중)(연간1회한)",
                "theme": "기타",
                "confidence": 0.0869042177525353,
                "availableQuantities": [
                    1000000,
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 157.0,
                        "totalProfit": 1836.62335
                    },
                    "2000000": {
                        "totalPrice": 314.0,
                        "totalProfit": 3722.339319
                    },
                    "5000000": {
                        "totalPrice": 785.0,
                        "totalProfit": 9379.529266
                    }
                }
            },
            {
                "id": "632544",
                "name": "130대질병수술비(뇌혈관질환)",
                "theme": "수술",
                "confidence": 0.1529472964000925,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 268.0,
                        "totalProfit": 7154.647591
                    },
                    "2000000": {
                        "totalPrice": 536.0,
                        "totalProfit": 14358.385769
                    },
                    "3000000": {
                        "totalPrice": 804.0,
                        "totalProfit": 21562.151398
                    },
                    "5000000": {
                        "totalPrice": 1340.0,
                        "totalProfit": 35969.655204
                    }
                }
            },
            {
                "id": "630930",
                "name": "통풍진단비보장 특약",
                "theme": "기타",
                "confidence": 0.05396807956645218,
                "availableQuantities": [
                    100000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 31.0,
                        "totalProfit": 2158.810921
                    },
                    "300000": {
                        "totalPrice": 93.0,
                        "totalProfit": 6574.572378
                    },
                    "500000": {
                        "totalPrice": 156.0,
                        "totalProfit": 11085.952465
                    },
                    "1000000": {
                        "totalPrice": 311.0,
                        "totalProfit": 22125.337855
                    }
                }
            },
            {
                "id": "640301",
                "name": "보험료납입면제진단비(80%이상후유장해 및 3대질병진단)_뇌졸중",
                "theme": "3대진단",
                "confidence": 0.00305787624876555,
                "availableQuantities": [
                    100000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 52.0,
                        "totalProfit": 907.641842
                    },
                    "1000000": {
                        "totalPrice": 520.0,
                        "totalProfit": 9517.942652
                    }
                }
            },
            {
                "id": "631807",
                "name": "수술비(1~7종, 연간3회한)[질병6종]",
                "theme": "수술",
                "confidence": 0.30032455617712817,
                "availableQuantities": [
                    750000,
                    1500000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 1500000,
                "priceAndProfitByQuantity": {
                    "750000": {
                        "totalPrice": 878.0,
                        "totalProfit": 47228.381964
                    },
                    "1500000": {
                        "totalPrice": 1755.0,
                        "totalProfit": 94423.381456
                    },
                    "2000000": {
                        "totalPrice": 2340.0,
                        "totalProfit": 125914.198334
                    },
                    "3000000": {
                        "totalPrice": 3510.0,
                        "totalProfit": 188895.85652
                    },
                    "5000000": {
                        "totalPrice": 5850.0,
                        "totalProfit": 314859.172891
                    }
                }
            },
            {
                "id": "633014",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.19820730464716763,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 670.0,
                        "totalProfit": -14785.473919
                    },
                    "200000": {
                        "totalPrice": 1340.0,
                        "totalProfit": -29521.829801
                    }
                }
            },
            {
                "id": "631397",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.2219275883211338,
                "availableQuantities": [
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 280.0,
                        "totalProfit": -21594.24699
                    },
                    "300000": {
                        "totalPrice": 420.0,
                        "totalProfit": -32366.80577
                    },
                    "400000": {
                        "totalPrice": 560.0,
                        "totalProfit": -43139.375943
                    }
                }
            },
            {
                "id": "631804",
                "name": "수술비(1~7종, 연간3회한)[질병3종]",
                "theme": "수술",
                "confidence": 0.30032455617712817,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 229.0,
                        "totalProfit": 12037.345909
                    },
                    "200000": {
                        "totalPrice": 458.0,
                        "totalProfit": 24123.78566
                    },
                    "300000": {
                        "totalPrice": 687.0,
                        "totalProfit": 36209.27457
                    }
                }
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.12310055822111785,
                "availableQuantities": [
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 26.0,
                        "totalProfit": 1303.565357
                    },
                    "300000": {
                        "totalPrice": 39.0,
                        "totalProfit": 1979.919515
                    },
                    "400000": {
                        "totalPrice": 52.0,
                        "totalProfit": 2656.240753
                    }
                }
            },
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "theme": "사망후유",
                "confidence": 0.18949572567688253,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 5.0,
                        "totalProfit": 282.45302
                    }
                }
            },
            {
                "id": "610852",
                "name": "종합병원 일반상해입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.03469420856047235,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 421.0,
                        "totalProfit": 23352.812318
                    },
                    "20000": {
                        "totalPrice": 842.0,
                        "totalProfit": 46754.717458
                    },
                    "30000": {
                        "totalPrice": 1263.0,
                        "totalProfit": 70156.647795
                    }
                }
            },
            {
                "id": "640511",
                "name": "중증질환자(심장질환) 산정특례대상 진단비(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.002097507269655875,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 106.0,
                        "totalProfit": 23752.489807
                    },
                    "3000000": {
                        "totalPrice": 159.0,
                        "totalProfit": 35653.390178
                    },
                    "5000000": {
                        "totalPrice": 265.0,
                        "totalProfit": 59455.355995
                    }
                }
            },
            {
                "id": "630571",
                "name": "갱신형 급성심근경색증입원일당(4일이상)",
                "theme": "3대진단",
                "confidence": 0.008170229611099526,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 14.0,
                        "totalProfit": 733.582947
                    },
                    "20000": {
                        "totalPrice": 28.0,
                        "totalProfit": 1516.252494
                    },
                    "30000": {
                        "totalPrice": 42.0,
                        "totalProfit": 2298.924038
                    }
                }
            },
            {
                "id": "611301",
                "name": "일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.0035313787366536,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 2.0,
                        "totalProfit": 63.049208
                    },
                    "20000": {
                        "totalPrice": 4.0,
                        "totalProfit": 175.190694
                    },
                    "30000": {
                        "totalPrice": 6.0,
                        "totalProfit": 287.35792
                    }
                }
            },
            {
                "id": "631406",
                "name": "32대질병관혈수술비(연간1회한)[5대질병]",
                "theme": "수술",
                "confidence": 0.07621164439748723,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 751.0,
                        "totalProfit": 55585.216452
                    },
                    "2000000": {
                        "totalPrice": 1502.0,
                        "totalProfit": 111219.513923
                    },
                    "3000000": {
                        "totalPrice": 2253.0,
                        "totalProfit": 166853.836101
                    },
                    "5000000": {
                        "totalPrice": 3755.0,
                        "totalProfit": 278122.468062
                    }
                }
            },
            {
                "id": "631443",
                "name": "암직접치료통원일당(상급종합병원)",
                "theme": "입원일당",
                "confidence": 0.07811399870997368,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 1332.0,
                        "totalProfit": 108670.203934
                    },
                    "30000": {
                        "totalPrice": 1998.0,
                        "totalProfit": 163029.866203
                    },
                    "50000": {
                        "totalPrice": 3330.0,
                        "totalProfit": 271749.175862
                    },
                    "100000": {
                        "totalPrice": 6660.0,
                        "totalProfit": 543547.442571
                    },
                    "200000": {
                        "totalPrice": 13320.0,
                        "totalProfit": 1087144.003179
                    }
                }
            },
            {
                "id": "611014",
                "name": "수술비(1~7종, 연간3회한)[상해3종]",
                "theme": "수술",
                "confidence": 0.0856156419084515,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 57.0,
                        "totalProfit": 3302.705249
                    },
                    "200000": {
                        "totalPrice": 114.0,
                        "totalProfit": 6654.501591
                    },
                    "300000": {
                        "totalPrice": 171.0,
                        "totalProfit": 10006.324877
                    }
                }
            },
            {
                "id": "611310",
                "name": "간병인지원 일반상해입원일당(Ⅰ)(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.01847877623348635,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 4.0,
                        "totalProfit": 546.013085
                    },
                    "20000": {
                        "totalPrice": 8.0,
                        "totalProfit": 1141.329422
                    }
                }
            },
            {
                "id": "631806",
                "name": "수술비(1~7종, 연간3회한)[질병5종]",
                "theme": "수술",
                "confidence": 0.30032455617712817,
                "availableQuantities": [
                    300000,
                    800000,
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 800000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 258.0,
                        "totalProfit": 13570.940521
                    },
                    "800000": {
                        "totalPrice": 688.0,
                        "totalProfit": 36271.004681
                    },
                    "1000000": {
                        "totalPrice": 860.0,
                        "totalProfit": 45351.035361
                    },
                    "2000000": {
                        "totalPrice": 1720.0,
                        "totalProfit": 90751.173536
                    },
                    "3000000": {
                        "totalPrice": 2580.0,
                        "totalProfit": 136151.311711
                    }
                }
            },
            {
                "id": "631186",
                "name": "암수술비(유사암제외)(최초1회한)",
                "theme": "3대진단",
                "confidence": 0.009196343819664676,
                "availableQuantities": [
                    800000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 800000,
                "priceAndProfitByQuantity": {
                    "800000": {
                        "totalPrice": 662.0,
                        "totalProfit": 20108.190143
                    },
                    "1000000": {
                        "totalPrice": 828.0,
                        "totalProfit": 25195.43607
                    },
                    "2000000": {
                        "totalPrice": 1656.0,
                        "totalProfit": 50439.937205
                    },
                    "3000000": {
                        "totalPrice": 2484.0,
                        "totalProfit": 75684.445811
                    },
                    "5000000": {
                        "totalPrice": 4140.0,
                        "totalProfit": 126173.46785
                    }
                }
            },
            {
                "id": "630570",
                "name": "갱신형 뇌출혈입원일당(4일이상)",
                "theme": "3대진단",
                "confidence": 0.00799816082110845,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 142.0,
                        "totalProfit": 8760.779721
                    },
                    "20000": {
                        "totalPrice": 284.0,
                        "totalProfit": 17570.641283
                    },
                    "30000": {
                        "totalPrice": 426.0,
                        "totalProfit": 26380.527647
                    }
                }
            },
            {
                "id": "633538",
                "name": "허혈성심장질환통원일당(종합병원, 연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0020213632751074,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 335.0,
                        "totalProfit": 26272.007375
                    },
                    "20000": {
                        "totalPrice": 670.0,
                        "totalProfit": 52593.114747
                    },
                    "30000": {
                        "totalPrice": 1005.0,
                        "totalProfit": 78914.24016
                    }
                }
            },
            {
                "id": "633537",
                "name": "허혈성심장질환통원일당(연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0018815579399769499,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 508.0,
                        "totalProfit": 39754.379622
                    }
                }
            },
            {
                "id": "611262",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원)",
                "theme": "입원일당",
                "confidence": 0.1109614458572324,
                "availableQuantities": [
                    10000,
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 80.0,
                        "totalProfit": 1900.502871
                    },
                    "20000": {
                        "totalPrice": 160.0,
                        "totalProfit": 3850.089865
                    },
                    "50000": {
                        "totalPrice": 400.0,
                        "totalProfit": 9698.901045
                    }
                }
            },
            {
                "id": "611016",
                "name": "수술비(1~7종, 연간3회한)[상해5종]",
                "theme": "수술",
                "confidence": 0.0856156419084515,
                "availableQuantities": [
                    300000,
                    800000,
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 41.0,
                        "totalProfit": 2377.527827
                    },
                    "800000": {
                        "totalPrice": 108.0,
                        "totalProfit": 6289.300879
                    },
                    "1000000": {
                        "totalPrice": 135.0,
                        "totalProfit": 7870.606045
                    },
                    "2000000": {
                        "totalPrice": 270.0,
                        "totalProfit": 15790.299368
                    },
                    "3000000": {
                        "totalPrice": 405.0,
                        "totalProfit": 23710.012056
                    }
                }
            },
            {
                "id": "633341",
                "name": "2-3인실 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.06833100681115682,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 712.0,
                        "totalProfit": 41429.997667
                    },
                    "30000": {
                        "totalPrice": 1068.0,
                        "totalProfit": 62169.570347
                    },
                    "50000": {
                        "totalPrice": 1780.0,
                        "totalProfit": 103648.686051
                    }
                }
            },
            {
                "id": "611309",
                "name": "간병인지원 일반상해입원일당(Ⅰ)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.02244873689332555,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 3272.0,
                        "totalProfit": 312676.635998
                    },
                    "20000": {
                        "totalPrice": 6544.0,
                        "totalProfit": 625402.52647
                    }
                }
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "theme": "입원일당",
                "confidence": 0.03338712714610882,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1339.0,
                        "totalProfit": 77469.399858
                    },
                    "20000": {
                        "totalPrice": 2678.0,
                        "totalProfit": 154987.882533
                    },
                    "30000": {
                        "totalPrice": 4017.0,
                        "totalProfit": 232506.400409
                    }
                }
            },
            {
                "id": "611015",
                "name": "수술비(1~7종, 연간3회한)[상해4종]",
                "theme": "수술",
                "confidence": 0.0856156419084515,
                "availableQuantities": [
                    250000,
                    400000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "250000": {
                        "totalPrice": 100.0,
                        "totalProfit": 5865.762876
                    },
                    "400000": {
                        "totalPrice": 160.0,
                        "totalProfit": 9414.532714
                    },
                    "500000": {
                        "totalPrice": 200.0,
                        "totalProfit": 11780.465844
                    },
                    "1000000": {
                        "totalPrice": 400.0,
                        "totalProfit": 23610.014092
                    }
                }
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "theme": "골절/화상",
                "confidence": 0.08024976182016236,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 10.0,
                        "totalProfit": 567.995339
                    },
                    "200000": {
                        "totalPrice": 20.0,
                        "totalProfit": 1185.067651
                    }
                }
            },
            {
                "id": "611012",
                "name": "수술비(1~7종, 연간3회한)[상해1종]",
                "theme": "수술",
                "confidence": 0.0856156419084515,
                "availableQuantities": [
                    50000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 190.0,
                        "totalProfit": 10880.797777
                    },
                    "100000": {
                        "totalPrice": 380.0,
                        "totalProfit": 21810.673954
                    },
                    "200000": {
                        "totalPrice": 760.0,
                        "totalProfit": 43670.457966
                    }
                }
            },
            {
                "id": "631808",
                "name": "수술비(1~7종, 연간3회한)[질병7종]",
                "theme": "수술",
                "confidence": 0.30032455617712817,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000,
                    6000000
                ],
                "recommendedQuantity": 6000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 500.0,
                        "totalProfit": 26871.866286
                    },
                    "3000000": {
                        "totalPrice": 750.0,
                        "totalProfit": 40332.845965
                    },
                    "5000000": {
                        "totalPrice": 1250.0,
                        "totalProfit": 67253.830288
                    },
                    "6000000": {
                        "totalPrice": 1500.0,
                        "totalProfit": 80713.834931
                    }
                }
            },
            {
                "id": "611017",
                "name": "수술비(1~7종, 연간3회한)[상해6종]",
                "theme": "수술",
                "confidence": 0.0856156419084515,
                "availableQuantities": [
                    750000,
                    1000000,
                    1500000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "750000": {
                        "totalPrice": 5.0,
                        "totalProfit": 260.277872
                    },
                    "1000000": {
                        "totalPrice": 6.0,
                        "totalProfit": 308.419195
                    },
                    "1500000": {
                        "totalPrice": 9.0,
                        "totalProfit": 487.240109
                    },
                    "3000000": {
                        "totalPrice": 18.0,
                        "totalProfit": 1023.469068
                    },
                    "5000000": {
                        "totalPrice": 30.0,
                        "totalProfit": 1738.518942
                    }
                }
            },
            {
                "id": "632986",
                "name": "간호·간병통합서비스 사용 질병입원일당(1일이상180일한도)",
                "theme": "입원일당",
                "confidence": 0.1519575235916328,
                "availableQuantities": [
                    30000,
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 2046.0,
                        "totalProfit": 72555.689336
                    },
                    "50000": {
                        "totalPrice": 3410.0,
                        "totalProfit": 120958.885925
                    },
                    "70000": {
                        "totalPrice": 4774.0,
                        "totalProfit": 169362.082514
                    }
                }
            },
            {
                "id": "610918",
                "name": "골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.08084264926396167,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 172.0,
                        "totalProfit": 5204.264453
                    },
                    "200000": {
                        "totalPrice": 344.0,
                        "totalProfit": 10457.6198
                    }
                }
            },
            {
                "id": "611302",
                "name": "간병인사용 일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.05743000242024712,
                "availableQuantities": [
                    50000,
                    100000,
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 3.0,
                        "totalProfit": 146.056032
                    },
                    "100000": {
                        "totalPrice": 6.0,
                        "totalProfit": 341.203762
                    },
                    "150000": {
                        "totalPrice": 9.0,
                        "totalProfit": 536.377812
                    }
                }
            },
            {
                "id": "632545",
                "name": "130대질병수술비(다빈도61대질병)",
                "theme": "수술",
                "confidence": 0.1529472964000925,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 569.0,
                        "totalProfit": 21919.935725
                    },
                    "200000": {
                        "totalPrice": 1138.0,
                        "totalProfit": 43888.948381
                    },
                    "300000": {
                        "totalPrice": 1706.0,
                        "totalProfit": 65762.04203
                    },
                    "500000": {
                        "totalPrice": 2844.0,
                        "totalProfit": 109700.075642
                    }
                }
            },
            {
                "id": "630094",
                "name": "충수염수술비",
                "theme": "수술",
                "confidence": 0.0334647260565918,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 73.0,
                        "totalProfit": 2296.054316
                    }
                }
            },
            {
                "id": "611264",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.11414190602340368,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 100.0,
                        "totalProfit": -13079.346601
                    },
                    "200000": {
                        "totalPrice": 200.0,
                        "totalProfit": -26109.580854
                    }
                }
            },
            {
                "id": "611303",
                "name": "간호·간병통합서비스 사용 일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.05764494633401773,
                "availableQuantities": [
                    30000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 1.0,
                        "totalProfit": -76.243488
                    },
                    "70000": {
                        "totalPrice": 2.0,
                        "totalProfit": -144.522814
                    }
                }
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 24.0,
                        "totalProfit": 1261.26562
                    }
                }
            },
            {
                "id": "632984",
                "name": "간병인사용 질병입원일당(1일이상180일한도)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.15492708899764474,
                "availableQuantities": [
                    30000,
                    50000,
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 2217.0,
                        "totalProfit": 123238.835629
                    },
                    "50000": {
                        "totalPrice": 3695.0,
                        "totalProfit": 205430.787484
                    },
                    "100000": {
                        "totalPrice": 7390.0,
                        "totalProfit": 410910.650872
                    },
                    "150000": {
                        "totalPrice": 11085.0,
                        "totalProfit": 616390.556393
                    },
                    "200000": {
                        "totalPrice": 14780.0,
                        "totalProfit": 821870.419781
                    }
                }
            },
            {
                "id": "632985",
                "name": "간병인사용 질병입원일당(1일이상180일한도)(요양병원)",
                "theme": "입원일당",
                "confidence": 0.15492708899764474,
                "availableQuantities": [
                    10000,
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1040.0,
                        "totalProfit": 51741.101983
                    },
                    "20000": {
                        "totalPrice": 2080.0,
                        "totalProfit": 103531.286341
                    },
                    "50000": {
                        "totalPrice": 5200.0,
                        "totalProfit": 258901.901943
                    }
                }
            },
            {
                "id": "611013",
                "name": "수술비(1~7종, 연간3회한)[상해2종]",
                "theme": "수술",
                "confidence": 0.0856156419084515,
                "availableQuantities": [
                    50000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 60.0,
                        "totalProfit": 3421.208389
                    },
                    "100000": {
                        "totalPrice": 120.0,
                        "totalProfit": 6891.494224
                    },
                    "200000": {
                        "totalPrice": 240.0,
                        "totalProfit": 13832.095982
                    }
                }
            },
            {
                "id": "632349",
                "name": "암수술비(유사암제외)(25%체증형)",
                "theme": "3대진단",
                "confidence": 0.15108926746572487,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1065.0,
                        "totalProfit": 31096.302756
                    },
                    "2000000": {
                        "totalPrice": 2130.0,
                        "totalProfit": 62241.700314
                    },
                    "3000000": {
                        "totalPrice": 3195.0,
                        "totalProfit": 93387.121215
                    },
                    "5000000": {
                        "totalPrice": 5325.0,
                        "totalProfit": 155677.927363
                    }
                }
            },
            {
                "id": "633121",
                "name": "간병인사용 질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.08329555702700003,
                "availableQuantities": [
                    100000,
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 48.0,
                        "totalProfit": 2385.185256
                    },
                    "150000": {
                        "totalPrice": 72.0,
                        "totalProfit": 3602.347463
                    }
                }
            },
            {
                "id": "631414",
                "name": "32대질병관혈수술비(연간1회한)[9대질병]",
                "theme": "수술",
                "confidence": 0.07621164439748723,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 189.0,
                        "totalProfit": 13264.536024
                    },
                    "2000000": {
                        "totalPrice": 378.0,
                        "totalProfit": 26578.158612
                    },
                    "3000000": {
                        "totalPrice": 567.0,
                        "totalProfit": 39891.801278
                    },
                    "5000000": {
                        "totalPrice": 945.0,
                        "totalProfit": 66519.077927
                    }
                }
            },
            {
                "id": "611154",
                "name": "중증화상환자 산정특례대상 진단비(연간1회한)",
                "theme": "골절/화상",
                "confidence": 3.1111525773441156e-05,
                "availableQuantities": [
                    1000000,
                    5000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 5.0,
                        "totalProfit": 356.397999
                    },
                    "5000000": {
                        "totalPrice": 25.0,
                        "totalProfit": 1978.582015
                    }
                }
            },
            {
                "id": "633122",
                "name": "간호·간병통합서비스 사용 질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.08469943796154104,
                "availableQuantities": [
                    30000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 16.0,
                        "totalProfit": 473.07979
                    },
                    "70000": {
                        "totalPrice": 37.0,
                        "totalProfit": 1137.359184
                    }
                }
            },
            {
                "id": "633001",
                "name": "기타피부암 및 갑상선암 주요치료비(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.055323756536748675,
                "availableQuantities": [
                    1000000,
                    2000000,
                    4000000
                ],
                "recommendedQuantity": 4000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 447.0,
                        "totalProfit": 10235.722594
                    },
                    "2000000": {
                        "totalPrice": 894.0,
                        "totalProfit": 20520.482619
                    },
                    "4000000": {
                        "totalPrice": 1788.0,
                        "totalProfit": 41090.019131
                    }
                }
            },
            {
                "id": "630928",
                "name": "대상포진진단비보장 특약",
                "theme": "기타",
                "confidence": 0.054918209662711576,
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
                        "totalPrice": 415.0,
                        "totalProfit": 18368.397274
                    },
                    "200000": {
                        "totalPrice": 831.0,
                        "totalProfit": 36872.650459
                    },
                    "300000": {
                        "totalPrice": 1246.0,
                        "totalProfit": 55289.859291
                    },
                    "500000": {
                        "totalPrice": 2077.0,
                        "totalProfit": 92211.319569
                    },
                    "1000000": {
                        "totalPrice": 4153.0,
                        "totalProfit": 184384.392982
                    }
                }
            },
            {
                "id": "631200",
                "name": "5대기관질병수술비(연간1회한)[비관혈]",
                "theme": "3대진단",
                "confidence": 0.16186206729431749,
                "availableQuantities": [
                    1000000,
                    1500000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 166.0,
                        "totalProfit": -8171.801037
                    },
                    "1500000": {
                        "totalPrice": 249.0,
                        "totalProfit": -12233.132532
                    },
                    "2000000": {
                        "totalPrice": 332.0,
                        "totalProfit": -16294.509514
                    },
                    "3000000": {
                        "totalPrice": 498.0,
                        "totalProfit": -24417.192514
                    },
                    "5000000": {
                        "totalPrice": 830.0,
                        "totalProfit": -40662.595384
                    }
                }
            },
            {
                "id": "633539",
                "name": "허혈성심장질환통원일당(상급종합병원, 연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0023306806632567498,
                "availableQuantities": [
                    30000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 396.0,
                        "totalProfit": 31102.365617
                    },
                    "50000": {
                        "totalPrice": 660.0,
                        "totalProfit": 51870.004436
                    },
                    "100000": {
                        "totalPrice": 1320.0,
                        "totalProfit": 103789.09262
                    }
                }
            },
            {
                "id": "631803",
                "name": "수술비(1~7종, 연간3회한)[질병2종]",
                "theme": "수술",
                "confidence": 0.30032455617712817,
                "availableQuantities": [
                    50000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 260.0,
                        "totalProfit": 14124.608812
                    },
                    "100000": {
                        "totalPrice": 520.0,
                        "totalProfit": 28298.307668
                    },
                    "200000": {
                        "totalPrice": 1040.0,
                        "totalProfit": 56644.758337
                    }
                }
            },
            {
                "id": "630527",
                "name": "유사암진단비",
                "theme": "3대진단",
                "confidence": 0.4930703335201966,
                "availableQuantities": [
                    200000,
                    2000000,
                    4000000,
                    6000000
                ],
                "recommendedQuantity": 6000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 131.0,
                        "totalProfit": 164.980895
                    },
                    "2000000": {
                        "totalPrice": 1314.0,
                        "totalProfit": 2475.193772
                    },
                    "4000000": {
                        "totalPrice": 2628.0,
                        "totalProfit": 4999.499024
                    },
                    "6000000": {
                        "totalPrice": 3942.0,
                        "totalProfit": 7523.804277
                    }
                }
            },
            {
                "id": "632547",
                "name": "130대질병수술비(특정다빈도29대질병)",
                "theme": "수술",
                "confidence": 0.1529472964000925,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 212.0,
                        "totalProfit": -6735.862243
                    },
                    "200000": {
                        "totalPrice": 424.0,
                        "totalProfit": -13422.649252
                    }
                }
            },
            {
                "id": "632542",
                "name": "130대질병수술비(관절염,생식기질환)",
                "theme": "수술",
                "confidence": 0.1529472964000925,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 380.0,
                        "totalProfit": -407.385267
                    },
                    "200000": {
                        "totalPrice": 760.0,
                        "totalProfit": -764.6982
                    },
                    "300000": {
                        "totalPrice": 1141.0,
                        "totalProfit": -1027.068366
                    }
                }
            },
            {
                "id": "632540",
                "name": "130대질병수술비(심장질환)",
                "theme": "수술",
                "confidence": 0.1529472964000925,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 344.0,
                        "totalProfit": 11451.936014
                    },
                    "2000000": {
                        "totalPrice": 688.0,
                        "totalProfit": 22952.951972
                    },
                    "3000000": {
                        "totalPrice": 1032.0,
                        "totalProfit": 34454.006023
                    },
                    "5000000": {
                        "totalPrice": 1720.0,
                        "totalProfit": 57456.076032
                    }
                }
            },
            {
                "id": "631263",
                "name": "종합병원 질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.07349934136436048,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1978.0,
                        "totalProfit": 115792.499844
                    },
                    "20000": {
                        "totalPrice": 3956.0,
                        "totalProfit": 231634.090788
                    },
                    "30000": {
                        "totalPrice": 5934.0,
                        "totalProfit": 347475.708669
                    }
                }
            },
            {
                "id": "610912",
                "name": "골절(치아파절제외)진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.06953772048037396,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 575.0,
                        "totalProfit": 10709.253843
                    },
                    "200000": {
                        "totalPrice": 1150.0,
                        "totalProfit": 21467.589163
                    },
                    "300000": {
                        "totalPrice": 1725.0,
                        "totalProfit": 32225.951386
                    }
                }
            },
            {
                "id": "633339",
                "name": "2-3인실 상급종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.06867166520531107,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 218.0,
                        "totalProfit": 6263.54844
                    },
                    "30000": {
                        "totalPrice": 327.0,
                        "totalProfit": 9419.899738
                    },
                    "50000": {
                        "totalPrice": 545.0,
                        "totalProfit": 15732.554821
                    }
                }
            },
            {
                "id": "631146",
                "name": "암직접치료입원일당(Ⅱ)(요양병원제외, 1일이상)",
                "theme": "3대진단",
                "confidence": 0.06168768065604352,
                "availableQuantities": [
                    20000,
                    30000,
                    40000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 1166.0,
                        "totalProfit": 42667.054616
                    },
                    "30000": {
                        "totalPrice": 1749.0,
                        "totalProfit": 64025.147927
                    },
                    "40000": {
                        "totalPrice": 2332.0,
                        "totalProfit": 85383.217632
                    },
                    "50000": {
                        "totalPrice": 2915.0,
                        "totalProfit": 106741.310943
                    }
                }
            },
            {
                "id": "611346",
                "name": "2-3인실 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.04090887686506205,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 162.0,
                        "totalProfit": 9672.363841
                    },
                    "30000": {
                        "totalPrice": 243.0,
                        "totalProfit": 14533.118335
                    },
                    "50000": {
                        "totalPrice": 405.0,
                        "totalProfit": 24254.593008
                    }
                }
            },
            {
                "id": "631805",
                "name": "수술비(1~7종, 연간3회한)[질병4종]",
                "theme": "수술",
                "confidence": 0.30032455617712817,
                "availableQuantities": [
                    200000,
                    250000,
                    400000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 674.0,
                        "totalProfit": 40577.424617
                    },
                    "250000": {
                        "totalPrice": 843.0,
                        "totalProfit": 50781.748546
                    },
                    "400000": {
                        "totalPrice": 1348.0,
                        "totalProfit": 81202.992236
                    },
                    "500000": {
                        "totalPrice": 1685.0,
                        "totalProfit": 101515.785253
                    },
                    "1000000": {
                        "totalPrice": 3370.0,
                        "totalProfit": 203079.695091
                    }
                }
            },
            {
                "id": "632503",
                "name": "6대심장질환진단비Ⅱ",
                "theme": "3대진단",
                "confidence": 0.0218000364551742,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1378.0,
                        "totalProfit": 88496.107222
                    },
                    "2000000": {
                        "totalPrice": 2756.0,
                        "totalProfit": 177041.317128
                    },
                    "3000000": {
                        "totalPrice": 4134.0,
                        "totalProfit": 265586.52968
                    },
                    "5000000": {
                        "totalPrice": 6890.0,
                        "totalProfit": 442677.198785
                    }
                }
            },
            {
                "id": "630697",
                "name": "암진단비(유사암 제외)",
                "theme": "3대진단",
                "confidence": 0.3361082434260606,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 990.0,
                        "totalProfit": 17611.216975
                    }
                }
            },
            {
                "id": "632549",
                "name": "130대질병수술비(유방의장애)",
                "theme": "수술",
                "confidence": 0.1529472964000925,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 21.0,
                        "totalProfit": 531.740467
                    },
                    "200000": {
                        "totalPrice": 41.0,
                        "totalProfit": 1017.639777
                    },
                    "300000": {
                        "totalPrice": 62.0,
                        "totalProfit": 1599.458731
                    },
                    "500000": {
                        "totalPrice": 104.0,
                        "totalProfit": 2763.091838
                    }
                }
            },
            {
                "id": "631138",
                "name": "유사암수술비",
                "theme": "3대진단",
                "confidence": 0.1115930386252125,
                "availableQuantities": [
                    400000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 247.0,
                        "totalProfit": -1872.451331
                    },
                    "1000000": {
                        "totalPrice": 618.0,
                        "totalProfit": -4560.514905
                    },
                    "2000000": {
                        "totalPrice": 1236.0,
                        "totalProfit": -9071.935459
                    },
                    "3000000": {
                        "totalPrice": 1854.0,
                        "totalProfit": -13584.307364
                    },
                    "5000000": {
                        "totalPrice": 3090.0,
                        "totalProfit": -22608.099822
                    }
                }
            },
            {
                "id": "630024",
                "name": "항암방사선약물치료비",
                "theme": "3대진단",
                "confidence": 0.11773011532794132,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 715.0,
                        "totalProfit": 22679.098708
                    },
                    "2000000": {
                        "totalPrice": 1430.0,
                        "totalProfit": 45407.259658
                    },
                    "3000000": {
                        "totalPrice": 2145.0,
                        "totalProfit": 68135.453827
                    },
                    "5000000": {
                        "totalPrice": 3575.0,
                        "totalProfit": 113591.808946
                    }
                }
            },
            {
                "id": "631160",
                "name": "암요양병원입원일당(Ⅱ)(1일이상 90일한도)",
                "theme": "입원일당",
                "confidence": 0.04159388478940002,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 311.0,
                        "totalProfit": 11137.172598
                    },
                    "20000": {
                        "totalPrice": 622.0,
                        "totalProfit": 22323.422407
                    }
                }
            },
            {
                "id": "631802",
                "name": "수술비(1~7종, 연간3회한)[질병1종]",
                "theme": "수술",
                "confidence": 0.30032455617712817,
                "availableQuantities": [
                    50000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1765.0,
                        "totalProfit": 105113.533578
                    },
                    "100000": {
                        "totalPrice": 3530.0,
                        "totalProfit": 210275.183909
                    },
                    "200000": {
                        "totalPrice": 7060.0,
                        "totalProfit": 420599.485856
                    }
                }
            }
        ]
    },
    "1": {
        "id": "1",
        "channel": "GA",
        "age": 45,
        "gndr": "여",
        "unt_pd_nm": "올인원라이프(운전자)",
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
                "kmv_adj": -150000.0
            },
            {
                "tag": "출생전",
                "kmv_adj": -664667.2603089998
            }
        ],
        "items": [
            {
                "id": "611250",
                "name": "운전자용 자동차사고부상치료비(4급)",
                "quantity": 9000000,
                "theme": "운전/비용",
                "totalPrice": 126.0,
                "totalProfit": 912.74223
            },
            {
                "id": "620966",
                "name": "교통사고 처리지원금(Ⅲ)(중대법규위반,6주미만)",
                "quantity": 10000000,
                "theme": "운전/비용",
                "totalPrice": 1276.0,
                "totalProfit": 48558.735441
            },
            {
                "id": "620951",
                "name": "운전자용 벌금(대물)",
                "quantity": 5000000,
                "theme": "운전/비용",
                "totalPrice": 42.0,
                "totalProfit": 417.938179
            },
            {
                "id": "611252",
                "name": "운전자용 자동차사고부상치료비(6급)",
                "quantity": 2400000,
                "theme": "운전/비용",
                "totalPrice": 72.0,
                "totalProfit": 1362.968273
            },
            {
                "id": "660052",
                "name": "가족일상생활중배상책임(Ⅲ)",
                "quantity": 100000000,
                "theme": "재물/배상",
                "totalPrice": 2182.0,
                "totalProfit": -27137.58584
            },
            {
                "id": "620952",
                "name": "운전자용 벌금(Ⅱ)",
                "quantity": 30000000,
                "theme": "운전/비용",
                "totalPrice": 259.0,
                "totalProfit": 2578.611004
            },
            {
                "id": "611255",
                "name": "운전자용 자동차사고부상치료비(9급)",
                "quantity": 600000,
                "theme": "운전/비용",
                "totalPrice": 72.0,
                "totalProfit": 291.015414
            },
            {
                "id": "620973",
                "name": "교통사고 처리지원금(Ⅶ)",
                "quantity": 200000000,
                "theme": "운전/비용",
                "totalPrice": 2999.0,
                "totalProfit": 22855.977318
            },
            {
                "id": "611260",
                "name": "운전자용 자동차사고부상치료비(14급)",
                "quantity": 300000,
                "theme": "운전/비용",
                "totalPrice": 1578.0,
                "totalProfit": -9060.139203
            },
            {
                "id": "611257",
                "name": "운전자용 자동차사고부상치료비(11급)",
                "quantity": 600000,
                "theme": "운전/비용",
                "totalPrice": 456.0,
                "totalProfit": -2106.729357
            },
            {
                "id": "611251",
                "name": "운전자용 자동차사고부상치료비(5급)",
                "quantity": 4500000,
                "theme": "운전/비용",
                "totalPrice": 153.0,
                "totalProfit": 1504.656744
            },
            {
                "id": "610470",
                "name": "상해수술위로금",
                "quantity": 1000000,
                "theme": "수술",
                "totalPrice": 4190.0,
                "totalProfit": -2646.633908
            },
            {
                "id": "610789",
                "name": "일반상해후유장해(3~100%)",
                "quantity": 50000000,
                "theme": "사망후유",
                "totalPrice": 4600.0,
                "totalProfit": 23612.966481
            },
            {
                "id": "611249",
                "name": "운전자용 자동차사고부상치료비(1-14급)[3급]",
                "quantity": 9000000,
                "theme": "운전/비용",
                "totalPrice": 108.0,
                "totalProfit": 1771.536785
            },
            {
                "id": "611254",
                "name": "운전자용 자동차사고부상치료비(8급)",
                "quantity": 600000,
                "theme": "운전/비용",
                "totalPrice": 36.0,
                "totalProfit": 225.974481
            },
            {
                "id": "611164",
                "name": "운전자용 교통상해사망",
                "quantity": 50000000,
                "theme": "사망후유",
                "totalPrice": 1300.0,
                "totalProfit": 34949.558729
            },
            {
                "id": "610663",
                "name": "외모특정상해수술비",
                "quantity": 100000,
                "theme": "수술",
                "totalPrice": 81.0,
                "totalProfit": 2556.551034
            },
            {
                "id": "611247",
                "name": "운전자용 자동차사고부상치료비(1-14급)[1급]",
                "quantity": 30000000,
                "theme": "운전/비용",
                "totalPrice": 2400.0,
                "totalProfit": 83730.183205
            },
            {
                "id": "611258",
                "name": "운전자용 자동차사고부상치료비(12급)",
                "quantity": 300000,
                "theme": "운전/비용",
                "totalPrice": 942.0,
                "totalProfit": -4101.319421
            },
            {
                "id": "611253",
                "name": "운전자용 자동차사고부상치료비(7급)",
                "quantity": 1200000,
                "theme": "운전/비용",
                "totalPrice": 60.0,
                "totalProfit": 827.635709
            },
            {
                "id": "620962",
                "name": "자동차사고 변호사선임비용(타인사망,중대법규위반및중상해경찰조사포함)_자가용운전자용",
                "quantity": 50000000,
                "theme": "운전/비용",
                "totalPrice": 578.0,
                "totalProfit": -1007.16672
            },
            {
                "id": "611259",
                "name": "운전자용 자동차사고부상치료비(13급)",
                "quantity": 300000,
                "theme": "운전/비용",
                "totalPrice": 18.0,
                "totalProfit": 83.664872
            },
            {
                "id": "611256",
                "name": "운전자용 자동차사고부상치료비(10급)",
                "quantity": 600000,
                "theme": "운전/비용",
                "totalPrice": 12.0,
                "totalProfit": 215.99161
            },
            {
                "id": "611248",
                "name": "운전자용 자동차사고부상치료비(1-14급)[2급]",
                "quantity": 12000000,
                "theme": "운전/비용",
                "totalPrice": 204.0,
                "totalProfit": 4702.758884
            }
        ],
        "availableItems": [
            {
                "id": "611193",
                "name": "10대골절수술비",
                "theme": "골절/화상",
                "confidence": 0.025283460458982377,
                "availableQuantities": [
                    200000,
                    500000,
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 68.0,
                        "totalProfit": 1666.597596
                    },
                    "500000": {
                        "totalPrice": 170.0,
                        "totalProfit": 4237.046045
                    },
                    "1000000": {
                        "totalPrice": 340.0,
                        "totalProfit": 8521.01542
                    },
                    "2000000": {
                        "totalPrice": 680.0,
                        "totalProfit": 17088.905256
                    },
                    "3000000": {
                        "totalPrice": 1020.0,
                        "totalProfit": 25656.887323
                    }
                }
            },
            {
                "id": "611250",
                "name": "운전자용 자동차사고부상치료비(4급)",
                "theme": "운전/비용",
                "confidence": 0.19513150218698241,
                "availableQuantities": [
                    3000000,
                    6000000,
                    9000000
                ],
                "recommendedQuantity": 9000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 42.0,
                        "totalProfit": 1121.894291
                    },
                    "6000000": {
                        "totalPrice": 84.0,
                        "totalProfit": 2290.575467
                    },
                    "9000000": {
                        "totalPrice": 126.0,
                        "totalProfit": 3459.256586
                    }
                }
            },
            {
                "id": "620951",
                "name": "운전자용 벌금(대물)",
                "theme": "운전/비용",
                "confidence": 0.6631841531345394,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 42.0,
                        "totalProfit": 958.82633
                    }
                }
            },
            {
                "id": "611182",
                "name": "통합상해진단비(엉덩이 및 다리의 경증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 212.0,
                        "totalProfit": 4260.136053
                    },
                    "30000": {
                        "totalPrice": 318.0,
                        "totalProfit": 6413.651175
                    },
                    "50000": {
                        "totalPrice": 530.0,
                        "totalProfit": 10720.646085
                    }
                }
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.06873311972248448,
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
                        "totalPrice": 676.0,
                        "totalProfit": 15500.279541
                    },
                    "200000": {
                        "totalPrice": 1352.0,
                        "totalProfit": 31047.457027
                    },
                    "300000": {
                        "totalPrice": 2028.0,
                        "totalProfit": 46594.609585
                    },
                    "400000": {
                        "totalPrice": 2704.0,
                        "totalProfit": 62141.796452
                    },
                    "500000": {
                        "totalPrice": 3380.0,
                        "totalProfit": 77688.938143
                    }
                }
            },
            {
                "id": "640545",
                "name": "창상봉합술치료비(안면부 이외)(B)(급여,1일1회,연간3회한)",
                "theme": "기타",
                "confidence": 0.08531562906333028,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 354.0,
                        "totalProfit": 7149.688331
                    },
                    "500000": {
                        "totalPrice": 590.0,
                        "totalProfit": 11947.337089
                    },
                    "1000000": {
                        "totalPrice": 1180.0,
                        "totalProfit": 23941.458982
                    }
                }
            },
            {
                "id": "610469",
                "name": "상해중환자실 입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.0,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 420.0,
                        "totalProfit": 16049.05702
                    },
                    "100000": {
                        "totalPrice": 840.0,
                        "totalProfit": 32144.903665
                    },
                    "200000": {
                        "totalPrice": 1680.0,
                        "totalProfit": 64336.597008
                    },
                    "300000": {
                        "totalPrice": 2520.0,
                        "totalProfit": 96528.293092
                    }
                }
            },
            {
                "id": "611255",
                "name": "운전자용 자동차사고부상치료비(9급)",
                "theme": "운전/비용",
                "confidence": 0.4034648355203157,
                "availableQuantities": [
                    200000,
                    400000,
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 24.0,
                        "totalProfit": 593.577065
                    },
                    "400000": {
                        "totalPrice": 48.0,
                        "totalProfit": 1233.949403
                    },
                    "600000": {
                        "totalPrice": 72.0,
                        "totalProfit": 1874.321741
                    }
                }
            },
            {
                "id": "611128",
                "name": "외상성뇌출혈진단비",
                "theme": "3대진단",
                "confidence": 0.01805259234754597,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 185.0,
                        "totalProfit": 4967.885832
                    },
                    "1000000": {
                        "totalPrice": 370.0,
                        "totalProfit": 9982.460699
                    },
                    "2000000": {
                        "totalPrice": 740.0,
                        "totalProfit": 20012.140658
                    }
                }
            },
            {
                "id": "610464",
                "name": "상해흉터복원수술비",
                "theme": "수술",
                "confidence": 0.0,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 3071.0,
                        "totalProfit": 98898.995216
                    }
                }
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "theme": "골절/화상",
                "confidence": 0.05040299293375944,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 60.0,
                        "totalProfit": 970.608158
                    },
                    "200000": {
                        "totalPrice": 120.0,
                        "totalProfit": 1988.000294
                    }
                }
            },
            {
                "id": "611180",
                "name": "통합상해진단비(손목 및 손의 중등증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 263.0,
                        "totalProfit": 5189.002799
                    },
                    "200000": {
                        "totalPrice": 526.0,
                        "totalProfit": 10424.823177
                    },
                    "300000": {
                        "totalPrice": 789.0,
                        "totalProfit": 15660.64041
                    },
                    "500000": {
                        "totalPrice": 1315.0,
                        "totalProfit": 26132.3145
                    }
                }
            },
            {
                "id": "640530",
                "name": "응급실내원비(1~3등급)(응급실내원비(3등급))",
                "theme": "기타",
                "confidence": 0.006533312349783237,
                "availableQuantities": [
                    30000,
                    50000,
                    70000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 390.0,
                        "totalProfit": 12288.650815
                    },
                    "50000": {
                        "totalPrice": 650.0,
                        "totalProfit": 20512.471984
                    },
                    "70000": {
                        "totalPrice": 910.0,
                        "totalProfit": 28736.196824
                    },
                    "100000": {
                        "totalPrice": 1300.0,
                        "totalProfit": 41071.850768
                    }
                }
            },
            {
                "id": "611185",
                "name": "통합상해진단비(발목 및 발의 경증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 208.0,
                        "totalProfit": 3985.21609
                    },
                    "30000": {
                        "totalPrice": 312.0,
                        "totalProfit": 6001.216538
                    },
                    "50000": {
                        "totalPrice": 520.0,
                        "totalProfit": 10033.217433
                    }
                }
            },
            {
                "id": "611198",
                "name": "보행자 자동차사고부상치료비",
                "theme": "기타",
                "confidence": 0.0016860568466478415,
                "availableQuantities": [
                    3000000,
                    6000000
                ],
                "recommendedQuantity": 6000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 119.0,
                        "totalProfit": 4036.53846
                    },
                    "6000000": {
                        "totalPrice": 238.0,
                        "totalProfit": 8119.809565
                    }
                }
            },
            {
                "id": "611183",
                "name": "통합상해진단비(엉덩이 및 다리의 중등증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 256.0,
                        "totalProfit": 5142.320199
                    },
                    "200000": {
                        "totalPrice": 512.0,
                        "totalProfit": 10331.512396
                    },
                    "300000": {
                        "totalPrice": 768.0,
                        "totalProfit": 15520.712763
                    },
                    "500000": {
                        "totalPrice": 1280.0,
                        "totalProfit": 25899.072883
                    }
                }
            },
            {
                "id": "611257",
                "name": "운전자용 자동차사고부상치료비(11급)",
                "theme": "운전/비용",
                "confidence": 0.48679816885364907,
                "availableQuantities": [
                    200000,
                    400000,
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 152.0,
                        "totalProfit": 3466.042095
                    },
                    "400000": {
                        "totalPrice": 304.0,
                        "totalProfit": 6978.873817
                    },
                    "600000": {
                        "totalPrice": 456.0,
                        "totalProfit": 10491.708334
                    }
                }
            },
            {
                "id": "640528",
                "name": "응급실내원비(1~3등급)(응급실내원비(1등급))",
                "theme": "기타",
                "confidence": 0.006533312349783237,
                "availableQuantities": [
                    200000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 86.0,
                        "totalProfit": 2548.689617
                    },
                    "500000": {
                        "totalPrice": 215.0,
                        "totalProfit": 6442.299139
                    },
                    "1000000": {
                        "totalPrice": 430.0,
                        "totalProfit": 12931.825303
                    },
                    "2000000": {
                        "totalPrice": 860.0,
                        "totalProfit": 25910.813107
                    }
                }
            },
            {
                "id": "610926",
                "name": "운전자용 교통상해골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.004234537003122963,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 11.0,
                        "totalProfit": 171.912659
                    },
                    "200000": {
                        "totalPrice": 22.0,
                        "totalProfit": 390.614942
                    }
                }
            },
            {
                "id": "611260",
                "name": "운전자용 자동차사고부상치료비(14급)",
                "theme": "운전/비용",
                "confidence": 0.611798168853649,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 526.0,
                        "totalProfit": 11841.931474
                    },
                    "200000": {
                        "totalPrice": 1052.0,
                        "totalProfit": 23730.65822
                    },
                    "300000": {
                        "totalPrice": 1578.0,
                        "totalProfit": 35619.384966
                    }
                }
            },
            {
                "id": "611254",
                "name": "운전자용 자동차사고부상치료비(8급)",
                "theme": "운전/비용",
                "confidence": 0.36179816885364907,
                "availableQuantities": [
                    200000,
                    400000,
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 12.0,
                        "totalProfit": 286.970524
                    },
                    "400000": {
                        "totalPrice": 24.0,
                        "totalProfit": 620.730728
                    },
                    "600000": {
                        "totalPrice": 36.0,
                        "totalProfit": 954.490766
                    }
                }
            },
            {
                "id": "610939",
                "name": "상해사고부상치료비[5등급]",
                "theme": "수술",
                "confidence": 0.000615041689322975,
                "availableQuantities": [
                    50000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 108.0,
                        "totalProfit": 2954.728287
                    },
                    "100000": {
                        "totalPrice": 215.0,
                        "totalProfit": 5915.950436
                    },
                    "200000": {
                        "totalPrice": 430.0,
                        "totalProfit": 11878.68485
                    }
                }
            },
            {
                "id": "611170",
                "name": "통합상해진단비(머리 및 목의 경증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 266.0,
                        "totalProfit": 5271.823878
                    },
                    "30000": {
                        "totalPrice": 399.0,
                        "totalProfit": 7931.142397
                    },
                    "50000": {
                        "totalPrice": 665.0,
                        "totalProfit": 13249.791578
                    }
                }
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.009307449695193962,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 2.0,
                        "totalProfit": 3.559859
                    },
                    "30000": {
                        "totalPrice": 3.0,
                        "totalProfit": 28.731777
                    },
                    "50000": {
                        "totalPrice": 6.0,
                        "totalProfit": 119.357987
                    }
                }
            },
            {
                "id": "610936",
                "name": "상해사고부상치료비[2등급]",
                "theme": "수술",
                "confidence": 0.000615041689322975,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 3234.0,
                        "totalProfit": 92208.979105
                    },
                    "5000000": {
                        "totalPrice": 5390.0,
                        "totalProfit": 153712.935425
                    }
                }
            },
            {
                "id": "640543",
                "name": "창상봉합술치료비(안면부)(B)(급여,1일1회,연간3회한)",
                "theme": "기타",
                "confidence": 0.08531562906333028,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 210.0,
                        "totalProfit": 4238.363627
                    },
                    "500000": {
                        "totalPrice": 350.0,
                        "totalProfit": 7095.358391
                    },
                    "1000000": {
                        "totalPrice": 700.0,
                        "totalProfit": 14237.66063
                    },
                    "2000000": {
                        "totalPrice": 1400.0,
                        "totalProfit": 28522.350358
                    }
                }
            },
            {
                "id": "610852",
                "name": "종합병원 일반상해입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.02071387886751498,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 359.0,
                        "totalProfit": 8451.639257
                    },
                    "20000": {
                        "totalPrice": 718.0,
                        "totalProfit": 16950.285618
                    },
                    "30000": {
                        "totalPrice": 1077.0,
                        "totalProfit": 25448.950039
                    }
                }
            },
            {
                "id": "611199",
                "name": "상해MRI/CT검사비(급여,연간1회한)",
                "theme": "기타",
                "confidence": 0.01149590926237184,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 778.0,
                        "totalProfit": 15961.210341
                    }
                }
            },
            {
                "id": "610728",
                "name": "외상성척추손상 수술비",
                "theme": "수술",
                "confidence": 0.01283387603177163,
                "availableQuantities": [
                    100000,
                    300000,
                    1000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 6.0,
                        "totalProfit": 178.002058
                    },
                    "300000": {
                        "totalPrice": 18.0,
                        "totalProfit": 627.588221
                    },
                    "1000000": {
                        "totalPrice": 60.0,
                        "totalProfit": 2201.132857
                    }
                }
            },
            {
                "id": "620016",
                "name": "가족과실치사상벌금",
                "theme": "재물/배상",
                "confidence": 0.08895719573154597,
                "availableQuantities": [
                    7000000
                ],
                "recommendedQuantity": 7000000,
                "priceAndProfitByQuantity": {
                    "7000000": {
                        "totalPrice": 4.0,
                        "totalProfit": 88.989311
                    }
                }
            },
            {
                "id": "611251",
                "name": "운전자용 자동차사고부상치료비(5급)",
                "theme": "운전/비용",
                "confidence": 0.23679816885364904,
                "availableQuantities": [
                    1500000,
                    3000000,
                    4500000
                ],
                "recommendedQuantity": 4500000,
                "priceAndProfitByQuantity": {
                    "1500000": {
                        "totalPrice": 51.0,
                        "totalProfit": 1422.815993
                    },
                    "3000000": {
                        "totalPrice": 102.0,
                        "totalProfit": 2892.363312
                    },
                    "4500000": {
                        "totalPrice": 153.0,
                        "totalProfit": 4361.966134
                    }
                }
            },
            {
                "id": "611173",
                "name": "통합상해진단비(복부 및 등의 경증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 496.0,
                        "totalProfit": 9794.076476
                    },
                    "30000": {
                        "totalPrice": 744.0,
                        "totalProfit": 14714.517178
                    },
                    "50000": {
                        "totalPrice": 1240.0,
                        "totalProfit": 24555.401027
                    }
                }
            },
            {
                "id": "611177",
                "name": "통합상해진단비(어깨 및 팔의 중등증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 341.0,
                        "totalProfit": 6853.016048
                    },
                    "200000": {
                        "totalPrice": 682.0,
                        "totalProfit": 13752.963155
                    },
                    "300000": {
                        "totalPrice": 1023.0,
                        "totalProfit": 20652.886157
                    },
                    "500000": {
                        "totalPrice": 1705.0,
                        "totalProfit": 34452.881799
                    }
                }
            },
            {
                "id": "611191",
                "name": "일반상해입원후통원비(3일이상연속입원,4회한)",
                "theme": "기타",
                "confidence": 0.003163718128318366,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 505.0,
                        "totalProfit": 12657.165179
                    },
                    "30000": {
                        "totalPrice": 758.0,
                        "totalProfit": 19029.335605
                    },
                    "50000": {
                        "totalPrice": 1264.0,
                        "totalProfit": 31773.516723
                    }
                }
            },
            {
                "id": "640047",
                "name": "인공관절수술비",
                "theme": "수술",
                "confidence": 0.12023222380299987,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 25.0,
                        "totalProfit": 470.352149
                    },
                    "500000": {
                        "totalPrice": 42.0,
                        "totalProfit": 828.695181
                    },
                    "1000000": {
                        "totalPrice": 84.0,
                        "totalProfit": 1704.07821
                    }
                }
            },
            {
                "id": "620274",
                "name": "보복운전피해",
                "theme": "기타",
                "confidence": 0.2973182449544935,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 10.0,
                        "totalProfit": 127.737757
                    }
                }
            },
            {
                "id": "611014",
                "name": "수술비(1~7종, 연간3회한)[상해3종]",
                "theme": "수술",
                "confidence": 0.0328276636251249,
                "availableQuantities": [
                    100000,
                    200000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 25.0,
                        "totalProfit": 609.559661
                    },
                    "200000": {
                        "totalPrice": 50.0,
                        "totalProfit": 1266.018467
                    },
                    "400000": {
                        "totalPrice": 100.0,
                        "totalProfit": 2578.992623
                    },
                    "500000": {
                        "totalPrice": 125.0,
                        "totalProfit": 3235.498523
                    }
                }
            },
            {
                "id": "611310",
                "name": "간병인지원 일반상해입원일당(Ⅰ)(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.0054601502432991495,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 13.0,
                        "totalProfit": 293.9952
                    },
                    "20000": {
                        "totalPrice": 26.0,
                        "totalProfit": 634.809098
                    }
                }
            },
            {
                "id": "611256",
                "name": "운전자용 자동차사고부상치료비(10급)",
                "theme": "운전/비용",
                "confidence": 0.4451315021869824,
                "availableQuantities": [
                    200000,
                    400000,
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 4.0,
                        "totalProfit": 86.891398
                    },
                    "400000": {
                        "totalPrice": 8.0,
                        "totalProfit": 220.572477
                    },
                    "600000": {
                        "totalPrice": 12.0,
                        "totalProfit": 354.256297
                    }
                }
            },
            {
                "id": "611252",
                "name": "운전자용 자동차사고부상치료비(6급)",
                "theme": "운전/비용",
                "confidence": 0.2784648355203157,
                "availableQuantities": [
                    800000,
                    1600000,
                    2400000
                ],
                "recommendedQuantity": 2400000,
                "priceAndProfitByQuantity": {
                    "800000": {
                        "totalPrice": 24.0,
                        "totalProfit": 733.937415
                    },
                    "1600000": {
                        "totalPrice": 48.0,
                        "totalProfit": 1514.661604
                    },
                    "2400000": {
                        "totalPrice": 72.0,
                        "totalProfit": 2295.391384
                    }
                }
            },
            {
                "id": "610470",
                "name": "상해수술위로금",
                "theme": "수술",
                "confidence": 0.0,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000,
                    1500000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 1257.0,
                        "totalProfit": 22574.171283
                    },
                    "500000": {
                        "totalPrice": 2095.0,
                        "totalProfit": 37654.824606
                    },
                    "1000000": {
                        "totalPrice": 4190.0,
                        "totalProfit": 75356.467399
                    },
                    "1500000": {
                        "totalPrice": 6285.0,
                        "totalProfit": 113058.09326
                    },
                    "2000000": {
                        "totalPrice": 8380.0,
                        "totalProfit": 150759.752649
                    }
                }
            },
            {
                "id": "611010",
                "name": "특정외상성손상진단비",
                "theme": "기타",
                "confidence": 0.018008198508637045,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 455.0,
                        "totalProfit": 13889.657845
                    },
                    "1000000": {
                        "totalPrice": 910.0,
                        "totalProfit": 27826.280848
                    },
                    "2000000": {
                        "totalPrice": 1820.0,
                        "totalProfit": 55699.506827
                    }
                }
            },
            {
                "id": "610938",
                "name": "상해사고부상치료비[4등급]",
                "theme": "수술",
                "confidence": 0.000615041689322975,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 759.0,
                        "totalProfit": 21801.341655
                    },
                    "500000": {
                        "totalPrice": 1265.0,
                        "totalProfit": 36366.761054
                    },
                    "1000000": {
                        "totalPrice": 2530.0,
                        "totalProfit": 72780.328495
                    }
                }
            },
            {
                "id": "610935",
                "name": "상해사고부상치료비[1등급]",
                "theme": "수술",
                "confidence": 0.000615041689322975,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 720.0,
                        "totalProfit": 19343.300437
                    },
                    "5000000": {
                        "totalPrice": 1200.0,
                        "totalProfit": 32270.072082
                    }
                }
            },
            {
                "id": "611187",
                "name": "통합상해진단비(발목 및 발의 중증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 112.0,
                        "totalProfit": 2245.990122
                    },
                    "2000000": {
                        "totalPrice": 224.0,
                        "totalProfit": 4538.900859
                    },
                    "3000000": {
                        "totalPrice": 336.0,
                        "totalProfit": 6831.84755
                    },
                    "5000000": {
                        "totalPrice": 560.0,
                        "totalProfit": 11417.640331
                    }
                }
            },
            {
                "id": "640540",
                "name": "통합골절치료비(깁스치료비)",
                "theme": "골절/화상",
                "confidence": 0.06768094047938268,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 89.0,
                        "totalProfit": 2183.189205
                    },
                    "200000": {
                        "totalPrice": 178.0,
                        "totalProfit": 4413.174023
                    },
                    "300000": {
                        "totalPrice": 267.0,
                        "totalProfit": 6643.15308
                    },
                    "500000": {
                        "totalPrice": 445.0,
                        "totalProfit": 11103.128364
                    }
                }
            },
            {
                "id": "640154",
                "name": "응급실내원비(응급)",
                "theme": "기타",
                "confidence": 0.17849274357966705,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 362.0,
                        "totalProfit": 9309.99778
                    },
                    "30000": {
                        "totalPrice": 543.0,
                        "totalProfit": 13988.483229
                    },
                    "50000": {
                        "totalPrice": 905.0,
                        "totalProfit": 23345.400623
                    },
                    "100000": {
                        "totalPrice": 1810.0,
                        "totalProfit": 46737.704161
                    }
                }
            },
            {
                "id": "640529",
                "name": "응급실내원비(1~3등급)(응급실내원비(2등급))",
                "theme": "기타",
                "confidence": 0.006533312349783237,
                "availableQuantities": [
                    100000,
                    200000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 238.0,
                        "totalProfit": 7274.456296
                    },
                    "200000": {
                        "totalPrice": 476.0,
                        "totalProfit": 14596.036374
                    },
                    "500000": {
                        "totalPrice": 1190.0,
                        "totalProfit": 36560.453782
                    },
                    "1000000": {
                        "totalPrice": 2380.0,
                        "totalProfit": 73168.042931
                    }
                }
            },
            {
                "id": "611194",
                "name": "상해재활치료비(급여,1일1회한,연간15회한)",
                "theme": "기타",
                "confidence": 0.007754841002029038,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1246.0,
                        "totalProfit": 45449.649206
                    },
                    "20000": {
                        "totalPrice": 2492.0,
                        "totalProfit": 90946.159347
                    },
                    "30000": {
                        "totalPrice": 3738.0,
                        "totalProfit": 136442.6617
                    }
                }
            },
            {
                "id": "640181",
                "name": "신깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.04793021759394248,
                "availableQuantities": [
                    100000,
                    300000,
                    500000,
                    800000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 39.0,
                        "totalProfit": 1233.156432
                    },
                    "300000": {
                        "totalPrice": 117.0,
                        "totalProfit": 3793.051176
                    },
                    "500000": {
                        "totalPrice": 195.0,
                        "totalProfit": 6352.943125
                    },
                    "800000": {
                        "totalPrice": 312.0,
                        "totalProfit": 10192.781129
                    },
                    "1000000": {
                        "totalPrice": 390.0,
                        "totalProfit": 12752.673078
                    }
                }
            },
            {
                "id": "610726",
                "name": "무릎인대파열·연골손상 수술비",
                "theme": "수술",
                "confidence": 0.00926382531187648,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 13.0,
                        "totalProfit": 110.679487
                    },
                    "200000": {
                        "totalPrice": 26.0,
                        "totalProfit": 268.148544
                    },
                    "300000": {
                        "totalPrice": 39.0,
                        "totalProfit": 425.612009
                    }
                }
            },
            {
                "id": "611259",
                "name": "운전자용 자동차사고부상치료비(13급)",
                "theme": "운전/비용",
                "confidence": 0.5701315021869824,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 6.0,
                        "totalProfit": 119.302415
                    },
                    "200000": {
                        "totalPrice": 12.0,
                        "totalProfit": 285.394456
                    },
                    "300000": {
                        "totalPrice": 18.0,
                        "totalProfit": 451.489293
                    }
                }
            },
            {
                "id": "610928",
                "name": "한방치료비Ⅱ[골절(치아파절제외)]",
                "theme": "골절/화상",
                "confidence": 0.005216086924027612,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1440.0,
                        "totalProfit": 56758.815509
                    },
                    "200000": {
                        "totalPrice": 2880.0,
                        "totalProfit": 113564.420643
                    }
                }
            },
            {
                "id": "610757",
                "name": "상해수술 한방치료비",
                "theme": "기타",
                "confidence": 0.0011869750844676124,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1330.0,
                        "totalProfit": 52846.632223
                    },
                    "200000": {
                        "totalPrice": 2660.0,
                        "totalProfit": 105740.053959
                    }
                }
            },
            {
                "id": "611016",
                "name": "수술비(1~7종, 연간3회한)[상해5종]",
                "theme": "수술",
                "confidence": 0.0328276636251249,
                "availableQuantities": [
                    200000,
                    1000000,
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 10.0,
                        "totalProfit": 218.780701
                    },
                    "1000000": {
                        "totalPrice": 50.0,
                        "totalProfit": 1281.491145
                    },
                    "2000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 2609.879597
                    },
                    "5000000": {
                        "totalPrice": 250.0,
                        "totalProfit": 6595.107131
                    }
                }
            },
            {
                "id": "611258",
                "name": "운전자용 자동차사고부상치료비(12급)",
                "theme": "운전/비용",
                "confidence": 0.5284648355203158,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 314.0,
                        "totalProfit": 7223.506414
                    },
                    "200000": {
                        "totalPrice": 628.0,
                        "totalProfit": 14493.802343
                    },
                    "300000": {
                        "totalPrice": 942.0,
                        "totalProfit": 21764.095476
                    }
                }
            },
            {
                "id": "611309",
                "name": "간병인지원 일반상해입원일당(Ⅰ)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.007731349841464762,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 4264.0,
                        "totalProfit": 125884.598497
                    },
                    "20000": {
                        "totalPrice": 8528.0,
                        "totalProfit": 251816.204984
                    }
                }
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "theme": "입원일당",
                "confidence": 0.0,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1033.0,
                        "totalProfit": 25467.248147
                    },
                    "20000": {
                        "totalPrice": 2066.0,
                        "totalProfit": 50981.401454
                    },
                    "30000": {
                        "totalPrice": 3099.0,
                        "totalProfit": 76495.617783
                    }
                }
            },
            {
                "id": "611061",
                "name": "특정이물제거치료비Ⅰ(급여,연간1회한)",
                "theme": "기타",
                "confidence": 0.0038896574375531455,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 549.0,
                        "totalProfit": 20536.850333
                    }
                }
            },
            {
                "id": "611015",
                "name": "수술비(1~7종, 연간3회한)[상해4종]",
                "theme": "수술",
                "confidence": 0.0328276636251249,
                "availableQuantities": [
                    150000,
                    400000,
                    600000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "150000": {
                        "totalPrice": 21.0,
                        "totalProfit": 428.698532
                    },
                    "400000": {
                        "totalPrice": 56.0,
                        "totalProfit": 1233.000846
                    },
                    "600000": {
                        "totalPrice": 84.0,
                        "totalProfit": 1873.10948
                    },
                    "1000000": {
                        "totalPrice": 140.0,
                        "totalProfit": 3153.32367
                    }
                }
            },
            {
                "id": "610663",
                "name": "외모특정상해수술비",
                "theme": "수술",
                "confidence": 0.008482094355092734,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 81.0,
                        "totalProfit": 3013.517109
                    }
                }
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "theme": "골절/화상",
                "confidence": 0.05040299293375944,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 8.0,
                        "totalProfit": 207.309366
                    },
                    "200000": {
                        "totalPrice": 16.0,
                        "totalProfit": 461.450844
                    }
                }
            },
            {
                "id": "611012",
                "name": "수술비(1~7종, 연간3회한)[상해1종]",
                "theme": "수술",
                "confidence": 0.0328276636251249,
                "availableQuantities": [
                    50000,
                    100000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 240.0,
                        "totalProfit": 6431.121416
                    },
                    "100000": {
                        "totalPrice": 480.0,
                        "totalProfit": 12909.090618
                    },
                    "300000": {
                        "totalPrice": 1440.0,
                        "totalProfit": 38820.992304
                    }
                }
            },
            {
                "id": "611253",
                "name": "운전자용 자동차사고부상치료비(7급)",
                "theme": "운전/비용",
                "confidence": 0.3201315021869824,
                "availableQuantities": [
                    400000,
                    800000,
                    1200000
                ],
                "recommendedQuantity": 1200000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 20.0,
                        "totalProfit": 564.294595
                    },
                    "800000": {
                        "totalPrice": 40.0,
                        "totalProfit": 1175.378814
                    },
                    "1200000": {
                        "totalPrice": 60.0,
                        "totalProfit": 1786.460238
                    }
                }
            },
            {
                "id": "611164",
                "name": "운전자용 교통상해사망",
                "theme": "사망후유",
                "confidence": 0.08253684067038956,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 26.0,
                        "totalProfit": 669.888488
                    }
                }
            },
            {
                "id": "611172",
                "name": "통합상해진단비(머리 및 목의 중증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 218.0,
                        "totalProfit": 4354.294045
                    },
                    "2000000": {
                        "totalPrice": 436.0,
                        "totalProfit": 8755.728428
                    },
                    "3000000": {
                        "totalPrice": 654.0,
                        "totalProfit": 13157.015733
                    },
                    "5000000": {
                        "totalPrice": 1090.0,
                        "totalProfit": 21959.724067
                    }
                }
            },
            {
                "id": "610918",
                "name": "골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.04983052575211431,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 144.0,
                        "totalProfit": 3473.038045
                    },
                    "200000": {
                        "totalPrice": 288.0,
                        "totalProfit": 6992.935506
                    }
                }
            },
            {
                "id": "610755",
                "name": "운전자용 자동차사고부상(1~11급) 한방치료비",
                "theme": "기타",
                "confidence": 0.0006846922896576375,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 530.0,
                        "totalProfit": -8189.596396
                    },
                    "200000": {
                        "totalPrice": 1060.0,
                        "totalProfit": -16332.397519
                    }
                }
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.3793940620745165,
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
                        "totalPrice": 89.0,
                        "totalProfit": 2183.189205
                    },
                    "200000": {
                        "totalPrice": 178.0,
                        "totalProfit": 4413.174023
                    },
                    "300000": {
                        "totalPrice": 267.0,
                        "totalProfit": 6643.15308
                    },
                    "500000": {
                        "totalPrice": 445.0,
                        "totalProfit": 11103.128364
                    },
                    "1000000": {
                        "totalPrice": 890.0,
                        "totalProfit": 22253.049321
                    }
                }
            },
            {
                "id": "611195",
                "name": "통합골절치료비(골절(치아파절제외) 철심제거수술비(급여,연간1회한))",
                "theme": "골절/화상",
                "confidence": 0.013218060511262578,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 140.0,
                        "totalProfit": 2910.984536
                    },
                    "300000": {
                        "totalPrice": 210.0,
                        "totalProfit": 4389.916467
                    },
                    "500000": {
                        "totalPrice": 350.0,
                        "totalProfit": 7347.772448
                    }
                }
            },
            {
                "id": "640541",
                "name": "통합골절치료비(골절탈구 도수정복술치료비(급여,연간1회한))",
                "theme": "골절/화상",
                "confidence": 0.06768094047938268,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 80.0,
                        "totalProfit": 1371.536563
                    }
                }
            },
            {
                "id": "611175",
                "name": "통합상해진단비(복부 및 등의 중증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 43.0,
                        "totalProfit": 842.985086
                    },
                    "2000000": {
                        "totalPrice": 86.0,
                        "totalProfit": 1732.96564
                    },
                    "3000000": {
                        "totalPrice": 129.0,
                        "totalProfit": 2622.964801
                    },
                    "5000000": {
                        "totalPrice": 215.0,
                        "totalProfit": 4402.853994
                    }
                }
            },
            {
                "id": "611013",
                "name": "수술비(1~7종, 연간3회한)[상해2종]",
                "theme": "수술",
                "confidence": 0.0328276636251249,
                "availableQuantities": [
                    50000,
                    100000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 45.0,
                        "totalProfit": 1141.04802
                    },
                    "100000": {
                        "totalPrice": 90.0,
                        "totalProfit": 2329.048225
                    },
                    "300000": {
                        "totalPrice": 270.0,
                        "totalProfit": 7081.001905
                    }
                }
            },
            {
                "id": "610766",
                "name": "상급종합병원일반상해입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.0023915712412754457,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 62.0,
                        "totalProfit": 1542.133433
                    },
                    "20000": {
                        "totalPrice": 124.0,
                        "totalProfit": 3131.329376
                    },
                    "30000": {
                        "totalPrice": 186.0,
                        "totalProfit": 4720.396787
                    }
                }
            },
            {
                "id": "611189",
                "name": "통합상해진단비(기타의 중등증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 2.0,
                        "totalProfit": -12.150017
                    },
                    "200000": {
                        "totalPrice": 4.0,
                        "totalProfit": 22.675077
                    },
                    "300000": {
                        "totalPrice": 6.0,
                        "totalProfit": 57.495959
                    },
                    "500000": {
                        "totalPrice": 10.0,
                        "totalProfit": 127.324489
                    }
                }
            },
            {
                "id": "611196",
                "name": "통합골절치료비(골절(치아파절제외) 부목치료비(급여,연간1회한))",
                "theme": "골절/화상",
                "confidence": 0.013218060511262578,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 280.0,
                        "totalProfit": 5627.645777
                    },
                    "200000": {
                        "totalPrice": 560.0,
                        "totalProfit": 11302.15865
                    }
                }
            },
            {
                "id": "640542",
                "name": "창상봉합술치료비(안면부)(A)(급여,1일1회,연간3회한)",
                "theme": "기타",
                "confidence": 0.08531562906333028,
                "availableQuantities": [
                    50000,
                    100000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 35.0,
                        "totalProfit": 709.624361
                    },
                    "100000": {
                        "totalPrice": 70.0,
                        "totalProfit": 1466.159891
                    }
                }
            },
            {
                "id": "611197",
                "name": "통합골절치료비(골절수술비Ⅱ)",
                "theme": "골절/화상",
                "confidence": 0.013218060511262578,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 144.0,
                        "totalProfit": 3473.038045
                    },
                    "200000": {
                        "totalPrice": 288.0,
                        "totalProfit": 6992.935506
                    }
                }
            },
            {
                "id": "610880",
                "name": "일반상해수술입원일당(1일이상 20일한도)",
                "theme": "입원일당",
                "confidence": 0.009134478820554291,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 247.0,
                        "totalProfit": 4830.15934
                    },
                    "20000": {
                        "totalPrice": 494.0,
                        "totalProfit": 9707.108249
                    },
                    "30000": {
                        "totalPrice": 741.0,
                        "totalProfit": 14584.051567
                    },
                    "50000": {
                        "totalPrice": 1235.0,
                        "totalProfit": 24337.943793
                    }
                }
            },
            {
                "id": "611178",
                "name": "통합상해진단비(어깨 및 팔의 중증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 34.0,
                        "totalProfit": 647.224684
                    },
                    "2000000": {
                        "totalPrice": 68.0,
                        "totalProfit": 1341.389382
                    },
                    "3000000": {
                        "totalPrice": 102.0,
                        "totalProfit": 2035.552541
                    },
                    "5000000": {
                        "totalPrice": 170.0,
                        "totalProfit": 3424.07875
                    }
                }
            },
            {
                "id": "611188",
                "name": "통합상해진단비(기타의 상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 108.0,
                        "totalProfit": 786.578684
                    },
                    "30000": {
                        "totalPrice": 162.0,
                        "totalProfit": 1203.286076
                    },
                    "50000": {
                        "totalPrice": 270.0,
                        "totalProfit": 2036.761381
                    }
                }
            },
            {
                "id": "640544",
                "name": "창상봉합술치료비(안면부 이외)(A)(급여,1일1회,연간3회한)",
                "theme": "기타",
                "confidence": 0.08531562906333028,
                "availableQuantities": [
                    50000,
                    100000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 200.0,
                        "totalProfit": 4089.774542
                    },
                    "100000": {
                        "totalPrice": 400.0,
                        "totalProfit": 8226.488476
                    }
                }
            },
            {
                "id": "610912",
                "name": "골절(치아파절제외)진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.03836594813725716,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 439.0,
                        "totalProfit": 8596.452904
                    },
                    "200000": {
                        "totalPrice": 878.0,
                        "totalProfit": 17239.737077
                    },
                    "300000": {
                        "totalPrice": 1317.0,
                        "totalProfit": 25883.017399
                    },
                    "500000": {
                        "totalPrice": 2195.0,
                        "totalProfit": 43169.58609
                    }
                }
            },
            {
                "id": "610937",
                "name": "상해사고부상치료비[3등급]",
                "theme": "수술",
                "confidence": 0.000615041689322975,
                "availableQuantities": [
                    300000,
                    1000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 236.0,
                        "totalProfit": 6682.443748
                    },
                    "1000000": {
                        "totalPrice": 786.0,
                        "totalProfit": 22357.115032
                    }
                }
            },
            {
                "id": "610927",
                "name": "운전자용 교통상해골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.004895109337730779,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 36.0,
                        "totalProfit": 937.655167
                    },
                    "200000": {
                        "totalPrice": 72.0,
                        "totalProfit": 1922.100015
                    }
                }
            },
            {
                "id": "611171",
                "name": "통합상해진단비(머리 및 목의 중등증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 936.0,
                        "totalProfit": 19261.347053
                    },
                    "200000": {
                        "totalPrice": 1872.0,
                        "totalProfit": 38569.706464
                    },
                    "300000": {
                        "totalPrice": 2808.0,
                        "totalProfit": 57878.079261
                    },
                    "500000": {
                        "totalPrice": 4680.0,
                        "totalProfit": 96494.872533
                    }
                }
            },
            {
                "id": "611181",
                "name": "통합상해진단비(손목 및 손의 중증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 552.0,
                        "totalProfit": 11145.548119
                    },
                    "2000000": {
                        "totalPrice": 1104.0,
                        "totalProfit": 22338.085207
                    },
                    "3000000": {
                        "totalPrice": 1656.0,
                        "totalProfit": 33530.647787
                    },
                    "5000000": {
                        "totalPrice": 2760.0,
                        "totalProfit": 55915.769393
                    }
                }
            },
            {
                "id": "611174",
                "name": "통합상해진단비(복부 및 등의 중등증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 325.0,
                        "totalProfit": 6543.143437
                    },
                    "200000": {
                        "totalPrice": 650.0,
                        "totalProfit": 13133.338396
                    },
                    "300000": {
                        "totalPrice": 975.0,
                        "totalProfit": 19723.518667
                    },
                    "500000": {
                        "totalPrice": 1625.0,
                        "totalProfit": 32903.896669
                    }
                }
            },
            {
                "id": "611192",
                "name": "10대골절진단비",
                "theme": "골절/화상",
                "confidence": 0.030445029528485212,
                "availableQuantities": [
                    300000,
                    500000,
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 351.0,
                        "totalProfit": 8274.454566
                    },
                    "500000": {
                        "totalPrice": 585.0,
                        "totalProfit": 13822.078033
                    },
                    "1000000": {
                        "totalPrice": 1170.0,
                        "totalProfit": 27691.111128
                    },
                    "2000000": {
                        "totalPrice": 2340.0,
                        "totalProfit": 55429.236798
                    },
                    "3000000": {
                        "totalPrice": 3510.0,
                        "totalProfit": 83167.364193
                    }
                }
            },
            {
                "id": "611176",
                "name": "통합상해진단비(어깨 및 팔의 경증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 234.0,
                        "totalProfit": 4633.309377
                    },
                    "30000": {
                        "totalPrice": 351.0,
                        "totalProfit": 6973.377692
                    },
                    "50000": {
                        "totalPrice": 585.0,
                        "totalProfit": 11653.505576
                    }
                }
            },
            {
                "id": "611249",
                "name": "운전자용 자동차사고부상치료비(1-14급)[3급]",
                "theme": "운전/비용",
                "confidence": 0.15346483552031576,
                "availableQuantities": [
                    9000000
                ],
                "recommendedQuantity": 9000000,
                "priceAndProfitByQuantity": {
                    "9000000": {
                        "totalPrice": 108.0,
                        "totalProfit": 3348.615355
                    }
                }
            },
            {
                "id": "611179",
                "name": "통합상해진단비(손목 및 손의 경증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 272.0,
                        "totalProfit": 5295.495494
                    },
                    "30000": {
                        "totalPrice": 408.0,
                        "totalProfit": 7966.635643
                    },
                    "50000": {
                        "totalPrice": 680.0,
                        "totalProfit": 13308.915942
                    }
                }
            },
            {
                "id": "610744",
                "name": "척추골절진단비",
                "theme": "골절/화상",
                "confidence": 0.003452567501300829,
                "availableQuantities": [
                    200000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 82.0,
                        "totalProfit": 1343.352793
                    },
                    "500000": {
                        "totalPrice": 205.0,
                        "totalProfit": 3428.557949
                    },
                    "1000000": {
                        "totalPrice": 410.0,
                        "totalProfit": 6903.905521
                    }
                }
            },
            {
                "id": "610708",
                "name": "관절(무릎·고관절) 수술비",
                "theme": "수술",
                "confidence": 0.014138753511312179,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 19.0,
                        "totalProfit": 177.352748
                    },
                    "200000": {
                        "totalPrice": 38.0,
                        "totalProfit": 401.495119
                    },
                    "300000": {
                        "totalPrice": 57.0,
                        "totalProfit": 625.634695
                    }
                }
            },
            {
                "id": "611186",
                "name": "통합상해진단비(발목 및 발의 중등증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 162.0,
                        "totalProfit": 3148.236476
                    },
                    "200000": {
                        "totalPrice": 324.0,
                        "totalProfit": 6343.297396
                    },
                    "300000": {
                        "totalPrice": 486.0,
                        "totalProfit": 9538.352205
                    },
                    "500000": {
                        "totalPrice": 810.0,
                        "totalProfit": 15928.471551
                    }
                }
            },
            {
                "id": "610884",
                "name": "신골절치료비(치아파절포함)",
                "theme": "골절/화상",
                "confidence": 0.008040612578270072,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1089.0,
                        "totalProfit": 26668.411393
                    },
                    "2000000": {
                        "totalPrice": 2178.0,
                        "totalProfit": 53383.875353
                    },
                    "3000000": {
                        "totalPrice": 3267.0,
                        "totalProfit": 80099.358417
                    },
                    "5000000": {
                        "totalPrice": 5445.0,
                        "totalProfit": 133530.305306
                    }
                }
            },
            {
                "id": "611190",
                "name": "통합상해진단비(기타의 중증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 8.0,
                        "totalProfit": 120.375784
                    },
                    "2000000": {
                        "totalPrice": 16.0,
                        "totalProfit": 287.705884
                    },
                    "3000000": {
                        "totalPrice": 24.0,
                        "totalProfit": 455.191813
                    },
                    "5000000": {
                        "totalPrice": 40.0,
                        "totalProfit": 789.836441
                    }
                }
            },
            {
                "id": "611184",
                "name": "통합상해진단비(엉덩이 및 다리의 중증상해진단비(연간1회한))",
                "theme": "기타",
                "confidence": 0.009288345074984933,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 86.0,
                        "totalProfit": 1732.470952
                    },
                    "2000000": {
                        "totalPrice": 172.0,
                        "totalProfit": 3512.000726
                    },
                    "3000000": {
                        "totalPrice": 258.0,
                        "totalProfit": 5291.546327
                    },
                    "5000000": {
                        "totalPrice": 430.0,
                        "totalProfit": 8850.509642
                    }
                }
            }
        ]
    },
    "2": {
        "id": "2",
        "channel": "GA",
        "age": 56,
        "gndr": "여",
        "unt_pd_nm": "The좋은 알파",
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
                "kmv_adj": -150000.0
            },
            {
                "tag": "출생전",
                "kmv_adj": -150000.0
            }
        ],
        "items": [
            {
                "id": "630377",
                "name": "[특별조건부]질병수술비",
                "quantity": 0,
                "theme": "할증/제도성",
                "totalPrice": 1165.0,
                "totalProfit": -1815.512584
            },
            {
                "id": "632279",
                "name": "표적항암약물허가치료비Ⅱ",
                "quantity": 10000000,
                "theme": "3대진단",
                "totalPrice": 2400.0,
                "totalProfit": 33811.03391
            },
            {
                "id": "631837",
                "name": "[특별조건부]수술비(1~7종, 연간3회한)[질병1종]",
                "quantity": 0,
                "theme": "수술",
                "totalPrice": 415.0,
                "totalProfit": 13122.191751
            },
            {
                "id": "631807",
                "name": "수술비(1~7종, 연간3회한)[질병6종]",
                "quantity": 4000000,
                "theme": "수술",
                "totalPrice": 3960.0,
                "totalProfit": 78706.641319
            },
            {
                "id": "631804",
                "name": "수술비(1~7종, 연간3회한)[질병3종]",
                "quantity": 300000,
                "theme": "수술",
                "totalPrice": 573.0,
                "totalProfit": 7919.315256
            },
            {
                "id": "610487",
                "name": "5대골절진단비",
                "quantity": 1000000,
                "theme": "골절/화상",
                "totalPrice": 1000.0,
                "totalProfit": 4240.083828
            },
            {
                "id": "610470",
                "name": "상해수술위로금",
                "quantity": 500000,
                "theme": "수술",
                "totalPrice": 1855.0,
                "totalProfit": 27730.536857
            },
            {
                "id": "660052",
                "name": "가족일상생활중배상책임(Ⅲ)",
                "quantity": 100000000,
                "theme": "재물/배상",
                "totalPrice": 2078.0,
                "totalProfit": -15069.158747
            },
            {
                "id": "610933",
                "name": "신화상치료비(중증화상및부식진단비)",
                "quantity": 30000000,
                "theme": "골절/화상",
                "totalPrice": 54.0,
                "totalProfit": 1399.334694
            },
            {
                "id": "631802",
                "name": "수술비(1~7종, 연간3회한)[질병1종]",
                "quantity": 100000,
                "theme": "수술",
                "totalPrice": 2540.0,
                "totalProfit": 48283.158237
            },
            {
                "id": "630228",
                "name": "뇌혈관질환진단",
                "quantity": 10000000,
                "theme": "3대진단",
                "totalPrice": 12670.0,
                "totalProfit": 179254.665941
            },
            {
                "id": "631839",
                "name": "[특별조건부]수술비(1~7종, 연간3회한)[질병3종]",
                "quantity": 0,
                "theme": "수술",
                "totalPrice": 94.0,
                "totalProfit": 2509.591014
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "quantity": 300000,
                "theme": "골절/화상",
                "totalPrice": 345.0,
                "totalProfit": 1506.373997
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "quantity": 200000,
                "theme": "골절/화상",
                "totalPrice": 158.0,
                "totalProfit": -1486.723209
            },
            {
                "id": "631841",
                "name": "[특별조건부]수술비(1~7종, 연간3회한)[질병5종]",
                "quantity": 0,
                "theme": "수술",
                "totalPrice": 338.0,
                "totalProfit": 10794.768816
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "quantity": 200000,
                "theme": "골절/화상",
                "totalPrice": 15.0,
                "totalProfit": 175.758479
            },
            {
                "id": "630527",
                "name": "유사암진단비",
                "quantity": 4000000,
                "theme": "3대진단",
                "totalPrice": 1192.0,
                "totalProfit": 8595.038969
            },
            {
                "id": "632649",
                "name": "혈전용해치료비Ⅱ(특정심장질환)",
                "quantity": 2000000,
                "theme": "기타",
                "totalPrice": 24.0,
                "totalProfit": -1243.875941
            },
            {
                "id": "631842",
                "name": "[특별조건부]수술비(1~7종, 연간3회한)[질병6종]",
                "quantity": 0,
                "theme": "수술",
                "totalPrice": 660.0,
                "totalProfit": 21634.282437
            },
            {
                "id": "632285",
                "name": "[특별조건부]표적항암약물허가치료비Ⅱ",
                "quantity": 0,
                "theme": "할증/제도성",
                "totalPrice": 368.0,
                "totalProfit": 12963.829363
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 38.0,
                "totalProfit": 546.197302
            },
            {
                "id": "630701",
                "name": "[특별조건부]암진단비(유사암 제외)",
                "quantity": 0,
                "theme": "3대진단",
                "totalPrice": 3235.0,
                "totalProfit": 105795.326804
            },
            {
                "id": "630718",
                "name": "[특별조건부]유사암진단비",
                "quantity": 0,
                "theme": "3대진단",
                "totalPrice": 223.0,
                "totalProfit": 7948.925215
            },
            {
                "id": "630697",
                "name": "암진단비(유사암 제외)",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 18540.0,
                "totalProfit": 198248.449025
            },
            {
                "id": "630680",
                "name": "[특별조건부]항암방사선약물치료비",
                "quantity": 0,
                "theme": "할증/제도성",
                "totalPrice": 293.0,
                "totalProfit": 9933.005809
            },
            {
                "id": "631560",
                "name": "양성뇌종양진단비Ⅱ",
                "quantity": 5000000,
                "theme": "기타",
                "totalPrice": 480.0,
                "totalProfit": 2529.387353
            },
            {
                "id": "632648",
                "name": "혈전용해치료비Ⅱ(뇌졸중)",
                "quantity": 2000000,
                "theme": "기타",
                "totalPrice": 122.0,
                "totalProfit": 574.074797
            },
            {
                "id": "631840",
                "name": "[특별조건부]수술비(1~7종, 연간3회한)[질병4종]",
                "quantity": 0,
                "theme": "수술",
                "totalPrice": 493.0,
                "totalProfit": 14138.929671
            },
            {
                "id": "630024",
                "name": "항암방사선약물치료비",
                "quantity": 3000000,
                "theme": "3대진단",
                "totalPrice": 1830.0,
                "totalProfit": 17448.892857
            },
            {
                "id": "610912",
                "name": "골절(치아파절제외)진단비Ⅱ",
                "quantity": 200000,
                "theme": "골절/화상",
                "totalPrice": 1068.0,
                "totalProfit": -6175.325874
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "quantity": 10000000,
                "theme": "3대진단",
                "totalPrice": 3150.0,
                "totalProfit": 35522.602884
            },
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 7.0,
                "totalProfit": 122.943714
            },
            {
                "id": "631803",
                "name": "수술비(1~7종, 연간3회한)[질병2종]",
                "quantity": 200000,
                "theme": "수술",
                "totalPrice": 720.0,
                "totalProfit": 11361.710381
            },
            {
                "id": "631808",
                "name": "수술비(1~7종, 연간3회한)[질병7종]",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 2600.0,
                "totalProfit": 51847.509528
            },
            {
                "id": "630766",
                "name": "허혈성심장질환수술비",
                "quantity": 5000000,
                "theme": "3대진단",
                "totalPrice": 1135.0,
                "totalProfit": 26516.585671
            },
            {
                "id": "631805",
                "name": "수술비(1~7종, 연간3회한)[질병4종]",
                "quantity": 1000000,
                "theme": "수술",
                "totalPrice": 3010.0,
                "totalProfit": 54960.432593
            },
            {
                "id": "630022",
                "name": "질병수술위로금",
                "quantity": 200000,
                "theme": "수술",
                "totalPrice": 3448.0,
                "totalProfit": -71000.582041
            },
            {
                "id": "631806",
                "name": "수술비(1~7종, 연간3회한)[질병5종]",
                "quantity": 3000000,
                "theme": "수술",
                "totalPrice": 2070.0,
                "totalProfit": 42504.107093
            },
            {
                "id": "631843",
                "name": "[특별조건부]수술비(1~7종, 연간3회한)[질병7종]",
                "quantity": 0,
                "theme": "수술",
                "totalPrice": 425.0,
                "totalProfit": 13458.701592
            },
            {
                "id": "631838",
                "name": "[특별조건부]수술비(1~7종, 연간3회한)[질병2종]",
                "quantity": 0,
                "theme": "수술",
                "totalPrice": 120.0,
                "totalProfit": 3555.852334
            },
            {
                "id": "630763",
                "name": "뇌혈관질환 수술비",
                "quantity": 5000000,
                "theme": "3대진단",
                "totalPrice": 1370.0,
                "totalProfit": 25590.335128
            }
        ],
        "availableItems": [
            {
                "id": "631858",
                "name": "질병수술비(특정5대질병 제외)",
                "theme": "수술",
                "confidence": 0.2854024439902921,
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
                        "totalPrice": 2384.0,
                        "totalProfit": 56844.967237
                    },
                    "300000": {
                        "totalPrice": 3576.0,
                        "totalProfit": 85287.332496
                    },
                    "500000": {
                        "totalPrice": 5960.0,
                        "totalProfit": 142172.063016
                    },
                    "800000": {
                        "totalPrice": 9536.0,
                        "totalProfit": 227499.158795
                    },
                    "1000000": {
                        "totalPrice": 11920.0,
                        "totalProfit": 284383.889315
                    }
                }
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.09665894139001423,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 750.0,
                        "totalProfit": 10971.179048
                    },
                    "200000": {
                        "totalPrice": 1500.0,
                        "totalProfit": 21982.138245
                    },
                    "300000": {
                        "totalPrice": 2250.0,
                        "totalProfit": 32993.100041
                    },
                    "400000": {
                        "totalPrice": 3000.0,
                        "totalProfit": 44004.054585
                    },
                    "500000": {
                        "totalPrice": 3750.0,
                        "totalProfit": 55015.012386
                    }
                }
            },
            {
                "id": "633331",
                "name": "당뇨병진단비Ⅱ[당화혈색소 9.0%이상]",
                "theme": "기타",
                "confidence": 0.007544567534132344,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 920.0,
                        "totalProfit": -1524.660517
                    },
                    "2000000": {
                        "totalPrice": 1840.0,
                        "totalProfit": -3009.461292
                    },
                    "3000000": {
                        "totalPrice": 2760.0,
                        "totalProfit": -4494.277673
                    },
                    "5000000": {
                        "totalPrice": 4600.0,
                        "totalProfit": -7463.921391
                    }
                }
            },
            {
                "id": "633335",
                "name": "고혈압(원발성)대상질병진단비[중증 고혈압(원발성)]",
                "theme": "기타",
                "confidence": 0.005600734097378853,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 110.0,
                        "totalProfit": 1578.832693
                    },
                    "2000000": {
                        "totalPrice": 220.0,
                        "totalProfit": 3197.58998
                    }
                }
            },
            {
                "id": "632532",
                "name": "131대질병수술비(편도염)",
                "theme": "수술",
                "confidence": 0.17519121534397075,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 2.0,
                        "totalProfit": 3.638038
                    },
                    "300000": {
                        "totalPrice": 3.0,
                        "totalProfit": 24.338165
                    },
                    "500000": {
                        "totalPrice": 5.0,
                        "totalProfit": 67.739436
                    },
                    "1000000": {
                        "totalPrice": 10.0,
                        "totalProfit": 173.121677
                    }
                }
            },
            {
                "id": "611345",
                "name": "2-3인실 상급종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.013603313324063194,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 10.0,
                        "totalProfit": 205.69107
                    },
                    "50000": {
                        "totalPrice": 25.0,
                        "totalProfit": 574.382653
                    }
                }
            },
            {
                "id": "630026",
                "name": "질병입원일당",
                "theme": "입원일당",
                "confidence": 0.043586615555842256,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 4114.0,
                        "totalProfit": 99435.957783
                    },
                    "20000": {
                        "totalPrice": 8228.0,
                        "totalProfit": 198911.786097
                    },
                    "30000": {
                        "totalPrice": 12342.0,
                        "totalProfit": 298387.615512
                    }
                }
            },
            {
                "id": "610469",
                "name": "상해중환자실 입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.005419480290215082,
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
                        "totalPrice": 560.0,
                        "totalProfit": 21414.153969
                    },
                    "100000": {
                        "totalPrice": 1120.0,
                        "totalProfit": 42868.070194
                    },
                    "200000": {
                        "totalPrice": 2240.0,
                        "totalProfit": 85775.902645
                    },
                    "300000": {
                        "totalPrice": 3360.0,
                        "totalProfit": 128683.735096
                    },
                    "500000": {
                        "totalPrice": 5600.0,
                        "totalProfit": 214499.399997
                    }
                }
            },
            {
                "id": "632512",
                "name": "수면무호흡진단비",
                "theme": "기타",
                "confidence": 0.009560145719528127,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 27.0,
                        "totalProfit": -137.195858
                    }
                }
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "theme": "골절/화상",
                "confidence": 0.10733974301696697,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 79.0,
                        "totalProfit": 646.759137
                    },
                    "200000": {
                        "totalPrice": 158.0,
                        "totalProfit": 1333.282139
                    }
                }
            },
            {
                "id": "633277",
                "name": "종합병원 질병수술비(특정5대질병 제외)",
                "theme": "수술",
                "confidence": 0.0021456838887547553,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    700000,
                    1000000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 1248.0,
                        "totalProfit": 30542.382743
                    },
                    "300000": {
                        "totalPrice": 1872.0,
                        "totalProfit": 45833.455756
                    },
                    "500000": {
                        "totalPrice": 3120.0,
                        "totalProfit": 76415.601782
                    },
                    "700000": {
                        "totalPrice": 4368.0,
                        "totalProfit": 106997.747808
                    },
                    "1000000": {
                        "totalPrice": 6240.0,
                        "totalProfit": 152870.966847
                    }
                }
            },
            {
                "id": "633517",
                "name": "특정순환계질환 급여치료비(요양병원)(본인부담금 1백만원이상)(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.03261372030358343,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1477.0,
                        "totalProfit": 32445.023876
                    }
                }
            },
            {
                "id": "632136",
                "name": "131대질병수술비(관절염,생식기질환)",
                "theme": "수술",
                "confidence": 0.17046058849080659,
                "availableQuantities": [
                    100000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 271.0,
                        "totalProfit": -781.998773
                    },
                    "300000": {
                        "totalPrice": 813.0,
                        "totalProfit": -2266.403612
                    }
                }
            },
            {
                "id": "640382",
                "name": "아나필락시스진단비(응급, 연간1회한)",
                "theme": "기타",
                "confidence": 0.052952196714605146,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 150.0,
                        "totalProfit": 4868.091121
                    },
                    "2000000": {
                        "totalPrice": 300.0,
                        "totalProfit": 9775.945525
                    }
                }
            },
            {
                "id": "631612",
                "name": "뇌졸중통원일당(1일이상 30일한도)[뇌졸중상급종합병원통원일당]",
                "theme": "입원일당",
                "confidence": 0.0025592068815592102,
                "availableQuantities": [
                    90000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "90000": {
                        "totalPrice": 774.0,
                        "totalProfit": 25374.245897
                    },
                    "100000": {
                        "totalPrice": 860.0,
                        "totalProfit": 28197.970087
                    }
                }
            },
            {
                "id": "631130",
                "name": "암수술비(유사암제외)",
                "theme": "3대진단",
                "confidence": 0.07253310403714287,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1057.0,
                        "totalProfit": 13210.08425
                    },
                    "2000000": {
                        "totalPrice": 2114.0,
                        "totalProfit": 26459.933047
                    },
                    "3000000": {
                        "totalPrice": 3171.0,
                        "totalProfit": 39709.781845
                    },
                    "5000000": {
                        "totalPrice": 5285.0,
                        "totalProfit": 66209.479439
                    }
                }
            },
            {
                "id": "610777",
                "name": "일반상해입원일당(1일이상30일한도)",
                "theme": "입원일당",
                "confidence": 0.0014330012211775758,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1177.0,
                        "totalProfit": 22655.491193
                    },
                    "20000": {
                        "totalPrice": 2354.0,
                        "totalProfit": 45350.875386
                    },
                    "30000": {
                        "totalPrice": 3531.0,
                        "totalProfit": 68046.261963
                    }
                }
            },
            {
                "id": "630951",
                "name": "갑상선암(초기제외)진단비",
                "theme": "3대진단",
                "confidence": 0.015941908685924603,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 102.0,
                        "totalProfit": 789.193737
                    }
                }
            },
            {
                "id": "630638",
                "name": "결핵 진단비",
                "theme": "기타",
                "confidence": 0.020002869270866943,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 19.0,
                        "totalProfit": 339.034971
                    }
                }
            },
            {
                "id": "632651",
                "name": "혈전용해치료비Ⅱ(특정심장질환)(연간1회한)",
                "theme": "기타",
                "confidence": 0.07691964300427732,
                "availableQuantities": [
                    1000000,
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 35.0,
                        "totalProfit": -1776.148954
                    },
                    "2000000": {
                        "totalPrice": 70.0,
                        "totalProfit": -3512.320318
                    },
                    "5000000": {
                        "totalPrice": 175.0,
                        "totalProfit": -8720.804594
                    }
                }
            },
            {
                "id": "611261",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.024629671449977047,
                "availableQuantities": [
                    30000,
                    100000,
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 960.0,
                        "totalProfit": 22530.99094
                    },
                    "100000": {
                        "totalPrice": 3200.0,
                        "totalProfit": 75196.290109
                    },
                    "150000": {
                        "totalPrice": 4800.0,
                        "totalProfit": 112814.333544
                    }
                }
            },
            {
                "id": "631227",
                "name": "수술비(1~5종)[질병2종]",
                "theme": "수술",
                "confidence": 0.028795488529428828,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 476.0,
                        "totalProfit": -18431.174264
                    },
                    "200000": {
                        "totalPrice": 952.0,
                        "totalProfit": -36822.501587
                    }
                }
            },
            {
                "id": "632652",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(뇌졸중)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.23389501127397813,
                "availableQuantities": [
                    500000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 12.0,
                        "totalProfit": 168.48989
                    },
                    "3000000": {
                        "totalPrice": 69.0,
                        "totalProfit": 1099.210061
                    },
                    "5000000": {
                        "totalPrice": 115.0,
                        "totalProfit": 1858.543178
                    }
                }
            },
            {
                "id": "630963",
                "name": "질병입원일당(1일이상30일한도)",
                "theme": "입원일당",
                "confidence": 0.006080449251172182,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 3134.0,
                        "totalProfit": 59545.010954
                    },
                    "20000": {
                        "totalPrice": 6268.0,
                        "totalProfit": 119129.952652
                    },
                    "30000": {
                        "totalPrice": 9402.0,
                        "totalProfit": 178714.890245
                    }
                }
            },
            {
                "id": "610939",
                "name": "상해사고부상치료비[5등급]",
                "theme": "수술",
                "confidence": 0.001166429605151993,
                "availableQuantities": [
                    50000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 213.0,
                        "totalProfit": 5534.652682
                    },
                    "100000": {
                        "totalPrice": 425.0,
                        "totalProfit": 11071.589488
                    },
                    "200000": {
                        "totalPrice": 850.0,
                        "totalProfit": 22182.95107
                    }
                }
            },
            {
                "id": "630019",
                "name": "질병 중환자실입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.03868322682533353,
                "availableQuantities": [
                    20000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 42.0,
                        "totalProfit": 105.54879
                    },
                    "50000": {
                        "totalPrice": 105.0,
                        "totalProfit": 323.94137
                    },
                    "100000": {
                        "totalPrice": 210.0,
                        "totalProfit": 687.899684
                    }
                }
            },
            {
                "id": "633515",
                "name": "특정순환계질환진단비",
                "theme": "기타",
                "confidence": 0.003341600800022948,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 8060.0,
                        "totalProfit": 131028.123544
                    },
                    "2000000": {
                        "totalPrice": 16120.0,
                        "totalProfit": 262096.114479
                    },
                    "3000000": {
                        "totalPrice": 24180.0,
                        "totalProfit": 393164.162641
                    },
                    "5000000": {
                        "totalPrice": 40300.0,
                        "totalProfit": 655300.070655
                    }
                }
            },
            {
                "id": "632513",
                "name": "편마비진단비",
                "theme": "기타",
                "confidence": 0.007934877287870094,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 276.0,
                        "totalProfit": 3771.202769
                    }
                }
            },
            {
                "id": "633330",
                "name": "당뇨병진단비Ⅱ[당화혈색소 7.0%이상]",
                "theme": "기타",
                "confidence": 0.007544567534132344,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 2360.0,
                        "totalProfit": 47277.27883
                    },
                    "1000000": {
                        "totalPrice": 4720.0,
                        "totalProfit": 94594.487703
                    },
                    "2000000": {
                        "totalPrice": 9440.0,
                        "totalProfit": 189228.703745
                    }
                }
            },
            {
                "id": "632650",
                "name": "혈전용해치료비Ⅱ(뇌졸중)(연간1회한)",
                "theme": "기타",
                "confidence": 0.07691964300427732,
                "availableQuantities": [
                    1000000,
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 146.0,
                        "totalProfit": 687.852897
                    },
                    "2000000": {
                        "totalPrice": 292.0,
                        "totalProfit": 1415.693451
                    },
                    "5000000": {
                        "totalPrice": 730.0,
                        "totalProfit": 3599.5077
                    }
                }
            },
            {
                "id": "633333",
                "name": "고혈압(원발성)대상질병진단비[고혈압(원발성)]",
                "theme": "기타",
                "confidence": 0.005600734097378853,
                "availableQuantities": [
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 4365.0,
                        "totalProfit": 38145.551637
                    },
                    "500000": {
                        "totalPrice": 7275.0,
                        "totalProfit": 63601.935278
                    }
                }
            },
            {
                "id": "633014",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.15339250256416678,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 470.0,
                        "totalProfit": 1206.971068
                    },
                    "200000": {
                        "totalPrice": 940.0,
                        "totalProfit": 2453.799474
                    }
                }
            },
            {
                "id": "632140",
                "name": "131대질병수술비(백내장)",
                "theme": "수술",
                "confidence": 0.17046058849080659,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 307.0,
                        "totalProfit": -24916.045396
                    },
                    "200000": {
                        "totalPrice": 614.0,
                        "totalProfit": -49790.287474
                    },
                    "300000": {
                        "totalPrice": 921.0,
                        "totalProfit": -74666.646546
                    }
                }
            },
            {
                "id": "631397",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.0963249586816265,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 110.0,
                        "totalProfit": -248.322681
                    },
                    "200000": {
                        "totalPrice": 220.0,
                        "totalProfit": -456.735558
                    },
                    "300000": {
                        "totalPrice": 330.0,
                        "totalProfit": -665.222499
                    },
                    "400000": {
                        "totalPrice": 440.0,
                        "totalProfit": -873.62958
                    }
                }
            },
            {
                "id": "631804",
                "name": "수술비(1~7종, 연간3회한)[질병3종]",
                "theme": "수술",
                "confidence": 0.26445138231409754,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 573.0,
                        "totalProfit": 11130.466815
                    },
                    "400000": {
                        "totalPrice": 764.0,
                        "totalProfit": 14853.956608
                    },
                    "500000": {
                        "totalPrice": 955.0,
                        "totalProfit": 18577.592844
                    }
                }
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.030359517030674597,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 17.0,
                        "totalProfit": 337.62183
                    },
                    "200000": {
                        "totalPrice": 34.0,
                        "totalProfit": 715.452772
                    },
                    "300000": {
                        "totalPrice": 51.0,
                        "totalProfit": 1093.018044
                    },
                    "400000": {
                        "totalPrice": 68.0,
                        "totalProfit": 1470.900539
                    }
                }
            },
            {
                "id": "610936",
                "name": "상해사고부상치료비[2등급]",
                "theme": "수술",
                "confidence": 0.001166429605151993,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 4707.0,
                        "totalProfit": 123584.621836
                    },
                    "5000000": {
                        "totalPrice": 7845.0,
                        "totalProfit": 206000.956575
                    }
                }
            },
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "theme": "사망후유",
                "confidence": 0.05046258533680708,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 7.0,
                        "totalProfit": 127.48473
                    }
                }
            },
            {
                "id": "610852",
                "name": "종합병원 일반상해입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.019128211452298826,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 466.0,
                        "totalProfit": 10771.528537
                    },
                    "20000": {
                        "totalPrice": 932.0,
                        "totalProfit": 21582.93818
                    },
                    "30000": {
                        "totalPrice": 1398.0,
                        "totalProfit": 32394.448302
                    },
                    "50000": {
                        "totalPrice": 2330.0,
                        "totalProfit": 54017.357662
                    }
                }
            },
            {
                "id": "610835",
                "name": "수술비(1~5종)[상해4종]",
                "theme": "수술",
                "confidence": 0.007135773849576848,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 4.0,
                        "totalProfit": 13.410324
                    },
                    "2000000": {
                        "totalPrice": 8.0,
                        "totalProfit": 68.836185
                    }
                }
            },
            {
                "id": "632520",
                "name": "131대질병수술비(다빈도62대질병)",
                "theme": "수술",
                "confidence": 0.17519121534397075,
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
                        "totalPrice": 790.0,
                        "totalProfit": 15478.406058
                    },
                    "300000": {
                        "totalPrice": 1185.0,
                        "totalProfit": 23237.490728
                    },
                    "500000": {
                        "totalPrice": 1975.0,
                        "totalProfit": 38755.660068
                    },
                    "1000000": {
                        "totalPrice": 3950.0,
                        "totalProfit": 77551.08342
                    },
                    "2000000": {
                        "totalPrice": 7900.0,
                        "totalProfit": 155141.930123
                    }
                }
            },
            {
                "id": "631381",
                "name": "중대한재생불량성빈혈진단비",
                "theme": "기타",
                "confidence": 0.03824983631812775,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 17.0,
                        "totalProfit": 418.004453
                    }
                }
            },
            {
                "id": "611301",
                "name": "일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.0016940329697042967,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 3.0,
                        "totalProfit": 15.72274
                    },
                    "20000": {
                        "totalPrice": 6.0,
                        "totalProfit": 71.730497
                    },
                    "30000": {
                        "totalPrice": 9.0,
                        "totalProfit": 127.386391
                    }
                }
            },
            {
                "id": "631229",
                "name": "수술비(1~5종)[질병4종]",
                "theme": "수술",
                "confidence": 0.028795488529428828,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 120.0,
                        "totalProfit": 95.268776
                    },
                    "2000000": {
                        "totalPrice": 240.0,
                        "totalProfit": 230.375954
                    }
                }
            },
            {
                "id": "633514",
                "name": "특정중증질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.0005617232073211654,
                "availableQuantities": [
                    20000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 138.0,
                        "totalProfit": 3587.324616
                    },
                    "50000": {
                        "totalPrice": 345.0,
                        "totalProfit": 9028.160181
                    },
                    "100000": {
                        "totalPrice": 690.0,
                        "totalProfit": 18096.294921
                    }
                }
            },
            {
                "id": "610832",
                "name": "수술비(1~5종)[상해1종]",
                "theme": "수술",
                "confidence": 0.007135773849576848,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 90.0,
                        "totalProfit": 1204.600362
                    },
                    "200000": {
                        "totalPrice": 180.0,
                        "totalProfit": 2448.964196
                    }
                }
            },
            {
                "id": "611014",
                "name": "수술비(1~7종, 연간3회한)[상해3종]",
                "theme": "수술",
                "confidence": 0.10257888066825657,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 129.0,
                        "totalProfit": 3502.739273
                    },
                    "400000": {
                        "totalPrice": 172.0,
                        "totalProfit": 4683.701744
                    },
                    "500000": {
                        "totalPrice": 215.0,
                        "totalProfit": 5864.624916
                    }
                }
            },
            {
                "id": "633336",
                "name": "이상지질혈증(고지혈증포함)대상질병진단비[이상지질혈증(고지혈증포함)]",
                "theme": "기타",
                "confidence": 0.0046309523726661105,
                "availableQuantities": [
                    100000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 3257.0,
                        "totalProfit": 22866.595043
                    },
                    "300000": {
                        "totalPrice": 9771.0,
                        "totalProfit": 68673.321912
                    },
                    "500000": {
                        "totalPrice": 16285.0,
                        "totalProfit": 114479.680105
                    }
                }
            },
            {
                "id": "633337",
                "name": "이상지질혈증(고지혈증포함)대상질병진단비[중등증이상 이상지질혈증(고지혈증포함)]",
                "theme": "기타",
                "confidence": 0.0046309523726661105,
                "availableQuantities": [
                    100000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 175.0,
                        "totalProfit": 1624.677735
                    },
                    "500000": {
                        "totalPrice": 875.0,
                        "totalProfit": 8281.185837
                    },
                    "1000000": {
                        "totalPrice": 1750.0,
                        "totalProfit": 16601.788502
                    }
                }
            },
            {
                "id": "632134",
                "name": "131대질병수술비(특정31대질병)",
                "theme": "수술",
                "confidence": 0.17046058849080659,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 880.0,
                        "totalProfit": 22822.862852
                    },
                    "3000000": {
                        "totalPrice": 1320.0,
                        "totalProfit": 34254.240162
                    },
                    "5000000": {
                        "totalPrice": 2200.0,
                        "totalProfit": 57116.970198
                    }
                }
            },
            {
                "id": "633525",
                "name": "뇌혈관질환통원일당(연간30회한)",
                "theme": "입원일당",
                "confidence": 0.001275713717759176,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 565.0,
                        "totalProfit": 17849.31145
                    },
                    "20000": {
                        "totalPrice": 1130.0,
                        "totalProfit": 35738.563539
                    },
                    "30000": {
                        "totalPrice": 1695.0,
                        "totalProfit": 53627.999528
                    }
                }
            },
            {
                "id": "610470",
                "name": "상해수술위로금",
                "theme": "수술",
                "confidence": 0.010768483527868604,
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
                        "totalPrice": 1855.0,
                        "totalProfit": 44665.592433
                    },
                    "1000000": {
                        "totalPrice": 3710.0,
                        "totalProfit": 89371.02533
                    },
                    "1500000": {
                        "totalPrice": 5565.0,
                        "totalProfit": 134076.420305
                    },
                    "2000000": {
                        "totalPrice": 7420.0,
                        "totalProfit": 178781.855639
                    },
                    "2500000": {
                        "totalPrice": 9275.0,
                        "totalProfit": 223487.24905
                    }
                }
            },
            {
                "id": "633334",
                "name": "고혈압(원발성)대상질병진단비[중등증이상 고혈압(원발성)]",
                "theme": "기타",
                "confidence": 0.005600734097378853,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 535.0,
                        "totalProfit": 7518.075654
                    },
                    "1000000": {
                        "totalPrice": 1070.0,
                        "totalProfit": 15076.084497
                    }
                }
            },
            {
                "id": "632526",
                "name": "131대질병수술비(유방의장애)",
                "theme": "수술",
                "confidence": 0.17519121534397075,
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
                        "totalPrice": 5.0,
                        "totalProfit": 13.187665
                    },
                    "200000": {
                        "totalPrice": 10.0,
                        "totalProfit": 66.079071
                    },
                    "300000": {
                        "totalPrice": 15.0,
                        "totalProfit": 119.030019
                    },
                    "500000": {
                        "totalPrice": 26.0,
                        "totalProfit": 262.313487
                    },
                    "1000000": {
                        "totalPrice": 51.0,
                        "totalProfit": 526.889601
                    }
                }
            },
            {
                "id": "631622",
                "name": "급성심근경색증통원일당(1일이상 30일한도)[급성심근경색증상급종합병원통원일당]",
                "theme": "입원일당",
                "confidence": 0.002471331035150586,
                "availableQuantities": [
                    50000,
                    90000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 28.0,
                        "totalProfit": 1021.570218
                    },
                    "90000": {
                        "totalPrice": 50.0,
                        "totalProfit": 1854.961302
                    },
                    "100000": {
                        "totalPrice": 55.0,
                        "totalProfit": 2043.323041
                    }
                }
            },
            {
                "id": "632137",
                "name": "131대질병수술비(치핵)",
                "theme": "수술",
                "confidence": 0.17046058849080659,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 78.0,
                        "totalProfit": -136.437799
                    },
                    "200000": {
                        "totalPrice": 156.0,
                        "totalProfit": -233.112316
                    }
                }
            },
            {
                "id": "610938",
                "name": "상해사고부상치료비[4등급]",
                "theme": "수술",
                "confidence": 0.001166429605151993,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 465.0,
                        "totalProfit": 12052.55834
                    },
                    "200000": {
                        "totalPrice": 930.0,
                        "totalProfit": 24144.957821
                    },
                    "300000": {
                        "totalPrice": 1395.0,
                        "totalProfit": 36237.366584
                    },
                    "1000000": {
                        "totalPrice": 4650.0,
                        "totalProfit": 120884.193996
                    }
                }
            },
            {
                "id": "610935",
                "name": "상해사고부상치료비[1등급]",
                "theme": "수술",
                "confidence": 0.001166429605151993,
                "availableQuantities": [
                    3000000,
                    4000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 459.0,
                        "totalProfit": 12600.232524
                    },
                    "4000000": {
                        "totalPrice": 612.0,
                        "totalProfit": 16813.645418
                    },
                    "5000000": {
                        "totalPrice": 765.0,
                        "totalProfit": 21026.948401
                    }
                }
            },
            {
                "id": "630451",
                "name": "2대질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.0023512511878210312,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000
                ],
                "recommendedQuantity": 40000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 514.0,
                        "totalProfit": 12961.927235
                    },
                    "20000": {
                        "totalPrice": 1028.0,
                        "totalProfit": 25963.716985
                    },
                    "30000": {
                        "totalPrice": 1542.0,
                        "totalProfit": 38965.494843
                    },
                    "40000": {
                        "totalPrice": 2056.0,
                        "totalProfit": 51967.283524
                    }
                }
            },
            {
                "id": "631806",
                "name": "수술비(1~7종, 연간3회한)[질병5종]",
                "theme": "수술",
                "confidence": 0.3334168995554769,
                "availableQuantities": [
                    800000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "800000": {
                        "totalPrice": 552.0,
                        "totalProfit": 11687.876117
                    },
                    "1000000": {
                        "totalPrice": 690.0,
                        "totalProfit": 14619.799181
                    },
                    "2000000": {
                        "totalPrice": 1380.0,
                        "totalProfit": 29279.436063
                    },
                    "3000000": {
                        "totalPrice": 2070.0,
                        "totalProfit": 43939.072443
                    },
                    "5000000": {
                        "totalPrice": 3450.0,
                        "totalProfit": 73258.343463
                    }
                }
            },
            {
                "id": "611325",
                "name": "종합병원 상해수술비",
                "theme": "수술",
                "confidence": 0.0012859291409500345,
                "availableQuantities": [
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 369.0,
                        "totalProfit": 7805.55711
                    },
                    "500000": {
                        "totalPrice": 615.0,
                        "totalProfit": 13035.908952
                    }
                }
            },
            {
                "id": "640154",
                "name": "응급실내원비(응급)",
                "theme": "기타",
                "confidence": 0.17442002010075108,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 320.0,
                        "totalProfit": 9199.565048
                    },
                    "30000": {
                        "totalPrice": 480.0,
                        "totalProfit": 13819.289897
                    },
                    "50000": {
                        "totalPrice": 800.0,
                        "totalProfit": 23058.619064
                    },
                    "100000": {
                        "totalPrice": 1600.0,
                        "totalProfit": 46157.069168
                    }
                }
            },
            {
                "id": "631186",
                "name": "암수술비(유사암제외)(최초1회한)",
                "theme": "3대진단",
                "confidence": 0.006493406917531364,
                "availableQuantities": [
                    800000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 800000,
                "priceAndProfitByQuantity": {
                    "800000": {
                        "totalPrice": 766.0,
                        "totalProfit": 12180.568427
                    },
                    "1000000": {
                        "totalPrice": 957.0,
                        "totalProfit": 15217.071044
                    },
                    "2000000": {
                        "totalPrice": 1914.0,
                        "totalProfit": 30473.8224
                    },
                    "3000000": {
                        "totalPrice": 2871.0,
                        "totalProfit": 45730.573756
                    },
                    "5000000": {
                        "totalPrice": 4785.0,
                        "totalProfit": 76244.076468
                    }
                }
            },
            {
                "id": "633538",
                "name": "허혈성심장질환통원일당(종합병원, 연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0013317388185470483,
                "availableQuantities": [
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 699.0,
                        "totalProfit": 24536.390457
                    },
                    "50000": {
                        "totalPrice": 1165.0,
                        "totalProfit": 40920.594483
                    }
                }
            },
            {
                "id": "630955",
                "name": "상급종합병원질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.013006585419793439,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    70000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 1272.0,
                        "totalProfit": 32888.143381
                    },
                    "30000": {
                        "totalPrice": 1908.0,
                        "totalProfit": 49352.244849
                    },
                    "50000": {
                        "totalPrice": 3180.0,
                        "totalProfit": 82280.355701
                    },
                    "70000": {
                        "totalPrice": 4452.0,
                        "totalProfit": 115208.37906
                    },
                    "100000": {
                        "totalPrice": 6360.0,
                        "totalProfit": 164600.57195
                    }
                }
            },
            {
                "id": "632653",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(특정심장질환)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.23389501127397813,
                "availableQuantities": [
                    500000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 8.0,
                        "totalProfit": 107.771829
                    },
                    "3000000": {
                        "totalPrice": 45.0,
                        "totalProfit": 734.820737
                    },
                    "5000000": {
                        "totalPrice": 75.0,
                        "totalProfit": 1251.569272
                    }
                }
            },
            {
                "id": "630092",
                "name": "호흡기관련질병수술비",
                "theme": "수술",
                "confidence": 0.02853890657582191,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 179.0,
                        "totalProfit": 6664.373173
                    }
                }
            },
            {
                "id": "633537",
                "name": "허혈성심장질환통원일당(연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0012780869112768965,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 359.0,
                        "totalProfit": 12281.035383
                    },
                    "20000": {
                        "totalPrice": 718.0,
                        "totalProfit": 24601.9826
                    },
                    "30000": {
                        "totalPrice": 1077.0,
                        "totalProfit": 36923.149004
                    }
                }
            },
            {
                "id": "611262",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원)",
                "theme": "입원일당",
                "confidence": 0.024629842784122922,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 110.0,
                        "totalProfit": 1154.31304
                    },
                    "50000": {
                        "totalPrice": 275.0,
                        "totalProfit": 2946.106549
                    }
                }
            },
            {
                "id": "611016",
                "name": "수술비(1~7종, 연간3회한)[상해5종]",
                "theme": "수술",
                "confidence": 0.10257888066825657,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 73.0,
                        "totalProfit": 2315.665421
                    },
                    "2000000": {
                        "totalPrice": 146.0,
                        "totalProfit": 4671.473317
                    },
                    "3000000": {
                        "totalPrice": 219.0,
                        "totalProfit": 7027.070726
                    },
                    "5000000": {
                        "totalPrice": 365.0,
                        "totalProfit": 11738.53397
                    }
                }
            },
            {
                "id": "611265",
                "name": "상급병실(1인실) 종합병원 일반상해수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.016677635830500265,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 10.0,
                        "totalProfit": -116.884254
                    }
                }
            },
            {
                "id": "633341",
                "name": "2-3인실 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.05105025186324095,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 500.0,
                        "totalProfit": 14565.648235
                    },
                    "50000": {
                        "totalPrice": 1250.0,
                        "totalProfit": 36473.986518
                    }
                }
            },
            {
                "id": "610487",
                "name": "5대골절진단비",
                "theme": "골절/화상",
                "confidence": 0.011105463755733357,
                "availableQuantities": [
                    200000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 200.0,
                        "totalProfit": 3476.726714
                    },
                    "500000": {
                        "totalPrice": 500.0,
                        "totalProfit": 8751.543617
                    },
                    "1000000": {
                        "totalPrice": 1000.0,
                        "totalProfit": 17542.897385
                    },
                    "2000000": {
                        "totalPrice": 2000.0,
                        "totalProfit": 35125.631028
                    }
                }
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "theme": "입원일당",
                "confidence": 0.0046051209856701825,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1364.0,
                        "totalProfit": 28615.459604
                    },
                    "20000": {
                        "totalPrice": 2728.0,
                        "totalProfit": 57270.764561
                    },
                    "30000": {
                        "totalPrice": 4092.0,
                        "totalProfit": 85926.155204
                    }
                }
            },
            {
                "id": "611322",
                "name": "상급종합병원 상해수술비",
                "theme": "수술",
                "confidence": 0.0013393573197995688,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 125.0,
                        "totalProfit": 2573.129834
                    },
                    "1000000": {
                        "totalPrice": 250.0,
                        "totalProfit": 5186.080981
                    }
                }
            },
            {
                "id": "611015",
                "name": "수술비(1~7종, 연간3회한)[상해4종]",
                "theme": "수술",
                "confidence": 0.10257888066825657,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 140.0,
                        "totalProfit": 4024.73129
                    },
                    "1000000": {
                        "totalPrice": 280.0,
                        "totalProfit": 8089.711534
                    }
                }
            },
            {
                "id": "610488",
                "name": "5대골절수술비",
                "theme": "골절/화상",
                "confidence": 0.03406934381418491,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 24.0,
                        "totalProfit": 34.891515
                    },
                    "300000": {
                        "totalPrice": 36.0,
                        "totalProfit": 72.244673
                    },
                    "500000": {
                        "totalPrice": 60.0,
                        "totalProfit": 146.945363
                    },
                    "1000000": {
                        "totalPrice": 120.0,
                        "totalProfit": 333.784809
                    },
                    "2000000": {
                        "totalPrice": 240.0,
                        "totalProfit": 707.412353
                    }
                }
            },
            {
                "id": "631560",
                "name": "양성뇌종양진단비Ⅱ",
                "theme": "기타",
                "confidence": 0.11518652604050396,
                "availableQuantities": [
                    4000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "4000000": {
                        "totalPrice": 384.0,
                        "totalProfit": 2070.254994
                    },
                    "5000000": {
                        "totalPrice": 480.0,
                        "totalProfit": 2597.800005
                    }
                }
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "theme": "골절/화상",
                "confidence": 0.07285698439627732,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 8.0,
                        "totalProfit": 158.763171
                    },
                    "200000": {
                        "totalPrice": 15.0,
                        "totalProfit": 317.724448
                    }
                }
            },
            {
                "id": "611012",
                "name": "수술비(1~7종, 연간3회한)[상해1종]",
                "theme": "수술",
                "confidence": 0.10257888066825657,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 330.0,
                        "totalProfit": 8462.627299
                    },
                    "200000": {
                        "totalPrice": 660.0,
                        "totalProfit": 16965.090844
                    },
                    "300000": {
                        "totalPrice": 990.0,
                        "totalProfit": 25467.520462
                    }
                }
            },
            {
                "id": "633527",
                "name": "뇌혈관질환통원일당(상급종합병원, 연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0016184151063582172,
                "availableQuantities": [
                    50000,
                    90000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 635.0,
                        "totalProfit": 19439.96719
                    },
                    "90000": {
                        "totalPrice": 1143.0,
                        "totalProfit": 35024.180458
                    },
                    "100000": {
                        "totalPrice": 1270.0,
                        "totalProfit": 38920.072588
                    },
                    "200000": {
                        "totalPrice": 2540.0,
                        "totalProfit": 77880.232482
                    }
                }
            },
            {
                "id": "633259",
                "name": "상급종합병원 질병수술비",
                "theme": "수술",
                "confidence": 0.004687374892730778,
                "availableQuantities": [
                    100000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 358.0,
                        "totalProfit": 2438.226006
                    },
                    "300000": {
                        "totalPrice": 1074.0,
                        "totalProfit": 7394.204584
                    },
                    "500000": {
                        "totalPrice": 1790.0,
                        "totalProfit": 12350.183162
                    },
                    "1000000": {
                        "totalPrice": 3580.0,
                        "totalProfit": 24740.129606
                    }
                }
            },
            {
                "id": "632986",
                "name": "간호·간병통합서비스 사용 질병입원일당(1일이상180일한도)",
                "theme": "입원일당",
                "confidence": 0.08204389522174985,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 2740.0,
                        "totalProfit": 64410.716306
                    },
                    "70000": {
                        "totalPrice": 3836.0,
                        "totalProfit": 90190.884915
                    }
                }
            },
            {
                "id": "610918",
                "name": "골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.07633841947004959,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000,
                    700000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 174.0,
                        "totalProfit": 3087.577609
                    },
                    "200000": {
                        "totalPrice": 348.0,
                        "totalProfit": 6214.966183
                    },
                    "300000": {
                        "totalPrice": 522.0,
                        "totalProfit": 9342.369015
                    },
                    "500000": {
                        "totalPrice": 870.0,
                        "totalProfit": 15597.1446
                    },
                    "700000": {
                        "totalPrice": 1218.0,
                        "totalProfit": 21851.944259
                    }
                }
            },
            {
                "id": "633332",
                "name": "당뇨병진단비Ⅱ[당화혈색소 11.0%이상]",
                "theme": "기타",
                "confidence": 0.007544567534132344,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 240.0,
                        "totalProfit": -590.746734
                    },
                    "2000000": {
                        "totalPrice": 480.0,
                        "totalProfit": -1141.006111
                    },
                    "3000000": {
                        "totalPrice": 720.0,
                        "totalProfit": -1691.677273
                    },
                    "5000000": {
                        "totalPrice": 1200.0,
                        "totalProfit": -2792.485046
                    }
                }
            },
            {
                "id": "631228",
                "name": "수술비(1~5종)[질병3종]",
                "theme": "수술",
                "confidence": 0.028795488529428828,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 735.0,
                        "totalProfit": -6867.512318
                    },
                    "1000000": {
                        "totalPrice": 1470.0,
                        "totalProfit": -13695.079823
                    }
                }
            },
            {
                "id": "611302",
                "name": "간병인사용 일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.013866431863276595,
                "availableQuantities": [
                    50000,
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 4.0,
                        "totalProfit": 36.006728
                    },
                    "150000": {
                        "totalPrice": 12.0,
                        "totalProfit": 188.576132
                    }
                }
            },
            {
                "id": "632484",
                "name": "유사암수술비(25%체증형)",
                "theme": "수술",
                "confidence": 0.14925000268018598,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 312.0,
                        "totalProfit": -618.634857
                    },
                    "2000000": {
                        "totalPrice": 624.0,
                        "totalProfit": -1197.506431
                    },
                    "3000000": {
                        "totalPrice": 936.0,
                        "totalProfit": -1776.378004
                    },
                    "5000000": {
                        "totalPrice": 1560.0,
                        "totalProfit": -2934.121152
                    }
                }
            },
            {
                "id": "630094",
                "name": "충수염수술비",
                "theme": "수술",
                "confidence": 0.06110136905787683,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 43.0,
                        "totalProfit": 737.967111
                    }
                }
            },
            {
                "id": "611264",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.043453936555218065,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 80.0,
                        "totalProfit": -5291.851353
                    },
                    "200000": {
                        "totalPrice": 160.0,
                        "totalProfit": -10543.811101
                    }
                }
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.39519841065858036,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 230.0,
                        "totalProfit": 4570.651124
                    },
                    "300000": {
                        "totalPrice": 345.0,
                        "totalProfit": 6875.867319
                    },
                    "500000": {
                        "totalPrice": 575.0,
                        "totalProfit": 11486.298919
                    }
                }
            },
            {
                "id": "610834",
                "name": "수술비(1~5종)[상해3종]",
                "theme": "수술",
                "confidence": 0.007135773849576848,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 80.0,
                        "totalProfit": -492.511099
                    },
                    "1000000": {
                        "totalPrice": 160.0,
                        "totalProfit": -945.019242
                    }
                }
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 38.0,
                        "totalProfit": 560.607403
                    }
                }
            },
            {
                "id": "630519",
                "name": "특정희귀난치성질환수술비",
                "theme": "수술",
                "confidence": 0.032614560778849326,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 110.0,
                        "totalProfit": 2703.872
                    },
                    "2000000": {
                        "totalPrice": 220.0,
                        "totalProfit": 5447.507282
                    },
                    "3000000": {
                        "totalPrice": 330.0,
                        "totalProfit": 8191.142565
                    }
                }
            },
            {
                "id": "611013",
                "name": "수술비(1~7종, 연간3회한)[상해2종]",
                "theme": "수술",
                "confidence": 0.10257888066825657,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 260.0,
                        "totalProfit": 6140.617454
                    },
                    "300000": {
                        "totalPrice": 390.0,
                        "totalProfit": 9230.866203
                    }
                }
            },
            {
                "id": "632349",
                "name": "암수술비(유사암제외)(25%체증형)",
                "theme": "3대진단",
                "confidence": 0.1582137359346234,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1095.0,
                        "totalProfit": 17342.877287
                    },
                    "2000000": {
                        "totalPrice": 2190.0,
                        "totalProfit": 34725.519122
                    },
                    "3000000": {
                        "totalPrice": 3285.0,
                        "totalProfit": 52108.160956
                    },
                    "5000000": {
                        "totalPrice": 5475.0,
                        "totalProfit": 86873.444625
                    }
                }
            },
            {
                "id": "610766",
                "name": "상급종합병원일반상해입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.004596524442213079,
                "availableQuantities": [
                    20000,
                    30000,
                    50000,
                    70000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 130.0,
                        "totalProfit": 3292.152142
                    },
                    "30000": {
                        "totalPrice": 195.0,
                        "totalProfit": 4958.323388
                    },
                    "50000": {
                        "totalPrice": 325.0,
                        "totalProfit": 8290.398714
                    },
                    "70000": {
                        "totalPrice": 455.0,
                        "totalProfit": 11622.573082
                    },
                    "100000": {
                        "totalPrice": 650.0,
                        "totalProfit": 16620.795079
                    }
                }
            },
            {
                "id": "632141",
                "name": "131대질병수술비(특정다빈도29대질병)",
                "theme": "수술",
                "confidence": 0.17046058849080659,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 153.0,
                        "totalProfit": -944.729492
                    },
                    "200000": {
                        "totalPrice": 306.0,
                        "totalProfit": -1849.695701
                    }
                }
            },
            {
                "id": "633001",
                "name": "기타피부암 및 갑상선암 주요치료비(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.05299564294062733,
                "availableQuantities": [
                    1000000,
                    2000000,
                    4000000
                ],
                "recommendedQuantity": 4000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 207.0,
                        "totalProfit": 1008.449461
                    },
                    "2000000": {
                        "totalPrice": 414.0,
                        "totalProfit": 2056.630812
                    },
                    "4000000": {
                        "totalPrice": 828.0,
                        "totalProfit": 4152.993515
                    }
                }
            },
            {
                "id": "631621",
                "name": "급성심근경색증통원일당(1일이상 30일한도)[급성심근경색증통원일당]",
                "theme": "입원일당",
                "confidence": 0.002471331035150586,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 29.0,
                        "totalProfit": 986.461199
                    }
                }
            },
            {
                "id": "633539",
                "name": "허혈성심장질환통원일당(상급종합병원, 연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0016119761676984827,
                "availableQuantities": [
                    50000,
                    90000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 460.0,
                        "totalProfit": 16132.377118
                    },
                    "90000": {
                        "totalPrice": 828.0,
                        "totalProfit": 29070.202736
                    },
                    "100000": {
                        "totalPrice": 920.0,
                        "totalProfit": 32304.543466
                    },
                    "200000": {
                        "totalPrice": 1840.0,
                        "totalProfit": 64649.039121
                    }
                }
            },
            {
                "id": "633516",
                "name": "특정순환계질환 급여치료비(요양병원 제외)(본인부담금 1백만원이상)(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.03261372030358343,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 11418.0,
                        "totalProfit": 232203.034902
                    }
                }
            },
            {
                "id": "632138",
                "name": "131대질병수술비(뇌혈관질환)",
                "theme": "수술",
                "confidence": 0.17046058849080659,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 313.0,
                        "totalProfit": 6699.487341
                    },
                    "2000000": {
                        "totalPrice": 626.0,
                        "totalProfit": 13438.74178
                    },
                    "3000000": {
                        "totalPrice": 939.0,
                        "totalProfit": 20177.993679
                    },
                    "5000000": {
                        "totalPrice": 1565.0,
                        "totalProfit": 33656.505122
                    }
                }
            },
            {
                "id": "630022",
                "name": "질병수술위로금",
                "theme": "수술",
                "confidence": 0.11033633340411686,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1724.0,
                        "totalProfit": -7069.539604
                    },
                    "200000": {
                        "totalPrice": 3448.0,
                        "totalProfit": -14099.315925
                    }
                }
            },
            {
                "id": "631226",
                "name": "수술비(1~5종)[질병1종]",
                "theme": "수술",
                "confidence": 0.028795488529428828,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 774.0,
                        "totalProfit": -10245.268046
                    },
                    "200000": {
                        "totalPrice": 1548.0,
                        "totalProfit": -20450.680568
                    }
                }
            },
            {
                "id": "633015",
                "name": "상급병실(1인실) 종합병원 질병수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.056309206136795416,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 130.0,
                        "totalProfit": 3640.413601
                    }
                }
            },
            {
                "id": "631803",
                "name": "수술비(1~7종, 연간3회한)[질병2종]",
                "theme": "수술",
                "confidence": 0.2299686236934079,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 720.0,
                        "totalProfit": 15096.696358
                    },
                    "300000": {
                        "totalPrice": 1080.0,
                        "totalProfit": 22664.99986
                    }
                }
            },
            {
                "id": "631611",
                "name": "뇌졸중통원일당(1일이상 30일한도)[뇌졸중통원일당]",
                "theme": "입원일당",
                "confidence": 0.0025592068815592102,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 363.0,
                        "totalProfit": 11991.734863
                    }
                }
            },
            {
                "id": "631263",
                "name": "종합병원 질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.044236320489978484,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1722.0,
                        "totalProfit": 49665.368121
                    },
                    "20000": {
                        "totalPrice": 3444.0,
                        "totalProfit": 99370.604421
                    },
                    "30000": {
                        "totalPrice": 5166.0,
                        "totalProfit": 149075.88062
                    },
                    "50000": {
                        "totalPrice": 8610.0,
                        "totalProfit": 248486.356751
                    }
                }
            },
            {
                "id": "610912",
                "name": "골절(치아파절제외)진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.0417733147400697,
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
                        "totalPrice": 534.0,
                        "totalProfit": 5919.048623
                    },
                    "200000": {
                        "totalPrice": 1068.0,
                        "totalProfit": 11877.903298
                    },
                    "300000": {
                        "totalPrice": 1602.0,
                        "totalProfit": 17836.750545
                    },
                    "400000": {
                        "totalPrice": 2136.0,
                        "totalProfit": 23795.6071
                    },
                    "500000": {
                        "totalPrice": 2670.0,
                        "totalProfit": 29754.450244
                    }
                }
            },
            {
                "id": "610937",
                "name": "상해사고부상치료비[3등급]",
                "theme": "수술",
                "confidence": 0.001166429605151993,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 151.0,
                        "totalProfit": 3888.900239
                    },
                    "200000": {
                        "totalPrice": 302.0,
                        "totalProfit": 7817.44755
                    },
                    "300000": {
                        "totalPrice": 453.0,
                        "totalProfit": 11743.947585
                    },
                    "1000000": {
                        "totalPrice": 1510.0,
                        "totalProfit": 39241.934946
                    }
                }
            },
            {
                "id": "633339",
                "name": "2-3인실 상급종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.05102345731071019,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 180.0,
                        "totalProfit": 4641.203125
                    },
                    "50000": {
                        "totalPrice": 450.0,
                        "totalProfit": 11662.804364
                    }
                }
            },
            {
                "id": "633526",
                "name": "뇌혈관질환통원일당(종합병원, 연간30회한)",
                "theme": "입원일당",
                "confidence": 0.001330394164294762,
                "availableQuantities": [
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 1020.0,
                        "totalProfit": 31239.939592
                    },
                    "50000": {
                        "totalPrice": 1700.0,
                        "totalProfit": 52093.305616
                    }
                }
            },
            {
                "id": "611347",
                "name": "특정중증상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.00011786033152083448,
                "availableQuantities": [
                    20000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 62.0,
                        "totalProfit": 1075.684825
                    },
                    "50000": {
                        "totalPrice": 155.0,
                        "totalProfit": 2749.028595
                    },
                    "100000": {
                        "totalPrice": 310.0,
                        "totalProfit": 5538.034794
                    }
                }
            },
            {
                "id": "611346",
                "name": "2-3인실 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.013592508037664678,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 146.0,
                        "totalProfit": 3556.053975
                    },
                    "50000": {
                        "totalPrice": 365.0,
                        "totalProfit": 8950.047703
                    }
                }
            },
            {
                "id": "631805",
                "name": "수술비(1~7종, 연간3회한)[질병4종]",
                "theme": "수술",
                "confidence": 0.2989341409347872,
                "availableQuantities": [
                    400000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 1204.0,
                        "totalProfit": 27267.433382
                    },
                    "500000": {
                        "totalPrice": 1505.0,
                        "totalProfit": 34094.286036
                    },
                    "1000000": {
                        "totalPrice": 3010.0,
                        "totalProfit": 68228.476161
                    }
                }
            },
            {
                "id": "632139",
                "name": "131대질병수술비(후각특정질환)",
                "theme": "수술",
                "confidence": 0.17046058849080659,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 36.0,
                        "totalProfit": 443.648495
                    },
                    "300000": {
                        "totalPrice": 53.0,
                        "totalProfit": 647.943008
                    },
                    "500000": {
                        "totalPrice": 89.0,
                        "totalProfit": 1131.354661
                    },
                    "1000000": {
                        "totalPrice": 178.0,
                        "totalProfit": 2300.29289
                    }
                }
            },
            {
                "id": "610833",
                "name": "수술비(1~5종)[상해2종]",
                "theme": "수술",
                "confidence": 0.007135773849576848,
                "availableQuantities": [
                    10000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 10.0,
                        "totalProfit": -36.408016
                    },
                    "100000": {
                        "totalPrice": 101.0,
                        "totalProfit": 35.777902
                    },
                    "200000": {
                        "totalPrice": 202.0,
                        "totalProfit": 111.321847
                    }
                }
            },
            {
                "id": "633338",
                "name": "이상지질혈증(고지혈증포함)대상질병진단비[중증 이상지질혈증(고지혈증포함)]",
                "theme": "기타",
                "confidence": 0.0046309523726661105,
                "availableQuantities": [
                    100000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 38.0,
                        "totalProfit": 290.956657
                    },
                    "1000000": {
                        "totalPrice": 380.0,
                        "totalProfit": 3267.04788
                    },
                    "2000000": {
                        "totalPrice": 760.0,
                        "totalProfit": 6573.804092
                    }
                }
            },
            {
                "id": "640175",
                "name": "경증이상치매간병비",
                "theme": "기타",
                "confidence": 0.0004754263823176861,
                "availableQuantities": [
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 1094.0,
                        "totalProfit": 30290.582476
                    },
                    "5000000": {
                        "totalPrice": 2735.0,
                        "totalProfit": 75784.55027
                    }
                }
            },
            {
                "id": "633265",
                "name": "종합병원 질병수술비",
                "theme": "수술",
                "confidence": 0.006283549342241066,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 766.0,
                        "totalProfit": 4506.125868
                    },
                    "200000": {
                        "totalPrice": 1532.0,
                        "totalProfit": 9052.01502
                    },
                    "300000": {
                        "totalPrice": 2298.0,
                        "totalProfit": 13597.904171
                    }
                }
            },
            {
                "id": "633271",
                "name": "상급종합병원 질병수술비(특정5대질병 제외)",
                "theme": "수술",
                "confidence": 0.0021821997149724932,
                "availableQuantities": [
                    300000,
                    400000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 906.0,
                        "totalProfit": 22774.655186
                    },
                    "400000": {
                        "totalPrice": 1208.0,
                        "totalProfit": 30379.461342
                    },
                    "500000": {
                        "totalPrice": 1510.0,
                        "totalProfit": 37984.267498
                    },
                    "1000000": {
                        "totalPrice": 3020.0,
                        "totalProfit": 76008.29828
                    },
                    "2000000": {
                        "totalPrice": 6040.0,
                        "totalProfit": 152056.359842
                    }
                }
            },
            {
                "id": "630024",
                "name": "항암방사선약물치료비",
                "theme": "3대진단",
                "confidence": 0.0949807033142519,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 1220.0,
                        "totalProfit": 17947.407891
                    },
                    "3000000": {
                        "totalPrice": 1830.0,
                        "totalProfit": 26940.98843
                    },
                    "5000000": {
                        "totalPrice": 3050.0,
                        "totalProfit": 44928.139466
                    }
                }
            },
            {
                "id": "632133",
                "name": "131대질병수술비(심장질환)",
                "theme": "수술",
                "confidence": 0.17046058849080659,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 284.0,
                        "totalProfit": 5843.922027
                    },
                    "2000000": {
                        "totalPrice": 568.0,
                        "totalProfit": 11727.639708
                    },
                    "3000000": {
                        "totalPrice": 852.0,
                        "totalProfit": 17611.35061
                    },
                    "5000000": {
                        "totalPrice": 1420.0,
                        "totalProfit": 29378.773596
                    }
                }
            },
            {
                "id": "631802",
                "name": "수술비(1~7종, 연간3회한)[질병1종]",
                "theme": "수술",
                "confidence": 0.19548586507271826,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 2540.0,
                        "totalProfit": 59643.512979
                    },
                    "200000": {
                        "totalPrice": 5080.0,
                        "totalProfit": 119326.875246
                    },
                    "300000": {
                        "totalPrice": 7620.0,
                        "totalProfit": 179010.244202
                    }
                }
            }
        ]
    },
    "3": {
        "id": "3",
        "channel": "GA",
        "age": 53,
        "gndr": "여",
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
                "kmv_adj": -150000.0
            },
            {
                "tag": "출생전",
                "kmv_adj": -664667.2603089998
            }
        ],
        "items": [
            {
                "id": "630228",
                "name": "뇌혈관질환진단",
                "quantity": 10000000,
                "theme": "3대진단",
                "totalPrice": 15910.0,
                "totalProfit": 336827.321569
            },
            {
                "id": "630527",
                "name": "유사암진단비",
                "quantity": 3000000,
                "theme": "3대진단",
                "totalPrice": 507.0,
                "totalProfit": -21552.075702
            },
            {
                "id": "630697",
                "name": "암진단비(유사암 제외)",
                "quantity": 30000000,
                "theme": "3대진단",
                "totalPrice": 53880.0,
                "totalProfit": 614673.064916
            },
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "quantity": 10000000,
                "theme": "사망후유",
                "totalPrice": 102.0,
                "totalProfit": 4198.223823
            },
            {
                "id": "632504",
                "name": "뇌혈관질환수술비(25%체증형)",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 3000.0,
                "totalProfit": 73886.786265
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "quantity": 50000000,
                "theme": "사망후유",
                "totalPrice": 3795.0,
                "totalProfit": 160341.675926
            },
            {
                "id": "632505",
                "name": "허혈성심장질환수술비(25%체증형)",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 4150.0,
                "totalProfit": -97722.39103
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "quantity": 10000000,
                "theme": "3대진단",
                "totalPrice": 9200.0,
                "totalProfit": 45473.786751
            }
        ],
        "availableItems": [
            {
                "id": "611263",
                "name": "간호·간병통합서비스 사용 일반상해입원일당(1일이상180일한도)",
                "theme": "입원일당",
                "confidence": 0.05348880723184124,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 880.0,
                        "totalProfit": -40678.317364
                    },
                    "70000": {
                        "totalPrice": 1232.0,
                        "totalProfit": -56931.269082
                    }
                }
            },
            {
                "id": "633319",
                "name": "질병입원 간병인비용지원(간병인비용 2,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00014116841880981582,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 779.0,
                        "totalProfit": 25987.056084
                    },
                    "2000000": {
                        "totalPrice": 1558.0,
                        "totalProfit": 52020.035196
                    }
                }
            },
            {
                "id": "633120",
                "name": "질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.006569492747274988,
                "availableQuantities": [
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 94.0,
                        "totalProfit": 2127.259667
                    },
                    "30000": {
                        "totalPrice": 141.0,
                        "totalProfit": 3213.856464
                    }
                }
            },
            {
                "id": "630515",
                "name": "간질환수술비",
                "theme": "수술",
                "confidence": 0.011190878693217013,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 73.0,
                        "totalProfit": 172.690942
                    },
                    "2000000": {
                        "totalPrice": 146.0,
                        "totalProfit": 391.315938
                    }
                }
            },
            {
                "id": "632314",
                "name": "만성신부전 동정맥루조성술치료비(급여, 연간1회한)",
                "theme": "3대진단",
                "confidence": 0.00163289022956755,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 125.0,
                        "totalProfit": 6065.671534
                    }
                }
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.055114338848514716,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1028.0,
                        "totalProfit": 42218.800763
                    },
                    "200000": {
                        "totalPrice": 2056.0,
                        "totalProfit": 84483.527416
                    },
                    "300000": {
                        "totalPrice": 3084.0,
                        "totalProfit": 126748.264395
                    },
                    "500000": {
                        "totalPrice": 5140.0,
                        "totalProfit": 211277.728026
                    }
                }
            },
            {
                "id": "633117",
                "name": "질병입원 간병인비용지원(간병인비용 1,000만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0036392694822749874,
                "availableQuantities": [
                    600000,
                    900000,
                    1000000,
                    1500000,
                    2000000
                ],
                "recommendedQuantity": 1500000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 880.0,
                        "totalProfit": 37160.647023
                    },
                    "900000": {
                        "totalPrice": 1320.0,
                        "totalProfit": 55763.9279
                    },
                    "1000000": {
                        "totalPrice": 1467.0,
                        "totalProfit": 61991.218309
                    },
                    "1500000": {
                        "totalPrice": 2201.0,
                        "totalProfit": 93049.173077
                    },
                    "2000000": {
                        "totalPrice": 2934.0,
                        "totalProfit": 124028.356323
                    }
                }
            },
            {
                "id": "632310",
                "name": "갑상선기능저하증진단비",
                "theme": "3대진단",
                "confidence": 0.0369001993371081,
                "availableQuantities": [
                    200000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 248.0,
                        "totalProfit": 14526.317295
                    },
                    "500000": {
                        "totalPrice": 620.0,
                        "totalProfit": 36384.665039
                    },
                    "1000000": {
                        "totalPrice": 1240.0,
                        "totalProfit": 72815.233617
                    },
                    "2000000": {
                        "totalPrice": 2480.0,
                        "totalProfit": 145676.37902
                    }
                }
            },
            {
                "id": "632532",
                "name": "131대질병수술비(편도염)",
                "theme": "수술",
                "confidence": 0.15899254201830174,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 2.0,
                        "totalProfit": 32.391079
                    },
                    "300000": {
                        "totalPrice": 3.0,
                        "totalProfit": 71.531402
                    },
                    "500000": {
                        "totalPrice": 6.0,
                        "totalProfit": 228.480784
                    },
                    "1000000": {
                        "totalPrice": 11.0,
                        "totalProfit": 424.176073
                    }
                }
            },
            {
                "id": "611345",
                "name": "2-3인실 상급종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.02060805156007521,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 35.0,
                        "totalProfit": 1707.405467
                    }
                }
            },
            {
                "id": "630026",
                "name": "질병입원일당",
                "theme": "입원일당",
                "confidence": 0.01313546226425465,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 6705.0,
                        "totalProfit": 114771.546422
                    },
                    "20000": {
                        "totalPrice": 13410.0,
                        "totalProfit": 229589.023531
                    },
                    "30000": {
                        "totalPrice": 20115.0,
                        "totalProfit": 344406.508059
                    }
                }
            },
            {
                "id": "610469",
                "name": "상해중환자실 입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.019645616052029673,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 380.0,
                        "totalProfit": 23552.766517
                    },
                    "100000": {
                        "totalPrice": 760.0,
                        "totalProfit": 47151.459765
                    },
                    "200000": {
                        "totalPrice": 1520.0,
                        "totalProfit": 94348.855745
                    },
                    "300000": {
                        "totalPrice": 2280.0,
                        "totalProfit": 141546.251725
                    }
                }
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "theme": "골절/화상",
                "confidence": 0.04012488091008118,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 66.0,
                        "totalProfit": 721.704854
                    },
                    "200000": {
                        "totalPrice": 132.0,
                        "totalProfit": 1489.338462
                    }
                }
            },
            {
                "id": "631422",
                "name": "32대질병관혈수술비(연간1회한)[14대질병]",
                "theme": "수술",
                "confidence": 0.05380480287044521,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 151.0,
                        "totalProfit": 2471.441134
                    },
                    "300000": {
                        "totalPrice": 227.0,
                        "totalProfit": 3769.479955
                    },
                    "500000": {
                        "totalPrice": 378.0,
                        "totalProfit": 6286.804272
                    }
                }
            },
            {
                "id": "633119",
                "name": "질병입원 간병인비용지원(간병인비용 2,000만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0027883094452807624,
                "availableQuantities": [
                    100000,
                    1000000,
                    1500000,
                    2500000,
                    4000000
                ],
                "recommendedQuantity": 2500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 68.0,
                        "totalProfit": 3136.648853
                    },
                    "1000000": {
                        "totalPrice": 683.0,
                        "totalProfit": 32015.659244
                    },
                    "1500000": {
                        "totalPrice": 1025.0,
                        "totalProfit": 48085.838668
                    },
                    "2500000": {
                        "totalPrice": 1708.0,
                        "totalProfit": 80147.425631
                    },
                    "4000000": {
                        "totalPrice": 2732.0,
                        "totalProfit": 128200.427603
                    }
                }
            },
            {
                "id": "633517",
                "name": "특정순환계질환 급여치료비(요양병원)(본인부담금 1백만원이상)(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.04607643369139975,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1409.0,
                        "totalProfit": 53778.915635
                    }
                }
            },
            {
                "id": "632136",
                "name": "131대질병수술비(관절염,생식기질환)",
                "theme": "수술",
                "confidence": 0.10117422913066144,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 126.0,
                        "totalProfit": -8792.557579
                    },
                    "200000": {
                        "totalPrice": 252.0,
                        "totalProfit": -17539.198525
                    },
                    "300000": {
                        "totalPrice": 378.0,
                        "totalProfit": -26285.831171
                    }
                }
            },
            {
                "id": "633313",
                "name": "질병입원 간병인비용지원(간병인비용 200만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0023794906179596875,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 835.0,
                        "totalProfit": -5405.296063
                    },
                    "200000": {
                        "totalPrice": 1669.0,
                        "totalProfit": -10843.418017
                    },
                    "300000": {
                        "totalPrice": 2504.0,
                        "totalProfit": -16202.816941
                    },
                    "400000": {
                        "totalPrice": 3338.0,
                        "totalProfit": -21640.942473
                    }
                }
            },
            {
                "id": "633315",
                "name": "질병입원 간병인비용지원(간병인비용 500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0007675523030762,
                "availableQuantities": [
                    400000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 1275.0,
                        "totalProfit": 40055.808831
                    },
                    "1000000": {
                        "totalPrice": 3188.0,
                        "totalProfit": 100247.699079
                    }
                }
            },
            {
                "id": "631612",
                "name": "뇌졸중통원일당(1일이상 30일한도)[뇌졸중상급종합병원통원일당]",
                "theme": "입원일당",
                "confidence": 0.00235660355452245,
                "availableQuantities": [
                    50000,
                    70000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1185.0,
                        "totalProfit": 73902.252567
                    },
                    "70000": {
                        "totalPrice": 1659.0,
                        "totalProfit": 103481.53116
                    },
                    "100000": {
                        "totalPrice": 2370.0,
                        "totalProfit": 147850.434921
                    }
                }
            },
            {
                "id": "632321",
                "name": "지방간대상질병관리지원비(간효소수치200IU/L 이상)",
                "theme": "기타",
                "confidence": 0.004114284124082538,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 249.0,
                        "totalProfit": 15177.981795
                    }
                }
            },
            {
                "id": "630717",
                "name": "유사암진단비",
                "theme": "3대진단",
                "confidence": 0.019848729462808815,
                "availableQuantities": [
                    200000,
                    2000000,
                    4000000,
                    6000000
                ],
                "recommendedQuantity": 6000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 33.0,
                        "totalProfit": -1739.915764
                    },
                    "2000000": {
                        "totalPrice": 334.0,
                        "totalProfit": -16671.343378
                    },
                    "4000000": {
                        "totalPrice": 668.0,
                        "totalProfit": -33296.756843
                    },
                    "6000000": {
                        "totalPrice": 1002.0,
                        "totalProfit": -49922.159782
                    }
                }
            },
            {
                "id": "630331",
                "name": "질병고도후유장해",
                "theme": "사망후유",
                "confidence": 0.015992778911732314,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 138.0,
                        "totalProfit": 5421.341508
                    }
                }
            },
            {
                "id": "631196",
                "name": "5대기관질병수술비(연간1회한)[관혈]",
                "theme": "3대진단",
                "confidence": 0.12345947762432277,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 2032.0,
                        "totalProfit": 132523.908209
                    },
                    "3000000": {
                        "totalPrice": 3048.0,
                        "totalProfit": 198808.833468
                    },
                    "5000000": {
                        "totalPrice": 5080.0,
                        "totalProfit": 331378.674073
                    }
                }
            },
            {
                "id": "632319",
                "name": "지방간대상질병관리지원비(간효소수치80IU/L 이상)",
                "theme": "기타",
                "confidence": 0.004114284124082538,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 654.0,
                        "totalProfit": 42971.804757
                    }
                }
            },
            {
                "id": "631430",
                "name": "32대질병관혈수술비(연간1회한)[4대질병]",
                "theme": "수술",
                "confidence": 0.05380480287044521,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 415.0,
                        "totalProfit": 25005.900965
                    },
                    "300000": {
                        "totalPrice": 623.0,
                        "totalProfit": 37571.15714
                    }
                }
            },
            {
                "id": "632651",
                "name": "혈전용해치료비Ⅱ(특정심장질환)(연간1회한)",
                "theme": "기타",
                "confidence": 0.10277062210497329,
                "availableQuantities": [
                    1000000,
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 240.0,
                        "totalProfit": -40503.827486
                    },
                    "2000000": {
                        "totalPrice": 480.0,
                        "totalProfit": -80961.725495
                    },
                    "5000000": {
                        "totalPrice": 1200.0,
                        "totalProfit": -202335.411165
                    }
                }
            },
            {
                "id": "633116",
                "name": "질병입원 간병인비용지원(간병인비용 500만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.017351060515703134,
                "availableQuantities": [
                    100000,
                    500000,
                    600000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 278.0,
                        "totalProfit": 11737.385033
                    },
                    "500000": {
                        "totalPrice": 1388.0,
                        "totalProfit": 58713.019896
                    },
                    "600000": {
                        "totalPrice": 1666.0,
                        "totalProfit": 70496.312283
                    },
                    "1000000": {
                        "totalPrice": 2776.0,
                        "totalProfit": 117471.931908
                    }
                }
            },
            {
                "id": "611261",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.05548010184233741,
                "availableQuantities": [
                    10000,
                    30000,
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 219.0,
                        "totalProfit": 6164.692119
                    },
                    "30000": {
                        "totalPrice": 657.0,
                        "totalProfit": 18585.941089
                    },
                    "100000": {
                        "totalPrice": 2190.0,
                        "totalProfit": 62060.304646
                    },
                    "150000": {
                        "totalPrice": 3285.0,
                        "totalProfit": 93113.426932
                    },
                    "200000": {
                        "totalPrice": 4380.0,
                        "totalProfit": 124166.545508
                    }
                }
            },
            {
                "id": "632652",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(뇌졸중)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.2666891868543302,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 312.0,
                        "totalProfit": 7710.552218
                    },
                    "5000000": {
                        "totalPrice": 520.0,
                        "totalProfit": 12881.53752
                    }
                }
            },
            {
                "id": "610939",
                "name": "상해사고부상치료비[5등급]",
                "theme": "수술",
                "confidence": 0.0006542076588077875,
                "availableQuantities": [
                    50000,
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 126.0,
                        "totalProfit": 6802.449128
                    },
                    "100000": {
                        "totalPrice": 251.0,
                        "totalProfit": 13572.069052
                    },
                    "200000": {
                        "totalPrice": 502.0,
                        "totalProfit": 27190.063386
                    }
                }
            },
            {
                "id": "630019",
                "name": "질병 중환자실입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.0212187944984372,
                "availableQuantities": [
                    20000,
                    50000,
                    100000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 68.0,
                        "totalProfit": -3837.394041
                    },
                    "50000": {
                        "totalPrice": 170.0,
                        "totalProfit": -9524.576981
                    },
                    "100000": {
                        "totalPrice": 340.0,
                        "totalProfit": -19003.232528
                    }
                }
            },
            {
                "id": "633515",
                "name": "특정순환계질환진단비",
                "theme": "기타",
                "confidence": 0.0048119566857157,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    4000000,
                    5000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 9640.0,
                        "totalProfit": 299630.498044
                    },
                    "2000000": {
                        "totalPrice": 19280.0,
                        "totalProfit": 599306.28275
                    },
                    "3000000": {
                        "totalPrice": 28920.0,
                        "totalProfit": 898982.061513
                    },
                    "4000000": {
                        "totalPrice": 38560.0,
                        "totalProfit": 1198657.846219
                    },
                    "5000000": {
                        "totalPrice": 48200.0,
                        "totalProfit": 1498333.630925
                    }
                }
            },
            {
                "id": "632323",
                "name": "특정담낭·담관염진단비",
                "theme": "기타",
                "confidence": 0.004115296567838075,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1943.0,
                        "totalProfit": 48977.785608
                    },
                    "2000000": {
                        "totalPrice": 3886.0,
                        "totalProfit": 98001.392054
                    }
                }
            },
            {
                "id": "632650",
                "name": "혈전용해치료비Ⅱ(뇌졸중)(연간1회한)",
                "theme": "기타",
                "confidence": 0.10277062210497329,
                "availableQuantities": [
                    1000000,
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 524.0,
                        "totalProfit": -4779.496369
                    },
                    "2000000": {
                        "totalPrice": 1048.0,
                        "totalProfit": -9513.063994
                    },
                    "5000000": {
                        "totalPrice": 2620.0,
                        "totalProfit": -23713.748146
                    }
                }
            },
            {
                "id": "632312",
                "name": "만성신부전 투석치료비(급여, 연간1회한)(혈액투석치료비)",
                "theme": "3대진단",
                "confidence": 0.00163289022956755,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1583.0,
                        "totalProfit": 77264.926935
                    },
                    "2000000": {
                        "totalPrice": 3166.0,
                        "totalProfit": 154575.782135
                    }
                }
            },
            {
                "id": "611340",
                "name": "일반상해입원 간병인비용지원(간병인비용 500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0002909403613463,
                "availableQuantities": [
                    400000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 317.0,
                        "totalProfit": 12981.32602
                    },
                    "1000000": {
                        "totalPrice": 793.0,
                        "totalProfit": 32561.47992
                    }
                }
            },
            {
                "id": "630930",
                "name": "통풍진단비보장 특약",
                "theme": "기타",
                "confidence": 0.037567864298729145,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1729.0,
                        "totalProfit": -34878.946081
                    },
                    "2000000": {
                        "totalPrice": 3458.0,
                        "totalProfit": -69712.278287
                    }
                }
            },
            {
                "id": "631807",
                "name": "수술비(1~7종, 연간3회한)[질병6종]",
                "theme": "수술",
                "confidence": 0.21713615421080557,
                "availableQuantities": [
                    1500000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1500000": {
                        "totalPrice": 2295.0,
                        "totalProfit": 80267.325831
                    },
                    "2000000": {
                        "totalPrice": 3060.0,
                        "totalProfit": 107038.410471
                    },
                    "3000000": {
                        "totalPrice": 4590.0,
                        "totalProfit": 160580.57722
                    },
                    "5000000": {
                        "totalPrice": 7650.0,
                        "totalProfit": 267664.925797
                    }
                }
            },
            {
                "id": "633014",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.18468709555089538,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 730.0,
                        "totalProfit": -27156.149202
                    },
                    "200000": {
                        "totalPrice": 1460.0,
                        "totalProfit": -54266.366008
                    }
                }
            },
            {
                "id": "632140",
                "name": "131대질병수술비(백내장)",
                "theme": "수술",
                "confidence": 0.10117422913066144,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 366.0,
                        "totalProfit": -58393.338273
                    },
                    "200000": {
                        "totalPrice": 732.0,
                        "totalProfit": -116740.748887
                    },
                    "300000": {
                        "totalPrice": 1098.0,
                        "totalProfit": -175088.149055
                    }
                }
            },
            {
                "id": "611343",
                "name": "일반상해입원 간병인비용지원(간병인비용 1,500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 4.233627529875e-05,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 154.0,
                        "totalProfit": 4106.670206
                    }
                }
            },
            {
                "id": "631397",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.14831816358224703,
                "availableQuantities": [
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 480.0,
                        "totalProfit": -11217.510399
                    },
                    "300000": {
                        "totalPrice": 720.0,
                        "totalProfit": -16803.2994
                    },
                    "400000": {
                        "totalPrice": 960.0,
                        "totalProfit": -22389.088401
                    }
                }
            },
            {
                "id": "631741",
                "name": "2대질병특정재활치료비(급여, 1일1회한, 연간90회한)",
                "theme": "3대진단",
                "confidence": 0.00035841557051188746,
                "availableQuantities": [
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 1604.0,
                        "totalProfit": 54211.721267
                    }
                }
            },
            {
                "id": "631804",
                "name": "수술비(1~7종, 연간3회한)[질병3종]",
                "theme": "수술",
                "confidence": 0.21713615421080557,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 554.0,
                        "totalProfit": 11777.899035
                    },
                    "300000": {
                        "totalPrice": 831.0,
                        "totalProfit": 17689.822092
                    },
                    "400000": {
                        "totalPrice": 1108.0,
                        "totalProfit": 23601.736176
                    },
                    "500000": {
                        "totalPrice": 1385.0,
                        "totalProfit": 29513.659232
                    }
                }
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.06155027911055892,
                "availableQuantities": [
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 16.0,
                        "totalProfit": 595.716266
                    },
                    "300000": {
                        "totalPrice": 24.0,
                        "totalProfit": 916.546426
                    },
                    "400000": {
                        "totalPrice": 32.0,
                        "totalProfit": 1237.368748
                    }
                }
            },
            {
                "id": "610936",
                "name": "상해사고부상치료비[2등급]",
                "theme": "수술",
                "confidence": 0.0006542076588077875,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 5430.0,
                        "totalProfit": 290178.76697
                    },
                    "5000000": {
                        "totalPrice": 9050.0,
                        "totalProfit": 483661.897307
                    }
                }
            },
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "theme": "사망후유",
                "confidence": 0.09474786283844126,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 10.0,
                        "totalProfit": 368.10104
                    }
                }
            },
            {
                "id": "632520",
                "name": "131대질병수술비(다빈도62대질병)",
                "theme": "수술",
                "confidence": 0.15899254201830174,
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
                        "totalPrice": 898.0,
                        "totalProfit": 30779.951313
                    },
                    "300000": {
                        "totalPrice": 1347.0,
                        "totalProfit": 46192.895996
                    },
                    "500000": {
                        "totalPrice": 2245.0,
                        "totalProfit": 77018.777291
                    },
                    "1000000": {
                        "totalPrice": 4490.0,
                        "totalProfit": 154083.484615
                    },
                    "2000000": {
                        "totalPrice": 8980.0,
                        "totalProfit": 308212.907336
                    }
                }
            },
            {
                "id": "631381",
                "name": "중대한재생불량성빈혈진단비",
                "theme": "기타",
                "confidence": 0.03756164322445561,
                "availableQuantities": [
                    1000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 9.0,
                        "totalProfit": 386.289952
                    },
                    "5000000": {
                        "totalPrice": 46.0,
                        "totalProfit": 2193.719841
                    }
                }
            },
            {
                "id": "611301",
                "name": "일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.0017656893683268,
                "availableQuantities": [
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 8.0,
                        "totalProfit": 63.710105
                    },
                    "30000": {
                        "totalPrice": 12.0,
                        "totalProfit": 118.536795
                    }
                }
            },
            {
                "id": "631406",
                "name": "32대질병관혈수술비(연간1회한)[5대질병]",
                "theme": "수술",
                "confidence": 0.05380480287044521,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 2032.0,
                        "totalProfit": 132523.908209
                    },
                    "3000000": {
                        "totalPrice": 3048.0,
                        "totalProfit": 198808.833468
                    },
                    "5000000": {
                        "totalPrice": 5080.0,
                        "totalProfit": 331378.674073
                    }
                }
            },
            {
                "id": "632328",
                "name": "특정6대소화계질환(궤양,게실염)진단비",
                "theme": "3대진단",
                "confidence": 0.005582115380984175,
                "availableQuantities": [
                    200000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 402.0,
                        "totalProfit": 27065.995889
                    },
                    "500000": {
                        "totalPrice": 1005.0,
                        "totalProfit": 67733.873755
                    },
                    "1000000": {
                        "totalPrice": 2010.0,
                        "totalProfit": 135513.664335
                    }
                }
            },
            {
                "id": "640047",
                "name": "인공관절수술비",
                "theme": "수술",
                "confidence": 0.0943334095781134,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 139.0,
                        "totalProfit": 5442.268836
                    },
                    "1000000": {
                        "totalPrice": 277.0,
                        "totalProfit": 10851.714538
                    }
                }
            },
            {
                "id": "611014",
                "name": "수술비(1~7종, 연간3회한)[상해3종]",
                "theme": "수술",
                "confidence": 0.04280782095422575,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 189.0,
                        "totalProfit": 9517.863536
                    },
                    "400000": {
                        "totalPrice": 252.0,
                        "totalProfit": 12705.785955
                    },
                    "500000": {
                        "totalPrice": 315.0,
                        "totalProfit": 15893.72248
                    }
                }
            },
            {
                "id": "632134",
                "name": "131대질병수술비(특정31대질병)",
                "theme": "수술",
                "confidence": 0.10117422913066144,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 2030.0,
                        "totalProfit": 85470.868708
                    },
                    "3000000": {
                        "totalPrice": 3045.0,
                        "totalProfit": 128229.278397
                    },
                    "5000000": {
                        "totalPrice": 5075.0,
                        "totalProfit": 213746.078563
                    }
                }
            },
            {
                "id": "633525",
                "name": "뇌혈관질환통원일당(연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0018263219833482124,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1202.0,
                        "totalProfit": 73087.107353
                    },
                    "20000": {
                        "totalPrice": 2404.0,
                        "totalProfit": 146220.144505
                    },
                    "30000": {
                        "totalPrice": 3606.0,
                        "totalProfit": 219353.189964
                    }
                }
            },
            {
                "id": "632526",
                "name": "131대질병수술비(유방의장애)",
                "theme": "수술",
                "confidence": 0.15899254201830174,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1.0,
                        "totalProfit": -1080.973151
                    },
                    "200000": {
                        "totalPrice": 3.0,
                        "totalProfit": -2037.332657
                    },
                    "300000": {
                        "totalPrice": 4.0,
                        "totalProfit": -3072.404515
                    },
                    "500000": {
                        "totalPrice": 7.0,
                        "totalProfit": -5063.851832
                    },
                    "1000000": {
                        "totalPrice": 13.0,
                        "totalProfit": -10160.522331
                    }
                }
            },
            {
                "id": "631622",
                "name": "급성심근경색증통원일당(1일이상 30일한도)[급성심근경색증상급종합병원통원일당]",
                "theme": "입원일당",
                "confidence": 0.00226564290536905,
                "availableQuantities": [
                    50000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 310.0,
                        "totalProfit": 17943.604302
                    },
                    "100000": {
                        "totalPrice": 620.0,
                        "totalProfit": 35933.129022
                    }
                }
            },
            {
                "id": "633314",
                "name": "질병입원 간병인비용지원(간병인비용 300만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.000439213100208275,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000,
                    600000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 1135.0,
                        "totalProfit": 35661.18687
                    },
                    "300000": {
                        "totalPrice": 1703.0,
                        "totalProfit": 53554.094765
                    },
                    "400000": {
                        "totalPrice": 2270.0,
                        "totalProfit": 71368.277151
                    },
                    "500000": {
                        "totalPrice": 2838.0,
                        "totalProfit": 89261.164105
                    },
                    "600000": {
                        "totalPrice": 3406.0,
                        "totalProfit": 107154.077833
                    }
                }
            },
            {
                "id": "632137",
                "name": "131대질병수술비(치핵)",
                "theme": "수술",
                "confidence": 0.10117422913066144,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 94.0,
                        "totalProfit": -5002.494632
                    },
                    "200000": {
                        "totalPrice": 187.0,
                        "totalProfit": -10037.819887
                    }
                }
            },
            {
                "id": "610938",
                "name": "상해사고부상치료비[4등급]",
                "theme": "수술",
                "confidence": 0.0006542076588077875,
                "availableQuantities": [
                    100000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 368.0,
                        "totalProfit": 19904.682255
                    },
                    "300000": {
                        "totalPrice": 1104.0,
                        "totalProfit": 59805.905678
                    },
                    "500000": {
                        "totalPrice": 1840.0,
                        "totalProfit": 99707.1291
                    },
                    "1000000": {
                        "totalPrice": 3680.0,
                        "totalProfit": 199460.184886
                    }
                }
            },
            {
                "id": "610935",
                "name": "상해사고부상치료비[1등급]",
                "theme": "수술",
                "confidence": 0.0006542076588077875,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 1443.0,
                        "totalProfit": 76634.060102
                    },
                    "5000000": {
                        "totalPrice": 2405.0,
                        "totalProfit": 127754.052369
                    }
                }
            },
            {
                "id": "633312",
                "name": "질병입원 간병인비용지원(간병인비용 700만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.000217576696228375,
                "availableQuantities": [
                    500000,
                    600000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 1013.0,
                        "totalProfit": 47492.362801
                    },
                    "600000": {
                        "totalPrice": 1215.0,
                        "totalProfit": 56952.804114
                    },
                    "1000000": {
                        "totalPrice": 2025.0,
                        "totalProfit": 94951.902894
                    }
                }
            },
            {
                "id": "611339",
                "name": "일반상해입원 간병인비용지원(간병인비용 300만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00016817673106113749,
                "availableQuantities": [
                    200000,
                    300000,
                    400000,
                    500000,
                    600000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 288.0,
                        "totalProfit": 11776.593453
                    },
                    "300000": {
                        "totalPrice": 432.0,
                        "totalProfit": 17687.841865
                    },
                    "400000": {
                        "totalPrice": 576.0,
                        "totalProfit": 23599.084951
                    },
                    "500000": {
                        "totalPrice": 721.0,
                        "totalProfit": 29589.03136
                    },
                    "600000": {
                        "totalPrice": 865.0,
                        "totalProfit": 35500.288056
                    }
                }
            },
            {
                "id": "630451",
                "name": "2대질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.0025971704771593374,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    40000
                ],
                "recommendedQuantity": 40000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 876.0,
                        "totalProfit": 35296.895405
                    },
                    "20000": {
                        "totalPrice": 1752.0,
                        "totalProfit": 70639.719725
                    },
                    "30000": {
                        "totalPrice": 2628.0,
                        "totalProfit": 105982.553235
                    },
                    "40000": {
                        "totalPrice": 3504.0,
                        "totalProfit": 141325.377556
                    }
                }
            },
            {
                "id": "631806",
                "name": "수술비(1~7종, 연간3회한)[질병5종]",
                "theme": "수술",
                "confidence": 0.21713615421080557,
                "availableQuantities": [
                    800000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "800000": {
                        "totalPrice": 1016.0,
                        "totalProfit": 34660.469163
                    },
                    "1000000": {
                        "totalPrice": 1270.0,
                        "totalProfit": 43337.059671
                    },
                    "2000000": {
                        "totalPrice": 2540.0,
                        "totalProfit": 86720.057447
                    },
                    "3000000": {
                        "totalPrice": 3810.0,
                        "totalProfit": 130103.055223
                    },
                    "5000000": {
                        "totalPrice": 6350.0,
                        "totalProfit": 216869.035696
                    }
                }
            },
            {
                "id": "633118",
                "name": "질병입원 간병인비용지원(간병인비용 1,500만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0025653282064694873,
                "availableQuantities": [
                    700000,
                    1500000,
                    2500000,
                    3000000
                ],
                "recommendedQuantity": 2500000,
                "priceAndProfitByQuantity": {
                    "700000": {
                        "totalPrice": 684.0,
                        "totalProfit": 28884.675543
                    },
                    "1500000": {
                        "totalPrice": 1466.0,
                        "totalProfit": 61970.662821
                    },
                    "2500000": {
                        "totalPrice": 2443.0,
                        "totalProfit": 103288.802707
                    },
                    "3000000": {
                        "totalPrice": 2931.0,
                        "totalProfit": 123908.492214
                    }
                }
            },
            {
                "id": "631784",
                "name": "4대양성종양진단비(대장 양성종양및특정폴립)",
                "theme": "3대진단",
                "confidence": 0.029324557118834187,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1201.0,
                        "totalProfit": 16864.9543
                    },
                    "200000": {
                        "totalPrice": 2402.0,
                        "totalProfit": 33774.193698
                    },
                    "300000": {
                        "totalPrice": 3603.0,
                        "totalProfit": 50683.43361
                    }
                }
            },
            {
                "id": "633538",
                "name": "허혈성심장질환통원일당(종합병원, 연간30회한)",
                "theme": "입원일당",
                "confidence": 0.001971742542501175,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 750.0,
                        "totalProfit": 49117.16312
                    },
                    "20000": {
                        "totalPrice": 1500.0,
                        "totalProfit": 98280.248364
                    },
                    "30000": {
                        "totalPrice": 2250.0,
                        "totalProfit": 147443.349589
                    },
                    "50000": {
                        "totalPrice": 3750.0,
                        "totalProfit": 245769.529412
                    }
                }
            },
            {
                "id": "633317",
                "name": "질병입원 간병인비용지원(간병인비용 1,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00015058169941650103,
                "availableQuantities": [
                    600000,
                    1000000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 1006.0,
                        "totalProfit": 26596.679424
                    },
                    "1000000": {
                        "totalPrice": 1677.0,
                        "totalProfit": 44384.6055
                    }
                }
            },
            {
                "id": "633311",
                "name": "질병입원 간병인비용지원(간병인비용 300만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0010374994213601125,
                "availableQuantities": [
                    300000,
                    500000,
                    600000,
                    1000000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 1278.0,
                        "totalProfit": 53872.703257
                    },
                    "500000": {
                        "totalPrice": 2131.0,
                        "totalProfit": 89897.136441
                    },
                    "600000": {
                        "totalPrice": 2557.0,
                        "totalProfit": 107870.011521
                    },
                    "1000000": {
                        "totalPrice": 4261.0,
                        "totalProfit": 179761.439774
                    }
                }
            },
            {
                "id": "632653",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(특정심장질환)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.2666891868543302,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 324.0,
                        "totalProfit": 7275.872822
                    },
                    "5000000": {
                        "totalPrice": 540.0,
                        "totalProfit": 12157.074799
                    }
                }
            },
            {
                "id": "611344",
                "name": "일반상해입원 간병인비용지원(간병인비용 2,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 4.8374245440625e-05,
                "availableQuantities": [
                    400000,
                    1000000,
                    1200000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 36.0,
                        "totalProfit": 956.863726
                    },
                    "1000000": {
                        "totalPrice": 89.0,
                        "totalProfit": 2382.252957
                    },
                    "1200000": {
                        "totalPrice": 107.0,
                        "totalProfit": 2883.665221
                    }
                }
            },
            {
                "id": "630092",
                "name": "호흡기관련질병수술비",
                "theme": "수술",
                "confidence": 0.006967894439982263,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 86.0,
                        "totalProfit": 6369.732356
                    }
                }
            },
            {
                "id": "633537",
                "name": "허혈성심장질환통원일당(연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0018240845607782874,
                "availableQuantities": [
                    10000,
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 921.0,
                        "totalProfit": 58996.712155
                    },
                    "20000": {
                        "totalPrice": 1842.0,
                        "totalProfit": 118039.347536
                    },
                    "30000": {
                        "totalPrice": 2763.0,
                        "totalProfit": 177081.99115
                    }
                }
            },
            {
                "id": "611262",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원)",
                "theme": "입원일당",
                "confidence": 0.0554807229286162,
                "availableQuantities": [
                    10000,
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 49.0,
                        "totalProfit": 751.875014
                    },
                    "20000": {
                        "totalPrice": 98.0,
                        "totalProfit": 1549.678432
                    },
                    "50000": {
                        "totalPrice": 245.0,
                        "totalProfit": 3943.104309
                    }
                }
            },
            {
                "id": "611016",
                "name": "수술비(1~7종, 연간3회한)[상해5종]",
                "theme": "수술",
                "confidence": 0.04280782095422575,
                "availableQuantities": [
                    800000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "800000": {
                        "totalPrice": 96.0,
                        "totalProfit": 4858.090721
                    },
                    "1000000": {
                        "totalPrice": 120.0,
                        "totalProfit": 6084.094842
                    },
                    "2000000": {
                        "totalPrice": 240.0,
                        "totalProfit": 12214.12779
                    },
                    "3000000": {
                        "totalPrice": 360.0,
                        "totalProfit": 18344.160737
                    },
                    "5000000": {
                        "totalPrice": 600.0,
                        "totalProfit": 30604.226632
                    }
                }
            },
            {
                "id": "632327",
                "name": "특정4대소화계질환(충수·복막·기타장질환)진단비",
                "theme": "3대진단",
                "confidence": 0.005582115380984175,
                "availableQuantities": [
                    100000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 165.0,
                        "totalProfit": 10044.104121
                    },
                    "500000": {
                        "totalPrice": 825.0,
                        "totalProfit": 50404.107449
                    },
                    "1000000": {
                        "totalPrice": 1650.0,
                        "totalProfit": 100854.114346
                    }
                }
            },
            {
                "id": "611265",
                "name": "상급병실(1인실) 종합병원 일반상해수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.022202557547737374,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 30.0,
                        "totalProfit": -707.356152
                    },
                    "200000": {
                        "totalPrice": 60.0,
                        "totalProfit": -1368.776089
                    }
                }
            },
            {
                "id": "633341",
                "name": "2-3인실 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.06390840203471321,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 1016.0,
                        "totalProfit": 42753.504301
                    },
                    "50000": {
                        "totalPrice": 2540.0,
                        "totalProfit": 106952.669724
                    }
                }
            },
            {
                "id": "610487",
                "name": "5대골절진단비",
                "theme": "골절/화상",
                "confidence": 0.009771946168746288,
                "availableQuantities": [
                    200000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 288.0,
                        "totalProfit": 13408.441274
                    },
                    "500000": {
                        "totalPrice": 720.0,
                        "totalProfit": 33590.007307
                    },
                    "1000000": {
                        "totalPrice": 1440.0,
                        "totalProfit": 67225.936764
                    },
                    "2000000": {
                        "totalPrice": 2880.0,
                        "totalProfit": 134497.809744
                    }
                }
            },
            {
                "id": "611015",
                "name": "수술비(1~7종, 연간3회한)[상해4종]",
                "theme": "수술",
                "confidence": 0.04280782095422575,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 300.0,
                        "totalProfit": 15099.238216
                    },
                    "1000000": {
                        "totalPrice": 600.0,
                        "totalProfit": 30244.398918
                    }
                }
            },
            {
                "id": "611341",
                "name": "일반상해입원 간병인비용지원(간병인비용 700만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 5.04103969231375e-05,
                "availableQuantities": [
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 205.0,
                        "totalProfit": 5510.729501
                    }
                }
            },
            {
                "id": "610488",
                "name": "5대골절수술비",
                "theme": "골절/화상",
                "confidence": 0.008033971040538613,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 34.0,
                        "totalProfit": 948.519643
                    },
                    "300000": {
                        "totalPrice": 51.0,
                        "totalProfit": 1445.752049
                    },
                    "500000": {
                        "totalPrice": 85.0,
                        "totalProfit": 2440.207907
                    },
                    "1000000": {
                        "totalPrice": 170.0,
                        "totalProfit": 4926.338254
                    },
                    "2000000": {
                        "totalPrice": 340.0,
                        "totalProfit": 9898.607901
                    }
                }
            },
            {
                "id": "631560",
                "name": "양성뇌종양진단비Ⅱ",
                "theme": "기타",
                "confidence": 0.12316652512894949,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 204.0,
                        "totalProfit": 1216.971982
                    },
                    "5000000": {
                        "totalPrice": 340.0,
                        "totalProfit": 2058.90164
                    }
                }
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "theme": "골절/화상",
                "confidence": 0.04012488091008118,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 9.0,
                        "totalProfit": 431.513087
                    },
                    "200000": {
                        "totalPrice": 18.0,
                        "totalProfit": 908.951888
                    }
                }
            },
            {
                "id": "611012",
                "name": "수술비(1~7종, 연간3회한)[상해1종]",
                "theme": "수술",
                "confidence": 0.04280782095422575,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 670.0,
                        "totalProfit": 34818.215802
                    },
                    "200000": {
                        "totalPrice": 1340.0,
                        "totalProfit": 69682.369709
                    },
                    "300000": {
                        "totalPrice": 2010.0,
                        "totalProfit": 104546.520793
                    }
                }
            },
            {
                "id": "630929",
                "name": "대상포진눈병진단비보장 특약",
                "theme": "기타",
                "confidence": 0.0100576012882545,
                "availableQuantities": [
                    1000000,
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 65.0,
                        "totalProfit": -1759.462577
                    },
                    "3000000": {
                        "totalPrice": 195.0,
                        "totalProfit": -5186.54686
                    }
                }
            },
            {
                "id": "633527",
                "name": "뇌혈관질환통원일당(상급종합병원, 연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0023173934503163754,
                "availableQuantities": [
                    50000,
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1430.0,
                        "totalProfit": 83514.988165
                    },
                    "100000": {
                        "totalPrice": 2860.0,
                        "totalProfit": 167075.904564
                    },
                    "150000": {
                        "totalPrice": 4290.0,
                        "totalProfit": 250636.824188
                    },
                    "200000": {
                        "totalPrice": 5720.0,
                        "totalProfit": 334197.740587
                    }
                }
            },
            {
                "id": "631785",
                "name": "4대양성종양진단비(위·십이지장·소화계통 양성종양및특정폴립)",
                "theme": "3대진단",
                "confidence": 0.029324557118834187,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 366.0,
                        "totalProfit": 16842.218608
                    },
                    "200000": {
                        "totalPrice": 732.0,
                        "totalProfit": 33730.257645
                    },
                    "300000": {
                        "totalPrice": 1098.0,
                        "totalProfit": 50618.303201
                    }
                }
            },
            {
                "id": "610918",
                "name": "골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.04042132463198084,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 207.0,
                        "totalProfit": 8770.168559
                    },
                    "200000": {
                        "totalPrice": 414.0,
                        "totalProfit": 17586.261469
                    }
                }
            },
            {
                "id": "631346",
                "name": "갑상선기능항진증치료비",
                "theme": "3대진단",
                "confidence": 0.042019377887146034,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 152.0,
                        "totalProfit": 1727.726376
                    }
                }
            },
            {
                "id": "631787",
                "name": "4대양성종양진단비(골·관절연골 양성종양)",
                "theme": "3대진단",
                "confidence": 0.029324557118834187,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 149.0,
                        "totalProfit": 9089.166709
                    }
                }
            },
            {
                "id": "611302",
                "name": "간병인사용 일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.02871500121012356,
                "availableQuantities": [
                    50000,
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 4.0,
                        "totalProfit": 30.815216
                    },
                    "150000": {
                        "totalPrice": 12.0,
                        "totalProfit": 184.307878
                    }
                }
            },
            {
                "id": "630094",
                "name": "충수염수술비",
                "theme": "수술",
                "confidence": 0.0167323630282959,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 74.0,
                        "totalProfit": 1615.338648
                    }
                }
            },
            {
                "id": "611264",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.05707095301170184,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 100.0,
                        "totalProfit": -29883.258738
                    },
                    "200000": {
                        "totalPrice": 200.0,
                        "totalProfit": -59720.58126
                    }
                }
            },
            {
                "id": "611303",
                "name": "간호·간병통합서비스 사용 일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.028822473167008866,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 5.0,
                        "totalProfit": -286.617862
                    },
                    "70000": {
                        "totalPrice": 7.0,
                        "totalProfit": -382.855451
                    }
                }
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.27478735826086303,
                "availableQuantities": [
                    100000,
                    200000,
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 118.0,
                        "totalProfit": 5811.360643
                    },
                    "200000": {
                        "totalPrice": 236.0,
                        "totalProfit": 11668.641927
                    },
                    "300000": {
                        "totalPrice": 354.0,
                        "totalProfit": 17525.935459
                    },
                    "400000": {
                        "totalPrice": 472.0,
                        "totalProfit": 23383.216868
                    },
                    "500000": {
                        "totalPrice": 590.0,
                        "totalProfit": 29240.5104
                    }
                }
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 76.0,
                        "totalProfit": 3209.761892
                    }
                }
            },
            {
                "id": "630519",
                "name": "특정희귀난치성질환수술비",
                "theme": "수술",
                "confidence": 0.02922609948743716,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 193.0,
                        "totalProfit": 7487.152759
                    },
                    "2000000": {
                        "totalPrice": 386.0,
                        "totalProfit": 15020.229041
                    },
                    "3000000": {
                        "totalPrice": 579.0,
                        "totalProfit": 22553.315916
                    }
                }
            },
            {
                "id": "632313",
                "name": "만성신부전 투석치료비(급여, 연간1회한)(복막투석치료비)",
                "theme": "3대진단",
                "confidence": 0.00163289022956755,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 85.0,
                        "totalProfit": 4257.87949
                    },
                    "2000000": {
                        "totalPrice": 170.0,
                        "totalProfit": 8561.682756
                    }
                }
            },
            {
                "id": "632984",
                "name": "간병인사용 질병입원일당(1일이상180일한도)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.12251503156634146,
                "availableQuantities": [
                    10000,
                    30000,
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 723.0,
                        "totalProfit": 18670.434804
                    },
                    "30000": {
                        "totalPrice": 2169.0,
                        "totalProfit": 56103.165306
                    },
                    "100000": {
                        "totalPrice": 7230.0,
                        "totalProfit": 187117.714404
                    },
                    "150000": {
                        "totalPrice": 10845.0,
                        "totalProfit": 280699.542146
                    },
                    "200000": {
                        "totalPrice": 14460.0,
                        "totalProfit": 374281.366914
                    }
                }
            },
            {
                "id": "632985",
                "name": "간병인사용 질병입원일당(1일이상180일한도)(요양병원)",
                "theme": "입원일당",
                "confidence": 0.12251503156634146,
                "availableQuantities": [
                    10000,
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 897.0,
                        "totalProfit": 19009.027088
                    },
                    "20000": {
                        "totalPrice": 1794.0,
                        "totalProfit": 38063.98588
                    },
                    "50000": {
                        "totalPrice": 4485.0,
                        "totalProfit": 95228.867684
                    }
                }
            },
            {
                "id": "633318",
                "name": "질병입원 간병인비용지원(간병인비용 1,500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00012381621249965243,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1115.0,
                        "totalProfit": 29490.057873
                    }
                }
            },
            {
                "id": "611013",
                "name": "수술비(1~7종, 연간3회한)[상해2종]",
                "theme": "수술",
                "confidence": 0.04280782095422575,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 260.0,
                        "totalProfit": 13345.994364
                    },
                    "300000": {
                        "totalPrice": 390.0,
                        "totalProfit": 20041.962199
                    }
                }
            },
            {
                "id": "631786",
                "name": "4대양성종양진단비(중이·호흡계통·흉곽내기관 양성종양)",
                "theme": "3대진단",
                "confidence": 0.029324557118834187,
                "availableQuantities": [
                    100000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 91.0,
                        "totalProfit": 5998.043133
                    },
                    "500000": {
                        "totalPrice": 455.0,
                        "totalProfit": 30173.912335
                    }
                }
            },
            {
                "id": "631414",
                "name": "32대질병관혈수술비(연간1회한)[9대질병]",
                "theme": "수술",
                "confidence": 0.05380480287044521,
                "availableQuantities": [
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 600.0,
                        "totalProfit": 36053.931861
                    },
                    "3000000": {
                        "totalPrice": 900.0,
                        "totalProfit": 54103.871765
                    },
                    "5000000": {
                        "totalPrice": 1500.0,
                        "totalProfit": 90203.741732
                    }
                }
            },
            {
                "id": "632141",
                "name": "131대질병수술비(특정다빈도29대질병)",
                "theme": "수술",
                "confidence": 0.10117422913066144,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 194.0,
                        "totalProfit": 1650.869041
                    },
                    "200000": {
                        "totalPrice": 388.0,
                        "totalProfit": 3347.668139
                    }
                }
            },
            {
                "id": "633001",
                "name": "기타피부암 및 갑상선암 주요치료비(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.08231013114881977,
                "availableQuantities": [
                    1000000,
                    2000000,
                    4000000
                ],
                "recommendedQuantity": 4000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 136.0,
                        "totalProfit": -472.650181
                    },
                    "2000000": {
                        "totalPrice": 272.0,
                        "totalProfit": -899.389955
                    },
                    "4000000": {
                        "totalPrice": 544.0,
                        "totalProfit": -1752.859229
                    }
                }
            },
            {
                "id": "631621",
                "name": "급성심근경색증통원일당(1일이상 30일한도)[급성심근경색증통원일당]",
                "theme": "입원일당",
                "confidence": 0.00226564290536905,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 155.0,
                        "totalProfit": 8450.742961
                    }
                }
            },
            {
                "id": "632324",
                "name": "급성췌장염진단비",
                "theme": "기타",
                "confidence": 0.0041160337106070375,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 2026.0,
                        "totalProfit": 133607.792806
                    }
                }
            },
            {
                "id": "632502",
                "name": "6대심장질환진단비",
                "theme": "3대진단",
                "confidence": 0.028104934731728273,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 2172.0,
                        "totalProfit": 53193.183302
                    },
                    "2000000": {
                        "totalPrice": 4344.0,
                        "totalProfit": 106432.064388
                    },
                    "3000000": {
                        "totalPrice": 6516.0,
                        "totalProfit": 159670.8847
                    },
                    "5000000": {
                        "totalPrice": 10860.0,
                        "totalProfit": 266148.584971
                    }
                }
            },
            {
                "id": "630928",
                "name": "대상포진진단비보장 특약",
                "theme": "기타",
                "confidence": 0.038262140300605686,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 4670.0,
                        "totalProfit": 180782.408507
                    },
                    "2000000": {
                        "totalPrice": 9340.0,
                        "totalProfit": 361610.468588
                    }
                }
            },
            {
                "id": "631200",
                "name": "5대기관질병수술비(연간1회한)[비관혈]",
                "theme": "3대진단",
                "confidence": 0.11107663100271589,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 329.0,
                        "totalProfit": -26155.576559
                    },
                    "2000000": {
                        "totalPrice": 658.0,
                        "totalProfit": -52265.22418
                    },
                    "3000000": {
                        "totalPrice": 987.0,
                        "totalProfit": -78374.868342
                    },
                    "5000000": {
                        "totalPrice": 1645.0,
                        "totalProfit": -130594.154417
                    }
                }
            },
            {
                "id": "633539",
                "name": "허혈성심장질환통원일당(상급종합병원, 연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0023055197436310376,
                "availableQuantities": [
                    50000,
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1570.0,
                        "totalProfit": 102854.028438
                    },
                    "100000": {
                        "totalPrice": 3140.0,
                        "totalProfit": 205753.979613
                    },
                    "150000": {
                        "totalPrice": 4710.0,
                        "totalProfit": 308653.939509
                    },
                    "200000": {
                        "totalPrice": 6280.0,
                        "totalProfit": 411553.897331
                    }
                }
            },
            {
                "id": "631735",
                "name": "3대질환 MRI촬영검사비(급여, 연간1회한)",
                "theme": "3대진단",
                "confidence": 0.000242193725266025,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 235.0,
                        "totalProfit": 24755.044465
                    }
                }
            },
            {
                "id": "633316",
                "name": "질병입원 간병인비용지원(간병인비용 700만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0001461515859183992,
                "availableQuantities": [
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 930.0,
                        "totalProfit": 31059.402627
                    },
                    "500000": {
                        "totalPrice": 1162.0,
                        "totalProfit": 38796.354063
                    }
                }
            },
            {
                "id": "633516",
                "name": "특정순환계질환 급여치료비(요양병원 제외)(본인부담금 1백만원이상)(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.04607643369139975,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 14109.0,
                        "totalProfit": 449853.220521
                    }
                }
            },
            {
                "id": "632138",
                "name": "131대질병수술비(뇌혈관질환)",
                "theme": "수술",
                "confidence": 0.10117422913066144,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 339.0,
                        "totalProfit": 10720.79424
                    },
                    "2000000": {
                        "totalPrice": 678.0,
                        "totalProfit": 21487.511279
                    },
                    "3000000": {
                        "totalPrice": 1017.0,
                        "totalProfit": 32254.236978
                    },
                    "5000000": {
                        "totalPrice": 1695.0,
                        "totalProfit": 53787.686362
                    }
                }
            },
            {
                "id": "630022",
                "name": "질병수술위로금",
                "theme": "수술",
                "confidence": 0.07033586810159986,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1977.0,
                        "totalProfit": -116758.564889
                    },
                    "200000": {
                        "totalPrice": 3954.0,
                        "totalProfit": -233471.205205
                    }
                }
            },
            {
                "id": "633015",
                "name": "상급병실(1인실) 종합병원 질병수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.06968161809285314,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 240.0,
                        "totalProfit": 7904.118699
                    },
                    "200000": {
                        "totalPrice": 480.0,
                        "totalProfit": 15854.175503
                    },
                    "300000": {
                        "totalPrice": 720.0,
                        "totalProfit": 23804.226136
                    }
                }
            },
            {
                "id": "631803",
                "name": "수술비(1~7종, 연간3회한)[질병2종]",
                "theme": "수술",
                "confidence": 0.21713615421080557,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 530.0,
                        "totalProfit": 15131.218882
                    },
                    "200000": {
                        "totalPrice": 1060.0,
                        "totalProfit": 30308.360791
                    },
                    "300000": {
                        "totalPrice": 1590.0,
                        "totalProfit": 45485.5027
                    }
                }
            },
            {
                "id": "630527",
                "name": "유사암진단비",
                "theme": "3대진단",
                "confidence": 0.2465351667600983,
                "availableQuantities": [
                    200000,
                    2000000,
                    4000000,
                    6000000
                ],
                "recommendedQuantity": 6000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 34.0,
                        "totalProfit": -1662.189608
                    },
                    "2000000": {
                        "totalPrice": 338.0,
                        "totalProfit": -16366.298916
                    },
                    "4000000": {
                        "totalPrice": 676.0,
                        "totalProfit": -32686.657393
                    },
                    "6000000": {
                        "totalPrice": 1014.0,
                        "totalProfit": -49007.01587
                    }
                }
            },
            {
                "id": "610886",
                "name": "신골절치료비(치아파절포함)",
                "theme": "골절/화상",
                "confidence": 0.010264755174881426,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 2500.0,
                        "totalProfit": 115010.45378
                    },
                    "2000000": {
                        "totalPrice": 5000.0,
                        "totalProfit": 230066.834025
                    },
                    "3000000": {
                        "totalPrice": 7500.0,
                        "totalProfit": 345123.22402
                    },
                    "5000000": {
                        "totalPrice": 12500.0,
                        "totalProfit": 575235.988551
                    }
                }
            },
            {
                "id": "631611",
                "name": "뇌졸중통원일당(1일이상 30일한도)[뇌졸중통원일당]",
                "theme": "입원일당",
                "confidence": 0.00235660355452245,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 877.0,
                        "totalProfit": 55580.888997
                    }
                }
            },
            {
                "id": "610912",
                "name": "골절(치아파절제외)진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.03476886024018698,
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
                        "totalPrice": 664.0,
                        "totalProfit": 22156.208959
                    },
                    "200000": {
                        "totalPrice": 1328.0,
                        "totalProfit": 44358.346232
                    },
                    "300000": {
                        "totalPrice": 1992.0,
                        "totalProfit": 66560.487418
                    },
                    "400000": {
                        "totalPrice": 2656.0,
                        "totalProfit": 88762.62469
                    },
                    "500000": {
                        "totalPrice": 3320.0,
                        "totalProfit": 110964.769865
                    }
                }
            },
            {
                "id": "610937",
                "name": "상해사고부상치료비[3등급]",
                "theme": "수술",
                "confidence": 0.0006542076588077875,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 199.0,
                        "totalProfit": 10801.501795
                    },
                    "300000": {
                        "totalPrice": 299.0,
                        "totalProfit": 16264.566117
                    },
                    "500000": {
                        "totalPrice": 498.0,
                        "totalProfit": 27111.948142
                    },
                    "1000000": {
                        "totalPrice": 996.0,
                        "totalProfit": 54269.781738
                    }
                }
            },
            {
                "id": "633339",
                "name": "2-3인실 상급종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.06414276978921227,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 340.0,
                        "totalProfit": 15770.732414
                    },
                    "50000": {
                        "totalPrice": 850.0,
                        "totalProfit": 39495.737036
                    }
                }
            },
            {
                "id": "633526",
                "name": "뇌혈관질환통원일당(종합병원, 연간30회한)",
                "theme": "입원일당",
                "confidence": 0.0019782515071349,
                "availableQuantities": [
                    10000,
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 803.0,
                        "totalProfit": 47059.060478
                    },
                    "20000": {
                        "totalPrice": 1606.0,
                        "totalProfit": 94164.050485
                    },
                    "30000": {
                        "totalPrice": 2409.0,
                        "totalProfit": 141269.049068
                    },
                    "50000": {
                        "totalPrice": 4015.0,
                        "totalProfit": 235479.031012
                    }
                }
            },
            {
                "id": "631737",
                "name": "암특정재활치료비(급여, 1일1회한, 연간20회한)",
                "theme": "3대진단",
                "confidence": 0.0006515695203658126,
                "availableQuantities": [
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 80.0,
                        "totalProfit": 1522.456177
                    }
                }
            },
            {
                "id": "632326",
                "name": "특정천공진단비",
                "theme": "기타",
                "confidence": 0.005843482580502513,
                "availableQuantities": [
                    1000000,
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 105.0,
                        "totalProfit": 1217.494827
                    },
                    "3000000": {
                        "totalPrice": 315.0,
                        "totalProfit": 3744.33528
                    }
                }
            },
            {
                "id": "611346",
                "name": "2-3인실 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.020454438432531023,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 275.0,
                        "totalProfit": 6615.817961
                    }
                }
            },
            {
                "id": "631805",
                "name": "수술비(1~7종, 연간3회한)[질병4종]",
                "theme": "수술",
                "confidence": 0.21713615421080557,
                "availableQuantities": [
                    400000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 1808.0,
                        "totalProfit": 58359.9086
                    },
                    "500000": {
                        "totalPrice": 2260.0,
                        "totalProfit": 72961.374635
                    },
                    "1000000": {
                        "totalPrice": 4520.0,
                        "totalProfit": 145968.678658
                    }
                }
            },
            {
                "id": "611342",
                "name": "일반상해입원 간병인비용지원(간병인비용 1,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 5.19983547729625e-05,
                "availableQuantities": [
                    600000,
                    1000000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 188.0,
                        "totalProfit": 5057.48513
                    },
                    "1000000": {
                        "totalPrice": 313.0,
                        "totalProfit": 8433.463485
                    }
                }
            },
            {
                "id": "632503",
                "name": "6대심장질환진단비Ⅱ",
                "theme": "3대진단",
                "confidence": 0.013996826544455563,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 2166.0,
                        "totalProfit": 52808.956668
                    },
                    "2000000": {
                        "totalPrice": 4332.0,
                        "totalProfit": 105663.599948
                    },
                    "3000000": {
                        "totalPrice": 6498.0,
                        "totalProfit": 158518.252984
                    },
                    "5000000": {
                        "totalPrice": 10830.0,
                        "totalProfit": 264227.522593
                    }
                }
            },
            {
                "id": "633310",
                "name": "질병입원 간병인비용지원(간병인비용 200만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.008499079380850712,
                "availableQuantities": [
                    500000,
                    600000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 3120.0,
                        "totalProfit": 43496.566571
                    },
                    "600000": {
                        "totalPrice": 3743.0,
                        "totalProfit": 52126.361756
                    },
                    "1000000": {
                        "totalPrice": 6239.0,
                        "totalProfit": 86960.307908
                    }
                }
            },
            {
                "id": "632322",
                "name": "간농양진단비",
                "theme": "기타",
                "confidence": 0.004113684631806875,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 277.0,
                        "totalProfit": 13267.99902
                    },
                    "2000000": {
                        "totalPrice": 554.0,
                        "totalProfit": 26581.92138
                    }
                }
            },
            {
                "id": "632139",
                "name": "131대질병수술비(후각특정질환)",
                "theme": "수술",
                "confidence": 0.10117422913066144,
                "availableQuantities": [
                    200000,
                    300000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 68.0,
                        "totalProfit": 1980.316842
                    },
                    "300000": {
                        "totalPrice": 102.0,
                        "totalProfit": 2993.44889
                    },
                    "500000": {
                        "totalPrice": 170.0,
                        "totalProfit": 5019.703838
                    },
                    "1000000": {
                        "totalPrice": 340.0,
                        "totalProfit": 10085.336632
                    }
                }
            },
            {
                "id": "631738",
                "name": "암특정통증완화치료비(급여, 연간1회한)",
                "theme": "3대진단",
                "confidence": 0.00078781036846265,
                "availableQuantities": [
                    300000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 780.0,
                        "totalProfit": 15931.431397
                    },
                    "500000": {
                        "totalPrice": 1300.0,
                        "totalProfit": 26583.022673
                    }
                }
            },
            {
                "id": "630024",
                "name": "항암방사선약물치료비",
                "theme": "3대진단",
                "confidence": 0.05886505766397066,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 893.0,
                        "totalProfit": 10879.258842
                    },
                    "2000000": {
                        "totalPrice": 1786.0,
                        "totalProfit": 21804.410037
                    },
                    "3000000": {
                        "totalPrice": 2679.0,
                        "totalProfit": 32729.55482
                    },
                    "5000000": {
                        "totalPrice": 4465.0,
                        "totalProfit": 54579.865861
                    }
                }
            },
            {
                "id": "632133",
                "name": "131대질병수술비(심장질환)",
                "theme": "수술",
                "confidence": 0.10117422913066144,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 778.0,
                        "totalProfit": -15281.938968
                    },
                    "2000000": {
                        "totalPrice": 1556.0,
                        "totalProfit": -30517.948613
                    },
                    "3000000": {
                        "totalPrice": 2334.0,
                        "totalProfit": -45753.956122
                    },
                    "5000000": {
                        "totalPrice": 3890.0,
                        "totalProfit": -76225.973276
                    }
                }
            },
            {
                "id": "631802",
                "name": "수술비(1~7종, 연간3회한)[질병1종]",
                "theme": "수술",
                "confidence": 0.21713615421080557,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1760.0,
                        "totalProfit": 61871.979971
                    },
                    "100000": {
                        "totalPrice": 3520.0,
                        "totalProfit": 123789.874499
                    },
                    "200000": {
                        "totalPrice": 7040.0,
                        "totalProfit": 247625.672993
                    },
                    "300000": {
                        "totalPrice": 10560.0,
                        "totalProfit": 371461.485598
                    }
                }
            }
        ]
    },
    "4": {
        "id": "4",
        "channel": "GA",
        "age": 47,
        "gndr": "여",
        "unt_pd_nm": "이목구비",
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
                "id": "640147",
                "name": "갱신형 치아보철치료비(상해 및 질병)",
                "quantity": 1500000,
                "theme": "치아",
                "totalPrice": 61325.0,
                "totalProfit": 30200.91338
            },
            {
                "id": "610030",
                "name": "후유장해담보(외모추상2배)",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 84.0,
                "totalProfit": 280.321811
            },
            {
                "id": "630696",
                "name": "자녀_치석제거(스케일링)치료비",
                "quantity": 10000,
                "theme": "치아",
                "totalPrice": 552.0,
                "totalProfit": 14786.784396
            },
            {
                "id": "640261",
                "name": "영구치상실치료비(상해및질병)",
                "quantity": 30000,
                "theme": "치아",
                "totalPrice": 2624.0,
                "totalProfit": 70514.110796
            },
            {
                "id": "640288",
                "name": "신치아보철치료비(임플란트 무제한)(2년감액형)[재식립 임플란트치료비보장]",
                "quantity": 2000000,
                "theme": "치아",
                "totalPrice": 1396.0,
                "totalProfit": 85850.25806
            },
            {
                "id": "640149",
                "name": "자녀 치아근관치료비(유치 및 영구치, 상해 및 질병)",
                "quantity": 30000,
                "theme": "치아",
                "totalPrice": 1236.0,
                "totalProfit": 30384.137813
            },
            {
                "id": "640169",
                "name": "치아보존치료비(크라운무제한)(유치및영구치,상해및질병)",
                "quantity": 300000,
                "theme": "치아",
                "totalPrice": 24795.0,
                "totalProfit": 455959.454901
            },
            {
                "id": "640153",
                "name": "자녀 치아촬영비(X-ray 및 파노라마)",
                "quantity": 10000,
                "theme": "치아",
                "totalPrice": 1249.0,
                "totalProfit": 35287.089237
            },
            {
                "id": "631301",
                "name": "치주소파술치료비",
                "quantity": 20000,
                "theme": "치아",
                "totalPrice": 390.0,
                "totalProfit": -3131.412867
            }
        ],
        "availableItems": [
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
                        "totalProfit": 10288.274
                    },
                    "200000": {
                        "totalPrice": 1496.0,
                        "totalProfit": 20620.643
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
                        "totalProfit": -36189.207
                    },
                    "200000": {
                        "totalPrice": 4908.0,
                        "totalProfit": -72333.99
                    },
                    "300000": {
                        "totalPrice": 7362.0,
                        "totalProfit": -108478.65
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
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "4000000": {
                        "totalPrice": 280.0,
                        "totalProfit": 7134.8843
                    },
                    "5000000": {
                        "totalPrice": 350.0,
                        "totalProfit": 8929.544
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
                        "totalProfit": -3180.7715
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
                        "totalProfit": -98156.38
                    },
                    "400000": {
                        "totalPrice": 18282.0,
                        "totalProfit": -130869.43
                    },
                    "500000": {
                        "totalPrice": 22853.0,
                        "totalProfit": -163568.98
                    },
                    "700000": {
                        "totalPrice": 31994.0,
                        "totalProfit": -228982.45
                    },
                    "1000000": {
                        "totalPrice": 45705.0,
                        "totalProfit": -327117.38
                    }
                }
            },
            {
                "id": "640169",
                "name": "치아보존치료비(크라운무제한)(유치및영구치,상해및질병)",
                "theme": "치아",
                "confidence": 0.5772510092100218,
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
                        "totalProfit": 15491.677
                    },
                    "100000": {
                        "totalPrice": 8265.0,
                        "totalProfit": 155219.19
                    },
                    "200000": {
                        "totalPrice": 16530.0,
                        "totalProfit": 310482.8
                    },
                    "300000": {
                        "totalPrice": 24795.0,
                        "totalProfit": 465746.44
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
                        "totalProfit": 48253.734
                    },
                    "30000": {
                        "totalPrice": 2624.0,
                        "totalProfit": 72407.07
                    },
                    "50000": {
                        "totalPrice": 4374.0,
                        "totalProfit": 120726.97
                    }
                }
            },
            {
                "id": "640156",
                "name": "갱신형 치아보존치료비(유치및영구치,상해및질병)",
                "theme": "치아",
                "confidence": 0.057016051442617885,
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
                        "totalProfit": 15537.787
                    },
                    "100000": {
                        "totalPrice": 6854.0,
                        "totalProfit": 155873.88
                    },
                    "200000": {
                        "totalPrice": 13708.0,
                        "totalProfit": 311791.88
                    },
                    "300000": {
                        "totalPrice": 20562.0,
                        "totalProfit": 467710.2
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
                        "totalProfit": 6249.3145
                    },
                    "200000": {
                        "totalPrice": 858.0,
                        "totalProfit": 12542.824
                    },
                    "500000": {
                        "totalPrice": 2145.0,
                        "totalProfit": 31423.328
                    },
                    "1000000": {
                        "totalPrice": 4290.0,
                        "totalProfit": 62890.72
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
                        "totalProfit": 1084.6144
                    },
                    "300000": {
                        "totalPrice": 135.0,
                        "totalProfit": 3341.8342
                    },
                    "500000": {
                        "totalPrice": 225.0,
                        "totalProfit": 5599.084
                    },
                    "600000": {
                        "totalPrice": 270.0,
                        "totalProfit": 6727.718
                    },
                    "1000000": {
                        "totalPrice": 450.0,
                        "totalProfit": 11242.297
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
                        "totalProfit": 15131.233
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
                        "totalProfit": -82453.586
                    },
                    "500000": {
                        "totalPrice": 17949.0,
                        "totalProfit": -137375.1
                    },
                    "1000000": {
                        "totalPrice": 35898.0,
                        "totalProfit": -274707.53
                    }
                }
            },
            {
                "id": "640517",
                "name": "특정 임플란트 치조골 이식술 치료비(연간3개한)",
                "theme": "치아",
                "confidence": 0.01155955278085421,
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
                        "totalProfit": -27980.092
                    },
                    "200000": {
                        "totalPrice": 3714.0,
                        "totalProfit": -55915.645
                    },
                    "300000": {
                        "totalPrice": 5571.0,
                        "totalProfit": -83851.45
                    },
                    "500000": {
                        "totalPrice": 9285.0,
                        "totalProfit": -139722.47
                    }
                }
            },
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
                        "totalProfit": 2359.2815
                    },
                    "200000": {
                        "totalPrice": 314.0,
                        "totalProfit": 4762.827
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
                        "totalProfit": 1506.8981
                    },
                    "200000": {
                        "totalPrice": 184.0,
                        "totalProfit": 3057.8716
                    },
                    "300000": {
                        "totalPrice": 276.0,
                        "totalProfit": 4608.959
                    },
                    "500000": {
                        "totalPrice": 460.0,
                        "totalProfit": 7711.003
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
                        "totalProfit": 22333.172
                    },
                    "1000000": {
                        "totalPrice": 698.0,
                        "totalProfit": 44700.85
                    },
                    "1500000": {
                        "totalPrice": 1047.0,
                        "totalProfit": 67078.28
                    },
                    "2000000": {
                        "totalPrice": 1396.0,
                        "totalProfit": 89445.945
                    }
                }
            },
            {
                "id": "640147",
                "name": "갱신형 치아보철치료비(상해 및 질병)",
                "theme": "치아",
                "confidence": 0.05144365674266341,
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
                        "totalProfit": 9603.61
                    },
                    "700000": {
                        "totalPrice": 28618.0,
                        "totalProfit": 13446.159
                    },
                    "1000000": {
                        "totalPrice": 40883.0,
                        "totalProfit": 19227.889
                    },
                    "1500000": {
                        "totalPrice": 61325.0,
                        "totalProfit": 28875.94
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
                        "totalProfit": 36174.902
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
                        "totalProfit": 10277.246
                    },
                    "500000": {
                        "totalPrice": 265.0,
                        "totalProfit": 17154.096
                    },
                    "1000000": {
                        "totalPrice": 530.0,
                        "totalProfit": 34352.082
                    },
                    "1300000": {
                        "totalPrice": 689.0,
                        "totalProfit": 44673.566
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
                        "totalProfit": -27505.582
                    },
                    "200000": {
                        "totalPrice": 7180.0,
                        "totalProfit": -54965.71
                    },
                    "300000": {
                        "totalPrice": 10769.0,
                        "totalProfit": -82453.586
                    },
                    "500000": {
                        "totalPrice": 17949.0,
                        "totalProfit": -137375.1
                    },
                    "1000000": {
                        "totalPrice": 35898.0,
                        "totalProfit": -274707.53
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
                        "totalProfit": 5156.8447
                    },
                    "200000": {
                        "totalPrice": 978.0,
                        "totalProfit": 10357.766
                    },
                    "300000": {
                        "totalPrice": 1467.0,
                        "totalProfit": 15558.833
                    },
                    "400000": {
                        "totalPrice": 1956.0,
                        "totalProfit": 20759.76
                    },
                    "500000": {
                        "totalPrice": 2445.0,
                        "totalProfit": 25960.834
                    }
                }
            },
            {
                "id": "640149",
                "name": "자녀 치아근관치료비(유치 및 영구치, 상해 및 질병)",
                "theme": "치아",
                "confidence": 0.34724889418138744,
                "availableQuantities": [
                    20000,
                    30000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 824.0,
                        "totalProfit": 20733.02
                    },
                    "30000": {
                        "totalPrice": 1236.0,
                        "totalProfit": 31121.465
                    },
                    "50000": {
                        "totalPrice": 2060.0,
                        "totalProfit": 51898.777
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
                        "totalProfit": 253.63387
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
                    5000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1601.0,
                        "totalProfit": 24811.297
                    },
                    "5000000": {
                        "totalPrice": 8005.0,
                        "totalProfit": 124233.92
                    }
                }
            }
        ]
    },
    "5": {
        "id": "5",
        "channel": "TA",
        "age": 24,
        "gndr": "여",
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
                "kmv_adj": -194915.95471100006
            },
            {
                "tag": "출생전",
                "kmv_adj": -679850.4646500001
            }
        ],
        "items": [
            {
                "id": "630228",
                "name": "뇌혈관질환진단",
                "quantity": 30000000,
                "theme": "3대진단",
                "totalPrice": 26970.0,
                "totalProfit": 351805.810741
            },
            {
                "id": "630527",
                "name": "유사암진단비",
                "quantity": 10000000,
                "theme": "3대진단",
                "totalPrice": 1500.0,
                "totalProfit": 15684.939143
            },
            {
                "id": "633391",
                "name": "암직접치료통원일당(상급종합병원)(면책기간미적용)",
                "quantity": 50000,
                "theme": "입원일당",
                "totalPrice": 2455.0,
                "totalProfit": 49017.42717
            },
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "quantity": 50000000,
                "theme": "사망후유",
                "totalPrice": 300.0,
                "totalProfit": 6846.15265
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "quantity": 50000000,
                "theme": "사망후유",
                "totalPrice": 2400.0,
                "totalProfit": 55406.183985
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "quantity": 30000000,
                "theme": "3대진단",
                "totalPrice": 17490.0,
                "totalProfit": 250408.004799
            },
            {
                "id": "633380",
                "name": "암진단비(유사암제외)(면책기간미적용)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 56950.0,
                "totalProfit": 952260.682456
            }
        ],
        "availableItems": [
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
                        "totalProfit": 70978.18
                    },
                    "300000": {
                        "totalPrice": 3762.0,
                        "totalProfit": 106489.05
                    },
                    "500000": {
                        "totalPrice": 6270.0,
                        "totalProfit": 177510.7
                    },
                    "800000": {
                        "totalPrice": 10032.0,
                        "totalProfit": 284043.25
                    },
                    "1000000": {
                        "totalPrice": 12540.0,
                        "totalProfit": 355064.97
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
                        "totalProfit": 11696.647
                    },
                    "70000": {
                        "totalPrice": 672.0,
                        "totalProfit": 16392.63
                    }
                }
            },
            {
                "id": "633120",
                "name": "질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.004271031366530057,
                "availableQuantities": [
                    20000,
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 36.0,
                        "totalProfit": 914.65656
                    },
                    "30000": {
                        "totalPrice": 54.0,
                        "totalProfit": 1393.4729
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
                        "totalProfit": 13740.633
                    },
                    "200000": {
                        "totalPrice": 1432.0,
                        "totalProfit": 27524.508
                    },
                    "300000": {
                        "totalPrice": 2148.0,
                        "totalProfit": 41308.598
                    },
                    "400000": {
                        "totalPrice": 2864.0,
                        "totalProfit": 55092.477
                    },
                    "500000": {
                        "totalPrice": 3580.0,
                        "totalProfit": 68876.58
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
                        "totalProfit": 17990.701
                    },
                    "1000000": {
                        "totalPrice": 627.0,
                        "totalProfit": 20013.854
                    },
                    "1500000": {
                        "totalPrice": 941.0,
                        "totalProfit": 30071.867
                    },
                    "2000000": {
                        "totalPrice": 1254.0,
                        "totalProfit": 40070.94
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
                        "totalProfit": 9354.238
                    },
                    "2000000": {
                        "totalPrice": 1820.0,
                        "totalProfit": 18751.727
                    },
                    "3000000": {
                        "totalPrice": 2730.0,
                        "totalProfit": 28149.219
                    },
                    "5000000": {
                        "totalPrice": 4550.0,
                        "totalProfit": 46944.17
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
                        "totalProfit": 2710.3284
                    },
                    "2000000": {
                        "totalPrice": 320.0,
                        "totalProfit": 5464.185
                    }
                }
            },
            {
                "id": "632310",
                "name": "갑상선기능저하증진단비",
                "theme": "3대진단",
                "confidence": 0.03526669862231312,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 365.0,
                        "totalProfit": 6767.624
                    },
                    "1000000": {
                        "totalPrice": 730.0,
                        "totalProfit": 13578.761
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
                        "totalProfit": 231.04779
                    },
                    "500000": {
                        "totalPrice": 28.0,
                        "totalProfit": 394.11203
                    },
                    "1000000": {
                        "totalPrice": 56.0,
                        "totalProfit": 831.2055
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
                        "totalProfit": 13741.279
                    },
                    "1000000": {
                        "totalPrice": 553.0,
                        "totalProfit": 22911.043
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
                        "totalProfit": 419.13324
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
                        "totalProfit": 72260.34
                    },
                    "20000": {
                        "totalPrice": 5700.0,
                        "totalProfit": 144564.22
                    },
                    "30000": {
                        "totalPrice": 8550.0,
                        "totalProfit": 216868.08
                    },
                    "40000": {
                        "totalPrice": 11400.0,
                        "totalProfit": 289171.97
                    },
                    "50000": {
                        "totalPrice": 14250.0,
                        "totalProfit": 361475.84
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
                        "totalProfit": 13887.989
                    },
                    "100000": {
                        "totalPrice": 640.0,
                        "totalProfit": 27819.244
                    },
                    "200000": {
                        "totalPrice": 1280.0,
                        "totalProfit": 55681.67
                    },
                    "300000": {
                        "totalPrice": 1920.0,
                        "totalProfit": 83544.2
                    },
                    "500000": {
                        "totalPrice": 3200.0,
                        "totalProfit": 139269.19
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
                        "totalProfit": 763.8608
                    },
                    "200000": {
                        "totalPrice": 124.0,
                        "totalProfit": 1570.9851
                    },
                    "500000": {
                        "totalPrice": 310.0,
                        "totalProfit": 3992.3113
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
                        "totalProfit": 938.62787
                    },
                    "1500000": {
                        "totalPrice": 449.0,
                        "totalProfit": 14625.655
                    },
                    "2500000": {
                        "totalPrice": 748.0,
                        "totalProfit": 24385.344
                    },
                    "4000000": {
                        "totalPrice": 1196.0,
                        "totalProfit": 38995.48
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
                        "totalProfit": 1244.5114
                    },
                    "300000": {
                        "totalPrice": 243.0,
                        "totalProfit": 1888.405
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
                        "totalProfit": 17347.98
                    },
                    "300000": {
                        "totalPrice": 1049.0,
                        "totalProfit": 25984.527
                    },
                    "400000": {
                        "totalPrice": 1399.0,
                        "totalProfit": 34680.137
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
                        "totalProfit": 15733.472
                    },
                    "500000": {
                        "totalPrice": 673.0,
                        "totalProfit": 19706.66
                    },
                    "1000000": {
                        "totalPrice": 1346.0,
                        "totalProfit": 39456.566
                    }
                }
            },
            {
                "id": "633116",
                "name": "질병입원 간병인비용지원(간병인비용 500만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.013403021141711671,
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
                        "totalProfit": 3592.0076
                    },
                    "300000": {
                        "totalPrice": 352.0,
                        "totalProfit": 10921.222
                    },
                    "600000": {
                        "totalPrice": 704.0,
                        "totalProfit": 21885.398
                    },
                    "1000000": {
                        "totalPrice": 1173.0,
                        "totalProfit": 36484.684
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
                        "totalProfit": 8132.31
                    },
                    "100000": {
                        "totalPrice": 1450.0,
                        "totalProfit": 27208.861
                    },
                    "150000": {
                        "totalPrice": 2175.0,
                        "totalProfit": 40834.91
                    },
                    "200000": {
                        "totalPrice": 2900.0,
                        "totalProfit": 54460.96
                    }
                }
            },
            {
                "id": "631227",
                "name": "수술비(1~5종)[질병2종]",
                "theme": "수술",
                "confidence": 0.03278360969457513,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 321.0,
                        "totalProfit": -25697.525
                    },
                    "200000": {
                        "totalPrice": 642.0,
                        "totalProfit": -51351.797
                    },
                    "300000": {
                        "totalPrice": 963.0,
                        "totalProfit": -77006.055
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
                        "totalProfit": 3463.3403
                    },
                    "5000000": {
                        "totalPrice": 265.0,
                        "totalProfit": 5800.932
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
                        "totalProfit": 655.3544
                    },
                    "100000": {
                        "totalPrice": 140.0,
                        "totalProfit": 1354.2314
                    },
                    "200000": {
                        "totalPrice": 280.0,
                        "totalProfit": 2751.9646
                    },
                    "300000": {
                        "totalPrice": 420.0,
                        "totalProfit": 4149.718
                    },
                    "500000": {
                        "totalPrice": 700.0,
                        "totalProfit": 6945.2173
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
                        "totalProfit": 34851.816
                    },
                    "1000000": {
                        "totalPrice": 2700.0,
                        "totalProfit": 69746.87
                    },
                    "2000000": {
                        "totalPrice": 5400.0,
                        "totalProfit": 139536.95
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
                        "totalProfit": 41152.37
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
                        "totalProfit": -1831.6787
                    },
                    "200000": {
                        "totalPrice": 660.0,
                        "totalProfit": -3620.1704
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
                        "totalProfit": -2815.0256
                    },
                    "300000": {
                        "totalPrice": 499.0,
                        "totalProfit": -4231.446
                    }
                }
            },
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
                        "totalProfit": 4145.062
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
                        "totalProfit": -1299.6832
                    },
                    "300000": {
                        "totalPrice": 300.0,
                        "totalProfit": -1927.8754
                    },
                    "400000": {
                        "totalPrice": 400.0,
                        "totalProfit": -2555.8215
                    },
                    "500000": {
                        "totalPrice": 500.0,
                        "totalProfit": -3184.0303
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
                        "totalProfit": 10903.482
                    },
                    "400000": {
                        "totalPrice": 728.0,
                        "totalProfit": 14552.488
                    },
                    "500000": {
                        "totalPrice": 910.0,
                        "totalProfit": 18201.469
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
                        "totalProfit": 175.1238
                    },
                    "300000": {
                        "totalPrice": 18.0,
                        "totalProfit": 284.33237
                    },
                    "400000": {
                        "totalPrice": 24.0,
                        "totalProfit": 393.5116
                    },
                    "500000": {
                        "totalPrice": 30.0,
                        "totalProfit": 502.68033
                    }
                }
            },
            {
                "id": "610605",
                "name": "일반상해고도후유장해",
                "theme": "사망후유",
                "confidence": 0.10828327181536145,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 6.0,
                        "totalProfit": 142.57199
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
                        "totalProfit": 5828.653
                    },
                    "20000": {
                        "totalPrice": 544.0,
                        "totalProfit": 11700.786
                    },
                    "30000": {
                        "totalPrice": 816.0,
                        "totalProfit": 17572.922
                    },
                    "50000": {
                        "totalPrice": 1360.0,
                        "totalProfit": 29317.156
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
                        "totalProfit": 148.57274
                    },
                    "2000000": {
                        "totalPrice": 18.0,
                        "totalProfit": 340.4189
                    },
                    "5000000": {
                        "totalPrice": 46.0,
                        "totalProfit": 974.1268
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
                        "totalProfit": 26582.988
                    },
                    "500000": {
                        "totalPrice": 1950.0,
                        "totalProfit": 44333.938
                    },
                    "1000000": {
                        "totalPrice": 3900.0,
                        "totalProfit": 88711.414
                    },
                    "2000000": {
                        "totalPrice": 7800.0,
                        "totalProfit": 177466.08
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
                        "totalProfit": 408.16934
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
                        "totalProfit": 23.005245
                    },
                    "30000": {
                        "totalPrice": 6.0,
                        "totalProfit": 56.26246
                    }
                }
            },
            {
                "id": "631229",
                "name": "수술비(1~5종)[질병4종]",
                "theme": "수술",
                "confidence": 0.03278360969457513,
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
                        "totalProfit": -1087.5614
                    },
                    "2000000": {
                        "totalPrice": 326.0,
                        "totalProfit": -2131.658
                    },
                    "3000000": {
                        "totalPrice": 489.0,
                        "totalProfit": -3175.751
                    },
                    "5000000": {
                        "totalPrice": 815.0,
                        "totalProfit": -5264.1733
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
                        "totalProfit": -1295.3998
                    }
                }
            },
            {
                "id": "640047",
                "name": "인공관절수술비",
                "theme": "수술",
                "confidence": 0.12560039408519263,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 110.0,
                        "totalProfit": 2473.0962
                    },
                    "2000000": {
                        "totalPrice": 220.0,
                        "totalProfit": 4989.4727
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
                        "totalProfit": 4321.48
                    },
                    "200000": {
                        "totalPrice": 394.0,
                        "totalProfit": 8686.386
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
                        "totalProfit": 2990.0618
                    },
                    "400000": {
                        "totalPrice": 148.0,
                        "totalProfit": 4001.4731
                    },
                    "500000": {
                        "totalPrice": 185.0,
                        "totalProfit": 5012.3965
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
                        "totalProfit": 34904.234
                    },
                    "500000": {
                        "totalPrice": 4640.0,
                        "totalProfit": 58202.246
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
                        "totalProfit": 8914.987
                    },
                    "1000000": {
                        "totalPrice": 1310.0,
                        "totalProfit": 17873.158
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
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 1911.0,
                        "totalProfit": 47641.49
                    },
                    "5000000": {
                        "totalPrice": 3185.0,
                        "totalProfit": 79431.64
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
                        "totalProfit": 17249.277
                    },
                    "300000": {
                        "totalPrice": 1260.0,
                        "totalProfit": 25895.69
                    },
                    "500000": {
                        "totalPrice": 2100.0,
                        "totalProfit": 43188.22
                    },
                    "1000000": {
                        "totalPrice": 4200.0,
                        "totalProfit": 86419.734
                    },
                    "1500000": {
                        "totalPrice": 6300.0,
                        "totalProfit": 129651.555
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
                        "totalProfit": 18864.297
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
                        "totalProfit": -1837.5386
                    },
                    "300000": {
                        "totalPrice": 6.0,
                        "totalProfit": -5426.639
                    },
                    "500000": {
                        "totalPrice": 10.0,
                        "totalProfit": -9015.754
                    },
                    "1000000": {
                        "totalPrice": 19.0,
                        "totalProfit": -18047.326
                    }
                }
            },
            {
                "id": "633314",
                "name": "질병입원 간병인비용지원(간병인비용 300만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00031014693526274287,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 477.0,
                        "totalProfit": 13886.261
                    },
                    "300000": {
                        "totalPrice": 715.0,
                        "totalProfit": 20821.6
                    },
                    "500000": {
                        "totalPrice": 1192.0,
                        "totalProfit": 34751.027
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
                        "totalProfit": 624.721
                    },
                    "200000": {
                        "totalPrice": 210.0,
                        "totalProfit": 1292.4054
                    },
                    "300000": {
                        "totalPrice": 315.0,
                        "totalProfit": 1960.3561
                    }
                }
            },
            {
                "id": "633312",
                "name": "질병입원 간병인비용지원(간병인비용 700만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.00016186974309938571,
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
                        "totalProfit": 2693.3745
                    },
                    "600000": {
                        "totalPrice": 516.0,
                        "totalProfit": 16376.328
                    },
                    "1000000": {
                        "totalPrice": 860.0,
                        "totalProfit": 27322.473
                    },
                    "1500000": {
                        "totalPrice": 1290.0,
                        "totalProfit": 41005.63
                    },
                    "3500000": {
                        "totalPrice": 3010.0,
                        "totalProfit": 95737.1
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
                        "totalProfit": 8041.9663
                    },
                    "1000000": {
                        "totalPrice": 700.0,
                        "totalProfit": 16127.229
                    },
                    "2000000": {
                        "totalPrice": 1400.0,
                        "totalProfit": 32297.736
                    },
                    "3000000": {
                        "totalPrice": 2100.0,
                        "totalProfit": 48468.266
                    },
                    "5000000": {
                        "totalPrice": 3500.0,
                        "totalProfit": 80809.23
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
                        "totalProfit": 20496.213
                    },
                    "2500000": {
                        "totalPrice": 1058.0,
                        "totalProfit": 34169.727
                    },
                    "3000000": {
                        "totalPrice": 1269.0,
                        "totalProfit": 40976.92
                    }
                }
            },
            {
                "id": "640154",
                "name": "응급실내원비(응급)",
                "theme": "기타",
                "confidence": 0.10930925798380633,
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
                        "totalProfit": 20566.578
                    },
                    "50000": {
                        "totalPrice": 1185.0,
                        "totalProfit": 34306.47
                    },
                    "70000": {
                        "totalPrice": 1659.0,
                        "totalProfit": 48046.598
                    },
                    "100000": {
                        "totalPrice": 2370.0,
                        "totalProfit": 68656.445
                    },
                    "120000": {
                        "totalPrice": 2844.0,
                        "totalProfit": 82396.305
                    }
                }
            },
            {
                "id": "630670",
                "name": "추간판장애(디스크질환)수술비",
                "theme": "수술",
                "confidence": 0.059076625918568444,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 976.0,
                        "totalProfit": 29845.291
                    },
                    "2000000": {
                        "totalPrice": 1952.0,
                        "totalProfit": 59734.12
                    }
                }
            },
            {
                "id": "630955",
                "name": "상급종합병원질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.015242948929353144,
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
                        "totalProfit": 16934.688
                    },
                    "30000": {
                        "totalPrice": 1281.0,
                        "totalProfit": 25423.777
                    },
                    "50000": {
                        "totalPrice": 2135.0,
                        "totalProfit": 42401.7
                    },
                    "70000": {
                        "totalPrice": 2989.0,
                        "totalProfit": 59379.86
                    },
                    "100000": {
                        "totalPrice": 4270.0,
                        "totalProfit": 84846.93
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
                        "totalProfit": 5504.1855
                    },
                    "300000": {
                        "totalPrice": 536.0,
                        "totalProfit": 16539.91
                    },
                    "400000": {
                        "totalPrice": 715.0,
                        "totalProfit": 22087.082
                    },
                    "500000": {
                        "totalPrice": 894.0,
                        "totalProfit": 27634.176
                    },
                    "1000000": {
                        "totalPrice": 1787.0,
                        "totalProfit": 55252.95
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
                        "totalProfit": 3823.574
                    },
                    "5000000": {
                        "totalPrice": 310.0,
                        "totalProfit": 6401.649
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
                        "totalProfit": 398.80984
                    },
                    "20000": {
                        "totalPrice": 10.0,
                        "totalProfit": 840.79266
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
                        "totalProfit": 232.80177
                    },
                    "1000000": {
                        "totalPrice": 67.0,
                        "totalProfit": 2538.9426
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
                        "totalProfit": 1189.78
                    },
                    "50000": {
                        "totalPrice": 115.0,
                        "totalProfit": 3039.6294
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
                        "totalProfit": 3898.048
                    },
                    "3000000": {
                        "totalPrice": 210.0,
                        "totalProfit": 5868.585
                    },
                    "5000000": {
                        "totalPrice": 350.0,
                        "totalProfit": 9810.194
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
                        "totalProfit": 267.66992
                    },
                    "200000": {
                        "totalPrice": 40.0,
                        "totalProfit": 578.53595
                    },
                    "300000": {
                        "totalPrice": 60.0,
                        "totalProfit": 889.4089
                    }
                }
            },
            {
                "id": "633341",
                "name": "2-3인실 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.04446925197168517,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1105.0,
                        "totalProfit": 25228.174
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
                        "totalProfit": 56009.145
                    },
                    "20000": {
                        "totalPrice": 3100.0,
                        "totalProfit": 112061.445
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
                        "totalProfit": 6540.001
                    },
                    "1000000": {
                        "totalPrice": 830.0,
                        "totalProfit": 13123.512
                    },
                    "2000000": {
                        "totalPrice": 1660.0,
                        "totalProfit": 26290.521
                    },
                    "3000000": {
                        "totalPrice": 2490.0,
                        "totalProfit": 39457.547
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
                        "totalProfit": 18549.98
                    },
                    "20000": {
                        "totalPrice": 1496.0,
                        "totalProfit": 37143.17
                    },
                    "30000": {
                        "totalPrice": 2244.0,
                        "totalProfit": 55736.36
                    },
                    "40000": {
                        "totalPrice": 2992.0,
                        "totalProfit": 74329.734
                    },
                    "50000": {
                        "totalPrice": 3740.0,
                        "totalProfit": 92922.94
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
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 1704.0,
                        "totalProfit": 31569.33
                    },
                    "3000000": {
                        "totalPrice": 2556.0,
                        "totalProfit": 47375.68
                    },
                    "5000000": {
                        "totalPrice": 4260.0,
                        "totalProfit": 78988.53
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
                        "totalProfit": 6365.4053
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
                        "totalProfit": 335.8606
                    },
                    "1000000": {
                        "totalPrice": 110.0,
                        "totalProfit": 715.20013
                    },
                    "2000000": {
                        "totalPrice": 220.0,
                        "totalProfit": 1473.6376
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
                    7000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 245.0,
                        "totalProfit": 4803.1914
                    },
                    "7000000": {
                        "totalPrice": 343.0,
                        "totalProfit": 6741.7227
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
                    6000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 1628.0,
                        "totalProfit": 25357.494
                    },
                    "3000000": {
                        "totalPrice": 2442.0,
                        "totalProfit": 38058.043
                    },
                    "5000000": {
                        "totalPrice": 4070.0,
                        "totalProfit": 63458.832
                    },
                    "6000000": {
                        "totalPrice": 4884.0,
                        "totalProfit": 76159.375
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
                        "totalProfit": 170.73586
                    },
                    "200000": {
                        "totalPrice": 14.0,
                        "totalProfit": 384.6847
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
                        "totalProfit": 15308.465
                    },
                    "200000": {
                        "totalPrice": 1020.0,
                        "totalProfit": 30660.143
                    },
                    "300000": {
                        "totalPrice": 1530.0,
                        "totalProfit": 46011.82
                    }
                }
            },
            {
                "id": "632986",
                "name": "간호·간병통합서비스 사용 질병입원일당(1일이상180일한도)",
                "theme": "입원일당",
                "confidence": 0.09467839918731905,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1775.0,
                        "totalProfit": 44566.97
                    },
                    "70000": {
                        "totalPrice": 2485.0,
                        "totalProfit": 62411.23
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
                        "totalProfit": 4179.6562
                    },
                    "200000": {
                        "totalPrice": 336.0,
                        "totalProfit": 8402.534
                    },
                    "300000": {
                        "totalPrice": 504.0,
                        "totalProfit": 12625.42
                    },
                    "500000": {
                        "totalPrice": 840.0,
                        "totalProfit": 21071.15
                    },
                    "1000000": {
                        "totalPrice": 1680.0,
                        "totalProfit": 42185.535
                    }
                }
            },
            {
                "id": "631346",
                "name": "갑상선기능항진증치료비",
                "theme": "3대진단",
                "confidence": 0.04004151698735015,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 120.0,
                        "totalProfit": 2344.3176
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
                        "totalProfit": 2333.8972
                    },
                    "2000000": {
                        "totalPrice": 780.0,
                        "totalProfit": 4711.0356
                    },
                    "3000000": {
                        "totalPrice": 1170.0,
                        "totalProfit": 7088.414
                    },
                    "5000000": {
                        "totalPrice": 1950.0,
                        "totalProfit": 11842.939
                    }
                }
            },
            {
                "id": "631228",
                "name": "수술비(1~5종)[질병3종]",
                "theme": "수술",
                "confidence": 0.03278360969457513,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 665.0,
                        "totalProfit": -7723.2896
                    },
                    "1000000": {
                        "totalPrice": 1330.0,
                        "totalProfit": -15403.301
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
                        "totalProfit": 5.556825
                    },
                    "150000": {
                        "totalPrice": 6.0,
                        "totalProfit": 103.22815
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
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 47.0,
                        "totalProfit": -534.3681
                    },
                    "2000000": {
                        "totalPrice": 236.0,
                        "totalProfit": -2440.81
                    },
                    "3000000": {
                        "totalPrice": 354.0,
                        "totalProfit": -3639.3542
                    },
                    "5000000": {
                        "totalPrice": 590.0,
                        "totalProfit": -6036.9463
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
                        "totalProfit": 1733.6055
                    },
                    "300000": {
                        "totalPrice": 125.0,
                        "totalProfit": 2563.9778
                    },
                    "500000": {
                        "totalPrice": 209.0,
                        "totalProfit": 4340.6157
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
                        "totalProfit": -6335.9575
                    },
                    "200000": {
                        "totalPrice": 140.0,
                        "totalProfit": -12628.486
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
                        "totalProfit": -17.408247
                    },
                    "70000": {
                        "totalPrice": 3.0,
                        "totalProfit": 5.076011
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
                        "totalProfit": 4613.317
                    },
                    "300000": {
                        "totalPrice": 324.0,
                        "totalProfit": 6941.756
                    },
                    "400000": {
                        "totalPrice": 432.0,
                        "totalProfit": 9270.018
                    },
                    "500000": {
                        "totalPrice": 540.0,
                        "totalProfit": 11598.464
                    },
                    "1000000": {
                        "totalPrice": 1080.0,
                        "totalProfit": 23240.14
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
                        "totalProfit": 937.17365
                    },
                    "1000000": {
                        "totalPrice": 270.0,
                        "totalProfit": 1917.621
                    }
                }
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 48.0,
                        "totalProfit": 1471.7737
                    }
                }
            },
            {
                "id": "632984",
                "name": "간병인사용 질병입원일당(1일이상180일한도)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.09625339613864223,
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
                        "totalProfit": 26770.014
                    },
                    "100000": {
                        "totalPrice": 3030.0,
                        "totalProfit": 89334.28
                    },
                    "150000": {
                        "totalPrice": 4545.0,
                        "totalProfit": 134023.33
                    },
                    "200000": {
                        "totalPrice": 6060.0,
                        "totalProfit": 178712.08
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
                        "totalProfit": 8102.284
                    },
                    "1000000": {
                        "totalPrice": 221.0,
                        "totalProfit": 9000.645
                    },
                    "1500000": {
                        "totalPrice": 332.0,
                        "totalProfit": 13551.96
                    },
                    "2000000": {
                        "totalPrice": 442.0,
                        "totalProfit": 18044.488
                    }
                }
            },
            {
                "id": "632985",
                "name": "간병인사용 질병입원일당(1일이상180일한도)(요양병원)",
                "theme": "입원일당",
                "confidence": 0.09625339613864223,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 774.0,
                        "totalProfit": 19405.92
                    },
                    "50000": {
                        "totalPrice": 1935.0,
                        "totalProfit": 48579.562
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
                        "totalProfit": 6060.215
                    },
                    "300000": {
                        "totalPrice": 300.0,
                        "totalProfit": 9111.916
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
                        "totalProfit": 13272.382
                    },
                    "200000": {
                        "totalPrice": 1023.0,
                        "totalProfit": 26646.387
                    },
                    "1000000": {
                        "totalPrice": 5114.0,
                        "totalProfit": 133345.88
                    },
                    "3000000": {
                        "totalPrice": 15342.0,
                        "totalProfit": 400124.72
                    },
                    "5000000": {
                        "totalPrice": 25570.0,
                        "totalProfit": 666903.56
                    }
                }
            },
            {
                "id": "633121",
                "name": "간병인사용 질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.05232158359196471,
                "availableQuantities": [
                    50000,
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 15.0,
                        "totalProfit": 388.42004
                    },
                    "150000": {
                        "totalPrice": 45.0,
                        "totalProfit": 1251.825
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
                        "totalProfit": 1926.0358
                    },
                    "30000": {
                        "totalPrice": 147.0,
                        "totalProfit": 2910.7234
                    },
                    "50000": {
                        "totalPrice": 245.0,
                        "totalProfit": 4880.0947
                    },
                    "70000": {
                        "totalPrice": 343.0,
                        "totalProfit": 6849.262
                    },
                    "100000": {
                        "totalPrice": 490.0,
                        "totalProfit": 9803.436
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
                        "totalProfit": 628.26764
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
                        "totalProfit": 2896.5579
                    },
                    "200000": {
                        "totalPrice": 348.0,
                        "totalProfit": 5836.353
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
                        "totalProfit": 10277.48
                    },
                    "600000": {
                        "totalPrice": 797.0,
                        "totalProfit": 30859.76
                    },
                    "1000000": {
                        "totalPrice": 1329.0,
                        "totalProfit": 51500.67
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
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 699.0,
                        "totalProfit": 17731.805
                    },
                    "5000000": {
                        "totalPrice": 1165.0,
                        "totalProfit": 29582.021
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
                        "totalProfit": 3627.8281
                    },
                    "200000": {
                        "totalPrice": 3368.0,
                        "totalProfit": 7298.901
                    },
                    "300000": {
                        "totalPrice": 5052.0,
                        "totalProfit": 10970.282
                    },
                    "500000": {
                        "totalPrice": 8420.0,
                        "totalProfit": 18312.602
                    },
                    "1000000": {
                        "totalPrice": 16840.0,
                        "totalProfit": 36668.45
                    }
                }
            },
            {
                "id": "631226",
                "name": "수술비(1~5종)[질병1종]",
                "theme": "수술",
                "confidence": 0.03278360969457513,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 607.0,
                        "totalProfit": -3278.588
                    },
                    "200000": {
                        "totalPrice": 1214.0,
                        "totalProfit": -6513.923
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
                        "totalProfit": 3127.0461
                    },
                    "200000": {
                        "totalPrice": 220.0,
                        "totalProfit": 6297.3535
                    },
                    "300000": {
                        "totalPrice": 330.0,
                        "totalProfit": 9467.943
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
                        "totalProfit": 14259.981
                    },
                    "300000": {
                        "totalPrice": 960.0,
                        "totalProfit": 21411.453
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
                        "totalProfit": 3941.3303
                    },
                    "3000000": {
                        "totalPrice": 276.0,
                        "totalProfit": 5933.6367
                    },
                    "5000000": {
                        "totalPrice": 460.0,
                        "totalProfit": 9918.548
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
                        "totalProfit": 23482.686
                    },
                    "50000": {
                        "totalPrice": 2455.0,
                        "totalProfit": 58772.055
                    },
                    "100000": {
                        "totalPrice": 4910.0,
                        "totalProfit": 117587.64
                    },
                    "200000": {
                        "totalPrice": 9820.0,
                        "totalProfit": 235218.6
                    },
                    "300000": {
                        "totalPrice": 14730.0,
                        "totalProfit": 352849.53
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
                        "totalProfit": 28450.662
                    },
                    "20000": {
                        "totalPrice": 2466.0,
                        "totalProfit": 56944.6
                    },
                    "30000": {
                        "totalPrice": 3699.0,
                        "totalProfit": 85438.53
                    },
                    "50000": {
                        "totalPrice": 6165.0,
                        "totalProfit": 142426.38
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
                        "totalProfit": 6686.4897
                    },
                    "200000": {
                        "totalPrice": 940.0,
                        "totalProfit": 13416.19
                    },
                    "300000": {
                        "totalPrice": 1410.0,
                        "totalProfit": 20145.91
                    },
                    "400000": {
                        "totalPrice": 1880.0,
                        "totalProfit": 26875.82
                    },
                    "500000": {
                        "totalPrice": 2350.0,
                        "totalProfit": 33605.53
                    }
                }
            },
            {
                "id": "633339",
                "name": "2-3인실 상급종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.04467870730518221,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 355.0,
                        "totalProfit": 7264.6494
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
                        "totalProfit": 5163.1064
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
                        "totalProfit": 17914.604
                    },
                    "500000": {
                        "totalPrice": 1315.0,
                        "totalProfit": 29886.666
                    },
                    "1000000": {
                        "totalPrice": 2630.0,
                        "totalProfit": 59816.625
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
                        "totalProfit": 4953.838
                    },
                    "1000000": {
                        "totalPrice": 228.0,
                        "totalProfit": 8265.386
                    },
                    "2000000": {
                        "totalPrice": 456.0,
                        "totalProfit": 16573.955
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
                        "totalProfit": 28671.191
                    },
                    "600000": {
                        "totalPrice": 1566.0,
                        "totalProfit": 43028.53
                    },
                    "1000000": {
                        "totalPrice": 2610.0,
                        "totalProfit": 71742.75
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
                        "totalProfit": 2143.0635
                    },
                    "1000000": {
                        "totalPrice": 415.0,
                        "totalProfit": 7145.523
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
                        "totalProfit": 1057.4432
                    },
                    "200000": {
                        "totalPrice": 252.0,
                        "totalProfit": 2158.2625
                    },
                    "300000": {
                        "totalPrice": 378.0,
                        "totalProfit": 3258.871
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
                        "totalProfit": 4795.6
                    },
                    "2000000": {
                        "totalPrice": 700.0,
                        "totalProfit": 9634.673
                    }
                }
            },
            {
                "id": "631138",
                "name": "유사암수술비",
                "theme": "3대진단",
                "confidence": 0.08360953412091733,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 116.0,
                        "totalProfit": -1389.484
                    },
                    "2000000": {
                        "totalPrice": 232.0,
                        "totalProfit": -2735.7036
                    },
                    "3000000": {
                        "totalPrice": 348.0,
                        "totalProfit": -4081.918
                    },
                    "5000000": {
                        "totalPrice": 580.0,
                        "totalProfit": -6774.3677
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
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 972.0,
                        "totalProfit": 18806.086
                    },
                    "3000000": {
                        "totalPrice": 1458.0,
                        "totalProfit": 28231.066
                    },
                    "5000000": {
                        "totalPrice": 2430.0,
                        "totalProfit": 47080.676
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
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 1341.0,
                        "totalProfit": 28288.541
                    },
                    "5000000": {
                        "totalPrice": 2235.0,
                        "totalProfit": 47176.273
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
                        "totalProfit": 2705.3186
                    },
                    "1500000": {
                        "totalPrice": 98.0,
                        "totalProfit": 4109.1753
                    },
                    "2500000": {
                        "totalPrice": 163.0,
                        "totalProfit": 6857.8574
                    },
                    "4000000": {
                        "totalPrice": 260.0,
                        "totalProfit": 10951.394
                    },
                    "5000000": {
                        "totalPrice": 325.0,
                        "totalProfit": 13699.932
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
                        "totalProfit": 58890.324
                    },
                    "200000": {
                        "totalPrice": 4880.0,
                        "totalProfit": 117824.07
                    },
                    "300000": {
                        "totalPrice": 7320.0,
                        "totalProfit": 176757.86
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
                        "totalProfit": 4475.3
                    },
                    "1500000": {
                        "totalPrice": 165.0,
                        "totalProfit": 6734.7397
                    },
                    "2500000": {
                        "totalPrice": 275.0,
                        "totalProfit": 11253.234
                    },
                    "3000000": {
                        "totalPrice": 330.0,
                        "totalProfit": 13512.476
                    }
                }
            }
        ]
    },
    "6": {
        "id": "6",
        "channel": "TM",
        "age": 19,
        "gndr": "여",
        "unt_pd_nm": "내Mom대로 5.10.5",
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
                "id": "632343",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)",
                "quantity": 40000000,
                "theme": "3대진단",
                "totalPrice": 1480.0,
                "totalProfit": -1806.459082
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
                "id": "632279",
                "name": "표적항암약물허가치료비Ⅱ",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 500.0,
                "totalProfit": 77947.803262
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
                "id": "630228",
                "name": "뇌혈관질환진단",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 7520.0,
                "totalProfit": 162686.910031
            },
            {
                "id": "632504",
                "name": "뇌혈관질환수술비(25%체증형)",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 1503.0,
                "totalProfit": 49778.902994
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
                "id": "631442",
                "name": "계속받는 항암방사선약물치료비(급여)(연간1회한)",
                "quantity": 100000,
                "theme": "3대진단",
                "totalPrice": 168.0,
                "totalProfit": 7924.554464
            },
            {
                "id": "632505",
                "name": "허혈성심장질환수술비(25%체증형)",
                "quantity": 10000000,
                "theme": "수술",
                "totalPrice": 1155.0,
                "totalProfit": 59108.127108
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
                "id": "610605",
                "name": "일반상해고도후유장해",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 3.0,
                "totalProfit": 125.817062
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "quantity": 1000000,
                "theme": "사망후유",
                "totalPrice": 13.0,
                "totalProfit": 623.192925
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "quantity": 20000000,
                "theme": "3대진단",
                "totalPrice": 2260.0,
                "totalProfit": 70620.295952
            },
            {
                "id": "632340",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)",
                "quantity": 40000000,
                "theme": "3대진단",
                "totalPrice": 4824.0,
                "totalProfit": -26297.251397
            }
        ],
        "availableItems": [
            {
                "id": "631858",
                "name": "질병수술비(특정5대질병 제외)",
                "theme": "수술",
                "confidence": 0.10482022876634901,
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
                        "totalProfit": 38215.027675
                    },
                    "200000": {
                        "totalPrice": 2168.0,
                        "totalProfit": 76475.750963
                    },
                    "300000": {
                        "totalPrice": 3252.0,
                        "totalProfit": 114736.501407
                    },
                    "500000": {
                        "totalPrice": 5420.0,
                        "totalProfit": 191257.975139
                    },
                    "600000": {
                        "totalPrice": 6504.0,
                        "totalProfit": 229518.714441
                    }
                }
            },
            {
                "id": "611263",
                "name": "간호·간병통합서비스 사용 일반상해입원일당(1일이상180일한도)",
                "theme": "입원일당",
                "confidence": 0.03056503270390928,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 375.0,
                        "totalProfit": -7555.919897
                    },
                    "70000": {
                        "totalPrice": 525.0,
                        "totalProfit": -10559.996682
                    }
                }
            },
            {
                "id": "633319",
                "name": "질병입원 간병인비용지원(간병인비용 2,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0001257358798120515,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 295.0,
                        "totalProfit": 17174.021699
                    }
                }
            },
            {
                "id": "633120",
                "name": "질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.006171784280868857,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 9.0,
                        "totalProfit": 405.153539
                    },
                    "20000": {
                        "totalPrice": 18.0,
                        "totalProfit": 856.001169
                    }
                }
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.03149390791343698,
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
                        "totalProfit": 4434.789008
                    },
                    "200000": {
                        "totalPrice": 980.0,
                        "totalProfit": 8915.286785
                    },
                    "300000": {
                        "totalPrice": 1470.0,
                        "totalProfit": 13395.814444
                    },
                    "400000": {
                        "totalPrice": 1960.0,
                        "totalProfit": 17876.312221
                    },
                    "500000": {
                        "totalPrice": 2450.0,
                        "totalProfit": 22356.839881
                    }
                }
            },
            {
                "id": "633331",
                "name": "당뇨병진단비Ⅱ[당화혈색소 9.0%이상]",
                "theme": "기타",
                "confidence": 0.008023469826655258,
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
                        "totalProfit": -7429.32153
                    },
                    "1000000": {
                        "totalPrice": 460.0,
                        "totalProfit": -14812.981385
                    },
                    "2000000": {
                        "totalPrice": 920.0,
                        "totalProfit": -29580.288888
                    },
                    "3000000": {
                        "totalPrice": 1380.0,
                        "totalProfit": -44347.596392
                    },
                    "5000000": {
                        "totalPrice": 2300.0,
                        "totalProfit": -73882.2114
                    }
                }
            },
            {
                "id": "632532",
                "name": "131대질병수술비(편도염)",
                "theme": "수술",
                "confidence": 0.18572082602220094,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 20.0,
                        "totalProfit": 573.220144
                    },
                    "300000": {
                        "totalPrice": 29.0,
                        "totalProfit": 795.939616
                    },
                    "500000": {
                        "totalPrice": 49.0,
                        "totalProfit": 1414.866369
                    }
                }
            },
            {
                "id": "611297",
                "name": "일반상해입원 간병인비용지원(간병인비용 500만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.004574760622937058,
                "availableQuantities": [
                    100000,
                    1000000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 58.0,
                        "totalProfit": 3667.266893
                    },
                    "1000000": {
                        "totalPrice": 575.0,
                        "totalProfit": 36650.300633
                    }
                }
            },
            {
                "id": "611345",
                "name": "2-3인실 상급종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.01177602946290012,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 6.0,
                        "totalProfit": 76.451539
                    },
                    "50000": {
                        "totalPrice": 15.0,
                        "totalProfit": 259.750185
                    }
                }
            },
            {
                "id": "630026",
                "name": "질병입원일당",
                "theme": "입원일당",
                "confidence": 0.007505978436716943,
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
                        "totalProfit": 95211.743416
                    },
                    "20000": {
                        "totalPrice": 4354.0,
                        "totalProfit": 190469.185325
                    },
                    "30000": {
                        "totalPrice": 6531.0,
                        "totalProfit": 285726.652509
                    },
                    "40000": {
                        "totalPrice": 8708.0,
                        "totalProfit": 380984.109433
                    },
                    "50000": {
                        "totalPrice": 10885.0,
                        "totalProfit": 476241.576617
                    }
                }
            },
            {
                "id": "610469",
                "name": "상해중환자실 입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.011226066315445527,
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
                        "totalProfit": 28126.960265
                    },
                    "100000": {
                        "totalPrice": 720.0,
                        "totalProfit": 56299.630535
                    },
                    "200000": {
                        "totalPrice": 1440.0,
                        "totalProfit": 112644.999722
                    },
                    "300000": {
                        "totalPrice": 2160.0,
                        "totalProfit": 168990.354858
                    }
                }
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "theme": "골절/화상",
                "confidence": 0.022928503377189244,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 69.0,
                        "totalProfit": 1340.025021
                    },
                    "200000": {
                        "totalPrice": 138.0,
                        "totalProfit": 2725.746399
                    }
                }
            },
            {
                "id": "632136",
                "name": "131대질병수술비(관절염,생식기질환)",
                "theme": "수술",
                "confidence": 0.0625968990185285,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 202.0,
                        "totalProfit": -1976.242547
                    },
                    "200000": {
                        "totalPrice": 404.0,
                        "totalProfit": -3906.778098
                    },
                    "300000": {
                        "totalPrice": 606.0,
                        "totalProfit": -5837.281861
                    }
                }
            },
            {
                "id": "631442",
                "name": "계속받는 항암방사선약물치료비(급여)(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.09249057743390623,
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
                        "totalProfit": 7818.810936
                    },
                    "1000000": {
                        "totalPrice": 1678.0,
                        "totalProfit": 78427.489101
                    },
                    "2000000": {
                        "totalPrice": 3356.0,
                        "totalProfit": 156900.685626
                    },
                    "5000000": {
                        "totalPrice": 8390.0,
                        "totalProfit": 392320.310144
                    }
                }
            },
            {
                "id": "633313",
                "name": "질병입원 간병인비용지원(간병인비용 200만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0018825940568286787,
                "availableQuantities": [
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 1259.0,
                        "totalProfit": 52749.608412
                    }
                }
            },
            {
                "id": "633315",
                "name": "질병입원 간병인비용지원(간병인비용 500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.000628569598452943,
                "availableQuantities": [
                    400000,
                    1000000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 481.0,
                        "totalProfit": 27576.333908
                    },
                    "1000000": {
                        "totalPrice": 1203.0,
                        "totalProfit": 69052.768135
                    }
                }
            },
            {
                "id": "631130",
                "name": "암수술비(유사암제외)",
                "theme": "3대진단",
                "confidence": 0.03794901460406158,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 389.0,
                        "totalProfit": -12307.957613
                    },
                    "2000000": {
                        "totalPrice": 778.0,
                        "totalProfit": -24570.21592
                    },
                    "3000000": {
                        "totalPrice": 1167.0,
                        "totalProfit": -36832.434587
                    },
                    "5000000": {
                        "totalPrice": 1945.0,
                        "totalProfit": -61356.91156
                    }
                }
            },
            {
                "id": "630331",
                "name": "질병고도후유장해",
                "theme": "사망후유",
                "confidence": 0.009138730806704179,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 55.0,
                        "totalProfit": 1852.949311
                    }
                }
            },
            {
                "id": "633116",
                "name": "질병입원 간병인비용지원(간병인비용 500만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.01287088475157448,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1083.0,
                        "totalProfit": 67705.989046
                    }
                }
            },
            {
                "id": "633715",
                "name": "통합포인트 대상 질병진단비((A7) 다발경화증진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 1.0,
                        "totalProfit": -50.358099
                    }
                }
            },
            {
                "id": "611261",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.03170291533847852,
                "availableQuantities": [
                    100000,
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1580.0,
                        "totalProfit": -27622.321876
                    },
                    "150000": {
                        "totalPrice": 2370.0,
                        "totalProfit": -41410.602569
                    }
                }
            },
            {
                "id": "631227",
                "name": "수술비(1~5종)[질병2종]",
                "theme": "수술",
                "confidence": 0.016391804847287562,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 244.0,
                        "totalProfit": -71909.616597
                    },
                    "200000": {
                        "totalPrice": 488.0,
                        "totalProfit": -143773.531696
                    },
                    "300000": {
                        "totalPrice": 732.0,
                        "totalProfit": -215637.42356
                    }
                }
            },
            {
                "id": "632652",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(뇌졸중)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.2538817168657172,
                "availableQuantities": [
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 42.0,
                        "totalProfit": 337.006063
                    }
                }
            },
            {
                "id": "630019",
                "name": "질병 중환자실입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.0121250254276784,
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
                        "totalProfit": 315.161357
                    },
                    "100000": {
                        "totalPrice": 110.0,
                        "totalProfit": 676.019137
                    },
                    "200000": {
                        "totalPrice": 220.0,
                        "totalProfit": 1397.777057
                    },
                    "300000": {
                        "totalPrice": 330.0,
                        "totalProfit": 2119.534977
                    }
                }
            },
            {
                "id": "633330",
                "name": "당뇨병진단비Ⅱ[당화혈색소 7.0%이상]",
                "theme": "기타",
                "confidence": 0.008023469826655258,
                "availableQuantities": [
                    500000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 675.0,
                        "totalProfit": 21231.830672
                    },
                    "1000000": {
                        "totalPrice": 1350.0,
                        "totalProfit": 42509.344433
                    },
                    "2000000": {
                        "totalPrice": 2700.0,
                        "totalProfit": 85064.382326
                    }
                }
            },
            {
                "id": "633716",
                "name": "통합포인트 대상 질병진단비((A8) 뇌전증진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 20.0,
                        "totalProfit": 634.576163
                    }
                }
            },
            {
                "id": "611340",
                "name": "일반상해입원 간병인비용지원(간병인비용 500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00016625163505502857,
                "availableQuantities": [
                    400000,
                    1000000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 238.0,
                        "totalProfit": 13669.375053
                    },
                    "1000000": {
                        "totalPrice": 595.0,
                        "totalProfit": 34241.972375
                    }
                }
            },
            {
                "id": "633014",
                "name": "상급병실(1인실) 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.17514543970382374,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 270.0,
                        "totalProfit": -19257.950918
                    },
                    "200000": {
                        "totalPrice": 540.0,
                        "totalProfit": -38470.177103
                    }
                }
            },
            {
                "id": "632140",
                "name": "131대질병수술비(백내장)",
                "theme": "수술",
                "confidence": 0.0625968990185285,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 73.0,
                        "totalProfit": -24912.660642
                    },
                    "200000": {
                        "totalPrice": 147.0,
                        "totalProfit": -49692.864171
                    },
                    "300000": {
                        "totalPrice": 220.0,
                        "totalProfit": -74559.814253
                    }
                }
            },
            {
                "id": "633712",
                "name": "통합포인트 대상 질병진단비((A4) 특정전이암진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 5.0,
                        "totalProfit": -72.591654
                    }
                }
            },
            {
                "id": "611343",
                "name": "일반상해입원 간병인비용지원(간병인비용 1,500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 2.419215731357143e-05,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 116.0,
                        "totalProfit": 5619.305746
                    }
                }
            },
            {
                "id": "631397",
                "name": "상급병실(1인실) 상급종합병원 질병입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.07331930841034896,
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
                        "totalProfit": -7198.912076
                    },
                    "300000": {
                        "totalPrice": 180.0,
                        "totalProfit": -10775.498722
                    },
                    "400000": {
                        "totalPrice": 240.0,
                        "totalProfit": -14352.085369
                    },
                    "500000": {
                        "totalPrice": 300.0,
                        "totalProfit": -17928.672015
                    }
                }
            },
            {
                "id": "633719",
                "name": "통합포인트 대상 질병진단비((B1) 림프절전이암진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 11.0,
                        "totalProfit": -1176.787469
                    }
                }
            },
            {
                "id": "633709",
                "name": "통합포인트 대상 질병진단비((A1) 특정패혈증진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 8.0,
                        "totalProfit": 352.487112
                    }
                }
            },
            {
                "id": "631804",
                "name": "수술비(1~7종, 연간3회한)[질병3종]",
                "theme": "수술",
                "confidence": 0.12309656044582255,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 288.0,
                        "totalProfit": 5156.373803
                    },
                    "400000": {
                        "totalPrice": 384.0,
                        "totalProfit": 6890.401992
                    },
                    "500000": {
                        "totalPrice": 480.0,
                        "totalProfit": 8624.444191
                    }
                }
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.03517158806317653,
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
                        "totalProfit": 216.323293
                    },
                    "300000": {
                        "totalPrice": 18.0,
                        "totalProfit": 347.361991
                    },
                    "400000": {
                        "totalPrice": 24.0,
                        "totalProfit": 478.385237
                    },
                    "500000": {
                        "totalPrice": 30.0,
                        "totalProfit": 609.423935
                    }
                }
            },
            {
                "id": "633725",
                "name": "통합포인트 대상 질병진단비((B7) 간경변증진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 3.0,
                        "totalProfit": 201.602859
                    }
                }
            },
            {
                "id": "633714",
                "name": "통합포인트 대상 질병진단비((A6) 경계성종양진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 2.0,
                        "totalProfit": -58.740767
                    }
                }
            },
            {
                "id": "610835",
                "name": "수술비(1~5종)[상해4종]",
                "theme": "수술",
                "confidence": 0.0033894276125087425,
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
                        "totalProfit": 35.279857
                    },
                    "2000000": {
                        "totalPrice": 5.0,
                        "totalProfit": 29.93161
                    },
                    "3000000": {
                        "totalPrice": 8.0,
                        "totalProfit": 110.922678
                    },
                    "5000000": {
                        "totalPrice": 14.0,
                        "totalProfit": 272.902061
                    }
                }
            },
            {
                "id": "632520",
                "name": "131대질병수술비(다빈도62대질병)",
                "theme": "수술",
                "confidence": 0.18572082602220094,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 672.0,
                        "totalProfit": 15857.804122
                    },
                    "300000": {
                        "totalPrice": 1008.0,
                        "totalProfit": 23809.592543
                    },
                    "500000": {
                        "totalPrice": 1680.0,
                        "totalProfit": 39713.119434
                    }
                }
            },
            {
                "id": "631381",
                "name": "중대한재생불량성빈혈진단비",
                "theme": "기타",
                "confidence": 0.01755683514594498,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 9.0,
                        "totalProfit": -32.789415
                    }
                }
            },
            {
                "id": "611301",
                "name": "일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.0010089653533296,
                "availableQuantities": [
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 2.0,
                        "totalProfit": 38.099112
                    }
                }
            },
            {
                "id": "631229",
                "name": "수술비(1~5종)[질병4종]",
                "theme": "수술",
                "confidence": 0.016391804847287562,
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
                        "totalProfit": -5552.243687
                    },
                    "2000000": {
                        "totalPrice": 140.0,
                        "totalProfit": -11058.773919
                    },
                    "3000000": {
                        "totalPrice": 210.0,
                        "totalProfit": -16565.278822
                    },
                    "5000000": {
                        "totalPrice": 350.0,
                        "totalProfit": -27578.328973
                    }
                }
            },
            {
                "id": "631443",
                "name": "암직접치료통원일당(상급종합병원)",
                "theme": "입원일당",
                "confidence": 0.04739216021029251,
                "availableQuantities": [
                    50000,
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1300.0,
                        "totalProfit": 46249.362718
                    },
                    "100000": {
                        "totalPrice": 2600.0,
                        "totalProfit": 92544.420772
                    }
                }
            },
            {
                "id": "611336",
                "name": "일반상해입원 간병인비용지원(간병인비용 300만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.00028743204765898576,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 440.0,
                        "totalProfit": 28030.178277
                    }
                }
            },
            {
                "id": "633720",
                "name": "통합포인트 대상 질병진단비((B2) 통합포인트 대상 순환계질환(2종)진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 79.0,
                        "totalProfit": 3289.690208
                    }
                }
            },
            {
                "id": "640047",
                "name": "인공관절수술비",
                "theme": "수술",
                "confidence": 0.10405798255505175,
                "availableQuantities": [
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 95.0,
                        "totalProfit": 2734.098799
                    },
                    "2000000": {
                        "totalPrice": 190.0,
                        "totalProfit": 5513.895666
                    }
                }
            },
            {
                "id": "610832",
                "name": "수술비(1~5종)[상해1종]",
                "theme": "수술",
                "confidence": 0.0033894276125087425,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 77.0,
                        "totalProfit": 1646.211513
                    },
                    "200000": {
                        "totalPrice": 154.0,
                        "totalProfit": 3338.124814
                    }
                }
            },
            {
                "id": "611014",
                "name": "수술비(1~7종, 연간3회한)[상해3종]",
                "theme": "수술",
                "confidence": 0.024461611973843285,
                "availableQuantities": [
                    300000,
                    400000,
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 66.0,
                        "totalProfit": 2457.146388
                    },
                    "400000": {
                        "totalPrice": 88.0,
                        "totalProfit": 3291.427976
                    },
                    "500000": {
                        "totalPrice": 110.0,
                        "totalProfit": 4125.722742
                    }
                }
            },
            {
                "id": "632134",
                "name": "131대질병수술비(특정31대질병)",
                "theme": "수술",
                "confidence": 0.0625968990185285,
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
                        "totalProfit": 8947.932434
                    },
                    "2000000": {
                        "totalPrice": 448.0,
                        "totalProfit": 17941.556973
                    },
                    "3000000": {
                        "totalPrice": 672.0,
                        "totalProfit": 26935.228191
                    },
                    "5000000": {
                        "totalPrice": 1120.0,
                        "totalProfit": 44922.523947
                    }
                }
            },
            {
                "id": "610470",
                "name": "상해수술위로금",
                "theme": "수술",
                "confidence": 0.022306144450584965,
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
                        "totalProfit": 13041.316939
                    },
                    "300000": {
                        "totalPrice": 684.0,
                        "totalProfit": 19584.858317
                    },
                    "500000": {
                        "totalPrice": 1140.0,
                        "totalProfit": 32671.898893
                    },
                    "1000000": {
                        "totalPrice": 2280.0,
                        "totalProfit": 65389.494256
                    },
                    "2000000": {
                        "totalPrice": 4560.0,
                        "totalProfit": 130824.727164
                    }
                }
            },
            {
                "id": "633713",
                "name": "통합포인트 대상 질병진단비((A5) 제자리암진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 8.0,
                        "totalProfit": 48.892724
                    }
                }
            },
            {
                "id": "632526",
                "name": "131대질병수술비(유방의장애)",
                "theme": "수술",
                "confidence": 0.18572082602220094,
                "availableQuantities": [
                    200000,
                    300000,
                    500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 25.0,
                        "totalProfit": 279.885833
                    },
                    "300000": {
                        "totalPrice": 37.0,
                        "totalProfit": 399.319202
                    },
                    "500000": {
                        "totalPrice": 62.0,
                        "totalProfit": 724.913795
                    }
                }
            },
            {
                "id": "633314",
                "name": "질병입원 간병인비용지원(간병인비용 300만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00035376773627627145,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 428.0,
                        "totalProfit": 24529.181828
                    }
                }
            },
            {
                "id": "632137",
                "name": "131대질병수술비(치핵)",
                "theme": "수술",
                "confidence": 0.0625968990185285,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 87.0,
                        "totalProfit": -1805.488119
                    },
                    "200000": {
                        "totalPrice": 173.0,
                        "totalProfit": -3652.016173
                    }
                }
            },
            {
                "id": "611339",
                "name": "일반상해입원 간병인비용지원(간병인비용 300만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 9.610098917779285e-05,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 216.0,
                        "totalProfit": 12397.694471
                    }
                }
            },
            {
                "id": "631806",
                "name": "수술비(1~7종, 연간3회한)[질병5종]",
                "theme": "수술",
                "confidence": 0.12309656044582255,
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
                        "totalProfit": 7357.695808
                    },
                    "2000000": {
                        "totalPrice": 660.0,
                        "totalProfit": 14761.114385
                    },
                    "3000000": {
                        "totalPrice": 990.0,
                        "totalProfit": 22164.532962
                    },
                    "4000000": {
                        "totalPrice": 1320.0,
                        "totalProfit": 29567.951539
                    },
                    "5000000": {
                        "totalPrice": 1650.0,
                        "totalProfit": 36971.370116
                    }
                }
            },
            {
                "id": "630670",
                "name": "추간판장애(디스크질환)수술비",
                "theme": "수술",
                "confidence": 0.029538312959284222,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 443.0,
                        "totalProfit": 23349.043751
                    }
                }
            },
            {
                "id": "633710",
                "name": "통합포인트 대상 질병진단비((A2) 기타피부암진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 1.0,
                        "totalProfit": -1.333262
                    }
                }
            },
            {
                "id": "633317",
                "name": "질병입원 간병인비용지원(간병인비용 1,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00013637034275014283,
                "availableQuantities": [
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 380.0,
                        "totalProfit": 21023.361633
                    }
                }
            },
            {
                "id": "632653",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(특정심장질환)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.2538817168657172,
                "availableQuantities": [
                    3000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 21.0,
                        "totalProfit": 238.372598
                    }
                }
            },
            {
                "id": "633234",
                "name": "간병인지원 질병입원일당(Ⅰ)(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.035598802979057036,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 3.0,
                        "totalProfit": 816.681498
                    },
                    "20000": {
                        "totalPrice": 6.0,
                        "totalProfit": 1679.131762
                    }
                }
            },
            {
                "id": "611344",
                "name": "일반상해입원 간병인비용지원(간병인비용 2,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 2.7642425966071427e-05,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 67.0,
                        "totalProfit": 3545.496424
                    }
                }
            },
            {
                "id": "611262",
                "name": "간병인사용 일반상해입원일당(1일이상180일한도)(요양병원)",
                "theme": "입원일당",
                "confidence": 0.031703270244923545,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 160.0,
                        "totalProfit": 439.236319
                    }
                }
            },
            {
                "id": "611016",
                "name": "수술비(1~7종, 연간3회한)[상해5종]",
                "theme": "수술",
                "confidence": 0.024461611973843285,
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
                        "totalProfit": 1882.940337
                    },
                    "2000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 3811.604442
                    },
                    "3000000": {
                        "totalPrice": 150.0,
                        "totalProfit": 5740.268547
                    },
                    "4000000": {
                        "totalPrice": 200.0,
                        "totalProfit": 7668.932652
                    },
                    "5000000": {
                        "totalPrice": 250.0,
                        "totalProfit": 9597.596758
                    }
                }
            },
            {
                "id": "611265",
                "name": "상급병실(1인실) 종합병원 일반상해수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.012687175741564213,
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
                        "totalProfit": 4.195553
                    },
                    "100000": {
                        "totalPrice": 10.0,
                        "totalProfit": 203.919357
                    },
                    "200000": {
                        "totalPrice": 20.0,
                        "totalProfit": 453.577366
                    },
                    "300000": {
                        "totalPrice": 30.0,
                        "totalProfit": 703.235374
                    }
                }
            },
            {
                "id": "633341",
                "name": "2-3인실 종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.05713586363334557,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 274.0,
                        "totalProfit": 9560.159295
                    },
                    "50000": {
                        "totalPrice": 685.0,
                        "totalProfit": 23969.013664
                    }
                }
            },
            {
                "id": "611309",
                "name": "간병인지원 일반상해입원일당(Ⅰ)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.006413924826664442,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1720.0,
                        "totalProfit": 137255.856251
                    },
                    "20000": {
                        "totalPrice": 3440.0,
                        "totalProfit": 274557.530938
                    }
                }
            },
            {
                "id": "610487",
                "name": "5대골절진단비",
                "theme": "골절/화상",
                "confidence": 0.005583969239283593,
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
                        "totalProfit": 4841.228217
                    },
                    "1000000": {
                        "totalPrice": 620.0,
                        "totalProfit": 9728.153045
                    },
                    "2000000": {
                        "totalPrice": 1240.0,
                        "totalProfit": 19502.030691
                    },
                    "3000000": {
                        "totalPrice": 1860.0,
                        "totalProfit": 29275.908337
                    }
                }
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "theme": "입원일당",
                "confidence": 0.00953917918460252,
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
                        "totalProfit": 28077.211728
                    },
                    "20000": {
                        "totalPrice": 1370.0,
                        "totalProfit": 56200.129574
                    },
                    "30000": {
                        "totalPrice": 2055.0,
                        "totalProfit": 84323.079953
                    },
                    "40000": {
                        "totalPrice": 2740.0,
                        "totalProfit": 112445.997799
                    },
                    "50000": {
                        "totalPrice": 3425.0,
                        "totalProfit": 140568.948179
                    }
                }
            },
            {
                "id": "611015",
                "name": "수술비(1~7종, 연간3회한)[상해4종]",
                "theme": "수술",
                "confidence": 0.024461611973843285,
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
                        "totalProfit": 2001.903606
                    },
                    "500000": {
                        "totalPrice": 70.0,
                        "totalProfit": 2513.820768
                    },
                    "600000": {
                        "totalPrice": 84.0,
                        "totalProfit": 3025.724801
                    },
                    "1000000": {
                        "totalPrice": 140.0,
                        "totalProfit": 5073.352175
                    }
                }
            },
            {
                "id": "611341",
                "name": "일반상해입원 간병인비용지원(간병인비용 700만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 2.8805941098935715e-05,
                "availableQuantities": [
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 154.0,
                        "totalProfit": 8180.861934
                    }
                }
            },
            {
                "id": "610488",
                "name": "5대골절수술비",
                "theme": "골절/화상",
                "confidence": 0.004590840594593493,
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
                        "totalProfit": -395.672063
                    },
                    "500000": {
                        "totalPrice": 40.0,
                        "totalProfit": -628.978824
                    },
                    "1000000": {
                        "totalPrice": 80.0,
                        "totalProfit": -1212.259339
                    },
                    "2000000": {
                        "totalPrice": 160.0,
                        "totalProfit": -2378.780026
                    }
                }
            },
            {
                "id": "611357",
                "name": "통합포인트 대상 질병진단비((B8) 외상성뇌출혈진단비)",
                "theme": "기타",
                "confidence": 0.0008022117754417642,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 5.0,
                        "totalProfit": 297.613397
                    }
                }
            },
            {
                "id": "633721",
                "name": "통합포인트 대상 질병진단비((B3) 통합포인트 대상 순환계질환(3종)진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 5.0,
                        "totalProfit": 297.866056
                    }
                }
            },
            {
                "id": "631560",
                "name": "양성뇌종양진단비Ⅱ",
                "theme": "기타",
                "confidence": 0.07799926929017352,
                "availableQuantities": [
                    2000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 96.0,
                        "totalProfit": -3638.733613
                    },
                    "5000000": {
                        "totalPrice": 240.0,
                        "totalProfit": -9028.215474
                    }
                }
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "theme": "골절/화상",
                "confidence": 0.022928503377189244,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 6.0,
                        "totalProfit": 242.441713
                    },
                    "200000": {
                        "totalPrice": 12.0,
                        "totalProfit": 530.59305
                    }
                }
            },
            {
                "id": "611012",
                "name": "수술비(1~7종, 연간3회한)[상해1종]",
                "theme": "수술",
                "confidence": 0.024461611973843285,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 190.0,
                        "totalProfit": 6730.517178
                    },
                    "200000": {
                        "totalPrice": 380.0,
                        "totalProfit": 13506.773139
                    },
                    "300000": {
                        "totalPrice": 570.0,
                        "totalProfit": 20283.0291
                    }
                }
            },
            {
                "id": "633717",
                "name": "통합포인트 대상 질병진단비((A9) 통합포인트 대상 순환계질환(1종)진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 2.0,
                        "totalProfit": 18.118068
                    }
                }
            },
            {
                "id": "632986",
                "name": "간호·간병통합서비스 사용 질병입원일당(1일이상180일한도)",
                "theme": "입원일당",
                "confidence": 0.09165265625319652,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1210.0,
                        "totalProfit": 47552.075221
                    },
                    "70000": {
                        "totalPrice": 1694.0,
                        "totalProfit": 66591.192127
                    }
                }
            },
            {
                "id": "610918",
                "name": "골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.023097899789703336,
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
                        "totalProfit": 297.231548
                    },
                    "200000": {
                        "totalPrice": 178.0,
                        "totalProfit": 640.173939
                    },
                    "300000": {
                        "totalPrice": 267.0,
                        "totalProfit": 983.144139
                    },
                    "500000": {
                        "totalPrice": 445.0,
                        "totalProfit": 1669.05673
                    },
                    "1000000": {
                        "totalPrice": 890.0,
                        "totalProfit": 3383.810253
                    }
                }
            },
            {
                "id": "633332",
                "name": "당뇨병진단비Ⅱ[당화혈색소 11.0%이상]",
                "theme": "기타",
                "confidence": 0.008023469826655258,
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
                        "totalProfit": -2983.67015
                    },
                    "1000000": {
                        "totalPrice": 140.0,
                        "totalProfit": -5921.658266
                    },
                    "2000000": {
                        "totalPrice": 280.0,
                        "totalProfit": -11797.619546
                    },
                    "3000000": {
                        "totalPrice": 420.0,
                        "totalProfit": -17673.580825
                    },
                    "5000000": {
                        "totalPrice": 700.0,
                        "totalProfit": -29425.503384
                    }
                }
            },
            {
                "id": "631228",
                "name": "수술비(1~5종)[질병3종]",
                "theme": "수술",
                "confidence": 0.016391804847287562,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 345.0,
                        "totalProfit": -43143.469493
                    },
                    "1000000": {
                        "totalPrice": 690.0,
                        "totalProfit": -86241.244638
                    }
                }
            },
            {
                "id": "633711",
                "name": "통합포인트 대상 질병진단비((A3) 갑상선암진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 11.0,
                        "totalProfit": 40.519307
                    }
                }
            },
            {
                "id": "611302",
                "name": "간병인사용 일반상해입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.016408572120070606,
                "availableQuantities": [
                    150000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "150000": {
                        "totalPrice": 3.0,
                        "totalProfit": 65.998515
                    }
                }
            },
            {
                "id": "611264",
                "name": "상급병실(1인실) 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.03261197314954391,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 50.0,
                        "totalProfit": -15234.002868
                    },
                    "200000": {
                        "totalPrice": 100.0,
                        "totalProfit": -30422.280204
                    }
                }
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.29310175400937416,
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
                        "totalProfit": 4731.474948
                    },
                    "300000": {
                        "totalPrice": 276.0,
                        "totalProfit": 7120.088685
                    },
                    "400000": {
                        "totalPrice": 368.0,
                        "totalProfit": 9508.674496
                    },
                    "500000": {
                        "totalPrice": 460.0,
                        "totalProfit": 11897.288233
                    }
                }
            },
            {
                "id": "610834",
                "name": "수술비(1~5종)[상해3종]",
                "theme": "수술",
                "confidence": 0.0033894276125087425,
                "availableQuantities": [
                    500000,
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 40.0,
                        "totalProfit": -2005.133304
                    },
                    "1000000": {
                        "totalPrice": 80.0,
                        "totalProfit": -3964.56811
                    }
                }
            },
            {
                "id": "633723",
                "name": "통합포인트 대상 질병진단비((B5) 통합포인트 대상 순환계질환(5종)진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 13.0,
                        "totalProfit": 891.748996
                    }
                }
            },
            {
                "id": "633318",
                "name": "질병입원 간병인비용지원(간병인비용 1,500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00010698198828302941,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 422.0,
                        "totalProfit": 23386.819494
                    }
                }
            },
            {
                "id": "611013",
                "name": "수술비(1~7종, 연간3회한)[상해2종]",
                "theme": "수술",
                "confidence": 0.024461611973843285,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 120.0,
                        "totalProfit": 4906.300693
                    },
                    "300000": {
                        "totalPrice": 180.0,
                        "totalProfit": 7382.327458
                    }
                }
            },
            {
                "id": "632349",
                "name": "암수술비(유사암제외)(25%체증형)",
                "theme": "3대진단",
                "confidence": 0.22832575423629933,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 403.0,
                        "totalProfit": -7084.216394
                    },
                    "2000000": {
                        "totalPrice": 806.0,
                        "totalProfit": -14122.736691
                    },
                    "3000000": {
                        "totalPrice": 1209.0,
                        "totalProfit": -21161.228189
                    },
                    "5000000": {
                        "totalPrice": 2015.0,
                        "totalProfit": -35238.225933
                    }
                }
            },
            {
                "id": "633122",
                "name": "간호·간병통합서비스 사용 질병입원일당(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.05418570578271832,
                "availableQuantities": [
                    50000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 8.0,
                        "totalProfit": 189.152768
                    },
                    "70000": {
                        "totalPrice": 11.0,
                        "totalProfit": 265.770452
                    }
                }
            },
            {
                "id": "632141",
                "name": "131대질병수술비(특정다빈도29대질병)",
                "theme": "수술",
                "confidence": 0.0625968990185285,
                "availableQuantities": [
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 113.0,
                        "totalProfit": -5645.419281
                    },
                    "150000": {
                        "totalPrice": 170.0,
                        "totalProfit": -8401.902236
                    },
                    "200000": {
                        "totalPrice": 226.0,
                        "totalProfit": -11245.150797
                    }
                }
            },
            {
                "id": "611335",
                "name": "일반상해입원 간병인비용지원(간병인비용 200만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0018982201949972644,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1297.0,
                        "totalProfit": 63923.083309
                    }
                }
            },
            {
                "id": "633316",
                "name": "질병입원 간병인비용지원(간병인비용 700만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00013746457219802178,
                "availableQuantities": [
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 351.0,
                        "totalProfit": 20403.224509
                    }
                }
            },
            {
                "id": "632138",
                "name": "131대질병수술비(뇌혈관질환)",
                "theme": "수술",
                "confidence": 0.0625968990185285,
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
                        "totalProfit": 4646.602474
                    },
                    "2000000": {
                        "totalPrice": 290.0,
                        "totalProfit": 9338.923097
                    },
                    "3000000": {
                        "totalPrice": 435.0,
                        "totalProfit": 14031.24834
                    },
                    "5000000": {
                        "totalPrice": 725.0,
                        "totalProfit": 23415.910222
                    }
                }
            },
            {
                "id": "631226",
                "name": "수술비(1~5종)[질병1종]",
                "theme": "수술",
                "confidence": 0.016391804847287562,
                "availableQuantities": [
                    100000,
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 438.0,
                        "totalProfit": -70780.83802
                    },
                    "200000": {
                        "totalPrice": 876.0,
                        "totalProfit": -141515.967621
                    }
                }
            },
            {
                "id": "633015",
                "name": "상급병실(1인실) 종합병원 질병수술입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.0673513488944601,
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
                        "totalProfit": 1069.366961
                    },
                    "100000": {
                        "totalPrice": 100.0,
                        "totalProfit": 5529.775887
                    },
                    "200000": {
                        "totalPrice": 200.0,
                        "totalProfit": 11105.276507
                    },
                    "300000": {
                        "totalPrice": 300.0,
                        "totalProfit": 16680.791177
                    }
                }
            },
            {
                "id": "633718",
                "name": "통합포인트 대상 질병진단비((A10) 심근병증진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 4.0,
                        "totalProfit": 217.826041
                    }
                }
            },
            {
                "id": "631803",
                "name": "수술비(1~7종, 연간3회한)[질병2종]",
                "theme": "수술",
                "confidence": 0.12309656044582255,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 460.0,
                        "totalProfit": 11549.228731
                    },
                    "300000": {
                        "totalPrice": 690.0,
                        "totalProfit": 17346.696474
                    }
                }
            },
            {
                "id": "633724",
                "name": "통합포인트 대상 질병진단비((B6) 크론병진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 3.0,
                        "totalProfit": 38.668432
                    }
                }
            },
            {
                "id": "630246",
                "name": "만성당뇨합병증진단비",
                "theme": "기타",
                "confidence": 0.013308876906115664,
                "availableQuantities": [
                    1000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 33.0,
                        "totalProfit": 599.650242
                    },
                    "3000000": {
                        "totalPrice": 99.0,
                        "totalProfit": 1890.388127
                    },
                    "5000000": {
                        "totalPrice": 165.0,
                        "totalProfit": 3181.140062
                    }
                }
            },
            {
                "id": "631263",
                "name": "종합병원 질병입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.02522554480887033,
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
                        "totalProfit": 30473.185859
                    },
                    "20000": {
                        "totalPrice": 1574.0,
                        "totalProfit": 60992.065642
                    },
                    "30000": {
                        "totalPrice": 2361.0,
                        "totalProfit": 91510.976234
                    },
                    "40000": {
                        "totalPrice": 3148.0,
                        "totalProfit": 122029.870068
                    },
                    "50000": {
                        "totalPrice": 3935.0,
                        "totalProfit": 152548.78066
                    }
                }
            },
            {
                "id": "610912",
                "name": "골절(치아파절제외)진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.019867920137249702,
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
                        "totalProfit": -2509.136021
                    },
                    "200000": {
                        "totalPrice": 626.0,
                        "totalProfit": -4972.574788
                    },
                    "300000": {
                        "totalPrice": 939.0,
                        "totalProfit": -7435.985276
                    },
                    "500000": {
                        "totalPrice": 1565.0,
                        "totalProfit": -12362.834532
                    }
                }
            },
            {
                "id": "633339",
                "name": "2-3인실 상급종합병원 질병입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.057240816869222555,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 92.0,
                        "totalProfit": 2274.379571
                    },
                    "50000": {
                        "totalPrice": 230.0,
                        "totalProfit": 5754.565147
                    }
                }
            },
            {
                "id": "611346",
                "name": "2-3인실 종합병원 일반상해입원일당(1일이상 30일한도)",
                "theme": "입원일당",
                "confidence": 0.01168825053287487,
                "availableQuantities": [
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 86.0,
                        "totalProfit": 2621.110142
                    },
                    "50000": {
                        "totalPrice": 215.0,
                        "totalProfit": 6621.38449
                    }
                }
            },
            {
                "id": "631805",
                "name": "수술비(1~7종, 연간3회한)[질병4종]",
                "theme": "수술",
                "confidence": 0.12309656044582255,
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
                        "totalProfit": 14998.826518
                    },
                    "500000": {
                        "totalPrice": 620.0,
                        "totalProfit": 18759.965444
                    },
                    "600000": {
                        "totalPrice": 744.0,
                        "totalProfit": 22521.093154
                    },
                    "800000": {
                        "totalPrice": 992.0,
                        "totalProfit": 30043.375805
                    },
                    "1000000": {
                        "totalPrice": 1240.0,
                        "totalProfit": 37565.642441
                    }
                }
            },
            {
                "id": "611342",
                "name": "일반상해입원 간병인비용지원(간병인비용 1,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 2.971334558455e-05,
                "availableQuantities": [
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 141.0,
                        "totalProfit": 6835.328414
                    }
                }
            },
            {
                "id": "633310",
                "name": "질병입원 간병인비용지원(간병인비용 200만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.006890860733930822,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 2400.0,
                        "totalProfit": 122454.158707
                    }
                }
            },
            {
                "id": "633233",
                "name": "간병인지원 질병입원일당(Ⅰ)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.04751610538901468,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1901.0,
                        "totalProfit": 355420.301811
                    },
                    "20000": {
                        "totalPrice": 3802.0,
                        "totalProfit": 710886.429798
                    }
                }
            },
            {
                "id": "633722",
                "name": "통합포인트 대상 질병진단비((B4) 통합포인트 대상 순환계질환(4종)진단비)",
                "theme": "기타",
                "confidence": 0.010431006890554078,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 5.0,
                        "totalProfit": 256.797604
                    }
                }
            },
            {
                "id": "632139",
                "name": "131대질병수술비(후각특정질환)",
                "theme": "수술",
                "confidence": 0.0625968990185285,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 31.0,
                        "totalProfit": 326.181555
                    },
                    "300000": {
                        "totalPrice": 46.0,
                        "totalProfit": 468.76207
                    }
                }
            },
            {
                "id": "610833",
                "name": "수술비(1~5종)[상해2종]",
                "theme": "수술",
                "confidence": 0.0033894276125087425,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 55.0,
                        "totalProfit": -795.269918
                    },
                    "200000": {
                        "totalPrice": 110.0,
                        "totalProfit": -1544.830192
                    },
                    "300000": {
                        "totalPrice": 165.0,
                        "totalProfit": -2294.361458
                    }
                }
            },
            {
                "id": "631138",
                "name": "유사암수술비",
                "theme": "3대진단",
                "confidence": 0.041804767060458665,
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
                        "totalProfit": -19985.062589
                    },
                    "2000000": {
                        "totalPrice": 556.0,
                        "totalProfit": -39924.414934
                    },
                    "3000000": {
                        "totalPrice": 834.0,
                        "totalProfit": -59863.73874
                    },
                    "4000000": {
                        "totalPrice": 1112.0,
                        "totalProfit": -79803.091085
                    },
                    "5000000": {
                        "totalPrice": 1390.0,
                        "totalProfit": -99742.429906
                    }
                }
            },
            {
                "id": "611338",
                "name": "일반상해입원 간병인비용지원(간병인비용 200만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0005335155984047857,
                "availableQuantities": [
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 639.0,
                        "totalProfit": 24019.132486
                    }
                }
            },
            {
                "id": "632133",
                "name": "131대질병수술비(심장질환)",
                "theme": "수술",
                "confidence": 0.0625968990185285,
                "availableQuantities": [
                    1000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 3000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 146.0,
                        "totalProfit": 6593.997208
                    },
                    "3000000": {
                        "totalPrice": 438.0,
                        "totalProfit": 19873.441475
                    },
                    "5000000": {
                        "totalPrice": 730.0,
                        "totalProfit": 33152.885743
                    }
                }
            },
            {
                "id": "631802",
                "name": "수술비(1~7종, 연간3회한)[질병1종]",
                "theme": "수술",
                "confidence": 0.12309656044582255,
                "availableQuantities": [
                    100000,
                    200000,
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1750.0,
                        "totalProfit": 57757.102746
                    },
                    "200000": {
                        "totalPrice": 3500.0,
                        "totalProfit": 115559.944275
                    },
                    "300000": {
                        "totalPrice": 5250.0,
                        "totalProfit": 173362.785805
                    }
                }
            }
        ]
    },
    "7": {
        "id": "7",
        "channel": "TA",
        "age": 59,
        "gndr": "여",
        "unt_pd_nm": "올인원라이프(운전자)",
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
                "kmv_adj": -150000.0
            },
            {
                "tag": "출생전",
                "kmv_adj": -150000.0
            }
        ],
        "items": [
            {
                "id": "611252",
                "name": "운전자용 자동차사고부상치료비(6급)",
                "quantity": 800000,
                "theme": "운전/비용",
                "totalPrice": 48.0,
                "totalProfit": 361.360926
            },
            {
                "id": "610933",
                "name": "신화상치료비(중증화상및부식진단비)",
                "quantity": 30000000,
                "theme": "골절/화상",
                "totalPrice": 57.0,
                "totalProfit": 173.948143
            },
            {
                "id": "620951",
                "name": "운전자용 벌금(대물)",
                "quantity": 5000000,
                "theme": "운전/비용",
                "totalPrice": 42.0,
                "totalProfit": -821.408313
            },
            {
                "id": "610464",
                "name": "상해흉터복원수술비",
                "quantity": 5000000,
                "theme": "수술",
                "totalPrice": 44.0,
                "totalProfit": -208.847292
            },
            {
                "id": "610918",
                "name": "골절수술비Ⅱ",
                "quantity": 100000,
                "theme": "골절/화상",
                "totalPrice": 213.0,
                "totalProfit": -2770.906207
            },
            {
                "id": "611193",
                "name": "10대골절수술비",
                "quantity": 500000,
                "theme": "골절/화상",
                "totalPrice": 445.0,
                "totalProfit": -2250.741208
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "quantity": 10000,
                "theme": "입원일당",
                "totalPrice": 2054.0,
                "totalProfit": -73594.718572
            },
            {
                "id": "611164",
                "name": "운전자용 교통상해사망",
                "quantity": 10000000,
                "theme": "사망후유",
                "totalPrice": 730.0,
                "totalProfit": 9166.435733
            },
            {
                "id": "620274",
                "name": "보복운전피해",
                "quantity": 1000000,
                "theme": "기타",
                "totalPrice": 10.0,
                "totalProfit": 260.685288
            },
            {
                "id": "611192",
                "name": "10대골절진단비",
                "quantity": 500000,
                "theme": "골절/화상",
                "totalPrice": 1400.0,
                "totalProfit": -19324.093944
            },
            {
                "id": "611256",
                "name": "운전자용 자동차사고부상치료비(10급)",
                "quantity": 200000,
                "theme": "운전/비용",
                "totalPrice": 4.0,
                "totalProfit": -91.038088
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "quantity": 200000,
                "theme": "골절/화상",
                "totalPrice": 276.0,
                "totalProfit": -4249.164607
            },
            {
                "id": "611249",
                "name": "운전자용 자동차사고부상치료비(1-14급)[3급]",
                "quantity": 9000000,
                "theme": "운전/비용",
                "totalPrice": 72.0,
                "totalProfit": 1658.930046
            },
            {
                "id": "610468",
                "name": "중대상해수술비",
                "quantity": 5000000,
                "theme": "수술",
                "totalPrice": 260.0,
                "totalProfit": 3682.190739
            },
            {
                "id": "610469",
                "name": "상해중환자실 입원일당(1일이상)",
                "quantity": 100000,
                "theme": "입원일당",
                "totalPrice": 1790.0,
                "totalProfit": 59428.042285
            },
            {
                "id": "611255",
                "name": "운전자용 자동차사고부상치료비(9급)",
                "quantity": 200000,
                "theme": "운전/비용",
                "totalPrice": 46.0,
                "totalProfit": -313.749623
            },
            {
                "id": "611248",
                "name": "운전자용 자동차사고부상치료비(1-14급)[2급]",
                "quantity": 10000000,
                "theme": "운전/비용",
                "totalPrice": 310.0,
                "totalProfit": 1413.04826
            },
            {
                "id": "620962",
                "name": "자동차사고 변호사선임비용(타인사망,중대법규위반및중상해경찰조사포함)_자가용운전자용",
                "quantity": 50000000,
                "theme": "운전/비용",
                "totalPrice": 4634.0,
                "totalProfit": -131932.524547
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "quantity": 100000,
                "theme": "골절/화상",
                "totalPrice": 9.0,
                "totalProfit": -38.430908
            },
            {
                "id": "620966",
                "name": "교통사고 처리지원금(Ⅲ)(중대법규위반,6주미만)",
                "quantity": 10000000,
                "theme": "운전/비용",
                "totalPrice": 5995.0,
                "totalProfit": 201853.001565
            },
            {
                "id": "611257",
                "name": "운전자용 자동차사고부상치료비(11급)",
                "quantity": 200000,
                "theme": "운전/비용",
                "totalPrice": 514.0,
                "totalProfit": 5466.823069
            },
            {
                "id": "610663",
                "name": "외모특정상해수술비",
                "quantity": 100000,
                "theme": "수술",
                "totalPrice": 58.0,
                "totalProfit": 1113.44458
            },
            {
                "id": "610689",
                "name": "자동차사고 치아보철치료비",
                "quantity": 200000,
                "theme": "운전/비용",
                "totalPrice": 24.0,
                "totalProfit": 316.64691
            },
            {
                "id": "610789",
                "name": "일반상해후유장해(3~100%)",
                "quantity": 10000000,
                "theme": "사망후유",
                "totalPrice": 2570.0,
                "totalProfit": -44228.526876
            },
            {
                "id": "611254",
                "name": "운전자용 자동차사고부상치료비(8급)",
                "quantity": 200000,
                "theme": "운전/비용",
                "totalPrice": 22.0,
                "totalProfit": -141.648594
            },
            {
                "id": "610470",
                "name": "상해수술위로금",
                "quantity": 1000000,
                "theme": "수술",
                "totalPrice": 4680.0,
                "totalProfit": -15247.579978
            },
            {
                "id": "620115",
                "name": "면허취소_영업용",
                "quantity": 10000000,
                "theme": "운전/비용",
                "totalPrice": 800.0,
                "totalProfit": -9649.231862
            },
            {
                "id": "611253",
                "name": "운전자용 자동차사고부상치료비(7급)",
                "quantity": 400000,
                "theme": "운전/비용",
                "totalPrice": 36.0,
                "totalProfit": 91.491307
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "quantity": 200000,
                "theme": "골절/화상",
                "totalPrice": 174.0,
                "totalProfit": -6896.342715
            },
            {
                "id": "620973",
                "name": "교통사고 처리지원금(Ⅶ)",
                "quantity": 200000000,
                "theme": "운전/비용",
                "totalPrice": 15645.0,
                "totalProfit": 223245.371074
            },
            {
                "id": "610708",
                "name": "관절(무릎·고관절) 수술비",
                "quantity": 100000,
                "theme": "수술",
                "totalPrice": 22.0,
                "totalProfit": -1080.967192
            },
            {
                "id": "611247",
                "name": "운전자용 자동차사고부상치료비(1-14급)[1급]",
                "quantity": 10000000,
                "theme": "운전/비용",
                "totalPrice": 2320.0,
                "totalProfit": 72781.735846
            },
            {
                "id": "620952",
                "name": "운전자용 벌금(Ⅱ)",
                "quantity": 30000000,
                "theme": "운전/비용",
                "totalPrice": 1824.0,
                "totalProfit": -6530.989149
            },
            {
                "id": "610728",
                "name": "외상성척추손상 수술비",
                "quantity": 100000,
                "theme": "수술",
                "totalPrice": 16.0,
                "totalProfit": 209.431299
            },
            {
                "id": "611260",
                "name": "운전자용 자동차사고부상치료비(14급)",
                "quantity": 100000,
                "theme": "운전/비용",
                "totalPrice": 1956.0,
                "totalProfit": 37745.917968
            },
            {
                "id": "611250",
                "name": "운전자용 자동차사고부상치료비(4급)",
                "quantity": 3000000,
                "theme": "운전/비용",
                "totalPrice": 90.0,
                "totalProfit": -721.529073
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "quantity": 500000,
                "theme": "골절/화상",
                "totalPrice": 4620.0,
                "totalProfit": -101463.709336
            },
            {
                "id": "610224",
                "name": "운전자교통상해50%이상고도후유장해",
                "quantity": 200000,
                "theme": "사망후유",
                "totalPrice": 42.0,
                "totalProfit": 568.832943
            },
            {
                "id": "611251",
                "name": "운전자용 자동차사고부상치료비(5급)",
                "quantity": 1500000,
                "theme": "운전/비용",
                "totalPrice": 126.0,
                "totalProfit": 390.918151
            },
            {
                "id": "611258",
                "name": "운전자용 자동차사고부상치료비(12급)",
                "quantity": 100000,
                "theme": "운전/비용",
                "totalPrice": 1260.0,
                "totalProfit": 19035.625447
            },
            {
                "id": "620111",
                "name": "면허정지_영업용",
                "quantity": 50000,
                "theme": "운전/비용",
                "totalPrice": 230.0,
                "totalProfit": -8012.53256
            },
            {
                "id": "640154",
                "name": "응급실내원비(응급)",
                "quantity": 30000,
                "theme": "기타",
                "totalPrice": 636.0,
                "totalProfit": 7483.549618
            },
            {
                "id": "611259",
                "name": "운전자용 자동차사고부상치료비(13급)",
                "quantity": 100000,
                "theme": "운전/비용",
                "totalPrice": 14.0,
                "totalProfit": 152.403095
            }
        ],
        "availableItems": [
            {
                "id": "611193",
                "name": "10대골절수술비",
                "theme": "골절/화상",
                "confidence": 0.08381691742183145,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 870.0,
                        "totalProfit": 12923.90541
                    }
                }
            },
            {
                "id": "611250",
                "name": "운전자용 자동차사고부상치료비(4급)",
                "theme": "운전/비용",
                "confidence": 0.23096331747033283,
                "availableQuantities": [
                    9000000
                ],
                "recommendedQuantity": 9000000,
                "priceAndProfitByQuantity": {
                    "9000000": {
                        "totalPrice": 99.0,
                        "totalProfit": 1749.320652
                    }
                }
            },
            {
                "id": "610716",
                "name": "운전자용 자동차사고부상치료비(1~3급)",
                "theme": "운전/비용",
                "confidence": 0.013504959430191798,
                "availableQuantities": [
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 2670.0,
                        "totalProfit": 75682.747196
                    }
                }
            },
            {
                "id": "620951",
                "name": "운전자용 벌금(대물)",
                "theme": "운전/비용",
                "confidence": 0.6046050779661727,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 42.0,
                        "totalProfit": 523.45173
                    }
                }
            },
            {
                "id": "610921",
                "name": "골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.1815791955889544,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 903.0,
                        "totalProfit": 11413.326787
                    }
                }
            },
            {
                "id": "620241",
                "name": "행정소송법률비용",
                "theme": "재물/배상",
                "confidence": 0.0046510028993272815,
                "availableQuantities": [
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 661.0,
                        "totalProfit": 21077.666283
                    }
                }
            },
            {
                "id": "620974",
                "name": "운전자용 벌금(Ⅲ)(비탑승중포함)",
                "theme": "운전/비용",
                "confidence": NaN,
                "availableQuantities": [
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 259.0,
                        "totalProfit": 3476.000734
                    }
                }
            },
            {
                "id": "611255",
                "name": "운전자용 자동차사고부상치료비(9급)",
                "theme": "운전/비용",
                "confidence": 0.3472423872377747,
                "availableQuantities": [
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 60.0,
                        "totalProfit": 1007.309441
                    }
                }
            },
            {
                "id": "611128",
                "name": "외상성뇌출혈진단비",
                "theme": "3대진단",
                "confidence": 0.06479656501360702,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 418.0,
                        "totalProfit": 9307.440875
                    }
                }
            },
            {
                "id": "610931",
                "name": "신화상치료비(화상진단비)",
                "theme": "골절/화상",
                "confidence": 0.18370787549629658,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 174.0,
                        "totalProfit": 1000.362261
                    }
                }
            },
            {
                "id": "620975",
                "name": "자동차사고 변호사선임비용(타인사망,중대법규위반및중상해경찰조사포함)(비탑승중포함)",
                "theme": "운전/비용",
                "confidence": NaN,
                "availableQuantities": [
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 581.0,
                        "totalProfit": 842.450163
                    }
                }
            },
            {
                "id": "620276",
                "name": "업무상과실·중과실치사상벌금",
                "theme": "재물/배상",
                "confidence": 0.12944810956410474,
                "availableQuantities": [
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 14.0,
                        "totalProfit": 387.254575
                    }
                }
            },
            {
                "id": "610648",
                "name": "화재상해사망",
                "theme": "사망후유",
                "confidence": 0.003309285913882744,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 7.0,
                        "totalProfit": 22.375875
                    }
                }
            },
            {
                "id": "610191",
                "name": "대중교통상해사망",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    40000000
                ],
                "recommendedQuantity": 40000000,
                "priceAndProfitByQuantity": {
                    "40000000": {
                        "totalPrice": 16.0,
                        "totalProfit": 163.390252
                    }
                }
            },
            {
                "id": "611257",
                "name": "운전자용 자동차사고부상치료비(11급)",
                "theme": "운전/비용",
                "confidence": 0.3937540151447514,
                "availableQuantities": [
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 456.0,
                        "totalProfit": 7512.868899
                    }
                }
            },
            {
                "id": "620252",
                "name": "가족화재벌금",
                "theme": "재물/배상",
                "confidence": 0.08963224514856791,
                "availableQuantities": [
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 12.0,
                        "totalProfit": 347.533066
                    }
                }
            },
            {
                "id": "610926",
                "name": "운전자용 교통상해골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.01539874126970536,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 22.0,
                        "totalProfit": -95.32671
                    }
                }
            },
            {
                "id": "611260",
                "name": "운전자용 자동차사고부상치료비(14급)",
                "theme": "운전/비용",
                "confidence": 0.4635214570052165,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 1482.0,
                        "totalProfit": 21768.668003
                    }
                }
            },
            {
                "id": "611254",
                "name": "운전자용 자동차사고부상치료비(8급)",
                "theme": "운전/비용",
                "confidence": 0.3239865732842863,
                "availableQuantities": [
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 30.0,
                        "totalProfit": 525.939766
                    }
                }
            },
            {
                "id": "610909",
                "name": "상급병실(1인실) 상급종합병원 일반상해입원일당(1일이상 10일한도)",
                "theme": "입원일당",
                "confidence": 0.026603373298740202,
                "availableQuantities": [
                    30000
                ],
                "recommendedQuantity": 30000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 8.0,
                        "totalProfit": 143.530546
                    }
                }
            },
            {
                "id": "610852",
                "name": "종합병원 일반상해입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.06285343073295495,
                "availableQuantities": [
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 1442.0,
                        "totalProfit": 19258.507677
                    }
                }
            },
            {
                "id": "611166",
                "name": "운전자용 교통상해후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.05184806943799553,
                "availableQuantities": [
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 1000.0,
                        "totalProfit": 24934.611558
                    }
                }
            },
            {
                "id": "620175",
                "name": "자동차사고성형비용(본인)",
                "theme": "수술",
                "confidence": 0.1596644845917976,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 18.0,
                        "totalProfit": 352.496625
                    }
                }
            },
            {
                "id": "610728",
                "name": "외상성척추손상 수술비",
                "theme": "수술",
                "confidence": 0.0773377529410247,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 16.0,
                        "totalProfit": 426.589856
                    }
                }
            },
            {
                "id": "620016",
                "name": "가족과실치사상벌금",
                "theme": "재물/배상",
                "confidence": 0.09792260023958692,
                "availableQuantities": [
                    7000000
                ],
                "recommendedQuantity": 7000000,
                "priceAndProfitByQuantity": {
                    "7000000": {
                        "totalPrice": 4.0,
                        "totalProfit": 78.561556
                    }
                }
            },
            {
                "id": "611251",
                "name": "운전자용 자동차사고부상치료비(5급)",
                "theme": "운전/비용",
                "confidence": 0.2542191314238212,
                "availableQuantities": [
                    4500000
                ],
                "recommendedQuantity": 4500000,
                "priceAndProfitByQuantity": {
                    "4500000": {
                        "totalPrice": 122.0,
                        "totalProfit": 2366.925381
                    }
                }
            },
            {
                "id": "620274",
                "name": "보복운전피해",
                "theme": "기타",
                "confidence": 0.3136266370320636,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 10.0,
                        "totalProfit": 271.481084
                    }
                }
            },
            {
                "id": "611014",
                "name": "수술비(1~7종, 연간3회한)[상해3종]",
                "theme": "수술",
                "confidence": 0.12760407027120121,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 305.0,
                        "totalProfit": 5528.396549
                    }
                }
            },
            {
                "id": "611310",
                "name": "간병인지원 일반상해입원일당(Ⅰ)(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.009867775932886073,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 19.0,
                        "totalProfit": 263.362155
                    }
                }
            },
            {
                "id": "611256",
                "name": "운전자용 자동차사고부상치료비(10급)",
                "theme": "운전/비용",
                "confidence": 0.37049820119126303,
                "availableQuantities": [
                    600000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 6.0,
                        "totalProfit": 75.149815
                    }
                }
            },
            {
                "id": "611252",
                "name": "운전자용 자동차사고부상치료비(6급)",
                "theme": "운전/비용",
                "confidence": 0.27747494537730955,
                "availableQuantities": [
                    2400000
                ],
                "recommendedQuantity": 2400000,
                "priceAndProfitByQuantity": {
                    "2400000": {
                        "totalPrice": 48.0,
                        "totalProfit": 1052.26598
                    }
                }
            },
            {
                "id": "610470",
                "name": "상해수술위로금",
                "theme": "수술",
                "confidence": 0.08278040719792137,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 2285.0,
                        "totalProfit": 49872.112472
                    }
                }
            },
            {
                "id": "640154",
                "name": "응급실내원비(응급)",
                "theme": "기타",
                "confidence": 0.23817129706050416,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1035.0,
                        "totalProfit": 24764.068024
                    }
                }
            },
            {
                "id": "611248",
                "name": "운전자용 자동차사고부상치료비(1-14급)[2급]",
                "theme": "운전/비용",
                "confidence": 0.18445168956335609,
                "availableQuantities": [
                    12000000
                ],
                "recommendedQuantity": 12000000,
                "priceAndProfitByQuantity": {
                    "12000000": {
                        "totalPrice": 120.0,
                        "totalProfit": 2828.735254
                    }
                }
            },
            {
                "id": "610789",
                "name": "일반상해후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.1061329120417636,
                "availableQuantities": [
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 12550.0,
                        "totalProfit": -232943.166526
                    }
                }
            },
            {
                "id": "610933",
                "name": "신화상치료비(중증화상및부식진단비)",
                "theme": "골절/화상",
                "confidence": 0.2069636894497849,
                "availableQuantities": [
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 57.0,
                        "totalProfit": 1313.760094
                    }
                }
            },
            {
                "id": "611259",
                "name": "운전자용 자동차사고부상치료비(13급)",
                "theme": "운전/비용",
                "confidence": 0.4402656430517281,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 15.0,
                        "totalProfit": 236.2465
                    }
                }
            },
            {
                "id": "620976",
                "name": "교통사고 처리지원금(Ⅷ)(비탑승중포함)",
                "theme": "운전/비용",
                "confidence": NaN,
                "availableQuantities": [
                    200000000
                ],
                "recommendedQuantity": 200000000,
                "priceAndProfitByQuantity": {
                    "200000000": {
                        "totalPrice": 3046.0,
                        "totalProfit": 30465.475441
                    }
                }
            },
            {
                "id": "610928",
                "name": "한방치료비Ⅱ[골절(치아파절제외)]",
                "theme": "골절/화상",
                "confidence": 0.011687895628690348,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 2860.0,
                        "totalProfit": 101199.881083
                    }
                }
            },
            {
                "id": "620235",
                "name": "의료사고법률비용",
                "theme": "재물/배상",
                "confidence": 0.04888186651489679,
                "availableQuantities": [
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 2.0,
                        "totalProfit": 16.869512
                    }
                }
            },
            {
                "id": "610757",
                "name": "상해수술 한방치료비",
                "theme": "기타",
                "confidence": 0.005354072295830231,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 1960.0,
                        "totalProfit": 67207.14961
                    }
                }
            },
            {
                "id": "611016",
                "name": "수술비(1~7종, 연간3회한)[상해5종]",
                "theme": "수술",
                "confidence": 0.12760407027120121,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 600.0,
                        "totalProfit": 10332.123841
                    }
                }
            },
            {
                "id": "611258",
                "name": "운전자용 자동차사고부상치료비(12급)",
                "theme": "운전/비용",
                "confidence": 0.41700982909823975,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 876.0,
                        "totalProfit": 13236.609805
                    }
                }
            },
            {
                "id": "611309",
                "name": "간병인지원 일반상해입원일당(Ⅰ)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.013749618655914314,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 11182.0,
                        "totalProfit": 247547.733944
                    }
                }
            },
            {
                "id": "610439",
                "name": "임시생활비담보",
                "theme": "입원일당",
                "confidence": 0.011029083173944907,
                "availableQuantities": [
                    10000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 2054.0,
                        "totalProfit": 35846.711718
                    }
                }
            },
            {
                "id": "611015",
                "name": "수술비(1~7종, 연간3회한)[상해4종]",
                "theme": "수술",
                "confidence": 0.12760407027120121,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 410.0,
                        "totalProfit": 6582.861098
                    }
                }
            },
            {
                "id": "610663",
                "name": "외모특정상해수술비",
                "theme": "수술",
                "confidence": 0.03892675269979582,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 58.0,
                        "totalProfit": 1680.425622
                    }
                }
            },
            {
                "id": "610929",
                "name": "신화상치료비(화상수술비)",
                "theme": "골절/화상",
                "confidence": 0.1604520615428082,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 9.0,
                        "totalProfit": 157.439282
                    }
                }
            },
            {
                "id": "611012",
                "name": "수술비(1~7종, 연간3회한)[상해1종]",
                "theme": "수술",
                "confidence": 0.12760407027120121,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 1200.0,
                        "totalProfit": 26636.827997
                    }
                }
            },
            {
                "id": "611253",
                "name": "운전자용 자동차사고부상치료비(7급)",
                "theme": "운전/비용",
                "confidence": 0.30073075933079796,
                "availableQuantities": [
                    1200000
                ],
                "recommendedQuantity": 1200000,
                "priceAndProfitByQuantity": {
                    "1200000": {
                        "totalPrice": 36.0,
                        "totalProfit": 589.946985
                    }
                }
            },
            {
                "id": "611017",
                "name": "수술비(1~7종, 연간3회한)[상해6종]",
                "theme": "수술",
                "confidence": 0.12760407027120121,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 1754.2097
                    }
                }
            },
            {
                "id": "610918",
                "name": "골절수술비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.13089395541372625,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 213.0,
                        "totalProfit": 3412.167236
                    }
                }
            },
            {
                "id": "640046",
                "name": "깁스치료비",
                "theme": "골절/화상",
                "confidence": 0.47731610534719626,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 276.0,
                        "totalProfit": 5035.229723
                    }
                }
            },
            {
                "id": "611018",
                "name": "수술비(1~7종, 연간3회한)[상해7종]",
                "theme": "수술",
                "confidence": 0.12760407027120121,
                "availableQuantities": [
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 2040.997955
                    }
                }
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 4050.0,
                        "totalProfit": 52326.174967
                    }
                }
            },
            {
                "id": "620277",
                "name": "사이버명예훼손피해",
                "theme": "기타",
                "confidence": 0.03620861001260694,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 5.0,
                        "totalProfit": 74.372119
                    }
                }
            },
            {
                "id": "640449",
                "name": "특정단순창상봉합술치료비(급여,연간3회한)",
                "theme": "기타",
                "confidence": 0.18189786233045493,
                "availableQuantities": [
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 145.0,
                        "totalProfit": 4595.628061
                    }
                }
            },
            {
                "id": "610219",
                "name": "운전자교통상해80%이상고도후유장해",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 90.0,
                        "totalProfit": 1317.966004
                    }
                }
            },
            {
                "id": "611013",
                "name": "수술비(1~7종, 연간3회한)[상해2종]",
                "theme": "수술",
                "confidence": 0.12760407027120121,
                "availableQuantities": [
                    300000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 450.0,
                        "totalProfit": 9394.965023
                    }
                }
            },
            {
                "id": "610766",
                "name": "상급종합병원일반상해입원일당(1일이상)",
                "theme": "입원일당",
                "confidence": 0.013121752616648151,
                "availableQuantities": [
                    20000
                ],
                "recommendedQuantity": 20000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 208.0,
                        "totalProfit": 4972.988004
                    }
                }
            },
            {
                "id": "610689",
                "name": "자동차사고 치아보철치료비",
                "theme": "운전/비용",
                "confidence": 0.030945838305892467,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 24.0,
                        "totalProfit": 333.918734
                    }
                }
            },
            {
                "id": "610661",
                "name": "운전중 교통상해사망",
                "theme": "사망후유",
                "confidence": 0.013521690394231779,
                "availableQuantities": [
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 250.0,
                        "totalProfit": 195.740208
                    }
                }
            },
            {
                "id": "610466",
                "name": "강력범죄위로금-일상생활",
                "theme": "기타",
                "confidence": 0.02026814323594265,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 100.0,
                        "totalProfit": 1869.286614
                    }
                }
            },
            {
                "id": "611247",
                "name": "운전자용 자동차사고부상치료비(1-14급)[1급]",
                "theme": "운전/비용",
                "confidence": 0.1611958756098677,
                "availableQuantities": [
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 2130.0,
                        "totalProfit": 72233.795752
                    }
                }
            },
            {
                "id": "610912",
                "name": "골절(치아파절제외)진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.09214551865938723,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 1270.0,
                        "totalProfit": 12274.33193
                    }
                }
            },
            {
                "id": "610927",
                "name": "운전자용 교통상해골절진단비Ⅱ",
                "theme": "골절/화상",
                "confidence": 0.017034931377904062,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 72.0,
                        "totalProfit": 828.61743
                    }
                }
            },
            {
                "id": "611249",
                "name": "운전자용 자동차사고부상치료비(1-14급)[3급]",
                "theme": "운전/비용",
                "confidence": 0.20770750351684444,
                "availableQuantities": [
                    9000000
                ],
                "recommendedQuantity": 9000000,
                "priceAndProfitByQuantity": {
                    "9000000": {
                        "totalPrice": 72.0,
                        "totalProfit": 1464.365236
                    }
                }
            },
            {
                "id": "620279",
                "name": "인터넷직거래사기피해",
                "theme": "기타",
                "confidence": 0.03703028828754917,
                "availableQuantities": [
                    500000
                ],
                "recommendedQuantity": 500000,
                "priceAndProfitByQuantity": {
                    "500000": {
                        "totalPrice": 32.0,
                        "totalProfit": 978.526012
                    }
                }
            },
            {
                "id": "610224",
                "name": "운전자교통상해50%이상고도후유장해",
                "theme": "사망후유",
                "confidence": 0.0,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 42.0,
                        "totalProfit": 646.058587
                    }
                }
            },
            {
                "id": "610708",
                "name": "관절(무릎·고관절) 수술비",
                "theme": "수술",
                "confidence": 0.061879168425172805,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 22.0,
                        "totalProfit": 159.308863
                    }
                }
            },
            {
                "id": "620238",
                "name": "민사소송법률비용",
                "theme": "재물/배상",
                "confidence": 0.03050417627642242,
                "availableQuantities": [
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 3331.0,
                        "totalProfit": 100465.883346
                    }
                }
            },
            {
                "id": "610684",
                "name": "자가용운전자용 자동차사고입원일당(1~11급/1일이상)",
                "theme": "입원일당",
                "confidence": 0.029282171111257742,
                "availableQuantities": [
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "70000": {
                        "totalPrice": 812.0,
                        "totalProfit": 18730.987302
                    }
                }
            }
        ]
    }
};