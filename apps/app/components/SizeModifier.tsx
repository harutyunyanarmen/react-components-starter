import React from 'react';
import { Box, debounce, TextField } from '@material-ui/core';

interface Props {
  onPixelsChange: (p: any) => void;
}

const SizeModifier = (props: Props) => {
  const updateHeight = (pixels) => {
    const { onPixelsChange } = props;
    onPixelsChange({ pixels: +pixels });
  };

  const updateSize = debounce((v: string) => updateHeight(v), 300);

  return (
    <Box padding="1rem">
      <TextField
        style={{ width: '100%' }}
        variant="outlined"
        defaultValue={''}
        type="number"
        onChange={(e) => updateSize(e.target.value)}
      />
    </Box>
  );
};

export default SizeModifier;
