<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Card header
      </p>
      <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
      </button>
    </header>
    <div class="card-content">
      <p class="title is-3">
        Это большой заголовок поста
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique velit mauris, ultricies facilisis ligula efficitur at. Aliquam vel finibus ante. Cras viverra sem sed sodales lobortis. Fusce nec fermentum felis. Nulla pellentesque sagittis hendrerit. Donec pellentesque ornare neque, lobortis pellentesque justo. Nunc dictum sit amet ipsum sed condimentum</p>
    </div>
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://leonardo.osnova.io/9f948bac-5a41-5b35-bb10-330f0dad5f98/-/preview/1100/-/format/webp/" alt="Placeholder image">
      </figure>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Save</a>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>

  </div>
</template>

<script>
export default {
  name: "Postlist"
}
</script>

<style scoped>

</style>
