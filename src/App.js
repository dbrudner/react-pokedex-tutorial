import React, { Component } from "react";
import PokemonListItem from "./pokemon-list-item";
import Form from "./form";

class App extends Component {
	state = {
		pokemons: [],
		page: 0
	};

	async componentDidMount() {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
		const data = await response.json();
		this.setState({ pokemons: data.results });
	}

	render() {
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
					{this.state.pokemons.length &&
						this.state.pokemons.map((pokemon, i) => (
							<PokemonListItem
								id={this.state.page * 20 + i + 1}
								{...pokemon}
							/>
						))}
				</div>
			</div>
		);
	}
}

export default App;
