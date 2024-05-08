import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/Service/car-service.service';

@Component({
  selector: 'app-car-list-component',
  templateUrl: './car-list-component.component.html',
  styleUrls: ['./car-list-component.component.css']
})
export class CarListComponentComponent implements OnInit {

  cars = [];

  constructor(private carServiceService: CarServiceService) {
    this.cars = this.carServiceService.cars;
  }
  ngOnInit(): void {
  }

  markSold(carId: string) {
    this.carServiceService.markSold(carId);
  }

  markAvailable(carId: string) {
    this.carServiceService.markAvailable(carId);
  }
}
