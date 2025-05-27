import { Component , OnInit} from '@angular/core';
import {RouterOutlet, NavigationEnd, Router} from '@angular/router';
import {HeaderComponent} from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {NgIf} from '@angular/common';
import { filter } from 'rxjs/operators';
import {ClickOutsideDirective} from './shared/components/header/click-outside.directive';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgIf, ClickOutsideDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'BuildPlannerFrontend';

  isAuthRoute = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isAuthRoute = event.urlAfterRedirects.startsWith('/auth');
      });
  }
}
