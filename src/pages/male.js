import React, {useState} from 'react';
import '../css/Main.css'
import MC from "../components/MC";
import male from '../assets/img/vectors/male.png'
import maleBody from '../assets/img/vectors/male-body.png'
import maleFullBody from '../assets/img/vectors/male-full-body.png'
import * as options from '../assets/options'

const Male = () => {
    let [currentPart, setPart] = useState(0)

    let vectors = [
        {
            vector: male,
            size: {
                x: 150,
                y: 300
            }
        }, {
            vector: maleBody,
            size: {
                x: 200,
                y: 325
            }
        }, {
            vector: maleFullBody,
            size: {
                x: 105,
                y: 373
            }
        },

    ]


    return (
        <div>
            {/*<div className={'vector-helper-y'}>*/}
            {/*    {*/}

            {/*        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(eachNum => {*/}
            {/*            return (*/}
            {/*                <div key={eachNum + 10} className={'helpers-y'}> {eachNum * 50 + 50}</div>*/}
            {/*            )*/}
            {/*        })*/}

            {/*    }*/}
            {/*</div>*/}
            <MC tabs={['پوست صورت و گردن', 'پوست و موی سر', 'پوست بدن']} refreshBack={setPart}
                backgroundClass={'male-main-container'}
                colorTheme={'male'}
                choices={options.maleOptions[currentPart]} vector={`url(${vectors[currentPart]['vector']})`}
                vecWidth={vectors[currentPart]['size']['x']} vecHeight={vectors[currentPart]['size']['y']}/>
        </div>

    );
};

export default Male;
