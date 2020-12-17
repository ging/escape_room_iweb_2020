import { combineReducers } from 'redux';
import { TURN_OFF_COMPONENT } from './actions';

 
function components(state = "", action = {}) {
  switch(action.type) {
    case TURN_OFF_COMPONENT:
      return state.map((component, i)=>{return {...component, status: action.payload.index === i? !component.status : component.status}})
    default:
      return state;
  }
}

function lc(state= [], action = {}) {
	switch(action.type) {
	  case TURN_OFF_COMPONENT:
	  	let ind = state.indexOf(action.payload.index);
	  	if(ind === -1 ){
	  		return [...state, action.payload.index];
	  	}
	  	return [...state.slice(0, ind), ...state.slice(ind+1)]
	    
	  default:
	    return state;
	}
}


const GlobalState = (combineReducers({
  components, lc
}));

export default GlobalState;