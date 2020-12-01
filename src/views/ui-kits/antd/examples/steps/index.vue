<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-steps :current="1">
        <a-step>
          <!-- <span slot="title">Finished</span> -->
          <template slot="title">Finished</template>
          <span slot="description">This is a description.</span>
        </a-step>
        <a-step title="In Progress" description="This is a description." />
        <a-step title="Waiting" description="This is a description." />
      </a-steps>
    </div>
    <h5 class="mb-3">
      <strong>With Icons</strong>
    </h5>
    <div class="mb-5">
      <a-steps>
        <a-step status="finish" title="Login">
          <a-icon type="user" slot="icon" />
        </a-step>
        <a-step status="finish" title="Verification">
          <a-icon type="solution" slot="icon" />
        </a-step>
        <a-step status="process" title="Pay">
          <a-icon type="loading" slot="icon" />
        </a-step>
        <a-step status="wait" title="Done">
          <a-icon type="smile-o" slot="icon" />
        </a-step>
      </a-steps>
    </div>
    <h5 class="mb-3">
      <strong>Centered</strong>
    </h5>
    <div class="mb-5">
      <a-steps progressDot :current="1">
        <a-step title="Finished" description="This is a description." />
        <a-step title="In Progress" description="This is a description." />
        <a-step title="Waiting" description="This is a description." />
      </a-steps>
    </div>
    <h5 class="mb-3">
      <strong>Vertical</strong>
    </h5>
    <div class="mb-5">
      <a-steps direction="vertical" :current="1">
        <a-step title="Finished" description="This is a description." />
        <a-step title="In Progress" description="This is a description." />
        <a-step title="Waiting" description="This is a description." />
      </a-steps>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdStepsExample',
}
</script>
