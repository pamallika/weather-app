import React from 'react';

class Form extends React.Component{к
    render(){
        return(
        <form onSubmit={this.props.weatherMethod}>
            <input type="text" name="city" placeholder="Введите город" />
            <button type="submit">Узнать погоду</button>
        </form>
        )
    }
}
export default Form;