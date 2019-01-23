import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  flex-basis: ", ";\n  flex-grow: 1;\n  margin-left: ", ";\n  max-width: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n\n  ", "\n\n  @media only screen and (min-width: ", ") {\n    ", ";\n    ", ";\n  }\n\n  @media only screen and (min-width: ", ") {\n    ", ";\n    ", ";\n  }\n\n  @media only screen and (min-width: ", ") {\n    ", ";\n    ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    flex: 0 1 auto;\n    margin-left: ", ";\n    margin-right: ", ";\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    @media only screen and (min-width: ", ") {\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    }\n\n    @media only screen and (min-width: ", ") {\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    }\n\n    @media only screen and (min-width: ", ") {\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-right: auto;\n  margin-left: auto;\n  overflow: hidden;\n  width: 100%;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var TOTAL_COLUMNS = 24;

var roundDecimals = function roundDecimals(number, precision) {
  var factor = Math.pow(10, precision || -1);
  var tempNumber = number * factor;
  var roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
};

var columnSize = function columnSize(columns) {
  var oneColumn = 100 / TOTAL_COLUMNS;
  return columns ? "".concat(roundDecimals(oneColumn * columns, 6), "%") : 0;
};

var fluidContainer = function fluidContainer() {
  return "\n    padding-right: var(--outer-margin, 2rem);\n    padding-left: var(--outer-margin, 2rem);\n  ";
};

var rowStart = function rowStart() {
  return "\n    justify-content: flex-start;\n    text-align: start;\n  ";
};

var rowCenter = function rowCenter() {
  return "\n    justify-content: center;\n    text-align: center;\n  ";
};

var rowEnd = function rowEnd() {
  return "\n    justify-content: flex-end;\n    text-align: end;\n  ";
};

var alignTop = function alignTop() {
  return "\n    align-items: flex-start;\n  ";
};

var alignCenter = function alignCenter() {
  return "\n    align-items: center;\n  ";
};

var alignBottom = function alignBottom() {
  return "\n    align-items: flex-end;\n  ";
};

var spaceAround = function spaceAround() {
  return "\n    justify-content: space-around;\n  ";
};

var spaceBetween = function spaceBetween() {
  return "\n    justify-content: space-between;\n  ";
};

var gutter = 1;
var settings = {
  outerMargin: "".concat(gutter * 2, "rem"),
  gutterCompensation: "".concat(gutter * -0.5, "rem"),
  halfGutter: "".concat(gutter * 0.5, "rem"),
  xs: '30rem',
  sm: '48rem',
  md: '64rem',
  lg: '75rem'
};
var Grid = styled.div(_templateObject(), function (props) {
  return props.fluid && fluidContainer();
});
var Row = styled.div(_templateObject2(), settings.gutterCompensation, settings.gutterCompensation, function (props) {
  return props.xsReverse && 'flex-direction: row-reverse;';
}, function (props) {
  return props.xsStart && rowStart();
}, function (props) {
  return props.xsCenter && rowCenter();
}, function (props) {
  return props.xsEnd && rowEnd();
}, function (props) {
  return props.xsTop && alignTop();
}, function (props) {
  return props.xsMiddle && alignCenter();
}, function (props) {
  return props.xsBottom && alignBottom();
}, function (props) {
  return props.xsAround && spaceAround();
}, function (props) {
  return props.xsBetween && spaceBetween();
}, settings.sm, function (props) {
  return props.smReverse && 'flex-direction: row-reverse;';
}, function (props) {
  return props.smStart && rowStart();
}, function (props) {
  return props.smCenter && rowCenter();
}, function (props) {
  return props.smEnd && rowEnd();
}, function (props) {
  return props.smTop && alignTop();
}, function (props) {
  return props.smMiddle && alignCenter();
}, function (props) {
  return props.smBottom && alignBottom();
}, function (props) {
  return props.smAround && spaceAround();
}, function (props) {
  return props.smBetween && spaceBetween();
}, settings.md, function (props) {
  return props.mdReverse && 'flex-direction: row-reverse;';
}, function (props) {
  return props.mdStart && rowStart();
}, function (props) {
  return props.mdCenter && rowCenter();
}, function (props) {
  return props.mdEnd && rowEnd();
}, function (props) {
  return props.mdTop && alignTop();
}, function (props) {
  return props.mdMiddle && alignCenter();
}, function (props) {
  return props.mdBottom && alignBottom();
}, function (props) {
  return props.mdAround && spaceAround();
}, function (props) {
  return props.mdBetween && spaceBetween();
}, settings.lg, function (props) {
  return props.lgReverse && 'flex-direction: row-reverse;';
}, function (props) {
  return props.lgStart && rowStart();
}, function (props) {
  return props.lgCenter && rowCenter();
}, function (props) {
  return props.lgEnd && rowEnd();
}, function (props) {
  return props.lgTop && alignTop();
}, function (props) {
  return props.lgMiddle && alignCenter();
}, function (props) {
  return props.lgBottom && alignBottom();
}, function (props) {
  return props.lgAround && spaceAround();
}, function (props) {
  return props.lgBetween && spaceBetween();
});

var columnWidth = function columnWidth(size) {
  return "\n    flex-basis: ".concat(columnSize(size), ";\n    max-width: ").concat(columnSize(size), ";\n  ");
};

var columnOffset = function columnOffset(size) {
  return "\n    margin-left: ".concat(columnSize(size), ";\n  ");
};

var Column = styled.div(_templateObject3(), function (props) {
  return columnSize(props.xs);
}, function (props) {
  return columnSize(props.xsOffset);
}, function (props) {
  return columnSize(props.xs) || '100%';
}, settings.halfGutter, settings.halfGutter, function (props) {
  return props.reverse && 'flex-direction: column-reverse;';
}, settings.sm, function (props) {
  return props.sm && columnWidth(props.sm);
}, function (props) {
  return props.smOffset && columnOffset(props.smOffset);
}, settings.md, function (props) {
  return props.md && columnWidth(props.md);
}, function (props) {
  return props.mdOffset && columnOffset(props.mdOffset);
}, settings.lg, function (props) {
  return props.lg && columnWidth(props.lg);
}, function (props) {
  return props.lgOffset && columnOffset(props.lgOffset);
});
export { Column, Grid, Row };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvR3JpZC9pbmRleC50cyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJUT1RBTF9DT0xVTU5TIiwicm91bmREZWNpbWFscyIsIm51bWJlciIsInByZWNpc2lvbiIsImZhY3RvciIsIk1hdGgiLCJwb3ciLCJ0ZW1wTnVtYmVyIiwicm91bmRlZFRlbXBOdW1iZXIiLCJyb3VuZCIsImNvbHVtblNpemUiLCJjb2x1bW5zIiwib25lQ29sdW1uIiwiZmx1aWRDb250YWluZXIiLCJyb3dTdGFydCIsInJvd0NlbnRlciIsInJvd0VuZCIsImFsaWduVG9wIiwiYWxpZ25DZW50ZXIiLCJhbGlnbkJvdHRvbSIsInNwYWNlQXJvdW5kIiwic3BhY2VCZXR3ZWVuIiwiZ3V0dGVyIiwic2V0dGluZ3MiLCJvdXRlck1hcmdpbiIsImd1dHRlckNvbXBlbnNhdGlvbiIsImhhbGZHdXR0ZXIiLCJ4cyIsInNtIiwibWQiLCJsZyIsIkdyaWQiLCJkaXYiLCJwcm9wcyIsImZsdWlkIiwiUm93IiwieHNSZXZlcnNlIiwieHNTdGFydCIsInhzQ2VudGVyIiwieHNFbmQiLCJ4c1RvcCIsInhzTWlkZGxlIiwieHNCb3R0b20iLCJ4c0Fyb3VuZCIsInhzQmV0d2VlbiIsInNtUmV2ZXJzZSIsInNtU3RhcnQiLCJzbUNlbnRlciIsInNtRW5kIiwic21Ub3AiLCJzbU1pZGRsZSIsInNtQm90dG9tIiwic21Bcm91bmQiLCJzbUJldHdlZW4iLCJtZFJldmVyc2UiLCJtZFN0YXJ0IiwibWRDZW50ZXIiLCJtZEVuZCIsIm1kVG9wIiwibWRNaWRkbGUiLCJtZEJvdHRvbSIsIm1kQXJvdW5kIiwibWRCZXR3ZWVuIiwibGdSZXZlcnNlIiwibGdTdGFydCIsImxnQ2VudGVyIiwibGdFbmQiLCJsZ1RvcCIsImxnTWlkZGxlIiwibGdCb3R0b20iLCJsZ0Fyb3VuZCIsImxnQmV0d2VlbiIsImNvbHVtbldpZHRoIiwic2l6ZSIsImNvbHVtbk9mZnNldCIsIkNvbHVtbiIsInhzT2Zmc2V0IiwicmV2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cEMsRUF1Qk4sVUFBQUcsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0gsRUFBTixJQUFZMEMsV0FBVyxDQUFDdkMsS0FBSyxDQUFDSCxFQUFQLENBQTNCO0FBQUEsQ0F2QkMsRUF3Qk4sVUFBQUcsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQytDLFFBQU4sSUFBa0JOLFlBQVksQ0FBQ3pDLEtBQUssQ0FBQytDLFFBQVAsQ0FBbEM7QUFBQSxDQXhCQyxDQUFaO0FBNEJBLFNBQVNMLE1BQVQsRUFBaUI1QyxJQUFqQixFQUF1QkksR0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIElDb21tb24ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHN0eWxlPzogYW55O1xuICBjaGlsZHJlbj86IGFueTtcbn1cblxuaW50ZXJmYWNlIElHcmlkUHJvcHMgZXh0ZW5kcyBJQ29tbW9uIHtcbiAgZmx1aWQ/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVJvd1Byb3BzIGV4dGVuZHMgSUNvbW1vbiB7XG4gIHhzUmV2ZXJzZT86IGJvb2xlYW47XG4gIHhzU3RhcnQ/OiBudW1iZXI7XG4gIHhzQ2VudGVyPzogbnVtYmVyO1xuICB4c0VuZD86IG51bWJlcjtcbiAgeHNUb3A/OiBudW1iZXI7XG4gIHhzTWlkZGxlPzogbnVtYmVyO1xuICB4c0JvdHRvbT86IG51bWJlcjtcbiAgeHNBcm91bmQ/OiBudW1iZXI7XG4gIHhzQmV0d2Vlbj86IG51bWJlcjtcbiAgc21SZXZlcnNlPzogYm9vbGVhbjtcbiAgc21TdGFydD86IG51bWJlcjtcbiAgc21DZW50ZXI/OiBudW1iZXI7XG4gIHNtRW5kPzogbnVtYmVyO1xuICBzbVRvcD86IG51bWJlcjtcbiAgc21NaWRkbGU/OiBudW1iZXI7XG4gIHNtQm90dG9tPzogbnVtYmVyO1xuICBzbUFyb3VuZD86IG51bWJlcjtcbiAgc21CZXR3ZWVuPzogbnVtYmVyO1xuICBtZFJldmVyc2U/OiBib29sZWFuO1xuICBtZFN0YXJ0PzogbnVtYmVyO1xuICBtZENlbnRlcj86IG51bWJlcjtcbiAgbWRFbmQ/OiBudW1iZXI7XG4gIG1kVG9wPzogbnVtYmVyO1xuICBtZE1pZGRsZT86IG51bWJlcjtcbiAgbWRCb3R0b20/OiBudW1iZXI7XG4gIG1kQXJvdW5kPzogbnVtYmVyO1xuICBtZEJldHdlZW4/OiBudW1iZXI7XG4gIGxnUmV2ZXJzZT86IGJvb2xlYW47XG4gIGxnU3RhcnQ/OiBudW1iZXI7XG4gIGxnQ2VudGVyPzogbnVtYmVyO1xuICBsZ0VuZD86IG51bWJlcjtcbiAgbGdUb3A/OiBudW1iZXI7XG4gIGxnTWlkZGxlPzogbnVtYmVyO1xuICBsZ0JvdHRvbT86IG51bWJlcjtcbiAgbGdBcm91bmQ/OiBudW1iZXI7XG4gIGxnQmV0d2Vlbj86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElDb2xQcm9wcyBleHRlbmRzIElDb21tb24ge1xuICByZXZlcnNlPzogYm9vbGVhbjtcbiAgeHM/OiBudW1iZXI7XG4gIHNtPzogbnVtYmVyO1xuICBtZD86IG51bWJlcjtcbiAgbGc/OiBudW1iZXI7XG4gIHhzT2Zmc2V0PzogbnVtYmVyO1xuICBzbU9mZnNldD86IG51bWJlcjtcbiAgbWRPZmZzZXQ/OiBudW1iZXI7XG4gIGxnT2Zmc2V0PzogbnVtYmVyO1xufVxuXG5jb25zdCBUT1RBTF9DT0xVTU5TOiBudW1iZXIgPSAyNDtcbmNvbnN0IHJvdW5kRGVjaW1hbHMgPSBmdW5jdGlvbihudW1iZXI6IG51bWJlciwgcHJlY2lzaW9uPzogbnVtYmVyKSB7XG4gIGNvbnN0IGZhY3RvciA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24gfHwgLTEpO1xuICBjb25zdCB0ZW1wTnVtYmVyID0gbnVtYmVyICogZmFjdG9yO1xuICBjb25zdCByb3VuZGVkVGVtcE51bWJlciA9IE1hdGgucm91bmQodGVtcE51bWJlcik7XG4gIHJldHVybiByb3VuZGVkVGVtcE51bWJlciAvIGZhY3Rvcjtcbn07XG5cbmNvbnN0IGNvbHVtblNpemUgPSBmdW5jdGlvbihjb2x1bW5zPzogbnVtYmVyKSB7XG4gIGNvbnN0IG9uZUNvbHVtbiA9IDEwMCAvIFRPVEFMX0NPTFVNTlM7XG4gIHJldHVybiBjb2x1bW5zID8gYCR7cm91bmREZWNpbWFscyhvbmVDb2x1bW4gKiBjb2x1bW5zLCA2KX0lYCA6IDA7XG59O1xuXG5jb25zdCBmbHVpZENvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW91dGVyLW1hcmdpbiwgMnJlbSk7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1vdXRlci1tYXJnaW4sIDJyZW0pO1xuICBgO1xufTtcblxuY29uc3Qgcm93U3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGA7XG59O1xuXG5jb25zdCByb3dDZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGA7XG59O1xuXG5jb25zdCByb3dFbmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgYDtcbn07XG5cbmNvbnN0IGFsaWduVG9wID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBgXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGA7XG59O1xuXG5jb25zdCBhbGlnbkNlbnRlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGA7XG59O1xuXG5jb25zdCBhbGlnbkJvdHRvbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYDtcbn07XG5cbmNvbnN0IHNwYWNlQXJvdW5kID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGA7XG59O1xuXG5jb25zdCBzcGFjZUJldHdlZW4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGA7XG59O1xuXG5jb25zdCBndXR0ZXIgPSAxO1xuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIG91dGVyTWFyZ2luOiBgJHtndXR0ZXIgKiAyfXJlbWAsXG4gIGd1dHRlckNvbXBlbnNhdGlvbjogYCR7Z3V0dGVyICogLTAuNX1yZW1gLFxuICBoYWxmR3V0dGVyOiBgJHtndXR0ZXIgKiAwLjV9cmVtYCxcbiAgeHM6ICczMHJlbScsXG4gIHNtOiAnNDhyZW0nLFxuICBtZDogJzY0cmVtJyxcbiAgbGc6ICc3NXJlbSdcbn07XG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2PElHcmlkUHJvcHM+YFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgJHtwcm9wcyA9PiBwcm9wcy5mbHVpZCAmJiBmbHVpZENvbnRhaW5lcigpfVxuYDtcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdjxJUm93UHJvcHM+YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBtYXJnaW4tbGVmdDogJHtzZXR0aW5ncy5ndXR0ZXJDb21wZW5zYXRpb259O1xuICAgIG1hcmdpbi1yaWdodDogJHtzZXR0aW5ncy5ndXR0ZXJDb21wZW5zYXRpb259O1xuICAgICR7cHJvcHMgPT4gcHJvcHMueHNSZXZlcnNlICYmICdmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7J31cbiAgICAke3Byb3BzID0+IHByb3BzLnhzU3RhcnQgJiYgcm93U3RhcnQoKX1cbiAgICAke3Byb3BzID0+IHByb3BzLnhzQ2VudGVyICYmIHJvd0NlbnRlcigpfVxuICAgICR7cHJvcHMgPT4gcHJvcHMueHNFbmQgJiYgcm93RW5kKCl9XG4gICAgJHtwcm9wcyA9PiBwcm9wcy54c1RvcCAmJiBhbGlnblRvcCgpfVxuICAgICR7cHJvcHMgPT4gcHJvcHMueHNNaWRkbGUgJiYgYWxpZ25DZW50ZXIoKX1cbiAgICAke3Byb3BzID0+IHByb3BzLnhzQm90dG9tICYmIGFsaWduQm90dG9tKCl9XG4gICAgJHtwcm9wcyA9PiBwcm9wcy54c0Fyb3VuZCAmJiBzcGFjZUFyb3VuZCgpfVxuICAgICR7cHJvcHMgPT4gcHJvcHMueHNCZXR3ZWVuICYmIHNwYWNlQmV0d2VlbigpfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NldHRpbmdzLnNtfSkge1xuICAgICAgJHtwcm9wcyA9PiBwcm9wcy5zbVJldmVyc2UgJiYgJ2ZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsnfVxuICAgICAgJHtwcm9wcyA9PiBwcm9wcy5zbVN0YXJ0ICYmIHJvd1N0YXJ0KCl9XG4gICAgICAke3Byb3BzID0+IHByb3BzLnNtQ2VudGVyICYmIHJvd0NlbnRlcigpfVxuICAgICAgJHtwcm9wcyA9PiBwcm9wcy5zbUVuZCAmJiByb3dFbmQoKX1cbiAgICAgICR7cHJvcHMgPT4gcHJvcHMuc21Ub3AgJiYgYWxpZ25Ub3AoKX1cbiAgICAgICR7cHJvcHMgPT4gcHJvcHMuc21NaWRkbGUgJiYgYWxpZ25DZW50ZXIoKX1cbiAgICAgICR7cHJvcHMgPT4gcHJvcHMuc21Cb3R0b20gJiYgYWxpZ25Cb3R0b20oKX1cbiAgICAgICR7cHJvcHMgPT4gcHJvcHMuc21Bcm91bmQgJiYgc3BhY2VBcm91bmQoKX1cbiAgICAgICR7cHJvcHMgPT4gcHJvcHMuc21CZXR3ZWVuICYmIHNwYWNlQmV0d2VlbigpfVxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzZXR0aW5ncy5tZH0pIHtcbiAgICAgICR7cHJvcHMgPT4gcHJvcHMubWRSZXZlcnNlICYmICdmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7J31cbiAgICAgICR7cHJvcHMgPT4gcHJvcHMubWRTdGFydCAmJiByb3dTdGFydCgpfVxuICAgICAgJHtwcm9wcyA9PiBwcm9wcy5tZENlbnRlciAmJiByb3dDZW50ZXIoKX1cbiAgICAgICR7cHJvcHMgPT4gcHJvcHMubWRFbmQgJiYgcm93RW5kKCl9XG4gICAgICAke3Byb3BzID0+IHByb3BzLm1kVG9wICYmIGFsaWduVG9wKCl9XG4gICAgICAke3Byb3BzID0+IHByb3BzLm1kTWlkZGxlICYmIGFsaWduQ2VudGVyKCl9XG4gICAgICAke3Byb3BzID0+IHByb3BzLm1kQm90dG9tICYmIGFsaWduQm90dG9tKCl9XG4gICAgICAke3Byb3BzID0+IHByb3BzLm1kQXJvdW5kICYmIHNwYWNlQXJvdW5kKCl9XG4gICAgICAke3Byb3BzID0+IHByb3BzLm1kQmV0d2VlbiAmJiBzcGFjZUJldHdlZW4oKX1cbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2V0dGluZ3MubGd9KSB7XG4gICAgICAke3Byb3BzID0+IHByb3BzLmxnUmV2ZXJzZSAmJiAnZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyd9XG4gICAgICAke3Byb3BzID0+IHByb3BzLmxnU3RhcnQgJiYgcm93U3RhcnQoKX1cbiAgICAgICR7cHJvcHMgPT4gcHJvcHMubGdDZW50ZXIgJiYgcm93Q2VudGVyKCl9XG4gICAgICAke3Byb3BzID0+IHByb3BzLmxnRW5kICYmIHJvd0VuZCgpfVxuICAgICAgJHtwcm9wcyA9PiBwcm9wcy5sZ1RvcCAmJiBhbGlnblRvcCgpfVxuICAgICAgJHtwcm9wcyA9PiBwcm9wcy5sZ01pZGRsZSAmJiBhbGlnbkNlbnRlcigpfVxuICAgICAgJHtwcm9wcyA9PiBwcm9wcy5sZ0JvdHRvbSAmJiBhbGlnbkJvdHRvbSgpfVxuICAgICAgJHtwcm9wcyA9PiBwcm9wcy5sZ0Fyb3VuZCAmJiBzcGFjZUFyb3VuZCgpfVxuICAgICAgJHtwcm9wcyA9PiBwcm9wcy5sZ0JldHdlZW4gJiYgc3BhY2VCZXR3ZWVuKCl9XG4gICAgfVxuICBgO1xuXG5jb25zdCBjb2x1bW5XaWR0aCA9IGZ1bmN0aW9uKHNpemU6IG51bWJlcikge1xuICByZXR1cm4gYFxuICAgIGZsZXgtYmFzaXM6ICR7Y29sdW1uU2l6ZShzaXplKX07XG4gICAgbWF4LXdpZHRoOiAke2NvbHVtblNpemUoc2l6ZSl9O1xuICBgO1xufTtcblxuY29uc3QgY29sdW1uT2Zmc2V0ID0gZnVuY3Rpb24oc2l6ZTogbnVtYmVyKSB7XG4gIHJldHVybiBgXG4gICAgbWFyZ2luLWxlZnQ6ICR7Y29sdW1uU2l6ZShzaXplKX07XG4gIGA7XG59O1xuXG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2PElDb2xQcm9wcz5gXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBmbGV4LWJhc2lzOiAke3Byb3BzID0+IGNvbHVtblNpemUocHJvcHMueHMpfTtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBjb2x1bW5TaXplKHByb3BzLnhzT2Zmc2V0KX07XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBjb2x1bW5TaXplKHByb3BzLnhzKSB8fCAnMTAwJSd9O1xuICBwYWRkaW5nLWxlZnQ6ICR7c2V0dGluZ3MuaGFsZkd1dHRlcn07XG4gIHBhZGRpbmctcmlnaHQ6ICR7c2V0dGluZ3MuaGFsZkd1dHRlcn07XG5cbiAgJHtwcm9wcyA9PiBwcm9wcy5yZXZlcnNlICYmICdmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7J31cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2V0dGluZ3Muc219KSB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zbSAmJiBjb2x1bW5XaWR0aChwcm9wcy5zbSl9O1xuICAgICR7cHJvcHMgPT4gcHJvcHMuc21PZmZzZXQgJiYgY29sdW1uT2Zmc2V0KHByb3BzLnNtT2Zmc2V0KX07XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2V0dGluZ3MubWR9KSB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy5tZCAmJiBjb2x1bW5XaWR0aChwcm9wcy5tZCl9O1xuICAgICR7cHJvcHMgPT4gcHJvcHMubWRPZmZzZXQgJiYgY29sdW1uT2Zmc2V0KHByb3BzLm1kT2Zmc2V0KX07XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2V0dGluZ3MubGd9KSB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy5sZyAmJiBjb2x1bW5XaWR0aChwcm9wcy5sZyl9O1xuICAgICR7cHJvcHMgPT4gcHJvcHMubGdPZmZzZXQgJiYgY29sdW1uT2Zmc2V0KHByb3BzLmxnT2Zmc2V0KX07XG4gIH1cbmA7XG5cbmV4cG9ydCB7IENvbHVtbiwgR3JpZCwgUm93IH07XG4iXX0=