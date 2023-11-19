import { ref, reactive, computed } from 'vue';
import axios from 'axios';

export function useApi(apiUrl) {
  const state = reactive({
    data: ref(null),
    error: ref(null),
    loading: ref(false),
  });

  const fetchData = async () => {
    state.loading = true;
    try {
      const response = await axios.get(apiUrl);
      state.data = response.data;
    } catch (error) {
      state.error = error;
    } finally {
      state.loading = false;
    }
  };

  const computedDataLength = computed(() => {
    return state.data ? state.data.length : 0;
  });

  return {
    ...state,
    fetchData,
    computedDataLength,
  };
}
