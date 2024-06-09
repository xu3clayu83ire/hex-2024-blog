<script setup>
import { Modal } from 'bootstrap';
import { ref, onMounted } from 'vue';

const props = defineProps(['data'])
const datas = props.data;
let modal = null;
onMounted(() => {
    modal = new Modal(document.getElementById('detailModal'), {
        keyboard: false
    });
})

function show() {
    modal.show();
}

function hide() {
    modal.hide();
}

</script>


<template>
    <div class="container">
        <div class="d-flex flex-wrap row-gap-80 gap-4 justify-content-center">
            <div v-for=" data in  datas" :key="data.id">
                <a @click="show" class="pointer">
                    <img class="img-fluid mb-4 rounded-3" :src="data.imageUrl" alt="">
                    <div>
                        <h3 class="text-primary-700 fs-2 fw-bold mb-2">{{ data.title }}</h3>
                        <p class="text-primary-500 fs-6 mb-3">{{ data.description }}</p>
                        <div>
                            <span class="badge bg-primary-200 fs-6 lh-1 me-3 rounded-4 text-primary-700">{{
                data.tags[0] }}</span>
                            <span class="badge bg-primary-200 fs-6 lh-1 me-3 rounded-4 text-primary-700">{{
                data.tags[1] }}</span>
                            <span class="badge bg-primary-200 fs-6 lh-1 me-3 rounded-4 text-primary-700">{{
                data.tags[2] }}</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div id="detailModal" class="modal" tabindex="-1">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <h5 class="modal-title">Modal title</h5> -->
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="hide"></button>
                </div>
                <div class="modal-body my-7">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="fs-3 fw-bold text-primary-700">星際旅行訂票平台</h2>
                            <p class="text-primary-500">悠遊宇宙的夢想，從這裡開始實現</p>
                        </div>
                        <div class="row my-7 d-flex justify-content-center">
                            <div class="col-12 col-lg-10 px-5">
                                <div class="row row-gap-4">
                                    <div class="col-12 col-lg-7 text-primary-800">
                                        <p>STAR TRAVEL 為 KK公司宇宙旅行的購票網站。</p>
                                        <p>主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。</p>
                                    </div>
                                    <div class="col-12 col-lg-5 text-primary-600">
                                        <div class="border-primary-400 border-top d-lg-none text-center">
                                            <div class="mt-4">
                                                <p>設計原則</p>
                                                <p>宇宙旅行、深色背景、強烈視覺效果</p>
                                            </div>
                                            <div class="mt-4">
                                                <p>開發方式</p>
                                                <p>Bootstrap、Javascript、RWD</p>
                                            </div>
                                        </div>
                                        <div class="d-none d-lg-block">
                                            <p>設計原則：宇宙旅行、深色背景、強烈視覺效果</p>
                                            <p>開發方式：Bootstrap、Javascript、RWD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center row row-gap-82">
                            <div class="col-12 col-lg-8 row-gap-82">
                                <img class="img-fluid mb-4 rounded-3" src="@/assets/images/works/modal-image1.png"
                                    alt="">
                                <div class="text-center">
                                    <h3 class="fs-4 fw-bold text-primary-800">主視覺</h3>
                                    <p class="text-primary-600">可直接設定日期、起迄星球、張數，快速查詢可購買的票券。</p>
                                </div>
                            </div>
                            <div class="col-12 col-lg-8">
                                <img class="img-fluid mb-4 rounded-3" src="@/assets/images/works/modal-image2.png"
                                    alt="">
                                <div class="text-center">
                                    <h3 class="fs-4 fw-bold text-primary-800">推薦查詢</h3>
                                    <p class="text-primary-600">給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
            </div>
        </div>
    </div>
</template>