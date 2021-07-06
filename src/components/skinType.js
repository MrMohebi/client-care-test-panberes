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
        $(dialogRef.current).slideUp();
        gsap.to(dialogRef.current,{
            opacity:0,
            border:'white 0px solid',
            onComplete:()=>{
                UpdateLines(props.choices,0);
            }
        })
    }
    return (
        <div ref={dialogRef} className={'skin-type-container'}>
            <FormControl component="fieldset">
                <FormLabel component="legend">نوع پوست صورت و گردن شما چیست؟</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="normal">
                    <FormControlLabel
                        value="sensitive"
                        control={<GreenRadio color="primary" />}
                        label="حساس"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="normal"
                        control={<GreenRadio color="primary" />}
                        label="معمولی"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="oily"
                        control={<GreenRadio color="primary" />}
                        label="چرب"
                        labelPlacement="end"
                    />
                    <FormControlLabel value="dry" control={<GreenRadio color="primary" />} label="خشک" labelPlacement={'end'} />
                </RadioGroup>
            </FormControl>
            <button onClick={submitHandler} className={'skin-type-submit mt-3'}>تایید</button>
        </div>
    );
};

export default SkinType;
