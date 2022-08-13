import styled from "styled-components";

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

const Head = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 120px;
  box-sizing: border-box;
  background-color: lightblue;
`;
const Name = styled.h3``;

const TWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Check = styled.div``;
const All = styled.div``;
const Delete = styled.div``;

const Btn = styled.button`
  all: unset;
`;

export const ShoppingCart = () => {
  const itemList = [
    {
      id: 0,
      name: "곰인형",
      price: 10000,
    },
    {
      id: 1,
      name: "곰인형",
      price: 10000,
    },
    {
      id: 2,
      name: "곰인형",
      price: 10000,
    },
  ];

  return (
    <Wrap>
      <Head>
        <Name>선택</Name>
        <Name>상품명</Name>
        <Name>가격</Name>
        <Name>수량</Name>
        <Name>합계</Name>
        <Name>삭제</Name>
      </Head>
      <Items>
        {itemList.map((item) => (
          <TWrap>
            <Check>X</Check>
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
            <Btn>+</Btn>
            <All>-</All>
            <Delete>X</Delete>
          </TWrap>
        ))}
      </Items>
    </Wrap>
  );
};
