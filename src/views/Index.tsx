import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateI } from "../interfaces/RootStateI";
import { StateI, StockElementI } from "../interfaces/StateI";
import { switchCategory } from "../actions/stateA";
import { api } from "../classes/Api";
import { actionTypes } from '../constants';

const Index = () => {
  const state: StateI = useSelector((rootState: RootStateI) => rootState.state);
  const dispatch = useDispatch();

  // console.log(state);

  useEffect(() => {
    api.get(state.category).then(response => {
      const { data, config } = response;

      if(data === "") {

        dispatch({
          type: actionTypes.SET_ERRORS,
          payload: {
            errorType: "api/get",
            message: `Url: ${config.url}; Method:${config.method} returned an empty string.`,
          }
        })

      } else {



      }

    })
  }, [state.initialLoad]);

  return (
    <nav className="panel">
      <p className="panel-heading">Repositories</p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="Search" />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <p className="panel-tabs">
        {state.stocks.map((stock: StockElementI) => (
          <a 
            onClick={() => dispatch(switchCategory(stock.name))}
            className={stock.name === state.category ? "is-active" : ""}
            key={stock.name}>
              {stock.name}
          </a>
        ))}
        
      </p>
      <a className="panel-block">bulma</a>
    </nav>
  );
};

export default Index;