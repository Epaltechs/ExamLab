import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

function ActionButton({text, action, icon, width, height}) {
  return (
    <div>
      { icon !== undefined ? <Button onClick={() => action()} variant="contained" startIcon={icon} style={{borderRadius: '12px', color: 'white', fontWeight: 'bold', paddingTop:'10px', backgroundColor: '#D19D3B', width: `${width ? width: 'auto '}`, height: `${height ? height: 'auto '}` }}>
        {text}
        </Button> : <Button onClick={() => action()} variant="contained" style={{borderRadius: '12px', color: 'white', fontWeight: 'bold', paddingTop:'10px', backgroundColor: '#D19D3B',  width: `${width ? width: 'auto'}`,  height: ` ${ height ? height: 'auto'}`}}>
        {text}
        </Button>
        }

  </div>
  )
}

ActionButton.propType = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    icon: PropTypes.element,
}

export default ActionButton