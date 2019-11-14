import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { TestMergeBranchComponent } from './test-merge-branch/test-merge-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    NewCompComponent,
    TestMergeBranchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
