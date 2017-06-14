import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  message = `you've got mail`;

  messages = [
    `you're now friends with John`,
    ` hello hahahaha`,
    `John is not here!`
  ];
  constructor() { }

}
