module.exports = {
  plugins: {
    'cssnano': { },
    'postcss-preset-env': { 
      'custom-media-queries': {
        importFrom: 'src/components/00-base/breakpoints.css'
      } 
    }
  },
}