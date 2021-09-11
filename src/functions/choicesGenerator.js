import React, {useEffect, useState} from 'react';
import gsap from "gsap";
let _=require('lodash')
const ChoiceGenerator = (props) => {

    let [refresh, setRefresh] = useState(0)
    let [currentChoicePart, SCCp] = useState('')

    let checkSelects = () => {
        let storedUserChoices = JSON.parse(window.sessionStorage.getItem('UserChoices'))
        props.choices.map((eachChoice, index) => {
            if (storedUserChoices) {
                if (document.querySelector('.selects').childNodes[index]) {
                    if (storedUserChoices.includes(eachChoice.name)) {
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

    useEffect(() => {
        switch (props.currentTabIndex) {
            case 0 :
                SCCp('faceAndNeckSkin')
                break;
            case 1 :
                SCCp('hairAndHeadSkin')
                break;
            case 2 :
                SCCp('bodySkin')
                break;

        }
        window.addEventListener('resize', (e) => {
            setRefresh(e)
        })
        checkSelects()
    }, [refresh, props.refresh, props.currentTabIndex]);


    return (
        props.choices.map((eachChoise, index) => {
            return (
                <div id={'choise-' + index} key={index} className={'options-container choices '}
                     style={{marginLeft: eachChoise.leftOffset * 10 + '%'}}>
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
                                    _.pullAt(storedUserChoices,[_.indexOf(storedUserChoices,eachChoise.name),_.indexOf(storedUserChoices,eachChoise.name)+1])
                                    window.sessionStorage.setItem('UserChoices', JSON.stringify(storedUserChoices));
                                } else {
                                    storedUserChoices.push(
                                        eachChoise.name,
                                        eachChoise.name + 'part=' + currentChoicePart,
                                    )
                                    window.sessionStorage.setItem('UserChoices', JSON.stringify(storedUserChoices));
                                }
                            } else {
                                window.sessionStorage.setItem('UserChoices', '[]');
                            }
                        }}>

                            <div className={'check-box-round'}>
                                <svg style={{transform: 'scale(0)', opacity: 0}} width={32} height={32} version="1.1"
                                     id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g width={25} height={28}>
                                        <g id="check_x5F_alt">
                                            <path width={25} height={25}
                                                  style={{fill: "#745597", width: 20, height: 20,}}
                                                  d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M13.52,23.383L6.158,16.02l2.828-2.828l4.533,4.535l9.617-9.617l2.828,2.828L13.52,23.383z"/>
                                        </g>
                                    </g>

                                </svg>

                            </div>
                            <span className={'IranYekan each-option-lable'}>{eachChoise.name}</span>
                        </div>
                    </div>
                    <svg className={props.linesClass} id={'line' + index}
                         style={{marginTop: '15px', overflow: 'visible'}} height="210"
                         width="100%">
                        <line x1="0" y1="0" x2='0' y2="0"
                              style={{
                                  stroke: '  rgb(72 72 72)',
                                  strokeWidth: 0.5,
                                  position: 'absolute',
                              }}/>
                        <line x1='0' y1="0" x2='0' y2='0'
                              style={{stroke: ' rgb(72 72 72)', strokeWidth: 0.5, position: 'absolute'}}/>
                    </svg>

                </div>
            )
        })
    )
};

export default ChoiceGenerator;

