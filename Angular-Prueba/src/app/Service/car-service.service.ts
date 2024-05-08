import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface Car {
  id: string,
  name: string,
  sold: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  private cars: Car[] = [];

  constructor() {
    const storedCars = localStorage.getItem('cars');
    if (storedCars) {
      this.cars = JSON.parse(storedCars);
    } 
   }

   addCar(car: Car) {
    this.cars.push(car);
    localStorage.setItem('cars', JSON.stringify(this.cars));
   }

   markSold(cardId: string) {
     this.cars = this.cars.map( car => car.id === carId? {

      ...car, sold: true } :car);
      localStorage.setItem('cars', JSON.stringify(this.cars))
   }

   markAvailable(cardId: string) {
     this.cars = this.cars.map( car => car.id === carId? {

      ...car, sold: false } :car);
      localStorage.setItem('cars', JSON.stringify(this.cars))
   }
}
