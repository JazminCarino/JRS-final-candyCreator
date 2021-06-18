import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CandyService } from '../services/candy/candy.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  toppingsoptions = new FormControl();
  candyOptions: any[] = [];
  optionNames: string[] = [];

  constructor(
    private candyService: CandyService
  ) { }

  ngOnInit(): void {
    this.candyService.getAllOptions().subscribe(
      (data) => {
        // console.log(data.candyOptions);
        this.candyOptions = data.candyOptions;
      },
      (err) => {}
    );
  }

}


