import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  font-family: Roboto;
`
export const LeftSection = styled.form`
  background-color: #131213;
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #ffffff;
`
export const RightSection = styled.div`
  background-color: #000000;
  width: 70%;
  color: #ffffff;
  padding: 20px;
`
export const Head = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #f3aa4e;
`
export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`
export const TaskInput = styled.input`
  outline: none;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 22px;
`
export const TagOption = styled.option`
  font-size: 16px;
`
export const TagsInput = styled.select`
  width: 100%;
  height: 40px;
  outline: none;
  margin-bottom: 20px;
`
export const AddButton = styled.button`
  height: 34px;
  align-self: center;
  width: 100px;
  background-color: #f3aa4e;
  color: #ffffff;
  font-weight: 600;
  border-width: 0px;
  border-radius: 4px;
`
export const THead = styled.h1`
  font-size: 25px;
`
export const TagItems = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  display: flex;
`
export const Output = styled.ul`
  flex-direction: column;
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`
export const NoTasksDisplay = styled.p`
  color: #f1f5f9;
  font-size: 34px;
  font-weight: 600;
`
export const NoView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`
