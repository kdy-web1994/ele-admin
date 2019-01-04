<template>
  <div class="firstContent">
    <el-row>
      <el-col :span="4">
        <div class="leftContent">
          <div :class="['item',item.active?'active':'']" v-for="(item,index) in arr" @click="change(index)">{{item.title}}</div>
        </div>

      </el-col>
      <el-col :span="20">
       <div class="rightContent">
          <div class="top">
             <p class="title">项目信息</p>
             <div class="item">
               <div class="left">合同编号:</div>
               <div class="right">XSAAAKASKLAKLKSALDKLOPASJFDA</div>
             </div>
             <div class="item">
               <div class="left">合同名称:</div>
               <div class="right">20个环境样品为什么多样性</div>
             </div>
             <div class="item">
               <div class="left">分析类型:</div>
               <div class="right">微生物多样性</div>
             </div>
             <div class="item">
               <div class="left">样品数量:</div>
               <div class="right">20</div>
             </div>
             <div class="item">
               <div class="left">客户名称:</div>
               <div class="right">周义清</div>
             </div>
             <div class="item">
               <div class="left">创建时间:</div>
               <div class="right">2018/10/23</div>
             </div>
          </div>
       </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  created() {
      this.arr[0].active=true
  },
  data(){
         return {
             arr:[{
                title:"我的项目",
                active:false
             },
             {
                title:"共享项目",
                active:false
             }
             ],
            

         }
       },
       methods:{
         change(i){
           this.arr.forEach(item=>{
              item.active=false
           })
           this.arr[i].active=true
         }
       }
}
</script>

<style lang="scss" scoped>
.firstContent{
  min-width: 100%;
   min-height: calc(100vh - 84px);
  
}
.leftContent{
  min-height: calc(100vh - 84px);
  border-right:1px solid #CCCCCC; 
   .item{
  text-align: center;
  line-height: 88px;
  font-size: 16px;
  background: #fff;
  cursor: pointer;
}
.active{
  background: #eee;
}
}



.rightContent {
  .top{
    padding: 30px 24px;
    border-bottom:1px solid #ccc; 
    .title{
       font-size: 26px;
    }
    .item{
      display: flex;
      margin-top:10px; 
        .right{
          margin-left: 10px;
        }
    }
  }
}


</style>
