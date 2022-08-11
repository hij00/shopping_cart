import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
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
  width: 50%;
`;

const Btn = styled.button`
  all: unset;
`;

const Cart = styled.div`
  width: 50%;
`;

export const ShoppingCart = () => {
  const handleClick = (e) => {
    const item = console.log(item);
  };
  return (
    <Wrap>
      <Items>
        <Btn value="1" onClick={handleClick}>
          item 1
        </Btn>
        <Btn value="2" onClick={handleClick}>
          item 2
        </Btn>
        <Btn value="3" onClick={handleClick}>
          item 3
        </Btn>
        <Btn value="4" onClick={handleClick}>
          item 4
        </Btn>
      </Items>
      <Cart>
        카트<ul></ul>
      </Cart>
    </Wrap>
  );
};
