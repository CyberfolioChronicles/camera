<script>
	import Frame from './Frame.svelte';
</script>

<div class="frame-container">
	<Frame timePeriod="month" />
	<Frame timePeriod="day" />
	<Frame timePeriod="hour" selected />
</div>

<style>
	.frame-container {
		display: grid;
		grid-auto-columns: 1fr;
		grid-auto-flow: column;
		gap: 2px;
	}
</style>
