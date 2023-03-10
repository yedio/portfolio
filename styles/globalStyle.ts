import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
  font-family: "InkLipquid";
  font-weight: 200;
  src: url("/fonts/InkLipquidFonts.ttf") format("truetype");
  }

  *,
  html,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  * {
    outline: none;
    -webkit-tap-highlight-color: transparent !important;
    cursor: default;
  }

  *:focus {
    outline: none;
  }

  html,
  body,
  div,
  span,
  dl,
  dt,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  form,
  fieldset,
  legend,
  input,
  select,
  textarea,
  table,
  col,
  colgroup,
  thead,
  tfoot,
  tbody,
  th,
  td,
  button {
    margin: 0;
    padding: 0;
    color: black;
    font-family: "Noto Sans KR", "InkLipquid", Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    border: 0;
  }

  body {
    background-color: white;
    color: #111111;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    overflow-x: hidden;
  }

  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  em,
  address {
    font-style: normal;
  }

  img {
    font-size: 0;
    line-height: 0;
    border: 0 none;
  }

  caption {
    overflow: hidden;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  th,
  td {
    text-align: left;
    vertical-align: middle;
    padding: 10px 20px;
    word-break: keep-all;
  }

  a {
    text-decoration: none;
    color: #111111;
    line-height: 1;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
  }

  a:visited {
    color: #111111;
  }

  button {
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
  }

  /* IE - input close button delete */
  input::-ms-clear {
    display: none;
  }

  /* RESET - chrome input background sky set */
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 0;
    box-shadow: 0 0 0 0;
    -webkit-text-fill-color: #848484;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    word-break: keep-all;
  }

  b {
    font-weight: 700 !important;
  }

  textarea {
    resize: none;
  }

  // class
  .noData {
    text-align: center;
  }
`;
