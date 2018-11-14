<template>
  <b-container>
    <b-row>
        <transition name="fade">
      <b-col v-if="data" :key="cardNum">
            <b-row v-if="start && !finish">
                <b-col xs="12" lg="12">
                    <div v-for="i in data.content[cardNum].day" class="box">
                    </div>
                </b-col>
            </b-row>
          <b-row>
                <b-col v-if="!start">
                    <div class="card-title"><div class="typewriter">{{data.title}}</div></div>
                    <div class="card-subtitle">{{data.description}}</div>
                </b-col>
                <b-col v-if="finish">
                    <div class="card-title"><div class="typewriter">You got the records!</div></div>
                </b-col>
              <b-col v-if="start && !finish">
                  <div class="card-title">{{data.content[cardNum].title}}</div>
             </b-col>
          </b-row>
          <b-row v-if="start">
              <div  class="decor" v-if="data.content[cardNum].image && !finish">
                  <div v-html="data.content[cardNum].image"></div>
              </div>
                    <b-col v-if="!finish && start" lg="12" xs="12">
                        <div class="card-text">{{data.content[cardNum].text}}</div>
                    </b-col>
                    <b-col v-else lg="12" xs="12">
                        <div class="card-text">It took {{data.content[cardNum].day}} days to receive 
                            your records. This is {{getResponse(3-parseInt(data.content[cardNum].day))}}.
                        </div>
                    </b-col>
          </b-row>
          <b-row>
              <b-col>
              <div class="card-action" v-if="finish && data.title !=='The Ideal'">
                      <b-button  class="card-action-button" v-on:click='click(2, "0")'>How is it supposed to work?</b-button>
              </div>
                <div class="card-action"  v-if="start && !finish">
                        <b-button  class="card-action-button" v-on:click='setFinish'>Finish</b-button>
                </div>
                <div class="card-action" v-if="!start && !finish">
                        <b-button  class="card-action-button" v-on:click='setGo'>Start</b-button>
                </div>
                <div class="card-action" v-if="start && !finish">
                        <b-button  class="card-action-button" v-on:click='nextCard'>Next</b-button>
                </div>
                <div class="card-action" v-if="finish">
                        <b-button  class="card-action-button" v-on:click='click(3, null)'>Home</b-button>
                </div>
                </b-col>

        </b-row>

        
      </b-col>
      </transition>
    </b-row>
    
  </b-container>
</template>

<script>
import Engine from "@/components/engine";

export default {
  name: "Choice",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      cardNum: 0,
      start: false,
      finish: false
    };
  },
  props: ["data"],
  mounted() {
    console.log(this.data);
  },
  watch: {
      data: function(oldValue, newValue) {
          this.cardNum = 0;
          this.start= false
          this.finish = false
          console.log("Change")

      }
  },
  methods: {
    click: function(state, num) {
      var obj = {};
      obj["state"] = state;
      obj["num"] = num;
      this.$emit("update", obj);
      
    },
    getResponse: function(num) {
        console.log(num)
        if (num < 0) {
            return num.replace("-","") + " days slower than the records law"
        } else if (num > 0) {
            return num + " days quicker than the requirement"
        } else {
            return num + " days from the requirement"
        }
    },
    nextCard: function() {
      if (this.cardNum+1 < this.data.content.length) {
        this.cardNum = this.cardNum + 1;
        console.log(this.cardNum)
      } else {
          console.log("finish" + this.cardNum)
        this.setFinish();
      }
    },
    setGo: function() {
      this.start = true;
    },
    setFinish: function() {
      this.finish = true;
      console.log("finish" + this.finish)
    }
  },
  props: ["data"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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

.card-action{
    display:inline-block;
}

.card-action-botton {
    display:inline-block;
}

.card-text {
    margin-bottom:30px;
}

.container {
        padding-top:40%;
}

.box {
      width:20px;
      height:20px;
      margin-left:2px;
      margin-right:2px;
      background-color:#000;
      display:inline-block;   
      border-radius:50px; 
}

@media only screen and (max-width: 600px) {
    .box {
        width:10px;
        height:10px;
    }

    .container {
        padding-top:40%;
    }

}
</style>
