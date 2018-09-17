import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  data: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this.http.post('/api/myform', this.data).subscribe((value) => {
        // TODO
      }, (error) => {
        console.log(error);
      });
    }
  }

}
