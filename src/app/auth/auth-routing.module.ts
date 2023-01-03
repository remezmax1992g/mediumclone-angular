import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {RegisterComponent} from './components/register/register.component'

const authRoutes: Routes = [{path: 'register', component: RegisterComponent}]

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
