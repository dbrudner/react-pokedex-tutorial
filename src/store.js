const initialState = {
	fetchStatus: "pre-fetch",
	pokemon: [],
	search: "",
	visiblePokemon: 10
};

export const FETCHING_POKEMON = "FETCHING_POKEMON";
export const FETCH_SUCCESFUL = "FETCH_SUCCESFUL";
export const SEARCH_UPDATED = "SEARCH_UPDATED";

export const pokemonSelector = state =>
	state.pokemon.slice(0, state.visiblePokemon);

export const reducer = (state = initialState, action) => {
	const { payload } = action;

	switch (action.type) {
		case FETCHING_POKEMON: {
			return { ...state, fetchStatus: "fetching" };
		}
		case FETCH_SUCCESFUL: {
			return { ...state, pokemon: payload };
		}
		case SEARCH_UPDATED: {
			return { ...state, search: payload };
		}
		default: {
			return state;
		}
	}
};
