<template>
<div>
    <i-table :columns="columns1" :data="data1" class="table-main"></i-table>
</div>
</template>

<script>
export default {
    name: 'Test',
    data () {
        return {
            columns1: [
                {
                    title: '公告标题',
                    key: 'newsTitle',
                },
                {
                    title: '发布单位',
                    key: 'unit',
                    width: 200
                },
                {
                    title: '发布时间',
                    key: 'time',
                    width: 200
                },
                {
                    title: '有效期限',
                    key: 'lastTime',
                    width: 200
                }
            ],
            data1: [
                {
                    newsTitle: '【选课通知】关于做好2019-2020-1学期学生选课工作的通知',
                    unit: '教务处',
                    time: '2019-06-14 08:52:47',
                    lastTime: '2019-10-31'
                },
                {
                    newsTitle: '2018版各专业培养计划',
                    unit: '教务处',
                    time: '2019-06-12 09:47:18',
                    lastTime: '2022-06-30'
                },
                {
                    newsTitle: '校公共选修课课程介绍、老师简介（部分课程）。注：课程名称、类别、学分等信息以选课系统为准！',
                    unit: '教务处',
                    time: '2016-12-14 09:57:23',
                    lastTime: '2019-12-31'
                },
                {
                    newsTitle: '网上借教室流程',
                    unit: 'system',
                    time: '	2014-10-16 14:29:12',
                    lastTime: '2099-12-31'
                },
                
            ],

        }
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

</style>