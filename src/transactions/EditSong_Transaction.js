import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp) {
        super();
        this.app = initApp;
        this.id = this.app.state.SongKeyPairMarkedForEdition.key;
        this.oldsong = {title : this.app.state.SongKeyPairMarkedForEdition.song.title, artist: this.app.state.SongKeyPairMarkedForEdition.song.artist, youTubeId: this.app.state.SongKeyPairMarkedForEdition.song.youTubeId};
        this.newsong = {title: document.getElementById("titleinput").value, artist: document.getElementById("artistinput").value, youTubeId: document.getElementById("youtubeidinput").value};
    }
    doTransaction() {
        this.app.EditMarkedSong(this.id, this.newsong.title, this.newsong.artist, this.newsong.youTubeId);
    }
    
    undoTransaction() {
        this.app.EditMarkedSong(this.id, this.oldsong.title, this.oldsong.artist, this.oldsong.youTubeId);
    }
}