# 📅 Primeng Buddhist Datepicker

This library extends the [PrimeNG Datepicker](https://primeng.org/datepicker) to support **Buddhist Year (BE)** display.

> ✅ Built with [Angular CLI](https://github.com/angular/angular-cli) v19.2.0  
> 📦 Uses **PrimeNG v19.1.3**

---

## 🧪 Run Demo App

To see how the component works:

```bash
npm install
ng serve
```


## 🧪 Import Modules Into Component
```
import { DatePickerModule } from 'primeng-buddhist-datepicker';
@Component({
  selector: 'your-component',
  standalone: true,
  imports: [DatePickerModule],
  template: `
    <p-date-picker
      [isBudhistYear]="true"
      dateFormat="dd/mm/yy"
      placeholder="Select a date"
    ></<p-date-picker>
  `
})
export class YourComponent {}
```