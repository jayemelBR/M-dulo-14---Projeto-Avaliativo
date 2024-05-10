import { Outlet } from 'react-router-dom';
import SearchBar from './searchbar';
import Header from './components/Header';

function App() {
  return (
    <div>
<Header /> 
<Outlet />
    </div>
  );
}

export default App;