const tokens = {
  color: {
    primary: {
      description: '',
      type: 'color',
      value: '#f8f2e6ff',
      blendMode: 'normal',
    },
    textlight: {
      description: '',
      type: 'color',
      value: '#828282ff',
      blendMode: 'normal',
    },
    text: {
      description: '',
      type: 'color',
      value: '#000000ff',
      blendMode: 'normal',
    },
    yellow1: {
      description: '',
      type: 'color',
      value: '#f0d000ff',
      blendMode: 'normal',
    },
    yellow2: {
      description: '',
      type: 'color',
      value: '#ffef9cff',
      blendMode: 'normal',
    },
    grey1: {
      description: '',
      type: 'color',
      value: '#d0ceceff',
      blendMode: 'normal',
    },
    grey2: {
      description: '',
      type: 'color',
      value: '#e5e5e5ff',
      blendMode: 'normal',
    },
    brow1: {
      description: '',
      type: 'color',
      value: '#d26d00b5',
      blendMode: 'normal',
    },
    grey3: {
      description: '',
      type: 'color',
      value: '#00000091',
      blendMode: 'normal',
    },
  },
  font: {
    labellarge: {
      type: 'custom-fontStyle',
      value: {
        fontSize: 35,
        textDecoration: 'none',
        fontFamily: 'Roboto',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: -0.7,
        lineHeight: 49,
        paragraphIndent: 0,
        paragraphSpacing: 0,
        textCase: 'none',
      },
    },
    header: {
      type: 'custom-fontStyle',
      value: {
        fontSize: 16,
        textDecoration: 'none',
        fontFamily: 'Roboto',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: -0.32,
        lineHeight: 22.4,
        paragraphIndent: 0,
        paragraphSpacing: 0,
        textCase: 'none',
      },
    },
    task: {
      type: 'custom-fontStyle',
      value: {
        fontSize: 16,
        textDecoration: 'none',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 1.6,
        lineHeight: 22.4,
        paragraphIndent: 0,
        paragraphSpacing: 0,
        textCase: 'none',
      },
    },
    textthin: {
      type: 'custom-fontStyle',
      value: {
        fontSize: 14,
        textDecoration: 'none',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 0.136,
        lineHeight: 19.6,
        paragraphIndent: 0,
        paragraphSpacing: 0,
        textCase: 'none',
      },
    },
    smalltextthin: {
      type: 'custom-fontStyle',
      value: {
        fontSize: 12,
        textDecoration: 'none',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 0.116,
        lineHeight: 16.8,
        paragraphIndent: 0,
        paragraphSpacing: 0,
        textCase: 'none',
      },
    },
  },
  'variable collection': {
    background: {
      type: 'color',
      value: '#ffffffff',
      blendMode: 'normal',
    },
    brow2: {
      type: 'color',
      value: '#e8aa68ff',
      blendMode: 'normal',
    },
    blue1: {
      type: 'color',
      value: '#6cd5ffff',
      blendMode: 'normal',
    },
    green1: {
      type: 'color',
      value: '#9fff90ff',
      blendMode: 'normal',
    },
    green2: {
      type: 'color',
      value: '#50a14fff',
      blendMode: 'normal',
    },
  },
  spacing: {
    spacing_small: {
      type: 'string',
      value: '8',
    },
    spacing_medium: {
      type: 'string',
      value: '16',
    },
    spacing_large: {
      type: 'string',
      value: '24',
    },
  },
  radius: {
    radious_button: {
      type: 'string',
      value: '8',
    },
  },
  typography: {
    labellarge: {
      fontSize: {
        type: 'dimension',
        value: 35,
      },
      textDecoration: {
        type: 'string',
        value: 'none',
      },
      fontFamily: {
        type: 'string',
        value: 'Roboto',
      },
      fontWeight: {
        type: 'number',
        value: 600,
      },
      fontStyle: {
        type: 'string',
        value: 'normal',
      },
      fontStretch: {
        type: 'string',
        value: 'normal',
      },
      letterSpacing: {
        type: 'dimension',
        value: -0.7,
      },
      lineHeight: {
        type: 'dimension',
        value: 49,
      },
      paragraphIndent: {
        type: 'dimension',
        value: 0,
      },
      paragraphSpacing: {
        type: 'dimension',
        value: 0,
      },
      textCase: {
        type: 'string',
        value: 'none',
      },
    },
    header: {
      fontSize: {
        type: 'dimension',
        value: 16,
      },
      textDecoration: {
        type: 'string',
        value: 'none',
      },
      fontFamily: {
        type: 'string',
        value: 'Roboto',
      },
      fontWeight: {
        type: 'number',
        value: 600,
      },
      fontStyle: {
        type: 'string',
        value: 'normal',
      },
      fontStretch: {
        type: 'string',
        value: 'normal',
      },
      letterSpacing: {
        type: 'dimension',
        value: -0.32,
      },
      lineHeight: {
        type: 'dimension',
        value: 22.4,
      },
      paragraphIndent: {
        type: 'dimension',
        value: 0,
      },
      paragraphSpacing: {
        type: 'dimension',
        value: 0,
      },
      textCase: {
        type: 'string',
        value: 'none',
      },
    },
    task: {
      fontSize: {
        type: 'dimension',
        value: 16,
      },
      textDecoration: {
        type: 'string',
        value: 'none',
      },
      fontFamily: {
        type: 'string',
        value: 'Inter',
      },
      fontWeight: {
        type: 'number',
        value: 500,
      },
      fontStyle: {
        type: 'string',
        value: 'normal',
      },
      fontStretch: {
        type: 'string',
        value: 'normal',
      },
      letterSpacing: {
        type: 'dimension',
        value: 1.6,
      },
      lineHeight: {
        type: 'dimension',
        value: 22.4,
      },
      paragraphIndent: {
        type: 'dimension',
        value: 0,
      },
      paragraphSpacing: {
        type: 'dimension',
        value: 0,
      },
      textCase: {
        type: 'string',
        value: 'none',
      },
    },
    textthin: {
      fontSize: {
        type: 'dimension',
        value: 14,
      },
      textDecoration: {
        type: 'string',
        value: 'none',
      },
      fontFamily: {
        type: 'string',
        value: 'Inter',
      },
      fontWeight: {
        type: 'number',
        value: 400,
      },
      fontStyle: {
        type: 'string',
        value: 'normal',
      },
      fontStretch: {
        type: 'string',
        value: 'normal',
      },
      letterSpacing: {
        type: 'dimension',
        value: 0.136,
      },
      lineHeight: {
        type: 'dimension',
        value: 19.6,
      },
      paragraphIndent: {
        type: 'dimension',
        value: 0,
      },
      paragraphSpacing: {
        type: 'dimension',
        value: 0,
      },
      textCase: {
        type: 'string',
        value: 'none',
      },
    },
    smalltextthin: {
      fontSize: {
        type: 'dimension',
        value: 12,
      },
      textDecoration: {
        type: 'string',
        value: 'none',
      },
      fontFamily: {
        type: 'string',
        value: 'Inter',
      },
      fontWeight: {
        type: 'number',
        value: 500,
      },
      fontStyle: {
        type: 'string',
        value: 'normal',
      },
      fontStretch: {
        type: 'string',
        value: 'normal',
      },
      letterSpacing: {
        type: 'dimension',
        value: 0.116,
      },
      lineHeight: {
        type: 'dimension',
        value: 16.8,
      },
      paragraphIndent: {
        type: 'dimension',
        value: 0,
      },
      paragraphSpacing: {
        type: 'dimension',
        value: 0,
      },
      textCase: {
        type: 'string',
        value: 'none',
      },
    },
  },
};
export default tokens;
