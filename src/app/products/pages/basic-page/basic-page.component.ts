import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {
  public nameLower:string = 'james';
  public nameUpper:string = 'James';
  public fullName:string = 'JaMeS JoHnSoN';

  public customDate:Date = new Date();
}
