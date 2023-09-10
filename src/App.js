// import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/index";
import Home from "./pages/home/Home";
import AddExpense from "./pages/add-expense";
import Footer from "./components/footer/footer";


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-expense' element={<AddExpense/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
