import React from 'react';
import $ from "jquery";
import * as options from '../assets/options'

function UpdateLines(section, part,gender) {

    console.clear()
    console.log(part)
    console.log(options.maleOptions)

    let genderOptions = gender==='male'?options.maleOptions:options.femaleOptions

    for (let index = 0; index < document.querySelector('.selects').childNodes.length; index++) {
        let element = $("#choise-" + index);
        if (element.position()) {
            if (genderOptions[section][part][index]) {
                let line = $('#line' + index)
                let x1Line1 = (window.innerWidth) - (line.position().left - genderOptions[section][part][index].vectorX)
                document.querySelector('.selects').childNodes[index].childNodes[1].firstChild.style.transformOrigin = x1Line1 / 2 + "px 0px"
                document.querySelector('.selects').childNodes[index].childNodes[1].firstChild.x1.baseVal.value = ((window.innerWidth - line.position().left) - genderOptions[section][part][index].vectorX)
                document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].x1.baseVal.value = ((window.innerWidth - line.position().left) - genderOptions[section][part][index].vectorX)
                document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].y2.baseVal.value = ((window.innerHeight - line.position().top) - genderOptions[section][part][index].vectorY)
                document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].x2.baseVal.value = ((window.innerWidth - line.position().left) - genderOptions[section][part][index].vectorX)
            }

        }


    }
}

export default UpdateLines


