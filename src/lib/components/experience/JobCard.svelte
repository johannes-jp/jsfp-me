<script>
	import Job from '$lib/components/experience/Job.svelte';
	import data from '$lib/assets/resume.json';
	export let jobIDs;
	export let title;
</script>

<div class="flex flex-col border-l-4 rounded-lg gap-2 text-left pl-4">
	<h1 class="text-2xl font-semibold">{title}</h1>

	{#each jobIDs as job}
		<Job jobData={data.work_experience.find((i) => i.id === job)} />
	{/each}
</div>
