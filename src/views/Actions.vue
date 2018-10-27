<template>
<div>
  <div class="wrapper">
    <div class="back-button">
      <v-icon name="arrow-left"/>
      <a href="#/results">Results</a>
    </div>
    <ActionIntro class="action-intro"></ActionIntro>
  </div>
</div>
</template>

<script type="text/javascript">

import ActionIntro from '@/components/ActionIntro.vue'

export default {
    name: 'actions',
    components: {
      ActionIntro
    }
  }
</script>

<style scoped>
.wrapper {
  padding-top: 100px;
  margin: 0 auto;
}

.back-button{
  padding: 0 150px;
  color: #919EAB;
  font-family: Poppins;
  font-size: 20px;
}

.back-button a{
  text-decoration: none;
  color: #919EAB;
  padding-left: 8px;
}

.action-intro {
  padding-top: 100px;
  margin-left: 0px;
}
</style>