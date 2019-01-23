import styled from 'styled-components';

interface ICommon {
  className?: string;
  style?: any;
  children?: any;
}

interface IGridProps extends ICommon {
  fluid?: boolean;
}

interface IRowProps extends ICommon {
  xsReverse?: boolean;
  xsStart?: number;
  xsCenter?: number;
  xsEnd?: number;
  xsTop?: number;
  xsMiddle?: number;
  xsBottom?: number;
  xsAround?: number;
  xsBetween?: number;
  smReverse?: boolean;
  smStart?: number;
  smCenter?: number;
  smEnd?: number;
  smTop?: number;
  smMiddle?: number;
  smBottom?: number;
  smAround?: number;
  smBetween?: number;
  mdReverse?: boolean;
  mdStart?: number;
  mdCenter?: number;
  mdEnd?: number;
  mdTop?: number;
  mdMiddle?: number;
  mdBottom?: number;
  mdAround?: number;
  mdBetween?: number;
  lgReverse?: boolean;
  lgStart?: number;
  lgCenter?: number;
  lgEnd?: number;
  lgTop?: number;
  lgMiddle?: number;
  lgBottom?: number;
  lgAround?: number;
  lgBetween?: number;
}

interface IColProps extends ICommon {
  reverse?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xsOffset?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
}

const TOTAL_COLUMNS: number = 24;
const roundDecimals = function(number: number, precision?: number) {
  const factor = Math.pow(10, precision || -1);
  const tempNumber = number * factor;
  const roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
};

const columnSize = function(columns?: number) {
  const oneColumn = 100 / TOTAL_COLUMNS;
  return columns ? `${roundDecimals(oneColumn * columns, 6)}%` : 0;
};

const fluidContainer = function() {
  return `
    padding-right: var(--outer-margin, 2rem);
    padding-left: var(--outer-margin, 2rem);
  `;
};

const rowStart = function() {
  return `
    justify-content: flex-start;
    text-align: start;
  `;
};

const rowCenter = function() {
  return `
    justify-content: center;
    text-align: center;
  `;
};

const rowEnd = function() {
  return `
    justify-content: flex-end;
    text-align: end;
  `;
};

const alignTop = function() {
  return `
    align-items: flex-start;
  `;
};

const alignCenter = function() {
  return `
    align-items: center;
  `;
};

const alignBottom = function() {
  return `
    align-items: flex-end;
  `;
};

const spaceAround = function() {
  return `
    justify-content: space-around;
  `;
};

const spaceBetween = function() {
  return `
    justify-content: space-between;
  `;
};

const gutter = 1;
const settings = {
  outerMargin: `${gutter * 2}rem`,
  gutterCompensation: `${gutter * -0.5}rem`,
  halfGutter: `${gutter * 0.5}rem`,
  xs: '30rem',
  sm: '48rem',
  md: '64rem',
  lg: '75rem'
};

const Grid = styled.div<IGridProps>`
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  width: 100%;
  ${props => props.fluid && fluidContainer()}
`;

const Row = styled.div<IRowProps>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 0 1 auto;
    margin-left: ${settings.gutterCompensation};
    margin-right: ${settings.gutterCompensation};
    ${props => props.xsReverse && 'flex-direction: row-reverse;'}
    ${props => props.xsStart && rowStart()}
    ${props => props.xsCenter && rowCenter()}
    ${props => props.xsEnd && rowEnd()}
    ${props => props.xsTop && alignTop()}
    ${props => props.xsMiddle && alignCenter()}
    ${props => props.xsBottom && alignBottom()}
    ${props => props.xsAround && spaceAround()}
    ${props => props.xsBetween && spaceBetween()}

    @media only screen and (min-width: ${settings.sm}) {
      ${props => props.smReverse && 'flex-direction: row-reverse;'}
      ${props => props.smStart && rowStart()}
      ${props => props.smCenter && rowCenter()}
      ${props => props.smEnd && rowEnd()}
      ${props => props.smTop && alignTop()}
      ${props => props.smMiddle && alignCenter()}
      ${props => props.smBottom && alignBottom()}
      ${props => props.smAround && spaceAround()}
      ${props => props.smBetween && spaceBetween()}
    }

    @media only screen and (min-width: ${settings.md}) {
      ${props => props.mdReverse && 'flex-direction: row-reverse;'}
      ${props => props.mdStart && rowStart()}
      ${props => props.mdCenter && rowCenter()}
      ${props => props.mdEnd && rowEnd()}
      ${props => props.mdTop && alignTop()}
      ${props => props.mdMiddle && alignCenter()}
      ${props => props.mdBottom && alignBottom()}
      ${props => props.mdAround && spaceAround()}
      ${props => props.mdBetween && spaceBetween()}
    }

    @media only screen and (min-width: ${settings.lg}) {
      ${props => props.lgReverse && 'flex-direction: row-reverse;'}
      ${props => props.lgStart && rowStart()}
      ${props => props.lgCenter && rowCenter()}
      ${props => props.lgEnd && rowEnd()}
      ${props => props.lgTop && alignTop()}
      ${props => props.lgMiddle && alignCenter()}
      ${props => props.lgBottom && alignBottom()}
      ${props => props.lgAround && spaceAround()}
      ${props => props.lgBetween && spaceBetween()}
    }
  `;

const columnWidth = function(size: number) {
  return `
    flex-basis: ${columnSize(size)};
    max-width: ${columnSize(size)};
  `;
};

const columnOffset = function(size: number) {
  return `
    margin-left: ${columnSize(size)};
  `;
};

const Column = styled.div<IColProps>`
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-basis: ${props => columnSize(props.xs)};
  flex-grow: 1;
  margin-left: ${props => columnSize(props.xsOffset)};
  max-width: ${props => columnSize(props.xs) || '100%'};
  padding-left: ${settings.halfGutter};
  padding-right: ${settings.halfGutter};

  ${props => props.reverse && 'flex-direction: column-reverse;'}

  @media only screen and (min-width: ${settings.sm}) {
    ${props => props.sm && columnWidth(props.sm)};
    ${props => props.smOffset && columnOffset(props.smOffset)};
  }

  @media only screen and (min-width: ${settings.md}) {
    ${props => props.md && columnWidth(props.md)};
    ${props => props.mdOffset && columnOffset(props.mdOffset)};
  }

  @media only screen and (min-width: ${settings.lg}) {
    ${props => props.lg && columnWidth(props.lg)};
    ${props => props.lgOffset && columnOffset(props.lgOffset)};
  }
`;

export { Column, Grid, Row };
