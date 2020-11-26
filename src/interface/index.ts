export type TsArrayElem = string;

export type TsObjectElem = {
  [n: string]: number;
};

export interface IPokemonsProps {
  total: number;
  count: number;
  offset: number;
  pokemons: any[];
}

export interface IPokemonRequest {
  [n: string]: any;
}

export interface IPokemonProps {
  name_clean?: string;
  abilities: TsArrayElem[];
  stats: TsObjectElem;
  types: TsArrayElem[];
  img: string;
  name: string;
  base_experience?: number;
  height: number;
  id: number;
  is_default?: boolean;
  order: number;
  weight: number;
}

export interface IPokemonPageProps {
  id: number
}
