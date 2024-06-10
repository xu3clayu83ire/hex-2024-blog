<template>
    <ul class="blog-list d-flex d-lg-block my-4 mx-3 my-lg-80 mx-xl-80 mx-lg-10 fs-5">
        <li class="active">
            <a href="">全部文章</a>
        </li>
        <li><a href="">UI/UX 新知</a></li>
        <li><a href="">數位產品設計</a></li>
        <li><a href="">平面設計</a></li>
        <li><a href="">前端開發</a></li>
    </ul>
</template>
<style scoped>
.blog-list li {
    margin-bottom: 0;
    margin-left: 32px;
}

.blog-list li>a {
    color: #5B5B5B;
    font-size: 1rem;
}

.blog-list li:hover>a {
    color: #1E1E1E;
    border-bottom: #5B5B5B 2px solid;
    padding-bottom: 4px;
}

@media (min-width: 992px) {

    .blog-list li {
        margin-bottom: 32px;
        margin-left: 0;
    }

    .blog-list li>a {
        font-size: 1.25rem;
    }

    .blog-list li.active>a {
        color: #1E1E1E;
        border-bottom: #1E1E1E 2px solid;
        padding-bottom: 4px;
    }

}
</style>