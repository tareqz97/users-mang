import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { LocalStorage as ls } from "../../../utils/localstorage.service";
import { FirebaseService } from '../firebase.service';
// import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  defaultAuth = {
    email: '',
    password: '',
  };
  loginForm: FormGroup;
  errorMsg: string;
  alertEle: Element;
  currentUser: any = {};
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private firebase: FirebaseService
    // private spinner: NgxSpinnerService
  ) {
    // this.spinner.show();
  }

  ngOnInit(): void {
    // this.spinner.show();
    this.alertEle = document.getElementById("error-panel");
    this.toggleErrorMsg("hide");
    this.initForm();
    }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [
        this.defaultAuth.email,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }


  async submit(){
    this.toggleErrorMsg("hide");
    await this.firebase.signin(this.f.email.value,this.f.password.value);
    if(this.firebase.isLoggedIn){
      this.currentUser["first_name"] = "Admin";
      this.currentUser["last_name"] = "";
        ls.setValue("currentUser", this.currentUser);
        this.router.navigate(["/users"]);
    }else{
      this.toggleErrorMsg("show");
    }
  }
  submit1() {
    // this.spinner.show();
    this.toggleErrorMsg("hide");
    // 
    // const data = new FormData();
    // data.append("email", this.f.email.value);
    // data.append("password", this.f.password.value);

    const data = {
      email: this.f.email.value,
      password: this.f.password.value
    };
    // 
    this.authService.loginCustom(data).subscribe(
      (res) => {
        let currentUserModel = res["user"];
        currentUserModel["Authorization"] = "Bearer " + res["access_token"];
        ls.setValue("currentUser", currentUserModel);
        this.router.navigate(["/dashboard"]);
      },
      (err) => {
        this.setErrorMsg(err.error.message);
        this.toggleErrorMsg("show");
        // this.spinner.hide();
      }
    );
  }

  setErrorMsg(str){
    this.alertEle.innerHTML = str;
  }

  toggleErrorMsg(status){
    if(status === "show") this.alertEle.classList.remove("hide");
    else this.alertEle.classList.add("hide");
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
    // this.spinner.show();
  }
}
