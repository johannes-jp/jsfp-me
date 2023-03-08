<script>
	export let schoolData;
</script>

<div class="flex flex-col text-left border-l-4 rounded-lg px-4">
	<div class="text-2xl font-semibold pb-2">{schoolData.degree}</div>
	<h1 class="text-lg font-semibold">{schoolData.institution}</h1>
	<div class="flex flex-row gap-2 ml-2">
		<i class="fa-solid fa-location-dot fa-sm text-gray-400 pt-3" />
		{schoolData.location}
		<i class="fa-solid fa-graduation-cap fa-sm text-gray-400 pt-3" />
		{schoolData.graduated}
	</div>
	{schoolData.notes}
</div>
