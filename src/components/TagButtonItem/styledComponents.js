import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  border-radius: 4px;
  color: #ffffff;
  border-radius: 18px;
  font-family: Roboto;
  padding: 5px 15px;
`
export const ButtonItem = styled.li`
  font-family: Roboto;
  margin-right: 10px;
`
