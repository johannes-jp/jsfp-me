<script>
	import Bullet from '$lib/components/subcomponents/Bullet.svelte';
	export let jobData;
</script>

<!-- <div class="flex flex-col border-l-2 rounded-lg gap-1 px-4 ml-4 text-left"> -->
<div class="flex flex-row justify-between border-b-2 ml-4">
	<h1 class="text-xl font-semibold italic">{jobData.company}</h1>
	<div class="flex flex-row text-lg italic justify-between gap-8">
		<div class="flex flex-row gap-1">
			<i class="fa-solid fa-location-dot fa-sm text-gray-400 pt-3" />
			<div>{jobData.location}</div>
		</div>
		<div class="flex flex-row gap-2">
			<i class="fa-solid fa-calendar text-gray-400 pt-1" />
			<div>{jobData.dates}</div>
		</div>
	</div>
</div>
<!-- <div class="flex flex-col border-l-2 rounded-lg gap-1 px-4 ml-4 text-left"> -->
{#each jobData.tasks as task}
	<Bullet description={task} />
{/each}
<!-- </div> -->
