import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, searchbytitle): any {
    if (!searchbytitle) {
      return value
    }
    return value.filter(searchresponce => searchresponce.title.toLowerCase().startsWith(searchbytitle.toLowerCase()));
  }

}
