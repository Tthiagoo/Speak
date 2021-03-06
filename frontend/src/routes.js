import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Chat from './pages/Chat';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/sessions" component={Cadastro}/>
        <Route path="/chat" component={Chat}/>
        

      </Switch>
    </BrowserRouter>
  )
}