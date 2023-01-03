import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  onSubmit(): void {
    console.log(this.form.value)
  }
}
