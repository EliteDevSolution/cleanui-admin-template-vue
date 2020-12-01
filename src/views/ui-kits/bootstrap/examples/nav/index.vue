<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Navs</strong>
    </h5>
    <div class="mb-5">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Another Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" disabled>Disabled Link</a>
        </li>
      </ul>
    </div>
    <h5 class="mb-4">
      <strong>Centered Navs</strong>
    </h5>
    <div class="mb-5">
      <ul class="justify-content-center nav">
        <a class="nav-link">Link</a>
        <a class="nav-link">Link</a>
        <a class="nav-link">Another Link</a>
        <a class="nav-link disabled" disabled>Disabled Link</a>
      </ul>
    </div>
    <h5 class="mb-4">
      <strong>Right Aligned Navs</strong>
    </h5>
    <div class="mb-5">
      <ul class="justify-content-end nav">
        <a class="nav-link">Link</a>
        <a class="nav-link">Link</a>
        <a class="nav-link">Another Link</a>
        <a class="nav-link disabled" disabled>Disabled Link</a>
      </ul>
    </div>
    <h5 class="mb-4">
      <strong>Vertical Navs</strong>
    </h5>
    <div class="mb-5">
      <ul class="nav flex-column">
        <a class="nav-link">Link</a>
        <a class="nav-link">Link</a>
        <a class="nav-link">Another Link</a>
        <a class="nav-link disabled" disabled>Disabled Link</a>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapNavExample',
}
</script>
