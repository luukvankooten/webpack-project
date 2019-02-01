<template>
	<card-body>
		<template slot="col-1">

			<input-text 
				v-if="editmode" 
				:value="text"
				:invalid="invalid"
				@input="input">	
			</input-text>

			<h5 v-else class="mb-0 my-auto">

				<span class="badge badge-secondary mr-2">{{ number + 1 }}</span>

				<template v-if="checked">
					<del>
						{{ todo }}
					</del>
				</template>

				<template v-else>
					{{ todo }}
				</template>

			</h5>
		</template>

		<template slot="col-2">

			<btn appearance="success" @click.native="check">
				<i class="fas fa-check"></i>
			</btn>

			<btn appearance="warning" @click.native="edit">
				<i class="fas fa-edit text-white"></i>
			</btn>

			<btn appearance="danger" @click.native="remove">
				<i class="fas fa-trash-alt"></i>
			</btn>

		</template>
	</card-body>
</template>

<script>

	export default {

		props: {
			number: Number,
			todo: String,
			done: Boolean
		},

		data() {
			return {
				checked: false,
				editmode: false,
				text: this.todo,
				invalid: false
			}
		},

		methods: {
			check() {
				if(this.editmode) {
					this.edit()

					return
				}

				this.checked = !this.checked
			},

			edit() {
				if (this.checked) {
					this.checked = false
				}

				if (this.text === "") {
					this.invalid = true

					return
				}

				this.editmode = !this.editmode

				this.invalid = false

				if (!this.editmode) {
					this.$emit('edit', this.number, this.text)
				}
			},

			remove() {
				this.$emit('remove', this.number)
			},

			input(val) {
				this.text = val
			}
		}
	}
</script>
