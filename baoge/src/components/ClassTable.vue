<template>
    <Table border :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        name: 'ClassTable',
        data () {
            return {
                columns1: [
                    {
                        title: '时间',
                        key: 'time',
                    },
                    {
                        title: '星期一',
                        key: 'Monday',
                        width: 150
                    },
                    {
                        title: '星期二',
                        key: 'Tuesday',
                         width: 150
                    },
                    {
                        title: '星期三',
                        key: 'Wednesday',
                         width: 150                        
                    },
                    {
                        title: '星期四',
                        key: 'Thursday',
                         width: 150
                    },
                    {
                        title: '星期五',
                        key: 'Friday',
                         width: 150
                    },
                    {
                        title: '星期六',
                        key: 'Saturday',
                        width: 150
                    },
                    {
                        title: '星期日',
                        key: 'Sunday',
                        width: 150
                    }
                ],
                data1: [
                    
                ]
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