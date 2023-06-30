import{Pipe, PipeTransform} from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({name: 'profit'})

export class ProfitPipe implements PipeTransform {
    transform(value: number, ProfitPercentage = 10) : string {
            return (value * ProfitPercentage*1/100).toFixed(2);
    } 
}