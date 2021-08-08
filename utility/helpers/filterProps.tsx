export interface filterPropsI {
  props: { [key: string]: any };
  filterOut: string[];
}

export function filterProps({ props, filterOut }: filterPropsI) {
  const propsCopy = { ...props };
  for (let prop of filterOut) {
    delete propsCopy[prop];
  }
  return propsCopy;
}
