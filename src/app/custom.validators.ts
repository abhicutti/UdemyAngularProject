import { FormControl } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
export class CustomValidators{
  static invalidProjectName(control:FormControl): {[s:string]: boolean}
  {
    if(control.value === 'Testproject')
    {
      return {'invalidProjectName': true}
    }
    return null;
  }

  static asyncInvalidProjectName(control:FormControl): Promise<any> | Observable<any>
  {
      const promise = new Promise((resolve, reject ) =>
      {
          setTimeout(() => {if (control.value === 'test') resolve({'invalidProjectName': true });
         else{
          resolve(null);
        }},2000);
      })
      return promise;
  }
}
