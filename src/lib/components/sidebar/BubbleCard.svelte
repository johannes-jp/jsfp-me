<script>
	export let bubbleProps;
	export let title;
	import ItemBubbles from './ItemBubbles.svelte';
	import SideTitle from './SideTitle.svelte';
</script>

<div>
	<SideTitle {title} />
	<ItemBubbles {...bubbleProps} />
</div>
