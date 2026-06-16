<script setup lang="ts">
import type { Component } from "vue";

const props = withDefaults(
  defineProps<{ item: Component; level?: number }>(),
  {
    level: 0,
  }
);
</script>

<template>
  <template v-if="level > 0">
    <component
      :is="item"
      size="14"
      stroke-width="1.5"
      class="iconClass"
    ></component>
  </template>
  <template v-else>
    <component
      :is="item"
      size="20"
      stroke-width="1.5"
      class="iconClass"
    ></component>
  </template>
</template>
