# 📅 Primeng Buddhist Datepicker

This library extends the [PrimeNG Datepicker](https://primeng.org/datepicker) to support **Buddhist Year (BE)** display.

> ✅ Built with [Angular CLI](https://github.com/angular/angular-cli)  
> 📦 Supports **PrimeNG** and **Angular** version mapping as shown below

---

## 🔄 Version Compatibility

| Angular Version        | Library Version                       | Install Command                                  |
| ---------------------- | ------------------------------------- | ------------------------------------------------ |
| `^21.0.0`              | `primeng-buddhist-year-datepicker@20` | `npm i primeng-buddhist-year-datepicker@^21.0.0` |
| `^20.0.0`              | `primeng-buddhist-year-datepicker@20` | `npm i primeng-buddhist-year-datepicker@^20.0.0` |
| `^19.0.0`              | `primeng-buddhist-year-datepicker@19` | `npm i primeng-buddhist-year-datepicker@^19.0.0` |
| `^17.0.0` to `<19.0.0` | `primeng-buddhist-year-datepicker@17` | `npm i primeng-buddhist-year-datepicker@^17.0.0` |

> ⚠️ Make sure to match the correct version of the library with your Angular version.

---

## 🧪 Run Demo App

To see the component in action:

```bash
npm install
ng serve
```

## 🧪 Import Modules Into Component

```
import { DatePickerModule } from 'primeng-buddhist-year-datepicker';
```

## How to use

selector datepicker the same as primeng add only [isBudhistYear] = true or false

```
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
