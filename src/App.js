
import './App.css';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log('DISPATCH action');

    dispatch({ type: 'USER_FETCH_REQUESTED', payload: 'this is the payload string' })
  }

  return (
    <div className='App'>
      <header className='App-header'>

        <button onClick={onClickHandler}>Dispatch</button>
      </header>
    </div>
  );
}

export default App;
