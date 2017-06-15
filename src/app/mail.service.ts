import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  message = `you've got mail`;

  messages = [
    {id: 0, text: `you're now friends with John`},
    {id: 1, text: ` hello hahahaha`},
    {id: 2, text: `John is not here!`}
  ];

  constructor() { }

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id
        ? {id, text}
        : m
    )
  }
}
