import { Provider } from "react-redux";
import GlobalState from "./reducers/reducers";
import { createStore } from "redux";

import React from "react";
import App from "./App";

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      components: [
        {
          id: "Proyectil",
          status: true
        },
        {
          id: "Detonador",
          status: true
        },
        {
          id: "Iniciador de neutrones",
          status: true
        },
        {
          id: "Batería",
          status: true
        }
      ],
      lc: [],
    };
    this.store = this.configureStore();
  }

  render() {
    return (
        <Provider store={this.store}>
          <div style={{ height: "100%" }}>
            <App store={this.store} />
          </div>
        </Provider>
    );
  }

  configureStore() {
    const store = createStore(GlobalState, this.initialState);

    return store;
  }
}
