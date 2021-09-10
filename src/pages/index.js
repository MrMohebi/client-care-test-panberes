import * as React from "react"

import PanberesLogo from "../components/PanberesLogo";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Main.css'
import '../assets/fonts/fonts.css'
import flower from '../assets/img/panberes/flower.png'
import male from '../assets/img/panberes/male.png'
import female from '../assets/img/panberes/female.png'

import * as svgs from '../assets/svgs'
import {useEffect, useState} from "react";
import {Link} from "gatsby";


// require('bootstrap');

const IndexPage = (props) => {


    let [code, sc] = useState('noCode')

    useEffect(() => {
        window.sessionStorage.setItem('UserChoices', '[]')
        window.sessionStorage.setItem('skinTypes', '{}')
        window.sessionStorage.setItem('questions', '{}')

        if (new URLSearchParams(window.location.search).has('code')||window.sessionStorage.getItem('code')) {
            console.log('in it')
            sc('code')
            if (new URLSearchParams(window.location.search).has('code')){
                window.sessionStorage.setItem('code', new URL(window.location).searchParams.get('code'))
            }
        }else {
            window.sessionStorage.setItem('code', '')
            sc('wrongCode')
        }

    }, []);
    return (
        <main>
            <div className={'main-container w-100 h-100 overflow-hidden main-grad '}>
                <div className={'upper-part h-50 overflow-hidden'}>
                    <div className={' position-absolute'}>
                        <PanberesLogo/>
                    </div>
                    <div className={'tittle-center d-flex justify-content-center align-items-center w-100'}>
                        <div className={'main-page-detail-container'}>
                            <h2 className={'IranYekanBlack purple-text'}>سلامت بدن</h2>
                            <p className={"IranYekan text-nowrap"}>فرم اطلاعات و مشاوره پوست و مو</p>
                        </div>
                    </div>
                </div>
                {
                    code === 'code' ?
                        <div className={'lower-part h-50 overflow-hidden'}>
                            <div className={'tittle-center d-flex justify-content-center align-items-center w-100'}
                                 style={{marginTop: '-80px'}}>
                                <div className={'main-page-gender-container'}>
                                    <img className={'flower'} src={flower} alt="Panberes"/>
                                    <span className={'IranYekan'}>جنسیت شما چیست؟</span>
                                </div>
                            </div>

                            <div
                                className={'tittle-center mt-4 d-flex justify-content-center align-items-center w-100'}>
                                <div>
                                    <Link className={'gender-square male-gender'} to={'/male'}>
                                        <img className={'gender-image'} src={male} alt="مرد"/>
                                    </Link>
                                    <div className={'male-dots'}>{svgs.maleDots}</div>
                                </div>

                                <div style={{direction: "rtl"}}>
                                    <Link to={'/female'} className={'gender-square female-gender'}>
                                        <img className={'gender-image'} src={female} alt="زن"/>
                                    </Link>
                                    <div className={'female-dots'}>{svgs.femaleDots}</div>

                                </div>

                            </div>
                        </div>
                        :
                        code === 'noCode' ?
                            <div/>
                            :
                            <div className={'w-100 d-flex flex-row align-items-center justify-content-center'}>
                                <h4 className={'IranYekan'}>کد معرفی نا معتبر است</h4>
                            </div>
                }

            </div>
        </main>
    )

}

export default IndexPage
