const redacted = process.env.REACT_APP_REDACTED === 'true';
const production = process.env.NODE_ENV === 'production';

export default redacted || production ? {
  ...require('./data.redacted.json'),
} : {
  ...require('./data.local.json'),
}
