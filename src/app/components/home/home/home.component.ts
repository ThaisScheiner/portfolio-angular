import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    const myCarousel = document.querySelector('#carouselExampleIndicators');

    if (myCarousel && (window as any).bootstrap) {
      new (window as any).bootstrap.Carousel(myCarousel);
    } else {
      console.error('Bootstrap não encontrado ou carrossel não identificado.');
    }
  }
}
