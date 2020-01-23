import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentstatus'
})
export class CurrentstatusPipe implements PipeTransform {

  transform(value): any {
    if(value==0)
    {
      return "Created";
    }else if(value==1)
    {
      return "Resume sent"
    }else if(value==2)
    {
      return "Aptitude Done"
    }
    else if(value==3)
    {
      return "Assignment Done"
    }
    else if (value==4)
    {
      return "F2F/HR"
    }else if(value==5)
    {
      return "Completed";
    }
  }

}
