import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'cifrado',
})
export class CifradoPipe implements PipeTransform {
  transform(value: string, cifrado: boolean = false): string {
    if (cifrado) {
      return '*****'
    } else {
      return value
    }
  }
}
