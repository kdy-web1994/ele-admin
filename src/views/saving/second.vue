<template>
  <div>
   <el-row>
     <el-col :sm="4" :xs="8" class="leftContent">
       <second></second>
     </el-col>
     <el-col :sm="20" :xs="16" class="rightContent">
       
     </el-col>
   </el-row>
  </div>
</template>

<script>
import second from './components/secondCom'
export default {
  components:{
   second
  },
  created() {
    
  }
}
</script>

<style lang="scss" scoped>
.leftContent{
  min-height: calc(100vh - 84px);
  border-right:1px solid #ccc; 
}
.rightContent{

}
</style>



