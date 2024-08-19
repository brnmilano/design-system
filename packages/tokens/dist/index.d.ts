declare const colors: {
    white: string;
    black: string;
    gray100: string;
    gray200: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    ignite300: string;
    ignite500: string;
    ignite700: string;
    ignite900: string;
    error: string;
};

/**
 * Espaçamento (Padding, Margin, Top, Left, Right, Bottom)
 *
 * @type {object}
 * @property {string} 1 - 0.25rem | 4px
 * @property {string} 2 - 0.5rem | 8px
 * @property {string} 3 - 0.75rem | 12px
 * @property {string} 4 - 1rem | 16px
 * @property {string} 5 - 1.25rem | 20px
 * @property {string} 6 - 1.5rem | 24px
 * @property {string} 7 - 1.75rem | 28px
 * @property {string} 8 - 2rem | 32px
 * @property {string} 10 - 2.5rem | 40px
 * @property {string} 12 - 3rem | 48px
 * @property {string} 16 - 4rem | 64px
 * @property {string} 20 - 5rem | 80px
 * @property {string} 22 - 6rem | 96px
 * @property {string} 40 - 10rem | 160px
 * @property {string} 64 - 16rem | 256px
 * @property {string} 80 - 20rem | 320px
 */
declare const space: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    10: string;
    12: string;
    16: string;
    20: string;
    22: string;
    40: string;
    64: string;
    80: string;
};

/**
 * Border Radius
 *
 * @type {object}
 *
 * No border radius, nunca deve-se usar medidas relativas, nesse caso devemos
 * utilizar medidas absolutas, pois o border radius não deve ser alterado de
 * acordo com a fonte do usuário.
 *
 * @property {string} px - 1px
 * @property {string} xs - 4px
 * @property {string} sm - 6px
 * @property {string} md - 8px
 * @property {string} lg - 16px
 * @property {string} full - 99999px
 */
declare const radii: {
    px: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
};

/**
 * @name Font Families
 *
 * @type {Object}
 * @property {string} default - Roboto, sans-serif
 * @property {string} code - monospace
 */
declare const fonts: {
    default: string;
    code: string;
};

/**
 * @description Font Sizes
 * @type {Object}
 * Sempre utilizar medidas relativas quando for trabalhar na Web. Isso é
 * extremamente importante por que unidades de medida em pixels são absolutadas,
 * elas não podem ser alteradas de acordo com as preferências do sistema do
 * usuário, se ele aumenta ou diminui a fonte, pois não irá refletir caso esteja
 * sendo utilizado em pixels. Devido a isso, sempre utilizar unidade de medidas
 * relativas.
 *
 * @property {string} xxs - 0.625rem | 10px
 * @property {string} xs - 0.75rem | 12px
 * @property {string} sm - 0.875rem | 14px
 * @property {string} md - 1rem | 16px
 * @property {string} lg - 1.125rem | 18px
 * @property {string} xl - 1.25rem | 20px
 * @property {string} 2xl - 1.5rem | 24px
 * @property {string} 4xl - 2rem | 32px
 * @property {string} 5xl - 2.25rem | 36px
 * @property {string} 6xl - 3rem | 48px
 * @property {string} 7xl - 4rem | 64px
 * @property {string} 8xl - 4.5rem | 72px
 * @property {string} 9xl - 6rem | 96px
 *
 */
declare const fontSizes: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
    '8xl': string;
    '9xl': string;
};

/**
 * Font weights
 *
 * @type {Object}
 * @property {string} regular - 400
 * @property {string} medium - 500
 * @property {string} bold - 700
 */
declare const fontWeights: {
    regular: string;
    medium: string;
    bold: string;
};

/**
 * Line heights
 *
 * @type {Object}
 * @property {string} shorter - 125% | 1.25 | 20px | 1.25rem
 * @property {string} short - 140% | 1.4 | 22.4px | 1.4rem
 * @property {string} base - 160% | 1.6 | 25.6px | 1.6rem
 * @property {string} tall - 180% | 1.8 | 28.8px | 1.8rem
 */
declare const lineHeights: {
    shorter: string;
    short: string;
    base: string;
    tall: string;
};

export { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space };
