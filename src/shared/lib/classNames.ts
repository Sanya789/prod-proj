type Mods = Record<string, boolean | string>;
const obj: Mods = {
  'hover': true,
}


export function classNames(cls: string, mods: Mods, additional: string[]):string {
return [
  cls, 
  ...additional,
  Object.entries(mods)
  .filter(([className, value]) => Boolean(value))
  .map(([className]) => className)

].join(' ')
}
