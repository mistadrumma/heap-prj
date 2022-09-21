<template>
<h1>This post page {{post.id}}</h1>
</template>

<script>
export default {
  name: "_id",
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
}
</script>

<style scoped>

</style>
