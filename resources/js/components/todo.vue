<template>
	<div class="row h-100 justify-content-center align-items-center">
		
		<div class="card w-75">
			<div class="card-header text-white bg-dark">
				<h3 class="m-0">📝</h3>
			</div>

			<card-body>
					<template slot="col-1">
						<input-text
							:value="todo"
							:invalid="invalid"
							@input="input"
							placeholder="Things todo">
						</input-text>
					</template>

					<template slot="col-2">
						<btn appearance="success" slot="col-2" @click.native="add">
							<i class="fas fa-plus"></i>
						</btn>
					</template>
			</card-body>

			<list v-for="key in list" 
				:todo="key.todo"  
				:key="key.id"
				@edit="edit"
				@remove="remove">		
			</list>
		</div>	
	</div>
</template>

<script type="text/javascript">
	

	export default {
		data() {
			return {
				list: [],
				todo: "",
				invalid: false,
				counter: 0,
			}
		},

		methods: {
			add() {
				if (this.todo === "") {	

					this.invalid = true

					return
				} else {
					this.invalid = false
				}

				this.list.push({
					id: this.counter,
					todo: this.todo
				})


				++this.counter
				this.todo = ""
				
			},

			edit(num, val) {
				let pos = this.getPosition(num)

				this.list[pos].todo = val
			},

			remove(num) {
				let pos = this.getPosition(num)

				this.$delete(this.list, pos)
			},

			input(val) {
				this.todo = val
			},

			getPosition(num) {
				return this.list.map(l => l.id)
				.indexOf(num)
			}
		}
	}
</script>