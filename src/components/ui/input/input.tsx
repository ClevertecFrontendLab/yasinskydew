import { FC, MouseEvent, useEffect, useRef, useState } from 'react';

import classes from './input.module.scss';
import classNames from 'classnames';
import useOnClickOutside from '../../../hooks/on-click-outside';

export interface InputProps {
  type: string;
  placeholder: string;
  isSearchOpen: boolean;
  closeSearchHandler: (e: MouseEvent<HTMLElement>) => void;
  openSearchHandler: (e: MouseEvent<HTMLElement>) => void;
}
export const Input: FC<InputProps> = ({ placeholder, closeSearchHandler, openSearchHandler, isSearchOpen, type }) => {
  const inputContainerRef = useRef(null);
  const inputItemRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputItemRef.current) {
      return;
    }
    if (!isSearchOpen) {
      inputItemRef.current.value = '';
    } else {
      inputItemRef.current.focus();
    }
  }, [isSearchOpen]);
  useOnClickOutside([inputContainerRef], closeSearchHandler);

  return (
    <div className={classes.wrapper} ref={inputContainerRef}>
      {!isSearchOpen && <i className={classes.inputIcon} aria-hidden='true' />}
      {isSearchOpen && (
        <i
          className={classes.closeButton}
          aria-hidden='true'
          onClick={closeSearchHandler}
          data-test-id='button-search-close'
        />
      )}
      <input
        placeholder={placeholder}
        type={type}
        ref={inputItemRef}
        data-test-id='input-search'
        className={classNames(classes.input, {
          [classes.isOpenInput]: isSearchOpen,
        })}
      />
      <div
        data-test-id='button-search-open'
        onClick={openSearchHandler}
        className={classNames(classes.searchPlug, {
          [classes.searchPlugHide]: isSearchOpen,
        })}
      >
        <i className={classes.inputIcon} aria-hidden='true' />
      </div>
    </div>
  );
};
