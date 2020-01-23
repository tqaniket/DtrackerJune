import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gapRequired'
})
export class GapRequiredPipe implements PipeTransform {

  transform(value): any {
    if(value==0)
    {
      return "No";
    }else if(value==1)
    {
      return "Yes";
    }
  }

}
