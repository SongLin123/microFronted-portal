<template>
  <div className="fixed-table">
    <basic-container>
      <el-button type="primary" @click="dialogadd()">新增</el-button>
      <!--新增弹出层开始-->
      <el-dialog :title="title" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
         <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="编号" prop="id" style="display:none">
              <el-input v-model.number="ruleForm.id"></el-input>
            </el-form-item>
            <el-form-item label="标题" prop="title">
              <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
              <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
            <el-form-item label="封面图片" prop="pictureUrl">
              <el-upload
                ref="upload2"
                class="avatar-uploader"
                action=""
                :show-file-list="false"
                v-model="ruleForm.pictureUrl"
                :auto-upload="false"
                :data="ruleForm"
                :on-success="handleAvatarSuccess"
                :on-change="changeFile"
                :before-upload="beforeAvatarUpload">
                <img v-if="pictureurl" :src="pictureurl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="发布附件" prop="fileUrl">
              <el-upload
                ref="upload"
                class="upload-demo"
                action=""
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="1"
                :auto-upload="false"
                :on-exceed="handleExceed"
                :on-change="changeFile2"
                :data="ruleForm"
                v-model="ruleForm.fileUrl"
                :file-list="fileList">
                <el-button size="small" type="primary">选择附件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="发布内容" prop="description">
              <el-input type="textarea" v-model="ruleForm.description" rows="12"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm',tabIndex)">发布</el-button>
            </el-form-item>
          </el-form>
      </el-dialog>
      <!--新增弹出层结束-->
      <el-table
      :data="tableData"
      style="width: 100%"
      height="78vh">
        <el-table-column
          fixed
          prop="id"
          label="编号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="author"
          label="发布人"
          width="120">
        </el-table-column>
        <el-table-column
          prop="pictureUrl"
          label="封面图片"
          width="200">
          <template slot-scope="scope">            
            <img :src="scope.row.pictureUrl"  min-width="30" height="30" />
          </template>    
        </el-table-column>
        <el-table-column
          prop="fileUrl"
          label="附件"
          width="120">
          <template slot-scope="scope">
              <a :download="scope.row.fileUrl" :href="scope.row.fileUrl" class="aStyle">附件</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="300">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          width="300">
        </el-table-column>
        <el-table-column label="操作" width="180" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="newsDeleteById(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="params.pageNo"
          :page-size="params.pageSize"
          background
          layout="total, prev, pager, next"
          prev-text="上一页"
          next-text="下一页"
          :total="totalCount">
        </el-pagination>
      </div>
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from '@vue-materials/basic-container'
import {getNewsList,newsAdd,newsDelete} from "../../../../../src/api/newsList"
  export default {
  components: { BasicContainer },
  name: 'FixedTable',

  data() {
    return {
      title:'新增',//表单标题
      dialogVisible: false,//新增表单
      tabIndex:0,//0调用新增，1调用编辑
      ruleForm:{
        id:"",
        author:'',
        title:'',
        description:'',
        pictureUrl:'',
        fileUrl:'',
      },
      pictureurl:'',
      fileList: [],
      rules:{
      },
      content: null,
      editorOption: {},
      imageUrl:"",
      tableData:[],//需要data定义一些，tableData定义一个空数组，请求的数据都是存放这里面
      totalCount:0,
      params:{
        pageSize:2,//每页的数据条数
        pageNo:1//默认显示页面1
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    beforeAvatarUpload(file) {
      console.log(file)
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess(res, file) {
        this.pictureUrl = URL.createObjectURL(file.raw);
       
    },
    changeFile(file){ 
      this.pictureurl = URL.createObjectURL(file.raw);
       this.ruleForm.pictureUrl = file.raw
    },
    changeFile2(file){
       this.ruleForm.fileUrl = file.raw
    },
    //关闭弹出层
    handleClose(done) {
     this.dialogVisible =false;
    },
    //点击新增按钮
    dialogadd(){
       this.tabIndex = 0;
       this.title = "新增";
       this.dialogVisible =true;
    },
    //点击编辑按钮
    cameraEdit(row){
      this.tabIndex = 1;
      this.title = '编辑';
      this.dialogVisible = true;//打开
   },
   //新增
    submitForm(formName, tabIndex) {
       this.$refs[formName].validate(valid => {
        if (valid) {
          let formData= new FormData();
          for (const key in this.ruleForm) {
            formData.append(key,this.ruleForm[key]);
          }
          newsAdd(formData).then(res => {
            if (res.code === 200) {
              this.$message({
                type: "success",
                message: "添加成功"
              });
              this.$refs.ruleForm.resetFields(); //清空表单
              this.handleClose(); //关闭弹出层
              this.getNewsList(); //刷新列表
            } else {
              this.$message({
                type: "warning",
                message: res.msg
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
   //删除
   newsDeleteById(row){
    let delParas = new URLSearchParams();
    delParas.append("id",row.id);
    newsDelete(delParas).then(res=>{
      if(res.code === 200){
              this.$message({
                  type:"success",
                  message:"删除成功"
              })
              this.getNewsList();//刷新列表

          }else{
              this.$message({
                  type:"warning",
                  message:res.message
              })
          }
    })
   },
   //列表
    getNewsList(){
        getNewsList(this.params).then(res=>{
            if(res.code === 200){
               this.tableData = res.data.pageContent;
               this.params.pageNo = res.data.pageNo;
               this.totalCount = res.data.totalCount;
            }else{
                this.$message({
                    type:"warning",
                    message:res.message
                })
            }
        })
    },
  //点击第几页
  handleCurrentChange: function(currentPage) {
      this.params.pageNo = currentPage;
      this.getNewsList();
  },
  },
  created() {
      this.$nextTick(()=>{
          this.getNewsList();
      })
  }
}
</script>
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }
  .avatar {
    width: 50px;
    height: 50px;
    display: block;
  }
  .aStyle{
    color: red;
    text-decoration: underline;
  }
</style>
<style>
.el-dialog{
   margin-top: 8vh !important;
}
</style>
