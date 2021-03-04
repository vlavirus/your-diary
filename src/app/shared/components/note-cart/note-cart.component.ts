import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-cart',
  templateUrl: './note-cart.component.html',
  styleUrls: ['./note-cart.component.scss']
})
export class NoteCartComponent implements OnInit {

  @Input() note!: string;
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
