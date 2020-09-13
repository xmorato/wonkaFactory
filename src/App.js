import React from 'react';
import './App.css';
import Header from './components/Header'
import { Switch, Route } from "wouter"
import { OompasContextProvider } from "./context/OompasContext";
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <OompasContextProvider>
          <Switch>
            <Route component={Home} path="/" />
            <Route component={Detail} path="/:id" />
          </Switch>
        </OompasContextProvider>
      </div>
    </div>
  );
}

export default App;
