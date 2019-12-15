import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DesignMatDialogComponent } from '../design-mat-dialog/design-mat-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-app-mat-custom',
  templateUrl: './app-mat-custom.component.html',
  styleUrls: ['./app-mat-custom.component.css','../../assets/style.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppMatCustomComponent implements OnInit {

  articleGroup:string

  constructor(public dialog: MatDialog) { }
 
  animal: string;
  name: string;

  ngOnInit() {
  }

  onClickMatHeader(param){
    console.log(param);
    
    // articleGroup
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DesignMatDialogComponent, {
      width: '80%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
