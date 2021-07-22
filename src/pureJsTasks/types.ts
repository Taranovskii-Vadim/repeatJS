type TargetTypeFunction = (val: any) => any;

export type TargetType = "length" | TargetTypeFunction;

export type GroupByResult = { [key: string]: any[] };
