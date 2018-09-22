import React from "react";
import PokemonListItem from "./pokemon-list-item";
import { connect } from "react-redux";
import * as types from "./store";

const App = props => {
	// async componentDidMount() {
	// 	const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
	// 	const data = await response.json();
	// 	this.setState({ pokemons: data.results });
	// }

	props.dispatch({ type: types.FETCHING_POKEMON });

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
				{/* {this.state.pokemons.length &&
					this.state.pokemons.map((pokemon, i) => (
						<PokemonListItem
							id={this.state.page * 20 + i + 1}
							{...pokemon}
						/>
					))} */}
			</div>
		</div>
	);
};

export default connect()(App);
