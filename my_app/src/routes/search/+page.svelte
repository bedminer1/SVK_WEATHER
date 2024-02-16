<script>
    export let data
    $: error = data.error
    $: weatherData = data.weatherData
    $: iconURL = weatherData ? `https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}@2x.png`: ""

</script>

{#if error}
    <p>{error}</p>
{:else}
    <div class="w-full h-full flex flex-col justify-center items-center ">
        <h2 class="text-7xl">{weatherData.name}</h2>
        <!-- <h3>{weatherData.country}</h3> -->
		<p class="description">
			{weatherData.weather[0]?.description}
		</p>
		<div class="summary">
			<img
				title={weatherData.weather[0]?.description}
				alt="icon for weather"
				src={iconURL}
			/>
			<span title="temperature" class="temp"
				>{weatherData.main.temp} °C</span
			>
		</div>
		<ul class="list-none">
			<li>
				cloudiness: {weatherData.clouds.all} %
			</li>
			<li>
				Humidity: {weatherData.main.humidity} %
			</li>
			<li>
				Wind Speeds: {weatherData.wind.speed} m/s
			</li>
		</ul>
    </div>
{/if}