import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'educationcriterion'
})
export class EducationcriterionPipe implements PipeTransform {

  transform(value): any {
    if(value==0)
    {
      return "BE COMP/IT"
    }else if(value==1)
    {
      return "BCA/MCA"
    }
    else if(value==2)
    {
      return "Other"
    }
  }

}
