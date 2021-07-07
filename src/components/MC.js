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
import maleSubmit from '../assets/img/buttons/male-submit.png'
import femaleNextButton from '../assets/img/buttons/female-next.png'
import femaleSubmit from '../assets/img/buttons/female-submit.png'
import HealthDialog from "./HealthDialog";

let _ = require('lodash')


const MC = (props) => {


    let [buttonBackgroundImage, setButtonBackgroundImage] = useState(props.colorTheme === 'male' ? maleNextButton : femaleNextButton)
    let [choicesElement, setChoicesElement] = useState(0)
    let [healthDialog, setHealthDialog] = useState(<div/>)
    let [choicesGeneratorRefresh, setChoicesGeneratorRefresh] = useState(0)
    let [choicesPart, setChoicesPart] = useState(0)
    useEffect(() => {

        document.querySelector('.selects').addEventListener('scroll', _.debounce(() => {
            UpdateLines(choices, 0)
            setLinesClass('opacityUp')
        }, 100))
        checkSelects()

    }, [choicesPart])


    let [linesClass, setLinesClass] = useState(0)
    let [skinTypeOptions, setSkinTypeOptions] = useState(0)
    const [tabVal, setTabValue] = React.useState(0);
    let choices = props.choices
    let userChoices = ['']





    let sectionChange = (data) => {
        setChoicesPart(0)
        for (let i = 0; i < $('.selects').children().length; i++) {
            gsap.to($('.selects').children()[i]['firstChild'], {
                opacity: 0,
                delay: 0.05 * i,
                x: -20,
                onComplete: () => {
                    props.refreshBack(data)
                    setChoicesGeneratorRefresh(data)
                    setChoicesPart(0)
                    gsap.to($('.selects').children()[i], {
                        opacity: 1,
                        delay: 0.05 * i,
                        x: 0,
                        onComplete: () => {

                        }
                    })
                }
            })
        }
        gsap.to('.vector-holder', {
            opacity: 0,
            onComplete: () => {
                gsap.to('.vector-holder', {
                    opacity: 1
                })
            }
        })
    }

    let checkSelects = () => {
            let storedUserChoices = JSON.parse(window.sessionStorage.getItem('UserChoices'))
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


    }

    let handleNext = (e) => {
        let button = $(e.currentTarget)[0]
        if (button){
            button.classList.add('p-event-none')
            setTimeout(() => {
                button.classList.remove('p-event-none')
            }, 1800)
        }

        setLinesClass('opacityDown')
        let element = e.currentTarget
        setTimeout(() => {
            setLinesClass('opacityUp')
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
        UpdateLines(choices[choicesPart], true)
        if (tabVal === props.tabs.length - 1) {
            if (!choices[choicesPart + 2]) {
                gsap.to(element, {
                    opacity: 0,
                    duration: 0.2,
                    ease: 'expo.inOut',
                    onComplete: () => {
                        setButtonBackgroundImage(props.colorTheme === 'male' ? maleSubmit : femaleSubmit)
                        gsap.to(element, {
                            opacity: 1,
                            duration: 0.2,
                        })
                    }
                })
            }
            if (!choices[choicesPart + 1]) {
                setHealthDialog(<HealthDialog colorTheme={props.colorTheme} visible={true}
                                              backgroundClass={props.backgroundClass}/>)
            }
        }
        if (choices[choicesPart + 1]) {
            let elements = gsap.utils.toArray($('.selects')[0].children)
            setTimeout(() => {
                setChoicesPart(choicesPart + 1)

            }, 500)
            elements.map((eachElement, index) => gsap.to(eachElement['firstChild'], {
                x: -20,
                opacity: 0,
                delay: 0.1 * index,
                onComplete: () => {
                    elements.map((eachElement, index) => gsap.to(eachElement['firstChild'], {
                        x: 0,
                        opacity: 1,
                        delay: 0.1 * index,
                        onComplete: () => {

                        }
                    }))

                }
            }))

        } else {

            if (props.tabs[tabVal + 1]) {
                setTabValue(tabVal + 1)
            } else {

            }


        }
        if (!choices[choicesPart + 2]) {
        } else {
            setButtonBackgroundImage(props.colorTheme === 'male' ? maleNextButton : femaleNextButton)
        }
        setChoicesGeneratorRefresh(choicesGeneratorRefresh + 3)
    }


    let tabsChangeCallback = ((backData) => {
        setButtonBackgroundImage(props.colorTheme === 'male' ? maleNextButton : femaleNextButton)
        sectionChange(backData)
        setChoicesGeneratorRefresh(Math.random())

    })
    let currentTab = 0;

    return (
        <div className={'w-100 h-100 position-absolute ' + props.backgroundClass}>
            {
                healthDialog

            }

            <PanberesLogo/>
            <Tabs tabs={props.tabs} tabsChangeCallback={tabsChangeCallback} tabVal={tabVal}/>
            <div className={'mt-3'}>
                <SkinType choices={choices} optionIndex={0}/>
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
                    <ChoiceGenerator refresh={choicesGeneratorRefresh} choices={choices[choicesPart]}
                                     linesClass={linesClass} userChoices={userChoices}/>
                }

            </div>
            <div className={'next-submit-button'} style={{background: `url(${buttonBackgroundImage})`}}
                 onClick={handleNext}/>


        </div>
    );
};

export default MC;
