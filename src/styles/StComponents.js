import { styled } from "styled-components";

export const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
`;

export const InputBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  height: 30px;
  margin: 0 15px;
  background: none;
  padding: 1.3px 15px;
  border: none;
  border-bottom: 2px solid #d9d9d9;

  &:focus {
    outline-style: none;
    border-bottom: 2px solid #84fab0;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const AddButton = styled(Button)`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

  &:active {
    background-image: linear-gradient(120deg, #8fd3f4 0%, #84fab0 100%);
  }
`;

export const Main = styled.main`
  width: 100%;
  padding: 0 50px;
  padding-bottom: 30px;

  & > p {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TodoBox = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  gap: 15px;
  background: linear-gradient(145deg, #f1f1f1, #ffffff);
  box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
  padding: 30px 30px;
  border-radius: 8px;

  & > p {
    margin: 0;
  }

  & > a:first-child:link,
  & > a:first-child:visited {
    color: blue;
    text-decoration: none;
  }

  & > p:nth-child(2) {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  margin-top: 15px;
`;

export const TodoBoxButton = styled(Button)`
  flex: 1;
  color: white;
`;

export const DeleteButton = styled(TodoBoxButton)`
  background: linear-gradient(145deg, #ff7a7a, #e64e4e);

  &:active {
    background: linear-gradient(145deg, #e64e4e, #ff5d5d);
  }
`;

export const EditButton = styled(TodoBoxButton)`
  background: linear-gradient(145deg, #829dff, #4e6ce6);

  &:active {
    background: linear-gradient(145deg, #4661cf, #5374f6);
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailBox = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;

  & > div {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
