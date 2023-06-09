import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: "Напишите имя"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
      alert("Отправлено имя: " + this.state.value)
      event.preventDefault()
  }

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          Name:
          <label>
            <input type="text"
                   value={this.state.value}
                   onChange={this.handleChange}/>
          </label>
          <input type="submit" value= "Отправить"/>
        </form>
    )
  }


}

export default NameForm;
