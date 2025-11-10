import path from 'node:path'
import { Command } from 'commander'

export function generate() {
  const program = new Command()

  program.name('npm run generate').description('快速生成项目模块').version('1.0.0')

  program
    .command('docs')
    .description('用户查看博杉信息技术有限公司前端开发文档')
    .action(async () => {
      console.log('===>docs')

      // new BlessedDocs().render()
    })

  if (process.argv.length < 3) {
    program.outputHelp()
    return
  }

  program.parse(process.argv)
}

async function main() {
  try {
    await generate()
  } catch (error) {
    console.error('generate error:', error)
    // 返回非零退出码供 CI 或 npm 脚本识别
    process.exitCode = 1
  }
}

main()
