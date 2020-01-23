import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nxtAction'
})
export class NxtActionPipe implements PipeTransform {

  transform(value): any {
    
    if(value==0)
    {
      return "Send Resume"
    }else if(value==1)
    {
      return "Aptitude Test"
    }
    else if(value==2)
    {
      return "Assignment Allocation"
    }
    else if (value==3)
    {
      return "F2F/HR Round"
    }else if(value==4)
    {
      return "Selection";
    }
  }

}
