<template>
  <div>
    <Heading text="Home" />
    <img src="../assets/logo.png" decoding="async" alt="" />
    <p>
      <span class="count">
        count1: <span class="number">{{ count1 }}</span>
      </span>
      <button @click="addCount1">+</button>
      <button @click="minusCount1">-</button>
    </p>
    <p>
      <span class="count">
        count2: <span class="number">{{ count2 }}</span>
      </span>
      <button @click="addCount2">+</button>
      <button @click="minusCount2">-</button>
    </p>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from '../store'
import { ActionTypes } from '../store/actionTypes'
import Heading from '../components/Heading.vue'

export default {
  name: 'Home',
  components: {
    Heading,
  },
  setup() {
    const store = useStore()

    const count1 = computed(() => store.state.count1)
    const count2 = computed(() => store.state.count2)
    const addCount1 = () => store.dispatch(ActionTypes.ADD_COUNT_1, 1)
    const minusCount1 = () => store.dispatch(ActionTypes.MINUS_COUNT_1, 1)
    const addCount2 = () => store.dispatch(ActionTypes.ADD_COUNT_2, 1)
    const minusCount2 = () => store.dispatch(ActionTypes.MINUS_COUNT_2, 1)

    return {
      count1,
      count2,
      addCount1,
      minusCount1,
      addCount2,
      minusCount2,
    }
  },
}
</script>

<style scoped>
.count {
  margin-right: 24px;
}
.number {
  font-size: 2rem;
}
button {
  margin-left: 8px;
}
</style>
