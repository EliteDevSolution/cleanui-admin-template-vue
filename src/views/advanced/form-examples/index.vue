<template>
  <div>
    <div class="kit__utils__heading">
      <h5>Form Examples</h5>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="mb-4">
          <strong>Basic Form</strong>
        </h5>
        <a-form :form="form">
          <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Full Name">
            <a-input
              placeholder="Full Name"
              v-decorator="['fullName', {rules: [{ required: true, message: 'Please input your full name!' }]}]"
            />
          </a-form-item>
          <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Email Address">
            <a-input
              placeholder="Email Address"
              v-decorator="['fullName1', {rules: [{ required: true, message: 'Please input your email address!' }]}]"
            />
          </a-form-item>
          <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Budget">
            <a-input
              addonBefore="$"
              placeholder="Budget"
              v-decorator="['fullName2', {rules: [{ required: true, message: 'Please input your budget!' }]}]"
            />
          </a-form-item>
          <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Amount">
            <a-slider
              :marks="marks"
              tooltipVisible
              v-decorator="['budget', { initialValue: 38 } ]"
            />
          </a-form-item>
          <button type="submit" class="btn btn-success px-5">Send Data</button>
        </a-form>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="mb-4">
          <strong>Inline Form</strong>
        </h5>
        <a-form :form="form" layout="inline">
          <a-form-item>
            <a-input placeholder="Coins Amount" addonBefore="$" addonAfter=".00" />
          </a-form-item>
          <a-form-item>
            <a-input placeholder="8 Digit Pin" addonBefore="$" />
          </a-form-item>
          <button type="button" class="btn btn-success mt-1 mb-1">Confirm Transaction</button>
        </a-form>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="mb-4">
          <strong>Two Columns</strong>
        </h5>
        <a-form :form="form" layout="vertical">
          <div class="row">
            <div class="col-md-6">
              <a-form-item label="Email">
                <a-input placeholder="Email" />
              </a-form-item>
            </div>
            <div class="col-md-6">
              <a-form-item label="Password">
                <a-input placeholder="Password" />
              </a-form-item>
            </div>
            <div class="col-md-6">
              <a-form-item label="Adress">
                <a-input placeholder="1234 Main St." />
              </a-form-item>
            </div>
            <div class="col-md-6">
              <a-form-item label="Adress 2">
                <a-input placeholder="Apartment, studio, or floor" />
              </a-form-item>
            </div>
            <div class="col-md-6">
              <a-form-item label="City">
                <a-input />
              </a-form-item>
            </div>
            <div class="col-md-4">
              <a-form-item label="State">
                <a-cascader
                  v-decorator="[
                  'residence',
                  {
                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                    rules: [{ type: 'array', message: 'Please select your habitual residence!' }],
                  }
                  ]"
                  :options="residences"
                />
              </a-form-item>
            </div>
            <div class="col-md-2">
              <a-form-item label="Zip">
                <a-input />
              </a-form-item>
            </div>
            <div class="col-12">
              <a-form-item>
                <a-upload-dragger>
                  <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                  </p>
                  <p class="ant-upload-text">Click or drag file to this area to upload</p>
                  <p
                    class="ant-upload-hint"
                  >Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                </a-upload-dragger>
              </a-form-item>
            </div>
            <div class="col-12">
              <a-form-item>
                <a-checkbox
                  default-checked
                >I CONSENT TO HAVING MDTK SOFT COLLECT MY PERSONAL DETAILS.</a-checkbox>
              </a-form-item>
              <a-form-item>
                <button type="button" class="btn btn-light px-5">Sign in</button>
              </a-form-item>
            </div>
          </div>
        </a-form>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="mb-4">
          <strong>Validation & Background</strong>
        </h5>
        <div class="bg-light rounded-lg p-5">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <a-form>
                <a-form-item
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  label="Fail"
                  validate-status="error"
                  help="Should be combination of numbers & alphabets"
                >
                  <a-input placeholder="unavailable choice" />
                </a-form-item>

                <a-form-item
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  label="Warning"
                  validate-status="warning"
                >
                  <a-input placeholder="Warning" />
                </a-form-item>

                <a-form-item
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  label="Validating"
                  has-feedback
                  validate-status="validating"
                  help="The information is being validated..."
                >
                  <a-input id="validating" placeholder="I'm the content is being validated" />
                </a-form-item>

                <a-form-item
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  label="Success"
                  has-feedback
                  validate-status="success"
                >
                  <a-input id="success" placeholder="I'm the content" />
                </a-form-item>

                <a-form-item
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  label="Warning"
                  has-feedback
                  validate-status="warning"
                >
                  <a-input id="warning" placeholder="Warning" />
                </a-form-item>

                <a-form-item
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  label="Fail"
                  has-feedback
                  validate-status="error"
                  help="Should be combination of numbers & alphabets"
                >
                  <a-input id="error" placeholder="unavailable choice" />
                </a-form-item>

                <a-form-item
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  label="Success"
                  has-feedback
                  validate-status="success"
                >
                  <a-date-picker style="width: 100%" />
                </a-form-item>

                <a-form-item
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  label="Warning"
                  has-feedback
                  validate-status="warning"
                >
                  <a-time-picker style="width: 100%" />
                </a-form-item>

                <a-form-item
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  label="Error"
                  has-feedback
                  validate-status="error"
                >
                  <a-select default-value="1">
                    <a-select-option value="1">Option 1</a-select-option>
                    <a-select-option value="2">Option 2</a-select-option>
                    <a-select-option value="3">Option 3</a-select-option>
                  </a-select>
                </a-form-item>

                <a-form-item
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  label="Validating"
                  has-feedback
                  validate-status="validating"
                  help="The information is being validated..."
                >
                  <a-cascader :default-value="['1']" :options="[]" />
                </a-form-item>

                <a-form-item
                  label="inline"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  style="margin-bottom:0;"
                >
                  <a-form-item
                    validate-status="error"
                    help="Please select the correct date"
                    :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
                  >
                    <a-date-picker style="width: 100%" />
                  </a-form-item>
                  <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">-</span>
                  <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
                    <a-date-picker style="width: 100%" />
                  </a-form-item>
                </a-form-item>
                <a-form-item
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  label="Success"
                  has-feedback
                  validate-status="success"
                >
                  <a-input-number style="width: 100%" />
                </a-form-item>
                <div class="border-top pt-4">
                  <a-form-item>
                    <a-button type="primary" htmlType="submit">Submit</a-button>
                  </a-form-item>
                </div>
              </a-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const labelCol = {
  xs: { span: 24 },
  sm: { span: 4 },
}
const wrapperCol = {
  xs: { span: 24 },
  sm: { span: 12 },
}
const marks = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  100: '100',
}
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]
export default {
  data: function () {
    return {
      form: this.$form.createForm(this),
      labelCol,
      wrapperCol,
      marks,
      residences,
    }
  },
}
</script>
