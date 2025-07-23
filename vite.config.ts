import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import ts from 'typescript'
import { vitePluginTypescriptTransform } from 'vite-plugin-typescript-transform'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const envPrefix = 'V_'
  const env = loadEnv(mode, process.cwd(), envPrefix) as unknown as Env.ImportMeta
  console.log('env', env)

  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      AutoImport({
        imports: [
          'vue',
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
      vitePluginTypescriptTransform({
        enforce: 'pre',
        filter: {
          files: {
            include: /\.ts$/,
          },
        },
        tsconfig: {
          override: {
            target: ts.ScriptTarget.ESNext,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    esbuild: {
      supported: {
        bigint: true,
      },
    },
    envPrefix,
    server: {
      host: '0.0.0.0',
      cors: true,
      open: false, // 启动时自动在浏览器中打开应用程序
      proxy: {
        // 配置跨域
        [env.V_CONTEXT_PATH]: {
          target: env.V_PROXY_TARGET, //根据需求替换 请求后台接口
          changeOrigin: true, // 允许跨域
          ws: true, // 开启 websockets 代理
          secure: false, // 验证 SSL 证书
        },
      },
    },
  }
})
