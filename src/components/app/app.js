import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App() {

  const data = [
    {name: 'John R.', salary: 800, increase: false, id: 0, like: false},
    {name: 'Alex G.', salary: 3000, increase: false, id: 1, like: false},
    {name: 'Carl W.', salary: 5000, increase: false, id: 2, like: false},
    {name: 'Any P.', salary: 1000, increase: true, id: 3, like: false},
  ];

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployersList data={data}/>
      <EmployersAddForm/>
    </div>
  );
}

export default App;