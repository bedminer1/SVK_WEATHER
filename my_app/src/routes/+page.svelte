<script>
    export let data
    console.log(data)
</script>

<div>
    <form method="post">
        <input type="text" name="cityname" placeholder="City" class="px-2 text-gray-700" />
        <button type="submit">Search</button>
    </form>
</div>
<div>
    {#if data}
    <p>{data.name}</p>
    <p>{data.main.temp}</p>
    <p>{data.weather[0].main}</p>
    {:else}
    <p>No Countries Yet</p>
    {/if}
</div>
