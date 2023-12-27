import { Component } from '@angular/core';
import { registry } from 'src/app/registry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  protected get registryConfig() {
    return registry;
  }
}
