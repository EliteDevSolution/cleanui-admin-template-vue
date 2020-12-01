<template>
  <div>
    <div>
      <vl-map
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
        data-projection="EPSG:4326"
        style="height: 300px"
      >
        <vl-view
          :min-zoom.sync="minZoom"
          :zoom.sync="zoom"
          :center.sync="center"
          :rotation.sync="rotation"
        ></vl-view>
        <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
      </vl-map>
    </div>
    <div class="mb-4">
      <a-table :columns="columns" :dataSource="data" :pagination="false" :class="$style.table">
        <template slot="location" slot-scope="text">
          <a href="javascript: void(0);" class="text-blue">{{text}}</a>
        </template>
        <template slot="value" slot-scope="text">
          <span class="font-weight-bold">{{text}}</span>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import data from './data.json'
export default {
  name: 'KitChart7',
  data: function () {
    const columns = [
      {
        title: 'Action name',
        dataIndex: 'actionName',
        className: 'bg-transparent text-gray-6',
      },
      {
        title: 'Location',
        dataIndex: 'location',
        className: 'bg-transparent',
        scopedSlots: { customRender: 'location' },
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        className: 'text-left text-gray-6 bg-transparent',
      },
      {
        title: 'Value',
        dataIndex: 'value',
        className: 'text-right bg-transparent text-gray-6',
        scopedSlots: { customRender: 'value' },
      },
    ]
    return {
      data,
      columns,
      zoom: 1,
      center: [0, 0],
      rotation: 0,
      geolocPosition: undefined,
      minZoom: 1,
    }
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
