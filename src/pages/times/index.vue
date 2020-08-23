<template>
  <div>
    <Heading text="Times" />
    <img src="../../assets/logo.png" decoding="async" alt="" />
    <p>
      <span class="count">{{ count1 }}</span>
      <span class="mark">&times;</span>
      <span class="count">{{ count2 }}</span>
      <span class="mark">=</span>
      <span class="result">{{ result }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from '../../store'
import Heading from '../../components/Heading.vue'

export default {
  name: 'Times',
  components: {
    Heading,
  },
  setup() {
    const store = useStore()

    const count1 = computed(() => store.state.count1)
    const count2 = computed(() => store.state.count2)
    const result = computed(() => store.getters.timesCount)

    return {
      count1,
      count2,
      result,
    }
  },
}
</script>

<style scoped>
.count {
  font-size: 2.4rem;
}
.mark {
  font-size: 1.6rem;
  margin: 0 12px;
}
.result {
  font-size: 3.2rem;
}
</style>
