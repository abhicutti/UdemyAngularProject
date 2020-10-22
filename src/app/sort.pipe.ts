
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    console.log(value);

 return value.sort((a, b) => {
   console.log(propName);
   console.log(a,b);
  console.log(a[propName],b[propName]);
   if(a> b)
   {
console.log(1)
     return 1
   }
   else
   {
     console.log(2);
     return -1
   }
 });
  }

}
