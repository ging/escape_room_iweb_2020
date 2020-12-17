import React from 'react';
import Switch from 'react-toggle-switch';
import propTypes from 'prop-types';

export default class BombComponent extends React.Component {
  render(){
    return (
    <li className="list-group-item bomb-item" id={"bomb-item-"+(this.props.index+1)}>
      <Switch onClick={()=>this.props.toggleSwitch(this.props.index)} on={this.props.status} className='my-switch'/>
      <p className={"bomb-component-name"}>{this.props.id}</p>
    </li>)
  }
}


BombComponent.propTypes = {
	/**
	 * Function to turn off the switch
	 */
	toggleSwitch: propTypes.func,
	/**
	 * Index of the switch
	 */
	index: propTypes.number,
	/**
	 * Current status of the switch
	 */
	status: propTypes.bool,
	/**
	 * Name of the component to deactivate
	 */
	id: propTypes.string
}
