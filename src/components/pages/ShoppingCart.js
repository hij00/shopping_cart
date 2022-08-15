import styled from "styled-components";
import { CheckBox } from "../CheckBox";

export const ShoppingCart = ({ cartItem, filterItem }) => {
  return (
    <SWrap>
      <STitle>장바구니</STitle>
      <CartTable>
        <CartHeader>
          <td>
            <CheckBox />
          </td>
          <td>
            <span>전체 선택 3/3</span>
          </td>
          <td>
            <span>상품정보</span>
          </td>
          <td>
            <span>수량</span>
          </td>
          <td>
            <span>상품금액</span>
          </td>
        </CartHeader>
      </CartTable>
      <Items>
        {cartItem.map((e, i) => (
          <Item key={e.product_id} idx={i}>
            <ImgWrap>
              <Img />
            </ImgWrap>
            <ProductWrap>
              <Title>{e.product_name}</Title>
              <Price></Price>
            </ProductWrap>
            <Delete onClick={() => filterItem()}>X</Delete>
          </Item>
        ))}
      </Items>
    </SWrap>
  );
};

const SWrap = styled.div`
  width: 1096px;
  margin: 0 auto;
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

const STitle = styled.div`
  margin-top: 67px;
  margin-bottom: 22px;
  font-weight: 900;
  font-size: 28px;
`;

const CartTable = styled.table`
  width: 100%;
  border: 1px solid #000000;
  border-radius: 3px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
`;

const CartHeader = styled.tr`
  height: 72px;
  border-bottom: 1px solid #000000;
  background: #fffef8;

  td {
    vertical-align: middle;
    text-align: center;

    &:first-of-type {
      padding-left: 29px;
    }
  }
`;

const Item = styled.tr`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  td {
    vertical-align: middle;
    text-align: center;

    &:first-of-type {
      padding-left: 29px;
    }
  }
`;

const ImgWrap = styled.td`
  width: 180px;
`;

const Img = styled.div`
  width: 56px;
  height: 56px;
  background-color: gray;
`;

const ProductWrap = styled.td``;

const Title = styled.div`
  padding-left: 30px;
  color: #000000;
  text-align: left;

  margin-bottom: 8px;
  font-weight: bold;
  font-size: 18px;
`;

const Price = styled.div`
  padding-left: 30px;
  color: #000000;
  text-align: left;
  padding-left: 29px;
`;

const Delete = styled.div``;
