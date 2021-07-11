import React, {useEffect} from 'react';
import PanberesLogo from "./PanberesLogo";

const PersonalInfo = (props) => {
    let [dialogOpacity,setDialogOpacity] = React.useState(0)

    useEffect(()=>{
    setDialogOpacity(1)
    },[])
    return (
        <div className={'health-dialog w-100 h-100 position-absolute ' + props.backgroundClass}
             style={{zIndex: 999, opacity: dialogOpacity, transition: 'all 0.5s ease'}}>
            <PanberesLogo/>

            <div className={'w-100 d-flex flex-column justify-content-center align-items-center '}>
                <span className={'IranYekan personal-data-title mt-5'}>اطلاعات شخصی</span>
                <div className={'w-50 d-flex flex-column justify-content-center mt-2'}>

                    <input className={'personal-info-inputs'} type="text" placeholder={'نام'}/>
                    <input className={'personal-info-inputs'} type="text" placeholder={'نام خانوادگی'}/>
                    <input className={'personal-info-inputs'} type="number" placeholder={'سن'}/>
                    <button className={'personal-data-submit IranYekan '} style={{background:props.colorTheme==='male'?"#265c69":"#fd9e9d"}}>
                        تایید
                    </button>
                </div>

            </div>

        </div>
    );
};

export default PersonalInfo;
