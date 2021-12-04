// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      red: string;
      'gray-10': string;
      'gray-50': string;
      'gray-80': string;
    };

    fonts: {
      primary: string;
      secondary: string;
      tertiary: string;
    };

    fontSizes: {
      h3: string;
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
    };
  }
}
