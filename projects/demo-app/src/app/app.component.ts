import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng-buddhist-year-datepicker';


@Component({
  selector: 'app-root',
  imports: [DatePickerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';

  // Scenario 1: Display พ.ศ., Output ค.ศ.
  date1: Date | null = null;

  // Scenario 2: Display พ.ศ., Output พ.ศ.
  date2: Date | null = null;

  // Scenario 3: Display ค.ศ., Output ค.ศ.
  date3: Date | null = null;

  // Scenario 4: Range with พ.ศ. output
  dateRange: Date[] | null = null;
}
