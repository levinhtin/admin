import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ellipsis'
})

export class EllipsisPipe implements PipeTransform {
  public transform(val: string, limit: number): string {
    if (!limit || limit < 0) {
      return val;
    }

    if (val.length > limit) {
      return val.substring(0, limit) + '...';
    } else {
      return val;
    }
  }
}
