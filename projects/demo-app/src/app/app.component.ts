import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng-buddhist-datepicker';


@Component({
  selector: 'app-root',
  imports: [DatePickerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';

  date:any;
  dateRange: any;
  

  logData(){
    console.log(this.dateRange)
  }
}
