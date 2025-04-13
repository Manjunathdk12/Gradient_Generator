import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, setActiveDirection} = props
  const {value, displayText} = directionDetails

  const onClickDirection = () => {
    setActiveDirection(value)
  }

  return (
    <DirectionItem>
      <DirectionButton onClick={onClickDirection} isActive={isActive}>
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
