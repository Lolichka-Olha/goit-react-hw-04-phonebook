import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  margin-top: 10px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  padding: 6px;
`;

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Btn = styled.button`
  width: 100px;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  padding: 6px;

  cursor: pointer;
  &:hover {
    background-color: #c2c2c2;
    color: #fff;
  }
`;
