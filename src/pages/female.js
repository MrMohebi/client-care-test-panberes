import React, {useEffect, useState} from 'react';
import '../css/Main.css'
import MC from "../components/MC";
import female from '../assets/img/vectors/female.png'
import femaleBody from '../assets/img/vectors/female-body.png'
import femaleFullBody from '../assets/img/vectors/female-full-body.png'


const Female = () => {
    let [currentPart, setPart] = useState(0)

    let vectors = [
        {
            vector: female,
            size: {
                x: 150,
                y: 340
            }
        }, {
            vector: femaleBody,
            size: {
                x: 200,
                y: 295
            }
        }, {
            vector: femaleFullBody,
            size: {
                x: 105,
                y: 365
            }
        },

    ]


    useEffect(() => {
        console.log(currentPart)

    }, [currentPart])
    let choices = [
        [[
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
            }, {
                name: 'نیاز به آب رسان',
                vectorX: 60,
                vectorY: 235,
                leftOffset: 6
            }, {
                name: 'نیاز به نرم کننده',
                vectorX: 70,
                vectorY: 230,
                leftOffset: 6
            }, {
                name: 'خط گوشه چشم',
                vectorX: 70,
                vectorY: 200,
                leftOffset: 6
            }, {
                name: 'منافز باز',
                vectorX: 80,
                vectorY: 170,
                leftOffset: 6
            }],


            [{
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
                }, {
                name: 'خالی شدن ابرو',
                vectorX: 50,
                vectorY: 225,
                leftOffset: 6
            }, {
                name: 'لک و کک و مک',
                vectorX: 10,
                vectorY: 175,
                leftOffset: 6
            }, {
                name: 'پاکسازی صورت',
                vectorX: 65,
                vectorY: 100,
                leftOffset: 6
            }, {
                name: 'جوش سر سیاه',
                vectorX: 50,
                vectorY: 140,
                leftOffset: 6
            }],


            [{
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
                }, {
                name: 'جوش التهابی',
                vectorX: 40,
                vectorY: 235,
                leftOffset: 6
            }, {
                name: 'خط پشت لب',
                vectorX: 30,
                vectorY: 155,
                leftOffset: 6
            }, {
                name: 'خط لبخند',
                vectorX: 70,
                vectorY: 200,
                leftOffset: 6
            }, {
                name: 'افتادگی پوست و غبغب',
                vectorX: 80,
                vectorY: 170,
                leftOffset: 6
            }],],


//-----------------------------------------second page ------------------------------
        [[{
            name: 'انواع موخوره',
            vectorX: 20,
            vectorY: 240,
            leftOffset: 6
        },
            {
                name: 'کدری موها',
                vectorX: 30,
                vectorY: 220,
                leftOffset: 6
            }, {
                name: 'نازکی و شکنندگی مو',
                vectorX: 60,
                vectorY: 235,
                leftOffset: 6
            }, {
                name: 'خشکی ساقه و نوک مو',
                vectorX: 70,
                vectorY: 230,
                leftOffset: 6
            }, {
                name: 'خشکی زیاد موهای صورت',
                vectorX: 70,
                vectorY: 200,
                leftOffset: 6
            }], [{
            name: 'شوره یا پوسته',
            vectorX: 80,
            vectorY: 170,
            leftOffset: 6
        },


            {
                name: 'خارش و التهاب کف سر',
                vectorX: 40,
                vectorY: 250,
                leftOffset: 6
            },
            {
                name: 'آسیب بر اثر رنگ و دکلره',
                vectorX: 65,
                vectorY: 260,
                leftOffset: 6
            }, {
                name: 'آسیب بر اثر اتو و سشوار',
                vectorX: 50,
                vectorY: 225,
                leftOffset: 6
            }, {
                name: 'ریزش مو',
                vectorX: 10,
                vectorY: 175,
                leftOffset: 6
            },]],

        //---------------------------------third

        [[{
            name: 'خشکی بعد از حمام',
            vectorX: 20,
            vectorY: 240,
            leftOffset: 6
        },
            {
                name: 'خشکی در نواحی دست ها',
                vectorX: 30,
                vectorY: 220,
                leftOffset: 6
            }, {
                name: 'لک های قهوه ای پشت دست ها',
                vectorX: 60,
                vectorY: 235,
                leftOffset: 6
            }, {
                name: 'چروک و پیری دست',
                vectorX: 70,
                vectorY: 230,
                leftOffset: 6
            }, {
                name: 'ایپلاسیون و دیپلاسیون',
                vectorX: 70,
                vectorY: 200,
                leftOffset: 6
            }],

            [{
                name: 'حساسیت بعد از اصلاح',
                vectorX: 80,
                vectorY: 170,
                leftOffset: 6
            },

                {
                    name: 'افتادگی پوست',
                    vectorX: 40,
                    vectorY: 250,
                    leftOffset: 6
                },
                {
                    name: 'ترک های بعد از رژیم',
                    vectorX: 65,
                    vectorY: 260,
                    leftOffset: 6
                }, {
                name: 'جوش های التهابی',
                vectorX: 50,
                vectorY: 225,
                leftOffset: 6
            }, {
                name: 'التهاب در نواحی حساس',
                vectorX: 10,
                vectorY: 175,
                leftOffset: 6
            }, {
                name: 'بوی بد پاها',
                vectorX: 65,
                vectorY: 100,
                leftOffset: 6
            }, {
                name: 'خشکی بدن',
                vectorX: 50,
                vectorY: 140,
                leftOffset: 6
            }],

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
                }, {
                name: 'جوش التهابی',
                vectorX: 40,
                vectorY: 235,
                leftOffset: 6
            }, {
                name: 'خط پشت لب',
                vectorX: 30,
                vectorY: 155,
                leftOffset: 6
            }, {
                name: 'خط لبخند',
                vectorX: 70,
                vectorY: 200,
                leftOffset: 6
            }, {
                name: 'افتادگی پوست و غبغب',
                vectorX: 80,
                vectorY: 170,
                leftOffset: 6
            }]
        ]

    ]

    return (
        <div>
            <div className={'vector-helper-y'}>
                {

                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(eachNum => {
                        return (
                            <div className={'helpers-y'}> {eachNum * 50 + 50}</div>
                        )
                    })

                }
            </div>
            <MC tabs={['پوست صورت و گردن', 'پوست و موی سر', 'پوست بدن']} refreshBack={setPart}
                backgroundClass={'female-main-container'}
                colorTheme={'female'}
                choices={choices[currentPart]} vector={`url(${vectors[currentPart]['vector']})`}
                vecWidth={vectors[currentPart]['size']['x']} vecHeight={vectors[currentPart]['size']['y']}/>
        </div>

    );
};

export default Female;
