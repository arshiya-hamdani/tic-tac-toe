import React from 'react';

const Square = (props) => {
  return (
    <div 
    style={{
        border: "1px solid",
        height: "60px",
        width: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'antiquewhite',
        
    }}
     className="square"
     onClick={props.onClick}
     >
     <h5>{props.value}</h5>
    </div>
  );
};

export default Square;