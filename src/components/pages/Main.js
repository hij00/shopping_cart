import { useEffect } from "react";
import styled from "styled-components";
import { Db } from "../Db";

export const Main = ({ addToCart }) => {
  useEffect(() => {
    console.log("ProductList render");
  });

  return (
    <SWrap>
      <STitle>상품목록</STitle>
      <ConWrap>
        {Db.map((con, i) => (
          <Wrap key={i}>
            <Img />
            <Title>{con.product_name}</Title>
            <Price>{con.price}</Price>
            <AddBtn onClick={() => addToCart()}>장바구니 담기</AddBtn>
          </Wrap>
        ))}
      </ConWrap>
    </SWrap>
  );
};

const SWrap = styled.div`
  width: 1096px;
  height: 100vh;
  margin: 0 auto;
`;

const STitle = styled.div`
  margin-top: 67px;
  margin-bottom: 22px;
  font-weight: 900;
  font-size: 28px;
`;

const ConWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  /* background-color: gray; */
`;

const Wrap = styled.div`
  width: 250px;
  height: 390px;
  margin-right: 32px;
  margin-bottom: 50px;

  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const Img = styled.div`
  width: 100%;
  height: 200px;
  background-color: gray;
`;

const Title = styled.div`
  margin-bottom: 12px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 130%;
`;

const Price = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #e82c23;
`;

const AddBtn = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 13px;
  color: #ffffff;

  width: 122px;
  height: 30px;
  margin-top: 24px;
  padding-left: 12px;
  background: #000000;
  border-radius: 3px;
  cursor: pointer;
`;
