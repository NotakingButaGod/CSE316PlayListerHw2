import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const {EditSongCallback, hideEditSongModal} = this.props;
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root' style={{width : "800px"}}>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Title:
                                <input class="inputs" type="text" id="titleinput" size="30" style={{fontSize:"x-large"}}></input><br></br>
                                Artist:
                                <input class="inputs" type="text" id="artistinput" size="30" style={{fontSize:"x-large"}}></input><br></br>
                                Youtube Id:
                                <input class="inputs" type="text" id="youtubeidinput" size="30" style={{fontSize:"x-large"}}></input><br></br>
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={EditSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModal}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}