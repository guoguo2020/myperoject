<template>
  <div id="app">
    <div class="layout">
    <div class="title-div">
      <img src="./assets/UJS_logo.png" alt="江苏大学" width="200px" height="50px">
      <h1>{{msg}}</h1>
    </div>
    <Layout>
        <Header class="header-div">
            <Dropdown  class="menu-down">
                <a href="javascript:void(0)">
                    网上选课
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>本专业选课</Dropdown-item>
                    <Dropdown-item>体育项目选课</Dropdown-item>
                    <Dropdown-item>校选修课</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown style="margin-left: 20px" class="menu-down">
                <a href="javascript:void(0)">
                    网上报名
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>
                        <Button  @click="closable" class='btn-alert'>网上报名</Button>
                    </Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown style="margin-left: 20px" class="menu-down">
                <a href="javascript:void(0)">
                    信息维护
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <router-link  to="/Message" >
                        <Dropdown-item>
                        个人信息
                        </Dropdown-item>
                    </router-link>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown  class="menu-down">
                <a href="javascript:void(0)">
                    信息查询
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <router-link to='/ClassTable'>
                        <Dropdown-item>班级推荐课表</Dropdown-item>
                    </router-link>
                    <Dropdown-item>学生个人课表</Dropdown-item>
                    <Dropdown-item>培养计划</Dropdown-item>
                    <Dropdown-item>考试安排</Dropdown-item>
                    <Dropdown-item>补考安排</Dropdown-item>
                    <Dropdown-item>成绩信息</Dropdown-item>
                    <Dropdown-item>等级信息</Dropdown-item>
                    <Dropdown-item>教室使用情况</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown style="margin-left: 20px" class="menu-down">
                <a href="javascript:void(0)">
                    教学质量评价
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>
                        <Button  @click="closable1" class='btn-alert'>期末教学质量评价</Button>
                    </Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            
        </Header>
        <Content :style="{padding: '0 50px'}">
            <Breadcrumb :style="{margin: '20px 0'}">
                <BreadcrumbItem>当前位置--通知公告</BreadcrumbItem>
            </Breadcrumb>
            <router-view></router-view>
            <!-- <Card>
                <div style="min-height: 800px;">
                    <div id="main" style="width: 500px; height: 600px;"></div>
                </div>
            </Card> -->
            <span class="news">相关新闻</span>
            <Test></Test>
        </Content>
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
    </div>
    
  </div>
</template>

<script>
import Test from '@/components/Test'
export default {
  name: 'App',
  components: {  //引入的另一个组件的名字
    Test
  },
  data () {
    return {
      msg: '教务管理系统',
    }
  },
  props: {
  },
  events: {

  },
  methods: {
    closable () {
        this.$Message.info({
            content: '此站点提示，现在不是网上报名时间！',
            duration: 10,
            closable: true
        });
    },
    closable1 () {
        this.$Message.info({
            content: '此站点提示，您已经评价过！',
            duration: 10,
            closable: true
        });
    }
  },
  watch: {},
  mounted () {
    //   this.drawChart()
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.title-div {
  display: grid;
  grid-template-columns: 200px 150px auto
}
.header-div {
  background-color: #d2e4fd
}
h1 {
    text-align:center;
    color: #3e96e0
}
.news {
    font-size: 16px;
}
.menu-down {
    width: 150px;
    font-size: 16px;
    color: white;
}
.btn-alert {
    outline: none;
    border: none;
    background-color: transparent
}

</style>
