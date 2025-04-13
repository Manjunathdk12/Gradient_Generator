import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
  font-family: 'Roboto';
`

export const GradientContainer = styled.div`
  text-align: center;
  color: #ededed;
`

export const Heading = styled.h1`
  font-size: 28px;
  color: #ffffff;
`

export const DirectionLabel = styled.p`
  font-size: 16px;
  margin-top: 20px;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  gap: 10px;
`

export const ColorPickersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 30px;
`

export const ColorPickerLabel = styled.p`
  color: #ededed;
  margin-bottom: 5px;
`

export const ColorInput = styled.input`
  width: 60px;
  height: 40px;
  border: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: white;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
`
