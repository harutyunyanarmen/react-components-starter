import { Box, makeStyles } from '@material-ui/core';
import { FC } from 'react';
import { Device } from '../shared/Device';
import { PageElementProps } from '../shared/PageElementProps';

export interface SimpleTextDef {
  text?: string;
}

export interface SimpleTextPixels {
  pixels?: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'lightgreen',
    wordBreak: 'break-all',
    overflow: 'hidden',
  },
}));

// do not remove PageElementProps to avoid collission later, we need this interface in the full app for integration
export const SimpleText: FC<
  {
    data: SimpleTextDef;
    pixels: SimpleTextPixels;
    device?: Device;
  } & PageElementProps
> = (props) => {
  const classes = useStyles();
  const className = `${props.className} ${classes.root}`;
  const { pixels } = props.pixels;

  return (
    <Box
      sx={{ height: pixels + 'px' }}
      className={className}
      style={props.style}
      id={props.id}
      onMouseMove={props.onMouseMove}
      onDoubleClick={props.onDoubleClick}
      onClick={props.onClick}
    >
      {props.data?.text}
    </Box>
  );
};
