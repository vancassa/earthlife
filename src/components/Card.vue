<template>
  <div class="card">
    <div class="current-card" :class="cardType + '-card'">
        <h1> {{ actionItem ? actionItem.category : '' }} </h1>
        <!-- <hr/> -->
        <img class="current-card-image" v-if="actionItem.linkImage" v-bind:src="actionItem.linkImage" />
        <div class="add-space" v-else></div>
        <p class="current-card-message">{{ actionItem.text }}</p>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    actionItem: Object,
    cardType: String
  }
};
</script>

<style>
.red-card,
.green-card,
.orange-card {
  border-radius: 10px;
  background-color: white;
}

.red-card {
  border: 20px solid #d45c86;
}

.green-card {
  border: 20px solid #53b687;
  transform: rotate(3deg);
}

.orange-card {
  border: solid 20px #f2a069;
  transform: rotate(-3deg);
}

.card {
  max-width: 300px;
  height: 450px;
  margin: 0 auto;
  /* padding: 0 40px; */
  display: flex;
  border-radius: 24px;
  position: absolute;
  left: 0;
  right: 0;
}

.current-card-image {
  width: 60%;
  margin-top: 30px;
}

.current-card h1 {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 100;
  padding-top: 27px;
  letter-spacing: 3px;
}

.current-card-message {
  margin: 0 auto;
  font-size: 17px;
  margin-bottom: 0px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 0 5px;
}
</style>
