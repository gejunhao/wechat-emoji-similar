export function escapecode(code) {
  var a = JSON.parse(JSON.stringify(code))
  a = a.replaceAll('/', '\\/')
  a = a.replaceAll('-', '\\-')
  a = a.replaceAll('(', '\\(')
  a = a.replaceAll(')', '\\)')
  a = a.replaceAll('[', '\\[')
  a = a.replaceAll(']', '\\]')
  a = a.replaceAll('$', '\\$')
  a = a.replaceAll('*', '\\*')
  a = a.replaceAll('?', '\\?')
  a = a.replaceAll('|', '\\|')
  return a
}
