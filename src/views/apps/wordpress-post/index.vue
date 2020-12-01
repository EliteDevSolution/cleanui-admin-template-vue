<template>
  <div>
    <div class="row">
      <div class="col-xl-9 col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="mb-2">
              <a
                href="javascript: void(0);"
                class="text-dark font-size-24 font-weight-bold"
              >[Feature Request] How to enable custom font that comes from svg #2460</a>
            </div>
            <div class="mb-3">
              <a class="font-weight-bold" href="javascript: void(0);">zxs2162</a> wrote this post 12
              days ago · 0 comments
            </div>
            <div class="mb-4">
              <a
                href="javascript: void(0);"
                class="badge text-blue text-uppercase bg-light font-size-12 mr-2"
              >Umi</a>
              <a
                href="javascript: void(0);"
                class="badge text-blue text-uppercase bg-light font-size-12 mr-2"
              >React-framework</a>
              <a
                href="javascript: void(0);"
                class="badge text-blue text-uppercase bg-light font-size-12 mr-2"
              >Umijs</a>
            </div>
            <div>
              <img class="img-fluid mb-4" src="resources/images/content/photos/1.jpeg" alt="Sea" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil laborum est perferendis
                consectetur corporis esse labore minima molestias, exercitationem consequuntur! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Nihil laborum est perferendis
                consectetur corporis esse labore minima molestias, exercitationem consequuntur! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Nihil laborum est perferendis
                consectetur corporis esse labore minima molestias, exercitationem consequuntur! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Nihil laborum est perferendis
                consectetur corporis esse labore minima molestias, exercitationem consequuntur!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil laborum est perferendis
                consectetur corporis esse labore minima molestias, exercitationem consequuntur! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Nihil laborum est perferendis
                consectetur corporis esse labore minima molestias, exercitationem consequuntur!
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h6 class="mb-4 text-uppercase">
              <strong>Comments (76)</strong>
            </h6>
            <kit-general-15 />
            <a href="javascript: void(0);" class="d-block btn btn-light text-primary mt-3">Load More</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center flex-wrap border-bottom mb-3 pb-3">
              <div
                class="kit__utils__avatar kit__utils__avatar--size110 mr-3 mb-3 align-items-center flex-shrink-0"
              >
                <img src="resources/images/avatars/5.jpg" alt="Mary Stanform" />
              </div>
              <div class="mb-3">
                <div class="font-weight-bold font-size-16 text-dark mb-2">Trinity Parson</div>
                <p
                  class="font-italic"
                >“I hope you enjoy reading this as much as I enjoyed writing this.”</p>
                <a href="#" class="btn btn-sm btn-primary">View Profile</a>
              </div>
            </div>
            <h5 class="text-dark mb-4">Leave a comment</h5>
            <a-form :form="form">
              <a-form-item>
                <a-input
                  placeholder="Username"
                  v-decorator="['username', {rules: [{ required: true, message: 'Please input your username!' }]}]"
                >
                  <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25);" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input placeholder="Email" v-decorator="['email']">
                  <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25);" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-textarea :rows="3" placeholder="Your message"></a-textarea>
              </a-form-item>
              <a-form-item>
                <a-button class="mr-2" type="primary" style="width: 200px;">
                  <i class="fa fa-send mr-2"></i> Send
                </a-button>
                <a-upload>
                  <a-button>
                    <a-icon type="upload" />Attach File
                  </a-button>
                </a-upload>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-12">
        <div class="pb-4 mb-3 border-bottom">
          <label class="font-weight-bold d-block" for="search-input">
            <span class="mb-2 d-inline-block">Search Post</span>
            <input
              class="form-control width-100p"
              type="text"
              placeholder="Search post..."
              id="search-input"
            />
          </label>
        </div>
        <div class="pb-4 mb-3 border-bottom">
          <label class="font-weight-bold d-block" for="subscribe-input">
            <span class="mb-2 d-inline-block">Subscribe</span>
            <input
              class="form-control width-100p"
              type="text"
              id="subscribe-input"
              placeholder="Enter your email..."
            />
          </label>
        </div>
        <div class="pb-4 mb-3 border-bottom">
          <div class="font-weight-bold mb-2">Categories</div>
          <div>
            <a
              href="javascript: void(0);"
              class="badge text-blue text-uppercase bg-light font-size-12 mr-2"
            >Umi</a>
            <a
              href="javascript: void(0);"
              class="badge text-blue text-uppercase bg-light font-size-12 mr-2"
            >React-framework</a>
            <a
              href="javascript: void(0);"
              class="badge text-blue text-uppercase bg-light font-size-12 mr-2"
            >Umijs</a>
          </div>
        </div>
        <div class="pb-4 mb-3 border-bottom">
          <div class="font-weight-bold mb-3">Latest Posts</div>
          <kit-list-15 />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import KitGeneral15 from '@/components/kit/widgets/General/15/index'
import KitList15 from '@/components/kit/widgets/Lists/15/index'

export default {
  components: {
    KitGeneral15,
    KitList15,
  },
  data: function () {
    return {
      form: this.$form.createForm(this),
    }
  },
}
</script>
