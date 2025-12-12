import { MovementList } from './components';
import { movementsData } from './data/movements';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Movimientos Financieros</h1>
        <p>Panel de control de transacciones</p>
      </header>
      <main className="app-main">
        <MovementList movementsData={movementsData} />
      </main>
    </div>
  );
}

export default App;
