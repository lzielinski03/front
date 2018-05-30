import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * Send the data to an API to register a user
   * 
   */
  register() {
    // ...
  }

  /**
   * Send the credentials to an API to authenticate a user
   * 
   */
  auhenticate() {
    // ...
  }

  /**
   * Inform to an API that the user lost his password
   * 
   */
  resetPassword() {
    // ...
  }

  /**
   * Send the new credentials to an API to update it
   * 
   */
  changePassword() {
    // ...
  }

  /**
   * Send the token to an API to validate it
   * 
   */
  validateToken() {
    // ...
  }
}
