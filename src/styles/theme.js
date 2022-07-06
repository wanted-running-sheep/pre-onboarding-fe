const size = {
  mobile: '770px',
  desktop: '3600px',
};

export const theme = {
  color: {
    background: {
      white: '#ffffff',
      lightGray: '#fafafa',
    },
    border: {
      primary: 'lightgray',
      notValid: 'red',
    },
    button: {
      primary: '#0095f6',
      disabled: '#c0dffd',
    },
  },

  deviceSize: {
    max: {
      mobile: `(max-width : ${size.mobile})`,
      desktop: `(max-width : ${size.desktop})`,
    },
    min: {
      mobile: `(min-width : ${size.mobile})`,
      desktop: `(min-width : ${size.desktop})`,
    },
  },
};
