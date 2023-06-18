import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 5rem;
    height: 5rem;
  }
`;

export const NewTransactionButton = styled.button`
  height: 3.125rem;
  border: 0;
  background: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background: ${props => props.theme["green-700"]};
  }
`;