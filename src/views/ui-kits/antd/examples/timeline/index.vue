<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-timeline>
        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
        <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
        <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
      </a-timeline>
    </div>
    <h5 class="mb-3">
      <strong>Alternate</strong>
    </h5>
    <div class="mb-5">
      <a-timeline mode="alternate">
        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item color="green">Solve initial network problems 2015-09-01</a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </a-timeline-item>
        <a-timeline-item color="red">Network problems being solved 2015-09-01</a-timeline-item>
        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />Technical testing 2015-09-01
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdTimelineExample',
}
</script>
