<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>
          <a href>Application Center</a>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <a href>Application List</a>
        </a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <h5 class="mb-3">
      <strong>With an Icon</strong>
    </h5>
    <div class="mb-5">
      <a-breadcrumb>
        <a-breadcrumb-item href>
          <a-icon type="home" />
        </a-breadcrumb-item>
        <a-breadcrumb-item href>
          <a-icon type="user" />
          <span>Application List</span>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Application</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdBreadcrumbExample',
}
</script>
