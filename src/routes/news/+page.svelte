<script>
    export let data
    const {posts} = data
</script>

<div class="p-6">
    <h1>News</h1>
    <br/>
    <ul class="ul">
    {#if posts ==0}
        <h2>News werden bald erwartet.</h2>
    {/if}
        {#each posts as post}
            <li>
                <h2 class="font-bold">
                    <a class="hover:underline" href="{post.path}">
                        {post.meta.title}
                    </a>
                </h2>
                Veröffentlicht: {post.meta.date}
            </li>
        {/each}
    </ul>
</div>
