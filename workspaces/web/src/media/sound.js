import { Howl } from "howler"

const sound = {
    correct: () => playAudio("sound","correct"),
    wrong: () => playAudio("sound","wrong"),
    fanfare: () => playAudio("sound","fanfare")
}

export const playAudio = (type,filename) => {
    if(!window.Cypress){
        new Howl({
            src: [`${type}/${filename}.mp3`],
        }).play()
    }
}

export default sound