<script>
	import { writable } from 'svelte/store';
	import RoundDotButton from './RoundDotButton.svelte';
	import SettingsSquareButton from './SettingsSquareButton.svelte';
	import VisualBackupSquareButton from './VisualBackupSquareButton.svelte';
	import Light0ButtonSlider from './Light0ButtonSlider.svelte';
	import Light1ButtonSlider from './Light1ButtonSlider.svelte';
	import AdvancedMode from './AdvancedMode.svelte';
	import { fade } from 'svelte/transition';
	import PictureInPictureButton from './PictureInPictureButton.svelte';

	let opened = writable(false);
</script>

<div class="quicksettings">
	{#if !$opened}
		<RoundDotButton on:click={() => opened.update((value) => !value)} />
	{:else}
		<div class="quicksettings__elements" transition:fade>
			<SettingsSquareButton />
			<VisualBackupSquareButton />
			<PictureInPictureButton />
			<Light0ButtonSlider />
			<Light1ButtonSlider />
			<AdvancedMode />
		</div>
	{/if}
</div>

<style>
	.quicksettings {
		position: absolute;
		left: 16px;
		top: 16px;
	}
	.quicksettings__elements {
		display: flex;
		flex-direction: row;
		gap: 16px;
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}
</style>
