import "./App.css";
import TodoContextProvider from "./components/Context/TodoContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <MyRoutes />
      </TodoContextProvider>
    </div>
  );
}

export default App;
