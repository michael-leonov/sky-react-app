import styled from 'styled-components'

export const AuthWrapper = styled.div`
  width: 366px;
  height: 439px;
  padding: 47px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: white;
`
export const EventBtn = styled.button`
  background-color: ${({ primary }) => (primary ? '#580ea2' : 'white')};
  color: ${({ primary }) => (primary ? 'white' : 'black')};
  border-radius: 6px;
  padding: 12px 0;
  font-size: 18px;
  width: 100%;
  border: ${({ primary }) => (primary ? 'none' : '1px solid #D0CECE')};
`
export const InputAuth = styled.input`
  color: black;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding-bottom: 8px;
  margin-bottom: 38px;

  :placeholder {
    color: #e1e1e1;
  }
`
