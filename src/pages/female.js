import React, {useEffect, useState} from 'react';
import '../css/Main.css'
import MC from "../components/MC";
import female from '../assets/img/vectors/female.png'
import femaleBody from '../assets/img/vectors/female-body.png'
import femaleFullBody from '../assets/img/vectors/female-full-body.png'
import * as options from '../assets/options'

const Female = () => {
    let [currentPart, setPart] = useState(0)

    let vectors = [
        {
            vector: female,
            size: {
                x: 150,
                y: 340
            }
        }, {
            vector: femaleBody,
            size: {
                x: 200,
                y: 295
            }
        }, {
            vector: femaleFullBody,
            size: {
                x: 105,
                y: 378
            }
        },
    ]


    useEffect(() => {
        console.log(currentPart)

    }, [currentPart])

    return (
        <div>

            <MC tabs={['پوست صورت و گردن', 'پوست و موی سر', 'پوست بدن']} refreshBack={setPart}
                backgroundClass={'female-main-container'}
                colorTheme={'female'}
                choices={options.femaleOptions[currentPart]} vector={`url(${vectors[currentPart]['vector']})`}
                vecWidth={vectors[currentPart]['size']['x']} vecHeight={vectors[currentPart]['size']['y']}/>
        </div>

    );
};

export default Female;
