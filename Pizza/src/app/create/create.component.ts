import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userForm;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<CreateComponent>,
    private formBuilder: FormBuilder
    ) {
      this.userForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required),
          zip: new FormControl('', [Validators.required, Validators.minLength(5)]),
          city: new FormControl('', Validators.required),
          street: new FormControl('', Validators.required),
          state: new FormControl('', Validators.required),
          userType: new FormControl('1')
      });
    }

    states: string[] = [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
      'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
      'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    // form: FormGroup = n({
    //   name: new FormControl('', Validators.required),
    //   password: new FormControl('', Validators.required),
    //   zip: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   city: new FormControl('', Validators.required),
    //   street: new FormControl('', Validators.required),
    //   state: new FormControl('', Validators.required),
    //   userType: new FormControl('1')
    // });

  ngOnInit() {

  }

  OnSubmit()
  {
    console.log(this.userForm.value);
  }



}
