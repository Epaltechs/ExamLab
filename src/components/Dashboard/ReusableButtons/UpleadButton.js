import AddIcon from '@mui/icons-material/Add';
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

function UploadButton({text, action, icon, width, height}) {


  return (
    <div>
       <Button onClick={() => action()} variant="contained" style={{ borderRadius: '7px', color: 'black', fontWeight: 'bold', paddingTop:'10px', backgroundColor: 'white', borderColor: '1px solid black', width: `${width ? width: 'auto'}`, height: `${height ? height: 'auto'}`, fontSize: 8 }}>
        {text}
        </Button>
  </div>
  )
}

UploadButton.propType = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    icon: PropTypes.element,
}

export default UploadButton