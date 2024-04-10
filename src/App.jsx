import './App.css';
import Header from './components/header/header';

function App() {

  return (
    <div className='App'>
      <div className='sidebar'></div>
      <div className='widgets'></div>
      <div className='home'>
        <Header/>
        <div className='devices_section'>
          <h1 className='devices_section_heading'>Devices</h1>
          <div className='device_container'>
            <div className='device_card'>
              
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default App;
