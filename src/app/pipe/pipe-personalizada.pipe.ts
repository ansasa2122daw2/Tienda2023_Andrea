import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePersonalizada'
})
export class PipePersonalizadaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.cat_nombre.indexOf(arg) > -1) {
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }

}
