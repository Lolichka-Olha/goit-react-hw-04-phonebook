import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px;
  width: 260px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  :not(:first-of-type) {
    margin-top: 10px;
  }
`;

export const Btn = styled.button`
  background-color: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  padding: 6px;

  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #c2c2c2;
    color: #fff;
  }
`;
