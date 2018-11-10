<template>
  <div class="todo">
    <div class="todo-main">
      <h1 class="todo-title">My Earthlife To-do List</h1>
      <div class="button-wrapper">
            <a class="button-links" :href="emailContent">
              <v-icon name="envelope"/>
            </a>
            <a class="button-links">
              <v-icon name="copy"/>
            </a>
      </div>
      <div class="checklist-wrapper">
        <div class="checklist-item">
          <input type="checkbox" id="cb1" class="checkbox"/><label for="cb1"></label>
          <div class="checkbox-text"><label>Grab a reusable straw and takeaway container with cutlery. Grab a reusable straw and takeaway container with cutlery.</label></div>
        </div>
        <div class="checklist-item-container">
        <div class="checklist-item" >
          <input type="checkbox" id="cb2" class="checkbox"/><label for="cb2"></label>
          <div class="checkbox-text"><label>Start a compost or use FoodScape collective to find a compost collector.</label></div>
        </div>
        </div>
        <div class="checklist-item-container">
        <div class="checklist-item" >
          <input type="checkbox" id="cb3" class="checkbox"/><label for="cb3"></label>
          <label class="checkbox-text"><span>Request no junk mail</span>
          <div class="side-text-wrapper">
            <v-icon name="arrow-right"/>
            <span>Little Green Dot: End junk mail today</span>
          </div></label>

          
        </div>
        </div>
        <div class="checklist-item-container">
        <div class="checklist-item" >
          <input type="checkbox" id="cb4" class="checkbox"/><label for="cb4"></label>
          <label class="checkbox-text">Refuse items with lots of packaging and shop at packaging-free options like wet markets, zero waste stores, etc.</label>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  components: {},
  computed: {
    emailContent: function() {
      const mailto = 'email@google.com';
      const subject = 'Earthlife';
      const body = encodeURIComponent(`
      This\r\n
      is\r\n
      the\r\n
      body.\r\n
      
      What are we supposed to put in the body?
      `);

      return 'mailto:' + mailto + '?subject=' + subject + '&body=' + body;
    }
  }
};
</script>

<style>
.todo {
  background-image: url('../assets/Group 2.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  background-color: #f4f6f8;
  width: 100%;
  min-height: calc(100vh - 25px);
  padding: 0 20px;
}

.todo-main {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding-top: 100px;
}

h1 {
  margin: 0;
}

.todo-title {
  font-family: 'Futura', sans-serif;
  color: #403e3d;
  font-size: 32px;
  line-height: 42px;
  text-align: center;
}

.button-wrapper {
  padding: 32px 0;
}

.button-links {
  width: 48px;
  height: 48px;
  display: inline-block;
  background-color: #dfe3e8;
  border-radius: 100px;
  padding-top: 15px;
  margin-right: 16px;
}

.checklist-wrapper {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
}

.checklist-item {
  padding: 35px;
  background-color: white;
  border-bottom: 0.5px solid #979797;
  text-align: left;
  display: flex;
  align-items: center;
}

input[type='checkbox'] {
  display: none;
}

.checkbox + label {
  background-color: #fafafa;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 9px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
}

.checkbox:checked + label {
  background-color: #e9ecee;
  border: 1px solid #adb8c0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
    inset 15px 10px -12px rgba(255, 255, 255, 0.1);
  color: #99a1a7;
}

.checkbox:checked + label:after {
  content: '\2714';
  font-size: 14px;
  position: absolute;
  top: 0px;
  left: 3px;
  color: #99a1a7;
}

.checkbox-text {
  margin-left: 30px;
  display: inline-block;
  /* max-width: 500px; */
}

.side-text-wrapper {
  padding-top: 10px;
  color: #403e3d;
  opacity: 0.5;
}
.side-text-wrapper span {
  margin-left: 10px;
}

@media (max-width: 500px) {
}
</style>
