import React, { useCallback } from 'react';

function CounterButton({ onClick }) {
  /*DO NOT EDIT THIS LINE */ console.log("CounterButton rendered!"); //DO NOT edit this line 

  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <button onClick={handleClick}>
      Increment Counter
    </button>
  );
}

export default React.memo(CounterButton);
