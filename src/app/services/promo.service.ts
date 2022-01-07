import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(
    private messageService: NzMessageService
  ) { }

  messageError(ex: string | Error | unknown) {
    if (ex == null) {
      this.messageService.error('');
    }
    else if (typeof ex === 'string') {
      this.messageService.error(ex);
    }
    else if (ex instanceof Error) {
      this.messageService.error(ex.message);
    }
    else if (ex instanceof Object) {
      this.messageService.error(ex.toString());
    }
  }
}
