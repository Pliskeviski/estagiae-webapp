import React from 'react';
import { AuthStep } from 'src/enums/AuthStep';

interface IAuthContainerProps {
  step: AuthStep;
}

export const AuthContainer = React.memo(({ step }: IAuthContainerProps) => {
  return null;
});
