import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { reducer } from "./store";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { fetchMiddleware } from "./fetch-middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(fetchMiddleware))
);

const AppWithStore = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById("root"));
registerServiceWorker();
