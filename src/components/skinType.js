import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, withStyles} from "@material-ui/core";

const SkinType = () => {

    const GreenRadio = withStyles({
        root: {
            color: '#735b90',
            '&$checked': {
                color: "#745597",
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);
    return (
        <div className={'skin-type-container'}>
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
        </div>
    );
};

export default SkinType;
