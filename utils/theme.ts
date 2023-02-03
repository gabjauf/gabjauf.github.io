import type { Theme } from 'theme-ui'

export default {
  "space": [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  "fonts": {
    "body": "\"Avenir Next\", system-ui, sans-serif",
    "heading": "'Zen Tokyo Zoo'",
    "monospace": "Menlo, monospace",
  },
  "fontSizes": [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  "fontWeights": {
    "body": 400,
    "heading": 400,
    "bold": 700
  },
  "lineHeights": {
    "body": 1.75,
    "heading": 1.25
  },
  "colors": {
    "text": "#fff",
    "background": "#6461FF",
    "primary": "#11e",
    "secondary": "#c0c",
    "highlight": "#e0e",
    "muted": "#f6f6ff",
    "modes": {
      "light": {
        "text": "#fff",
        "background": "#6344FF",
        "primary": "#0fc",
        "secondary": "#0cf",
        "highlight": "#f0c",
        "muted": "#011"
      }
    }
  },
  "styles": {
    "root": {
      "fontFamily": "body",
      "lineHeight": "body",
      "fontWeight": "body"
    },
    "h1": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 6
    },
    "h2": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 5
    },
    "h3": {
      "color": "text",
      "fontFamily": "body",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 3
    },
    "h4": {
      "color": "text",
      "fontFamily": "body",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 2
    },
    "h5": {
      "color": "text",
      "fontFamily": "body",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 1
    },
    "h6": {
      "color": "text",
      "fontFamily": "body",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 0
    },
    "p": {
      "color": "text",
      "fontFamily": "body",
      "fontWeight": "body",
      "lineHeight": "body"
    },
    "a": {
      "color": "primary"
    },
    "pre": {
      "fontFamily": "monospace",
      "overflowX": "auto",
      "code": {
        "color": "inherit"
      }
    },
    "code": {
      "fontFamily": "monospace",
      "fontSize": "inherit"
    },
    "table": {
      "width": "100%",
      "borderCollapse": "separate",
      "borderSpacing": 0
    },
    "th": {
      "textAlign": "left",
      "borderBottomStyle": "solid"
    },
    "td": {
      "textAlign": "left",
      "borderBottomStyle": "solid"
    },
    "img": {
      "maxWidth": "100%"
    }
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  }
} as Theme