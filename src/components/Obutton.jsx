import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
            />

  );
};

export default Button;