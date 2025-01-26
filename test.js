import { ytdlv2 } from './index.js'

(async () => {
    try {
        const result = await ytdlv2('https://youtube.com/watch?v=fO1iJqBdXrc', '720')
        console.log(result)
    } catch (e) {
        console.error(e.message)
    }
})()