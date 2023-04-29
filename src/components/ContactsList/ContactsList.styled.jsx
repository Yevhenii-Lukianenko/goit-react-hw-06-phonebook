import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li``;

export const ContactText = styled.p`
  display: inline-block;
  margin-rigth: auto;
`;

export const Button = styled.button`
  margin-left: 20px;
  background-color: #ff7b7b;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #ff5252;
  }
`;
