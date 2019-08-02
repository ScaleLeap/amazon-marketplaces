/* eslint-disable @typescript-eslint/no-var-requires */

const { writeFileSync } = require('fs')
const { join } = require('path')
const pkgRelease = require('./pkg/package.json')
const pkgSource = require('./package.json')
const pkgSourceLock = require('./package-lock.json')

pkgSource.version = pkgRelease.version
pkgSourceLock.version = pkgRelease.version

writeFileSync(join(__dirname, 'package.json'), JSON.stringify(pkgSource, null, 2))
writeFileSync(join(__dirname, 'package-lock.json'), JSON.stringify(pkgSourceLock, null, 2))
