import { CSSProperties } from 'react'
import { PokemonData } from '../../types/PokemonData'
import { SpeciesData } from '../../types/SpeciesData'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
import { ReactComponent as PokeballIcon } from './assets/pokeball.svg'
import styles from './PokemonRandomCard.module.css'

function PokemonRandomCard({
  pokemon,
  species,
  pokemonMaxId
}: {
  pokemon: PokemonData
  species: SpeciesData
  pokemonMaxId: number
}) {
  return (
    <div
      className={styles.wrapper}
      style={{ '--background-color': species.color.name } as CSSProperties}
    >
      <div className={styles.content}>
        <div className={styles.exp}>
          <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
          <p>
            <strong>EXP</strong> {pokemon.base_experience}
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
          />
        </div>
        <p className={styles.info}>
          {capitalizeFirstLetter(pokemon.types[0].type.name)} Pokemon. Height:{' '}
          {pokemon.height}, Weight: {pokemon.weight}
        </p>
        <div className={styles.pokemonId}>
          <PokeballIcon className={styles.pokeball} />
          <p>
            {pokemon.id} / {pokemonMaxId}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PokemonRandomCard
