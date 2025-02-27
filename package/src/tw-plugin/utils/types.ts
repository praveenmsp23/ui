import { type ThemableColors } from "../foundation";

export type ConfigTheme = {
  /**
   * Whether to extend 'dark' or 'light' default themes.
   * @default "light"
   */
  extend?: "light" | "dark";

  /**
   * Defines an extended colors object, providing a flexible foundation for theming or custom color configurations.
   *
   * Key Features:
   * 1. **Themable Colors**: Customize or extend existing themes by overriding values in the `uiPalette`.
   * 2. **Custom Colors**: Introduce new color schemes by adding unique key-value pairs.
   * 3. **Nested Colors**: Allows for the grouping of color variations under a single key, facilitating organized and hierarchical color definitions.
   * 4. **Prefix 'ui'**: The colors defined in `uiPalette` are prefixed with 'ui' to prevent conflicts with the standard Tailwind color palette, ensuring a seamless integration.
   *
   * @example
   * colors: {
   *   'ui-red': '#ff0000',
   *   customColor: {
   *     500: '#f0f0f0',
   *     600: '#0d0d0d',
   *   },
   * }
   */
  colors?: Partial<ThemableColors> | Record<string, string | Record<string, string>>;
};

export type BaseThemes = "light" | "dark";
// eslint-disable-next-line @typescript-eslint/ban-types
export type DefaultThemeType = BaseThemes | (string & {});
export type ConfigThemes = { [key in BaseThemes]?: ConfigTheme } & Record<string, ConfigTheme>;

export type UiOptions = {
  /**
   * The prefix for CSS variables.
   * @default "ui"
   */
  prefix?: string;

  /**
   * The theme definitions.
   */
  themes?: ConfigThemes;

  /**
   * The default theme to use.
   * @default "light"
   */
  defaultTheme?: DefaultThemeType;

  /**
   * The default theme to extend. Available values are "light" and "dark".
   * @default "light"
   */
  defaultExtendTheme?: "light" | "dark";

  /**
   * Specifies whether or not to apply font anti-aliasing to Ui components.
   *
   * If set to `antialiased` (default), Ui components will have anti-aliasing applied to them.
   * If set to `inherit`, no specific styles will be set for text anti-aliasing.
   *
   * * @default "antialiased"
   */
  fontSmooth?: "antialiased" | "inherit";
};
