import React, {useEffect} from 'react';
import gsap from 'gsap'
import PanberesLogo from "./PanberesLogo";
import maleSubmit from '../assets/img/buttons/male-submit.png'
import femaleSubmit from '../assets/img/buttons/female-submit.png'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, withStyles} from "@material-ui/core";


const HealthDialog = (props) => {

        let [dialogOpacity, setdialogOpacity] = React.useState(0)
        useEffect(() => {
            setdialogOpacity(1)
        }, [])

        const GreenRadio = withStyles({
            root: {
                color: '#735b90',
                '&$checked': {
                    color: "#745597",
                },
            },
            checked: {},
        })((props) => <Radio color="default" {...props} />);


        let questions = [
            {
                title: 'میزان ساعت فعالیت بدنی در روز شامل هرگونه فعالیت از جمله پیاده روی و کار سخت',
                options: {
                    0: 'بدون فعالیت',
                    1: '30 دقیقه',
                    2: 'یک الی دو ساعت',
                    3: 'دو ساعت به بالا'
                }


            },
            {
                title: 'میزان استفاده از نوشیدنی های مکمل غذایی مرسوم در بازه زمانی یک هفته ( ویتامین ، کافیین و...)',
                options: {
                    0: 'عدم استفاده',
                    1: 'یک مرتبه',
                    3: 'دو مرتبه به بالا',
                }
            }
            ,
            {
                title: 'در صورت داشتن هرکدام از گزینه های زیر آن را انتخاب کنید\n',
                options: {

                    0: 'احساس خستگس در طول  روز',
                    1: 'نگرانی استفاده از ترکیبات شیمیایی',
                    2: 'تمایل به نوشیدنی جایگذین با قند غیر مضر',
                    3: 'استفاده روزانه ویتامین های گروه B و C'

                }
            },
        ]

        let selectedOptions = []

        let handleSubmit = () => {

        }
        return (
            <div className={'health-dialog w-100 h-100 position-absolute ' + props.backgroundClass}
                 style={{zIndex: 99, opacity: dialogOpacity, transition: 'all 0.5s ease'}}>
                <PanberesLogo/>
                <div className={'mt-5 health-dialog-main-container h-100'}>
                    {questions.map((eachQuestion, index) => {
                        return <div key={eachQuestion['title']} className={'each-question d-flex flex-column mt-2'}>
                            <span className={' w-100 each-question-title'}>{eachQuestion.title}</span>
                            <div className={'check-container w-100 d-flex flex-wrap p-3'}>
                                <form className={'each-question-content'}>
                                    {Object.keys(eachQuestion.options).map((eachOption, secIndex) => {
                                        return (
                                            <label className="IranYekan question-labels">
                                                <input className={'questions-radio'} type="radio" name="radio"/>
                                                {questions[index]["options"][eachOption]}
                                                <span className="checkmark"></span>
                                            </label>
                                            // <label  className={'IranYekan question-labels'} htmlFor={'question'+secIndex}>{questions[index]["options"][eachOption]}</label>
                                        )


                                        // return (
                                        //
                                        //     <div key={eachOption}
                                        //          className={'d-flex mt-2 each-question-content flex-row-reverse '}
                                        //          onClick={(e) => {
                                        //              let element = e.currentTarget;
                                        //              let answer = {
                                        //                  questionNo: questions[index],
                                        //                  answer: questions[index]["options"][eachOption],
                                        //              }
                                        //              let stringifiedAnswer = JSON.stringify(answer)
                                        //
                                        //              if (selectedOptions.includes(stringifiedAnswer)) {
                                        //                  selectedOptions = selectedOptions.filter(eachAnswer => eachAnswer !== stringifiedAnswer)
                                        //                  gsap.to(element.firstChild.firstChild, {
                                        //                      scale: 0,
                                        //                      opacity: 0,
                                        //                      duration:0.2,
                                        //                  })
                                        //              } else {
                                        //                  selectedOptions.push(stringifiedAnswer)
                                        //
                                        //                  gsap.to(element.firstChild.firstChild, {
                                        //                      scale: 0.8,
                                        //                      opacity: 1,
                                        //                      duration:0.2,
                                        //                  })
                                        //              }
                                        //          }
                                        //          }>
                                        //
                                        //         <div className={'check-box-round'}>
                                        //
                                        //             <svg style={{
                                        //                 transform: `scale(${exists ? 0.9 : 0})
                                        //         `, opacity: exists ? 1 : 0
                                        //             }} width={32} height={32} version="1.1"
                                        //                  id="Capa_1" xmlns="http://www.w3.org/2000/svg">
                                        //                 <g width={25} height={28}>
                                        //                     <g id="check_x5F_alt">
                                        //                         <path width={25} height={25}
                                        //                               style={{fill: "#745597", width: 20, height: 20,}}
                                        //                               d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M13.52,23.383L6.158,16.02l2.828-2.828l4.533,4.535l9.617-9.617l2.828,2.828L13.52,23.383z"/>
                                        //                     </g>
                                        //                 </g>
                                        //             </svg>
                                        //         </div>
                                        //         <span className={'IranYekan each-option-lable'}
                                        //               style={{lineHeight: '1.8rem'}}>{questions[index]["options"][eachOption]}</span>
                                        //     </div>
                                        // )


                                    })}
                                </form>


                            </div>

                        </div>
                    })}
                    <div className={'dialog-submit-button-container'}>

                        <div className={'dialog-submit-button'}
                             style={{background: `url(${props.colorTheme === "male" ? maleSubmit : femaleSubmit})`}}
                             onClick={handleSubmit}/>
                    </div>
                </div>


            </div>
        );
    }
;

export default HealthDialog;
