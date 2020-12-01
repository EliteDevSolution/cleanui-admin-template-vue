<template>
  <div>
    <div class="row">
      <div class="col-xl-4 col-lg-12">
        <div class="card">
          <div class="card-body">
            <kit-general-10v1 />
          </div>
        </div>
        <div class="card text-white bg-primary">
          <kit-general-12v1 />
        </div>
        <div class="card">
          <div class="card-body">
            <kit-general-1 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <kit-list-19 />
          </div>
        </div>
      </div>
      <div class="col-xl-8 col-lg-12">
        <div class="card">
          <div class="card-header card-header-flex flex-column">
            <div class="d-flex flex-wrap border-bottom pt-3 pb-4 mb-3">
              <div class="mr-5">
                <div class="text-dark font-size-18 font-weight-bold">David Beckham</div>
                <div class="text-gray-6">@david100</div>
              </div>
              <div class="mr-5 text-center">
                <div class="text-dark font-size-18 font-weight-bold">100</div>
                <div class="text-gray-6">Posts</div>
              </div>
              <div class="mr-5 text-center">
                <div class="text-dark font-size-18 font-weight-bold">17,256</div>
                <div class="text-gray-6">Followers</div>
              </div>
            </div>
            <a-tabs defaultActiveKey="1" class="kit-tabs kit-tabs-bold" @change="callback">
              <a-tab-pane tab="Agent Wall" key="1" />
              <a-tab-pane tab="Messages" key="2" />
              <a-tab-pane tab="Settings" key="3" />
            </a-tabs>
          </div>
          <div class="card-body">
            <div v-if="activeKey === '1'">
              <kit-general-15 />
              <kit-general-15 />
            </div>
            <kit-general-14 v-if="activeKey === '2'" />
            <a-form :form="form" v-if="activeKey === '3'">
              <h5 class="text-black mt-2 mb-3">
                <strong>Personal Information</strong>
              </h5>
              <div class="row">
                <div class="col-lg-6">
                  <a-form-item label="Username">
                    <a-input placeholder="Username" v-decorator="['username']" />
                  </a-form-item>
                </div>
                <div class="col-lg-6">
                  <a-form-item label="Email">
                    <a-input placeholder="Email" v-decorator="['discount']" />
                  </a-form-item>
                </div>
              </div>
              <h5 class="text-black mt-2 mb-3">
                <strong>New Password</strong>
              </h5>
              <div class="row">
                <div class="col-lg-6">
                  <a-form-item label="Password">
                    <a-input placeholder="Password" v-decorator="['password']" />
                  </a-form-item>
                </div>
                <div class="col-lg-6">
                  <a-form-item label="Confirm Password">
                    <a-input placeholder="Confirm Password" v-decorator="['confirmPassword']" />
                  </a-form-item>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <h5 class="text-black mt-2 mb-3">
                    <strong>Profile Avatar</strong>
                  </h5>
                  <a-form-item>
                    <a-upload
                      name="file"
                      :multiple="true"
                      action="//jsonplaceholder.typicode.com/posts/"
                    >
                      <a-button>
                        <a-icon type="upload" />Click to Upload
                      </a-button>
                    </a-upload>
                  </a-form-item>
                </div>
                <div class="col-lg-6">
                  <h5 class="text-black mt-2 mb-3">
                    <strong>Profile Background</strong>
                  </h5>
                  <a-form-item>
                    <a-upload
                      name="file"
                      :multiple="true"
                      action="//jsonplaceholder.typicode.com/posts/"
                    >
                      <a-button>
                        <a-icon type="upload" />Click to Upload
                      </a-button>
                    </a-upload>
                  </a-form-item>
                </div>
              </div>
              <div class="form-actions mt-0">
                <a-button style="width: 150px;" type="primary" htmlType="submit" class="mr-3">Submit</a-button>
                <a-button htmlType="submit">Cancel</a-button>
              </div>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import KitGeneral1 from '@/components/kit/widgets/General/1/index'
import KitGeneral10v1 from '@/components/kit/widgets/General/10v1/index'
import KitGeneral12v1 from '@/components/kit/widgets/General/12v1/index'
import KitGeneral14 from '@/components/kit/widgets/General/14/index'
import KitGeneral15 from '@/components/kit/widgets/General/15/index'
import KitList19 from '@/components/kit/widgets/Lists/19/index'
export default {
  components: {
    KitGeneral1,
    KitGeneral10v1,
    KitGeneral12v1,
    KitGeneral14,
    KitGeneral15,
    KitList19,
  },
  data() {
    return {
      activeKey: '1',
      form: this.$form.createForm(this),
    }
  },
  methods: {
    callback: function (key) {
      this.activeKey = key
    },
  },
}
</script>
