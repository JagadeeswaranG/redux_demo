import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './action-creators';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const {increment,decrement,reset} = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="App">
     <button onClick={() => increment(1)}>+</button>
     <h1>{counter}</h1>
     <button onClick={() => decrement(1)}>-</button>
     <button onClick={() => reset(0)}>RESET</button>
    </div>
  );
}

export default App;
