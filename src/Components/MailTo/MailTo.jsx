import React from "react";
import { Link } from "react-router-dom";

const MailTo = (props) => {
  
  return (
    //
   
     <Link
            to='#'
            onClick={(e) => {
                window.location.href = props.mailTo;
                e.preventDefault();
            }}
        >
            
        </Link>

  );
};

export default MailTo;
