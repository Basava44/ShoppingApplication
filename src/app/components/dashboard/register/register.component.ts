import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/service/user.service';
import { User } from 'src/app/shared/store-utilities/interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.createForm();
  }

  ngOnInit(): void {}

  signUpForm!: FormGroup;

  createForm() {
    this.signUpForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  signUp() {
    const data: User = {
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
    };

    console.log(data);
    this.userService.signIn();
    window.location.reload();
  }
}
