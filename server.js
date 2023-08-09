import pkg from './package.json' assert { type: "json" };

console.group("INFO")
console.log(`${pkg.name}@${pkg.version} - ${pkg.description}`)
console.groupEnd()
