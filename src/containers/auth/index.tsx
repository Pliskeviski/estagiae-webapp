// eslint-disable-next-line no-use-before-define
import React from 'react';
import { AuthStep } from 'src/enums/AuthStep';
import { AuthLeftSide, AuthRightSide, AuthWrapper } from './styles';

interface IAuthContainerProps {
  step: AuthStep;
}

export const AuthContainer = React.memo(({ step }: IAuthContainerProps) => {
  console.log('step', step);

  return (
    <AuthWrapper>
      <AuthLeftSide />
      <AuthRightSide />
    </AuthWrapper>
  );
});
