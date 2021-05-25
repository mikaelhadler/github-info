<template>
  <div>
    User: <span v-if="state.user !== null"> {{ state.user }}</span>
    <span v-if="state.hasError">Houve um erro na requisição</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { getUsetByUsername } from "../../services/user.service";

export default defineComponent({
  setup() {
    const state = reactive({
      hasError: false,
      isLoading: false,
      user: null
    })

    onMounted(async () => {
      state.user = await getUsetByUsername('mikaelhadler');
    })
    return {
      state
    };
  },
});
</script>

<style scoped>
</style>