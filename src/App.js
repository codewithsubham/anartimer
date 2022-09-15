import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer';
import ParentController from './component/ParentController';
import UseTimerContextProvider from './state/useTimerContext';

function App()
{
  return (
    <>
      <ParentController />
      <Timer />
      <Timer />
      <Timer />
    </>
  );
}

export default App;
