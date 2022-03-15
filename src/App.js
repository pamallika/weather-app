import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';


const API_KEY="af8391a0c580c86280d9f069d211261e";
class App extends React.Component{

  gettingWeather=async(e)=>{
    e.preventDefault();
    const api_url=await fetch(`api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}&units=metric`)
    const data=await api_url.json();
    console.log(data)
  }
  render(){
    return(
      <>
        <Info/>
        <Form/>
        <Weather/>
      </>
    )
  }
}
export default App;