<script>
	import Next from '../player/Next.svelte';
	import PlayButton from '../player/Play.svelte';
	import Previous from '../player/Previous.svelte';
	import SkipBackwards from '../player/SkipBackwards.svelte';
	import SkipForward from '../player/SkipForward.svelte';
</script>

<div class="container">
	<img class="stream" src="https://picsum.photos/1920/1080" alt="Random" />
	<div class="controls">
		<Previous />
		<SkipBackwards />
		<PlayButton />
		<SkipForward />
		<Next />
	</div>
</div>

<style>
	.container {
		position: relative;
		max-width: var(--max-width);
		padding: 0 var(--container-padding);
	}
	.stream {
		width: 100%;
	}

	.controls {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		gap: 10px;
		align-items: center;
	}
</style>
