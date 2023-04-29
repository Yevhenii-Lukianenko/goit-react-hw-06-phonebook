import styled from '@emotion/styled';

export const SearchLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SearchInput = styled.input`
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
