import React, {useEffect} from 'react';
import gsap from "gsap";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, withStyles} from "@material-ui/core";
import UpdateLines from "../functions/updateLines";

const SkinType = (props) => {

    let dialogRef = React.useRef(null)
    let [content, setContent] = React.useState(<div/>)
    let handleRadioChange = (e, titleKey) => {

        let currentSkinTypes = JSON.parse(window.sessionStorage.getItem('skinTypes'))
        if (currentSkinTypes) {
        } else {
            currentSkinTypes = {}
        }
        currentSkinTypes[titleKey['id']] = e.target.value
        window.sessionStorage.setItem('skinTypes', JSON.stringify(currentSkinTypes))
    }
    let skinTypeSessionStorageHandler = (type,) => {

    }


    useEffect(() => {
        console.log(props)
        if (defaultSkinTypeOptions[props.optionIndex]) {
            setContent(
                <FormControl component="fieldset">
                    <FormLabel component="legend">{defaultSkinTypeOptions[props.optionIndex]['title']}</FormLabel>
                    <RadioGroup row aria-label="position" name="position" onChange={(e) => {
                        handleRadioChange(e, defaultSkinTypeOptions[props.optionIndex])
                    }}>
                        {defaultSkinTypeOptions[props.optionIndex]['options'].map((eachOption, index) => {
                            return (
                                <FormControlLabel
                                    key={eachOption[0]}
                                    value={eachOption[0]}
                                    control={<GreenRadio color="primary"/>}
                                    label={eachOption[1]}
                                    labelPlacement="end"
                                />
                            )
                        })}
                    </RadioGroup>
                </FormControl>
            )
        }

    }, [props.optionIndex])

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
        // $(dialogRef.current).slideUp();
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
            id: 'faceAndNeckSkin',
            options: [
                ['dry', 'خشک'],
                ['oily', 'چرب'],
                ['normal', 'معمولی'],
                ['sensitive', 'حساس'],
            ]
        },
        {
            title: 'نوع پوست بدن شما چیست؟',
            id: 'bodySkin',
            options: [
                ['dry', 'خشک'],
                ['oily', 'چرب'],
                ['normal', 'معمولی'],
            ]
        },

    ]
    return (
        <div ref={dialogRef} className={'skin-type-container'}>
            {content}
            {/*<button onClick={submitHandler} className={'skin-type-submit mt-3'}>تایید</button>*/}
        </div>
    );
};

export default SkinType;
