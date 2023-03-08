<script>
	export let title;
	export let icons = {
		work: 'fa-solid fa-briefcase fa-xl',
		school: 'fa-solid fa-graduation-cap fa-xl',
		project: 'fa-solid fa-flask fa-xl'
	};
	export let icon;
</script>

<div class="flex flex-row items-center border-b-2 gap-3 p-1 my-4 ml-4">
	<i class={icons[icon]} />

	<h2 class="text-xl font-semibold text-left whitespace-nowrap w-1/2">{title}</h2>
</div>
