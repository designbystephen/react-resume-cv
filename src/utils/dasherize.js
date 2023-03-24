export const dasherize = (...values) => values.map(
  value => `${value}`.replace(/[^a-zA-Z-]+/,' ')
).join(' ').toLowerCase().split(' ').join('-');

export default dasherize;
