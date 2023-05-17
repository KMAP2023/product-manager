import logo from './logo.svg';
import './App.css';
import DashboardPage from './views/DashboardPage'
import CreatePage from './views/CreatePage'
import DetailsPage from './views/DetailsPage'
import UpdatePage from './views/UpdatePage'
import {Routes, Route, Link} from 'react-router-dom'
import Main from './views/Main';



function App() {
  return (
    <div className="App">
      <h2>Product Manager</h2>
<p><Link to="/dashboard">Dash Board</Link></p> |
<p><Link to="products/new">Create a new Product</Link></p>
    <Routes>
    <Route path="/" element={<Main />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/products/new" element={<CreatePage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/products/:id/edit" element={<UpdatePage />} />
    </Routes>

    </div>
  );
}

export default App;
