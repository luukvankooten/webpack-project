<template>
	<input type="text" 
		class="form-control" 
		:placeholder="placeholder" 
		v-model="input"
		:class="{'is-invalid': non_valid || invalid}">
</template>

<script type="text/javascript">
	export default {
		props: {
			value: {
				type: [String, Number],
				default: ""
			},
			
			placeholder: {
				type: [String, Number],
				default: ""
			},
			
			required: {
				type: Boolean,
				default: true,
			},

			invalid: {
				type: Boolean,
				default: false
			}
		},

		data() {
			return {
				non_valid: this.invalid,
				input: this.value 
			}
		},

		watch: {
			input(val) {
				if (this.required && 
					(this.input === "" || this.input === null)) {
					
					this.non_valid = true
				}

				if (this.non_valid) {
					this.non_valid = false
				}
				
				this.$emit('input', this.input)
			},

			value(val) {
				if (val === "") {
					this.input = ""
				}
			}

		}
	}
</script>