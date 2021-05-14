import './App.css';
import Controller from './components/Controller';
import RegisterContextProvider from './context/RegisterContext';

function App() {
  return (
    <RegisterContextProvider>
      <Controller />
    </RegisterContextProvider>
  );
}

export default App;
