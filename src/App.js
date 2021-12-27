import './App.css';
import CatContainer from './components/CatContainer';
import AuthContextProvider from './contexts/AuthContext';
import CatContextProvider from './contexts/CatContext';
// import Home from './components/Home';

function App() {
  return (
    <div className="App">
    {/* <Home /> */}
    <AuthContextProvider>
      <CatContextProvider>
        <CatContainer />
      </CatContextProvider>
    </AuthContextProvider>

    </div>
  );
}

export default App;
