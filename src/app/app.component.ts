import { AppSettingsComponent } from './app-settings/app-settings.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = "David\'s site";
  URLClassicPong: string = AppSettingsComponent.URL_CLASSICPONG;

  ngOnInit(): void {
  }
}
