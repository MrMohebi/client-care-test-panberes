import React, {useState} from 'react';
import PanberesLogo from "../components/PanberesLogo";
import '../css/Main.css'
import Tabs from "../components/Tabs";
import SkinType from "../components/skinType";
import ChoiceGenerator from "../functions/choicesGenerator";
import gsap from "gsap";
import $ from "jquery";


const Male = () => {
    let [choicesElement,setChoicesElement] = useState(0)
    let choices = [
        [{
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
            vectorX: 40,
            vectorY: 260,
            leftOffset: 6
        }, {
            name: 'نیاز به نرم کننده',
            vectorX: 60,
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
            vectorX: 50,
            vectorY: 200,
            leftOffset: 6
        },
            {
                name: 'جای جوش',
                vectorX: 30,
                vectorY: 220,
                leftOffset: 6
            }, {
            name: 'خالی شدن ابرو',
            vectorX: 40,
            vectorY: 260,
            leftOffset: 6
        }, {
            name: 'لک و کک و مک',
            vectorX: 60,
            vectorY: 230,
            leftOffset: 6
        }, {
            name: 'پاکسازی صورت',
            vectorX: 70,
            vectorY: 200,
            leftOffset: 6
        }, {
            name: 'جوش سر سیاه',
            vectorX: 80,
            vectorY: 170,
            leftOffset: 6
        }],



        [{
            name: 'حساسیت بعد از اصلاح',
            vectorX: 20,
            vectorY: 40,
            leftOffset: 6
        },
            {
                name: 'جوش سر سفید',
                vectorX: 30,
                vectorY: 220,
                leftOffset: 6
            }, {
            name: 'جوش التهابی',
            vectorX: 40,
            vectorY: 260,
            leftOffset: 6
        }, {
            name: 'خط پشت لب',
            vectorX: 60,
            vectorY: 230,
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
        }],




    ]
    let userChoices = []

    let changeSection = (newSectionId)=>{
        let storedUserChoices = JSON.parse(window.sessionStorage.getItem('UserChoices'))

        let firsttime = true;

        for (let index = 0;index<document.querySelector('.selects').childNodes.length;index++){
            gsap.to(document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[0], {
                strokeDashoffset: 1000,
            })
            gsap.to(document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1], {
                strokeDashoffset: 1000,
            })
            gsap.to(document.querySelector('.selects').childNodes[index].firstChild, {
                x: -20,
                opacity: 0,
                duration:0.2,
                onComplete:()=>{
                    if (firsttime){
                        setChoicesElement(newSectionId)
                        firsttime = false;
                    }
                    for (let index = 0;index<document.querySelector('.selects').childNodes.length;index++){
                        if (storedUserChoices) {
                            if (storedUserChoices.includes(choices[newSectionId][index].name)){
                                console.log('male have it')
                                gsap.to(document.querySelector('.selects').childNodes[index].firstChild.firstChild.firstChild.firstChild, {
                                    scale: '0.8',
                                    opacity: '1',
                                    ease: "elastic.out(1, 2)"
                                })
                            }else{
                                gsap.to(document.querySelector('.selects').childNodes[index].firstChild.firstChild.firstChild.firstChild, {
                                    scale: '0',
                                    opacity: '0',
                                    ease: "elastic.out(1, 2)"
                                })
                            }
                        }

                        gsap.to(document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[0], {
                            strokeDashoffset: 0,
                        })
                        gsap.to(document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1], {
                            strokeDashoffset: 0,
                        })
                        gsap.to(document.querySelector('.selects').childNodes[index].firstChild, {
                            x:0,
                            opacity: 1,
                            delay: 0.1 * index,
                            duration:0.2,
                            onComplete:()=>{
                                setChoicesElement(newSectionId)
                            }

                        })
                        let x1Line1 = window.innerWidth - $('#line' + index).position().left - choices[newSectionId][index].vectorX
                        document.querySelector('.selects').childNodes[index].childNodes[1].firstChild.style.transformOrigin = x1Line1 / 2 + "px 0px"
                        document.querySelector('.selects').childNodes[index].childNodes[1].firstChild.x1.baseVal.value = window.innerWidth - $('#line' + index).position().left - choices[newSectionId][index].vectorX
                        document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].x1.baseVal.value = window.innerWidth - $('#line' + index).position().left - choices[newSectionId][index].vectorX
                        document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].y2.baseVal.value = window.innerHeight - $('#line' + index).position().top - choices[newSectionId][index].vectorY
                        document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].x2.baseVal.value = window.innerWidth - $('#line' + index).position().left - choices[newSectionId][index].vectorX
                        gsap.to(document.querySelector('.selects').childNodes[index].firstChild, {
                            x: 0,
                            opacity: 1,
                            delay: 0.1 * index,
                            onComplete: () => {
                                gsap.to(document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[0], {
                                    strokeDashoffset: 0,
                                })
                                gsap.to(document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1], {
                                    strokeDashoffset: 0,
                                    delay: 0.2
                                })
                            }
                        })
                    }

                }

            })

        }
        firsttime = true;

    }
    let tabsChangeCallback = ((backData)=>{
        console.log(backData)
        changeSection(backData)
    })
    return (
        <div className={'w-100 h-100 male-main-container'}>
            <PanberesLogo/>
            <Tabs tabsChangeCallback={tabsChangeCallback}/>
            <div className={'mt-3'}>
                <SkinType/>
            </div>

            <div className={'vector-holder'}/>
            <div className={'selects'}>
                {
                    <ChoiceGenerator choices={choices[choicesElement]} userChoices={userChoices} />

                }
            </div>
        </div>
    );
};

export default Male;
