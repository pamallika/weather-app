import './weather.css'
const Weather=(props)=>(
    <>
    {props.city &&
    <div className="content">
             <p>Местоположение: {props.country}, {props.city}</p>
             <p>Температура: {props.temp} &#8451;</p>
    </div>
    }
    <p>{props.error}</p>
     </>
);
export default Weather;