import React, {useEffect, useState} from 'react';
import '../css/Main.css'
import MC from "../components/MC";
import male from '../assets/img/vectors/male.png'
import maleBody from '../assets/img/vectors/male-body.png'
import maleFullBody from '../assets/img/vectors/male-full-body.png'


const Male = () => {
    let [currentPart, setPart] = useState(0)

    let vectors = [
        {
            vector: male,
            size: {
                x: 150,
                y: 300
            }
        }, {
            vector: maleBody,
            size: {
                x: 200,
                y: 325
            }
        }, {
            vector: maleFullBody,
            size: {
                x: 105,
                y: 373
            }
        },

    ]


    useEffect(() => {

    }, [currentPart])
    let choices = [
        [
            [
                {
                    name: 'خط پیشانی',
                    vectorX: 20,
                    vectorY: 240,
                    leftOffset: 6
                },
                {
                    name: 'خط   اخم',
                    vectorX: 30,
                    vectorY: 220,
                    leftOffset: 6
                },
                {
                    name: 'نیاز به آب رسان',
                    vectorX: 60,
                    vectorY: 235,
                    leftOffset: 6
                },
                {
                    name: 'نیاز به نرم کننده',
                    vectorX: 70,
                    vectorY: 230,
                    leftOffset: 6
                },
                {
                    name: 'خط گوشه چشم',
                    vectorX: 70,
                    vectorY: 200,
                    leftOffset: 6
                },
                {
                    name: 'منافز باز',
                    vectorX: 80,
                    vectorY: 170,
                    leftOffset: 6
                }
            ],


            [
                {
                    name: 'فرو رفتگی پوست',
                    vectorX: 40,
                    vectorY: 250,
                    leftOffset: 6
                },
                {
                    name: 'جای جوش',
                    vectorX: 65,
                    vectorY: 260,
                    leftOffset: 6
                },
                {
                    name: 'خالی شدن ابرو',
                    vectorX: 50,
                    vectorY: 225,
                    leftOffset: 6
                },
                {
                    name: 'لک و کک و مک',
                    vectorX: 10,
                    vectorY: 175,
                    leftOffset: 6
                },
                {
                    name: 'پاکسازی صورت',
                    vectorX: 65,
                    vectorY: 175,
                    leftOffset: 6
                },
                {
                    name: 'جوش سر سیاه',
                    vectorX: 50,
                    vectorY: 140,
                    leftOffset: 6
                }
            ],


            [
                {
                    name: 'حساسیت بعد از اصلاح',
                    vectorX: 20,
                    vectorY: 300,
                    leftOffset: 6
                },
                {
                    name: 'جوش سر سفید',
                    vectorX: 30,
                    vectorY: 250,
                    leftOffset: 6
                },
                {
                    name: 'جوش التهابی',
                    vectorX: 50,
                    vectorY: 235,
                    leftOffset: 6
                },
                {
                    name: 'خط پشت لب',
                    vectorX: 30,
                    vectorY: 155,
                    leftOffset: 6
                },
                {
                    name: 'خط لبخند',
                    vectorX: 40,
                    vectorY: 150,
                    leftOffset: 6
                },
                {
                    name: 'افتادگی پوست و غبغب',
                    vectorX: 80,
                    vectorY: 170,
                    leftOffset: 6
                }
            ],


            [
                {
                    name: 'تیرگی زیر چشم',
                    vectorX: 50,
                    vectorY: 200,
                    leftOffset: 6
                },
                {
                    name: 'کوپروز',
                    vectorX: 35,
                    vectorY: 225,
                    leftOffset: 6
                },
                {
                    name: 'پف زیر چشم',
                    vectorX: 75,
                    vectorY: 200,
                    leftOffset: 6
                },
                {
                    name: 'اگزما',
                    vectorX: 40,
                    vectorY: 225,
                    leftOffset: 6
                },
                {
                    name: 'شل شدن پوست',
                    vectorX: 70,
                    vectorY: 200,
                    leftOffset: 6
                },
                {
                    name: 'افتادگی در ناحیه دکلته',
                    vectorX: 80,
                    vectorY: 170,
                    leftOffset: 6
                }
            ]
        ],


//-----------------------------------------second page ------------------------------
        [
            [
                {
                    name: 'انواع موخوره',
                    vectorX: 60,
                    vectorY: 325,
                    leftOffset: 6
                },
                {
                    name: 'کدری موها',
                    vectorX: 70,
                    vectorY: 310,
                    leftOffset: 6
                },
                {
                    name: 'نازکی و شکنندگی مو',
                    vectorX: 80,
                    vectorY: 320,
                    leftOffset: 6
                },
                {
                    name: 'خشکی ساقه و نوک مو',
                    vectorX: 50,
                    vectorY: 290,
                    leftOffset: 6
                },
                {
                    name: 'خشکی زیاد موهای صورت',
                    vectorX: 70,
                    vectorY: 225,
                    leftOffset: 6
                }
            ],
            [

                {
                    name: 'شوره یا پوسته',
                    vectorX: 50,
                    vectorY: 325,
                    leftOffset: 6
                },


                {
                    name: 'خارش و التهاب کف سر',
                    vectorX: 80,
                    vectorY: 300,
                    leftOffset: 6
                },
                {
                    name: 'آسیب بر اثر رنگ و دکلره',
                    vectorX: 90,
                    vectorY: 300,
                    leftOffset: 6
                },
                {
                    name: 'آسیب بر اثر اتو و سشوار',
                    vectorX: 90,
                    vectorY: 300,
                    leftOffset: 6
                },
                {
                    name: 'ریزش مو',
                    vectorX: 70,
                    vectorY: 300,
                    leftOffset: 6
                },
            ]
        ],

        //---------------------------------third

        [
            [
                {
                    name: 'خشکی بعد از حمام',
                    vectorX: 40,
                    vectorY: 350,
                    leftOffset: 8
                },
                {
                    name: 'خشکی در نواحی دست ها',
                    vectorX: 90,
                    vectorY: 275,
                    leftOffset: 10
                },
                {
                    name: 'لک های قهوه ای پشت دست ها',
                    vectorX: 90,
                    vectorY: 175,
                    leftOffset: 10
                },
                {
                    name: 'چروک و پیری دست',
                    vectorX: 90,
                    vectorY: 275,
                    leftOffset: 6
                },
                {
                    name: 'ایپلاسیون و دیپلاسیون',
                    vectorX: 60,
                    vectorY: 100,
                    leftOffset: 6
                }
            ],

            [

                {
                    name: 'افتادگی پوست',
                    vectorX: 40,
                    vectorY: 250,
                    leftOffset: 6
                },
                {
                    name: 'ترک های بعد از رژیم',
                    vectorX: 45,
                    vectorY: 350,
                    leftOffset: 6
                },
                {
                    name: 'جوش های التهابی',
                    vectorX: 50,
                    vectorY: 325,
                    leftOffset: 6
                },
                {
                    name: 'التهاب در نواحی حساس',
                    vectorX: 10,
                    vectorY: 175,
                    leftOffset: 6
                },
                {
                    name: 'بوی بد پاها',
                    vectorX: 65,
                    vectorY: 100,
                    leftOffset: 6
                },
                {
                    name: 'خشکی بدن',
                    vectorX: 50,
                    vectorY: 140,
                    leftOffset: 6
                }
            ],

        ]

    ]

    return (
        <div>
            {/*<div className={'vector-helper-y'}>*/}
            {/*    {*/}

            {/*        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(eachNum => {*/}
            {/*            return (*/}
            {/*                <div key={eachNum + 10} className={'helpers-y'}> {eachNum * 50 + 50}</div>*/}
            {/*            )*/}
            {/*        })*/}

            {/*    }*/}
            {/*</div>*/}
            <MC tabs={['پوست صورت و گردن', 'پوست و موی سر', 'پوست بدن']} refreshBack={setPart}
                backgroundClass={'male-main-container'}
                colorTheme={'male'}
                choices={choices[currentPart]} vector={`url(${vectors[currentPart]['vector']})`}
                vecWidth={vectors[currentPart]['size']['x']} vecHeight={vectors[currentPart]['size']['y']}/>
        </div>

    );
};

export default Male;
