import { Howl } from "howler"

const sound = {
    correct: new Howl({
        src: ["sound/correct.mp3"]
    }),
    wrong: new Howl({
        src: ["sound/wrong.mp3"]
    }),
    fanfare: new Howl({
        src: ["sound/fanfare.mp3"]
    })
}

export default sound
