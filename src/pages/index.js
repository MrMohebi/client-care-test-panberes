import * as React from "react"

import PanberesLogo from "../components/PanberesLogo";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Main.css'

import flower from '../assets/img/panberes/flower.png'
import male from '../assets/img/panberes/male.png'
import female from '../assets/img/panberes/female.png'

import * as svgs from '../assets/svgs'


require('bootstrap');

const IndexPage = () => {
    return (
        <main>
            <div className={'main-container w-100 h-100 overflow-hidden main-grad '}>

                <div className={'upper-part h-50 overflow-hidden'}>
                    <div className={' position-absolute'} style={{margin: '15px 15px'}}>
                        <PanberesLogo/>
                    </div>
                    <div className={'tittle-center d-flex justify-content-center align-items-center w-100'}>
                        <div className={'main-page-detail-container'}>
                            <h2 className={'IranYekanBlack purple-text'}>سلامت بدن</h2>
                            <p className={"IranYekan text-nowrap"}>فرم اطلاعات و مشاوره پوست و مو</p>
                        </div>
                    </div>
                </div>
                <div className={'lower-part h-50 overflow-hidden'}>
                    <div className={'tittle-center d-flex justify-content-center align-items-center w-100'} style={{marginTop:'-80px'}}>
                        <div className={'main-page-gender-container'}>
                            <img className={'flower'} src={flower} alt="Panberes"/>
                            <span className={'IranYekan'}>جنسیت شما چیست؟</span>
                        </div>
                    </div>

                    <div className={'tittle-center mt-4 d-flex justify-content-center align-items-center w-100'} >
                        <div>
                            <div className={'gender-square male-gender'}>
                                <img className={'gender-image'} src={male} alt="مرد"/>
                            </div>
                            <div className={'male-dots'}>{svgs.maleDots}</div>
                        </div>

                        <div style={{direction:"rtl"}}>
                            <div className={'gender-square female-gender'}>
                                <img className={'gender-image'} src={female} alt="زن"/>
                            </div>
                            <div className={'female-dots'}>{svgs.femaleDots}</div>

                        </div>

                    </div>
                </div>

            </div>
        </main>
    )
}

export default IndexPage
