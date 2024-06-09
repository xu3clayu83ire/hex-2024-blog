<style>
/* mobile first */
.service-item .bg {
    background-color: #fff;
    background-image: none;
}

/* ---===============--- */
/* pc  */
/* ---===============--- */
@media (min-width: 576px) {
    .service-item .bg {
        background-image: url("../../assets/images/Home/homepage-services-bg.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        max-width: 1920px;
        max-height: 800px;
    }
}
</style>

<script setup>
import ServiceItem from '@/components/Service/items.vue';
</script>
<template>
    <section class="service-item">
        <div class="container-fluid">
            <div class="bg mx-auto">
                <div class="start-0 end-0 top-0 h-100">
                    <div class="align-items-center d-grid h-100">
                        <div class="my-80 my-sm-120 text-center">
                            <h2 class="fs-2 fw-semibold text-center text-primary-700 title-deco mb-7 mb-sm-80">服務項目</h2>
                            <!--  -->
                            <ServiceItem />
                            <!--  -->
                            <div class="mt-7 mt-sm-80">
                                <p class="fs-3 fw-semibold mb-4 mb-sm-7">想要合作或瞭解更多？</p>
                                <div class="d-flex justify-content-center">
                                    <a
                                        class="align-items-center bg-dark d-flex fs-5 fw-bold px-3 px-sm-6 py-2 py-sm-3 rounded-1 text-primary-50">
                                        詳細內容與合作流程
                                        <span class="material-symbols-outlined ms-2">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>