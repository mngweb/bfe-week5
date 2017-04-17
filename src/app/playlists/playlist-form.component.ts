import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
        <div>
        
         <!-- ZAD.3 -->
         <!-- ZAD.5 -->

        <form (submit)="save(_playlistCopy)">
          <div class="form-group">
            <label>Nazwa:</label>
            <input type="text" name="name" [(ngModel)]="_playlistCopy.name" class="form-control">
          </div>
          <div class="form-group">
            <label>Utwory:</label>
            <input type="text" name="tracks" [value]="_playlistCopy.tracks + ' utwory'" disabled class="form-control">
          </div>
          <div class="form-group">
            <label>Kolor:</label>
            <input type="color" name="color" [(ngModel)]="_playlistCopy.color">
          </div>
          <div class="form-group">
            <label><input type="checkbox" name="favourite" [(ngModel)]="_playlistCopy.favourite"> 
            Ulubiona</label>
          </div>
          <div class="form-group">
            <button class="btn btn-success float-xs-right">Zapisz</button>
            <!-- <button class="btn btn-success float-xs-right" 
                    (click)="save(_playlistCopy)">Zapisz</button> -->
          </div>
        </form>
        
        </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  // ZAD.5
  _playlistCopy = {};

  @Input()
  set playlist(playlist) {
     this._playlistCopy = Object.assign({},playlist);
  }


  @Output('saved')
  onSave = new EventEmitter();


  // ZAD.5
  save(playlist){
    this.onSave.emit(this._playlistCopy)
  }

  constructor() { }

  ngOnInit() {
  }

}
