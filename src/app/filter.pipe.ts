import { Pipe, PipeTransform } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { Article } from './article/article';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(items: Article[], searchText: string): Article[] {
        console.log(searchText);
        if(!items) return [];
        if(!searchText) return items;
        
        searchText = searchText.toLowerCase();
        
        return items.filter( it => {
            return (it.titre.toLowerCase().includes(searchText) ||
                    it.desc.toLowerCase().includes(searchText));
                    
            
        });

    };
}
