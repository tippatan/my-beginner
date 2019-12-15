import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatInputModule} from '@angular/material';


@Component({
  selector: 'app-design-mat-dialog',
  templateUrl: './design-mat-dialog.component.html',
  styleUrls: ['./design-mat-dialog.component.css']
})
export class DesignMatDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DesignMatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  dataInject:any;
    text:string = 'body content popup';

  ngOnInit() {
    this.dataInject = this.data;

    console.log(this.dataInject);
    
  }

  onNoClick(){
    this.dialogRef.close;
  }

}
