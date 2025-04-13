import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  GradientContainer,
  Heading,
  DirectionLabel,
  GradientDirectionList,
  ColorPickersContainer,
  ColorPickerLabel,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  setActiveDirection = value => {
    this.setState({activeDirection: value})
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  onClickGenerate = () => {
    const {activeDirection, fromColor, toColor} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${fromColor}, ${toColor}`,
    })
  }

  render() {
    const {activeDirection, fromColor, toColor, gradientValue} = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <GradientContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionLabel>Choose Direction</DirectionLabel>
          <GradientDirectionList>
            {gradientDirectionsList.map(direction => (
              <GradientDirectionItem
                key={direction.directionId}
                directionDetails={direction}
                isActive={activeDirection === direction.value}
                setActiveDirection={this.setActiveDirection}
              />
            ))}
          </GradientDirectionList>
          <DirectionLabel>Pick the Colors</DirectionLabel>
          <ColorPickersContainer>
            <div>
              <ColorPickerLabel>{fromColor}</ColorPickerLabel>
              <ColorInput
                type="color"
                value={fromColor}
                onChange={this.onChangeFromColor}
              />
            </div>
            <div>
              <ColorPickerLabel>{toColor}</ColorPickerLabel>
              <ColorInput
                type="color"
                value={toColor}
                onChange={this.onChangeToColor}
              />
            </div>
          </ColorPickersContainer>
          <GenerateButton onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </GradientContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
