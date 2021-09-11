import React, {useEffect} from 'react';
import PanberesLogo from "./PanberesLogo";
import maleSubmit from '../assets/img/buttons/male-submit.png'
import femaleSubmit from '../assets/img/buttons/female-submit.png'


const HealthDialog = (props) => {
        let [dialogOpacity, setdialogOpacity] = React.useState(0)
        let [checkedOptions, sco] = React.useState({})
        useEffect(() => {
            setdialogOpacity(1)
            sco({})
        }, [])
        let questions = [
            {
                key: 'activityTime',
                title: 'میزان ساعت فعالیت بدنی در روز شامل هرگونه فعالیت از جمله پیاده روی و کار سخت',
                options: {
                    0: 'بدون فعالیت',
                    1: '30 دقیقه',
                    2: 'یک الی دو ساعت',
                    3: 'دو ساعت به بالا'
                }
            },
            {
                key: 'useSupplementsInWeek',
                title: 'میزان استفاده از نوشیدنی های مکمل غذایی مرسوم در بازه زمانی یک هفته ( ویتامین ، کافیین و...)',
                options: {
                    0: 'عدم استفاده',
                    1: 'یک مرتبه',
                    3: 'دو مرتبه به بالا',
                }
            }
        ]
        let extraChoices = {
            key: "other",
            title: 'در صورت داشتن هرکدام از گزینه های زیر آن را انتخاب کنید\n',
            options: [
                'احساس خستگس در طول  روز',
                'نگرانی استفاده از ترکیبات شیمیایی',
                'تمایل به نوشیدنی جایگذین با قند غیر مضر',
                'استفاده روزانه ویتامین های گروه B و C'
            ]
        }
        let handleOptionsChange = (key, val) => {
            checkedOptions[key] = val
            if (window.sessionStorage.getItem("questions") === null) {
                let data = {}
                data[key] = val
                window.sessionStorage.setItem('questions', JSON.stringify(data))
            } else {
                let questions = JSON.parse(window.sessionStorage.getItem("questions"))
                questions[key] = val
                window.sessionStorage.setItem('questions', JSON.stringify(questions))
            }
        }

        let handleSubmit = () => {
            console.log(checkedOptions)
            console.log(questions.length)
            if (Object.keys(checkedOptions).length === questions.length) {
                props.setCurrentSection(2)
            }
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
                                        {
                                            Object.keys(eachQuestion.options).map((eachOption) => {
                                                    return (
                                                        <label key={Math.random()} className="IranYekan question-labels">
                                                            <input onChange={() => {
                                                                handleOptionsChange(eachQuestion.key, questions[index]["options"][eachOption])
                                                            }} className={'questions-radio'} type="radio" name="radio"/>
                                                            {questions[index]["options"][eachOption]}
                                                            <span className="checkmark"/>
                                                        </label>
                                                    )
                                                }
                                            )
                                        }
                                    </form>

                                </div>

                            </div>
                        })}
                        <form className={'d-flex flex-column align-items-end'}>
                                            <span className={ 'w-100 each-question-title mt-2 mb-2'}>
                                                {extraChoices.title}
                                            </span>

                            {extraChoices.options.map((eachOption,index) => {
                                return (
                                    <div className={''} key={index}>
                                        <label style={{
                                            fontSize:'0.8rem'
                                        }} className={'IranYekan me-2'} htmlFor={index}>{eachOption}</label>
                                        <input className={'me-4'} id={index} onChange={(e)=>{
                                                if (e.currentTarget.checked){
                                                    if (window.sessionStorage.getItem('userExtraChoices') === null){
                                                        let data = {}
                                                        data[index]=eachOption
                                                        window.sessionStorage.setItem('userExtraChoices',JSON.stringify(data))
                                                    }else{
                                                        let data =JSON.parse( window.sessionStorage.getItem('userExtraChoices'))
                                                        console.log(data)
                                                        data[index]=eachOption
                                                        window.sessionStorage.setItem('userExtraChoices',JSON.stringify(data))
                                                    }
                                                }else{
                                                    let data = JSON.parse( window.sessionStorage.getItem('userExtraChoices'))
                                                    delete data[index]
                                                    window.sessionStorage.setItem('userExtraChoices',JSON.stringify(data))
                                                }
                                        }} type={'checkbox'}/>
                                    </div>

                                )
                            })}

                        </form>
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
