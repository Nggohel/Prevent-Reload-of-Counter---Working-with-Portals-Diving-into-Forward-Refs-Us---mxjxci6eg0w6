import React, { useCallback } from "react";

function CounterButton({ increment }) {
  /*DO NOT EDIT THIS LINE */ console.log("CounterButton rendered!"); //DO NOT edit this line

  const handleClick = useCallback(() => {
    increment(); // Use the increment prop directly
  }, [increment]);

  return <button onClick={handleClick}>Increment Counter</button>;
}

export default React.memo(CounterButton);
