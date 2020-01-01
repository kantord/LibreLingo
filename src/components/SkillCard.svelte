<script>
    export let title
    export let practiceHref
    export let imageSet
    export let summary
</script>

<div class="card">
    <div class="card-content">
        <div class="media">
            {#if imageSet && imageSet.length}
                <div class="media-left">
                    <figure class="image image-set is-96x96">
                        <img
                            src="{`images/${imageSet[0]}_tinier.jpg`}"
                            alt="" />
                        <img
                            src="{`images/${imageSet[1]}_tinier.jpg`}"
                            alt="" />
                        <img src="{`images/${imageSet[2]}_tiny.jpg`}" alt="" />
                    </figure>
                </div>
            {/if}
            <div class="media-content">
                <p class="title is-4">{title}</p>
                <p class="is-6">{summary}</p>
            </div>

        </div>
    </div>
    <footer class="card-footer">
        <a href="{practiceHref}" class="card-footer-item">
            <button class="button is-primary">Learn {title}</button>
        </a>
    </footer>
</div>

<style>
    .image-set {
        position: relative;
        overflow: hidden;
    }

    .image-set img {
        left: 15%;
        top: 15%;
        width: 70%;
        position: absolute;
    }

    .image-set img:first-child {
        position: absolute;
        left: 0;
        top: 0;
    }

    .image-set img:last-child {
        position: absolute;
        left: 30%;
        top: 30%;
    }

    .card-content {
        height: 147px;
    }
</style>
