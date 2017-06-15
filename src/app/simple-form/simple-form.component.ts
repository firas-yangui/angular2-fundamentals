import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  onClick() {
    console.log('clicked!');
  }

  constructor(@Inject('mail') private mail) {
    setInterval(() => this.message = Math.random().toString(), 1000);
  }

  ngOnInit() {
  }

}
