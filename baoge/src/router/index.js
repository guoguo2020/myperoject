import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Message from '@/components/Message'
import ClassTable from '@/components/ClassTable'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ClassTable',
      name: 'ClassTable',
      component: ClassTable
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    }
    
  ]
})
