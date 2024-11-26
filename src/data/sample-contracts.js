// SAMPLE_CONTRACTS 데이터
export const SAMPLE_CONTRACTS = {
    "0": {
        "id": "0",
        "channel": "TA",
        "age": 24,
        "gndr": "남",
        "unt_pd_nm": "내Mom대로 5.10.5",
        "silson_discount": [
            {
                "tag": "노후",
                "kmv_adj": 0.0
            },
            {
                "tag": "유병자",
                "kmv_adj": 0.0
            },
            {
                "tag": "일반",
                "kmv_adj": -194915.95471100006
            }
        ],
        "items": [
            {
                "id": "633380",
                "name": "암진단비(유사암제외)(면책기간미적용)",
                "quantity": 50000000,
                "theme": "3대진단",
                "totalPrice": 56950.0,
                "totalProfit": 952260.682456
            },
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
                "id": "610605",
                "name": "일반상해고도후유장해",
                "quantity": 50000000,
                "theme": "사망후유",
                "totalPrice": 300.0,
                "totalProfit": 6846.15265
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
                "id": "633391",
                "name": "암직접치료통원일당(상급종합병원)(면책기간미적용)",
                "quantity": 50000,
                "theme": "입원일당",
                "totalPrice": 2455.0,
                "totalProfit": 49017.42717
            },
            {
                "id": "610015",
                "name": "일반상해사망",
                "quantity": 50000000,
                "theme": "사망후유",
                "totalPrice": 2400.0,
                "totalProfit": 55406.183985
            }
        ],
        "availableItems": [
            {
                "id": "620966",
                "name": "교통사고 처리지원금(Ⅲ)(중대법규위반,6주미만)",
                "theme": "운전/비용",
                "confidence": 0.0029014943069144003,
                "availableQuantities": [
                    5000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 765.0,
                        "totalProfit": 56187.34602833333
                    },
                    "10000000": {
                        "totalPrice": 1101.0,
                        "totalProfit": 72281.7759837435
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
                        "totalPrice": 15.06,
                        "totalProfit": 983.0993947400004
                    },
                    "10000000": {
                        "totalPrice": 75.54929577464789,
                        "totalProfit": 5574.4575034159625
                    }
                }
            },
            {
                "id": "632653",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(특정심장질환)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.15197844223405527,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 121.48684210526316,
                        "totalProfit": 2355.580294723685
                    },
                    "5000000": {
                        "totalPrice": 202.0463847203274,
                        "totalProfit": 4060.592182134155
                    }
                }
            },
            {
                "id": "633712",
                "name": "통합포인트 대상 질병진단비((A4) 특정전이암진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 5.727947473594062,
                        "totalProfit": 140.9509104343234
                    }
                }
            },
            {
                "id": "633000",
                "name": "암(유사암제외) 주요치료비(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.05630167864187206,
                "availableQuantities": [
                    1000000,
                    4000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1241.9346733668342,
                        "totalProfit": 19628.893443180903
                    },
                    "4000000": {
                        "totalPrice": 5488.8,
                        "totalProfit": 86484.38299413334
                    },
                    "5000000": {
                        "totalPrice": 6160.102739726028,
                        "totalProfit": 96316.62751077398
                    },
                    "10000000": {
                        "totalPrice": 12518.093883357042,
                        "totalProfit": 200055.5299294708
                    },
                    "20000000": {
                        "totalPrice": 26086.206896551725,
                        "totalProfit": 410522.69853869325
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
                        "totalPrice": 651.3333333333334,
                        "totalProfit": 12742.923331653847
                    },
                    "300000": {
                        "totalPrice": 1014.6764705882352,
                        "totalProfit": 16380.579855598033
                    },
                    "500000": {
                        "totalPrice": 1672.9575757575758,
                        "totalProfit": 30484.589715723636
                    },
                    "1000000": {
                        "totalPrice": 3297.2818254603685,
                        "totalProfit": 44451.043257343095
                    },
                    "1500000": {
                        "totalPrice": 4941.93661971831,
                        "totalProfit": -23891.51063370589
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
                        "totalPrice": 121.14285714285714,
                        "totalProfit": -2486.512621928571
                    },
                    "300000": {
                        "totalPrice": 175.88754098360656,
                        "totalProfit": -3857.2575321645904
                    }
                }
            },
            {
                "id": "633515",
                "name": "특정순환계질환진단비",
                "theme": "기타",
                "confidence": 0.00781928355778747,
                "availableQuantities": [
                    100000,
                    1000000,
                    2000000,
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 316.5,
                        "totalProfit": 5517.746474
                    },
                    "1000000": {
                        "totalPrice": 3127.714285714286,
                        "totalProfit": 74565.1673218
                    },
                    "2000000": {
                        "totalPrice": 6618.75,
                        "totalProfit": 143589.89048543747
                    },
                    "3000000": {
                        "totalPrice": 9931.875,
                        "totalProfit": 235754.4601576875
                    },
                    "5000000": {
                        "totalPrice": 15820.588235294117,
                        "totalProfit": 346915.95527490583
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
                        "totalPrice": 397.54455445544556,
                        "totalProfit": 5985.444541430693
                    },
                    "400000": {
                        "totalPrice": 497.62179487179486,
                        "totalProfit": 8069.322882179634
                    },
                    "500000": {
                        "totalPrice": 626.6042446941324,
                        "totalProfit": 10133.056547084265
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
                        "totalPrice": 6.474353154788925,
                        "totalProfit": 160.87204212125334
                    },
                    "10000000": {
                        "totalPrice": 62.11092715231788,
                        "totalProfit": 1956.4237595513252
                    },
                    "30000000": {
                        "totalPrice": 174.64285714285714,
                        "totalProfit": 5110.3322807023815
                    },
                    "50000000": {
                        "totalPrice": 279.5509708737864,
                        "totalProfit": 9296.204637549208
                    },
                    "100000000": {
                        "totalPrice": 570.8618331053351,
                        "totalProfit": 19040.702657391234
                    }
                }
            },
            {
                "id": "633719",
                "name": "통합포인트 대상 질병진단비((B1) 림프절전이암진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 8.081929774479018,
                        "totalProfit": 113.28518495545408
                    }
                }
            },
            {
                "id": "630229",
                "name": "급성심근경색증진단비",
                "theme": null,
                "confidence": 0.0526276701527897,
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
                        "totalPrice": 837.6363636363636,
                        "totalProfit": 15401.37349027273
                    },
                    "10000000": {
                        "totalPrice": 1494.7702265372168,
                        "totalProfit": 30749.906656210354
                    },
                    "20000000": {
                        "totalPrice": 2910.01,
                        "totalProfit": 58381.589658246674
                    },
                    "30000000": {
                        "totalPrice": 3840.4871794871797,
                        "totalProfit": 82035.6981126752
                    },
                    "50000000": {
                        "totalPrice": 6843.023255813953,
                        "totalProfit": 127751.27591846512
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
                        "totalPrice": 418.9325842696629,
                        "totalProfit": -20657.223894129213
                    },
                    "200000": {
                        "totalPrice": 843.1294559099437,
                        "totalProfit": -41162.05883114016
                    }
                }
            },
            {
                "id": "633238",
                "name": "간병인지원 질병입원일당(간호·간병통합서비스 사용추가보장)(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.022231926997633704,
                "availableQuantities": [
                    20000,
                    40000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 1.0,
                        "totalProfit": 44.951591
                    },
                    "40000": {
                        "totalPrice": 2.4,
                        "totalProfit": 136.0912853
                    },
                    "70000": {
                        "totalPrice": 4.854237288135593,
                        "totalProfit": 328.16591413898294
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
                        "totalPrice": 1378.0,
                        "totalProfit": 38186.91844235087
                    },
                    "5000000": {
                        "totalPrice": 2337.827248441674,
                        "totalProfit": 63372.648626140246
                    },
                    "10000000": {
                        "totalPrice": 4505.716332378223,
                        "totalProfit": 128071.87874653291
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
                        "totalPrice": 230.46022727272728,
                        "totalProfit": -50419.85985672157
                    },
                    "200000": {
                        "totalPrice": 478.3135135135135,
                        "totalProfit": -85727.84470850274
                    },
                    "300000": {
                        "totalPrice": 693.0889830508474,
                        "totalProfit": -157298.1664022642
                    }
                }
            },
            {
                "id": "633736",
                "name": "2대질환 주요치료비(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.004275074123963757,
                "availableQuantities": [
                    1000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 868.8333333333334,
                        "totalProfit": 24364.852264
                    },
                    "5000000": {
                        "totalPrice": 4510.37037037037,
                        "totalProfit": 107544.28178307407
                    },
                    "10000000": {
                        "totalPrice": 9042.959183673469,
                        "totalProfit": 194551.5213985204
                    },
                    "20000000": {
                        "totalPrice": 18240.25974025974,
                        "totalProfit": 405623.812928169
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
                        "totalPrice": 106.1,
                        "totalProfit": 1702.7435702000002
                    },
                    "10000000": {
                        "totalPrice": 1103.125,
                        "totalProfit": 20007.344711437498
                    },
                    "20000000": {
                        "totalPrice": 1957.142857142857,
                        "totalProfit": 34968.918728666664
                    },
                    "30000000": {
                        "totalPrice": 2589.767441860465,
                        "totalProfit": 47598.94251669768
                    },
                    "50000000": {
                        "totalPrice": 4452.34375,
                        "totalProfit": 89339.05940548434
                    }
                }
            },
            {
                "id": "632342",
                "name": "통합암진단비(유사암제외)(10대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.14795520817304483,
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
                        "totalPrice": 113.41258741258741,
                        "totalProfit": 1843.88889658042
                    },
                    "10000000": {
                        "totalPrice": 1047.579250720461,
                        "totalProfit": 18585.240917613835
                    },
                    "20000000": {
                        "totalPrice": 1870.3732809430255,
                        "totalProfit": 33937.87350400786
                    },
                    "30000000": {
                        "totalPrice": 2794.3864229765013,
                        "totalProfit": 51684.52722697907
                    },
                    "50000000": {
                        "totalPrice": 4586.848635235732,
                        "totalProfit": 84554.74563397109
                    }
                }
            },
            {
                "id": "633237",
                "name": "간병인지원 질병입원일당(간호·간병통합서비스 사용추가보장)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.029860265368652227,
                "availableQuantities": [
                    40000,
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "40000": {
                        "totalPrice": 105.33333333333333,
                        "totalProfit": 13792.192672037032
                    },
                    "70000": {
                        "totalPrice": 173.261480787254,
                        "totalProfit": 17136.329698980328
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
                        "totalPrice": 530.7619047619048,
                        "totalProfit": 13498.264968380952
                    },
                    "50000": {
                        "totalPrice": 1320.330357142857,
                        "totalProfit": 37061.30843402854
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
                        "totalPrice": 88.20219123505976,
                        "totalProfit": 1427.2932487529874
                    }
                }
            },
            {
                "id": "633577",
                "name": "종합병원 암 주요치료비(본인부담금 1억원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 360.14459665144597,
                        "totalProfit": 488.1063567578067
                    }
                }
            },
            {
                "id": "633728",
                "name": "특정순환계질환 급여치료비(요양병원제외)(본인부담금 1백만원이상, 최대3천만원)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.00868338122128663,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 4744.653771760155,
                        "totalProfit": 50344.354440046474
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
                        "totalPrice": 407.3293768545994,
                        "totalProfit": 30240.248672991096
                    },
                    "20000000": {
                        "totalPrice": 792.0245398773006,
                        "totalProfit": 57154.46151521227
                    },
                    "30000000": {
                        "totalPrice": 1210.8116883116884,
                        "totalProfit": 91377.58841417861
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
                        "totalPrice": 83.86363636363636,
                        "totalProfit": 2256.841121727273
                    },
                    "400000": {
                        "totalPrice": 101.02189781021897,
                        "totalProfit": 3729.786296286762
                    },
                    "500000": {
                        "totalPrice": 130.8832026413537,
                        "totalProfit": 4515.153566151525
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
                        "totalPrice": 411.7142857142857,
                        "totalProfit": 6925.630149142856
                    },
                    "10000000": {
                        "totalPrice": 4172.3125,
                        "totalProfit": 80483.4621121875
                    },
                    "20000000": {
                        "totalPrice": 7434.818181818182,
                        "totalProfit": 139187.96735718183
                    },
                    "30000000": {
                        "totalPrice": 9734.533333333333,
                        "totalProfit": 201200.38602728889
                    },
                    "50000000": {
                        "totalPrice": 16578.984375,
                        "totalProfit": 371590.83452537516
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
                        "totalPrice": 38.91208791208791,
                        "totalProfit": -898.0347861868131
                    },
                    "2000000": {
                        "totalPrice": 178.63565891472868,
                        "totalProfit": -6636.367478226561
                    },
                    "3000000": {
                        "totalPrice": 266.8061224489796,
                        "totalProfit": -10706.8959795102
                    },
                    "5000000": {
                        "totalPrice": 435.71649484536084,
                        "totalProfit": -18336.99470531031
                    },
                    "10000000": {
                        "totalPrice": 849.5978552278821,
                        "totalProfit": -41627.51379930296
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
                        "totalPrice": 423.9380530973451,
                        "totalProfit": 6357.239215654866
                    },
                    "5000000": {
                        "totalPrice": 987.0872483221476,
                        "totalProfit": 14561.123618604024
                    },
                    "10000000": {
                        "totalPrice": 1952.9672642244739,
                        "totalProfit": 27794.610510070983
                    },
                    "20000000": {
                        "totalPrice": 3912.452261306533,
                        "totalProfit": 50166.71377371857
                    },
                    "30000000": {
                        "totalPrice": 6107.6949152542375,
                        "totalProfit": 83852.31519905085
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
                        "totalPrice": 26.47292418772563,
                        "totalProfit": 193.1097233429604
                    },
                    "2000000": {
                        "totalPrice": 247.22378716744913,
                        "totalProfit": 1528.765933126761
                    },
                    "4000000": {
                        "totalPrice": 445.9971631205674,
                        "totalProfit": 1267.2079218184394
                    },
                    "6000000": {
                        "totalPrice": 671.2868462757527,
                        "totalProfit": 557.146935092064
                    },
                    "10000000": {
                        "totalPrice": 1057.7136258660507,
                        "totalProfit": -1175.4435828487294
                    }
                }
            },
            {
                "id": "633714",
                "name": "통합포인트 대상 질병진단비((A6) 경계성종양진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1.6899800171281758,
                        "totalProfit": -43.99976293403767
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
                        "totalPrice": 46.721698113207545,
                        "totalProfit": -376.94216011820305
                    },
                    "100000": {
                        "totalPrice": 90.87855297157623,
                        "totalProfit": -703.13669420155
                    },
                    "200000": {
                        "totalPrice": 182.7814569536424,
                        "totalProfit": -1805.682416503312
                    },
                    "300000": {
                        "totalPrice": 274.5348837209302,
                        "totalProfit": -732.6899040465113
                    },
                    "500000": {
                        "totalPrice": 501.131221719457,
                        "totalProfit": -2037.3759644162903
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
                        "totalPrice": 271.2162162162162,
                        "totalProfit": 10767.889207855858
                    },
                    "10000000": {
                        "totalPrice": 540.0,
                        "totalProfit": 21446.574387820252
                    },
                    "20000000": {
                        "totalPrice": 1072.0796460176991,
                        "totalProfit": 40646.0277272511
                    }
                }
            },
            {
                "id": "630763",
                "name": "뇌혈관질환 수술비",
                "theme": "수술",
                "confidence": 0.13649285537110348,
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
                        "totalPrice": 808.919540229885,
                        "totalProfit": 25005.66680812643
                    },
                    "10000000": {
                        "totalPrice": 1647.6296928327645,
                        "totalProfit": 50296.32661770135
                    },
                    "20000000": {
                        "totalPrice": 3113.1632653061224,
                        "totalProfit": 99437.73026654079
                    },
                    "30000000": {
                        "totalPrice": 5175.457627118644,
                        "totalProfit": 139315.34400361017
                    },
                    "50000000": {
                        "totalPrice": 8700.90909090909,
                        "totalProfit": 283426.15973572724
                    }
                }
            },
            {
                "id": "633387",
                "name": "전이암진단비(특정전이암진단비)(면책기간미적용)",
                "theme": "3대진단",
                "confidence": 0.035773410039180976,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 2507.181818181818,
                        "totalProfit": 51254.80955754544
                    },
                    "10000000": {
                        "totalPrice": 4197.391304347826,
                        "totalProfit": 102208.78255630434
                    },
                    "20000000": {
                        "totalPrice": 7224.347826086957,
                        "totalProfit": 166580.64370408695
                    }
                }
            },
            {
                "id": "633711",
                "name": "통합포인트 대상 질병진단비((A3) 갑상선암진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 3.1250356836996858,
                        "totalProfit": 5.35961310536836
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
                        "totalPrice": 4.3232323232323235,
                        "totalProfit": 33.24749616161616
                    },
                    "30000": {
                        "totalPrice": 5.767123287671233,
                        "totalProfit": -17.125534447488576
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
                        "totalPrice": 114.99421965317919,
                        "totalProfit": -6134.860439757223
                    },
                    "2000000": {
                        "totalPrice": 243.22448979591837,
                        "totalProfit": -10105.416831688772
                    },
                    "3000000": {
                        "totalPrice": 355.7142857142857,
                        "totalProfit": -6537.688597142856
                    },
                    "5000000": {
                        "totalPrice": 576.3678571428571,
                        "totalProfit": -30484.50883786204
                    }
                }
            },
            {
                "id": "620951",
                "name": "운전자용 벌금(대물)",
                "theme": "운전/비용",
                "confidence": 0.01781691819785556,
                "availableQuantities": [
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 36.0,
                        "totalProfit": 959.7537481250006
                    }
                }
            },
            {
                "id": "611311",
                "name": "간병인지원 일반상해입원일당(Ⅵ)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.0031573323636773713,
                "availableQuantities": [
                    135200
                ],
                "recommendedQuantity": 135200,
                "priceAndProfitByQuantity": {
                    "135200": {
                        "totalPrice": 1573.0579710144928,
                        "totalProfit": 83664.19048382611
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
                        "totalPrice": 3533.181818181818,
                        "totalProfit": 85456.58590072727
                    },
                    "10000000": {
                        "totalPrice": 5878.817204301075,
                        "totalProfit": 145797.72734488052
                    },
                    "20000000": {
                        "totalPrice": 9967.5,
                        "totalProfit": 349416.54511662497
                    },
                    "30000000": {
                        "totalPrice": 30780.0,
                        "totalProfit": 592162.9348840001
                    },
                    "50000000": {
                        "totalPrice": 37904.166666666664,
                        "totalProfit": 814168.6651779999
                    }
                }
            },
            {
                "id": "633233",
                "name": "간병인지원 질병입원일당(Ⅰ)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.031994160195306744,
                "availableQuantities": [
                    10000,
                    20000
                ],
                "recommendedQuantity": 10000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 1260.877990430622,
                        "totalProfit": 115023.91596289114
                    },
                    "20000": {
                        "totalPrice": 1503.2423664122136,
                        "totalProfit": 149622.0730992882
                    }
                }
            },
            {
                "id": "611169",
                "name": "비운전자용 자동차사고부상치료비(Ⅱ)",
                "theme": "운전/비용",
                "confidence": 0.0025609442331623,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 521.0,
                        "totalProfit": 20590.94282293549
                    },
                    "20000000": {
                        "totalPrice": 1042.1904761904761,
                        "totalProfit": 34425.107307795945
                    },
                    "30000000": {
                        "totalPrice": 1563.0,
                        "totalProfit": 38743.956228999996
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
                    3000000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 353.8987341772152,
                        "totalProfit": 13886.907682632915
                    },
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 3563.25,
                        "totalProfit": 178392.62785400002
                    },
                    "3000000": {
                        "totalPrice": 10542.0,
                        "totalProfit": 287038.796623
                    }
                }
            },
            {
                "id": "611357",
                "name": "통합포인트 대상 질병진단비((B8) 외상성뇌출혈진단비)",
                "theme": "기타",
                "confidence": 0.0016044235508835285,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 8.92891807022552,
                        "totalProfit": 395.10393898543674
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
                        "totalPrice": 92.6453488372093,
                        "totalProfit": -1382.567222610465
                    },
                    "200000": {
                        "totalPrice": 194.39378238341968,
                        "totalProfit": -2209.850887088084
                    },
                    "300000": {
                        "totalPrice": 284.6167494677076,
                        "totalProfit": -3468.734655737926
                    }
                }
            },
            {
                "id": "633721",
                "name": "통합포인트 대상 질병진단비((B3) 통합포인트 대상 순환계질환(3종)진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 8.936625749357693,
                        "totalProfit": 392.2989840945174
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
                        "totalPrice": 170.0,
                        "totalProfit": 4691.732125357144
                    },
                    "300000": {
                        "totalPrice": 236.0501567398119,
                        "totalProfit": 8064.708537953728
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
                        "totalPrice": 14.719626168224298,
                        "totalProfit": 1637.2698550000007
                    },
                    "2000000": {
                        "totalPrice": 29.63888888888889,
                        "totalProfit": 3824.3253759027775
                    },
                    "2500000": {
                        "totalPrice": 38.36666666666667,
                        "totalProfit": 3879.3497451000003
                    },
                    "5000000": {
                        "totalPrice": 75.3125,
                        "totalProfit": 10166.534160562498
                    },
                    "10000000": {
                        "totalPrice": 149.0272952853598,
                        "totalProfit": 19285.434172614398
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
                    200000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "20000": {
                        "totalPrice": 660.8571428571429,
                        "totalProfit": 36475.33514985714
                    },
                    "50000": {
                        "totalPrice": 1882.2602739726028,
                        "totalProfit": 54023.63843434249
                    },
                    "100000": {
                        "totalPrice": 3261.764705882353,
                        "totalProfit": 122383.21364914706
                    },
                    "200000": {
                        "totalPrice": 6264.0,
                        "totalProfit": 231065.18617439998
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
                        "totalPrice": 1432.972972972973,
                        "totalProfit": 39897.770392513514
                    },
                    "70000": {
                        "totalPrice": 1755.2067039106146,
                        "totalProfit": 45046.42985541978
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
                        "totalPrice": 826.5384615384615,
                        "totalProfit": 10619.754121393502
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
                        "totalPrice": 561.655462184874,
                        "totalProfit": 12192.22711852941
                    },
                    "500000": {
                        "totalPrice": 889.1012298959319,
                        "totalProfit": 22212.89629548818
                    },
                    "1000000": {
                        "totalPrice": 1780.6132329209252,
                        "totalProfit": 43791.084549393956
                    }
                }
            },
            {
                "id": "660052",
                "name": "가족일상생활중배상책임(Ⅲ)",
                "theme": "재물/배상",
                "confidence": 0.16938638509710463,
                "availableQuantities": [
                    100000000
                ],
                "recommendedQuantity": 100000000,
                "priceAndProfitByQuantity": {
                    "100000000": {
                        "totalPrice": 2078.0,
                        "totalProfit": 32278.24139655903
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
                        "totalPrice": 85.57142857142857,
                        "totalProfit": 1496.6462302857144
                    },
                    "10000000": {
                        "totalPrice": 883.75,
                        "totalProfit": 18074.15579575
                    },
                    "20000000": {
                        "totalPrice": 1550.909090909091,
                        "totalProfit": 30880.370604772736
                    },
                    "30000000": {
                        "totalPrice": 1951.3333333333333,
                        "totalProfit": 44128.278725600016
                    },
                    "50000000": {
                        "totalPrice": 3281.25,
                        "totalProfit": 80825.28688168754
                    }
                }
            },
            {
                "id": "633567",
                "name": "종합병원 암 주요치료비(본인부담금 500만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 2823.3409436834095,
                        "totalProfit": 53742.809740689234
                    }
                }
            },
            {
                "id": "633724",
                "name": "통합포인트 대상 질병진단비((B6) 크론병진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 4.674850128461319,
                        "totalProfit": 34.69849882781269
                    }
                }
            },
            {
                "id": "640490",
                "name": "중증질환자(뇌혈관질환) 산정특례대상 진단비(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.011334634203639943,
                "availableQuantities": [
                    3000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 66.0,
                        "totalProfit": 3076.901304
                    },
                    "10000000": {
                        "totalPrice": 238.94736842105263,
                        "totalProfit": 23109.752584684218
                    },
                    "20000000": {
                        "totalPrice": 496.6666666666667,
                        "totalProfit": 35232.78607672222
                    },
                    "30000000": {
                        "totalPrice": 721.25,
                        "totalProfit": 75499.28130916666
                    }
                }
            },
            {
                "id": "633578",
                "name": "종합병원 암 주요치료비(본인부담금 1억1,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 332.22222222222223,
                        "totalProfit": 672.3189018461537
                    }
                }
            },
            {
                "id": "632504",
                "name": "뇌혈관질환수술비(25%체증형)",
                "theme": "수술",
                "confidence": 0.17376793662408688,
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
                        "totalPrice": 361.7522935779817,
                        "totalProfit": 10165.515320082572
                    },
                    "5000000": {
                        "totalPrice": 839.5409836065573,
                        "totalProfit": 26475.83701960002
                    },
                    "10000000": {
                        "totalPrice": 1649.4303898170247,
                        "totalProfit": 52344.2457129395
                    },
                    "20000000": {
                        "totalPrice": 3357.747474747475,
                        "totalProfit": 106841.92736980802
                    },
                    "30000000": {
                        "totalPrice": 5203.5,
                        "totalProfit": 163413.72669884487
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
                        "totalPrice": 257.3333333333333,
                        "totalProfit": 10598.63280186667
                    },
                    "2000000": {
                        "totalPrice": 563.5897435897435,
                        "totalProfit": 20598.26595687179
                    },
                    "3000000": {
                        "totalPrice": 753.4883720930233,
                        "totalProfit": 14858.474705883724
                    },
                    "5000000": {
                        "totalPrice": 1470.8672086720867,
                        "totalProfit": -12168.020572178859
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
                        "totalPrice": 146.00985221674875,
                        "totalProfit": 1934.7179860738918
                    },
                    "300000": {
                        "totalPrice": 231.2277413308341,
                        "totalProfit": 3994.497220497657
                    },
                    "400000": {
                        "totalPrice": 311.97802197802196,
                        "totalProfit": -3953.9365316423064
                    },
                    "500000": {
                        "totalPrice": 374.1525423728813,
                        "totalProfit": -4368.9226660254235
                    }
                }
            },
            {
                "id": "630235",
                "name": "허혈성심질환진단",
                "theme": "3대진단",
                "confidence": 0.22883166325698528,
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
                        "totalPrice": 2140.909090909091,
                        "totalProfit": 53458.46235378789
                    },
                    "10000000": {
                        "totalPrice": 4137.336170212766,
                        "totalProfit": 102483.02982754087
                    },
                    "20000000": {
                        "totalPrice": 7786.601941747573,
                        "totalProfit": 171050.5457915692
                    },
                    "30000000": {
                        "totalPrice": 10926.344743276284,
                        "totalProfit": 238004.63705290607
                    },
                    "50000000": {
                        "totalPrice": 21741.071428571428,
                        "totalProfit": 439306.6810635715
                    }
                }
            },
            {
                "id": "630331",
                "name": "질병고도후유장해",
                "theme": "사망후유",
                "confidence": 0.018277461613408357,
                "availableQuantities": [
                    1000000,
                    10000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 60.85,
                        "totalProfit": 1882.2752345250003
                    },
                    "10000000": {
                        "totalPrice": 651.2597402597403,
                        "totalProfit": 17046.19715381818
                    },
                    "30000000": {
                        "totalPrice": 1755.6,
                        "totalProfit": 58904.115996766675
                    },
                    "50000000": {
                        "totalPrice": 2448.7195121951218,
                        "totalProfit": 79124.67335734147
                    },
                    "100000000": {
                        "totalPrice": 5336.393442622951,
                        "totalProfit": 166885.29523650822
                    }
                }
            },
            {
                "id": "632349",
                "name": "암수술비(유사암제외)(25%체증형)",
                "theme": "수술",
                "confidence": 0.11876354800313507,
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
                        "totalPrice": 807.1578947368421,
                        "totalProfit": 11864.986132947366
                    },
                    "2000000": {
                        "totalPrice": 1229.5573770491803,
                        "totalProfit": 21528.64608177049
                    },
                    "3000000": {
                        "totalPrice": 1864.3086053412462,
                        "totalProfit": 34433.488576148375
                    },
                    "5000000": {
                        "totalPrice": 2994.1780045351475,
                        "totalProfit": 54041.420202817484
                    },
                    "10000000": {
                        "totalPrice": 5847.875894988067,
                        "totalProfit": 107745.38919129598
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
                        "totalPrice": 965.9285714285714,
                        "totalProfit": 15539.127984000002
                    },
                    "10000000": {
                        "totalPrice": 8620.0,
                        "totalProfit": 158917.90615062165
                    },
                    "20000000": {
                        "totalPrice": 15411.612903225807,
                        "totalProfit": 310681.4455659355
                    },
                    "30000000": {
                        "totalPrice": 25745.0,
                        "totalProfit": 524874.751011
                    },
                    "50000000": {
                        "totalPrice": 41716.666666666664,
                        "totalProfit": 864126.1119723334
                    }
                }
            },
            {
                "id": "630971",
                "name": "질병후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.05094570668344263,
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
                        "totalPrice": 5570.454545454545,
                        "totalProfit": 87299.33355445453
                    },
                    "10000000": {
                        "totalPrice": 4760.408163265306,
                        "totalProfit": 77445.71037158507
                    },
                    "20000000": {
                        "totalPrice": 7722.652519893899,
                        "totalProfit": 134632.65339340322
                    },
                    "30000000": {
                        "totalPrice": 10621.103448275862,
                        "totalProfit": 175891.47282988272
                    },
                    "50000000": {
                        "totalPrice": 19968.525179856115,
                        "totalProfit": 348757.4229935503
                    }
                }
            },
            {
                "id": "620935",
                "name": "자가용운전자용 교통사고 처리지원금(Ⅵ)",
                "theme": "운전/비용",
                "confidence": 0.008712807810506443,
                "availableQuantities": [
                    100000000,
                    150000000,
                    200000000
                ],
                "recommendedQuantity": 200000000,
                "priceAndProfitByQuantity": {
                    "100000000": {
                        "totalPrice": 1486.0,
                        "totalProfit": 19016.259366888888
                    },
                    "150000000": {
                        "totalPrice": 1963.0,
                        "totalProfit": 16822.926692
                    },
                    "200000000": {
                        "totalPrice": 2320.0,
                        "totalProfit": 26332.115873442865
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
                        "totalPrice": 91.19186046511628,
                        "totalProfit": -1870.6888518895346
                    },
                    "1000000": {
                        "totalPrice": 184.36329588014982,
                        "totalProfit": -3526.525361211743
                    }
                }
            },
            {
                "id": "633575",
                "name": "종합병원 암 주요치료비(본인부담금 8,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 443.39421613394217,
                        "totalProfit": 588.3719048644325
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
                        "totalPrice": 791.25,
                        "totalProfit": 16868.48702525
                    },
                    "3000000": {
                        "totalPrice": 784.0,
                        "totalProfit": 15585.534954000002
                    },
                    "5000000": {
                        "totalPrice": 1728.3333333333333,
                        "totalProfit": 37334.43280473809
                    },
                    "10000000": {
                        "totalPrice": 3224.7169811320755,
                        "totalProfit": 65442.23601847171
                    },
                    "20000000": {
                        "totalPrice": 6473.75,
                        "totalProfit": 138677.31663025
                    }
                }
            },
            {
                "id": "633517",
                "name": "특정순환계질환 급여치료비(요양병원)(본인부담금 1백만원이상)(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.06049420322591047,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 438.33103448275864,
                        "totalProfit": 11678.48480829218
                    }
                }
            },
            {
                "id": "633574",
                "name": "종합병원 암 주요치료비(본인부담금 7,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 507.31354642313545,
                        "totalProfit": 577.4760192444783
                    }
                }
            },
            {
                "id": "632480",
                "name": "전이암진단비(림프절전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.053270013073044346,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 1204.1666666666667,
                        "totalProfit": 17121.514965976196
                    },
                    "10000000": {
                        "totalPrice": 2444.8984771573605,
                        "totalProfit": 37048.88479042131
                    },
                    "20000000": {
                        "totalPrice": 5073.809523809524,
                        "totalProfit": 68727.00690447619
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
                        "totalPrice": 76.93230769230769,
                        "totalProfit": 1787.147442427692
                    },
                    "2000000": {
                        "totalPrice": 154.55355450236968,
                        "totalProfit": 3770.6589070052123
                    }
                }
            },
            {
                "id": "640491",
                "name": "중증질환자(심장질환) 산정특례대상 진단비(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.012299478658646099,
                "availableQuantities": [
                    3000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 96.0,
                        "totalProfit": 5551.233354
                    },
                    "10000000": {
                        "totalPrice": 348.8235294117647,
                        "totalProfit": 46695.84992617646
                    },
                    "20000000": {
                        "totalPrice": 720.5405405405405,
                        "totalProfit": 62812.67499386485
                    },
                    "30000000": {
                        "totalPrice": 1001.0526315789474,
                        "totalProfit": 160551.0843333158
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
                        "totalPrice": 12.86765408504539,
                        "totalProfit": 29.145641226577442
                    },
                    "20000000": {
                        "totalPrice": 24.504347826086956,
                        "totalProfit": 76.92107332173913
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
                        "totalPrice": 773.2295578437311,
                        "totalProfit": 27929.527185802574
                    },
                    "2000000": {
                        "totalPrice": 1518.9142857142858,
                        "totalProfit": 58495.41061495463
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
                        "totalPrice": 36.15,
                        "totalProfit": 1141.3552488999999
                    },
                    "5000000": {
                        "totalPrice": 62.41721854304636,
                        "totalProfit": 2204.281770866667
                    },
                    "7000000": {
                        "totalPrice": 89.91111111111111,
                        "totalProfit": 3026.819860666667
                    },
                    "10000000": {
                        "totalPrice": 124.64485578992682,
                        "totalProfit": 4309.028784724379
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
                        "totalPrice": 1598.352,
                        "totalProfit": 32272.502835671996
                    },
                    "5000000": {
                        "totalPrice": 2604.904761904762,
                        "totalProfit": 54918.45159886665
                    },
                    "10000000": {
                        "totalPrice": 5253.415492957746,
                        "totalProfit": 108863.52021534325
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
                        "totalPrice": 80.18367346938776,
                        "totalProfit": 1477.1552873061225
                    },
                    "30000": {
                        "totalPrice": 123.4090909090909,
                        "totalProfit": 2635.9110588636363
                    },
                    "50000": {
                        "totalPrice": 219.0566037735849,
                        "totalProfit": 3848.708626603772
                    },
                    "70000": {
                        "totalPrice": 245.0,
                        "totalProfit": 5167.024806
                    },
                    "100000": {
                        "totalPrice": 382.7450980392157,
                        "totalProfit": 6968.7593104509815
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
                        "totalPrice": 1021.0,
                        "totalProfit": 33889.909449599996
                    },
                    "1000000": {
                        "totalPrice": 1915.8252427184466,
                        "totalProfit": 62039.503744844675
                    },
                    "2000000": {
                        "totalPrice": 4028.273894436519,
                        "totalProfit": 122337.71944243372
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
                        "totalPrice": 153.4254143646409,
                        "totalProfit": 1656.0986405138115
                    },
                    "200000": {
                        "totalPrice": 314.1016311166876,
                        "totalProfit": 4395.04896138104
                    }
                }
            },
            {
                "id": "631726",
                "name": "항암세기조절방사선치료비",
                "theme": "3대진단",
                "confidence": 0.21364161877848353,
                "availableQuantities": [
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 20000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 109.56239870340356,
                        "totalProfit": 10808.846089439225
                    },
                    "20000000": {
                        "totalPrice": 220.48744460856722,
                        "totalProfit": 21449.66699897931
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
                        "totalPrice": 242.7462686567164,
                        "totalProfit": 3023.275152737313
                    },
                    "200000": {
                        "totalPrice": 499.062818336163,
                        "totalProfit": -6605.846721497453
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
                        "totalPrice": 29.28421052631579,
                        "totalProfit": 781.539129873684
                    },
                    "30000": {
                        "totalPrice": 36.44927536231884,
                        "totalProfit": 883.4055151304344
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
                        "totalPrice": 1.8785046728971964,
                        "totalProfit": -2001.5579120934583
                    },
                    "300000": {
                        "totalPrice": 5.278985507246377,
                        "totalProfit": -6390.839499833334
                    },
                    "500000": {
                        "totalPrice": 9.19468085106383,
                        "totalProfit": -11008.459151530848
                    },
                    "1000000": {
                        "totalPrice": 17.936948297604037,
                        "totalProfit": -22358.594737470357
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
                        "totalPrice": 229.3684210526316,
                        "totalProfit": 2038.8894752105266
                    },
                    "20000": {
                        "totalPrice": 475.3539651837524,
                        "totalProfit": 2347.337034549323
                    },
                    "30000": {
                        "totalPrice": 651.3219512195122,
                        "totalProfit": -2779.5010438243926
                    },
                    "50000": {
                        "totalPrice": 1123.4430379746836,
                        "totalProfit": -18026.228174313917
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
                        "totalPrice": 24.90686845168801,
                        "totalProfit": 418.6785153469149
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
                        "totalPrice": 290.85714285714283,
                        "totalProfit": 5010.254895571428
                    },
                    "10000000": {
                        "totalPrice": 2931.25,
                        "totalProfit": 58629.29031374999
                    },
                    "20000000": {
                        "totalPrice": 5265.454545454545,
                        "totalProfit": 101449.75374222727
                    },
                    "30000000": {
                        "totalPrice": 6775.333333333333,
                        "totalProfit": 148603.20871828886
                    },
                    "50000000": {
                        "totalPrice": 11507.8125,
                        "totalProfit": 272267.16054525
                    }
                }
            },
            {
                "id": "640056",
                "name": "5대장기이식수술비",
                "theme": null,
                "confidence": 0.1549839913992013,
                "availableQuantities": [
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 121.28828828828829,
                        "totalProfit": 1233.721571635135
                    },
                    "30000000": {
                        "totalPrice": 185.53012048192772,
                        "totalProfit": 2012.5500244036134
                    },
                    "50000000": {
                        "totalPrice": 310.36557674841055,
                        "totalProfit": 3717.1709123468186
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
                        "totalPrice": 1608.2,
                        "totalProfit": 19863.39819271111
                    },
                    "2000000": {
                        "totalPrice": 2907.4347826086955,
                        "totalProfit": 36920.00620965217
                    },
                    "3000000": {
                        "totalPrice": 4763.790697674419,
                        "totalProfit": 64251.77547141861
                    },
                    "5000000": {
                        "totalPrice": 7810.075757575758,
                        "totalProfit": 113187.1650534356
                    },
                    "10000000": {
                        "totalPrice": 16621.432432432433,
                        "totalProfit": 241688.8632962702
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
                        "totalPrice": 129.36959553695957,
                        "totalProfit": 2473.1129304490923
                    },
                    "200000": {
                        "totalPrice": 281.48837209302326,
                        "totalProfit": 4744.6204592734375
                    },
                    "300000": {
                        "totalPrice": 387.8942307692308,
                        "totalProfit": 9187.178029759614
                    },
                    "500000": {
                        "totalPrice": 640.4611398963731,
                        "totalProfit": 13117.349242748192
                    },
                    "1000000": {
                        "totalPrice": 1246.1965811965813,
                        "totalProfit": 23279.470841482373
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
                        "totalPrice": 1008.3846153846154,
                        "totalProfit": 18509.970589012813
                    },
                    "5000000": {
                        "totalPrice": 1659.4720039292731,
                        "totalProfit": 32197.52578199804
                    },
                    "10000000": {
                        "totalPrice": 3206.701509872242,
                        "totalProfit": 59659.24627179328
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
                        "totalPrice": 583.9280575539568,
                        "totalProfit": 6503.272386539568
                    },
                    "200000": {
                        "totalPrice": 1077.614571092832,
                        "totalProfit": 11180.141270141092
                    },
                    "300000": {
                        "totalPrice": 1616.552036199095,
                        "totalProfit": 18333.17515231972
                    },
                    "400000": {
                        "totalPrice": 2274.6434782608694,
                        "totalProfit": 22342.381535017405
                    },
                    "500000": {
                        "totalPrice": 2668.1424265259984,
                        "totalProfit": 29942.674321627754
                    }
                }
            },
            {
                "id": "633725",
                "name": "통합포인트 대상 질병진단비((B7) 간경변증진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 7.2200970596631455,
                        "totalProfit": 353.6530587778413
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
                        "totalPrice": 694.9629629629629,
                        "totalProfit": 17340.30705506173
                    },
                    "100000": {
                        "totalPrice": 3004.4444444444443,
                        "totalProfit": 76490.25803277778
                    },
                    "150000": {
                        "totalPrice": 3483.196261682243,
                        "totalProfit": 113194.76675386536
                    },
                    "200000": {
                        "totalPrice": 4680.0,
                        "totalProfit": 115711.34914762499
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
                        "totalPrice": 494.24074074074076,
                        "totalProfit": 14913.762798740738
                    },
                    "5000000": {
                        "totalPrice": 808.9238653001464,
                        "totalProfit": 25034.45187031039
                    },
                    "10000000": {
                        "totalPrice": 1557.2899408284025,
                        "totalProfit": 51985.657390040236
                    }
                }
            },
            {
                "id": "633722",
                "name": "통합포인트 대상 질병진단비((B4) 통합포인트 대상 순환계질환(4종)진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 10.2329431915501,
                        "totalProfit": 371.0462603063966
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
                        "totalPrice": 48.21900269541779,
                        "totalProfit": 1605.9661356202835
                    },
                    "10000000": {
                        "totalPrice": 443.4020618556701,
                        "totalProfit": 15361.754457896053
                    },
                    "30000000": {
                        "totalPrice": 1294.7368421052631,
                        "totalProfit": 45955.243825612444
                    },
                    "50000000": {
                        "totalPrice": 2162.857944974733,
                        "totalProfit": 79304.04143717756
                    },
                    "100000000": {
                        "totalPrice": 4050.9114583333335,
                        "totalProfit": 148751.66248413347
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
                        "totalPrice": 623.0526315789474,
                        "totalProfit": 12580.254205652634
                    },
                    "30000": {
                        "totalPrice": 936.0,
                        "totalProfit": 15008.138278421055
                    },
                    "50000": {
                        "totalPrice": 1442.4242424242425,
                        "totalProfit": 29684.463826303036
                    },
                    "70000": {
                        "totalPrice": 2030.0,
                        "totalProfit": 23595.43069
                    },
                    "100000": {
                        "totalPrice": 2874.074074074074,
                        "totalProfit": 47539.42543775927
                    }
                }
            },
            {
                "id": "611305",
                "name": "간병인사용 일반상해입원일당(1일이상 180일한도)(요양병원)(체증형)",
                "theme": "입원일당",
                "confidence": 0.0030191815435818285,
                "availableQuantities": [
                    10000,
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 23.0,
                        "totalProfit": 960.5723835833334
                    },
                    "20000": {
                        "totalPrice": 73.04761904761905,
                        "totalProfit": 1333.6845560476188
                    },
                    "50000": {
                        "totalPrice": 162.74358974358975,
                        "totalProfit": 5065.9846917846135
                    }
                }
            },
            {
                "id": "633580",
                "name": "종합병원 암 주요치료비(본인부담금 1억3,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 309.70319634703196,
                        "totalProfit": 579.9735330510284
                    }
                }
            },
            {
                "id": "611168",
                "name": "운전자용 자동차사고부상치료비(Ⅱ)",
                "theme": "운전/비용",
                "confidence": 0.007787278596800886,
                "availableQuantities": [
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 1897.0,
                        "totalProfit": 72879.24253235591
                    },
                    "20000000": {
                        "totalPrice": 3809.3698630136987,
                        "totalProfit": 150919.6828960136
                    },
                    "30000000": {
                        "totalPrice": 5691.0,
                        "totalProfit": 197148.09885687873
                    }
                }
            },
            {
                "id": "630697",
                "name": "암진단비(유사암 제외)",
                "theme": "3대진단",
                "confidence": 0.2646444574792974,
                "availableQuantities": [
                    1000000,
                    10000000,
                    20000000,
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 959.3405405405406,
                        "totalProfit": 18273.160087434375
                    },
                    "10000000": {
                        "totalPrice": 8566.131386861314,
                        "totalProfit": 160963.45169588318
                    },
                    "20000000": {
                        "totalPrice": 15315.408970976254,
                        "totalProfit": 295256.75604841154
                    },
                    "30000000": {
                        "totalPrice": 23141.594827586207,
                        "totalProfit": 469142.0937288259
                    },
                    "50000000": {
                        "totalPrice": 35573.976109215015,
                        "totalProfit": 733724.3434361296
                    }
                }
            },
            {
                "id": "633002",
                "name": "종합병원 암 주요치료비(본인부담금 1천만원이상)(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.047485147167783126,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 11721.241830065359,
                        "totalProfit": 89067.64524055031
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
                        "totalPrice": 2331.625,
                        "totalProfit": 17014.723678625003
                    },
                    "500000": {
                        "totalPrice": 3917.3935264054517,
                        "totalProfit": 26745.24633767121
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
                        "totalPrice": 271.2962962962963,
                        "totalProfit": 4768.974278777779
                    },
                    "1000000": {
                        "totalPrice": 496.1880687563195,
                        "totalProfit": 8561.482813933262
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
                        "totalPrice": 48.98550724637681,
                        "totalProfit": 1641.33595042029
                    },
                    "30000000": {
                        "totalPrice": 67.38990825688073,
                        "totalProfit": 2013.8042221922883
                    },
                    "50000000": {
                        "totalPrice": 115.12059369202227,
                        "totalProfit": 3533.9048971301104
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
                        "totalPrice": 19.174840085287848,
                        "totalProfit": 431.1104391044776
                    }
                }
            },
            {
                "id": "611304",
                "name": "간병인사용 일반상해입원일당(1일이상 180일한도)(요양병원제외)(체증형)",
                "theme": "입원일당",
                "confidence": 0.0030191815435818285,
                "availableQuantities": [
                    30000,
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 622.6666666666666,
                        "totalProfit": 16183.867769611106
                    },
                    "100000": {
                        "totalPrice": 1960.0,
                        "totalProfit": 112076.33570466668
                    },
                    "150000": {
                        "totalPrice": 3035.19801980198,
                        "totalProfit": 129577.07546499999
                    },
                    "200000": {
                        "totalPrice": 5008.0,
                        "totalProfit": 134820.0560706
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
                        "totalPrice": 55.339366515837106,
                        "totalProfit": -3195.80558536199
                    },
                    "5000000": {
                        "totalPrice": 139.625,
                        "totalProfit": -8276.634256975001
                    },
                    "10000000": {
                        "totalPrice": 261.9514018691589,
                        "totalProfit": -20279.431163608602
                    }
                }
            },
            {
                "id": "633576",
                "name": "종합병원 암 주요치료비(본인부담금 9,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 391.79604261796044,
                        "totalProfit": 493.9789194067023
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
                        "totalPrice": 1898.7990373044524,
                        "totalProfit": 95925.48872725396
                    },
                    "20000": {
                        "totalPrice": 2195.4296724470137,
                        "totalProfit": 113423.6525944548
                    }
                }
            },
            {
                "id": "633581",
                "name": "종합병원 암 주요치료비(본인부담금 1억4,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 305.4185692541857,
                        "totalProfit": 581.522350773039
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
                        "totalPrice": 35.373493975903614,
                        "totalProfit": 910.0969166385544
                    },
                    "50000": {
                        "totalPrice": 94.22202797202797,
                        "totalProfit": 2607.878289756996
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
                        "totalPrice": 984.506329113924,
                        "totalProfit": 14838.092987873415
                    },
                    "10000000": {
                        "totalPrice": 1960.107452339688,
                        "totalProfit": 27195.101254984384
                    },
                    "20000000": {
                        "totalPrice": 3685.25,
                        "totalProfit": 48761.27735915179
                    },
                    "30000000": {
                        "totalPrice": 6135.777777777777,
                        "totalProfit": 94962.87745668516
                    },
                    "50000000": {
                        "totalPrice": 10789.130434782608,
                        "totalProfit": 155361.65317552173
                    }
                }
            },
            {
                "id": "632339",
                "name": "통합암진단비(유사암제외)(특정소액암진단비)",
                "theme": "3대진단",
                "confidence": 0.14795520817304483,
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
                        "totalPrice": 212.1081081081081,
                        "totalProfit": 2586.504968736488
                    },
                    "10000000": {
                        "totalPrice": 1967.3701657458564,
                        "totalProfit": 23889.180945439228
                    },
                    "20000000": {
                        "totalPrice": 3418.980694980695,
                        "totalProfit": 32050.037666895765
                    },
                    "30000000": {
                        "totalPrice": 5084.142297650131,
                        "totalProfit": 45342.90031313859
                    },
                    "50000000": {
                        "totalPrice": 8342.108585858587,
                        "totalProfit": 71235.75495700089
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
                        "totalPrice": 2.111111111111111,
                        "totalProfit": 7.03215911111111
                    },
                    "70000": {
                        "totalPrice": 2.7744593202883627,
                        "totalProfit": -31.08483475180227
                    }
                }
            },
            {
                "id": "630222",
                "name": "뇌졸중진단비",
                "theme": "3대진단",
                "confidence": 0.025462313829719387,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000,
                    30000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 2017.5,
                        "totalProfit": 45113.50394942308
                    },
                    "10000000": {
                        "totalPrice": 4222.540322580645,
                        "totalProfit": 98334.57816643821
                    },
                    "20000000": {
                        "totalPrice": 8006.230031948882,
                        "totalProfit": 186676.11925853352
                    },
                    "30000000": {
                        "totalPrice": 10503.673469387755,
                        "totalProfit": 275642.24158339796
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
                        "totalPrice": 293.57142857142856,
                        "totalProfit": 28547.603606142857
                    },
                    "10000000": {
                        "totalPrice": 635.7817109144543,
                        "totalProfit": 55253.83989899119
                    },
                    "20000000": {
                        "totalPrice": 1228.0538555691555,
                        "totalProfit": 105855.51742914203
                    },
                    "30000000": {
                        "totalPrice": 1889.2207792207791,
                        "totalProfit": 167910.42621651627
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
                        "totalPrice": 15.74099099099099,
                        "totalProfit": 257.32067415427923
                    }
                }
            },
            {
                "id": "632341",
                "name": "통합암진단비(유사암제외)(15대특정암진단비)",
                "theme": "3대진단",
                "confidence": 0.14795520817304483,
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
                        "totalPrice": 300.8775510204082,
                        "totalProfit": 5384.796593578236
                    },
                    "10000000": {
                        "totalPrice": 2775.840455840456,
                        "totalProfit": 53662.31766616239
                    },
                    "20000000": {
                        "totalPrice": 4897.3795761079,
                        "totalProfit": 100000.32823788631
                    },
                    "30000000": {
                        "totalPrice": 7294.732724902216,
                        "totalProfit": 152331.98427418797
                    },
                    "50000000": {
                        "totalPrice": 11950.879396984925,
                        "totalProfit": 250897.71677736432
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
                        "totalPrice": 6.8895348837209305,
                        "totalProfit": 54.83476356976745
                    },
                    "2000000": {
                        "totalPrice": 14.223880597014926,
                        "totalProfit": 188.59794907462677
                    },
                    "5000000": {
                        "totalPrice": 34.39456754824875,
                        "totalProfit": 556.3250381845495
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
                        "totalPrice": 140.5,
                        "totalProfit": 3131.05932275
                    },
                    "3000000": {
                        "totalPrice": 189.0,
                        "totalProfit": 5590.974356083333
                    },
                    "5000000": {
                        "totalPrice": 323.36649214659684,
                        "totalProfit": 8417.606034213615
                    }
                }
            },
            {
                "id": "633565",
                "name": "암 주요치료비(연간1회한, 10년간)(암(유사암제외))",
                "theme": "기타",
                "confidence": 0.010643348762355486,
                "availableQuantities": [
                    1000000,
                    4000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 1475.4595469255664,
                        "totalProfit": 19992.184646391575
                    },
                    "4000000": {
                        "totalPrice": 5706.666666666667,
                        "totalProfit": 80527.67222244444
                    },
                    "5000000": {
                        "totalPrice": 7105.272727272727,
                        "totalProfit": 96728.31650741205
                    },
                    "10000000": {
                        "totalPrice": 13969.713855421687,
                        "totalProfit": 189005.98100219463
                    },
                    "20000000": {
                        "totalPrice": 28983.95348837209,
                        "totalProfit": 392231.97927450016
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
                        "totalPrice": 3244.794520547945,
                        "totalProfit": 71776.07816439727
                    },
                    "10000000": {
                        "totalPrice": 6368.2908483075635,
                        "totalProfit": 142587.67768278712
                    },
                    "20000000": {
                        "totalPrice": 11878.280329799765,
                        "totalProfit": 274066.31802372844
                    },
                    "30000000": {
                        "totalPrice": 16678.6328125,
                        "totalProfit": 325077.70516840345
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
                        "totalPrice": 778.1132075471698,
                        "totalProfit": 19394.753405173575
                    },
                    "6000000": {
                        "totalPrice": 914.4,
                        "totalProfit": 24693.03620588
                    },
                    "10000000": {
                        "totalPrice": 1503.538812785388,
                        "totalProfit": 41199.58251378243
                    },
                    "20000000": {
                        "totalPrice": 3078.7165775401068,
                        "totalProfit": 84272.1537695144
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
                        "totalPrice": 64.66988210075027,
                        "totalProfit": 1105.209018366953
                    },
                    "300000": {
                        "totalPrice": 97.71232876712328,
                        "totalProfit": 1627.7000793082184
                    },
                    "500000": {
                        "totalPrice": 166.00357142857143,
                        "totalProfit": 2761.8277497619065
                    }
                }
            },
            {
                "id": "611166",
                "name": "운전자용 교통상해후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.003446201459656857,
                "availableQuantities": [
                    20000000,
                    30000000,
                    50000000,
                    70000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "20000000": {
                        "totalPrice": 240.0,
                        "totalProfit": 11009.75886875
                    },
                    "30000000": {
                        "totalPrice": 360.0,
                        "totalProfit": 16696.49911871429
                    },
                    "50000000": {
                        "totalPrice": 615.6862745098039,
                        "totalProfit": 30706.279231176464
                    },
                    "70000000": {
                        "totalPrice": 840.0,
                        "totalProfit": 43660.51642109092
                    },
                    "100000000": {
                        "totalPrice": 1200.0,
                        "totalProfit": 66108.11673864102
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
                        "totalPrice": 666.9941176470588,
                        "totalProfit": 10265.008044005888
                    },
                    "20000": {
                        "totalPrice": 1256.7851690294438,
                        "totalProfit": 22275.444409722713
                    },
                    "30000": {
                        "totalPrice": 1930.58215010142,
                        "totalProfit": 23705.033360476667
                    },
                    "40000": {
                        "totalPrice": 2536.5641025641025,
                        "totalProfit": 1122.8560779102606
                    },
                    "50000": {
                        "totalPrice": 3180.4605263157896,
                        "totalProfit": -11289.007503480265
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
                        "totalPrice": 473.6842105263158,
                        "totalProfit": 13786.829620026314
                    },
                    "70000": {
                        "totalPrice": 566.4856230031949,
                        "totalProfit": 7475.366942662137
                    }
                }
            },
            {
                "id": "633737",
                "name": "종합병원 2대질환 주요치료비(본인부담금 1백만원이상, 최대3천만원)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.008283067009694686,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 638.5224358974359,
                        "totalProfit": -2396.711731929487
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
                        "totalPrice": 188.6601941747573,
                        "totalProfit": 876.3718148235291
                    },
                    "300000": {
                        "totalPrice": 250.33177570093457,
                        "totalProfit": 1830.912951780374
                    },
                    "400000": {
                        "totalPrice": 342.44444444444446,
                        "totalProfit": 4044.2889120138902
                    },
                    "500000": {
                        "totalPrice": 410.8449220396123,
                        "totalProfit": 871.2043924312819
                    },
                    "1000000": {
                        "totalPrice": 810.0,
                        "totalProfit": 8697.1732055
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
                        "totalPrice": 283.2098765432099,
                        "totalProfit": 2198.9429762839504
                    },
                    "1000000": {
                        "totalPrice": 603.9078947368421,
                        "totalProfit": 5220.801123914362
                    },
                    "2000000": {
                        "totalPrice": 1216.1480466072653,
                        "totalProfit": 7487.217911965728
                    },
                    "3000000": {
                        "totalPrice": 1700.4310344827586,
                        "totalProfit": 10567.379130551724
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "3000000": {
                        "totalPrice": 1844.3076923076924,
                        "totalProfit": 37048.58925146154
                    },
                    "5000000": {
                        "totalPrice": 3089.722222222222,
                        "totalProfit": 58940.293804972214
                    },
                    "10000000": {
                        "totalPrice": 5712.5,
                        "totalProfit": 112794.37700183333
                    },
                    "15000000": {
                        "totalPrice": 7890.0,
                        "totalProfit": 163096.27463
                    }
                }
            },
            {
                "id": "633571",
                "name": "종합병원 암 주요치료비(본인부담금 4,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 1102.7701674277016,
                        "totalProfit": 1239.7094467433353
                    }
                }
            },
            {
                "id": "633572",
                "name": "종합병원 암 주요치료비(본인부담금 5,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 769.9543378995434,
                        "totalProfit": 768.6666491386139
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
                        "totalPrice": 867.0878048780488,
                        "totalProfit": 17502.2049840878
                    },
                    "500000": {
                        "totalPrice": 1471.706471494607,
                        "totalProfit": 30173.190809677195
                    },
                    "1000000": {
                        "totalPrice": 2903.3817126269955,
                        "totalProfit": 57462.15898392742
                    },
                    "2000000": {
                        "totalPrice": 5812.617611580217,
                        "totalProfit": 115919.22031772978
                    }
                }
            },
            {
                "id": "633720",
                "name": "통합포인트 대상 질병진단비((B2) 통합포인트 대상 순환계질환(2종)진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 91.8778190122752,
                        "totalProfit": 3300.1426996162186
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
                        "totalPrice": 111.08108108108108,
                        "totalProfit": 10903.2600335946
                    },
                    "30000000": {
                        "totalPrice": 325.21276595744683,
                        "totalProfit": 33010.71956459575
                    },
                    "50000000": {
                        "totalPrice": 544.3717277486911,
                        "totalProfit": 66811.30802392281
                    },
                    "70000000": {
                        "totalPrice": 773.7142857142857,
                        "totalProfit": 94373.08058804082
                    },
                    "100000000": {
                        "totalPrice": 1075.8815232722143,
                        "totalProfit": 131301.34825305204
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
                        "totalPrice": 6.194915254237288,
                        "totalProfit": -783.7636827372876
                    },
                    "5000000": {
                        "totalPrice": 10.480519480519481,
                        "totalProfit": -1028.4780928051946
                    },
                    "10000000": {
                        "totalPrice": 19.82931472081218,
                        "totalProfit": -2550.9559743974605
                    }
                }
            },
            {
                "id": "611165",
                "name": "비운전자용 교통상해사망",
                "theme": "사망후유",
                "confidence": 0.0007951922692605428,
                "availableQuantities": [
                    10000000,
                    30000000,
                    50000000,
                    100000000,
                    200000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 160.0,
                        "totalProfit": 8575.68553075
                    },
                    "30000000": {
                        "totalPrice": 480.0,
                        "totalProfit": 24249.57031477778
                    },
                    "50000000": {
                        "totalPrice": 800.0,
                        "totalProfit": 39771.90862613158
                    },
                    "100000000": {
                        "totalPrice": 1600.0,
                        "totalProfit": 79857.2304154762
                    },
                    "200000000": {
                        "totalPrice": 3200.0,
                        "totalProfit": 145015.613184
                    }
                }
            },
            {
                "id": "633710",
                "name": "통합포인트 대상 질병진단비((A2) 기타피부암진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    200000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 1.0,
                        "totalProfit": -43.496399860365514
                    }
                }
            },
            {
                "id": "633568",
                "name": "종합병원 암 주요치료비(본인부담금 1,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 2593.302891933029,
                        "totalProfit": 3085.202657912414
                    }
                }
            },
            {
                "id": "633723",
                "name": "통합포인트 대상 질병진단비((B5) 통합포인트 대상 순환계질환(5종)진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 14.132743362831858,
                        "totalProfit": 741.0844577598518
                    }
                }
            },
            {
                "id": "620945",
                "name": "교통사고 처리지원금(Ⅲ)(중대법규위반,6주미만)",
                "theme": "운전/비용",
                "confidence": 0.015840175172149973,
                "availableQuantities": [
                    5000000,
                    7000000,
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 765.0,
                        "totalProfit": 27294.696059
                    },
                    "7000000": {
                        "totalPrice": 863.0,
                        "totalProfit": 51816.41714775
                    },
                    "10000000": {
                        "totalPrice": 1101.0,
                        "totalProfit": 50354.842477638886
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
                        "totalPrice": 49.33540372670807,
                        "totalProfit": -166.6478320931677
                    },
                    "200000": {
                        "totalPrice": 94.66717499046892,
                        "totalProfit": -638.1295379958027
                    },
                    "500000": {
                        "totalPrice": 170.0,
                        "totalProfit": 370.536837
                    }
                }
            },
            {
                "id": "633573",
                "name": "종합병원 암 주요치료비(본인부담금 6,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 605.5479452054794,
                        "totalProfit": 690.1612414729628
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
                        "totalPrice": 459.42028985507244,
                        "totalProfit": 9254.596116801935
                    },
                    "300000": {
                        "totalPrice": 649.0228471001758,
                        "totalProfit": 14114.705691155428
                    }
                }
            },
            {
                "id": "633386",
                "name": "전이암진단비(림프절전이암진단비)(면책기간미적용)",
                "theme": "3대진단",
                "confidence": 0.035773410039180976,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 1396.8181818181818,
                        "totalProfit": 19808.995774272727
                    },
                    "10000000": {
                        "totalPrice": 2436.4,
                        "totalProfit": 34426.78124136
                    },
                    "20000000": {
                        "totalPrice": 4007.6190476190477,
                        "totalProfit": 44811.55510980952
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
                        "totalPrice": 1960.638961038961,
                        "totalProfit": 55712.40134442594
                    },
                    "300000": {
                        "totalPrice": 2849.0262891809907,
                        "totalProfit": 85491.4769067078
                    },
                    "500000": {
                        "totalPrice": 4742.876712328767,
                        "totalProfit": 133865.3215397613
                    },
                    "800000": {
                        "totalPrice": 7521.564245810056,
                        "totalProfit": 169571.24110313403
                    },
                    "1000000": {
                        "totalPrice": 9784.242424242424,
                        "totalProfit": 211083.57394916742
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
                        "totalPrice": 1642.0,
                        "totalProfit": 52084.96165975758
                    },
                    "5000000": {
                        "totalPrice": 2880.6761006289307,
                        "totalProfit": 81127.08320912578
                    },
                    "10000000": {
                        "totalPrice": 5568.490304709141,
                        "totalProfit": 163370.64999926215
                    },
                    "20000000": {
                        "totalPrice": 11520.46511627907,
                        "totalProfit": 327702.3168493396
                    },
                    "30000000": {
                        "totalPrice": 13836.818181818182,
                        "totalProfit": 478058.0279674545
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
                        "totalPrice": 136.22222222222223,
                        "totalProfit": 304.92544055555555
                    },
                    "200000": {
                        "totalPrice": 265.92179863147607,
                        "totalProfit": 1754.2471857474748
                    }
                }
            },
            {
                "id": "633570",
                "name": "종합병원 암 주요치료비(본인부담금 3,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 1501.03500761035,
                        "totalProfit": 1693.8696971226216
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
                        "totalPrice": 369.8048780487805,
                        "totalProfit": 11586.171845817082
                    },
                    "100000": {
                        "totalPrice": 1697.7777777777778,
                        "totalProfit": 74993.12589166667
                    },
                    "150000": {
                        "totalPrice": 1989.8446069469835,
                        "totalProfit": 77351.26106851193
                    },
                    "200000": {
                        "totalPrice": 2990.0,
                        "totalProfit": 93548.324185
                    }
                }
            },
            {
                "id": "611164",
                "name": "운전자용 교통상해사망",
                "theme": "사망후유",
                "confidence": 0.014179649206547327,
                "availableQuantities": [
                    1000000,
                    10000000,
                    30000000,
                    50000000,
                    100000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 22.0,
                        "totalProfit": 1029.85382525
                    },
                    "10000000": {
                        "totalPrice": 220.0,
                        "totalProfit": 10417.942080583332
                    },
                    "30000000": {
                        "totalPrice": 660.0,
                        "totalProfit": 34062.91273842855
                    },
                    "50000000": {
                        "totalPrice": 1110.0,
                        "totalProfit": 50619.661961903235
                    },
                    "100000000": {
                        "totalPrice": 2234.9514563106795,
                        "totalProfit": 110659.26001067959
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
                        "totalPrice": 302.30434782608694,
                        "totalProfit": 8434.966846556523
                    },
                    "1000000": {
                        "totalPrice": 568.2456140350877,
                        "totalProfit": 15890.430501432402
                    },
                    "3000000": {
                        "totalPrice": 1679.4285714285713,
                        "totalProfit": 45776.534057752375
                    },
                    "5000000": {
                        "totalPrice": 2791.699604743083,
                        "totalProfit": 78549.90275007526
                    },
                    "10000000": {
                        "totalPrice": 5770.856610800745,
                        "totalProfit": 162035.79491765183
                    }
                }
            },
            {
                "id": "633124",
                "name": "간병인사용 질병입원일당(1일이상 180일한도)(요양병원)(체증형)",
                "theme": "입원일당",
                "confidence": 0.004547144246103414,
                "availableQuantities": [
                    10000,
                    20000,
                    50000
                ],
                "recommendedQuantity": 50000,
                "priceAndProfitByQuantity": {
                    "10000": {
                        "totalPrice": 343.57142857142856,
                        "totalProfit": 15014.230132428575
                    },
                    "20000": {
                        "totalPrice": 1135.4444444444443,
                        "totalProfit": 28813.885255833335
                    },
                    "50000": {
                        "totalPrice": 2433.069306930693,
                        "totalProfit": 75579.85455013368
                    }
                }
            },
            {
                "id": "632652",
                "name": "기계적혈전제거술(카테터법)치료비Ⅱ(뇌졸중)(급여, 연간1회한)",
                "theme": "기타",
                "confidence": 0.15197844223405527,
                "availableQuantities": [
                    3000000,
                    5000000
                ],
                "recommendedQuantity": 5000000,
                "priceAndProfitByQuantity": {
                    "3000000": {
                        "totalPrice": 98.71412924424973,
                        "totalProfit": 2226.5144196944148
                    },
                    "5000000": {
                        "totalPrice": 164.19699727024567,
                        "totalProfit": 3828.820750748407
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
                        "totalPrice": 62.67857142857143,
                        "totalProfit": -946.0976738273814
                    },
                    "200000": {
                        "totalPrice": 123.20136518771331,
                        "totalProfit": -17932.62208659624
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
                        "totalPrice": 34.42307692307692,
                        "totalProfit": -516.5908221923078
                    },
                    "1000000": {
                        "totalPrice": 81.73027989821882,
                        "totalProfit": -725.2256033918576
                    },
                    "2000000": {
                        "totalPrice": 162.74056029232642,
                        "totalProfit": -2349.9947029987807
                    }
                }
            },
            {
                "id": "610781",
                "name": "일반상해후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.026538492259719253,
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
                        "totalPrice": 400.0719424460432,
                        "totalProfit": 10818.27757125899
                    },
                    "20000000": {
                        "totalPrice": 1009.6629213483146,
                        "totalProfit": 23934.500247134823
                    },
                    "30000000": {
                        "totalPrice": 1246.9014084507041,
                        "totalProfit": 33987.75535079344
                    },
                    "50000000": {
                        "totalPrice": 1893.4915773353753,
                        "totalProfit": 53039.75336355783
                    },
                    "100000000": {
                        "totalPrice": 3500.853970964987,
                        "totalProfit": 102903.27391390936
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
                        "totalPrice": 848.9565217391304,
                        "totalProfit": 20206.544306782605
                    },
                    "20000": {
                        "totalPrice": 1732.4756944444443,
                        "totalProfit": 39848.40243763543
                    },
                    "30000": {
                        "totalPrice": 2299.3826086956524,
                        "totalProfit": 46965.673759295656
                    },
                    "50000": {
                        "totalPrice": 3996.211656441718,
                        "totalProfit": 34362.981773131905
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
                        "totalPrice": 92.5,
                        "totalProfit": 601.61647675
                    },
                    "2000000": {
                        "totalPrice": 226.45833333333334,
                        "totalProfit": 2699.9603525252965
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
                        "totalPrice": 102.53771929824562,
                        "totalProfit": 987.8214562745616
                    },
                    "1000000": {
                        "totalPrice": 342.4549180327869,
                        "totalProfit": 3092.2607812267743
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
                        "totalPrice": 590.7407407407408,
                        "totalProfit": 23041.13897785185
                    },
                    "2000000": {
                        "totalPrice": 1222.1052631578948,
                        "totalProfit": 43984.08266600002
                    },
                    "3000000": {
                        "totalPrice": 1779.8181818181818,
                        "totalProfit": 36546.65054836364
                    },
                    "5000000": {
                        "totalPrice": 3362.1582733812947,
                        "totalProfit": -4524.6521644877685
                    }
                }
            },
            {
                "id": "633715",
                "name": "통합포인트 대상 질병진단비((A7) 다발경화증진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    2000000
                ],
                "recommendedQuantity": 2000000,
                "priceAndProfitByQuantity": {
                    "2000000": {
                        "totalPrice": 1.2509814918676387,
                        "totalProfit": -25.517378301823285
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
                        "totalPrice": 238.46376811594203,
                        "totalProfit": -16700.892025724643
                    },
                    "300000": {
                        "totalPrice": 350.8422807602534,
                        "totalProfit": -22867.966447252405
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
                        "totalPrice": 5.390946502057613,
                        "totalProfit": 457.82158163374504
                    },
                    "20000": {
                        "totalPrice": 6.591194968553459,
                        "totalProfit": 633.336382371069
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
                        "totalPrice": 284.7837837837838,
                        "totalProfit": 14864.673352333331
                    },
                    "100000": {
                        "totalPrice": 539.4756554307116,
                        "totalProfit": 28860.460673344573
                    },
                    "200000": {
                        "totalPrice": 1207.837837837838,
                        "totalProfit": 59085.6397855045
                    },
                    "300000": {
                        "totalPrice": 1700.4878048780488,
                        "totalProfit": 77244.16391917072
                    },
                    "500000": {
                        "totalPrice": 3328.0,
                        "totalProfit": 155360.21804334
                    }
                }
            },
            {
                "id": "620952",
                "name": "운전자용 벌금(Ⅱ)",
                "theme": "운전/비용",
                "confidence": 0.016716413772310656,
                "availableQuantities": [
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 223.0,
                        "totalProfit": 6011.77582806799
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
                        "totalPrice": 60.0,
                        "totalProfit": 8603.116255
                    },
                    "30000000": {
                        "totalPrice": 148.0,
                        "totalProfit": 37110.327275133335
                    },
                    "50000000": {
                        "totalPrice": 251.2987012987013,
                        "totalProfit": 56941.16070755193
                    },
                    "70000000": {
                        "totalPrice": 280.0,
                        "totalProfit": 96773.63292462498
                    },
                    "100000000": {
                        "totalPrice": 463.716814159292,
                        "totalProfit": 113250.08872384072
                    }
                }
            },
            {
                "id": "633569",
                "name": "종합병원 암 주요치료비(본인부담금 2,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 2266.963470319635,
                        "totalProfit": 2781.3003475567402
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
                        "totalPrice": 6.059523809523809,
                        "totalProfit": 142.72790008333334
                    },
                    "200000": {
                        "totalPrice": 11.119496855345911,
                        "totalProfit": 295.1798830766382
                    }
                }
            },
            {
                "id": "633123",
                "name": "간병인사용 질병입원일당(1일이상 180일한도)(요양병원제외)(체증형)",
                "theme": "입원일당",
                "confidence": 0.004547144246103414,
                "availableQuantities": [
                    30000,
                    100000,
                    150000,
                    200000
                ],
                "recommendedQuantity": 150000,
                "priceAndProfitByQuantity": {
                    "30000": {
                        "totalPrice": 1368.3333333333333,
                        "totalProfit": 15943.956360888891
                    },
                    "100000": {
                        "totalPrice": 4540.0,
                        "totalProfit": 158758.893154
                    },
                    "150000": {
                        "totalPrice": 5967.703349282297,
                        "totalProfit": 212728.72391145455
                    },
                    "200000": {
                        "totalPrice": 8416.666666666666,
                        "totalProfit": 223865.58341483332
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
                        "totalPrice": 43.57142857142857,
                        "totalProfit": 1225.9839947172038
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
                        "totalPrice": 385.0,
                        "totalProfit": -488.87751149999997
                    },
                    "1000000": {
                        "totalPrice": 1023.0441898527005,
                        "totalProfit": 8305.370240669396
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
                        "totalPrice": 2.2222222222222223,
                        "totalProfit": 30.451883111111115
                    },
                    "150000": {
                        "totalPrice": 6.396021699819168,
                        "totalProfit": 173.3867875605787
                    }
                }
            },
            {
                "id": "632343",
                "name": "통합암진단비(유사암제외)(4대고액암진단비)",
                "theme": "3대진단",
                "confidence": 0.14795520817304483,
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
                        "totalPrice": 88.53472222222223,
                        "totalProfit": 1583.3065235347221
                    },
                    "10000000": {
                        "totalPrice": 806.4553314121038,
                        "totalProfit": 16106.483456118145
                    },
                    "20000000": {
                        "totalPrice": 1407.716535433071,
                        "totalProfit": 29789.443361344493
                    },
                    "30000000": {
                        "totalPrice": 2098.981723237598,
                        "totalProfit": 45296.09609812026
                    },
                    "50000000": {
                        "totalPrice": 3452.561983471074,
                        "totalProfit": 74875.28676894048
                    }
                }
            },
            {
                "id": "633516",
                "name": "특정순환계질환 급여치료비(요양병원 제외)(본인부담금 1백만원이상)(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.06049420322591047,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 4124.822222222222,
                        "totalProfit": 62614.31402578221
                    }
                }
            },
            {
                "id": "633582",
                "name": "종합병원 암 주요치료비(본인부담금 1억5,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 300.2435312024353,
                        "totalProfit": 591.5078372261999
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
                        "totalPrice": 214.65777262180976,
                        "totalProfit": 1241.7688650436962
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
                        "totalPrice": 1826.1928934010152,
                        "totalProfit": 44318.44472112689
                    },
                    "200000": {
                        "totalPrice": 3484.1793434747797,
                        "totalProfit": 90535.553522867
                    },
                    "300000": {
                        "totalPrice": 5292.509363295881,
                        "totalProfit": 136768.51216662108
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
                        "totalPrice": 253.52173913043478,
                        "totalProfit": 7060.776607321742
                    },
                    "1000000": {
                        "totalPrice": 477.444976076555,
                        "totalProfit": 13351.507331146415
                    },
                    "2000000": {
                        "totalPrice": 921.6666666666666,
                        "totalProfit": 26622.125129333344
                    },
                    "3000000": {
                        "totalPrice": 1369.7826086956522,
                        "totalProfit": 40462.009924949074
                    },
                    "5000000": {
                        "totalPrice": 2414.8336727766464,
                        "totalProfit": 67738.65491162051
                    }
                }
            },
            {
                "id": "631443",
                "name": "암직접치료통원일당(상급종합병원)",
                "theme": "입원일당",
                "confidence": 0.0666722186287558,
                "availableQuantities": [
                    50000,
                    100000,
                    200000,
                    300000,
                    600000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "50000": {
                        "totalPrice": 1734.5454545454545,
                        "totalProfit": 54861.25436446154
                    },
                    "100000": {
                        "totalPrice": 3528.5840707964603,
                        "totalProfit": 109790.88009802425
                    },
                    "200000": {
                        "totalPrice": 7352.156862745098,
                        "totalProfit": 216907.19897805888
                    },
                    "300000": {
                        "totalPrice": 11382.0,
                        "totalProfit": 311469.26589354995
                    },
                    "600000": {
                        "totalPrice": 24670.909090909092,
                        "totalProfit": 726086.7859016364
                    }
                }
            },
            {
                "id": "633579",
                "name": "종합병원 암 주요치료비(본인부담금 1억2,000만원이상)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.009312853785212185,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 315.7838660578387,
                        "totalProfit": 593.8524926153843
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
                        "totalPrice": 1938.937823834197,
                        "totalProfit": 56455.62580293263
                    },
                    "20000": {
                        "totalPrice": 3747.973451327434,
                        "totalProfit": 104634.67331691692
                    },
                    "30000": {
                        "totalPrice": 5556.553246753247,
                        "totalProfit": 144426.49209992983
                    },
                    "40000": {
                        "totalPrice": 7371.377777777778,
                        "totalProfit": 43051.32083333334
                    },
                    "50000": {
                        "totalPrice": 9341.86507936508,
                        "totalProfit": 158682.48312808733
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
                        "totalPrice": 1894.547477744807,
                        "totalProfit": 25384.73731374035
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
                        "totalPrice": 122.47404063205417,
                        "totalProfit": 928.0670925191876
                    },
                    "5000000": {
                        "totalPrice": 305.6611570247934,
                        "totalProfit": 2656.2968688595042
                    },
                    "10000000": {
                        "totalPrice": 578.2304526748972,
                        "totalProfit": 3207.33135993266
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
                        "totalPrice": 199.81132075471697,
                        "totalProfit": 33339.1632645283
                    },
                    "30000000": {
                        "totalPrice": 552.8571428571429,
                        "totalProfit": 100993.29971992857
                    },
                    "50000000": {
                        "totalPrice": 1045.6896551724137,
                        "totalProfit": 176173.0424280689
                    },
                    "70000000": {
                        "totalPrice": 1331.0144927536232,
                        "totalProfit": 275568.8404509275
                    },
                    "100000000": {
                        "totalPrice": 1897.4683544303798,
                        "totalProfit": 335738.9337919179
                    }
                }
            },
            {
                "id": "632481",
                "name": "전이암진단비(특정전이암진단비)",
                "theme": "3대진단",
                "confidence": 0.053270013073044346,
                "availableQuantities": [
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "5000000": {
                        "totalPrice": 2125.714285714286,
                        "totalProfit": 41886.175325357144
                    },
                    "10000000": {
                        "totalPrice": 4340.495552731893,
                        "totalProfit": 90873.59925247521
                    },
                    "20000000": {
                        "totalPrice": 9032.189349112426,
                        "totalProfit": 180871.9137239349
                    }
                }
            },
            {
                "id": "632340",
                "name": "통합암진단비(유사암제외)(특정소화기암진단비)",
                "theme": "3대진단",
                "confidence": 0.14795520817304483,
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
                        "totalPrice": 430.10884353741494,
                        "totalProfit": 7511.0325283741495
                    },
                    "10000000": {
                        "totalPrice": 3982.474431818182,
                        "totalProfit": 74616.43963869031
                    },
                    "20000000": {
                        "totalPrice": 7079.498084291187,
                        "totalProfit": 138431.1056126494
                    },
                    "30000000": {
                        "totalPrice": 10539.971502590673,
                        "totalProfit": 211069.2374037887
                    },
                    "50000000": {
                        "totalPrice": 17222.267002518893,
                        "totalProfit": 345842.3540203267
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
                        "totalPrice": 3840.097087378641,
                        "totalProfit": 119695.29725099025
                    },
                    "20000000": {
                        "totalPrice": 7523.5,
                        "totalProfit": 243326.59275288496
                    },
                    "30000000": {
                        "totalPrice": 11351.973094170404,
                        "totalProfit": 362963.4533317894
                    },
                    "50000000": {
                        "totalPrice": 18670.634920634922,
                        "totalProfit": 620258.3356842224
                    },
                    "100000000": {
                        "totalPrice": 44817.391304347824,
                        "totalProfit": 1128034.3410342606
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
                        "totalPrice": 83.25,
                        "totalProfit": -521.7714930714286
                    },
                    "200000": {
                        "totalPrice": 162.68765371372356,
                        "totalProfit": -1591.4918965700938
                    },
                    "300000": {
                        "totalPrice": 241.84450923226433,
                        "totalProfit": -2662.1791672944596
                    }
                }
            },
            {
                "id": "633713",
                "name": "통합포인트 대상 질병진단비((A5) 제자리암진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 1.0,
                        "totalProfit": 3.359546850371218
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
                        "totalPrice": 449.52777777777777,
                        "totalProfit": -31653.41393402223
                    },
                    "1000000": {
                        "totalPrice": 887.0621468926554,
                        "totalProfit": -65548.96770477195
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
                        "totalPrice": 269.8826750097771,
                        "totalProfit": 4995.433058058664
                    }
                }
            },
            {
                "id": "620967",
                "name": "교통사고 처리지원금(Ⅵ)",
                "theme": "운전/비용",
                "confidence": 0.0010432429259065001,
                "availableQuantities": [
                    100000000,
                    150000000,
                    200000000
                ],
                "recommendedQuantity": 200000000,
                "priceAndProfitByQuantity": {
                    "100000000": {
                        "totalPrice": 1486.0,
                        "totalProfit": 12429.839322266665
                    },
                    "150000000": {
                        "totalPrice": 1963.0,
                        "totalProfit": 35536.202419
                    },
                    "200000000": {
                        "totalPrice": 2320.0,
                        "totalProfit": 25472.08990316089
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
                        "totalPrice": 22.726377952755904,
                        "totalProfit": 218.82389358661428
                    },
                    "200000": {
                        "totalPrice": 40.0,
                        "totalProfit": 816.7789493
                    },
                    "300000": {
                        "totalPrice": 66.0,
                        "totalProfit": 1408.8257913999998
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
                        "totalPrice": 115.2903569525839,
                        "totalProfit": 3379.4376205831572
                    },
                    "30000000": {
                        "totalPrice": 160.54054054054055,
                        "totalProfit": 4917.367370554053
                    },
                    "50000000": {
                        "totalPrice": 290.41379310344826,
                        "totalProfit": 8491.469417677237
                    }
                }
            },
            {
                "id": "633566",
                "name": "암 주요치료비(연간1회한, 10년간)(기타피부암 및 갑상선암)",
                "theme": "기타",
                "confidence": 0.010643348762355486,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    4000000
                ],
                "recommendedQuantity": 4000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 90.27777777777777,
                        "totalProfit": -44.8098361419753
                    },
                    "2000000": {
                        "totalPrice": 165.81333333333333,
                        "totalProfit": -2.340094432432478
                    },
                    "3000000": {
                        "totalPrice": 271.95652173913044,
                        "totalProfit": -1230.6658199565215
                    },
                    "4000000": {
                        "totalPrice": 345.9029535864979,
                        "totalProfit": -195.3862719198312
                    }
                }
            },
            {
                "id": "631442",
                "name": "계속받는 항암방사선약물치료비(급여)(연간1회한)",
                "theme": "3대진단",
                "confidence": 0.18498115486781247,
                "availableQuantities": [
                    100000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 342.1108108108108,
                        "totalProfit": 13776.038711545045
                    },
                    "1000000": {
                        "totalPrice": 3822.1186440677966,
                        "totalProfit": 128190.66510908476
                    },
                    "2000000": {
                        "totalPrice": 7839.625,
                        "totalProfit": 265784.7962456875
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
                        "totalPrice": 834.1910331384015,
                        "totalProfit": 18615.70949922144
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
                        "totalPrice": 521.5434782608696,
                        "totalProfit": 18447.625094108695
                    },
                    "50000": {
                        "totalPrice": 862.444279346211,
                        "totalProfit": 25447.414324839527
                    },
                    "70000": {
                        "totalPrice": 1290.3863636363637,
                        "totalProfit": 24275.597728977275
                    },
                    "100000": {
                        "totalPrice": 1700.1538461538462,
                        "totalProfit": 34591.85268568204
                    },
                    "120000": {
                        "totalPrice": 2160.5454545454545,
                        "totalProfit": 35581.82105847728
                    }
                }
            },
            {
                "id": "633718",
                "name": "통합포인트 대상 질병진단비((A10) 심근병증진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 6.280902083928062,
                        "totalProfit": 196.2802411838949
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
                        "totalPrice": 411.5255474452555,
                        "totalProfit": -329.1958628759122
                    },
                    "200000": {
                        "totalPrice": 717.9125,
                        "totalProfit": 1706.7364900687505
                    },
                    "300000": {
                        "totalPrice": 1035.8058510638298,
                        "totalProfit": -309.0884995487588
                    },
                    "400000": {
                        "totalPrice": 1425.142857142857,
                        "totalProfit": -16675.910026000005
                    },
                    "500000": {
                        "totalPrice": 1893.2608695652175,
                        "totalProfit": -1119.1056514130428
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
                        "totalPrice": 205.71428571428572,
                        "totalProfit": 2312.594756
                    },
                    "10000000": {
                        "totalPrice": 2063.25,
                        "totalProfit": 24439.446748625003
                    },
                    "20000000": {
                        "totalPrice": 3723.6363636363635,
                        "totalProfit": 45427.292326999996
                    },
                    "30000000": {
                        "totalPrice": 4726.6,
                        "totalProfit": 20292.600318733337
                    },
                    "50000000": {
                        "totalPrice": 8025.625,
                        "totalProfit": 68300.67609651563
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
                        "totalPrice": 14.470588235294118,
                        "totalProfit": 26.76614492436974
                    },
                    "500000": {
                        "totalPrice": 24.577235772357724,
                        "totalProfit": 70.40202662717768
                    },
                    "1000000": {
                        "totalPrice": 48.69600725952813,
                        "totalProfit": 170.0921403284937
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
                        "totalPrice": 76.0,
                        "totalProfit": 2967.346397533334
                    },
                    "3000000": {
                        "totalPrice": 129.5121951219512,
                        "totalProfit": 4584.301555814813
                    },
                    "5000000": {
                        "totalPrice": 222.7051177904143,
                        "totalProfit": 7564.378824140594
                    }
                }
            },
            {
                "id": "633001",
                "name": "기타피부암 및 갑상선암 주요치료비(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.05630167864187206,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    4000000
                ],
                "recommendedQuantity": 4000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 76.86320754716981,
                        "totalProfit": 364.9021470283018
                    },
                    "2000000": {
                        "totalPrice": 157.23809523809524,
                        "totalProfit": 685.4081818809524
                    },
                    "3000000": {
                        "totalPrice": 245.76923076923077,
                        "totalProfit": 1431.9556703846154
                    },
                    "4000000": {
                        "totalPrice": 308.5417515274949,
                        "totalProfit": 1559.1565536788992
                    }
                }
            },
            {
                "id": "611313",
                "name": "간병인지원 일반상해입원일당(간호·간병통합서비스 사용추가보장)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.012041592086679487,
                "availableQuantities": [
                    70000
                ],
                "recommendedQuantity": 70000,
                "priceAndProfitByQuantity": {
                    "70000": {
                        "totalPrice": 238.96617915904935,
                        "totalProfit": 8824.216961080438
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
                        "totalPrice": 166.75473865594486,
                        "totalProfit": 2969.6847447155155
                    },
                    "7000000": {
                        "totalPrice": 218.875,
                        "totalProfit": 3906.721499767857
                    },
                    "10000000": {
                        "totalPrice": 320.88183421516754,
                        "totalProfit": 5942.283359132278
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
                        "totalPrice": 9.80952380952381,
                        "totalProfit": 244.27438747619047
                    },
                    "150000": {
                        "totalPrice": 32.98272552783109,
                        "totalProfit": 985.9638425854124
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
                        "totalPrice": 1416.8157894736842,
                        "totalProfit": -33011.1770661842
                    },
                    "200000": {
                        "totalPrice": 2562.191281373844,
                        "totalProfit": -76494.55211544545
                    },
                    "300000": {
                        "totalPrice": 3908.076923076923,
                        "totalProfit": -84042.66590715386
                    },
                    "500000": {
                        "totalPrice": 5283.333333333333,
                        "totalProfit": -321793.89632266667
                    },
                    "1000000": {
                        "totalPrice": 13570.0,
                        "totalProfit": -98594.3405488
                    }
                }
            },
            {
                "id": "631130",
                "name": "암수술비(유사암제외)",
                "theme": "수술",
                "confidence": 0.07589802920812318,
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
                        "totalPrice": 686.5,
                        "totalProfit": 6118.563061
                    },
                    "2000000": {
                        "totalPrice": 1157.12,
                        "totalProfit": 11328.77967996
                    },
                    "3000000": {
                        "totalPrice": 1751.7831325301204,
                        "totalProfit": 18357.873568361447
                    },
                    "5000000": {
                        "totalPrice": 2983.8203463203463,
                        "totalProfit": 34552.92358137444
                    },
                    "10000000": {
                        "totalPrice": 5689.282296650717,
                        "totalProfit": 63188.707903679395
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
                        "totalPrice": 88.21052631578948,
                        "totalProfit": -5952.277805526315
                    },
                    "2000000": {
                        "totalPrice": 180.24,
                        "totalProfit": -6375.631863180002
                    },
                    "3000000": {
                        "totalPrice": 257.9010989010989,
                        "totalProfit": -11509.508498934067
                    },
                    "5000000": {
                        "totalPrice": 434.2528735632184,
                        "totalProfit": -16218.985295812268
                    },
                    "10000000": {
                        "totalPrice": 837.3595505617977,
                        "totalProfit": -37851.581735792126
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
                        "totalPrice": 86.61290322580645,
                        "totalProfit": 13215.914223693551
                    },
                    "50000000": {
                        "totalPrice": 129.7195253505933,
                        "totalProfit": 22355.391916061497
                    },
                    "70000000": {
                        "totalPrice": 175.0,
                        "totalProfit": 32731.872749068192
                    },
                    "80000000": {
                        "totalPrice": 219.1304347826087,
                        "totalProfit": 34923.01638156522
                    },
                    "100000000": {
                        "totalPrice": 254.39900867410162,
                        "totalProfit": 45144.613641390366
                    }
                }
            },
            {
                "id": "633729",
                "name": "특정순환계질환 급여치료비(요양병원)(본인부담금 1백만원이상, 최대1천만원)(연간1회한, 10년간)",
                "theme": "기타",
                "confidence": 0.00868338122128663,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 914.5764023210832,
                        "totalProfit": 20026.14499381625
                    }
                }
            },
            {
                "id": "633717",
                "name": "통합포인트 대상 질병진단비((A9) 통합포인트 대상 순환계질환(1종)진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 2.319966348850252,
                        "totalProfit": 28.618686176718068
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
                        "totalPrice": 60.16393442622951,
                        "totalProfit": 11031.420706049179
                    },
                    "20000000": {
                        "totalPrice": 112.19600725952813,
                        "totalProfit": 20217.196058194193
                    },
                    "30000000": {
                        "totalPrice": 169.76190476190476,
                        "totalProfit": 29462.642171349216
                    },
                    "40000000": {
                        "totalPrice": 229.0537084398977,
                        "totalProfit": 43526.25429103921
                    }
                }
            },
            {
                "id": "633716",
                "name": "통합포인트 대상 질병진단비((A8) 뇌전증진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 20.16728518412789,
                        "totalProfit": 449.02249299200497
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
                        "totalPrice": 245.0,
                        "totalProfit": 1526.193764
                    },
                    "2000000": {
                        "totalPrice": 540.0,
                        "totalProfit": 4106.322775743843
                    }
                }
            },
            {
                "id": "633709",
                "name": "통합포인트 대상 질병진단비((A1) 특정패혈증진단비)",
                "theme": "기타",
                "confidence": 0.04891263040389547,
                "availableQuantities": [
                    100000
                ],
                "recommendedQuantity": 100000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 9.397373679703112,
                        "totalProfit": 335.1969852527129
                    }
                }
            },
            {
                "id": "630024",
                "name": "항암방사선약물치료비",
                "theme": "3대진단",
                "confidence": 0.06727435161596647,
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
                        "totalPrice": 667.1396648044692,
                        "totalProfit": 13206.918833039108
                    },
                    "5000000": {
                        "totalPrice": 1645.1426630434783,
                        "totalProfit": 33033.68621738093
                    },
                    "10000000": {
                        "totalPrice": 3196.9422310756972,
                        "totalProfit": 65048.277824702905
                    },
                    "20000000": {
                        "totalPrice": 6130.225563909775,
                        "totalProfit": 124879.84754239854
                    },
                    "30000000": {
                        "totalPrice": 9409.5,
                        "totalProfit": 189816.8206187563
                    }
                }
            },
            {
                "id": "620962",
                "name": "자동차사고 변호사선임비용(타인사망,중대법규위반및중상해경찰조사포함)_자가용운전자용",
                "theme": "운전/비용",
                "confidence": 0.0028897937706331713,
                "availableQuantities": [
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 312.0,
                        "totalProfit": 5318.141140266666
                    },
                    "50000000": {
                        "totalPrice": 499.0,
                        "totalProfit": 8198.887904769874
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
                        "totalPrice": 9.607843137254902,
                        "totalProfit": 200.27582790686262
                    },
                    "300000": {
                        "totalPrice": 15.005607476635515,
                        "totalProfit": 282.57923898224306
                    },
                    "400000": {
                        "totalPrice": 20.239467849223946,
                        "totalProfit": 424.9743476635255
                    },
                    "500000": {
                        "totalPrice": 24.06926406926407,
                        "totalProfit": 191.92121757575757
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
                        "totalPrice": 427.72727272727275,
                        "totalProfit": 11941.346082363638
                    },
                    "200000": {
                        "totalPrice": 783.2061068702291,
                        "totalProfit": 29218.22327596154
                    },
                    "300000": {
                        "totalPrice": 1210.0660338423443,
                        "totalProfit": 41560.820041062725
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
                        "totalPrice": 43.657548125633234,
                        "totalProfit": -3860.9359848267463
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
                        "totalPrice": 84.74975466143277,
                        "totalProfit": 2610.824349215898
                    },
                    "200000": {
                        "totalPrice": 147.5,
                        "totalProfit": 5898.975881124999
                    },
                    "300000": {
                        "totalPrice": 247.5,
                        "totalProfit": 8323.052278937499
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
                        "totalPrice": 180.27322404371586,
                        "totalProfit": 6117.377253117969
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
                        "totalPrice": 59.84375,
                        "totalProfit": 1907.84025259375
                    },
                    "10000000": {
                        "totalPrice": 105.6902356902357,
                        "totalProfit": 3886.485508690236
                    },
                    "20000000": {
                        "totalPrice": 212.67921146953404,
                        "totalProfit": 7444.276107774884
                    }
                }
            },
            {
                "id": "633235",
                "name": "간병인지원 질병입원일당(Ⅵ)(1일이상 180일한도)",
                "theme": "입원일당",
                "confidence": 0.006407418227116115,
                "availableQuantities": [
                    135200
                ],
                "recommendedQuantity": 135200,
                "priceAndProfitByQuantity": {
                    "135200": {
                        "totalPrice": 1014.5645161290323,
                        "totalProfit": 92766.11912570965
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "2500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "4000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "620932",
                "name": "20대가전제품 고장수리비용",
                "theme": "재물/배상",
                "confidence": 0.0005140312751747857,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "620974",
                "name": NaN,
                "theme": "운전/비용",
                "confidence": NaN,
                "availableQuantities": [
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "611338",
                "name": "일반상해입원 간병인비용지원(간병인비용 200만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0010670311968095714,
                "availableQuantities": [
                    200000,
                    300000,
                    400000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633236",
                "name": "간병인지원 질병입원일당(Ⅵ)(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.005180271939742943,
                "availableQuantities": [
                    135200
                ],
                "recommendedQuantity": 135200,
                "priceAndProfitByQuantity": {
                    "135200": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "611340",
                "name": "일반상해입원 간병인비용지원(간병인비용 500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00033250327011005715,
                "availableQuantities": [
                    400000,
                    1000000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633683",
                "name": "종합병원 암 주요치료비(본인부담금 8,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "620323",
                "name": "12대가전제품고장수리비용",
                "theme": "재물/배상",
                "confidence": 0.0004147309578679428,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "611312",
                "name": "간병인지원 일반상해입원일당(Ⅵ)(181일이상)(요양,정신,한방병원제외)",
                "theme": "입원일당",
                "confidence": 0.002671053251385043,
                "availableQuantities": [
                    135200
                ],
                "recommendedQuantity": 135200,
                "priceAndProfitByQuantity": {
                    "135200": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633687",
                "name": "종합병원 암 주요치료비(본인부담금 1억2,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "2500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "4000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633685",
                "name": "종합병원 암 주요치료비(본인부담금 1억원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "611337",
                "name": "일반상해입원 간병인비용지원(간병인비용 700만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0001222854086851143,
                "availableQuantities": [
                    600000,
                    1000000,
                    1500000,
                    2500000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "600000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "2500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "620973",
                "name": "교통사고 처리지원금(Ⅶ)",
                "theme": "운전/비용",
                "confidence": 0.0018907767148394286,
                "availableQuantities": [
                    100000000,
                    150000000,
                    200000000
                ],
                "recommendedQuantity": 200000000,
                "priceAndProfitByQuantity": {
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "150000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "200000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "600000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "3500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633673",
                "name": "암 주요치료비(연간1회한, 10년간)(암(유사암제외))(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.029814271962031434,
                "availableQuantities": [
                    1000000,
                    2000000,
                    5000000,
                    10000000,
                    20000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "20000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633678",
                "name": "종합병원 암 주요치료비(본인부담금 3,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "620983",
                "name": NaN,
                "theme": "운전/비용",
                "confidence": NaN,
                "availableQuantities": [
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633681",
                "name": "종합병원 암 주요치료비(본인부담금 6,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633690",
                "name": "종합병원 암 주요치료비(본인부담금 1억5,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "600000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633680",
                "name": "종합병원 암 주요치료비(본인부담금 5,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "620984",
                "name": NaN,
                "theme": "운전/비용",
                "confidence": NaN,
                "availableQuantities": [
                    200000000
                ],
                "recommendedQuantity": 200000000,
                "priceAndProfitByQuantity": {
                    "200000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "2500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633686",
                "name": "종합병원 암 주요치료비(본인부담금 1억1,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "600000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633674",
                "name": "암 주요치료비(연간1회한, 10년간)(기타피부암 및 갑상선암)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.029814271962031434,
                "availableQuantities": [
                    1000000,
                    2000000,
                    3000000,
                    4000000
                ],
                "recommendedQuantity": 4000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "4000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633003",
                "name": "종합병원 암 주요치료비(본인부담금 2천만원이상)(연간1회한, 5년간)",
                "theme": "기타",
                "confidence": 0.00044733159695667146,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633318",
                "name": "질병입원 간병인비용지원(간병인비용 1,500만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 8.650343503874181e-05,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633689",
                "name": "종합병원 암 주요치료비(본인부담금 1억4,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "5000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "6000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633677",
                "name": "종합병원 암 주요치료비(본인부담금 2,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "620982",
                "name": NaN,
                "theme": "운전/비용",
                "confidence": NaN,
                "availableQuantities": [
                    30000000
                ],
                "recommendedQuantity": 30000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633319",
                "name": "질병입원 간병인비용지원(간병인비용 2,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00010001457568404664,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633316",
                "name": "질병입원 간병인비용지원(간병인비용 700만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00010200306666862768,
                "availableQuantities": [
                    400000,
                    500000,
                    1000000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633679",
                "name": "종합병원 암 주요치료비(본인부담금 4,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "2500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "3000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "611341",
                "name": "일반상해입원 간병인비용지원(간병인비용 700만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 5.761188219787143e-05,
                "availableQuantities": [
                    400000,
                    500000
                ],
                "recommendedQuantity": 400000,
                "priceAndProfitByQuantity": {
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633676",
                "name": "종합병원 암 주요치료비(본인부담금 1,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633682",
                "name": "종합병원 암 주요치료비(본인부담금 7,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "620975",
                "name": NaN,
                "theme": "운전/비용",
                "confidence": NaN,
                "availableQuantities": [
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "690170",
                "name": NaN,
                "theme": "기타",
                "confidence": NaN,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "611336",
                "name": "일반상해입원 간병인비용지원(간병인비용 300만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0005748640953179715,
                "availableQuantities": [
                    300000,
                    400000,
                    500000,
                    1000000,
                    1500000
                ],
                "recommendedQuantity": 300000,
                "priceAndProfitByQuantity": {
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "400000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "600000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633317",
                "name": "질병입원 간병인비용지원(간병인비용 1,000만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.00010511874923662973,
                "availableQuantities": [
                    100000,
                    500000,
                    600000,
                    1000000,
                    2000000
                ],
                "recommendedQuantity": 600000,
                "priceAndProfitByQuantity": {
                    "100000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "600000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633117",
                "name": "질병입원 간병인비용지원(간병인비용 1,000만원 이상)(요양병원제외)",
                "theme": "입원일당",
                "confidence": 0.0028416435248375424,
                "availableQuantities": [
                    900000,
                    1000000,
                    1500000,
                    2000000
                ],
                "recommendedQuantity": 900000,
                "priceAndProfitByQuantity": {
                    "900000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633675",
                "name": "종합병원 암 주요치료비(본인부담금 500만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "620976",
                "name": NaN,
                "theme": "운전/비용",
                "confidence": NaN,
                "availableQuantities": [
                    30000000,
                    100000000,
                    150000000,
                    200000000
                ],
                "recommendedQuantity": 200000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "150000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "200000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "611167",
                "name": "비운전자용 교통상해후유장해(3~100%)",
                "theme": "사망후유",
                "confidence": 0.0005311645788821715,
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "70000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "100000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "611339",
                "name": "일반상해입원 간병인비용지원(간병인비용 300만원 이상)(간호·간병통합서비스 포함)",
                "theme": "입원일당",
                "confidence": 0.0001922019783555857,
                "availableQuantities": [
                    200000,
                    300000
                ],
                "recommendedQuantity": 200000,
                "priceAndProfitByQuantity": {
                    "200000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "620947",
                "name": "자동차사고 변호사선임비용(타인사망,중대법규위반및중상해경찰조사포함)_자가용운전자용",
                "theme": "운전/비용",
                "confidence": 0.015739108825547042,
                "availableQuantities": [
                    30000000,
                    50000000
                ],
                "recommendedQuantity": 50000000,
                "priceAndProfitByQuantity": {
                    "30000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "50000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633688",
                "name": "종합병원 암 주요치료비(본인부담금 1억3,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "2000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "620931",
                "name": "신8대가전제품 고장수리비용",
                "theme": "재물/배상",
                "confidence": 1.796422991853695e-05,
                "availableQuantities": [
                    1000000
                ],
                "recommendedQuantity": 1000000,
                "priceAndProfitByQuantity": {
                    "1000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            },
            {
                "id": "633684",
                "name": "종합병원 암 주요치료비(본인부담금 9,000만원이상)(연간1회한, 10년간)(면책기간미적용)",
                "theme": "기타",
                "confidence": 0.02943260612330238,
                "availableQuantities": [
                    10000000
                ],
                "recommendedQuantity": 10000000,
                "priceAndProfitByQuantity": {
                    "10000000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
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
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "300000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    },
                    "500000": {
                        "totalPrice": 0.0,
                        "totalProfit": 0.0
                    }
                }
            }
        ]
    }
};
