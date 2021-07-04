import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#735b90',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{children: <span/>}}/>);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#000000',
        fontSize:'0.8rem',
        fontFamily:'Iranyekan',
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);


export default function CustomizedTabs(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.tabsChangeCallback(newValue);
    };

    return (
        <div className={'w-100 d-flex m-auto pt-5 justify-content-center IranYekan'}>
            <StyledTabs value={value} onChange={handleChange}  aria-label="styled tabs example">
                <StyledTab  label="پوست بدن"/>
                <StyledTab label="پوست و موی سر"/>
                <StyledTab label="پوست صورت و گردن"/>
            </StyledTabs>
        </div>

    );
}
