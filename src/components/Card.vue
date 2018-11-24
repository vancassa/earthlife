<template>
    <div ref="draggableCard" 
      class="card"
      :class="{'isAnimating': isAnimating}"
      :style="{transform: transformString}">
        <h1> {{ actionItem ? actionItem.category : '' }} </h1>
        <!-- <hr/> -->
        <img class="current-card-image" v-if="actionItem.linkImage" v-bind:src="actionItem.linkImage" />
        <div class="add-space" v-else></div>
        <p class="current-card-message">{{ actionItem.text }}</p>
      </div>
</template>
<script>
import interact from 'interact.js';
const YES = 1;
const NO = 0;
let THRESHOLD = 50;

if (window.innerWidth > 700) {
  THRESHOLD = 150;
}
export default {
  name: 'Card',
  props: {
    actionItem: Object,
    index: Number
  },
  data: function() {
    let degree = 0;
    let index = this.index % 4;

    switch (index) {
      case 0:
        degree = 3;
        break;
      case 1:
        degree = -3;
        break;
      case 2:
        degree = 5;
        break;
      case 3:
        degree = 0;
        break;
    }

    return {
      cardPosition: {
        deg: degree,
        x: 0,
        y: 0
      },
      isAnimating: true
    };
  },
  computed: {
    transformString() {
      const { deg, x, y } = this.cardPosition;
      return `rotate(${deg}deg) translate3D(${x}px, ${y}px, 0)`;
    }
  },
  methods: {
    interactSetPosition(coordinates) {
      const { deg = 0, x = 0, y = 0 } = coordinates;
      this.cardPosition.x = x;
      this.cardPosition.y = y;
    },
    resetCardPosition() {
      this.interactSetPosition({ x: 0, y: 0 });
    },
    resultCard(choice) {
      switch (choice) {
        case YES:
          this.interactSetPosition({ x: 800 });
          break;

        case NO:
          this.interactSetPosition({ x: -800 });
          break;
      }
      this.$emit('nextItem');
    }
  },
  mounted() {
    interact(this.$refs.draggableCard).draggable({
      onstart: () => {
        this.isAnimating = false;
      },
      onmove: event => {
        const deg = this.cardPosition.deg;
        const x = this.cardPosition.x + event.dx;
        const y = this.cardPosition.y + event.dy;
        this.interactSetPosition({ deg, x, y });
      },
      onend: () => {
        const { deg, x, y } = this.cardPosition;
        this.isAnimating = true;

        if (x > THRESHOLD) this.resultCard(YES);
        else if (x < -THRESHOLD) this.resultCard(NO);
        else this.resetCardPosition();
      }
    });
  },
  beforeDestroy() {
    interact(this.$refs.draggableCard).unset();
  }
};
</script>

<style>
.isAnimating {
  transition: transform 1s;
}

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
  flex-direction: column;
  text-align: center;
  border-radius: 24px;
  position: absolute;
  left: 0;
  right: 0;
}

.current-card-image {
  width: 60%;
  margin: 30px auto 0;
}

.card h1 {
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
