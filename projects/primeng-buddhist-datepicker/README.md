# 📅 Primeng Buddhist Datepicker

This library extends the [PrimeNG Datepicker](https://primeng.org/datepicker) to support **Buddhist Year (BE)** display.

> ✅ Built with [Angular CLI](https://github.com/angular/angular-cli) v17 
> 📦 Uses **PrimeNG v17**

---

## 🧪 Run Demo App

To see how the component works:

```bash
npm install
ng serve
```


## 🧪 Import Modules Into Component
```
import { CalendarModule } from 'primeng-buddhist-datepicker';
```


## How to use 
selector datepicker the same as primeng add only [isBudhistYear] = true or false
```
@Component({
  selector: 'your-component',
  standalone: true,
  imports: [CalendarModule],
  template: `
    <p-calendar
      [isBudhistYear]="true"
      dateFormat="dd/mm/yy"
      placeholder="Select a date"
    ></<p-calendar>
  `
})
export class YourComponent {}
```