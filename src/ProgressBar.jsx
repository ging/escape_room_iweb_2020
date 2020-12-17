import React from "react";
export default class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progress-wrapper">
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: this.props.progress + "%" }} aria-valuenow={this.props.progress} aria-valuemin="0" aria-valuemax="100"/>
        </div>
      </div>
    );
  }
}
