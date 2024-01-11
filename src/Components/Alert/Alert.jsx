import React from 'react'
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6}
        variant="filled" {...props} />;
}
const Alert = () => {
  return (
    <div>
        <Alert severity="success">Added to cart successfully</Alert>
    </div>
  )
}

export default Alert
