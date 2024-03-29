import "./index.less";
import React from "react";
import { HashRouter } from "react-router-dom";
import RootRouter from "@components/Systems/RootRouter";
import { Provider } from "react-redux";
import store from "@stores";

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<HashRouter>
					<RootRouter />
				</HashRouter>
			</Provider>
		)
	}
}
