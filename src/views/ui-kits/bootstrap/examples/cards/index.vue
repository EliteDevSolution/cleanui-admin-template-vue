<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Cards</strong>
    </h5>
    <div>
      <div class="card">
        <img
          width="100%"
          src="https://via.placeholder.com/1300x300/f0f2f4/e4e9f0"
          alt="Card cap"
          class="card-img-top"
        />
        <div class="card-body">
          <div class="card-title">Card title</div>
          <div class="card-subtitle">Card subtitle</div>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the cards
            content.
          </p>
          <button class="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
    <div class="mb-5">
      <div class="card">
        <div class="card-body">
          <div class="card-title">Card title</div>
          <div class="card-subtitle">Card subtitle</div>
        </div>
        <img
          width="100%"
          src="https://via.placeholder.com/1300x300/f0f2f4/e4e9f0"
          alt="Card cap"
          class="card-img-top"
        />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the cards
            content.
          </p>
          <a class="card-link">Card Link</a>
          <a class="card-link">Another Link</a>
        </div>
      </div>
    </div>
    <h5 class="mb-4">
      <strong>Colorful Cards</strong>
    </h5>
    <div class="row">
      <div class="col-lg-6">
        <div
          class="card text-white card-body"
          style="background-color: rgb(51, 51, 51); border-color: rgb(51, 51, 51);"
        >
          <div class="card-title">Special Title Treatment</div>
          <p
            class="card-text"
          >With supporting text below as a natural lead-in to additional content.</p>
          <button class="btn btn-secondary">Button</button>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-white card-body bg-primary">
          <div class="card-title">Special Title Treatment</div>
          <p
            class="card-text"
          >With supporting text below as a natural lead-in to additional content.</p>
          <button class="btn btn-light">Button</button>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-white card-body bg-success">
          <div class="card-title">Special Title Treatment</div>
          <p
            class="card-text"
          >With supporting text below as a natural lead-in to additional content.</p>
          <button class="btn btn-light">Button</button>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-white card-body bg-info">
          <div class="card-title">Special Title Treatment</div>
          <p
            class="card-text"
          >With supporting text below as a natural lead-in to additional content.</p>
          <button class="btn btn-light">Button</button>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-white card-body bg-warning">
          <div class="card-title">Special Title Treatment</div>
          <p
            class="card-text"
          >With supporting text below as a natural lead-in to additional content.</p>
          <button class="btn btn-light">Button</button>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-white card-body bg-danger">
          <div class="card-title">Special Title Treatment</div>
          <p
            class="card-text"
          >With supporting text below as a natural lead-in to additional content.</p>
          <button class="btn btn-light">Button</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapCardsExample',
}
</script>
