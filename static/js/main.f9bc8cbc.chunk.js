(this["webpackJsonpcu-carbon-emissions-calculator"]=this["webpackJsonpcu-carbon-emissions-calculator"]||[]).push([[0],{23:function(t,e,a){},24:function(t,e,a){},26:function(t,e,a){"use strict";a.r(e);var i=a(7),s=a.n(i),n=a(17),c=a.n(n),l=(a(23),a(24),a(9)),r=a(2),o=a(3),d=a(12),b=a(5),h=a(4),m=a(1),u=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsxs)("div",{className:"left-container",children:[Object(m.jsx)("div",{className:"head-text-4",children:"Building Type"}),Object(m.jsxs)("select",{className:"bldg-type-select",name:"building",value:this.props.building,onChange:this.props.onTextChange,children:[Object(m.jsx)("option",{value:"A",children:"A (Assembly)"}),Object(m.jsx)("option",{value:"B_norm",children:"B (Business)"}),Object(m.jsx)("option",{value:"B_health",children:"B (Healthcare)"}),Object(m.jsx)("option",{value:"E",children:"E (Educational)"}),Object(m.jsx)("option",{value:"F",children:"F (Factory/Industrial)"}),Object(m.jsx)("option",{value:"H",children:"H (High Hazard)"}),Object(m.jsx)("option",{value:"I1",children:"I-1 (Institutional)"}),Object(m.jsx)("option",{value:"I2",children:"I-2 (Institutional)"}),Object(m.jsx)("option",{value:"I3",children:"I-3 (Institutional)"}),Object(m.jsx)("option",{value:"I4",children:"I-4 (Institutional)"}),Object(m.jsx)("option",{value:"M",children:"M (Mercantile)"}),Object(m.jsx)("option",{value:"R1",children:"R-1 (Residential)"}),Object(m.jsx)("option",{value:"R2",children:"R-2 (Residential)"}),Object(m.jsx)("option",{value:"U",children:"U (Utility/Misc)"})]})]}),Object(m.jsxs)("div",{className:"right-container bldg",children:[Object(m.jsx)("div",{className:"head-text-4",children:"Area (SF)"}),Object(m.jsx)("input",{name:this.props.name,type:"number",value:this.props.value,onChange:this.props.onChange})]})]})}}]),a}(i.Component),p=u,j=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsxs)("div",{className:"left-container",children:[Object(m.jsx)("div",{className:"head-text-4",children:this.props.leftText}),Object(m.jsx)("input",{name:this.props.leftVar,type:"number",value:this.props.leftValue,onChange:this.props.onChange})]}),Object(m.jsxs)("div",{className:"right-container",children:[Object(m.jsx)("div",{className:"head-text-4",children:this.props.rightText}),Object(m.jsx)("input",{name:this.props.rightVar,type:"number",value:this.props.rightValue,onChange:this.props.onChange})]})]})}}]),a}(i.Component),g=j,x=a(8),O={building:"B_norm",area:18e4,electricityUse:3357600,electricityDemand:770,gasUse:224449,electricityRate:.19,electricityDemandRate:25,gasRate:.9,electricityCoeff:288962e-9,gasCoeff:5311e-8,limits:{limit24:8.46,limit30:4.53,limit35:1.4}},f=[{name:"Lab Heat Recovery",electricity:0,gas:3276219},{name:"Optimized Controls",electricity:1653089,gas:37658},{name:"CW Supply Temp Reset",electricity:429930,gas:0}],v={A:{limit24:10.74,limit30:4.2,limit35:1.4},B_norm:{limit24:8.46,limit30:4.53,limit35:1.4},B_health:{limit24:23.81,limit30:11.93,limit35:1.4},E:{limit24:7.58,limit30:3.44,limit35:1.4},F:{limit24:5.74,limit30:1.67,limit35:1.4},H:{limit24:23.81,limit30:11.93,limit35:1.4},I1:{limit24:11.38,limit30:5.98,limit35:1.4},I2:{limit24:23.81,limit30:11.93,limit35:1.4},I3:{limit24:23.81,limit30:11.93,limit35:1.4},I4:{limit24:7.58,limit30:3.44,limit35:1.4},M:{limit24:11.81,limit30:4.03,limit35:1.4},R1:{limit24:9.87,limit30:5.26,limit35:1.4},R2:{limit24:6.75,limit30:4.07,limit35:1.4},U:{limit24:4.26,limit30:1.1,limit35:1.4}},C=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).addECM=function(e){if(t.props.ecms.length<10){var a=[].concat(Object(x.a)(t.props.ecms),[{name:"",electricity:0,gas:0}]);t.props.onChange(a)}},t.removeECM=function(e){var a=Object(x.a)(t.props.ecms);a.splice(e,1),t.props.onChange(a)},t.setDefaultECMs=function(){var e=JSON.parse(JSON.stringify(f));t.props.onChange(e)},t.clearECMs=function(){t.props.onChange([{name:"",electricity:0,gas:0}])},t.onChange=function(e,a,i){var s=Object(x.a)(t.props.ecms);s[a][i]="name"===i?e.target.value:Number(e.target.value),t.props.onChange(s)},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:"input-header-left",children:[this.props.ecms.map((function(e,a){return Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsxs)("div",{className:"input-container-ecm",children:[Object(m.jsx)("div",{className:"left-container",children:Object(m.jsx)("div",{className:"head-text-4",children:"ECM Name:"})}),Object(m.jsxs)("div",{className:"name-container",children:[Object(m.jsx)("input",{type:"text",value:e.name,onChange:function(e){return t.onChange(e,a,"name")}}),Object(m.jsx)("button",{className:"type-remove-btn",onClick:function(){return t.removeECM(a)},children:"X"})]})]}),Object(m.jsxs)("div",{className:"input-container-ecm",children:[Object(m.jsxs)("div",{className:"left-container",children:[Object(m.jsx)("div",{className:"head-text-4",children:"Electricity (kBtu)"}),Object(m.jsx)("input",{type:"number",value:e.electricity,onChange:function(e){return t.onChange(e,a,"electricity")}})]}),Object(m.jsxs)("div",{className:"right-container",children:[Object(m.jsx)("div",{className:"head-text-4",children:"Gas (kBtu)"}),Object(m.jsx)("input",{type:"number",value:e.gas,onChange:function(e){return t.onChange(e,a,"gas")}})]})]}),Object(m.jsx)("div",{className:"input-border"})]},a.toString())})),Object(m.jsxs)("button",{className:"btn-1",onClick:this.addECM,children:[" ","Add ECM"," "]}),Object(m.jsxs)("button",{onClick:this.clearECMs,children:[" ","Clear ECMs"," "]}),Object(m.jsxs)("button",{onClick:this.setDefaultECMs,children:[" ","Set Default ECMs"," "]})]})}}]),a}(i.Component),y=C,N=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"left-container",children:Object(m.jsx)("div",{className:"head-text-4 limit-text",children:"2024-2029 limit:"})}),Object(m.jsx)("div",{className:"right-container",children:Object(m.jsxs)("div",{className:"head-text-4",children:[this.props.limit24," kg CO2e/sf/year"]})}),Object(m.jsx)("div",{className:"left-container",children:Object(m.jsx)("div",{className:"head-text-4 limit-text",children:"2030-2034 limit:"})}),Object(m.jsx)("div",{className:"right-container",children:Object(m.jsxs)("div",{className:"head-text-4",children:[this.props.limit30," kg CO2e/sf/year"]})}),Object(m.jsx)("div",{className:"left-container",children:Object(m.jsx)("div",{className:"head-text-4 limit-text",children:"2035+ limit:"})}),Object(m.jsx)("div",{className:"right-container",children:Object(m.jsxs)("div",{className:"head-text-4",children:[this.props.limit35," kg CO2e/sf/year"]})})]})}}]),a}(i.Component),k=N,_=a(13),E=a(11),F=a(18);E.b.register(F.a);var S=3.412,M=100.067,T=["rgb(54, 162, 235)","rgb(237,28,36)","#ff7f0e","#2ca02c","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],R=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).pie_energy_use={},t.pie_co2={},t.pie_cost={},t.pie_ecm={},t.bar_ll97={},t.bar_co2={},t.bar_thresholds={},t.valueLabelFunction=function(t){var e=t.label||"";return e&&(e+=": "),null!==t.parsed&&(e+=new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(t.parsed)),e},t.costLabelFunction=function(t){var e;return void 0===t.parsed.x?((e=t.label||"")&&(e+=": "),e+=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(t.parsed)):((e=t.dataset.label||"")&&(e+=": "),e+=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(t.parsed.x)),e},t.getProps=function(){var e=t.props.electricityUse*S,a=t.props.gasUse*M,i=e+a,s=t.props.electricityUse*t.props.electricityCoeff,n=a*t.props.gasCoeff,c=s+n,l=t.props.electricityUse*t.props.electricityRate,r=t.props.gasUse*t.props.gasRate,o=l+r,d=t.props.ecms.reduce((function(t,e){return t+e.electricity}),0),b=t.props.ecms.reduce((function(t,e){return t+e.gas}),0),h=t.props.ecms.map((function(e){return e.electricity/S*t.props.electricityCoeff+e.gas*t.props.gasCoeff})),m=Math.max(e-d,0),u=Math.max(a-b,0),p=m/S*t.props.electricityCoeff,j=u*t.props.gasCoeff,g=m/S*t.props.electricityRate,x=u/M*t.props.gasRate,O=m+u,f=p+j,v=g+x,C=c-f,y=o-v,N=t.props.area*t.props.limits.limit24/1e3,k=t.props.area*t.props.limits.limit30/1e3,_=t.props.area*t.props.limits.limit35/1e3,E=Math.max((f-N)*t.props.penalty,0),F=Math.max((f-k)*t.props.penalty,0),R=Math.max((f-_)*t.props.penalty,0),U={labels:["Electricity","Natural Gas"],datasets:[{data:t.props.totalFlag?[e,a]:[m,u],backgroundColor:["rgb(54, 162, 235)","rgb(237,28,36)"],hoverOffset:4}]},I={plugins:{title:{display:!0,text:t.props.totalFlag?"Total Energy Use (kBtu)":"Net Energy Use (kBtu)",font:{size:16}},tooltip:{callbacks:{label:t.valueLabelFunction}}},maintainAspectRatio:!1},L={labels:["Electricity","Natural Gas"],datasets:[{data:t.props.totalFlag?[s,n]:[p,j],backgroundColor:["rgb(54, 162, 235)","rgb(237,28,36)"],hoverOffset:4}]},B={plugins:{title:{display:!0,text:t.props.totalFlag?"Total CO2 Emissions (tCO2)":"Net CO2 Emissions (tCO2)",font:{size:16}},tooltip:{callbacks:{label:t.valueLabelFunction}}},maintainAspectRatio:!1},D={labels:["Electricity","Natural Gas"],datasets:[{data:t.props.totalFlag?[l,r]:[g,x],backgroundColor:["rgb(54, 162, 235)","rgb(237,28,36)"],hoverOffset:4}]},A={plugins:{title:{display:!0,text:t.props.totalFlag?"Total Energy Costs ($)":"Net Energy Costs ($)",font:{size:16}},tooltip:{callbacks:{label:t.costLabelFunction}}},maintainAspectRatio:!1},V={labels:t.props.ecms.map((function(t){return t.name})),datasets:[{data:h,backgroundColor:T.slice(0,t.props.ecms.length),hoverOffset:4}]},w={labels:["2024","2030","2035+"],datasets:[{stack:"stack1",label:"Energy Cost",data:[v,v,v],backgroundColor:["rgb(54, 162, 235)"]},{stack:"stack1",label:"LL97 Penalty",data:[E,F,R],backgroundColor:["rgb(237,28,36)"]},{stack:"stack1",label:"ECM Savings",data:[y,y,y],backgroundColor:["rgba(0, 145, 77, 0.4)"]}]},z={indexAxis:"y",plugins:{title:{display:!0,text:"Energy and LL97 Costs",padding:{bottom:0},font:{size:16}},tooltip:{callbacks:{label:t.costLabelFunction}}},scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]},maintainAspectRatio:!1},H={labels:[""],datasets:[{stack:"stack1",label:"Net CO2 Emissions",data:[f],backgroundColor:["rgb(54, 162, 235)"]},{stack:"stack1",label:"ECM Savings",data:[C],backgroundColor:["rgba(0, 145, 77, 0.4)"]}]},G=["2024","2030","2035+"],P=[];return[N,k,_].forEach((function(t,e){t>0&&P.push({label:{backgroundColor:t<=f?"rgb(237,28,36)":"rgba(255, 99, 132, 0.5)",content:[G[e]+" Target",t.toFixed(0)+" tCO2e/yr"],enabled:!0,yAdjust:-60},type:"line",xMin:t,xMax:t,borderColor:t<=f?"rgb(237,28,36)":"rgba(255, 99, 132, 0.5)",borderWidth:2})})),{total_kbtu:i,total_co2:c,total_cost:o,net_kbtu:O,net_co2:f,net_cost:v,data_energy_use:U,options_energy_use:I,data_co2:L,options_co2:B,data_cost:D,options_cost:A,data_ecm:V,options_ecm:{plugins:{title:{display:!0,text:"ECM CO2 Savings",font:{size:16}},legend:{position:"right"}},maintainAspectRatio:!1},data_ll97_costs:w,options_ll97_costs:z,data_ll97_targets:H,options_ll97_targets:{indexAxis:"y",plugins:{title:{display:!0,text:"LL97 CO2 Emissions Targets (tCO2e)",padding:{bottom:50},font:{size:16}},legend:{display:!1},annotation:{annotations:P}},scales:{x:{grid:{drawBorder:!1}},y:{grid:{display:!1,drawBorder:!1}}},maintainAspectRatio:!1}}},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.getProps();return Object(m.jsxs)("div",{className:"content-layout",children:[Object(m.jsxs)("div",{className:"top-row",children:[Object(m.jsxs)("div",{className:"btn-group",children:[Object(m.jsx)("button",{className:this.props.btnTotal,onClick:this.props.setTotal,children:"Total (without ECMs)"}),Object(m.jsx)("button",{className:this.props.btnNet,onClick:this.props.setNet,children:"Net (with ECMs)"})]}),Object(m.jsxs)("div",{className:"chart-container",children:[Object(m.jsx)(_.b,{id:"energy-use",data:e.data_energy_use,options:e.options_energy_use,ref:function(e){return t.pie_energy_use=e}}),Object(m.jsxs)("div",{className:"total-label",children:[" ",Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(this.props.totalFlag?e.total_kbtu:e.net_kbtu)," kBtu "]})]}),Object(m.jsxs)("div",{className:"chart-container",children:[Object(m.jsx)(_.b,{id:"energy-co2",data:e.data_co2,options:e.options_co2,ref:function(e){return t.pie_co2=e}}),Object(m.jsxs)("div",{className:"total-label",children:[" ",Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(this.props.totalFlag?e.total_co2:e.net_co2)," tCO2e "]})]}),Object(m.jsxs)("div",{className:"chart-container",children:[Object(m.jsx)(_.b,{id:"energy-cost",data:e.data_cost,options:e.options_cost,ref:function(e){return t.pie_cost=e}}),Object(m.jsxs)("div",{className:"total-label",children:[" ",Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(this.props.totalFlag?e.total_cost:e.net_cost)," "]})]}),Object(m.jsx)("div",{className:"chart-container ecm",children:Object(m.jsx)(_.b,{id:"ecm-co2",data:e.data_ecm,options:e.options_ecm,ref:function(e){return t.pie_ecm=e}})})]}),Object(m.jsxs)("div",{className:"bottom-row",children:[Object(m.jsxs)("div",{className:"chart-container bar",children:[Object(m.jsx)(_.a,{id:"ll97-cost",data:e.data_ll97_costs,options:e.options_ll97_costs,ref:function(e){return t.bar_ll97=e}}),Object(m.jsx)("div",{className:"axis-label",children:" Total Cost ($) "})]}),Object(m.jsx)("div",{className:"chart-container bar-thresholds",children:Object(m.jsx)(_.a,{id:"thresholds",data:e.data_ll97_targets,options:e.options_ll97_targets,ref:function(e){return t.bar_thresholds=e}})})]})]})}}]),a}(i.Component),U=R,I=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(t){var i;return Object(r.a)(this,a),(i=e.call(this,t)).state={building:"B_norm",area:18e4,electricityUse:3357600,gasUse:224449,electricityRate:.19,gasRate:.9,electricityCoeff:288962e-9,gasCoeff:5311e-8,limits:{limit24:8.46,limit30:4.53,limit35:1.4},penalty:268,ecms:[{name:"",electricity:0,gas:0}],totalFlag:!0,btnTotal:"btn-clicked",btnNet:"btn-unclicked"},i.onChange=i.onChange.bind(Object(d.a)(i)),i.onTextChange=i.onTextChange.bind(Object(d.a)(i)),i.onLimitsChange=i.onLimitsChange.bind(Object(d.a)(i)),i.onECMChange=i.onECMChange.bind(Object(d.a)(i)),i.setDefaults=i.setDefaults.bind(Object(d.a)(i)),i.onSubmit=i.onSubmit.bind(Object(d.a)(i)),i.setTotal=i.setTotal.bind(Object(d.a)(i)),i.setNet=i.setNet.bind(Object(d.a)(i)),i}return Object(o.a)(a,[{key:"onChange",value:function(t){this.setState(Object(l.a)({},t.target.name,Number(t.target.value)))}},{key:"onLimitsChange",value:function(t){this.setState(Object(l.a)({},t.target.name,t.target.value)),this.setState({limits:v[t.target.value]})}},{key:"onECMChange",value:function(t){this.setState({ecms:t})}},{key:"onTextChange",value:function(t){this.setState(Object(l.a)({},t.target.name,t.target.value))}},{key:"setDefaults",value:function(){this.setState(O)}},{key:"onSubmit",value:function(t){t.preventDefault()}},{key:"setTotal",value:function(){this.setState({totalFlag:!0}),this.setState({btnTotal:"btn-clicked"}),this.setState({btnNet:"btn-unclicked"})}},{key:"setNet",value:function(){this.setState({totalFlag:!1}),this.setState({btnTotal:"btn-unclicked"}),this.setState({btnNet:"btn-clicked"})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"sidebar",children:Object(m.jsx)("div",{className:"sidebar-main-container",children:Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{className:"head-text-2",children:"Building Inputs"}),Object(m.jsx)(p,{building:this.state.building,name:"area",value:this.state.area,onTextChange:this.onLimitsChange,onChange:this.onChange}),Object(m.jsx)("div",{className:"head-text-2",children:"Utility Inputs"}),Object(m.jsx)(g,{leftText:"Electricity (kWh)",leftVar:"electricityUse",leftValue:this.state.electricityUse,rightText:"$/kWh (Blended)",rightVar:"electricityRate",rightValue:this.state.electricityRate,onChange:this.onChange}),Object(m.jsx)(g,{leftText:"Natural Gas (therms)",leftVar:"gasUse",leftValue:this.state.gasUse,rightText:"$/therm",rightVar:"gasRate",rightValue:this.state.gasRate,onChange:this.onChange}),Object(m.jsx)("div",{className:"head-text-2",children:"Carbon Coefficients"}),Object(m.jsx)(g,{leftText:"Electricity (tCO2e/kWh)",leftVar:"electricityCoeff",leftValue:this.state.electricityCoeff,rightText:"Gas (tCO2e/kBtu)",rightVar:"gasCoeff",rightValue:this.state.gasCoeff,onChange:this.onChange}),Object(m.jsx)("div",{className:"head-text-2",children:"LL97 Carbon Limits"}),Object(m.jsx)(k,{limit24:this.state.limits.limit24,limit30:this.state.limits.limit30,limit35:this.state.limits.limit35}),Object(m.jsx)("div",{className:"head-text-2",children:"ECM Savings"}),Object(m.jsx)(y,{ecms:this.state.ecms,addECM:this.addECM,onChange:this.onECMChange}),Object(m.jsx)("button",{onClick:this.setDefaults,children:"Restore 2020 41CS Defaults"})]})})}),Object(m.jsx)("div",{children:Object(m.jsx)(U,{area:this.state.area,electricityUse:this.state.electricityUse,gasUse:this.state.gasUse,electricityCoeff:this.state.electricityCoeff,gasCoeff:this.state.gasCoeff,electricityRate:this.state.electricityRate,gasRate:this.state.gasRate,ecms:this.state.ecms,limits:this.state.limits,penalty:this.state.penalty,totalFlag:this.state.totalFlag,btnTotal:this.state.btnTotal,btnNet:this.state.btnNet,setTotal:this.setTotal,setNet:this.setNet})})]})}}]),a}(i.Component),L=a.p+"static/media/cooper_logo.bc42489a.svg";var B=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"header-left",children:Object(m.jsx)("img",{src:L,alt:"Cooper Logo"})}),Object(m.jsxs)("div",{className:"header-middle",children:[Object(m.jsx)("div",{className:"title-text",children:"Cooper Union Carbon Emissions Calculator"}),Object(m.jsx)("div",{className:"title-after"})]}),Object(m.jsx)("div",{className:"header-right"})]}),Object(m.jsx)(I,{})]})},D=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(e){var a=e.getCLS,i=e.getFID,s=e.getFCP,n=e.getLCP,c=e.getTTFB;a(t),i(t),s(t),n(t),c(t)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),D()}},[[26,1,2]]]);
//# sourceMappingURL=main.f9bc8cbc.chunk.js.map