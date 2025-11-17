import { Command } from 'commander'
import { createModule } from './commands/module'
import { createEnum } from './commands/enum'
import { createComponent } from './commands/component'

export async function setupCli() {
  const program = new Command()

  program.name('v-admin-cli').description('V-Admin 项目脚手架工具').version('1.0.0')

  program
    .command('docs')
    .description('用户查看博杉信息技术有限公司前端开发文档')
    .action(async () => {
      console.log('===>docs')

      // new BlessedDocs().render()
    })

  program
    .command('module <name>')
    .description('生成项目模块')
    .action(async (name: string) => {
      createModule(name)
    })

  program
    .command('enum <name>')
    .description('生成枚举')
    .action(async (name: string) => {
      createEnum(name)
    })

  program
    .command('component <name>')
    .description('生成组件')
    .action(async (name: string) => {
      createComponent(name)
    })

  if (process.argv.length < 3) {
    program.outputHelp()
    return
  }

  await program.parseAsync(process.argv)
}

setupCli()
