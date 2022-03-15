import './form.css'
const Form=(props)=>(
    <form onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="Введите город" />
    <button type="submit">Узнать погоду</button>
</form>
);
export default Form;