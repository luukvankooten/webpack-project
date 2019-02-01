<template>
	<button type="button" class="btn" :class="['btn-'+ appearance]">
		<slot></slot>
	</button>
</template>

<script type="text/javascript">
	export default {
		props: {
			appearance: {
				type: String,
				default: 'primary'
			}
		},
	}
</script>