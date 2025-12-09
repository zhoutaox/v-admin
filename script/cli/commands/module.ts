import path from 'node:path'
import { hfs } from '@humanfs/node'
import prompts from 'prompts'
import { upperFirst, snakeCase } from 'lodash-es'

function createApiTemplate(apiName: string, isNeedCrud = false) {
  const className = upperFirst(apiName)
  const crudTemplate = `import { AbstractApi, Controller, Post } from '@/api/helpers'
import { ${className} } from './model'

@Controller('/api/${apiName}')
class ${className}Api extends AbstractApi<${className}> {
  @Post('/test')
  test() {
    return this.post()
  }
}

export const ${apiName}Api = new ${className}Api()
export * from './model'`

  const template = `import { Request, Controller, Post } from '@/api/helpers'
import { ${className} } from './model'

@Controller('/api/${apiName}')
class ${className}Api extends Request {
  @Post('/test')
  test() {
    return this.post()
  }
}

export const ${apiName}Api = new ${className}Api()
export * from './model'`

  return isNeedCrud ? crudTemplate : template
}

function createVueTemplate(name: string) {
  return `<script lang="ts">
</script>

<template>
  <div class="${snakeCase(name + '-container')}">${name}</div>
</template>

<style lang="scss" scoped>
</style>`
}

function createModelTemplate(name: string) {
  return `import { BaseEntity } from '@/core'

export class ${upperFirst(name)} extends BaseEntity {
}`
}

export async function createModule(name: string) {
  const dirPath = path.join(process.cwd(), 'src', 'views', name)
  if (await hfs.isDirectory(dirPath)) {
    console.error('目录已存在:', dirPath)
    return
  }

  const response = await prompts([
    {
      type: 'confirm',
      name: 'isNeedApi',
      message: '是否需要生成接口文件',
      initial: true,
    },
    {
      type: (prev) => (prev ? 'confirm' : null),
      name: 'isNeedCrud',
      message: '是否集成CRUD',
      initial: true,
    },
    {
      type: (_, all) => (all.isNeedApi ? 'confirm' : null),
      name: 'isNeedDto',
      message: '是否集成DTO',
      initial: true,
    },
    {
      type: (prev) => (prev ? 'text' : null),
      name: 'apiName',
      message: '请输入接口名称',
      initial: name,
      validate: (value) => (value ? true : '接口名称不能为空'),
    },
  ])

  // 创建模块目录
  await hfs.createDirectory(dirPath)

  // 创建 index.vue 文件
  const vuePath = path.join(dirPath, 'index.vue')
  await hfs.write(vuePath, createVueTemplate(name))

  if (response.isNeedApi) {
    // 创建 api 目录和文件
    const apiDir = path.join(dirPath, 'api')
    await hfs.createDirectory(apiDir)

    const apiPath = path.join(apiDir, 'index.ts')
    await hfs.write(apiPath, createApiTemplate(response.apiName, response.isNeedCrud))

    const modelDir = path.join(apiDir, 'model')
    await hfs.createDirectory(modelDir)

    if (response.isNeedDto) {
      const dtoDir = path.join(apiDir, 'dto')
      await hfs.createDirectory(dtoDir)

      const dtoPath = path.join(dtoDir, `Update${upperFirst(response.apiName)}Dto.ts`)
      await hfs.write(dtoPath, createModelTemplate(`Update${upperFirst(response.apiName)}Dto`))
    }

    const modelPath = path.join(modelDir, `${upperFirst(response.apiName)}.ts`)
    await hfs.write(modelPath, createModelTemplate(response.apiName))
    const modelIndexPath = path.join(modelDir, 'index.ts')
    const exportModelContent = `export * from './${upperFirst(response.apiName)}'\n`
    await hfs.append(modelIndexPath, exportModelContent)
  }
}
