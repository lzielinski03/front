import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthComponent],
  providers: [AuthService]
})
export class AuthModule { }
