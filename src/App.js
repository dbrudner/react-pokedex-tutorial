import React from "react";
import PokemonListItem from "./pokemon-list-item";
import { connect } from "react-redux";
import { FETCHING_POKEMON, pokemonSelector } from "./store";

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch({ type: FETCHING_POKEMON });
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Pokedex</h1>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "auto auto auto auto",
						justifyContent: "space-around"
					}}
				>
					{this.props.pokemonList.length &&
						this.props.pokemonList.map((pokemon, i) => (
							<PokemonListItem key={pokemon.name} {...pokemon} />
						))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({ pokemonList: pokemonSelector(state) });

export default connect(mapStateToProps)(App);
