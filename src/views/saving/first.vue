<template>
  <div class="firstContent">
    <el-row>
      <el-col :sm="4" :xs="8">
        <div class="leftContent">
          <div :class="['item',item.active?'active':'']" v-for="(item,index) in arr" @click="change(index)">{{item.title}}</div>
        </div>

      </el-col>
      <el-col :sm="20" :xs="16">
       <div class="rightContent">
          <div class="top">
             <p class="title">项目信息</p>
             <div class="item">
               <div class="left" >合同编号:</div>
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
          <el-row class="mid">
            <el-col :sm="14" :xs="24" class="left">
               <el-radio-group v-model="radio2">
    <el-radio :label="3">任务</el-radio>
    <el-radio :label="6">样品</el-radio>
    <el-radio :label="9">共享样品管理</el-radio>
  </el-radio-group>
            </el-col>
            <el-col :sm="10" :xs="24" class="right">
                          <div class="item">新建文件</div>          
                          <div class="item">删除</div>
                          <div class="item">刷新</div>  
                     
            </el-col>
          </el-row>
          
        <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key="item.key" :name="item.key">
        <keep-alive>
          <tab-pane v-if="activeName==item.key" :type="item.key" />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>

       </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tabPane from './components/firstCom'
export default {
  created() {
      this.arr[0].active=true
  },
   components: { tabPane },
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
             radio2: 3,
            
      tabMapOptions: [
        { label: 'China', key: 'CN' },
        { label: 'USA', key: 'US' },
        { label: 'Japan', key: 'JP' },
        { label: 'Eurozone', key: 'EU' }
      ],
      activeName: 'CN'
    

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
      flex-wrap: wrap;
      margin-top:10px; 
        .left{
          margin-right: 10px;
        }
    }
  }
  .mid{
    .left{
        padding: 24px ;
        padding-right: 0;
        box-sizing: border-box;
        font-size: 24px !important;
      
    }
   .right{
     display: flex;
     padding: 24px 0;
    //  padding-left: 0;
        box-sizing: border-box;
     justify-content: flex-end;
     flex-wrap: wrap;
     .item{
       width: 90px;
       height: 30px;
       line-height: 30px;
       text-align: center;
       border: 1px solid #ccc;
       border-radius:6px;
       margin-right: 20px;
       margin-bottom: 20px;
     }
   }
  }
}


</style>
<style lang="scss">
// .rightConten {
//   .mid{
//     .left {
      
//     }
//   }
// }
.rightContent .mid .left .el-radio{
  margin-bottom:20px;
}

 .rightContent .mid .left .el-radio-group .el-radio .el-radio__label{
   font-size: 16px !important;
} 
</style>

