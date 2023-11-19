import { ref } from 'vue'
import axios from 'axios'

export function useApi(apiUrl) {
  const data = ref([])
  const error = ref(null)
  const loading = ref(true)

  const loadData = async () => {
    try {
      const res = await axios.get(apiUrl)
      data.value.push(res.data)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, loadData }
}
