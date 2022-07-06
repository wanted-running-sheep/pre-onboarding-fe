const size = {
  mobile: '770px',
  desktop: '3600px',
};

export const theme = {
  color: {
    primary: '#0095f6',
    background1: '#ffffff',
    background2: '#fafafa',
    disabled: '#0095f64d',
    border: '#e3e3e3',
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