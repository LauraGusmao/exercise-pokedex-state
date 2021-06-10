import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonIndex: 0,
    }

    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon(numberOfPokemons) {
    this.setState((state) => ({ pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,}));
  }

  render() {
    const { pokemons } = this.props;
    const { pokemonIndex} = this.state;
    return (
      <div className="pokedex">
        <Pokemon pokemon= {pokemons[pokemonIndex] } />
        <div className="button-container">
          <button type="button" onClick={() => this.nextPokemon(pokemons.length) }>Próximo Pokemon</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;