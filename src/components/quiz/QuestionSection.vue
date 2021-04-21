<template>
  <page-title>
    <h3>
      {{ title }}
    </h3>
  </page-title>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
