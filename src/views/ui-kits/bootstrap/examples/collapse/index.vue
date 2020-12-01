<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Collapse</strong>
    </h5>
    <div class="mb-5">
      <div class="accordion">
        <div class="card">
          <div class="card-header" v-b-toggle.headingOne>
            <div class="card-title">
              <span class="accordion-indicator pull-right">
                <i class="plus fe fe-plus"></i>
                <i class="minus fe fe-minus"></i>
              </span>
              <a>Collapsible Group Item #1</a>
            </div>
          </div>
          <b-collapse id="headingOne">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
              squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
              shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
              proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
            </div>
          </b-collapse>
        </div>
        <div class="card">
          <div class="card-header" v-b-toggle.headingTwo>
            <div class="card-title">
              <span class="accordion-indicator pull-right">
                <i class="plus fe fe-plus"></i>
                <i class="minus fe fe-minus"></i>
              </span>
              <a>Collapsible Group Item #2</a>
            </div>
          </div>
          <b-collapse id="headingTwo">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
              squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
              shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
              proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
            </div>
          </b-collapse>
        </div>
        <div class="card">
          <div class="card-header" v-b-toggle.headingThree>
            <div class="card-title">
              <span class="accordion-indicator pull-right">
                <i class="plus fe fe-plus"></i>
                <i class="minus fe fe-minus"></i>
              </span>
              <a>Collapsible Group Item #3</a>
            </div>
          </div>
          <b-collapse id="headingThree">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
              squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
              shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
              proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
    <h5 class="mb-4">
      <strong>Target Collapse</strong>
    </h5>
    <div class="mb-3">
      <button type="button" class="btn btn-outline-primary" v-b-toggle.collapseExample>Toggle</button>
    </div>
    <div class="mb-5">
      <b-collapse id="collapseExample">
        <div class="card">
          <div class="card-body">You can collapse this card by clicking Toggle</div>
        </div>
      </b-collapse>
    </div>
  </div>
  <!-- <div>
    <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <p class="card-text">Collapse contents Here</p>
        <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
        <b-collapse id="collapse-1-inner" class="mt-2">
          <b-card>Hello!</b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
  </div>-->
</template>
<script>
export default {
  name: 'KitBootstrapCollapseExample',
}
</script>
