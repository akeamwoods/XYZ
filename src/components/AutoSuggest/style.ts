import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

export const SuggestionsContainer = styled.ul`
  position: absolute;
  background: rgb(255, 255, 255);
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 0;
  top: 12px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
`;

export const Suggestion = styled.li`
  list-style: none;
  padding: 5px;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
