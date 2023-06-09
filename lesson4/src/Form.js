import React from "react";

class EsseyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "Напишите сочинение"}
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        this.setState({value: event.target.value})
    }
    handleSubmit(event) {
        alert("Отправлено эссе: " + this.state.value)
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                Essey:
                <label>
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Отправить"/>
            </form>
        )
    }
}

export default EsseyForm;