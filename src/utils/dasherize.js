export default (...values) => values.map(
  value => `${value}`.replace(/[^a-zA-Z-]+/,' ')
).join(' ').toLowerCase().split(' ').join('-');
