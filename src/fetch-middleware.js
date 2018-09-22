import * as actions from "./store";

export const fetchMiddleware = store => next => async action => {
	if (action.type === actions.FETCHING_POKEMON) {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
		const data = await response.json();
		next({ type: actions.FETCH_SUCCESFUL, payload: data.results });
	}

	return next(action);
};
