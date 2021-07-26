// Interfaces
export interface Coordinates {
  x: number;
  y: number;
}

export interface CoordinatesWithVal extends Coordinates {
  val: number;
}

// Types

type TargetTypeFunction = (val: any) => any;

export type TargetType = "length" | TargetTypeFunction;

export type GroupByResult = { [key: string]: any[] };

export type CurrencyTuple = Array<[string, "sell" | "buy", number]>;

export type FizzBazz = "fizzbazz" | "fizz" | "bazz" | number;

export type LanguageMode = "ru" | "en";
