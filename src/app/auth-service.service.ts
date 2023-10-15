import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  
  constructor() { }
  checkUserNameandPassword( username:string, password:string){
    if(username =='rupali' && password=='123'){
      localStorage.setItem('username','rupali');
      return true;
    }else{
      return false;
    }

  }
}
