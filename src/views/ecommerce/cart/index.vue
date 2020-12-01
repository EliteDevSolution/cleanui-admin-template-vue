<template>
  <div>
    <div class="cui__utils__heading">
      <strong>Ecommerce: Cart</strong>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="mb-4 text-uppercase">
          <strong>Order items</strong>
        </h6>
        <div class="mb-4">
          <a-table :columns="columns" :dataSource="data" :pagination="false">
            <a
              href="javascript: void(0);"
              slot="description"
              slot-scope="text"
              class="btn btn-sm btn-light"
            >{{text}}</a>
            <a-input-number
              slot="quantity"
              slot-scope="value"
              size="small"
              :min="1"
              :defaultValue="+value"
            />
            <a href="javascript: void(0);" class="btn btn-sm btn-light" slot="actions">
              <i class="fe fe-trash mr-1" /> Remove
            </a>
          </a-table>
        </div>
        <h6 class="mb-4 text-uppercase">
          <strong>Shipment details</strong>
        </h6>
        <a-form :form="form">
          <div class="row mb-4">
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-6">
                  <a-form-item label="Email">
                    <a-input
                      placeholder="Email"
                      v-decorator="['email', {rules: [{required: true, message: 'Please input your Email!'}]}]"
                    />
                  </a-form-item>
                </div>
                <div class="col-md-6">
                  <a-form-item label="Phone Number">
                    <a-input
                      placeholder="Phone Number"
                      v-decorator="['phoneNumber', {rules: [{required: true, message: 'Please input your Phone Number!'}]}]"
                    />
                  </a-form-item>
                </div>
                <div class="col-md-6">
                  <a-form-item label="Name">
                    <a-input
                      placeholder="Name"
                      v-decorator="['name', {rules: [{required: true, message: 'Please input your Name!'}]}]"
                    />
                  </a-form-item>
                </div>
                <div class="col-md-6">
                  <a-form-item label="Surname">
                    <a-input
                      placeholder="Surname"
                      v-decorator="['surname', {rules: [{required: true, message: 'Please input your Surname!'}]}]"
                    />
                  </a-form-item>
                </div>
                <div class="col-md-12">
                  <a-form-item label="City">
                    <a-input
                      placeholder="City"
                      v-decorator="['city', {rules: [{required: true, message: 'Please input your City!'}]}]"
                    />
                  </a-form-item>
                </div>
                <div class="col-md-12 mb-3">
                  <a-form-item label="Adress">
                    <a-input
                      placeholder="Adress"
                      v-decorator="['city', {rules: [{required: true, message: 'Please input your Adress!'}]}]"
                    />
                  </a-form-item>
                </div>
              </div>
              <h6 class="mb-4 text-uppercase">
                <strong>Payment details</strong>
              </h6>
              <div class="row">
                <div class="col-md-12">
                  <a-form-item label="Card Number">
                    <a-input
                      placeholder="Card Number"
                      v-decorator="['curdnum', {rules: [{required: true, message: 'Please input your Card Number!'}]}]"
                    >
                      <a-icon type="credit-card" slot="addonBefore" />
                    </a-input>
                  </a-form-item>
                </div>
                <div class="col-md-7">
                  <a-form-item label="Expiration Date">
                    <a-input
                      placeholder="Surname"
                      v-decorator="['expirationdate', {rules: [{required: true, message: 'Please input Card Expiration Date!'}]}]"
                    />
                  </a-form-item>
                </div>
                <div class="col-md-5">
                  <a-form-item label="Card CVC">
                    <a-input
                      placeholder="CVC"
                      v-decorator="['cardcvc', {rules: [{required: true, message: 'Please input Card CVC!'}]}]"
                    />
                  </a-form-item>
                </div>
                <div class="col-md-12">
                  <a-form-item label="Card Holder Name">
                    <a-input
                      placeholder="Name and Surname"
                      v-decorator="['cardholdername', {rules: [{required: true, message: 'Please input Card Holder Name!'}]}]"
                    />
                  </a-form-item>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <h4 class="text-black mb-3">
                <strong>General Info</strong>
              </h4>
              <h2>
                <i class="fa fa-cc-visa text-primary mr-1" />
                <i class="fa fa-cc-mastercard text-default mr-1" />
                <i class="fa fa-cc-amex text-default" />
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </div>
        </a-form>
        <div class="border-top text-dark font-size-18 pt-4 text-right">
          <p class="mb-1">
            Sub - Total amount:
            <strong class="font-size-24">$5,700.00</strong>
          </p>
          <p class="mb-1">
            VAT:
            <strong class="font-size-24">$57.00</strong>
          </p>
          <p class="mb-4">
            Grand Total:
            <strong class="font-size-36">$5,757.00</strong>
          </p>
          <a href="javascript: void(0);" class="btn btn-lg btn-success width-200 mb-2">Order Now</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from './data'
const columns = [
  {
    title: '#',
    dataIndex: 'number',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    scopedSlots: { customRender: 'description' },
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    scopedSlots: { customRender: 'quantity' },
    class: 'text-right',
  },
  {
    title: 'Unit Cost',
    dataIndex: 'unitcost',
    class: 'text-right',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    class: 'text-right',
  },
  {
    title: '',
    dataIndex: '',
    class: 'text-right',
    scopedSlots: { customRender: 'actions' },
  },
]
export default {
  data: function () {
    return {
      data,
      columns,
      form: this.$form.createForm(this),
    }
  },
}
</script>
