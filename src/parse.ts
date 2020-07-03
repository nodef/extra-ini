import type {IConfig} from './_types';

function parse(str: string, opt: IConfig=null): object {
  var a = {}, o = opt||{};
  for(var l of str.split(/[\r\n]+/g)) {
    l = l.replace(/[;#].*/, '');
    if(l.trim()==='') continue;
    if(/^\s*\[(.*?)\]\s*/.test(l)) a = 1;
    // is it section?
    // read section (store in var)

  }
  return a;
}
export default parse;
