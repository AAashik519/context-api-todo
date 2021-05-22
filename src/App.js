 
import Todos from './Components/Todos';
import TodoProvider from './Context/TodoProvider';
import './styles/App.css';

function App() {
  return (
    
    <TodoProvider>
      <div className="App">
       <Todos />
    </div>
    </TodoProvider>
  );
}

export default App;
