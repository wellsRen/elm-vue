<template>
  <div class="hello" id='index'>
    <hade></hade>

    
    <div>
      <div class="icon-wrapper">
        <a href="" class="ind-nav-son"> 
          <span class="icon icon-nav">
            <img src="static/img/af108e256ebc9f02db599592ae655jpeg.webp"  width='49' height="49"  alt="">
          </span>
          <span>
            美食
          </span>
        </a>
        
        <a href="" class="ind-nav-son"> 
          <span class="icon icon-nav">

            <img src="static/img/af108e256ebc9f02db599592ae655jpeg.webp"  width='49' height="49"  alt="">
          </span>
          <span>
            便利超市
          </span>
        </a>
        
        <a href="" class="ind-nav-son"> 
          <span class="icon icon-nav">

            <img src="static/img/af108e256ebc9f02db599592ae655jpeg.webp"  width='49' height="49"  alt="">
          </span>
          <span>
            水果
          </span>
        </a>

        
        <a href="" class="ind-nav-son"> 
          <span class="icon icon-nav">

            <img src="static/img/af108e256ebc9f02db599592ae655jpeg.webp"  width='49' height="49"  alt="">
          </span>
          <span>
            医药健康
          </span>
        </a>

        
        <a href="" class="ind-nav-son"> 
          <span class="icon icon-nav">
            <img src="static/img/af108e256ebc9f02db599592ae655jpeg.webp"  width='49' height="49"  alt="">
          </span>
          <span>
            浪漫鲜花
          </span>
        </a>


        
        <a href="" class="ind-nav-son"> 
          <span class="icon icon-nav">
            <img src="static/img/af108e256ebc9f02db599592ae655jpeg.webp"  width='49' height="49"  alt="">
          </span>
          <span>
            跑腿代购
          </span>
        </a>
        
        <a href="" class="ind-nav-son"> 
          <span class="icon icon-nav">
            <img src="static/img/af108e256ebc9f02db599592ae655jpeg.webp"  width='49' height="49"  alt="">
          </span>
          <span>
            汉堡披萨
          </span>
        </a>
        
        <a href="" class="ind-nav-son"> 
          <span class="icon icon-nav">
            <img src="static/img/af108e256ebc9f02db599592ae655jpeg.webp"  width='49' height="49"  alt="">
          </span>
          <span>
            厨房生鲜
          </span>
        </a>

        
        <a href="" class="ind-nav-son"> 
          <span class="icon icon-nav">
            <img src="static/img/af108e256ebc9f02db599592ae655jpeg.webp"  width='49' height="49"  alt="">
          </span>
          <span>
            炸鸡烤串
          </span>
        </a>

        
        <a href="" class="ind-nav-son"> 
          <span class="icon icon-nav">
            <img src="static/img/af108e256ebc9f02db599592ae655jpeg.webp"  width='49' height="49"  alt="">
          </span>
          <span>
            地方菜系
          </span>
        </a>
      </div>
      
      <div class="">
        <ul>
          <li v-for="val in bannerSrc" :key="val">
              <img :src="val" alt="">
          </li>
        </ul>
      </div>

    </div>
    <foot></foot>
  </div>
</template>

<script>
import hade from '@/components/header/hade'
import foot from '@/components/foot/foot'

export default {
  name: 'index',
  data () {
    return {
      'bannerSrc' : [
        'static/img/af108e256ebc9f02db599592ae655jpeg.webp',
        'static/img/af108e256ebc9f02db599592ae655jpeg.webp',
        'static/img/af108e256ebc9f02db599592ae655jpeg.webp',
        'static/img/af108e256ebc9f02db599592ae655jpeg.webp'
      ] 
    }  
  },
  
  components: {
    hade,foot
  }
}
 
</script>

<style scoped>

  .ind-nav-son {
    float: left;
    display: block;
    width: 150px;
    height: 150px;
    text-align: center;
    font-size: 0;
  }
   .ind-nav-son span {
     display: block;
     font-size: 22px;;
   }


  #outup img  {
    display: block;
    float: left;
  }
</style>
