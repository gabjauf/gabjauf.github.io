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
    36,
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
  "radii": {
    "default": "1em 1em 0.5em 1em",
  },
  "borders": {
    "thick": "2px solid var(--theme-ui-colors-text, black)",
    "thin": "1px solid var(--theme-ui-colors-text, black)"
  },
  "shadows": {
    "default": "15px 24px 25px -18px rgba(0,0,0,.4)",
    "hover": "2px 8px 10px -6px rgba(256, 256, 256,.4)"
  },
  "colors": {
    "text": "#fff",
    "background": "#6461FF",
    "primary": "#fff",
    "secondary": "#c0c",
    "highlight": "#e0e",
    "muted": "#f6f6ff",
    "modes": {
      "light": {
        "text": "#fff",
        "background": "#6344FF",
        "primary": "#fff",
        "secondary": "#6344FF",
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
    },
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
  },
  buttons: {
    primary: {
      // you can reference other values defined in the theme
      color: 'background',
      bg: 'primary',
      padding: '0.2em 0.5em',
      borderRadius: 'default',
      "&:hover": {
        "boxShadow": "hover"
      },
      "transition": "all 250ms ease",
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
    },
    get tertiary() {
      return {
        ...this.secondary,
        color: 'blue',
      };
    },
    get callToAction() {
      return {
        ...this.primary,
        fontFamily: 'heading',
        "lineHeight": "heading",
        "fontWeight": "heading",
        "fontSize": 5
      };
    },
  },
  links: {
    callToAction: {
      textDecoration: 'none',
      color: 'background',
      bg: 'primary',
      padding: '0.2em 0.5em',
      borderRadius: 'default',
      "&:hover": {
        "boxShadow": "hover"
      },
      "transition": "all 250ms ease",
      fontFamily: 'heading',
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 5
    },
  }
} as Theme