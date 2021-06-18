import { Component, OnInit } from '@angular/core';
import { Candy } from 'src/app/models/candy.model';
import { CandyService } from '../../../services/candy/candy.service';
import { FormControl } from '@angular/forms';
import { CandyOption } from 'src/app/models/candyOption.model';

@Component({
  selector: 'creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css'],
})
export class CreationFormComponent implements OnInit {
  candyOptions: CandyOption[] = [];
  optionNames: string[] = []; // ['flavor', 'shape']
  optionNumber: number = 0;
  myCandy: Candy = {};

  optionMap: { name: string; catId: number; values: {name: string, id: number}[] }[] = [];

  currentOption = 0;

  constructor(private candyService: CandyService) {}

  ngOnInit(): void {
    this.candyService.getAllOptions().subscribe(
      (data) => {
        // console.log(data.candyOptions);
        // this.candyOptions = data.candyOptions;
        for (let option of data.candyOptions as CandyOption[]) {
          let name = option.optionName;
          //if a new unique value for a name,
          // then push into optionName [];
          let mapObj = this.optionMap.find(
            (o) => o.name == name && o.catId == option.catId
          );
          if (mapObj == null) {
            //new name found
            this.optionMap.push({
              name: name,
              catId: option.catId,
              values: [{name: option.optionValue, id: option.id}],
            });
          } else {
            // duplicate
            // also push data.candyOptions.opitonValue into that object's 'value' []
            // optionMap[i].values.push(data.optionValue.optionValue);
            console.log('not new', name);
            mapObj.values.push({name: option.optionValue, id: option.id});
          }
        }
        console.log(this.optionMap);

        // end goal::::
        // let optionMap = [
        //   {
        //     name: 'chocFlavor',
        //   values: ['milk', 'dark', 'white']
        // }
        // ];

        // option = optionMap[0]
        // let optionName = option.name
        // values = option.values;
      },
      (err) => {}
    );
  }

  pickCategory(catId: number) {
    // ['flavor', 'addIn', 'finish']; - chocolate
    // ['flavor', 'addIn', 'shape', 'color', 'finish'] - gummy

    this.myCandy.catId = catId;
    if (this.myCandy.catId == 1) {
      this.optionNames = ['chocFlavor', 'flavor', 'addIn', 'finish'];
    } else {
      this.optionNames = ['flavor', 'shape', 'color', 'finish'];
    }
  }

  pickOption(optionName: string) {
    // this.myCandy.flavor1.name = optionName;
    // this.getOptions(this.myCandy.flavor1.name, this.myCandy.catId);
  }

  getOptions(option: string, category: number) {
    this.candyService.getAllOptions().subscribe(
      (data) => {
        console.log(data, 'options recieved from the service');
        this.myCandy = data.myCandy;
      },
      (error) => {
        console.error('ERROR: ', error);
      }
    );
  }

  checkboxChanged(name, value) {
    console.log(this.myCandy, name, value);
    //assign the value to the creation object
    // check if 2 options are selected
    // maybe if 2 are already selected, overwrite one of them
  }

  goBack() {}

  goNext() {}

  onComplete() {
    // when its all done and created
    // save it to the cart => probably in some service
  }

  addSecondOption(optionName: string) {
    let i = this.optionNames.indexOf(optionName);
    this.optionNames.splice(i, 0, optionName);
  }

  removeSecondOption(optionName: string) {
    let i = this.optionNames.indexOf(optionName);
    this.optionNames.splice(i, 1);
  }
}
