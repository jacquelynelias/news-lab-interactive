<template>
  <b-container>
    <b-row>
      <b-col>
            <div class="title">
                What happens when public records 
                requests go wrong? 
            </div>
            <div class="subtitle">We bring you 
                five scenarios that the Georgia News
                 Lab observed after reaching out to 
                 149 local agencies. 
            </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="card-action">
        <b-button class="card-action-button" v-on:click='click'>Start</b-button>
      </b-col>
      </b-row>
  </b-container>
</template>

<script>
import Engine from '@/components/engine'

export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
      console.log("in welcome")
  },  
  methods: {
      click: function(num) {
          var obj = {}
          obj['state'] = 1
          this.$emit('update', obj)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container {
        padding-top:40%;
}
</style>
