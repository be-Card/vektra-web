export const pushToDataLayer = (event: string, data: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({ event, ...data })
  }
}

declare global {
  interface Window {
    dataLayer: any[]
  }
}
