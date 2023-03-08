<script>
	export let title;
	import SideTitle from './SideTitle.svelte';
</script>

<SideTitle {title} />
<div
	class="grid grid-cols-6 grid-rows-2 gap-2 -ml-1 items-center text-xl font-semibold whitespace-nowrap"
>
	<i class="fa-brands fa-free-code-camp fa-xl justify-self-center" />
	<h2 class="col-span-5">Data Analysis - Python</h2>
	<i class="fa-brands fa-google justify-self-center" />
	<h2 class="col-span-5">Data Analytics</h2>
	<i class="fa-brands fa-google justify-self-center" />
	<h2 class="col-span-5">Finance Data Analyst</h2>
	<i class="fa-solid fa-helicopter justify-self-center" />
	<h2 class="col-span-5">Remote Pilot (FAA)</h2>
</div>
