<script>
	import BatchSelectButton from '../batch/BatchSelectButton.svelte';
	import Category from '../categories/Category.svelte';
	import Filter from '../filter/Filter.svelte';
	import FramePicker from '../framepicker/FramePicker.svelte';
	import CurrentTime from '../timepicker/CurrentTime.svelte';
	import DownloadItem from './DownloadItem.svelte';
	import ToggleViewButton from './ToggleViewButton.svelte';
</script>

<header>
	<div class="header__area header__area--left">
		<Category />
		<Filter />
		<BatchSelectButton />
	</div>
	<div class="header__area header__area--middle">
		<FramePicker />
		<CurrentTime />
	</div>
	<div class="header__area header__area--right">
		<DownloadItem />
		<ToggleViewButton />
	</div>
</header>

<style lang="scss">
	header {
		height: 100px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 0 177px;
	}
	.header__area {
		display: flex;
		align-items: center;
		&--left {
			justify-content: flex-start;
		}
		&--middle {
			justify-content: center;
			flex-direction: column;
			position: relative;
		}
		&--right {
			justify-content: flex-end;
		}
	}
</style>
