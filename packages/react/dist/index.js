"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar2,
  Box: () => Box,
  Button: () => Button,
  Checkbox: () => Checkbox2,
  Heading: () => Heading,
  MultiStep: () => MultiStep,
  Text: () => Text,
  TextArea: () => TextArea,
  TextInput: () => TextInput,
  Toast: () => Toast,
  Tooltip: () => Tooltip,
  config: () => config,
  createTheme: () => createTheme,
  css: () => css,
  getCssText: () => getCssText,
  globalCss: () => globalCss,
  keyframes: () => keyframes,
  styled: () => styled,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFFFFF",
  black: "#000000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D",
  error: "#c30010"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  22: "6.2rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$6",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600",
  color: "$white",
  fontFamily: "$default"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "2xl" },
      "4xl": { fontSize: "4xl" },
      "5xl": { fontSize: "5xl" },
      "6xl": { fontSize: "6xl" },
      "7xl": { fontSize: "7xl" },
      "8xl": { fontSize: "8xl" },
      "9xl": { fontSize: "9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/styles.ts
var Avatar = __toESM(require("@radix-ui/react-avatar"));
var AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$16",
  height: "$16",
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/Avatar.tsx
var import_phosphor_react = require("phosphor-react");
var import_jsx_runtime = require("react/jsx-runtime");
function Avatar2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AvatarContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, __spreadValues({}, props)),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_phosphor_react.User, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  transition: "background-color 0.3s, color 0.3s",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray100"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/TextInput.tsx
var import_react2 = require("react");

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "center",
  variants: {
    size: {
      sm: {
        padding: "$3 $4"
      },
      md: {
        padding: "$2 $3"
      }
    }
  },
  "&:has(input:focus)": {
    borderColor: "$ignite300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  defaultVariants: {
    size: "md"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "$regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  backgroundColor: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/TextInput.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var TextInput = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(TextInputContainer, { children: [
      !!prefix && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Prefix, { children: prefix }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, __spreadValues({ ref }, props))
    ] });
  }
);
TextInput.displayName = "TextInput";

// src/components/Textarea.tsx
var TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  "&:focus": {
    outline: 0,
    borderColor: "$ignite300"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/Checkbox/Checkbox.tsx
var import_phosphor_react2 = require("phosphor-react");

// src/components/Checkbox/styles.ts
var Checkbox = __toESM(require("@radix-ui/react-checkbox"));
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $gray900",
  '&[data-state="checked"]': {
    backgroundColor: "$ignite300"
  },
  '&:focus, &[data-state="checked"]': {
    border: "2px solid $ignite300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/Checkbox.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Checkbox2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_phosphor_react2.Check, { weight: "bold" }) }) }));
}
Checkbox2.displayName = "Checkbox";

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    fontSize: "$xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gap: "$2",
  marginTop: "$1",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)"
});
var Step = styled("div", {
  height: "$1",
  backgroundColor: "$gray600",
  borderRadius: "$px",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/MultiStep.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(MultiStepContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Label, { children: [
      "Passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Steps, { css: { "--steps-size": size }, children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Step, { active: currentStep >= step }, step);
    }) })
  ] });
}
MultiStep.displayName = "MultiStep";

// src/components/Tooltip/styles.ts
var TooltipText = styled("div", {
  backgroundColor: "$gray900",
  color: "$white",
  width: "220px",
  textAlign: "center",
  lineHeight: "$tall",
  borderRadius: "$xs",
  cursor: "pointer",
  marginTop: "$40",
  fontFamily: "$default"
});
var TooltipBox = styled("div", {
  position: "absolute",
  bottom: "calc(100% + 15px)",
  left: "0",
  visibility: "hidden",
  color: "transparent",
  backgroundColor: "transparent",
  width: "220px",
  borderRadius: "$xs",
  fontFamily: "$default",
  fontWeight: "$medium",
  lineHeight: "$shorter",
  "&:before": {
    content: '""',
    width: 0,
    height: 0,
    left: "$22",
    bottom: "-10px",
    position: "absolute",
    border: "10px solid transparent",
    transform: "rotate(315deg)"
  }
});
var TooltipCard = styled("div", {
  position: "relative",
  [`& ${TooltipText}:hover + ${TooltipBox}`]: {
    visibility: "visible",
    textAlign: "center",
    color: "$white",
    backgroundColor: "$gray900",
    width: "220px",
    fontSize: "$sm",
    "&:before": {
      borderColor: "transparent transparent $gray900 $gray900"
    }
  }
});

// src/components/Tooltip/Tooltip.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Tooltip({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(TooltipCard, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TooltipText, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Tooltip" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TooltipBox, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children }) })
  ] }) });
}
Tooltip.displayName = "Tooltip";

// src/components/Toast/Toast.tsx
var import_react_hot_toast = __toESM(require("react-hot-toast"));

// src/components/Toast/styles.ts
var ToastContainer = styled("div", {
  backgroundColor: "$gray800",
  fontFamily: "$default",
  padding: "$1 $5",
  borderRadius: "$sm",
  border: "1px solid $gray500"
});
var ToastTitle = styled("h1", {
  fontSize: "$xl",
  fontWeight: "$bold",
  variants: {
    type: {
      success: {
        color: "$ignite300"
      },
      error: {
        color: "$error"
      }
    }
  },
  defaultVariants: {
    type: "success"
  }
});
var ToastSubtitle = styled("p", {
  color: "$gray200",
  fontSize: "$sm",
  fontWeight: "$regular",
  defaultVariants: {
    type: "success"
  }
});

// src/components/Toast/Toast.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Toast({ title, subtitle, type = "success" }) {
  const handleToast = () => {
    import_react_hot_toast.default.custom(
      () => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ToastContainer, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToastTitle, { type, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToastSubtitle, { children: subtitle })
      ] }),
      {
        duration: 2e3
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_hot_toast.Toaster, { position: "bottom-right", reverseOrder: false }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { onClick: handleToast, children: "Toast me!" })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Box,
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  Toast,
  Tooltip,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
});
