export interface PokemonData {
  name: string
  id: number
  sprites: {
    other: {
      ['official-artwork']: { front_default: string }
    }
  }
  base_experience: number
  height: number
  weight: number
  types: {
    type: {
      name: string
    }
  }[]
}
