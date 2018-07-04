import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input,
  button {
    height: 55px;
    padding: 0 20px;
    border-radius: 3px;
  }

  input {
    flex: 1;
    background: #fff;
    font-size: 18px;
    color: #444;
    border: ${props => (props.withError ? '2px solid #F00' : 0 )}
  }

  button {
    background-color: #63f5b6;
    color: #fff;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
    border: 0;

    &:hover {
      background-color: #52d89f;
    }
  }
`;
