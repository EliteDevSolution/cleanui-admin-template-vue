<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Media Object</strong>
    </h5>
    <div class="mb-5">
      <b-media>
        <b-img slot="aside" blank blank-color="#f0f2f4" width="64" alt="placeholder"></b-img>
        <h5 class="mt-0">Media Title</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
          ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p>
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <b-media>
          <b-img slot="aside" blank blank-color="#f0f2f4" width="64" alt="placeholder"></b-img>
          <h5 class="mt-0">Nested Media</h5>
          <p class="mb-0">
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
            faucibus.
          </p>
        </b-media>
      </b-media>
    </div>
    <div class="mb-5">
      <b-media right-align>
        <b-img slot="aside" blank blank-color="#f0f2f4" width="64" alt="placeholder"></b-img>
        <h5 class="mt-0">Media Title</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
          ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p>
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </b-media>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapMediaExample',
}
</script>
