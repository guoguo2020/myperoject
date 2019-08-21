<template>
    <div class="div-message">
    <div class="msg">
                <i-form v-ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="学号" prop="num">
            <i-input :value.sync="formValidate.num" placeholder="请输入学号"></i-input>
        </Form-item>
        <Form-item label="姓名" prop="name">
            <i-input :value.sync="formValidate.name" placeholder="请输入姓名"></i-input>
        </Form-item>
        <Form-item label="性别" prop="gender">
            <Radio-group :model.sync="formValidate.gender">
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="出生日期">
            <Row>
                <i-col span="11">
                    <Form-item prop="date">
                        <Date-picker type="date" placeholder="选择日期" :value.sync="formValidate.date"></Date-picker>
                    </Form-item>
                </i-col>
            </Row>
        </Form-item>
        <Form-item label="身份证号" prop="userId">
            <i-input :value.sync="formValidate.userId" placeholder="请输入身份证号"></i-input>
        </Form-item>
        <Form-item label="民族" prop="nation">
            <i-select :model.sync="formValidate.nation" placeholder="请选择民族">
                <i-option value="hanzu">汉族</i-option>
                <i-option value="menggu">蒙古族</i-option>
                <i-option value="miao">苗族</i-option>
                <i-option value="buyi">布依族</i-option>
                <i-option value="tujia">土家族</i-option>
                <i-option value="man">满族</i-option>
                <i-option value="hui">回族</i-option>
                <i-option value="gaoshan">高山族</i-option>
                <i-option value="yizu">彝族</i-option>
            </i-select>
        </Form-item>
        <Form-item label="政治面貌" prop="face">
            <i-select :model.sync="formValidate.face" placeholder="请选择政治面貌">
                <i-option value="tuan">共青团员</i-option>
                <i-option value="dang">共产党员</i-option>
                <i-option value="zhong">群众</i-option>
            </i-select>
        </Form-item>
        <Form-item label="籍贯" prop="city">
            <i-select :model.sync="formValidate.city" placeholder="请选择所在地">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
                <i-option value="neimengu">内蒙古</i-option>
                <i-option value="tinajin">天津市</i-option>
                <i-option value="guangzhou">广州</i-option>
            </i-select>
        </Form-item>
        <Form-item label="学院" prop="school">
            <i-select :model.sync="formValidate.school" placeholder="请选择学院名称">
                <i-option value="computer">计算机科学与通信工程学院</i-option>
                <i-option value="energy">能动学院</i-option>
                <i-option value="ecology">电气学院</i-option>
                <i-option value="money">财经学院</i-option>
                <i-option value="source">材料学院</i-option>
                <i-option value="math">理学院</i-option>
            </i-select>
        </Form-item>
        <Form-item label="专业名称" prop="major">
            <i-select :model.sync="formValidate.major" placeholder="请选择专业名称">
                <i-option value="science">计算机科学与技术</i-option>
                <i-option value="network">网络工程</i-option>
                <i-option value="communication">通信工程</i-option>
                <i-option value="security">信息安全</i-option>
                <i-option value="connect">物联网工程</i-option>
                <i-option value="software">软件工程</i-option>
            </i-select>
        </Form-item>
        <Form-item label="行政班" prop="classes">
            <i-input :value.sync="formValidate.classes" placeholder="请输入班级名称"></i-input>
        </Form-item>
         <Form-item label="学历层次" prop="xueli">
            <i-select :model.sync="formValidate.year" placeholder="请选择">
                <i-option value="undergraduate">本科生</i-option>
                <i-option value="postgraduate">硕士</i-option>
                <i-option value="PhD">博士</i-option>
            </i-select>
        </Form-item>
        <Form-item label="学制" prop="year">
            <i-select :model.sync="formValidate.year" placeholder="请选择">
                <i-option value="three">3</i-option>
                <i-option value="four">4</i-option>
                <i-option value="five">5</i-option>
            </i-select>
        </Form-item>
        <Form-item label="入学日期">
            <Row>
                <i-col span="11">
                    <Form-item prop="date">
                        <Date-picker type="date" placeholder="选择日期" :value.sync="formValidate.date"></Date-picker>
                    </Form-item>
                </i-col>
            </Row>
        </Form-item>
        <Form-item label="联系电话" prop="telephone">
            <i-input :value.sync="formValidate.telephone" placeholder="请输入联系电话"></i-input>
        </Form-item>
        <Form-item label="邮箱" prop="mail">
            <i-input :value.sync="formValidate.mail" placeholder="请输入邮箱"></i-input>
        </Form-item>
        
        <Form-item label="爱好" prop="interest">
            <Checkbox-group :model.sync="formValidate.interest">
                <Checkbox value="读书">读书</Checkbox>
                <Checkbox value="旅行">旅行</Checkbox>
                <Checkbox value="跑步">跑步</Checkbox>
                <Checkbox value="看电影">看电影</Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="介绍" prop="desc">
            <i-input :value.sync="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formValidate')">提交</i-button>
            <i-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
        </Form-item>
    </i-form>
    </div>
    <div class="face-div">
        <div class="demo-upload-list" v-for="item in uploadList" >
        <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
    </div>
    <Upload
        v-ref:upload
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="camera" size="20"></Icon>
        </div>
    </Upload>
    <Modal title="查看图片" :visible.sync="visible">
        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
    </Modal>
    </div>
    </div>
</template>
<script>
export default {
    name: 'Message',
    data () {
        return {
            formValidate: {
                num: '',
                name: '',
                face: '',
                mail: '',
                city: '',
                gender: '',
                interest: [],
                date: '',
                time: '',
                desc: '',
                nation: '',
                school: '',
                major: '',
                classes: '',
                year: '',
                userId: '',
                telephone: '',
                xueli: '',
            },
            ruleValidate: {
                num: [ {
                    required: true, message: '学号不能为空', trigger: 'blur'
                }],
                userId: [ {
                    required: true, message: '身份证号不能为空', trigger: 'blur'
                }],
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                mail: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                ],
                nation: [
                    { required: true, message: '请选择民族', trigger: 'change' }
                ],
                face: [
                    { required: true, message: '请选择政治面貌', trigger: 'change' }
                ],
                city: [
                    { required: true, message: '请选择城市', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                interest: [
                    { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                    { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                ],
                date: [
                    { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                ],
                time: [
                    { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请输入个人介绍', trigger: 'blur' },
                    { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                ],
                school: [
                    { required: true, message: '请选择学院', trigger: 'change' }
                ],
                major: [
                    { required: true, message: '请选择专业', trigger: 'change' }
                ],
                classes: [ {
                    required: true, message: '班级不能为空', trigger: 'blur'
                }],
                year: [
                    { required: true, trigger: 'change' }
                ],
                telephone: [ {
                    required: true, message: '联系电话不能为空', trigger: 'blur'
                }],
                xueli: [
                    { required: true, message: '请选择学历层次', trigger: 'change' }
                ],
            },
            defaultList: [
                {
                    'name': 'a42bdcc1178e62b4694c830f028db5c0',
                    'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                },
                {
                    'name': 'bc7521e033abdd1e92222d733590f104',
                    'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                }
            ],
            imgName: '',
            visible: false
        }
    },
    computed: {
        uploadList () {
            return this.$refs.upload ? this.$refs.upload.fileList : [];
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                // 从 upload 实例删除数据
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                // 因为上传过程为实例，这里模拟添加 url
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: '最多只能上传 5 张图片。'
                    });
                }
                return check;
            }
        
    },
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
.div-message {
    width: 800px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 5fr 1fr
}
.demo-upload-list{
    display: inline-block;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
}
.demo-upload-list img{
    width: 100%;
    height: 100%;
}
.demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
    display: block;
}
.demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
}

</style>