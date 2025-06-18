import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
      throw new Error('Method not implemented.');
  }
  constructor(private translate: TranslateService) {
    const browserLang = localStorage.getItem('lang') || translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'es');
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  currentLang(): string {
    return this.translate.currentLang;
  }
}
