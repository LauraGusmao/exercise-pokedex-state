import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonIndex: 0,
      pokemonType: props.pokemons,
    }

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.allPokemons = this.allPokemons.bind(this);
  }

  nextPokemon(numberOfPokemons) {
    this.setState((state) => ({ pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,}));
  }

  filterPokemon(type) {
    const { pokemons } = this.props;
    const pokemonType = pokemons.filter((pokemon) => pokemon.type === type);
    this.setState({ pokemonIndex: 0, pokemonType })
  }

  allPokemons() {
    this.setState({ pokemonIndex: 0, pokemonType: this.props.pokemons })
  }

  render() {
    // const { pokemons } = this.props;
    const { pokemonIndex, pokemonType } = this.state;
    return (
      <div className="pokedex">
        <Pokemon pokemon= {pokemonType[pokemonIndex] } />
        <div className="button-container">
          <button type="button" onClick={ () => this.nextPokemon(pokemonType.length) }>Próximo Pokemon</button>
          <button type="button" onClick={ this.allPokemons }>All</button>
          <button type="button" onClick={ () => this.filterPokemon('Fire') }>Fire</button>
          <button type="button" onClick={ () => this.filterPokemon('Psychic') }>Psychic</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;