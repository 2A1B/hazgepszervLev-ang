import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-qrcode',
  template: `
    <div style="padding-left: 20px">
      <qr-code [value]="value" [size]="120"></qr-code>
    </div>
  `
})
export class QrcodeComponent {
  @Input() value: string;
  constructor() { }
}
