<script>
	import RotoclearPillButton from '../buttons/RotoclearPillButton.svelte';
</script>

<div class="current-time">
	<RotoclearPillButton>
		<span slot="title">2024-02-20 10:58:50</span>
	</RotoclearPillButton>
</div>

<style>
	.current-time {
		position: absolute;
		bottom: 0;
		transform: translate(0%, calc(50% + 5px));
	}
</style>
