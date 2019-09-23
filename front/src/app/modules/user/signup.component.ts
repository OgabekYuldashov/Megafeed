import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {conf} from '../../config';
import {debounceTime, first, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
      `
          .login-form {
              max-width: 300px;
          }

          .login-form-button {
              width: 100%;
          }
    `
  ]
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg: string;

  // emailError = 'Please input a valid Email!';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')]
        , this.asyncEmailValidator.bind(this)],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onFormSubmit() {
    this.auth.signup(this.signupForm.value)
      .pipe(first())
      .subscribe(
        (resp: any) => {
          if (resp.error) {
            this.errorMsg = resp.message;
          } else {
            console.log('User created');
            this.errorMsg = null;
            localStorage.setItem('access_key', resp.data.token);
            this.router.navigate(['user', 'signin']);
          }
        },
        (err) => this.errorMsg = 'Could not Sign Up'
      );

  }

  asyncEmailValidator(control: FormControl): Observable<{ exists: boolean } | null> {
    console.log('Async Email Validation...');
    const email = control.value;
    return this.http.post(conf.BASE_URL + '/api/v1/users/validate_email', {email})
      .pipe(debounceTime(200), map((resp: any) => {
        console.log(resp);
        if (resp.data.exists === true) {
          // this.emailError = 'Email is in use';
          return {
            exists: true
          };
        }
        return null;
      }));
  }

}
