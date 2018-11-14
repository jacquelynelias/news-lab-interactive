<template>
  <b-container fluid id="app">
    <b-row id="inner">
      <b-col lg="12">
        <template v-if="state===1">
            <transition name="fade">
                <Contents v-on:update="update" :data="options"/>
            </transition>
        </template>
        <template v-if="state===2">
             <transition name="fade">
                <Choice v-on:update="update" :data="options[num]"/>
            </transition>
        </template>
        <template v-if="state===3">
             <transition name="fade">
                <Welcome v-on:update="update"/>
            </transition>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Choice from '@/components/choice'
import Welcome from '@/components/welcome'
import Contents from '@/components/contents'
import data from '@/assets/data.json'

/*


States: 
    0 = Welcome
    1 = TOC
    2 = Lesson
    3 = Finish
 */
export default {
  name: 'Engine',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      options: data,
      state: 3,
      num: null
      
    }
  },
  mounted() {
      console.log(this.options)
  },
  components: {
      Choice,
      Welcome,
      Contents
  },
  methods: {
    update: function(obj) {
        try {
            console.log(obj)
            if (obj.state) {
                this.state = obj.state
            }
            if (obj.num) {
                this.num = parseInt(obj.num)
            }
        } catch (e) {console.log(e)}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:700px;
  

}

#inner {
    background-color:#d2d2d2;
    padding:50px;
    margin:20px;
    height:100%;



}



.card-title, .title {
    font-size:40px;
    text-align:center;

}


.card-subtitle, .subtitle {
    font-size:32px;


}

.card-action-button {
    background-color: navy;
}

.card-text {

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  opacity:0;
  border-right: .15em solid #000; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation-fill-mode: forwards;
  width:auto;
  animation: 
    typing 3.5s 1s steps(30, end) forwards,
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  0% { width: 0; opacity:1 }
  100% { width: 100%; opacity:1 }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #000 }
}

@media only screen and (max-width: 600px) {
    .col-lg-12 {
        margin:0px;
        padding:0px;
    }
    #inner {
        margin: 10px;
        padding-left: 0px;
        padding-right: 0px;
        padding-top:20px;
    }


    .card-title, .title {
        font-size:20px;
        text-align:center;

    }



    .card-subtitle, .subtitle {
        font-size:18px;

    }

    .decor {
        text-align:center;
        margin: 0 auto;
        margin-bottom: 20px;
        margin-top:10px;
        font-size:20px;
    }

    #app {
        max-height: 800px;
    }
    .typewriter {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    opacity:0;
    padding-right:0;
    display:inline-block;
    border-right: .15em solid #000; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation-fill-mode: forwards;
    animation: 
        typing 1s 0.5s steps(30, end) forwards,
        blink-caret .75s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
    0% { width: 0; opacity:1 }
    100% { width: 100%; opacity:1 }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange }
    }
}

@media only screen and (max-width: 400px) {
    #app {
        max-height: 800px;
    }
}

</style>
