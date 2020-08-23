<template>
  <div>
    <Heading text="Division" />
    <img src="../../assets/logo.png" decoding="async" alt="" />
    <p>
      <span class="count">{{ count1 }}</span>
      <span class="mark">&div;</span>
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
  name: 'Division',
  components: {
    Heading,
  },
  setup() {
    const store = useStore()

    const count1 = computed(() => store.state.count1)
    const count2 = computed(() => store.state.count2)
    const result = computed(() => store.getters.divisionCount)

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
