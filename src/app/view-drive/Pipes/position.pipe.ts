import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(value): any {
    if(value==0)
    {
      return "Full Stack Developer";
    }else if(value==1)
    {
      return "UI Developer"
    }else if(value==2)
    {
      return "Middleware and Backend"
    }
    else if(value==3)
    {
      return "Software Tester"
    }
  }

}
