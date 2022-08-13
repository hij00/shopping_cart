import styled from "styled-components";
import { ShoppingCart } from "./ShoppingCart";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Wrap>
      <Logo>
        <Link to={"/"}>로고</Link>
      </Logo>
      <Cart>
        <Link to={"/cart"}>장바구니</Link>
      </Cart>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: gray;
  width: 100%;
  height: 80px;
  opacity: 0.7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
`;

const Logo = styled.div``;
const Cart = styled.div``;
