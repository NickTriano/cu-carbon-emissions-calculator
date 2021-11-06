import React, { Component } from "react";

class LimitsField extends Component {
    
  render() {
    return (
        <div>
            <div className="left-container">
                <div className="head-text-4 limit-text">2024-2030 limit:</div>
            </div>
            <div className="right-container">
                <div className="head-text-4">{this.props.limit24} kg CO2e/sf/year</div>
            </div>
            <div className="left-container">
                <div className="head-text-4 limit-text">2030-2035 limit:</div>
            </div>
            <div className="right-container">
                <div className="head-text-4">{this.props.limit30} kg CO2e/sf/year</div>
            </div>
            <div className="left-container">
                <div className="head-text-4 limit-text">2035+ limit:</div>
            </div>
            <div className="right-container">
                <div className="head-text-4">{this.props.limit35} kg CO2e/sf/year</div>
            </div>
        </div>
        
    );
  }
}

export default LimitsField;
