export const useApi = () => {
  const token = useCookie('token')  
  const apiFetch = $fetch.create({
    baseURL: useRuntimeConfig().public.apiBase,
    onRequest({ options }) {
      if (token.value) {
        options.headers = {
          ...options.headers,
          Authorization: `x-access-token ${token.value}`
        }
      }
    }
  })
  return { apiFetch }
}