export default (value) => {
  // console.log('datefilter: incoming', value)
  // console.log(typeof value)
  const date = new Date(value.seconds * 1000)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
