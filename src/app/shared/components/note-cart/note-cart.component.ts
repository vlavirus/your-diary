import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-cart',
  templateUrl: './note-cart.component.html',
  styleUrls: ['./note-cart.component.scss']
})
export class NoteCartComponent implements OnInit {

  date: Date = new Date();
  @Input() note!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
