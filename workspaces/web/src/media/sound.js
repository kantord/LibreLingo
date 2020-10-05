import { Howl , Howler } from "howler"

const disableHowlerForCypress = () => {
    if (Howler.volume() !== 0 && typeof window !== 'undefined' && window.Cypress) {
        Howler.volume(0);
        console.log('Sounds while testing with cypress are disabled')
    }
}

const sound = {
    correct: new Howl({
        src: ["sound/correct.mp3"],
        onload: disableHowlerForCypress
    }),
    wrong: new Howl({
        src: ["sound/wrong.mp3"],
        onload: disableHowlerForCypress
    }),
    fanfare: new Howl({
        src: ["sound/fanfare.mp3"],
        onload: disableHowlerForCypress
    }),
}

export const playAudio = (type,filename) => {
    disableHowlerForCypress
    
    new Howl({
        src: [`${type}/${filename}.mp3`],
    }).play()
}

export default sound
