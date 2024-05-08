import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFormat'
})
export class DataFormatPipe implements PipeTransform {

  transform(value: Date, format: string = 'D'): string {

    const now = new Date();

    const difflnSeconds = Math.floor((now.getTime() - value.getTime()) / 1000);

    const difflnMinutes = Math.floor(difflnSeconds / 60);


    
  }

}
