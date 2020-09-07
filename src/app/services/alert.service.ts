import { Injectable } from '@angular/core';
import alert from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public showAlert(title: string, message: string, type: any) {
    alert.fire({
      title,
      text: message,
      icon: type,
      showCloseButton: true
    });
  }

  public showConfirm(title: string, message: string, icon='warning') {
    return alert.fire({
      title: title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    });
  }
}
