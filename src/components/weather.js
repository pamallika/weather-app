import React from 'react';

class Weather extends React.Component{к
    render(){
        return(
            <>
         {this.props.city &&
         <div className="content">
                  <p>Местоположение:{this.props.country},{this.props.city}</p>
                  <p>Температура:{this.props.temp} &#8451;</p>
         </div>
         }
         <p>{this.props.error}</p>
          </>
        )
       
    }
}
export default Weather;