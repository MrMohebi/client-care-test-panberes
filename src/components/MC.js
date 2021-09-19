import React, {useEffect, useState} from 'react';
import PanberesLogo from "../components/PanberesLogo";
import '../css/Main.css'
import Tabs from "../components/Tabs";
import SkinType from "../components/skinType";
import ChoiceGenerator from "../functions/choicesGenerator";
import gsap from "gsap";
import UpdateLines from "../functions/updateLines";
import $ from 'jquery'
import maleNextButton from '../assets/img/buttons/next-male.png'
import femaleNextButton from '../assets/img/buttons/female-next.png'
import maleBackButton from '../assets/img/buttons/back-male.png'
import femaleBackButton from '../assets/img/buttons/female-back.png'
import HealthDialog from "./HealthDialog";
import PersonalInfo from "./PersonalInfo";
import {Link} from "gatsby";

let _ = require('lodash')
const MC = (props) => {

        let [choicesGeneratorRefresh, setChoicesGeneratorRefresh] = useState(0)
        let [choicesPart, setChoicesPart] = useState(0)
        let [skinTypeOptionIndex, setSkinTypeOptionIndex] = React.useState(0)
        let [linesClass, setLinesClass] = useState(0)
        const [tabVal, setTabValue] = React.useState(0);
        let [currentSection, setCurrentSection] = React.useState(0)
        let [currentTabIndex, setCurrentTabIndex] = React.useState(0)
        let choices = props.choices
        let userChoices = ['']
        let nextButtonImage = props.colorTheme === 'male' ? maleNextButton : femaleNextButton
        let backButtonImage = props.colorTheme === 'male' ? maleBackButton : femaleBackButton
        let checkInterval = setInterval(() => {
            checkSelects()
        }, 800)

        useEffect(() => {
            window.addEventListener("resize", _.debounce(
                () => {
                    UpdateLines(tabVal, choicesPart, props.colorTheme)
                }
                , 300))
            document.querySelector('.selects').addEventListener('scroll', _.debounce(() => {
                setLinesClass('opacityUp')
            }, 100))
            checkSelects()
            UpdateLines(tabVal, choicesPart, props.colorTheme)
        }, [choicesPart])


        let sectionChange = (data) => {
            setCurrentTabIndex(data)
            setSkinTypeOptionIndex(data)
            // setLinesClass('opacityDown')
            if (data > 0) {
                gsap.to('.back-button', {
                    opacity: 1,
                    scale: 1,
                    pointerEvents: 'all'
                })
            }

            // setTimeout(() => {
            //     setLinesClass('opacityUp')
            // }, 1500)


            // gsap.to('.choices', {
            //     opacity: 0,
            //     stagger: 0.1,
            //     onComplete: () => {
            //         setChoicesPart(0)
            //         setChoicesGeneratorRefresh(data)
            //         gsap.to('.vector-holder', {
            //             x: 300,
            //             ease: 'expo.inOut',
            //
            //             onComplete: () => {
            //                 setTimeout(() => {
            //                     UpdateLines(tabVal, 0, props.colorTheme)
            //                 }, 500)
            //                 props.refreshBack(data)
            //                 gsap.to('.vector-holder', {
            //                     x: 0,
            //                     ease: 'expo.inOut',
            //                 })
            //             }
            //         })
            //         gsap.to('.choices', {
            //             opacity: 1,
            //             stagger: 0.1,
            //         })
            //     }
            // })


            //new
            setTabValue(data)
            setLinesClass('opacityDown')
            gsap.to('.choices', {
                opacity: 0,
                x: 10,
                stagger: 0.1,
                duration: 0.2,
                onComplete: () => {
                    setChoicesPart(0)
                    setChoicesGeneratorRefresh(data)
                    // UpdateLines(tabVal, 0, props.colorTheme)
                    setTimeout(() => {
                        UpdateLines(data, 0, props.colorTheme)
                        setLinesClass('opacityUp')

                    }, 1000)
                    props.refreshBack(data)

                    gsap.to('.choices', {
                        opacity: 1,
                        x: 0,
                        stagger: 0.1,
                        duration: 0.2,
                    })
                }
            })
        }

        let checkSelects = () => {
            let storedUserChoices = JSON.parse(window.sessionStorage.getItem('UserChoices'))
            if (document.querySelector('.selects')) {
                gsap.utils.toArray(document.querySelector('.selects').childNodes).map((eachChoice, index) => {
                    if (storedUserChoices) {
                        if (document.querySelector('.selects').childNodes[index]) {
                            if (eachChoice.firstChild.firstChild.childNodes[1]) {

                            }
                            if (storedUserChoices.includes(eachChoice.firstChild.firstChild.childNodes[1].innerHTML)) {
                                gsap.to(document.querySelector('.selects').childNodes[index].firstChild.firstChild.firstChild.firstChild, {
                                    scale: '0.8',
                                    opacity: '1',
                                    ease: "elastic.out(1, 2)"
                                })
                            } else {
                                gsap.to(document.querySelector('.selects').childNodes[index].firstChild.firstChild.firstChild.firstChild, {
                                    scale: '0',
                                    opacity: '0',
                                    ease: "elastic.out(1, 2)"
                                })
                            }
                        }
                    }
                })
            } else {
                clearInterval(checkInterval)
            }
        }

        let handleNext = (e) => {

            let button = $(e.currentTarget)[0]
            if (button) {
                button.classList.add('p-event-none')
                setTimeout(() => {
                    button.classList.remove('p-event-none')
                }, 1800)
            }
            // setLinesClass('opacityDown')

            let element = e.currentTarget
            setTimeout(() => {
                // setLinesClass('opacityUp')
            }, 1500)

            gsap.to(element, {
                scale: 0.9,
                duration: 0.2,
                ease: 'expo.inOut',
                onComplete: () => {
                    gsap.to(element, {
                        scale: 1,
                        duration: 0.2,
                    })
                }
            })
            if (tabVal === props.tabs.length - 1) {
                if (!choices[choicesPart + 2]) {

                }
                if (!choices[choicesPart + 1]) {
                    setCurrentSection(1)
                }
            }

            if (choices[choicesPart + 1]) {
                gsap.to('.choices', {
                    x: -20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.2,
                    onComplete: () => {
                        setChoicesPart(choicesPart + 1)
                        gsap.to('.choices', {
                            x: 0,
                            opacity: 1,
                            stagger: 0.1,
                        })
                    }

                })

            } else {
                if (props.tabs[tabVal + 1]) {
                    setTabValue(tabVal + 1)
                    setSkinTypeOptionIndex(skinTypeOptionIndex + 1)
                } else {

                }

            }
            if (!choices[choicesPart + 2]) {
            }
            setChoicesGeneratorRefresh(choicesGeneratorRefresh + 3)

            if (tabVal >= 0 || choicesPart > 0) {
                gsap.to('.back-button', {
                    opacity: 1,
                    pointerEvents: 'all',
                    scale: 1,
                    ease: 'expo.inOut'
                })
            }
        }

        let handleBack = (e) => {
            let button = $(e.currentTarget)[0]
            if (button) {
                button.classList.add('p-event-none')
                setTimeout(() => {
                    button.classList.remove('p-event-none')
                }, 1800)
            }

            // setLinesClass('opacityDown')


            let element = e.currentTarget
            setTimeout(() => {
                // setLinesClass('opacityUp')
            }, 1500)

            gsap.to(element, {
                scale: 0.9,
                duration: 0.2,
                ease: 'expo.inOut',
                onComplete: () => {
                    gsap.to(element, {
                        scale: 1,
                        duration: 0.2,
                    })
                }
            })

            if (!choices[choicesPart - 2] && tabVal === 0) {
                gsap.to('.back-button', {
                    opacity: 0,
                    scale: 0,
                    pointerEvents: 'none'
                })
            }

            if (choices[choicesPart - 1]) {
                gsap.to('.choices', {
                    opacity: 0,
                    stagger: 0.05,
                    onComplete: () => {
                        setChoicesPart(choicesPart - 1)
                        setTimeout(() => {
                        }, 300)
                        gsap.to('.choices', {
                            opacity: 1,
                            stagger: 0.05,
                        })
                    }
                })


            } else {
                if (props.tabs[tabVal - 1]) {
                    setTabValue(tabVal - 1)
                    setTimeout(() => {
                    }, 1000)
                    setSkinTypeOptionIndex(skinTypeOptionIndex - 1)
                }


            }
            if (!choices[choicesPart - 2]) {
            }
            setChoicesGeneratorRefresh(choicesGeneratorRefresh + 3)
        }

        let tabsChangeCallback = ((backData) => {
            setTabValue(backData)
            sectionChange(backData)
            setChoicesGeneratorRefresh(Math.random())
        })
        let backClickHandler = () => {
            if (currentSection === 0) {
                console.log('back')
            } else {
                setCurrentSection(currentSection - 1)
            }

        }

        return (
            <div className={'w-100 h-100 position-absolute ' + props.backgroundClass}>
                {
                    currentSection === 0 ?
                        <Link to={'/'} className={'section-back-button'}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                                 clipRule="evenodd">
                                <path
                                    d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                            </svg>
                        </Link>
                        :
                        <div className={'section-back-button'} onClick={backClickHandler}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                                 clipRule="evenodd">
                                <path
                                    d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                            </svg>
                        </div>
                }

                {
                    currentSection >= 1 ?
                        <HealthDialog setCurrentSection={setCurrentSection} colorTheme={props.colorTheme} visible={true}
                                      backgroundClass={props.backgroundClass}/> : <div/>
                }
                {
                    currentSection >= 2 ?
                        <PersonalInfo choiceParts={props.choices} backgroundClass={props.backgroundClass}
                                      colorTheme={props.colorTheme}/> :
                        <div/>
                }


                <PanberesLogo/>
                <Tabs tabs={props.tabs} tabsChangeCallback={tabsChangeCallback} tabVal={tabVal}/>
                <div className={'mt-3'}>
                    <SkinType choices={choices} optionIndex={skinTypeOptionIndex}/>
                </div>
                <div className={'vector-holder'} style={{
                    background: props.vector,
                    width: props.vecWidth,
                    height: props.vecHeight,
                }}/>

                <div className={'selects'} onScroll={() => {
                    setLinesClass('opacityDown')
                }}>
                    {
                        <ChoiceGenerator currentTabIndex={currentTabIndex} refresh={choicesGeneratorRefresh}
                                         choices={choices[choicesPart]}
                                         linesClass={linesClass} userChoices={userChoices}/>
                    }

                </div>
                <div className={'next-and-back-buttons'}>
                    <div className={'next-button'} style={{background: `url(${nextButtonImage})`}}
                         onClick={handleNext}/>
                    <div className={'next-button back-button'}
                         style={{background: `url(${backButtonImage})`, scale: 0, opacity: 0, pointerEvents: 'none'}}
                         onClick={handleBack}/>
                </div>


            </div>


        );
    }
;

export default MC;
