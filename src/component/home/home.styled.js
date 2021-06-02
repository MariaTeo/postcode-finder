import { Form } from "formik";
import styled from "styled-components";

export const Styledfrom = styled(Form)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, auto);
  border: 3px solid grey;
  padding: 60px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 13px;
`;

export const Row = styled.div`
  grid-column: 1/-1;
  margin-bottom: 20px;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
