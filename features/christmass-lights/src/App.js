import './App.css';
import Lights from './components/Lights';

const App = () => {
  return (
    <div className="appWrapper">
      <div className="headingContainer">
        <h1 className="heading">Stranger things</h1>
      </div>
      <Lights />
    </div>
  );
}

export default App;
