import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
          <div>Aluno: Kauã Igor Felix</div>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
