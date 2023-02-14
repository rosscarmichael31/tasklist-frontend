import styled from "styled-components";

const SortBySelect = styled.select`
  font-size: 16px;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  select:invalid {
    color: gray;
  }
  option {
    color: black;
  }
`;

const styles = { SortBySelect };

export default styles;
