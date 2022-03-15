import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';


const API_KEY="af8391a0c580c86280d9f069d211261e";
class App extends React.Component{

state={
  country:"",
  city:"",
  temp:"",
  error:""
}
  gettingWeather=async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    if(city){
    const api_url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data=await api_url.json();
    this.setState({
      country:data.sys.country,
      city:data.name,
      temp:data.main.temp,
      error:""

    });
  }else{
    this.setState({
      country:"",
      city:"",
      temp:"",
      error:"Введите название города"

    });
  }
  }
  render(){
    return(
      <>
        <Info/>
        <Form weatherMethod={this.gettingWeather}/>
        <Weather
          country={this.state.country}
          city={this.state.city}
          temp={this.state.temp}
          error={this.state.error}
        />
      </>
    )
  }
}
export default App;