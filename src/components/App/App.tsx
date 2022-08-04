import { useState } from 'react'
import axios from 'axios'
import PokemonCoverCard from '../CoverCard/CoverCard'
import PokemonRandomCard from '../PokemonRandomCard/PokemonRandomCard'
import RandomButton from '../RandomButton/RandomButton'
import getRandomNumber from '../../utils/getRandomNumber'
import Rotator from '../Rotator/Rotator'
import { PokemonData } from '../../types/PokemonData'
import { SpeciesData } from '../../types/SpeciesData'
import styles from './App.module.css'

const POKEMON_MIN_ID = 1
const POKEMON_MAX_ID = 300
const TRANSITION_TIMEOUT = 400

function App() {
  let [isLoading, setIsLoading] = useState(false)
  let [pokemon, setPokemon] = useState<PokemonData | null>(null)
  let [species, setSpecies] = useState<SpeciesData | null>(null)

  function handleClick() {
    if (isLoading) return

    const id = getRandomNumber(POKEMON_MIN_ID, POKEMON_MAX_ID)
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`

    setIsLoading(true)

    Promise.all([
      axios.get<PokemonData>(url),
      axios.get<SpeciesData>(speciesUrl)
    ])
      .then(([{ data: pokemonData }, { data: speciesData }]) => {
        setPokemon(pokemonData)
        setSpecies(speciesData)
      })
      .then(() => {
        setTimeout(() => {
          setIsLoading(false)
        }, TRANSITION_TIMEOUT)
      })
  }

  return (
    <div className={styles.app}>
      <Rotator
        className={styles.rotator}
        front={
          pokemon && species ? (
            <PokemonRandomCard
              pokemon={pokemon}
              species={species}
              pokemonMaxId={POKEMON_MAX_ID}
            />
          ) : null
        }
        back={<PokemonCoverCard />}
        isFront={Boolean(pokemon) && !isLoading}
      />
      <RandomButton
        onClick={handleClick}
        text={isLoading ? 'LOADING...' : 'RANDOMIZE POKEMON'}
      />
    </div>
  )
}
export default App
