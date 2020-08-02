<template>
  <div className="fixed-table">
    <basic-container>
      <el-button type="primary" style="margin-left:10px;">批量导入</el-button>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple1">
              <div class="navTitle">小区数</div>
              <div class="navSum">76</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple2">
              <div class="navTitle">上月接警部数</div>
              <div class="navSum">200</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple3">
              <div class="navTitle">7日内接警数</div>
              <div class="navSum">15</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple4">
              <div class="navTitle">本月接警数</div>
              <div class="navSum">30</div>
          </div>
        </el-col>
      </el-row>
      <el-col :span="24">
        <div class="tableTitle">接警详情</div>
      </el-col>
      <el-table
      :data="tableData3"
      style="width: 100%"
      height="60vh">
        <el-table-column
          fixed
          prop="date"
          label="时间"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="居委名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="province"
          label="小区名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="province"
          label="报警类型"
          width="150">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column label="操作" width="180" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from '@vue-materials/basic-container'

  export default {
  components: { BasicContainer },
  name: 'FixedTable',

  data() {
    return {
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        tag: '公司',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        tag: '公司',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        tag: '家',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        tag: '公司',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        tag: '家',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        tag: '公司',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        tag: '公司',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>
.grid-content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
  padding: 30px;
}
.navTitle{
  color: #ffffff;
  text-align: center;
  margin-bottom: 10px;

}
.navSum{
  color: #ffffff;
  text-align: center;
  font-size: 32px;
}
.bg-purple1{
  background: rgba(88, 163, 247, 1);
}
.bg-purple2{
  background: rgba(254, 192, 61, 1);
}
.bg-purple3{
  background: rgba(82, 193, 245, 1);
}
.bg-purple4{
  background: rgba(251, 98, 96, 1);
}
.tableTitle{
  font-weight: bold;
  padding: 15px 0 15px 0;
  border-bottom: 1px solid #EBEEF5;
}
</style>
