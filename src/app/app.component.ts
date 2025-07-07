import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HttpClientModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader = true;

  constructor(private translate: TranslateService, private router: Router) {
    // Cargar idioma
    const browserLang = localStorage.getItem('lang') || translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'es');

    // Detectar rutas públicas
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const publicRoutes = ['/', '/login', '/register'];
        this.showHeader = !publicRoutes.includes(event.urlAfterRedirects);
      });
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  currentLang(): string {
    return this.translate.currentLang;
  }
}
