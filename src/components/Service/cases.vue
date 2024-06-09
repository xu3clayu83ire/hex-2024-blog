<script setup>
import Card from '@/components/Common/card.vue';
import { ref } from 'vue'

import workImage4 from '@/assets/images/works/work-image4.png';
import workImage5 from '@/assets/images/works/work-image5.png';
import workImage6 from '@/assets/images/works/work-image6.png';
import workImage7 from '@/assets/images/works/work-image7.png';

const datas = ref([
    {
        id: 1,
        imageUrl: workImage4,
        title: '美美美早餐店 POS 機 UI Design',
        description: '訂單送單一目瞭然，自動報表分析好輕鬆',
        tags: [
            'UI設計', '前端開發', 'Wix'
        ]
    },
    {
        id: 2,
        imageUrl: workImage6,
        title: '巧克巧克形象官網設計',
        description: '三步驟完成訂票，電腦手機都支援',
        tags: [
            'UI設計', '設計系統', '網路電商'
        ]
    },
    {
        id: 3,
        imageUrl: workImage5,
        title: '電影院訂票系統',
        description: '三步驟完成訂票，電腦手機都支援',
        tags: [
            '前端開發', '後端支援', 'Vue'
        ]
    },
    {
        id: 4,
        imageUrl: workImage7,
        title: '2023 餉茶坊飲料旗艦店活動官網設計',
        description: '主打水果主題，冰鎮夏天暑氣',
        tags: [
            '網頁設計', '切版服務', 'Javascript'
        ]
    }
])

</script>

<template>
    <Card :data="datas"></Card>
</template>