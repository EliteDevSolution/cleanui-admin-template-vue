<template>
  <div>
    <div class="cui__utils__heading">
      <strong>Today Statistics</strong>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <cui-chart-11 />
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <cui-chart-11v1 />
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <cui-chart-11v2 />
        </div>
      </div>
    </div>
    <div class="cui__utils__heading">
      <strong>Last Month Statistics</strong>
    </div>
    <div class="row">
      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <cui-chart-4 />
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <cui-chart-4v1 />
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <cui-chart-4v2 />
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <cui-chart-4v3 />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Recently Referrals</strong>
            </div>
            <div class="text-muted">Block with important Recently Referrals information</div>
          </div>
          <div class="card-body">
            <a-table :columns="tableColumns" :dataSource="tableData" :pagination="false"></a-table>
          </div>
        </div>
      </div>
    </div>
    <div class="cui__utils__heading mb-3">
      <strong>Your Cards (3)</strong>
      <a-button class="ml-3">View All</a-button>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <cui-general-17 />
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <cui-general-17v1 />
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <cui-general-17v2 />
        </div>
      </div>
    </div>
    <div class="cui__utils__heading mb-3">
      <strong>Your Accounts (6)</strong>
      <a-button class="ml-3">View All</a-button>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <cui-general-18 />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <cui-general-18v1 />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <cui-general-18v1 />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <cui-general-18 />
        </div>
      </div>
    </div>
    <div class="cui__utils__heading mb-3">
      <strong>Recent Transactions (167)</strong>
      <a-button class="ml-3">View All</a-button>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <cui-general-6 />
        </div>
        <div class="card">
          <cui-general-6v1 />
        </div>
        <div class="card">
          <cui-general-6 />
        </div>
        <div class="card">
          <cui-general-6v1 />
        </div>
        <div class="text-center pb-5">
          <a-button type="primary" class="width-200" loading>Load More...</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CuiChart4 from '@/components/kit/widgets/Charts/4'
import CuiChart4v1 from '@/components/kit/widgets/Charts/4v1'
import CuiChart4v2 from '@/components/kit/widgets/Charts/4v2'
import CuiChart4v3 from '@/components/kit/widgets/Charts/4v3'
import CuiChart11 from '@/components/kit/widgets/Charts/11'
import CuiChart11v1 from '@/components/kit/widgets/Charts/11v1'
import CuiChart11v2 from '@/components/kit/widgets/Charts/11v2'
import CuiGeneral17 from '@/components/kit/widgets/General/17'
import CuiGeneral17v1 from '@/components/kit/widgets/General/17v1'
import CuiGeneral17v2 from '@/components/kit/widgets/General/17v2'
import CuiGeneral18 from '@/components/kit/widgets/General/18'
import CuiGeneral18v1 from '@/components/kit/widgets/General/18v1'
import CuiGeneral6 from '@/components/kit/widgets/General/6'
import CuiGeneral6v1 from '@/components/kit/widgets/General/6v1'

import data from './data.json'

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Office',
    dataIndex: 'office',
    key: 'office',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    key: 'salary',
    sorter: (a, b) => a.salary - b.salary,
  },
]

export default {
  components: {
    CuiChart4,
    CuiChart4v1,
    CuiChart4v2,
    CuiChart4v3,
    CuiChart11,
    CuiChart11v1,
    CuiChart11v2,
    CuiGeneral17,
    CuiGeneral17v1,
    CuiGeneral17v2,
    CuiGeneral18,
    CuiGeneral18v1,
    CuiGeneral6,
    CuiGeneral6v1,
  },
  data() {
    return {
      tableData: data.tableData,
      tableColumns,
    }
  },

}
</script>
