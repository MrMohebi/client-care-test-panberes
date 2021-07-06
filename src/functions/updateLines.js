import React from 'react';
import $ from "jquery";
import gsap from "gsap";

function UpdateLines(choices, firstHide) {
    for (let index = 0; index < document.querySelector('.selects').childNodes.length; index++) {

        let element = $("#choise-" + index);
        if (element.position()) {
            if (choices[index]) {


                let x1Line1 = (window.innerWidth) - $('#line' + index).position().left - choices[index].vectorX


                try {
                    document.querySelector('.selects').childNodes[index].childNodes[1].firstChild.style.transformOrigin = x1Line1 / 2 + "px 0px"
                    document.querySelector('.selects').childNodes[index].childNodes[1].firstChild.x1.baseVal.value = parseInt(window.innerWidth - $('#line' + index).position().left - choices[index].vectorX)
                    document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].x1.baseVal.value = parseInt(window.innerWidth - $('#line' + index).position().left - choices[index].vectorX)
                    document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].y2.baseVal.value = parseInt(window.innerHeight - $('#line' + index).position().top - choices[index].vectorY)
                    document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1].x2.baseVal.value = parseInt(window.innerWidth - $('#line' + index).position().left - choices[index].vectorX)


                } catch (e) {
                }

                gsap.to(document.querySelector('.selects').childNodes[index].firstChild, {
                    x: 0,
                    opacity: 1,
                    duration: 0.1,
                    delay: 0.1 * index,
                    onComplete: () => {
                        // if (document.querySelector('.selects').childNodes[index]) {
                        //     gsap.to(document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[0], {
                        //         strokeDashoffset: 0,
                        //         opacity: 1,
                        //         duration: 0
                        //     })
                        //     gsap.to(document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1], {
                        //         strokeDashoffset: 0,
                        //         duration: 0,
                        //         opacity: 1,
                        //
                        //         delay: 0.5
                        //     })
                        // }


                    }
                })

                if (document.querySelector('.selects').childNodes[index]) {
                    gsap.to(document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[0], {
                        strokeDashoffset: 0,
                        opacity: 1,
                        duration: 0,
                    })
                    gsap.to(document.querySelector('.selects').childNodes[index].childNodes[1].childNodes[1], {
                        strokeDashoffset: 0,
                        duration: 0,
                        opacity: 1,

                        delay: 0.5
                    })
                }


            }

        }


    }
}

export default UpdateLines


