import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  //https://bpmwtdev.wistron.com/rest/bpm/wle/v1/exposed/service的header中带上username和password，返回的reppose中取到token
  onSubmit(): void {
    let url = "https://bpmwtdev.wistron.com/rest/bpm/wle/v1/exposed/service";
    let username = "Z19050796";
    let password = "852!qaZ74?";
    this.http.get(
      url,
      {
        headers: {
          username,
          password,
        },
        params: {

        },
        responseType:   'json',
        withCredentials: true,
      }
    ).subscribe((res)=>{
        console.log(res);
    });
  }
}
