<style scoped>
/* mobile first */

.work1 .bg-mask {
    /* brightness() 調整亮度 */
    filter: brightness(60%);
}

.work1 img {
    object-fit: cover;
}

.work1 .bg .pc {
    background-color: rgba(0, 0, 0, .6);
    background-blend-mode: multiply;
    display: none;
    /* 「作品集」區塊的背景圖片需依設計稿改為滿版呈現 */
    /* max-width: 1920px; */
    width: 100%;
    height: 800px;
}

.work1 .bg .mobile {
    display: inline;
    max-width: 375px;
    width: 100%;
    height: 390px;
}

.work1 .up-left {
    display: none;
}

.work1 .up-right {
    text-align: center;
    margin-top: 24px;
}

.work1 .up-right h3 {
    color: #1E1E1E;
}

.work1 .up-right p {
    color: #5B5B5B;
}

.work1 .up-right span.badge {
    color: #3B3B3B;
    background-color: #F1F1F1;
}


/* ---===============--- */
/* pc  */
/* ---===============--- */
@media (min-width: 576px) {

    .work1 .bg .pc {
        display: inline;
    }

    .work1 .bg .mobile {
        display: none;
    }

    .work1 .up-left {
        display: inline;
    }

    .work1 .up-left .pc {
        display: none;
    }

    .work1 {
        position: relative;
    }

    .work1 .up-area {
        position: absolute;
        top: 0;
        /* 使置中 */
        left: 0;
        right: 0;
        height: 100%;
    }

    .work1 .up-area .row {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .work1 .up-right {
        text-align: start;
    }

    .work1 .up-right .bg {
        border-radius: 24px;
        background-color: rgba(255, 255, 255, 0.1);
    }

    .work1 .up-right p,
    .work1 .up-right h3 {
        color: #fff;
    }

    .work1 .up-right span.badge {
        color: #3B3B3B;
        background-color: #FFF;
    }

}

@media (min-width: 992px) {
    .work1 .up-left .pc {
        display: inline;
    }

    .work1 .up-left .mobile {
        display: none;
    }


}
</style>
<template>
    <div class="work1">
        <div class="container-fluid">
            <div class="bg text-center">
                <img class="pc" src="@/assets/images/Home/index-work1/work1-bg-lg.png" alt="work1" srcset="">
                <img class="mobile" src="@/assets/images/Home/index-work1/work1-bg-sm.png" alt="work1" srcset="">
            </div>
            <div class="up-area container">
                <div class="row">
                    <div class="align-items-center align-items-lg-end col-7 d-sm-flex h-100 up-left">
                        <img class="pc" src="@/assets/images/Home/index-work1/work1-lg.png" alt="work1" srcset="">
                        <img class="mobile" src="@/assets/images/Home/index-work1/work1-sm.png" alt="work1" srcset="">
                    </div>
                    <div class="up-right col">
                        <div class="align-items-sm-center d-flex h-100 justify-content-center justify-content-sm-start">
                            <div class="bg px-sm-7 py-sm-80">
                                <h3 class="fs-5 mb-2 fw-bold">星際旅行訂票平台</h3>
                                <p class="fs-6 mb-3 mb-sm-4">悠遊宇宙的夢想，從這裡開始實現</p>
                                <div class="mb-3 mb-sm-0">
                                    <span class="badge fs-6 lh-1 me-3 rounded-4 mb-1">網頁設計</span>
                                    <span class="badge fs-6 lh-1 me-3 rounded-4 mb-1">響應式設計</span>
                                    <span class="badge fs-6 lh-1 me-3 rounded-4 mb-1">Bootstrap</span>
                                </div>
                                <hr class="my-7 d-none d-sm-block opacity-100">
                                <div class="d-flex justify-content-center ">
                                    <a
                                        class="align-items-center bg-dark d-flex fs-5 fw-bold px-3 px-sm-6 py-2 py-sm-3 rounded-1 text-primary-50">
                                        完整介紹
                                        <span class="material-symbols-outlined ms-2">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>