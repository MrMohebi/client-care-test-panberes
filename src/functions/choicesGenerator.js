import React, {useEffect, useState} from 'react';
import * as svgs from '../assets/svgs'
import gsap from "gsap";
import $ from 'jquery';

const ChoiceGenerator = (props) => {

    let [refresh, setRefresh] = useState(0)

    useEffect(() => {

        window.addEventListener('resize', (e) => {
            setRefresh(e)
        })

        setTimeout(() => {
            let storedUserChoices = JSON.parse(window.sessionStorage.getItem('UserChoices'))
            props.choices.map((eachChoice, index) => {
                if (storedUserChoices) {
                    if (storedUserChoices.includes(eachChoice.name)){
                        gsap.to(document.querySelector('.selects').childNodes[index].firstChild.firstChild.firstChild.firstChild, {
                            scale: '0.8',
                            opacity: '1',
                            ease: "elastic.out(1, 2)"
                        })

                    }
                }

                let x1Line1 = window.innerWidth - $('#line' + index).position().left - eachChoice.vectorX

                document.querySelector('.selects').childNodes[index].childNodes[1].firstChild.style.transformOrigin = x1Line1 / 2 + "px 0px"
                document.querySelector('.selects').childNodes[index].childNodes[1].firstChild.x1.baseVal.value = window.innerWidth - $('#line' + index).position().left - eachChoice.vectorX
                document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].x1.baseVal.value = window.innerWidth - $('#line' + index).position().left - eachChoice.vectorX
                document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].y2.baseVal.value = window.innerHeight - $('#line' + index).position().top - eachChoice.vectorY
                document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].x2.baseVal.value = window.innerWidth - $('#line' + index).position().left - eachChoice.vectorX

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


            })
        }, 1000)


    }, [refresh]);


    return (
        props.choices.map((eachChoise, index) => {
            return (
                <div id={'choise-' + index} key={index} className={'options-container '}
                     style={{marginLeft: eachChoise.leftOffset + 'rem'}}>
                    <div className={'check-boxes'}>
                        <div className={'options'} onClick={(e) => {

                            let storedUserChoices = JSON.parse(window.sessionStorage.getItem('UserChoices'))

                            if (storedUserChoices) {
                                if (storedUserChoices.includes(eachChoise.name)) {
                                    gsap.to(e.currentTarget.firstChild.firstChild, {
                                        scale: '0',
                                        opacity: '0',
                                        ease: 'expo.out'
                                    })
                                } else {
                                    gsap.to(e.currentTarget.firstChild.firstChild, {
                                        scale: '0.8',
                                        opacity: '1',
                                        ease: "elastic.out(1, 2)"
                                    })
                                }

                                if (storedUserChoices.includes(eachChoise.name)) {
                                    let afterFilter = storedUserChoices.filter(eachItem =>
                                        eachItem !== eachChoise.name
                                    )
                                    window.sessionStorage.setItem('UserChoices', JSON.stringify(afterFilter));
                                } else {
                                    storedUserChoices.push(eachChoise.name)
                                    window.sessionStorage.setItem('UserChoices', JSON.stringify(storedUserChoices));
                                }

                            } else {
                                window.sessionStorage.setItem('UserChoices', '[]');
                            }
                        }}>

                            <div className={'check-box-round'}>
                                {svgs.check}
                            </div>
                            <span className={'IranYekan each-option-lable'}>{eachChoise.name}</span>
                        </div>
                    </div>
                    <svg id={'line' + index} style={{marginTop: '15px', overflow: 'visible'}} height="210"
                         width="100%">
                        <line x1="0" y1="0" x2='0' y2="0"
                              style={{
                                  stroke: ' black',
                                  strokeWidth: 0.5,
                                  position: 'absolute',
                                  transform: 'rotate(180deg)'
                              }}/>
                        <line x1='0' y1="0" x2='0' y2='0'
                              style={{stroke: ' black', strokeWidth: 0.5, position: 'absolute'}}/>
                    </svg>

                </div>
            )
        })
    )
};

export default ChoiceGenerator;

