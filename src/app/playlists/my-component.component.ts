import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
      <div class="form-group">
        <label>Nazwa:</label>
        <input type="text" name="name" class="form-control">
      </div>
      <div class="form-group">
        <label>Utwory:</label>
        <input type="text" name="tracks" disabled class="form-control">
      </div>
      <div class="form-group">
        <label>Kolor:</label>
        <input type="color" name="color">
      </div>
      <div class="form-group">
        <label><input type="checkbox" name="favourite"> 
        Ulubiona</label>
      </div>
  `,
  styles: []
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
