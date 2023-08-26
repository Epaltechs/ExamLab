import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function DefaultButton({ actionFunc, icon, text, width, height}) {
  const formatText = () =>{
    if(text.length < 12) return text;
    else if( width < "121")return `${text.substring(0,10)}...`
    else return text;
  }
  return (
    <StyledButton width={width} height={height} variant="contained" onClick={actionFunc}> {icon} {formatText(text)}</StyledButton>
  )
}

DefaultButton.propTypes = {
  icon: PropTypes.func,
  actionFunc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}

export default DefaultButton

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.light.buttonPrimary || props.backgroundColor};
    border-radius: 20px;
    color: ${(props) => props.theme.light.primary};
    width: ${(props) => props.width || "130" }px;
    height: ${(props) => props.height|| "30"}px;
    border:none;
    padding: 0px 5px;
    margin-top: 10px;
`

