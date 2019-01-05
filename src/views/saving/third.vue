<template>
  <div>
   <el-row>
     <el-col :sm="4" :xs="8" class="leftContent">
         <div class="leftContent">
          <div :class="['item',item.active?'active':'']" v-for="(item,index) in arr" @click="change(index)">{{item.title}}</div>
        </div>
     </el-col>
     <el-col :sm="20" :xs="16" class="rightContent">
        <el-input
  placeholder="输入关键字进行过滤"
  v-model="filterText">
  <el-button slot="append" icon="el-icon-search" ></el-button>
</el-input>

<el-tree
  class="filter-tree"
  :data="data2"
  :props="defaultProps"
  default-expand-all
  :filter-node-method="filterNode"
  ref="tree2">
</el-tree>

     </el-col>
   </el-row>
  </div>
</template>

<script>
import third from './components/thirdCom'
export default {
  components:{
   third
  },
   watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
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
             filterText: '',
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      
       }
  },
  created() {
     this.arr[0].active=true
  },
  methods:{
     change(i){
           this.arr.forEach(item=>{
              item.active=false
           })
           this.arr[i].active=true
         },
           filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
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

.rightContent{

}
</style>



