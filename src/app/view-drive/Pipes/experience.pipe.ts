import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

  transform(value): any {
   if(value==0)
   {
     return "Fresher";
   }
   else if(value==1)
   {
     return "0-3 Months";
   }else if(value==2)
   {
     return "3-6 Months"
   }else if(value==3)
   {
    return "6+ Month"
   }
   else if(value==4)
   {
      return "other";
   }
  }

}
