// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
    };

    fonts: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  }
}
