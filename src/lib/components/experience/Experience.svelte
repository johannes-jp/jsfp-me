<script>
	import JobCard from '$lib/components/experience/JobCard.svelte';
	import SectionTitle from '$lib/components/subcomponents/SectionTitle.svelte';
</script>

<SectionTitle title="Work Experience" icon="school" />

<div class="flex flex-col gap-6">
	<!-- <div class="flex flex-col border-l-2 rounded-lg gap-1 px-4 ml-4 text-left"> -->
	<JobCard jobIDs={[1]} title="Trader, Fintech Developer" />

	<JobCard jobIDs={[2, 3]} title="Technology & Business Analytics" />

	<JobCard jobIDs={[4]} title="Materials Research Engineer" />
</div>
