<script>
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/About.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Content from '$lib/components/Content.svelte';
	import { getContext, setContext } from 'svelte';

	setContext('role', 'management');
	setContext('paperFormat', 'a4');

	const paperFormat = getContext('paperFormat');
	let paper = {
		a4: {
			width: 1240,
			height: 1754,
			marginX: 177,
			marginY: 266
		},
		letter: {
			width: 1275,
			height: 1650,
			marginX: 0,
			marginY: 0
		}
	};
	let pageWidth = paper[paperFormat].width;
	let pageHeight = paper[paperFormat].height;
</script>

<div class="w-[{pageWidth}px] h-[{pageHeight}px] overflow-hidden">
	<!-- <div class="w-[1240px] h-[1754px] overflow-hidden"> -->
	<Header />

	<About />

	<div class="flex flex-row">
		<div class="bg-slate-400 w-[30%] px-8 pt-4 pb-16">
			<Sidebar />
		</div>
		<div class="bg-white w-[70%] pl-6 pr-12">
			<Content />
		</div>
	</div>
</div>
