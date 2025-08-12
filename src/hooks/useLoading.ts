export function useLoading() {
  function openLoading() {
    const loadingOverlay = document.createElement('div')
    loadingOverlay.className = 'bs-loading'
    loadingOverlay.id = 'bs-loading'
    loadingOverlay.innerHTML = '<div></div><div></div><div></div><div></div>'

    // 避免重复创建相同ID的元素
    const existingLoading = document.getElementById('bs-loading')
    if (!existingLoading) {
      const appElement = document.getElementById('app')
      if (appElement) {
        appElement.appendChild(loadingOverlay)
      }
    }
  }

  function closeLoading() {
    const loadingOverlay = document.getElementById('bs-loading')
    if (loadingOverlay) {
      loadingOverlay.remove()
    }
  }

  return {
    openLoading,
    closeLoading,
  }
}
