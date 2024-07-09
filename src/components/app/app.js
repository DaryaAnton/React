import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John R.', salary: 800, increase: false, id: uuidv4(), like: false},
        {name: 'Alex G.', salary: 3000, increase: false, id: uuidv4(), like: false},
        {name: 'Carl W.', salary: 5000, increase: false, id: uuidv4(), like: false},
        {name: 'Any P.', salary: 1000, increase: true, id: uuidv4(), like: false},
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {

      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }
  
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: uuidv4()
    };
    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      };
    });
  }

  render() {
    return (
      <div className="app">
        <AppInfo/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployersList 
          data={this.state.data}
          onDelete={this.deleteItem}
        />
        <EmployersAddForm
        onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;