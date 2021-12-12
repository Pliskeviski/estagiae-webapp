import React, { useCallback, useContext, useMemo } from 'react';
import { IconType } from 'react-icons';
import { components, InputProps } from 'react-select';
import { v4 as uuidv4 } from 'uuid';

import { ISelectOption } from 'src/interfaces/select-option.interface';
import { ThemeContext } from 'styled-components';
import {
  ContainerIcon,
  ContainerOption,
  ImageOption,
  StyledSelect,
} from './styles';

let timerSearch = null;

declare type MenuPlacement = 'auto' | 'bottom' | 'top';
declare type MenuPosition = 'absolute' | 'fixed';

const CustomOption = (props) => {
  const { data, isSelected } = props;

  return (
    <ContainerOption isSelected={isSelected}>
      {data.image && <ImageOption imageUrl={data.image} />}
      <components.Option {...props} />
    </ContainerOption>
  );
};

interface ISelectInputProps {
  name?: string;
  options?: ISelectOption[];
  value?: ISelectOption;
  onChange?: (e) => void;
  openMenuOnClick?: boolean;
  menuPosition?: MenuPosition;
  isMulti?: boolean;
  placement?: MenuPlacement;
  placeholder?: string;
  loadOptions?: any;
  isLoading?: boolean;
  icon?: IconType;
}

const Input = ({ selectProps, ...props }) => {
  const Icon = selectProps.icon;

  const hasIcon = !!Icon;

  return (
    <>
      {hasIcon && (
        <ContainerIcon>
          <Icon size="1.2rem" />
        </ContainerIcon>
      )}
      <components.Input {...(props as InputProps<true>)} />
    </>
  );
};

export const SelectInput = React.memo(
  ({
    name,
    options,
    value,
    onChange,
    openMenuOnClick = false,
    menuPosition = 'fixed',
    isMulti,
    placement,
    placeholder,
    loadOptions,
    isLoading,
    icon,
  }: ISelectInputProps) => {
    const themeContext = useContext(ThemeContext);
    const uniqueId = useMemo(() => uuidv4(), []);

    const className = 'select-input';

    const menuPlacement = useMemo(() => {
      // if served from server
      if (typeof window === 'undefined') return 'bottom';

      const windowWidth = window.innerWidth;
      const normalizedWidth = +themeContext.breakpoints.medium.replace(
        'px',
        ''
      );

      if (windowWidth < normalizedWidth) {
        return 'top';
      }

      return 'bottom';
    }, [themeContext]);

    const defaultOptions = useMemo(
      () => options?.slice(0, 10) || [],
      [options]
    );

    const loadFiteredOptions = useCallback(
      (query, callback) => {
        if (loadOptions) {
          return loadOptions(query, callback);
        }

        clearTimeout(timerSearch);
        timerSearch = setTimeout(() => {
          const zones = options
            .filter((a) => a.label.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 10);
          callback([...zones]);
        }, 500);

        return () => null;
      },
      [loadOptions, options]
    );

    const NoOptionsMessage = (props) => (
      <components.NoOptionsMessage {...props} />
    );

    return (
      <StyledSelect
        hasIcon={!!icon}
        className={className}
        classNamePrefix="select"
        isSearchable
        name={name}
        menuPosition={menuPosition}
        isClearable
        isLoading={isLoading}
        loadingMessage={() => 'Carregando...'}
        noOptionsMessage={() => 'Nenhum resultado encontrado'}
        onChange={onChange}
        value={value}
        menuPlacement={placement || menuPlacement}
        openMenuOnClick={openMenuOnClick}
        isMulti={isMulti}
        placeholder={placeholder}
        icon={icon}
        components={{
          Input,
          Option: CustomOption,
          DropdownIndicator: null,
          IndicatorSeparator: null,
          LoadingIndicator: null,
          NoOptionsMessage,
        }}
        defaultOptions={defaultOptions}
        loadOptions={loadFiteredOptions}
      />
    );
  }
);
