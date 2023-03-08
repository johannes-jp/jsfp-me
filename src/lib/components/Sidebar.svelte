<script>
	// import About from "./subcomponents/About.svelte";
	import Certifications from './sidebar/Certifications.svelte';
	import BubbleCard from './sidebar/BubbleCard.svelte';
	// export let props;
</script>

<!-- sidebar div assuming h-136px header-->
<div class="flex flex-col h-full justify-between bg-inherit">
	<div class="overflow-hidden">
		<!-- bg-slate-400 -->
		<div class="flex flex-col gap-14">
			<BubbleCard
				title="Key Skills"
				bubbleProps={{
					type: 'skills',
					// numberOfItems: 3,
					presortedItems: 4,
					threshold: [80, 100],
					showLastGroup: 'True',
					logToConsole: 'True',
					rowOptions: 'gap-2.5 justify-start',
					itemOptions: 'border-2 border-slate-500 rounded-xl text-lg font-semibold bg-white px-2'
				}}
			/>

			<BubbleCard
				title="Other Skills"
				bubbleProps={{
					type: 'skills',
					// numberOfItems: 3,
					presortedItems: 4,
					threshold: [50, 79],
					showLastGroup: 'True',
					logToConsole: 'True',
					rowOptions: 'gap-2.5 justify-start',
					itemOptions: 'border-2 border-slate-500 rounded-xl text-lg font-semibold bg-white px-2'
				}}
			/>

			<BubbleCard
				title="Interests"
				bubbleProps={{
					title: 'Interests',
					type: 'interests',
					// numberOfItems: 3,
					showLastGroup: 'True',
					logToConsole: 'True',
					rowOptions: 'gap-2.5 justify-start',
					itemOptions: 'text-lg font-semibold border-l-4 pl-2 rounded-lg'
				}}
			/>

			<div class=""><Certifications title="Certifications" /></div>
		</div>
	</div>
	<div class="text-lg text-left">Resume built with <br /> SvelteJS and Tailwind CSS</div>
</div>
