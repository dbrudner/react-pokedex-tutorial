import * as actions from "./store";

const fetchPokemont = async () => {};

export const fetchMiddleware = store => next => async action => {
	console.log("dispatching", action);
	let result = next(action);
	console.log("next state", store.getState());

	if (action.type === actions.FETCHING_POKEMON) {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
		const data = await response.json();
		console.log(data.results);
		next({ type: actions.FETCH_SUCCESFUL, payload: data.results });
	}

	return result;
};
