import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Loading } from '../loading';
// import { Loading } from '../loading';
import { StyledButton, ContainerLoading } from './styles';

interface ButtonProps {
  type?: 'submit';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  children: ReactNode;
}

const backgroundColorMap = {
  primary: 'primary',
  secondary: 'white',
};

const textColorMap = {
  primary: 'white',
  secondary: 'gray-90',
};

const borderColorMap = {
  secondary: 'gray-30',
};

export const Button = ({
  type,
  variant = 'primary',
  disabled,
  loading,
  onClick,
  className,
  children,
}: ButtonProps) => {
  const [isDisabled, setIsDisabled] = useState(disabled);

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (onClick && !isDisabled) {
        return onClick(e);
      }

      return () => null;
    },
    [isDisabled, onClick]
  );

  useEffect(() => setIsDisabled(disabled), [disabled]);

  return (
    <StyledButton
      type={type}
      backgroundColor={backgroundColorMap[variant]}
      textColor={textColorMap[variant]}
      borderColor={borderColorMap[variant]}
      onClick={handleOnClick}
      className={className}
      isDisabled={isDisabled}
      isLoading={loading}
    >
      <>{children}</>
      <ContainerLoading>
        <Loading color={textColorMap[variant]} size="16px" />
      </ContainerLoading>
    </StyledButton>
  );
};
