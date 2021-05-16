import React, { FunctionComponent } from "react";
import { Button } from '../Button/Button';
import  { ActionButtonProps, ButtonProps } from '../types'


export const ActionButton: FunctionComponent<ActionButtonProps> = ({ type, background, margin,  float, name}) => (
  <Button
    type={type}
    background={background}
    margin={margin}
    float={float}
  >
    {name}
  </Button>
);
