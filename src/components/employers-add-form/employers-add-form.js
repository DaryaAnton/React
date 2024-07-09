import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import './employers-add-form.css'

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  onValueAdd = (e) => {
    e.preventDefault();
    const { name, salary } = this.state;
    this.props.onAdd(name, salary);
    this.setState({
      name: '',
      salary: ''
    });
  }

  render () {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
        className="add-form d-flex">
        <input 
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          name="name"
          value={name}
          onChange={this.onValueChange} 
        />
        <input 
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          name="salary"
          value={salary}
          onChange={this.onValueChange} 
        />
  
        <button 
          type="submit"
          className="btn btn-outline-light"
          onClick={this.onValueAdd}
        >Добавить</button>
      </form>
    </div>
    )
  }
}

export default EmployersAddForm;