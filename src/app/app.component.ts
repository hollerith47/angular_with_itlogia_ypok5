import {Component, HostListener} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  priceForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required],
  });

  carsData = [
    {
      image: '1.png',
      name:"Lamborghini Huracan Spyder",
      engine: 5.2,
      places: 5
    },
    {
      image: '2.png',
      name:"Chevrolet Corvette",
      engine: 6.2,
      places: 2
    },
    {
      image: '3.png',
      name:"Ferrari California",
      engine: 6.2,
      places: 5
    },
    {
      image: '4.png',
      name:"Lamborghini Urus",
      engine: 4.0,
      places: 5
    },
    {
      image: '5.png',
      name:"Audi R8",
      engine: 5.2,
      places: 2
    },
    {
      image: '6.png',
      name:"Аренда Chevrolet Camaro",
      engine: 2.0,
      places: 4
    },
  ];

  constructor(private fb: FormBuilder) {
  }

  goScroll(target: HTMLElement, car?:any) {
    target.scrollIntoView({behavior:'smooth'});
    if (car){
      this.priceForm.patchValue({car: car.name});
    }
  }

  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
  }

  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
  }


  onSubmit(){
    if (this.priceForm.valid){
      alert("Спасибо за заявку, мы свяжемся с вами в ближайщее время");
      this.priceForm.reset();
    }
  }
}
