import { Component } from '@angular/core';
import { NavigationpanelComponent } from '../navigationpanel/navigationpanel.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  imports: [NavigationpanelComponent,RouterModule,LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
