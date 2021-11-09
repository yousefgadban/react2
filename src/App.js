import logo from './logo.svg';
import './App.css';
import { Users } from './Users';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Market } from './market/Market';
import { AddItem } from './market/AddItem';
import { Header } from './Header/Header';

function App() {
  return (
    <div >
      <BrowserRouter>
            <Header /> 
            <Routes>

                <Route path="/" exact element={<Market />} />
                <Route path="/market"  element={<Market />} />
                <Route path="/addItem" element={<AddItem />} />
                
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
