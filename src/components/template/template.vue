<template>
  <div>
    我是temp子组件，当前页是{{pageName}}
  </div>
</template>

<script>
export default {
  props: ["pageName"],
};
</script>
