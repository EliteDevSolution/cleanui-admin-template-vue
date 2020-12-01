<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Jumbotron</strong>
    </h5>
    <b-jumbotron
      lead="This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."
    >
      <h1 slot="header" class="font-size-70">
        <strong>Hello, world!</strong>
      </h1>
      <hr class="my-2" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <b-button variant="primary" href="#">Learn More</b-button>
    </b-jumbotron>
    <h5 class="mb-4">
      <strong>Fluid Jumbotron</strong>
    </h5>
    <b-jumbotron
      lead="This is a modified jumbotron that occupies the entire horizontal space of its parent."
    >
      <h1 slot="header" class="font-size-70">
        <strong>Fluid jumbotron</strong>
      </h1>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapJumbotronExample',
}
</script>
