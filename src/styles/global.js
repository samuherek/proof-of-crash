import { injectGlobal } from 'styled-components';

injectGlobal`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #292929;
    border-radius: 5px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #444444;
  }
}

html,
body,
#root {
  height: 100%;
}


body {
  background: #000000;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42857142857143;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

hr {
  margin: 25px 0;
  border: none;
  background: #ccc;
  height: 1px;
  width: 100%;
}
`;
