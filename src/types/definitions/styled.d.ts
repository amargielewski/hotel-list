import 'styled-components';
import { ThemeType } from '../CommonTypes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
