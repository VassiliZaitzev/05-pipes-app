import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18nSelect
  public name:string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = 'melisa';
    this.gender = 'female';
  }

  //i18nPrural
  public clients:string [] = [
    'Pedro','Fernando','Maria', 'Valen'
  ];

  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.pop();
  }

  //keyvaluepipe
  public person = {
    name: 'James',
    age: 28,
    address: '123 Liberticity'
  }

  //async pipe

  public myObservableTimer = interval(2000)
  .pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa')
    },3500)
  })
}
