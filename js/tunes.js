let current_song = -1

function play_next_song(){
    current_song++
    let song = "!"
    for (let [key, values] of Object.entries(tunes)){
        if (key == current_song){
            song = new Song(values)
            song.start()
            return 1
        }
    }
}

class Song {
    constructor(values){
        this.song_name = values.title
        this.album = values.album
        this.cover = values.cover
        this.desc = values.desc
        this.tune = values.tune
        console.log("made song class")
        console.log(values)
    }

    start() {
        console.log(this.tune)
        let audio_player = document.getElementById("tuneBH")
        audio_player.setAttribute("src", this.tune)
        audio_player.play()
    }

    stop() {
        console.log("stopped", this.song_name)
    }
}

const tunes = {
    0 : {
        title:"mona",
        album:"asefewf",
        cover:"lawejdifsorf",
        desc: "s34895703",
        tune: "tunes/bh.mp3"
    },
    1 : {
        title:"blå",
        album:"asefewf",
        cover:"lawejdifsorf",
        desc: "s34895703",
        tune: "tunes/ml.mp3"
    },
    2 : {
        title:"diller",
        album:"asefewf",
        cover:"lawejdifsorf",
        desc: "s34895703",
        tune: "new Audio"
    },
    3 : {
        title:"sejr",
        album:"asefewf",
        cover:"lawejdifsorf",
        desc: "s34895703",
        tune: "new Audio"
    } 
}