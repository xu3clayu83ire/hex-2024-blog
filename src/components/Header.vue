<style>
.navbar-nav .nav-link.active span::before {
    --size: 8px;
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid #919191;
    mask: conic-gradient(at var(--size) var(--size), rgba(0, 0, 0, 0) 75%, #000 0) 0 0 / calc(100% - var(--size)) calc(100% - var(--size)), linear-gradient(#000 0 0) content-box;
}

@media (max-width: 992px) {
    .navbar-nav .nav-link {
        font-size: 20px;
        display: inline-block;
    }
}
</style>


<template>
    <header class="border-primary-200 py-lg-3">
        <nav class="navbar navbar-expand-lg my-0 my-lg-1">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <!-- <img src="@/assets/images/logo.svg" alt="logo"> -->
                    AnnA
                </a>
                <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="material-symbols-outlined fs-1 text-primary-900">menu</span>
                </button>
                <div class="collapse navbar-collapse offset-lg-3" id="navbarSupportedContent">
                    <ul class="fw-semibold me-auto navbar-nav text-center text-lg-start lh-base">
                        <li class="me-0 me-lg-8 nav-item mb-4 mb-lg-0">
                            <a class="nav-link position-relative px-2 py-1 active" aria-current="page" href="/">
                                <span>首頁</span>
                            </a>
                        </li>
                        <li class="me-0 me-lg-8 nav-item mb-4 mb-lg-0">
                            <a class="nav-link position-relative px-2 py-1" href="/service">
                                <span>作品集</span>
                            </a>
                        </li>
                        <li class="me-0 me-lg-8 nav-item mb-4 mb-lg-0">
                            <a class="nav-link position-relative px-2 py-1" href="/service"><span>服務項目</span></a>
                        </li>
                        <li class="me-0 me-lg-8 nav-item mb-4 mb-lg-0">
                            <a class="nav-link position-relative px-2 py-1" href="/service"><span>部落格</span></a>
                        </li>
                        <li class="nav-item mb-4 mb-lg-0 ">
                            <a class="nav-link position-relative px-2 py-1" href="/service"><span>聯絡我</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>