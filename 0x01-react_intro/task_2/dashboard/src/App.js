import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
    <div className='App-header'>
      <img src={logo} alt='Holberton Logo' />
      <h1>School Dashboard</h1>
    </div>

    <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <div id='form'>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input type='email' name='email' id='email' />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password: </label>
          <input type='password' name='password' id='password' />
        </div>
        <button type='submit'>OK</button>
      </div>
    </div>

    <div className='App-footer'>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>

    </>
  );
  
}


export default App;
