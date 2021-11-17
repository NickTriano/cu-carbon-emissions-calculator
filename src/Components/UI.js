import React, { Component } from "react";
import BuildingInputField from "./building_field";
import InputField from "./input_field";
import ECMField from "./ecm_field";
import LimitsField from "./limits";
import { Pie, Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import {defaults_2019} from '../defaults'

Chart.register(annotationPlugin);

const KBTU_KWH = 3.412;
const KBTU_THERM = 100.067;
const THERM_CCF = 1.037;
const COLORS = [ // colors correspond to a maximum of 10 ECMs
  'rgb(54, 162, 235)', // blue
  'rgb(237,28,36)', //'rgb(255, 99, 132)', // red //rgb(255,207,6)
  '#ff7f0e',  // safety orange
  '#2ca02c',  // cooked asparagus green
  '#9467bd',  // muted purple
  '#8c564b',  // chestnut brown
  '#e377c2',  // raspberry yogurt pink
  '#7f7f7f',  // middle gray
  '#bcbd22',  // curry yellow-green
  '#17becf'   // blue-teal
]

class UI extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
        // building inputs
        area: 175000, // square feet

        // utility inputs
        electricityUse: 3357600, // kWh
        electricityDemand: 770, // kW
        gasUse: 224449, // therms
        // electricityRate: 0.03, // $/kWh
        electricityRate: 0.19, // $/kWh
        electricityDemandRate: 25, // $/kW
        gasRate: 0.36, // $/therm

        // LL97 inputs
        // carbon coefficients
        electricityCoeff: 0.000288962, // tons CO2e/kWh
        gasCoeff: 0.00005311, // tons CO2e/kBtu
        
        // carbon limits (kg CO2e/sf/year)
        limit24: 8.46,
        limit30: 4.53,
        limit35: 1.4,
        penalty: 268,

        ecms: [{
          name: '',
          electricity: 0,
          gas: 0
        }],

        totalFlag: true,
        btnTotal: 'btn-clicked',
        btnNet: 'btn-unclicked'
    };

    // Binding this keyword
      this.onChange = this.onChange.bind(this);
      this.onTextChange = this.onTextChange.bind(this);
      this.onECMChange = this.onECMChange.bind(this);
      this.setDefaults = this.setDefaults.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.setTotal = this.setTotal.bind(this);
      this.setNet = this.setNet.bind(this);
  }

  pie_energy_use = {};
  pie_co2 = {};
  pie_cost = {};
  pie_net_energy_use = {};
  pie_net_co2 = {};
  pie_net_cost = {};
  pie_ecm = {};
  bar_ll97 = {};
  bar_co2 = {};
  bar_thresholds = {};

  onChange(e) {
    this.setState({ [e.target.name]: Number(e.target.value) });
  }

  onECMChange(ecms) {
    this.setState({ ecms: ecms });
  }

  onTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  setDefaults() {
    this.setState(defaults_2019);
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(this.state);

    var e_kbtu = this.state.electricityUse*KBTU_KWH;
    var gas_kbtu = this.state.gasUse*KBTU_THERM;
    this.pie_energy_use.data.datasets[0].data = [e_kbtu, gas_kbtu];
    this.pie_energy_use.update()
  }

  setTotal() {
    this.setState({ totalFlag: true });
    this.setState({ btnTotal: 'btn-clicked' });
    this.setState({ btnNet: 'btn-unclicked' });
  }
  
  setNet() {
    this.setState({ totalFlag: false });
    this.setState({ btnTotal: 'btn-unclicked' });
    this.setState({ btnNet: 'btn-clicked' });
  }

  render() {
    // total energy use
    var e_kbtu = this.state.electricityUse*KBTU_KWH;
    var gas_kbtu = this.state.gasUse*KBTU_THERM;
    
    // total CO2
    var electriity_co2 = this.state.electricityUse * this.state.electricityCoeff;
    var gas_co2 = gas_kbtu * this.state.gasCoeff;
    var total_co2 = electriity_co2 + gas_co2;

    // total costs
    var electricity_cost = this.state.electricityUse*this.state.electricityRate + this.state.electricityDemand*this.state.electricityDemandRate;
    var gas_cost = this.state.gasUse*this.state.gasRate;
    var total_cost = electricity_cost + gas_cost;

    // ECM energy, CO2, and cost savings
    var ecm_e_kbtu = this.state.ecms.reduce( (x, ecm) => x + ecm.electricity, 0);
    var ecm_gas_kbtu = this.state.ecms.reduce( (x, ecm) => x + ecm.gas, 0);
    var ecm_electricity_co2 = ecm_e_kbtu*this.state.electricityCoeff;
    var ecm_gas_co2 = ecm_gas_kbtu*this.state.gasCoeff;
    var ecm_electricity_savings = ecm_e_kbtu*this.state.electricityRate;
    var ecm_gas_savings = ecm_e_kbtu*this.state.gasRate;
    var ecm_co2 = ecm_electricity_co2 + ecm_gas_co2;
    // ECM CO2 data for pie chart
    var ecms_co2 = this.state.ecms.map(ecm => ecm.electricity/KBTU_KWH*this.state.electricityCoeff + ecm.gas*this.state.gasCoeff);

    // net energy, CO2, and costs
    var net_e_kbtu = e_kbtu - ecm_e_kbtu;
    var net_gas_kbtu = gas_kbtu - ecm_gas_kbtu;
    var net_electricity_co2 = electriity_co2 - ecm_electricity_co2;
    var net_gas_co2 = gas_co2 - ecm_gas_co2;
    // use maximum to prevent negative $ costs
    var net_electricity_cost = Math.max(electricity_cost - ecm_electricity_savings, 0);
    var net_gas_cost = Math.max(gas_cost - ecm_gas_savings, 0);
    var net_co2 = total_co2 - ecm_co2;
    var net_cost = net_gas_cost+net_electricity_cost;
    var ecm_savings =  total_cost - net_cost;

    // LL97 targets
    var target24 = this.state.area*this.state.limit24/1000;
    var target30 = this.state.area*this.state.limit30/1000;
    var target35 = this.state.area*this.state.limit35/1000;

    var penalty24 = Math.max((net_co2 - target24)*this.state.penalty, 0);
    var penalty30 = Math.max((net_co2 - target30)*this.state.penalty, 0);
    var penalty35 = Math.max((net_co2 - target35)*this.state.penalty, 0);
    
    // pie charts
    var data_energy_use = {
      labels: ['Electricity','Natural Gas',],
      datasets: [{
        // label: 'Energy Use',
        data: this.state.totalFlag ? [e_kbtu, gas_kbtu] : [net_e_kbtu, net_gas_kbtu],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgb(237,28,36)', //rgb(255,207,6)
        ],
        hoverOffset: 4
      }]
    };
    
    var options_energy_use = {
      plugins: {
          title: {
              display: true,
              text: this.state.totalFlag ? 'Total Energy Use (kBtu)' : 'Net Energy Use (kBtu)' 
          }
      },
      maintainAspectRatio: false
    };

    var data_co2 = {
      labels: ['Electricity','Natural Gas',],
      datasets: [{
        data: this.state.totalFlag ? [electriity_co2, gas_co2] : [net_electricity_co2, net_gas_co2],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgb(237,28,36)',
        ],
        hoverOffset: 4
      }]
    };

    var options_co2 = {
      plugins: {
          title: {
              display: true,
              text: this.state.totalFlag ? 'Total CO2 Emissions (tCO2)' : 'Net CO2 Emissions (tCO2)'
          }
      },
      maintainAspectRatio: false
    };
    
    var data_cost = {
      labels: ['Electricity', 'Natural Gas',],
      datasets: [{
        data: this.state.totalFlag ? [electricity_cost, gas_cost]: [net_electricity_cost, net_gas_cost],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgb(237,28,36)',
        ],
        hoverOffset: 4
      }]
    };

    var options_cost = {
      plugins: {
          title: {
              display: true,
              text: this.state.totalFlag ? 'Total Energy Costs ($)' : 'Net Energy Costs ($)'
          }
      },
      maintainAspectRatio: false
    };

    var data_ecm = {
      labels: this.state.ecms.map(ecm => ecm.name),
      datasets: [{
        data: ecms_co2,
        backgroundColor: COLORS.slice(0, this.state.ecms.length),
        hoverOffset: 4
      }]
    };

    var options_ecm = {
      plugins: {
          title: {
              display: true,
              text: 'ECM CO2 Savings'
          },
          legend: {
            position: 'right'
          }
      },
      maintainAspectRatio: false
    };

    // LL97 charts (bottom row)
    var data_ll97 ={
      labels: ['2024','2030','2035+'],
      datasets: [
        {
          stack: "stack1",
          label: 'Energy Cost',
          // data: [total_cost, total_cost, total_cost],
          data: [net_cost, net_cost, net_cost],
          backgroundColor: [
            'rgb(54, 162, 235)',
          ],
        },
        {
          stack: "stack1",
          label: 'LL97 Penalty',
          data: [penalty24, penalty30, penalty35],
          backgroundColor: [
            'rgb(237,28,36)',
          ],   
        },
        {
          stack: "stack1",
          label: 'ECM Savings',
          data: [ecm_savings, ecm_savings, ecm_savings],
          backgroundColor: [
            'rgba(0, 145, 77, 0.4)',
          ],   
        }
      ]
    };

    var options_ll97 = {
      indexAxis: 'y',
      plugins: {
        title: {
            display: true,
            text: 'Energy and LL97 Costs',
            padding: {bottom: 0}
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              var label = context.dataset.label || '';
  
              if (label) {
                  label += ': ';
              }
              if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.x);
              }
              return label;
            }
          }
      },
      },
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true,
        }],
      },
      maintainAspectRatio: false
    }

   var data_thresholds ={
    labels: [''],
    datasets: [
      {
        stack: "stack1",
        label: 'Net CO2 Emissions',
        data: [net_co2],
        backgroundColor: [
          'rgb(54, 162, 235)',
        ],
      },
      {
        stack: "stack1",
        label: 'ECM Savings',
        data: [ecm_co2],
        backgroundColor: [
          'rgba(0, 145, 77, 0.4)',
        ],   
      }
    ]
  };


  // NEED TO DECFREASE BAR WIDTH (HEIGHT OF CHART) WHILE KEEPING GRAPH CENTERED
  var targets = [target24, target30, target35];
  var years = ['2024', '2030', '2035+'];
  var annotations = [];
  targets.forEach( (target, i) => {
    if (target > 0){
      annotations.push({
        label: {
          backgroundColor: ((target <= total_co2) ? 'rgb(237,28,36)' : 'rgba(255, 99, 132, 0.5)'),
          content: [years[i] + ' Target', target.toFixed(0) + ' tCO2e/yr'],
          enabled: true,
          yAdjust: -60,
        },
        type: 'line',
        xMin: target,
        xMax: target,
        borderColor:  ((target <= total_co2) ? 'rgb(237,28,36)' : 'rgba(255, 99, 132, 0.5)'),
        borderWidth: 2,
      })
    }
  });

  var options_thresholds = {
    indexAxis: 'y',
    plugins: {
      title: {
          display: true,
          // text: 'LL97 Thresholds',
          text: 'LL97 CO2 Emissions Targets (tCO2e)',
          padding: { bottom: 50},
      },
      legend: {
        display: false
      },
      annotation: {
        annotations: annotations,
      }
    },
    scales: {
      x: {
         grid: {
            // display: false, 
            drawBorder: false,
           },
          },
      y: {
         grid: {
            display: false, 
            drawBorder: false,
           },
        },
    },
    maintainAspectRatio: false
  }

    return (
      <div>
        <div className="sidebar">
          <div className="sidebar-main-container">
            <form onSubmit={this.onSubmit}>
              <div className="head-text-2">Building Inputs</div>
              <BuildingInputField name="area" value={this.state.area} onChange={this.onChange} />
              
              <div className="head-text-2">Utility Inputs</div>
              <InputField leftText="Electricity (kWh)" leftVar="electricityUse" leftValue={this.state.electricityUse} rightText="$/kWh" rightVar="electricityRate" rightValue={this.state.electricityRate} onChange={this.onChange}/>
              <InputField leftText="Max Demand (kW)" leftVar="electricityDemand" leftValue={this.state.electricityDemand} rightText="$/kW" rightVar="electricityDemandRate" rightValue={this.state.electricityDemandRate} onChange={this.onChange}/>
              <InputField leftText="Natural Gas (therms)" leftVar="gasUse" leftValue={this.state.gasUse} rightText="$/therm" rightVar="gasRate" rightValue={this.state.gasRate} onChange={this.onChange}/>
              
              <div className="head-text-2">Carbon Coefficients</div>
              <InputField leftText="Electricity (tCO2e/kWh)" leftVar="electricityCoeff" leftValue={this.state.electricityCoeff} rightText="Gas (tCO2e/kBtu)" rightVar="gasCoeff" rightValue={this.state.gasCoeff} onChange={this.onChange}/>
              <div className="head-text-2">LL97 Carbon Limits</div>
              <LimitsField limit24={this.state.limit24} limit30={this.state.limit30} limit35={this.state.limit35} />
              
              <div className="head-text-2">ECM Savings</div>
              {/* <ECMField name={this.state.ecms.name} electricity={this.state.ecms.electricity} gas={this.state.ecms.gas} onChange={this.onChange} onTextChange={this.onTextChange}/> */}
              <ECMField ecms={this.state.ecms} addECM={this.addECM} onChange={this.onECMChange}/>
              {/* <input type="submit" value="Submit" /> */}
              <button onClick={this.setDefaults}>Restore 2019 41CS Defaults</button>
            </form>
          </div>
        </div>
        
        <div>
          {/* <canvas id="myChart"></canvas> */}
          <div className="content-layout">
            <div className="top-row">
            <div className="btn-group">
              <button className = {this.state.btnTotal} onClick={this.setTotal}>Total (without ECMs)</button>
              <button className = {this.state.btnNet} onClick={this.setNet}>Net (with ECMs)</button>
            </div>
              {/* pie total energy use */}
              <div className="chart-container">
                <Pie id="energy-use" data={data_energy_use} options={options_energy_use} ref={(reference) => this.pie_energy_use = reference}  />
              </div>

              {/* pie net energy use? */}

              {/* pie total CO2 */}
              <div className="chart-container">
                <Pie id="energy-co2" data={data_co2} options={options_co2} ref={(reference) => this.pie_co2 = reference}  />
              </div>

              {/* pie total energy costs */}
              <div className="chart-container">
                <Pie id="energy-cost" data={data_cost} options={options_cost} ref={(reference) => this.pie_cost = reference}  />
              </div>
              
              {/* pie ECM CO2 breakdown */}
              <div className="chart-container ecm">
                <Pie id="ecm-co2" data={data_ecm} options={options_ecm} ref={(reference) => this.pie_ecm = reference}  />
              </div>
              
            </div>
            <div className="bottom-row">
              {/* LL97 costs */}
              <div className="chart-container bar">
                <Bar id="ll97-cost" data={data_ll97} options={options_ll97} ref={(reference) => this.bar_ll97 = reference}  />
                <div className='axis-label'> Total Cost ($) </div>
              </div>
              <div className="chart-container bar-thresholds">
                <Bar id="thresholds" data={data_thresholds} options={options_thresholds} ref={(reference) => this.bar_thresholds = reference} />
                {/* <div className='axis-label'> CO2 Emissions (tons CO2e) </div> */}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default UI;

// react chart js 2
// https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
// https://codepen.io/jamiecalder/pen/NrROeB
// https://www.geeksforgeeks.org/how-to-create-horizontal-bar-chart-using-react-bootstrap/
// https://github.com/chartjs/chartjs-plugin-annotation
// https://www.chartjs.org/chartjs-plugin-annotation/samples/intro.html
// https://www.codegrepper.com/code-examples/javascript/dynamic+input+fields+in+react+js