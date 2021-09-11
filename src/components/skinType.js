import React, {useEffect} from 'react';
import gsap from "gsap";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, withStyles} from "@material-ui/core";
import UpdateLines from "../functions/updateLines";
import _ from 'lodash'

const SkinType = (props) => {

    let dialogRef = React.useRef(null)
    let [content, setContent] = React.useState(<div/>)
    let [currentChecked, scc] = React.useState('')
    let handleRadioChange = (e, titleKey) => {
        let currentSkinTypes = JSON.parse(window.sessionStorage.getItem('skinTypes'))
        if (currentSkinTypes === null) {
            let key = titleKey.id

            let data = {}
            data[key] = e.currentTarget.value
            window.sessionStorage.setItem('skinTypes', JSON.stringify(data
            ))
        }else{
            currentSkinTypes[titleKey.id] = e.currentTarget.value
            window.sessionStorage.setItem('skinTypes', JSON.stringify(currentSkinTypes))
        }
    }


    const GreenRadio = withStyles({
        root: {
            color: '#735b90',

            '&$checked': {
                color: "#745597",
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);
    let submitHandler = () => {
        gsap.to(dialogRef.current, {
            opacity: 0,
            border: 'white 0px solid',
            onComplete: () => {
                UpdateLines(props.choices, 0);
            }
        })
    }

    let defaultSkinTypeOptions = [
        {
            title: 'نوع پوست صورت و گردن شما چیست؟',
            id: 'faceAndNeckSkinType',
            options: [
                ['face_dry', 'خشک'],
                ['face_oily', 'چرب'],
                ['face_normal', 'معمولی'],
                ['face_sensitive', 'حساس'],
            ]
        },
        {
            title: 'نوع پوست مو و سر شما چیست؟',
            id: 'hairAndHeadSkinType',
            options: [
                ['hair_dry', 'خشک'],
                ['hair_oily', 'چرب'],
                ['hair_normal', 'معمولی'],
            ]
        },
        {
            title: 'نوع پوست بدن شما چیست؟',
            id: 'bodySkinType',
            options: [
                ['body_dry', 'خشک'],
                ['body_oily', 'چرب'],
                ['body_normal', 'معمولی'],
            ]
        },

    ]
    return (
        <div ref={dialogRef} className={'skin-type-container'}>
            {content}

            {
                defaultSkinTypeOptions.map((eachItem,index)=>{
                    return(
                        <FormControl style={{
                            display:props.optionIndex!==index?'none':'block'
                        }} component="fieldset">
                            <FormLabel component="legend">{defaultSkinTypeOptions[props.optionIndex]['title']}</FormLabel>
                            <RadioGroup row aria-label="position" name="position" onChange={(e) => {
                                handleRadioChange(e, defaultSkinTypeOptions[props.optionIndex])
                            }}>
                                {eachItem.options.map((eachOption, index) => {
                                    return (
                                        <FormControlLabel
                                            key={eachOption[0]}
                                            value={eachOption[1]}
                                            control={<GreenRadio color="primary"/>}
                                            label={eachOption[1]}
                                            labelPlacement="end"
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </FormControl>
                    )
                })
            }
        </div>
    );
};

export default SkinType;
