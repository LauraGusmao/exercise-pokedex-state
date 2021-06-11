import React from 'react';
import Button from './Button';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonIndex: 0,
      pokemonType: 'all',
    }

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.setPokemon = this.setPokemon.bind(this);
    this.getPokemonTypes = this.getPokemonTypes.bind(this);
  }

  nextPokemon(numberOfPokemons) {
    this.setState((state) => ({ pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,}));
  }

  setPokemon(pokemonType) {
    this.setState({ pokemonIndex: 0, pokemonType })
  }

  filterPokemon() {
    const { pokemons } = this.props;
    const { pokemonType } = this.state;
    return (
      pokemons.filter((pokemon) => {
        if (pokemonType === 'all') return pokemons;
        return pokemon.type === pokemonType;
      })
    )
  }

  getPokemonTypes() {
    const { pokemons } = this.props;
    const repeatingTypes = pokemons.map((pokemon) => pokemon.type);
    const types = repeatingTypes.reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, [])
    return types;
  }

  render() {
    const { pokemonIndex } = this.state;
    const filtered = this.filterPokemon();
    const pokemon = filtered[pokemonIndex]
    const types = this.getPokemonTypes();
    // console.log(filtered);
    return (
      <div className="pokedex">
        <Pokemon pokemon= { pokemon } />
        <div className="button-container">
          <Button
            onClick={ () => this.nextPokemon(filtered.length) }
            text="Próximo Pokemon"
            disabled={ filtered.length <= 1 }
          />
          <Button
            onClick={ () => this.setPokemon('all') }
            text="All"
          />
          { types.map((type) => (
            <Button
              key={ type }
              onClick={ () => this.setPokemon(type) }
              text={ type }
            />  
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;