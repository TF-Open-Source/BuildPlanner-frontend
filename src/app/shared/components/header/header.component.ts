import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import {NgClass, NgIf} from '@angular/common';
import {ClickOutsideDirective} from './click-outside.directive';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    NgIf,
    ClickOutsideDirective,
    NgClass,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  dropdownStates: {[key:string]:boolean} = {
    settings: false,
    account: false
  };

  isMobileMenuOpen = false;

  toggleDropDown(event: MouseEvent, key: string) : void {
    event.stopPropagation();
    this.dropdownStates[key] = !this.dropdownStates[key];
    Object.keys(this.dropdownStates).forEach(k => {
      if (k !== key){
        this.dropdownStates[k] = false;
      }
    })
  }

  closeDropDown(key: string) : void {
    this.dropdownStates[key] = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  goToAccount(): void {
    console.log('Click Detectado');
    this.router.navigate(['/account']);
  }
  goToConfigurations(): void {
    this.router.navigate(['/configurations']);
  }
}
