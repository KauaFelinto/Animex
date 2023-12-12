import { Component, Input, OnInit } from '@angular/core';
import { CarrousselModule } from './carroussel.module';
import { CommonModule } from '@angular/common';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
};

@Component({
  selector: 'app-carroussel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carroussel.component.html',
  styleUrl: './carroussel.component.css'
})
export class CarrousselComponent implements OnInit{
  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 1000;

  selectedindex = 0; 

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  //set index image
  selectImage(index: number): void {
    this.selectedindex = index;
  }

  onPrevClick(): void{
    if(this.selectedindex === 0){
      this.selectedindex = this.images.length - 1;
    } else{
      this.selectedindex--;
    }
  }

  onNextClick(): void {
    if(this.selectedindex === this.images.length - 1){
      this.selectedindex = 0;
    } else{
      this.selectedindex++;
    }
  }
}
