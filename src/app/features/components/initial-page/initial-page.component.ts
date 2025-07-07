import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-initial-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {
  constructor(private router: Router, private translate: TranslateService) { }
  images = [
    'assets/image/slide1.png',
    'assets/image/slide2.png',
    'assets/image/slide3.png'
  ];
  currentImageIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000);
  }
  switchLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  currentLang(): string {
    return this.translate.currentLang;
  }
}
