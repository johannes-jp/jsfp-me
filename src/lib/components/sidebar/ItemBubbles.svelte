<script>
	import { getContext, onMount } from 'svelte';
	import { selectSkillsInRange } from '$lib/functions/selectSkillsInRange';
	// import { getStringWidth } from '$lib/functions/getStringWidth';
	import { groupByWidth } from '$lib/functions/groupByWidth';
	import resumeData from '$lib/assets/resume.json';

	const role = getContext('role');
	export let type;
	// let data;
	export let numberOfItems = 10;
	export let presortedItems = 0;
	export let showLastGroup = 'True';
	export let correction = 0;
	export let logToConsole = 'True';
	export let threshold = [0, 100];
	export let rowOptions;
	export let itemOptions;
	let blockWidth;
	let items;
	let groups;

	// function sumSpacingElements(rowOptions, itemOptions)
	if (type === 'skills') {
		let data = resumeData.skills;
		items = selectSkillsInRange(data, threshold, role);
		items = items.sort((a, b) => b.priority - a.priority);
	} else if (type === 'interests') {
		items = resumeData.interests;
	}

	onMount(() => {
		groups = groupByWidth(
			items,
			numberOfItems,
			presortedItems,
			blockWidth,
			showLastGroup,
			correction,
			logToConsole
		);
	});
</script>

<div bind:offsetWidth={blockWidth} class="flex flex-row flex-wrap whitespace-nowrap {rowOptions}">
	{#if groups}
		{#each groups as group}
			{#each group as item}
				<div class={itemOptions}>{item.name}</div>
			{/each}
		{/each}
	{/if}
</div>
<!-- bind:offsetWidth={blockWidth} -->
<!-- <div>{}</div> -->
