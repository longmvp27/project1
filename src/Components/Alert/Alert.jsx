import React from 'react'
import MuiAlert from "@material-ui/lab/Alert";

function customAlert(props) {
    return <MuiAlert elevation={6}
        variant="filled" {...props} />;
}
const Alert = () => {
  return (
    <div>
        <customAlert severity="success">Added to cart successfully</customAlert>
    </div>
  )
}

export default Alert
