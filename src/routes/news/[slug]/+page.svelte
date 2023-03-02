<script>
    export let data
    const {title, date, Content} = data
</script>

<div class="flex place-content-center">
    <div class="text-center min-sm:max-w-sm">
        <h1 class="mx-auto text-3xl">{title}</h1>
        <p class="p-0 p text-center">Veröffentlicht: {date}</p>
        <hr class="border-gray-500 border-dashed border-spacing-x-1">
        <Content/>
    </div>
</div>
