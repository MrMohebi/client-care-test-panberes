import React from 'react';
import $ from 'jquery'
import gsap from "gsap";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, withStyles} from "@material-ui/core";
import UpdateLines from "../functions/updateLines";

const SkinType = (props) => {

    let dialogRef = React.useRef(null)

    const GreenRadio = withStyles({
        root: {
            color: '#735b90',

            '&$checked': {
                color: "#745597",
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);
    let submitHandler = ()=>{
        // $(dialogRef.current).slideUp();
        gsap.to(dialogRef.current,{
            opacity:0,
            border:'white 0px solid',
            onComplete:()=>{
                UpdateLines(props.choices,0);
            }
        })
    }

    let defaultSkinTypeOptions=[
        {
            title:'نوع پوست صورت و گردن شما چیست؟',
            options:[
                'خشک',
                'چرب',
                'معمولی',
                'حساس',
            ]
        }
    ]
    return (
        <div ref={dialogRef} className={'skin-type-container'}>
            <FormControl component="fieldset">
                <FormLabel component="legend">{defaultSkinTypeOptions[props.optionIndex]['title']}</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="normal">
                    {defaultSkinTypeOptions[props.optionIndex]['options'].map((eachOption,index)=>{
                        return(
                            <FormControlLabel
                                key={eachOption}
                                value={eachOption}
                                control={<GreenRadio color="primary" />}
                                label={eachOption}
                                labelPlacement="end"
                            />
                        )
                    })}
                </RadioGroup>
            </FormControl>
            <button onClick={submitHandler} className={'skin-type-submit mt-3'}>تایید</button>
        </div>
    );
};

export default SkinType;
