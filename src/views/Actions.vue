<template>
<div>
  <div class="wrapper">
    <div class="back-button">
      <v-icon name="arrow-left"/>
      <a href="#/results">Results</a>
    </div>
  </div>
      <div class="results-message-wrapper">
        <p>Earth is about the daily actions that enables responsible living.</p>
        <p>Based on your responses, we've complied a list of actions you can do in Singapore...</p>
      </div>
  </div>
</div>
</template>

<script type="text/javascript">

export default {
    name: 'actions',
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

.results-message-wrapper  { /* thing to center */
  font-size: 1.5em;
  margin: auto;
  width: 50%;
  text-align: center;
  font-weight: 500;
  color: #403E3D;
  padding-top: 100px;
}

@media only screen and (max-width: 800px) {
  .results-message-wrapper {
    width: 90%;
    padding-top: 80px;
  }

/* Remove back button in mobile screen. Pending design*/
  .wrapper {
    display: none; 
  }

}
</style>