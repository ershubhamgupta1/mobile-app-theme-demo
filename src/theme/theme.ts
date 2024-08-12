// src/styles/theme.ts
import { DefaultTheme } from 'styled-components/native';
import { Theme } from '../../types';
import {Colors} from './color';

export const lightTheme: Theme = {
  colors: {
    background: Colors.white,
    text: Colors.gray,
    primary: Colors.purple,
    secondary: Colors.teal,
    card: Colors.white80,
    border: Colors.gray20,
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xLarge: 32,
  },
};

export const darkTheme: Theme = {
  colors: {
    background: Colors.black,
    text: Colors.white,
    primary: Colors.purple80,
    secondary: Colors.teal,
    card: Colors.gray80,
    border: Colors.gray20,
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xLarge: 32,
  },
};
