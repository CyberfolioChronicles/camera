<script>
	import { _ } from 'svelte-i18n';
	export let timePeriod = 'day';
	export let selected = false;
</script>

<button class="frame" class:selected>
	<span>{$_(timePeriod)}</span>
</button>

<style lang="scss">
	.frame {
		position: relative;
		padding: 15px;
		text-align: center;
		color: var(--polar-white);
		background: transparent;
		overflow: hidden;
		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: var(--midnight-surf);
			box-shadow: var(--box-shadow);
			backdrop-filter: blur(10px);
			filter: brightness(1.16) opacity(0.69);
		}
		&.selected {
			color: var(--midnight-surf);
			&::before {
				background-color: var(--polar-white);
			}
		}

		&:first-child {
			border-top-left-radius: 35px;
			border-bottom-left-radius: 35px;
		}

		&:last-child {
			border-top-right-radius: 35px;
			border-bottom-right-radius: 35px;
		}
	}
	span {
		position: relative;
	}
</style>
