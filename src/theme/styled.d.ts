// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      primary: string;
      red: string;
      'light-blue': string;
      'gray-10': string;
      'gray-50': string;
      'gray-60': string;
      'gray-80': string;
    };

    fonts: {
      primary: string;
      secondary: string;
      tertiary: string;
    };

    fontSizes: {
      h1: string;
      h5: string;
      body: {
        large: string;
        medium: string;
        small: string;
      };
      caption: string;
    };

    containers: {
      large: string;
    };

    breakpoints: {
      large: string;
      medium: string;
    };
  }
}
