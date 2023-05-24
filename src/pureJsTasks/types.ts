// Interfaces
export interface Coordinates {
  x: number;
  y: number;
}

export interface CoordinatesWithVal extends Coordinates {
  val: number;
}

// Types

export type GroupByResult = { [key: string]: any[] };

export type CurrencyTuple = Array<[string, 'sell' | 'buy', number]>;

export type LanguageMode = 'ru' | 'en';
