import { Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { SimpleText, SimpleTextDef } from '../components/SimpleText';
import { SimpleTextModifier } from '../components/SimpleTextModifier';
import SizeModifier from '../components/SizeModifier';
import { SimpleTextPixels } from '../components/SimpleText';

export const Index = () => {
  const [data, setData] = useState<SimpleTextDef>();
  const [pixels, setPixels] = useState<SimpleTextPixels>({ pixels: 0 });

  return (
    <Box>
      <SimpleTextModifier onDataChanged={(d) => setData(d)} />
      <SizeModifier onPixelsChange={(p) => setPixels(p)} />
      <SimpleText data={data} pixels={pixels} />
    </Box>
  );
};

export default Index;
