import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: []
})
export class SimpleFormComponent implements OnInit {

  onClick() {
    console.log('clicked!');
  }

  constructor(private mail:MailService) { }

  ngOnInit() {
  }

}
