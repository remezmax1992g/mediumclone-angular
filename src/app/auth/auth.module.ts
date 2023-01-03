import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ReactiveFormsModule} from '@angular/forms'

import {RegisterComponent} from './components/register/register.component'
import {AuthRoutingModule} from './auth-routing.module'
import {StoreModule} from '@ngrx/store'
import {reducer} from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
})
export class AuthModule {}
