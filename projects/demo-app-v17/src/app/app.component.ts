import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng-buddhist-datepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app-v17';
  
  date:any;
  dateRange: any;
}
