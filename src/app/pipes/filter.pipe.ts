import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  constructor() {
  }
  transform(niza: any, keyword: string|string[], args: Array<any>) {
    let keywords = [];
    if(!Array.isArray(keyword))
      keywords = [keyword];
    else keywords = keyword;
    if (niza && keywords[0])
      return niza.filter((item: any) => {
        let contains = false;
        args.forEach(arg => {
          let obj =
              (arg.indexOf('.') == -1) ? item[arg] : this.objByString(item, arg);
          if (obj) {
            keywords.forEach(keyword => {
              if (obj.toLowerCase && obj.toLowerCase().indexOf(keyword.toLowerCase()) != -1)
                contains = true;
              else if (obj == keyword)
                contains = true;
            })
          }
        });
        return contains;
      });
    else
      return niza;
  }
  objByString(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1');
    s = s.replace(/^\./, '');
    let a = s.split('.'), i = 0;
    while (i < a.length) {
      if (o[a[i]]) {
        o = o[a[i]];
      }
      ++i;
    }
    return o.toString();
  }
}