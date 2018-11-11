<template>
  <div class="todo">
    <div class="todo-main">
      <h1 class="todo-title">My Earthlife To-do List</h1>
      <div class="button-wrapper">
            <a class="button-links" :href="emailContent">
              <v-icon name="envelope"/>
            </a>
            <a class="button-links" @click="print">
              <v-icon name="copy"/>
            </a>
      </div>
      <div class="checklist-wrapper">
        <div class="checklist-item" v-for="(todo, key) in todos">
          <input type="checkbox" :id=key class="checkbox"/><label :for=key></label>
          <div class="checkbox-text">
            <span>{{todo.text}}</span>
            <div class="side-text-wrapper" v-if="!(todo.link == '')">
              <v-icon name="arrow-right"/>
              <a :href="todo.url" target="_blank">{{todo.link}}</a>
            </div>
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
  data: function() {
    return {
      todos: [
        {
          text:
            'Grab a reusable straw and takeaway container with cutlery. Grab a reusable straw and takeaway container with cutlery.',
          link: '',
          url: ''
        },
        {
          text: 'Request no junk mail',
          link: 'Little green dot: end junk mail today',
          url: 'https://littlegreendot.com/end-junk-mail-today/'
        }
      ]
    };
  },
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
  },
  methods: {
    print: function() {
      window.print();
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
  font-size: 16px;
}

input[type='checkbox'] {
  display: none;
}

.checkbox + label {
  background-color: #fafafa;
  border: 1px solid black;
  padding: 8px;
  border-radius: 2px;
  display: inline-block;
  position: relative;
}

.checkbox:checked + label {
  background-color: #e9ecee;
  border: 1px solid black;
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
.side-text-wrapper a {
  margin-left: 10px;
  text-decoration: none;
  color: #403e3d;
}

@media (max-width: 500px) {
}
</style>
