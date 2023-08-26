import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Button({ actionFunc, icon, text, width, height}) {
  return (
    <StyledPrimaryButton width={width} height={height} variant="contained" onClick={actionFunc}> {icon} {text}</StyledPrimaryButton>
  )
}


Button.propTypes = {
    icon: PropTypes.func,
    actionFunc: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
}

export default Button;

const StyledPrimaryButton = styled.button`
    background-color: #F97316;
    background-color: ${(props) => props.theme.light.deleteBtn || props.backgroundColor};
    border-radius: 20px;
    color: ${(props) => props.theme.light.primary};
    width: ${(props) => props.width || "130" }px;
    height: ${(props) => props.height|| "30px"};
    border:none;
    margin-top: 10px;
`