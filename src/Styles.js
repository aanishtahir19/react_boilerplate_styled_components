import styled from 'styled-components';
// Section => Section Component
export const Section = styled.section`
  padding: ${(props) => (props.padding ? props.padding : '1rem 0')};
  margin: ${(props) => (props.margin ? props.margin : '1rem 0')};
`;
