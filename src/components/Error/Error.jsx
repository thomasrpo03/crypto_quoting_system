import styled from "@emotion/styled";

const Text = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border: 3px solid #f00;
  color: #f00;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Geologica", sans-serif;
  font-weight: 700;
  text-align: center;
  border-radius: 10px;
`;

const Error = ({ children }) => {
  return <Text>{children}</Text>;
};
export default Error;
