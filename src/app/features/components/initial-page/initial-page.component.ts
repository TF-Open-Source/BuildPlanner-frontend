import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {
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
}
