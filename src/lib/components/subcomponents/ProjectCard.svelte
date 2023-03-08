<script>
	import Bullet from '../subcomponents/Bullet.svelte';
	import data from '$lib/assets/resume.json';
	export let name = 'Data Engineering';
	let projectData = data.projects[data.projects.findIndex((i) => i.title === name)];
	// console.log(projectData.title);
</script>

<div class="flex flex-col text-left border-l-4 rounded-lg px-4">
	<div class="text-2xl font-semibold mb-2">{projectData.title}</div>
	<div class="flex flex-col gap-1">
		{#each projectData.tasks as task}
			<Bullet description={task} options="leading-snug" />
		{/each}
	</div>
</div>
