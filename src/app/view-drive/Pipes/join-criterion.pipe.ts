import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinCriterion'
})
export class JoinCriterionPipe implements PipeTransform {

  transform(value): any {
    if(value==0)
    {
      return "Direct Joining"
    }else if(value==1)
    {
      return "3 Months Internship"
    }
  }

}
