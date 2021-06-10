import React from 'react';
// import Button from './Button';
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

  render() {
    const { pokemonIndex } = this.state;
    const filtered = this.filterPokemon();
    const pokemon = filtered[pokemonIndex]
    return (
      <div className="pokedex">
        <Pokemon pokemon= { pokemon } />
        <div className="button-container">
          <button type="button" onClick={ () => this.nextPokemon(filtered.length) }>Próximo Pokemon</button>
          <button type="button" onClick={ () => this.setPokemon('all') }>All</button>
          <button type="button" onClick={ () => this.setPokemon('Fire') }>Fire</button>
          <button type="button" onClick={ () => this.setPokemon('Psychic') }>Psychic</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;