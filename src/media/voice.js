import { Howl } from "howler"

const playVoice = voice => {
    new Howl({
        src: [`voice/${voice}.mp3`]
    }).play()
}

export default playVoice
