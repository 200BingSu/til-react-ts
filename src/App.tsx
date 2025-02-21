import CounterAtom from "./pages/CounterAtom";
import TodoList from "./pages/TodoList";

const App = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10">
      <CounterAtom />
      <TodoList />
    </div>
  );
};

export default App;
