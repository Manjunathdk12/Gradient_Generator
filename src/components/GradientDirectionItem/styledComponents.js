import styled from 'styled-components'

export const DirectionItem = styled.li``

export const DirectionButton = styled.button`
  background-color: #ffffff79;
  color: #334155;
  font-weight: 600;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
