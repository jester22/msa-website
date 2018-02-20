import React from 'react';
import Radium from 'radium';
import theme from '../../utils/theme.js';

var styles = {
	moon: {
		color: theme.palette.textColor,
		display: 'table',
		height: '100%',
		padding: '0 32px'
	},
	cell : {
		display: 'table-cell',
		verticalAlign: 'middle'
	}
}

class Moon extends React.Component {

	componentDidMount() {
		var d=new Date().getDate();
		var m=document.querySelectorAll("#contain_moon div");
		var a=new XMLHttpRequest();
		var url="http://www.icalendar37.net/lunar/api/?lang=en&month="+(new Date().getMonth()+1)+"&year="+(new Date().getFullYear())+"&size=60&lightColor=rgb(255,255,255)&shadeColor=rgb(0,0,0)&LDZ="+new Date(new Date().getFullYear(),new Date().getMonth(),1)/1000+"";
		a.onreadystatechange=function(){
			if(a.readyState==4&&a.status==200){
				var b=JSON.parse(a.responseText);
				m[0].innerHTML=b.phase[d].svg;
				if(typeof moon_widget_loaded=="function")moon_widget_loaded(b)
			}
		}
		a.open("GET",url,true);
		a.send();
	}

	render() {
		return <div style={styles.moon} id="contain_moon">
			<div style={styles.cell}></div>
			<div></div>
		</div>
	}
}

export default Radium(Moon);