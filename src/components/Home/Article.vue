<style scoped>
.article .point>span {
    width: 10px;
    height: 10px;
    background-color: #E9E9E9;
    display: block;
    border-radius: 50%;
    margin: 0 1rem;
}

.article .point>span:first-child {
    background-color: #000;
}

.article .text-area {
    max-width: 416px;
    margin: auto;
}
</style>

<template>
    <section class="article">
        <div class="my-80 my-sm-120">
            <h2 class="fs-2 fw-semibold text-center text-primary-700 title-deco mb-7 mb-sm-80">精選文章</h2>
            <div class="container">
                <div class="mb-7 row row-gap-8 row-gap-xl-4">
                    <div class="col-12 col-xl-4">
                        <div class="text-center text-xl-center">
                            <img class="img-fluid mb-1 rounded-2" src="@/assets/images/Home/article/article-image1.png">
                        </div>
                        <div class="text-area">
                            <p class="fw-bold fs-4 mb-1 text-primary-700">
                                Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)
                            </p>
                            <div class="d-flex justify-content-between">
                                <span class="badge bg-primary-200 fs-6 lh-1 me-3 rounded-4 text-primary-700">UI/UX
                                    新知</span>
                                <span class="text-primary-600">2024/02/10</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4">
                        <div class="text-center text-xl-center">
                            <img class="img-fluid mb-1 rounded-2" src="@/assets/images/Home/article/article-image2.png">
                        </div>
                        <div class="text-area">
                            <p class="fw-bold fs-4 mb-1 text-primary-700">
                                給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)
                            </p>
                            <div class="d-flex justify-content-between">
                                <span class="badge bg-primary-200 fs-6 lh-1 me-3 rounded-4 text-primary-700">UI/UX
                                    新知</span>
                                <span class="text-primary-600">2023/11/20</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4">
                        <div class="text-center text-xl-center">
                            <img class="img-fluid mb-1 rounded-2" src="@/assets/images/Home/article/article-image3.png">
                        </div>
                        <div class="text-area">
                            <p class="fw-bold fs-4 mb-1 text-primary-700">
                                給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)
                            </p>
                            <div class="d-flex justify-content-between">
                                <span class="badge bg-primary-200 fs-6 lh-1 me-3 rounded-4 text-primary-700">UI/UX
                                    新知</span>
                                <span class="text-primary-600">2023/10/18</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-xl-flex d-none justify-content-xl-center point">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div class="d-flex justify-content-center d-xl-none">
                    <a
                        class="align-items-center bg-dark d-flex fs-5 fw-bold px-3 px-sm-6 py-2 py-sm-3 rounded-1 text-primary-50">
                        更多文章
                        <span class="material-symbols-outlined ms-2">arrow_forward</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>