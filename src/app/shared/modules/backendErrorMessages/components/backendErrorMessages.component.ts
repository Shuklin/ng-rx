import {Component, Input, OnInit} from "@angular/core";
import {BackendErrorsInterface} from "../../../types/backendErrors.interface";

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss']

})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

  errorMessages: string[];

  ngOnInit() {
    this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
      console.log(name, this.backendErrorsProps[name]);
      const messages = this.backendErrorsProps[name].join(', ');
      console.log(messages);

      return `${name} ${messages}`;
    })
  }
}
