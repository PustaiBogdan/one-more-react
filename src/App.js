import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import Bye from './components/bye';
import EventBind from './components/EventBind';
import ParentElement from './components/ParentElement';

function App() {
  return (
    <div className="App">
      <ParentElement/>
      {/* <EventBind/> */}


      {/* <Hello/> */}
      {/* <Bye name="jon" second="don"/>
<Welcome name="ola" second="hola"/> */}
      {/* <Message/> */}
    </div>
  );
}

export default App;
