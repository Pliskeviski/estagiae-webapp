import { useCallback, useRef } from 'react';
import { LabelCheckbox, StyledCheckbox } from './styles';

interface CheckboxProps {
  name?: string;
  onChange?: (e: any) => void;
  isDisabled?: boolean;
  checked?: boolean;
  className?: string;
}

export const Checkbox = ({
  name,
  checked,
  isDisabled,
  className,
  onChange,
}: CheckboxProps) => {
  const checkBoxRef = useRef(null);

  const handleOnClick = useCallback(() => {
    if (onChange && !isDisabled) {
      checkBoxRef.current.click();
    }
  }, [isDisabled, onChange]);

  return (
    <>
      <StyledCheckbox
        ref={checkBoxRef}
        name={name}
        type="checkbox"
        disabled={isDisabled}
        checked={checked}
        onChange={(e) => onChange && onChange(e)}
        className={className}
      />
      <LabelCheckbox onClick={handleOnClick} />
    </>
  );
};
