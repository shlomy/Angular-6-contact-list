import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string , propName:string): any {
  
    if(value.length=== undefined || filterString===''){
     return value
    }
    
    
    const result = []
    for (const user of value) {
      if (user.name.first.match(filterString)) {
        result.push(user)
      }

    }

    return result

  }

}
