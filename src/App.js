import logo from './logo.svg';
import VirtualDOMEXplanation from './components/VirtualDOMExplanation';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <VirtualDOMEXplanation />
      </header>
    </div>
  );
}

export default App;
