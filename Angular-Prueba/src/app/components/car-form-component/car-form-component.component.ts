import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CarServiceService } from 'src/app/Service/car-service.service';

@Component({
  selector: 'app-car-form-component',
  templateUrl: './car-form-component.component.html',
  styleUrls: ['./car-form-component.component.css']
})
export class CarFormComponentComponent implements OnInit {

  carForm = this.fb.group({
    name: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private carServiceService: CarServiceService) {}


  ngOnInit(): void {
  }

  onSubmit() {
    if (this.carForm.valid) {

      const car = this.carForm.value;
      this.carServiceService.addCar(car);
      this.carForm.reset();

    }
  }

}
