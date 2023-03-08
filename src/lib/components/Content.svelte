<script>
	import Experience from '$lib/components/experience/Experience.svelte';
	import EducationCard from '$lib/components/subcomponents/Education-Card.svelte';
	import SectionTitle from './subcomponents/SectionTitle.svelte';
	import ProjectCard from '$lib/components/subcomponents/ProjectCard.svelte';
	import data from '$lib/assets/resume.json';
</script>

<!-- content div assuming h-136px header-->
<div class="bg-inherit">
	<!-- experience ------------------->
	<div class="">
		<Experience />
	</div>

	<!-- education -------------------->
	<SectionTitle title="Education" icon="school" />

	<div class="flex flex-row">
		{#each data.education as school}
			<EducationCard schoolData={school} />
		{/each}
	</div>

	<!-- projects -------------------->
	<SectionTitle title="Projects" icon="project" />
	<div class="flex flex-row my-4">
		<ProjectCard name="Data Engineering" />
		<ProjectCard name="Language Learning Database" />
	</div>
</div>
