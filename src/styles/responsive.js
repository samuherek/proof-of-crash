export const sizes = {
  small: '38em',
  medium: '54em',
  mediumPlus: '60em',
  large: '70em',
  largePlus: '80em'
};

export const media = {
  minSmall: `@media only screen and (min-width: ${sizes.small})`,
  minMedium: `@media only screen and (min-width: ${sizes.medium})`,
  minMediumPlus: `@media only screen and (min-width: ${sizes.mediumPlus})`,
  minLarge: `@media only screen and (min-width: ${sizes.large})`,
  minLargePlus: `@media only screen and (min-width: ${sizes.largePlus})`
};
