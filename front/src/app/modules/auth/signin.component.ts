import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [
      `
          .login-form {
              max-width: 300px;
          }

          .login-form-forgot {
              float: right;
          }

          .login-form-button {
              width: 100%;
          }
    `
  ]
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;
  public error: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private auth: AuthService) {
  }

  onFormSubmit(): void {
    // tslint:disable-next-line:forin
    for (const i in this.signinForm.controls) {
      this.signinForm.controls[i].markAsDirty();
      this.signinForm.controls[i].updateValueAndValidity();
    }

    this.auth.login(this.signinForm.value.email, this.signinForm.value.password)
      .pipe(first())
      .subscribe(
        (success) => {
          if (success) {
            this.router.navigate(['/']);
          } else {
            this.error = 'Could not sign in';
          }
        },
        err => this.error = 'Could not authenticate'
      );

  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: [null, [Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
