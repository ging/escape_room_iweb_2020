import PropTypes from "prop-types";
import React from "react";

export default class BombComponentList extends React.Component {

	render(){
		return <ul className="list-group">
			{ /* MAP FUNCTION GOES HERE */
      }	
      </ul>
	}
}

BombComponentList.propTypes = {
  /**
   * Components of the bomb
   */
  components: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Current status of the switch
       */
      status: PropTypes.bool,
      /**
       * Name of the component to deactivate
       */
      id: PropTypes.String
    })
  ),
  /**
   * Function to turn off the switch
   */
  turnOffComponent: PropTypes.func
};
