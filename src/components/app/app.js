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
        {name: 'John R.', salary: 800, increase: false, id: uuidv4(), rise: true},
        {name: 'Alex G.', salary: 3000, increase: false, id: uuidv4(), rise: false},
        {name: 'Carl W.', salary: 5000, increase: true, id: uuidv4(), rise: false},
        {name: 'Any P.', salary: 1000, increase: false, id: uuidv4(), rise: false},
      ],
      term: '',
      filter: 'all'
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
      rise: false,
      id: uuidv4()
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      };
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }));
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise': 
        return items.filter(item => item.rise);

      case 'moreThen1000': 
        return items.filter(item => item.salary > 1000);

      default: 
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  onChangeSalary = (id, salary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, salary: salary };
        }
        return item;
      }),
    }));
  };

  render() {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)
    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased}
        />
  
        <div className="search-panel">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <AppFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
  
        <EmployersList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onChangeSalary={this.onChangeSalary}
        />
        <EmployersAddForm
        onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;