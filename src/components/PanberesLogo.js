import React from 'react';
import '../css/PanberesLogo.css'
import pl from '../assets/img/panberes/pl.png'
import pbt from '../assets/img/panberes/pbt.png'

const PanberesLogo = () => {
    return (
        <div className={'d-flex flex-row align-items-center panberes-logo-container '}>
            <img className={'panberes-logo'} src={pl} alt="panberes,Panberiz"/>
            <img className={'panberes-logo-text'} src={pbt} alt=""/>
        </div>
    );
};

export default PanberesLogo;
