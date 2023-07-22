import {CustomButton, ButtonItem} from './styledComponents'

const TagButtonItem = props => {
  const {details, isActive, onTagButton} = props
  const {displayText} = details

  const onTag = () => {
    onTagButton(displayText)
  }

  return (
    <ButtonItem>
      <CustomButton isActive={isActive} onClick={onTag}>
        {displayText}
      </CustomButton>
    </ButtonItem>
  )
}

export default TagButtonItem
