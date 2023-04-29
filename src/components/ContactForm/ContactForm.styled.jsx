import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 8px;
  margin: 12px 0 24px;
  width: 350px;
  border-radius: 6px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 4px 10px;
  width: 250px;
  outline: none;
  border-image: linear-gradient(
    90deg,
    rgba(0, 35, 255, 1) 0%,
    rgba(253, 212, 45, 1) 100%
  );
  border-image-slice: 1;
  transition: border 0.5s ease;
  &:focus {
    border-image: linear-gradient(
      270deg,
      rgba(0, 35, 255, 1) 0%,
      rgba(253, 212, 45, 1) 100%
    );
    border-image-slice: 1;
  }
`;

export const Submit = styled.button`
  width: 150px;
  height: 30px;
  background-image: linear-gradient(
    180deg,
    rgba(0, 35, 255, 1) 0%,
    rgba(253, 212, 45, 1) 100%
  );
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: scale 0.5s ease;
  &:hover {
    scale: 1.05;
  }
`;
