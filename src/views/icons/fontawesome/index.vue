<template>
  <div>
    <div class="kit__utils__heading">
      <h5>
        <span class="mr-3">FontAwesome</span>
        <a
          href="http://fontawesome.io/"
          target="_blank"
          class="btn btn-sm btn-light"
        >
          Official Documentation
          <i class="fe fe-corner-right-up"/>
        </a>
      </h5>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
            <h5 class="text-black">
              <strong>The iconic font</strong>
            </h5>
            <p class="text-muted">
              The complete set of 634 icons in Font Awesome 4.6.3
              <br />
              License: MIT License. You can use it for commercial projects, open source
              projects, or really just about whatever you want
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 offset-xl-3">
            <div class="text-center" v-for="iconsSet in icons" :key="iconsSet.setName">
              <h3 class="text-block mt-5 mb-4">
                <strong>{{iconsSet.setName}}</strong>
              </h3>
              <ul class="kit__utils__iconPresent list-unstyled">
                <a-tooltip v-for="icon in iconsSet.icons" :key="icon">
                  <template slot="title">
                    fa {{icon}}
                  </template>
                  <li>
                    <i :class="['fa', icon]"/>
                  </li>
                </a-tooltip>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import icons from './data.json'
export default {
  data: function () {
    return {
      icons,
    }
  },
}
</script>
