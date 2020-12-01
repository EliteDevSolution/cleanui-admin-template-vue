<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Navbar</strong>
    </h5>
    <div class="mb-5">
      <nav class="navbar navbar-expand-md bg-light">
        <a href="/" class="navbar-brand">reactstrap</a>
        <button aria-label="Toggle navigation" type="button" class="navbar-toggler">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" aria-expanded="false">
          <ul class="ml-auto navbar-nav">
            <li class="nav-item">
              <a href="/components/" class="nav-link">Components</a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/reactstrap/reactstrap" class="nav-link">GitHub</a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/reactstrap/reactstrap" class="nav-link">Options</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <h5 class="mb-4">
      <strong>Navbar Toggler</strong>
    </h5>
    <div class="mb-5">
      <nav class="navbar bg-faded">
        <a href="/" class="mr-auto navbar-brand">reactstrap</a>
        <button aria-label="Toggle navigation" type="button" class="mr-2 navbar-toggler">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse show navbar-collapse" aria-expanded="true">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/components/" class="nav-link">Components</a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/reactstrap/reactstrap" class="nav-link">GitHub</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapNavbarExample',
}
</script>
