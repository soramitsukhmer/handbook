import pkg from './package.json' assert { type: "json" };
import { $, echo } from 'zx'

try {
    echo(`\n${pkg.name}@${pkg.version} - ${pkg.description}\n`)
    await $`vitepress dev`
} catch {}
