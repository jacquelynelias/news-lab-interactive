<template>
  <b-container>
    <b-row>
            <div class="title decor">
                <div class="typewriter">
                    Take your pick.
                </div>
            </div>
    </b-row>
    <b-row>
            <b-col  xs="12" sm="6" md="6" lg="3">
                <div class="card">
                    <div class="card-title">Scenario 1</div>
                    <div class="card-subtitle">{{data[1].title}}</div>
                    <div class="card-action"><b-button class="card-action-button" v-on:click='click(1)'>Let's go</b-button></div>
                </div>
            </b-col>
            <b-col  xs="12" sm="6" md="6" lg="3">
                <div class="card">
                    <div class="card-title">Scenario 2</div>
                    <div class="card-subtitle">{{data[2].title}}</div>
                    <div class="card-action"><b-button class="card-action-button" v-on:click='click(2)'>Let's go</b-button></div>
                </div>
            </b-col>
            <b-col xs="12" sm="6" md="6" lg="3">
                <div class="card">
                    <div class="card-title">Scenario 3</div>
                    <div class="card-subtitle">{{data[3].title}}</div>
                    <div class="card-action"><b-button class="card-action-button" v-on:click='click(3)'>Let's go</b-button></div>
                </div>
            </b-col>
            <b-col xs="12" sm="6" md="6" lg="3">
                <div class="card">
                    <div class="card-title">Option 4</div>
                    <div class="card-subtitle">{{data[4].title}}</div>
                    <div class="card-action"><b-button class="card-action-button" v-on:click='click(4)'>Let's go</b-button></div>
                </div>
                
            </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'Contents',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
      console.log("in contents")
  },
  props: ['data'],
  methods: {
      click: function(num) {
          var obj = {}
          obj['state'] = 2
          obj['num'] = num
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

.card {
    height:200px;
    margin-bottom:10px;
}

.card-title {
    font-size:28px;

}

.card-action-button {
    width:100px;
    font-size:15px;
    margin:0 auto;
    position:absolute;
    bottom: 10px;
    left:25px;
    
}

.card-subtitle {
    font-size:18px;
}

.card-action {
    display:table;
}

@media only screen and (max-width: 600px) {
    .card {
        height:100px;
    }

    .card-action-button {
        font-size:14px;
        width:auto;
        padding-left:5px;
        padding-top:2px;
        padding-bottom:2px;
        padding-right:5px;
        margin:0 auto;
        position:absolute;
        bottom: 10px;
        left:40%;
    
    }
    .card-title {
        font-size:20px;

    }

    .card-subtitle {
        font-size:14px;
    }
}
</style>
