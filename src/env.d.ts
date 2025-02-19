declare namespace Env {
  interface ImportMeta {
    /**
     * # 应用上下文路径
     */
    readonly V_CONTEXT_PATH: string
    /**
     * # 代理目标
     */
    readonly V_PROXY_TARGET: string
  }
}

interface ImportMeta {
  readonly env: Env.ImportMeta
}
