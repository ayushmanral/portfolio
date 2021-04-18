import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';

function App() {

  React.useEffect(() => {
    var MenuActivator = document.querySelector('.MenuIcon__wrapper'),
        containerComponent = document.querySelector('.main'),
        wrapperComponent = document.querySelector('.App');

    MenuActivator.addEventListener('click', ()=>{
      setTimeout( ()=>{
        wrapperComponent.classList.add('animate');
      },25 );
    });

    containerComponent.addEventListener('click', ()=>{
      if( wrapperComponent.classList.contains('animate') ){
        setTimeout( ()=> {
          wrapperComponent.classList.remove('animate');
        },25 );
      }
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main className="main">
        <div className="MenuIcon__wrapper">
          <div className="MenuIcon">
            <span className="MenuElement"></span>
            <span className="MenuElement"></span>
            <span className="MenuElement"></span>
          </div>
        </div>
        <Main/>
      </main>
    </div>
  );
}

export default App;
