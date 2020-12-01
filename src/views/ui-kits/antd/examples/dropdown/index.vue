<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Basic</strong>
        </h5>
        <div class="mb-5">
          <a-dropdown>
            <a class="ant-dropdown-link" href="#">
              Hover me
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
        <h5 class="mb-3">
          <strong>Placement</strong>
        </h5>
        <div class="mb-5">
          <template v-for="(placement, index) in placements">
            <a-dropdown :key="index" :placement="placement" class="mr-3 mb-3">
              <a-button>{{placement}}</a-button>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.alipay.com/"
                  >1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.taobao.com/"
                  >2nd menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.tmall.com/"
                  >3rd menu item</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
            <br :key="index" v-if="index === 2" />
          </template>
        </div>
      </div>
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Context Menu</strong>
        </h5>
        <div class="mb-5">
          <a-dropdown :trigger="['contextmenu']">
            <div
              class="bg-light"
              style="text-align: center; height: 200px; line-height: 200px;"
            >Right Click on Me</div>
            <a-menu slot="overlay" style="width: 150px">
              <a-menu-item key="1">1st menu item</a-menu-item>
              <a-menu-item key="2">2nd menu item</a-menu-item>
              <a-menu-item key="3">3rd menu item</a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdDropdownExample',
  data() {
    return {
      placements: [
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
        'topLeft',
        'topCenter',
        'topRight',
      ],
    }
  },
}
</script>
