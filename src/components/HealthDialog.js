import React, {useEffect} from 'react';
import PanberesLogo from "./PanberesLogo";
import maleSubmit from '../assets/img/buttons/male-submit.png'
import femaleSubmit from '../assets/img/buttons/female-submit.png'


const HealthDialog = (props) => {

        let [dialogOpacity, setdialogOpacity] = React.useState(0)
        useEffect(() => {
            setdialogOpacity(1)
        }, [])
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

        let handleSubmit = () => {
            props.setCurrentSection(2)
            // setPersonalInfoDialog(
            //     <PersonalInfo backgroundClass={props.backgroundClass} colorTheme={props.colorTheme}/>
            // );
        }

            return (
                <div>
                    <div className={'health-dialog w-100 h-100 position-absolute ' + props.backgroundClass}
                         style={{zIndex: 99, opacity: dialogOpacity, transition: 'all 0.5s ease'}}>
                        <PanberesLogo/>
                        <div className={'mt-5 health-dialog-main-container h-100'}>
                            {questions.map((eachQuestion, index) => {
                                return <div key={Math.random()} className={'each-question d-flex flex-column mt-2'}>
                                    <span className={' w-100 each-question-title'}>{eachQuestion.title}</span>
                                    <div className={'check-container w-100 d-flex flex-wrap p-3'}>
                                        <form className={'each-question-content'}>
                                            {Object.keys(eachQuestion.options).map((eachOption) => {
                                                return (
                                                    <label key={Math.random()} className="IranYekan question-labels">
                                                        <input className={'questions-radio'} type="radio" name="radio"/>
                                                        {questions[index]["options"][eachOption]}
                                                        <span className="checkmark"/>
                                                    </label>
                                                )
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
                </div>

            );


    }
;

export default HealthDialog;
