import React, {useEffect} from 'react';
import PanberesLogo from "./PanberesLogo";
import {ButtonBase} from "@material-ui/core";
import sendUserData from "../assets/queries/MainQueries";
import $ from 'jquery'
import lottie from 'lottie-web'
import {CircleSpinner} from "react-spinners-kit";
import Swal from "sweetalert2";
import {BrowserRouter, Redirect} from "react-router-dom";


const PersonalInfo = (props) => {
    let [dialogOpacity, setDialogOpacity] = React.useState(0)
    let [successDialogOpacity, SSDO] = React.useState(0)
    let [gender, sg] = React.useState('male')
    let [buttonContent, SBC] = React.useState(<span className={'IranYekan'}>تایید</span>)
    let [maritalStatus, sm] = React.useState('male')
    let [btnDisabled, SBD] = React.useState(false)


    useEffect(() => {
        setDialogOpacity(1)
    }, [])
    let getSessionItem = (key) => {
        return window.sessionStorage.getItem(key)
    }

    let formSubmit = () => {
        SBC(<CircleSpinner color={"white"} size={20}/>)
        SBD(true)
        let code = getSessionItem('code')
        let name = $('#name').val()
        let age = parseInt($('#age').val())
        let phone = $('#phone').val()
        let userChoices = JSON.parse(window.sessionStorage.getItem('UserChoices'))
        let skinTypes = JSON.parse(window.sessionStorage.getItem('skinTypes'))
        let questions = getSessionItem('questions')
        let UserChoices = getSessionItem('UserChoices')
        let other = getSessionItem('userExtraChoices')
        let testResult = {
            faceAndNeckSkin:[],
            hairAndHeadSkin:[],
            bodySkin:[],
            faceAndNeckSkinType:'',
            hairAndHeadSkinType:'',
            bodySkinType:'',
            activityTime:'',
            other:''

        }
        userChoices.map(eachItem=>{
            if (eachItem.search('part=')>-1){
               let part = eachItem.split('part=')[1]
                testResult[part].push(eachItem.split('part=')[0])
            }
        })
        testResult.other = other
        Object.keys(skinTypes).map(eachKey=>{
            testResult[eachKey]=skinTypes[eachKey]
        })
        if (phone.length === 11){
            sendUserData(code, name, phone, gender, testResult, age, '', '', maritalStatus, (res) => {
                if (res['data']) {
                    Swal.fire(
                        'عملیات موفق',
                        'اطلاعات با موفقیت ثبت شد',
                        'success'
                    ).then(() => {
                        console.log('after')
                        window.location.href = "https://panberes.com";
                        SBC(<span className={'IranYekan '}> تایید</span>)
                        SBD(false)
                    })
                }
            })
        }else{
            Swal.fire({
                title:'شماره معتبر نیست',
                titleText:  'لطفا ورودی را بررسی کنید',
                icon:'info',
                confirmButtonText:'باشه'
            }).then()
        }
    }

    return (
        <>
            <div className={'health-dialog w-100 h-100 position-absolute ' + props.backgroundClass}
                 style={{zIndex: 999, opacity: dialogOpacity, transition: 'all 0.5s ease'}}>

                <PanberesLogo/>
                <div
                    className={'w-100 user-inputs d-flex flex-column justify-content-center align-items-center '}>
                    <span className={'IranYekan personal-data-title mt-5'}>اطلاعات شخصی</span>
                    <div className={'w-50 d-flex flex-column justify-content-center mt-2'}>

                        <input className={'personal-info-inputs'} type="text" id={'name'}
                               placeholder={'نام و نام خانوادگی'}/>
                        <input className={'personal-info-inputs'} type="number" id={'age'} placeholder={'سن'}/>
                        <input className={'personal-info-inputs'} type="number" id={'phone'}
                               placeholder={'شماره تلفن'}/>
                        <span className={'IranYekan text-center mt-3'}>جنسیت</span>
                        <form className={'d-flex mt-2 flex-row justify-content-center align-items-center'}>
                            <input className={'me-1 '} onChange={(event) => {
                                if (event.currentTarget.checked) {
                                    sg('male')
                                }
                            }} type="radio" id='male-gender' name='gender' value='male'/>
                            <label htmlFor="male-gender" className={'IranYekan me-4'}>مرد</label>
                            <input className={'me-1 '} onChange={(event) => {
                                if (event.currentTarget.checked) {
                                    sg('female')
                                }
                            }} type="radio" id='female-gender' name='gender' value='female'/>
                            <label htmlFor="female-gender" className={'IranYekan'}>زن</label>
                        </form>
                        <span className={'IranYekan text-center mt-3'}>وضعیت تاهل</span>
                        <form className={'d-flex mt-2 flex-row justify-content-center align-items-center'}>
                            <input className={'me-1 '} onChange={(event) => {
                                if (event.currentTarget.checked) {
                                    sm('married')
                                }
                            }} type="radio" id='single' name='gender' value='male'/>
                            <label htmlFor="single" className={'IranYekan me-4'}>مجرد</label>
                            <input className={'me-1 '} onChange={(event) => {
                                if (event.currentTarget.checked) {
                                    sm('single')
                                }
                            }} type="radio" id='married' name='gender' value='female'/>
                            <label htmlFor="married" className={'IranYekan'}>متاهل</label>
                        </form>
                        <ButtonBase disabled={btnDisabled}
                                    id={'submit-button'}
                                    onClick={formSubmit}
                                    className={'personal-data-submit IranYekan '} style={{
                            background: props.colorTheme === 'male' ? "#265c69" : "#fd9e9d",
                            outline: 'none',
                            border: 'solid 1px #cecece',
                            borderRadius: 15,
                            position: 'absolute',
                            bottom: 80,
                            right: '50%',
                            fontSize: '1.2rem',
                            height: 44,
                            transform: 'translate(50%, 0)',
                            width: 173,
                            color: 'white'
                        }}>
                            {buttonContent}
                        </ButtonBase>
                    </div>
                </div>
            </div>
        </>

    );
};

export default PersonalInfo;
