import { hfs } from '@humanfs/node'
import path from 'path'

function createEnumTemplate(name: string) {
  return `import { Enum } from '@/core'

export class ${name}Enum extends Enum<number> {
  static EXAMPLE = new ${name}Enum(0, 'example_value')
}
`
}
export async function createEnum(name: string) {
  console.log('Creating enum:', name)
  const fileName = `${name}Enum.ts`
  const filePath = path.join(process.cwd(), 'src', 'enums', fileName)

  if (await hfs.isFile(filePath)) {
    console.error('Enum already exists:', filePath)
  }

  await hfs.write(filePath, createEnumTemplate(name))
}
