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
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp) {
        super();
        this.app = initApp;
        this.id = this.app.state.SongKeyPairMarkedForDeletion.key;
        this.savesong = {title : this.app.state.SongKeyPairMarkedForDeletion.song.title, artist: this.app.state.SongKeyPairMarkedForDeletion.song.artist, youTubeId: this.app.state.SongKeyPairMarkedForDeletion.song.youTubeId};
    }

    doTransaction() {
        this.app.deleteMarkedSong(this.id);
        
    }
    
    undoTransaction() {
        this.app.createNewSong(this.savesong.title, this.savesong.artist, this.savesong.youTubeId, this.id);
    }
}