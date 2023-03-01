<script>
    export let data
    const {title, date, Content} = data
</script>

<div class="flex place-content-center">
    <article class="text-center">
        <h1 class="px-52">{title}</h1>
        <p class="p-0 text-center">Veröffentlicht: {date}</p>
        <hr class="border-gray-500 border-dashed border-spacing-x-1">
        <Content/>
    </article>
</div>
