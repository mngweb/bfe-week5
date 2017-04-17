import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {


  selected = null;

  edited = {

  }

  mode="none"

  playlists = [
    {
      id: 1,
      name: 'Angular Greatest Hits!',
      tracks: 2,
      color: '#FF0000',
      favourite: true,
    },
    {
      id: 2,
      name: 'The best of EduWeb!',
      tracks: 23,
      color: '#0000FF',
      favourite: false,
    }
  ]
  
  select(playlist){
    if(playlist !== this.selected)
    this.mode = "selected"
    this.selected = playlist;
  }

  edit(playlist){
    this.mode = "edit";
    this.edited = playlist;       // ZAD.5
    this.selected = playlist;
  }

  //ZAD.4
  delete(index){
    this.playlists.splice(index, 1);
  }


  createNew(){
    this.mode = "edit";
    var newPlaylist = {
      name: '',
      tracks: 0,
      color: '#FF0000',
      favourite: false
    };
    this.selected = newPlaylist;
    this.edited = newPlaylist;       // ZAD.5
  }

  save(playlist){
    if(playlist.id){
      let index = this.playlists.findIndex((old_playlist)=>(
        old_playlist.id === playlist.id
      ))
      this.playlists.splice(index,1,playlist)
    }else{
      playlist.id = Date.now()
      this.playlists.push(playlist);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
