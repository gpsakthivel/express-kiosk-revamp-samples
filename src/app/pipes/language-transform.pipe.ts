import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageTransform',
  standalone: true
})
export class LanguageTransformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
