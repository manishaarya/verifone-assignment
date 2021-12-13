import { Component, OnInit, Input } from '@angular/core';
import { ErrorConfig } from './error-message.model';
@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input() errorConfig:ErrorConfig | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
