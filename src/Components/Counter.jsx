import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/features/counter/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(count))}>+</button>
      <button onClick={() => dispatch(decrement(count))}>-</button>
    </div>
  );
}

export default Counter;
