import {Component} from '@angular/core';
import { NgModel } from '@angular/forms';

export class Wash {
  constructor(public carWash: string,
              public service: string,
              public typeService: string,
              public typeAuto: string,
              public date: string,
              public time: string,
              public tel: any,
              public userName: string,
              public comment: any) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  wash: Wash = new Wash('', '', '', '', '',
    '', '+375', '', '' );
  carWashP: string[] = ['Ложинская', 'Горецкого', 'Боровляны'];
  serviceP: string[] = ['Автомойка', 'Химчистка', 'Полировка', 'Шиномонтаж'];
  typeServiceP: string[] = ['Мойка Стандарт', 'Мойка Премиум', 'Мойка Вип', 'Мойка Вип Плюс'];
  typeAutoP: string[] = ['Легковая', 'Джип', 'Грузовая'];
  timeP: string[] = ['8.00', '8.30', '9.00', '9.30', '10.00', '10.30', '11.00', '11.30',
    '12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00', '15.30', '16.00',
    '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00'];
  addWash(carWash: NgModel, service: NgModel, typeService: NgModel,
          typeAuto: NgModel, date: NgModel, time: NgModel, tel: NgModel,
          userName: NgModel, comment: NgModel) {
    console.log(carWash);
    console.log(service);
    console.log(typeService);
    console.log(typeAuto);
    console.log(date);
    console.log(time);
    console.log(tel);
    console.log(userName);
    console.log(comment);
  }
}
