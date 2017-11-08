import { Pipe, PipeTransform } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { Article } from './article/article';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(value: any, b: any): any {
      /*console.log(value);*/
    return value.sort((a: any, b: any) => {
           let date1 = new Date(a.date);
        console.log(a)
           let date2 = new Date(b.date);

           if (date1 > date2) {
               return 1;
           } else if (date1 < date2) {
               return +1;
           } else {
               return 0;
           }
         });
  }

}
