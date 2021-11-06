import React, { Component } from "react";

class BuildingInputField extends Component {
    
  render() {
    return (
        <div className="input-container">
            <div className="left-container">
              <div className="head-text-4">Building Type</div>
              {/* <div className="input-header-left head-text-4">Building Type</div> */}
                <select className="bldg-type-select" datatag="1">
                  <option value="B_norm">B (Business)</option>
                </select>
                {/* <input name={this.props.name} type="number" value={this.props.value} onChange={this.props.onChange}></input> */}

            </div>
            <div className="right-container bldg">
                <div className="head-text-4">Area (SF)</div>
                <input name={this.props.name} type="number" value={this.props.value} onChange={this.props.onChange}></input>
                {/* <input name={this.props.rightVar} type="number" value={this.props.rightValue} onChange={this.props.onChange}></input> */}
            </div>
        </div>
  //     <div>
  //     <div className="input-header-left head-text-4">Building Type</div>
  //         <div className="input-header-right head-text-4">Area (SF)</div>
  //         <div className="left-container">
  //             <select className="bldg-type-select" datatag="1">
  //             <option value="B_norm">B (Business)</option>
  //             </select>
  //         </div>
  //         <div className="right-container">
  //             <input name={this.props.name} type="number" value={this.props.value} onChange={this.props.onChange}></input>
  //         </div>
  // </div>
        
    );
  }
}

export default BuildingInputField;
