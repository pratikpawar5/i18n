import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feed-back-form',
  templateUrl: './feed-back-form.component.html',
  styleUrls: ['./feed-back-form.component.scss']
})
export class FeedBackFormComponent implements OnInit {

  feedBackForm:FormGroup;
  genderList: string[] = ['Male','Female','Other'];

  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.feedBackForm = this.formBuilder.group({
      name:new FormControl(null,Validators.required),
      gender:new FormControl(null,Validators.required),
      rating:new FormControl(null),
      comment:new FormControl(null,Validators.required),
    })
  }

  onClickSubmitForm()
  {
    if(this.feedBackForm.valid)
    {

    }
  }

}
