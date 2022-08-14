import styled from "styled-components";
import { Db } from "../Db";

export const ShoppingCart = () => {
  return (
    <Wrap>
      <Items></Items>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 120px;
  box-sizing: border-box;
`;

const Product = styled.div``;
