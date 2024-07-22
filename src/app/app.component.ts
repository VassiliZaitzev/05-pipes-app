import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pipesApp';

  public titles:string = 'jAmes JoHnSoN';

  constructor(
    private primeNGConfig:PrimeNGConfig
  ){}

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }
}
