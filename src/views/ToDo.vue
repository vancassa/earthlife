<template>
  <div class="todo">
   <h1>My Earthlife To-do List</h1>
   <div class="button-wrapper">
        <a class="button-links">
          <v-icon name="envelope"/>
        </a>
        <a class="button-links">
          <v-icon name="copy"/>
        </a>
  </div>
  <div class="checklist-wrapper">
    <div class="checklist-items">
      <input type="checkbox"/>
      <label>Grab a reusable straw and takeaway container with cutlery.</label>
    </div>
    <div class="checklist-items">
      <input type="checkbox"/>
      <label>Start a compost or use FoodScape collective to find a compost collector.</label>
    </div>
    <div class="checklist-items">
      <input type="checkbox"/>
      <label>Request no junk mail</label>
      <div class="side-text-wrapper">
        <v-icon name="arrow-right"/>
        <span>Little Green Dot: End junk mail today</span>
      </div>
    </div>
    <div class="checklist-items">
      <input type="checkbox"/>
      <label>Refuse items with lots of packaging and shop at packaging-free options like wet markets, zero waste stores, etc.</label>
    </div>
  </div>
  </div>
</template>

<script>
  export default{
    name:'ToDo',
    components: {

    },
  }
</script>

<style>
.todo {
  background-image: url('../assets/Group 2.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain%;
  width: 100%;
  min-height: 100%;
}

@media (max-width: 500px) {
  
}
</style>
