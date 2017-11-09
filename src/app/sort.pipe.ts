import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { Article } from './article/article';

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {

    transform(value: any, b: any): any {
        let date = b;

        if(date){
            console.log('date')
            return value.sort((a: any, b: any) => {
                let date1 = new Date(a.date);
                let date2 = new Date(b.date);
                if (date1 > date2) {
                    return -1;
                } else if (date1 < date2) {
                    return 1;
                } else {
                    return 0;
                }

            });
            }
        
            else {
                console.log('pas date')
                return value.sort((a: any, b: any) => {
                    const date1 = new Date(a.date);
                    const date2 = new Date(b.date);

                    if (date1 < date2) {
                        return -1;
                    } else if (date1 > date2) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            };





        
    };


}
