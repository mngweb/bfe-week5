import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-detail',
  template: `
    <p class="card-text">Wybrana Playlista</p>
    <div class="form-group">
      <button class="btn btn-default float-xs-right" (click)="edit(playlist)">Edytuj</button>
    </div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  @Input()
  playlist;

  @Output('editplaylist')
  emitter = new EventEmitter(); 

  edit(playlist){
    this.emitter.emit(playlist)
  }

  constructor() { }

  ngOnInit() {
  }

}
