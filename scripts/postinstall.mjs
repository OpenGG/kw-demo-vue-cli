import {
    spawn,
    spawnSync,
} from 'child_process'

import {
    readFile,
    access,
} from 'fs/promises'

import {
    constants,
} from 'fs'

const hasEslint = async () => {
    try {
        await access('node_modules/eslint', constants.F_OK)
        return true
    } catch (e) {
        return false
    }
}

const isStackblitz = () => {
    const proc = spawnSync('npm', ['--help'])

    const stdout = `${proc.stdout}`

    return stdout.includes('turbo add')
}

const installDeps = async () => {
    const pkg = JSON.parse(await readFile('./package.json'))

    const args = Object.entries(pkg.devOnlyDependencies).map(
        ([d, v]) => `${d}@${v}`
    )

    const proc = await spawn('npx', ['yarn-add-no-save', ...args], {
        stdio: 'inherit',
        env: {
            ...process.env,
            'npm_config_yes': 'true',
        },
    })

    await new Promise((resolve) => {
        proc.on('exit', resolve)
    })
}

const main = async () => {
    if (isStackblitz()) {
        return
    }

    if (await hasEslint()) {
        return
    }

    await installDeps()
}


await main()