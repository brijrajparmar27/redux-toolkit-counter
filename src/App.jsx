import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement } from "./Reducers/Counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment({ num: 2 }));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="App">
      <button onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
