<template>
    <div id='find' >
        <div>
          <div v-for="val in food" :key="val.imgUrl" class="finds" >
            <img v-bind:src= val.imgUrl alt="">
            <p>{{ val.foodName }}</p>
            <p>
              {{ val.monthlySales }}
                <span>
                {{ val.happy }}
              </span>
            </p>
            <p>{{ val.foodMoney }}</p>
            <p>
              <i></i>
              {{ val.shopNmae }}
            </p>
          </div>


        </div>

        <foot></foot> 
    </div>
</template>

<script>
import foot from '@/components/foot/foot'

export default {
  name: 'find',
  data () {
     return {
       food　:　{}
     }
  },
  mounted : function (){

    // this.$http.get('static/map/china.json').then(res => {
    //     console.log("json数据为:" + res.body)//此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
    // })
    this.$http.get('static/map/test.json').then(response => {
        this.food = response.data;
    }, response => {
        console.log("error");
    })

  }
  ,
  methods : {
        // GET /someUrl
       
  },
  components: {
    foot
  }
}
</script>

<style>
    .finds {
      display: inline-block;
      width: 180px;
      height: 180px;
    }
</style>