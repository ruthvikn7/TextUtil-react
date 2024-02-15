import React from 'react';

function Alert(props) {
  const capTalize=(word)=>{if (word && typeof word === 'string') {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  } else {
    // Return an empty string if word is undefined or not a string
    return "";
  }
  }
  return (
    <div>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capTalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
