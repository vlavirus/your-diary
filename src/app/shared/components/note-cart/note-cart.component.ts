import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-cart.component.html',
  styleUrls: ['./note-cart.component.scss']
})
export class NoteCartComponent implements OnInit {

  constructor() { }

  date = new Date();

  ngOnInit(): void {
  }

}
