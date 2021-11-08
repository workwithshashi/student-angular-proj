import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { ApicallComponent } from './utilities/apicall/apicall.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailsComponent,
    MessageComponent,
    ApicallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
