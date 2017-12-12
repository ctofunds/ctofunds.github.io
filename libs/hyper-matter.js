module.exports = function (md) {
  const matters = {}
  const pattern = /<!--\s*\$(\w+):\s*(.*?)\s*-->/g

  let matched
  while ((matched = pattern.exec(md)) !== null) {
    matters[matched[1]] = matched[2]
  }

  return matters
}
