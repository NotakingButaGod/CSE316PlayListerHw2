import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { SongKeyPair, deleteSongCallback, hideDeleteSongModal} = this.props;
        let name = "Untitled";
        if(SongKeyPair !== null){
            name = SongKeyPair.song.title;
        }
        return (
            <div 
                class="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-song-root'>
                        <div class="modal-north">
                            Delete song?
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Are you sure you wish to permanently delete the {name} song?
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-song-confirm-button" 
                                class="modal-button" 
                                onClick={deleteSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideDeleteSongModal}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}