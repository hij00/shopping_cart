import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Db } from "./components/Db";
import { GlobalStyle } from "./components/GlobalStyle";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  const [cartItem, setCartItem] = useState(Db);

  // console.log(cartItem);

  return (
    <Router>
      <GlobalStyle />
      <Header itemCount={cartItem.length} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<ShoppingCart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
