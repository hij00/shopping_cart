import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Db } from "./components/Db";
import { GlobalStyle } from "./components/style/GlobalStyle";
import { Header } from "./components/Header";
import { Main } from "./components/pages/Main";
import { ShoppingCart } from "./components/pages/ShoppingCart";

function App() {
  const [cartItem, setCartItem] = useState(Db);

  const filterItem = (idx) => {
    setCartItem(
      cartItem.filter((_, i) => {
        return i !== idx;
      })
    );
  };

  const addToCart = (item) => {
    alert("장바구니에 추가되었습니다.");
    setCartItem([...cartItem, item]);
  };

  return (
    <Router>
      <GlobalStyle />
      <Header itemCount={cartItem.length} />
      <Routes>
        <Route path="/" element={<Main addToCart={addToCart} />}></Route>
        <Route
          path="/cart"
          element={<ShoppingCart cartItem={cartItem} filterItem={filterItem} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
