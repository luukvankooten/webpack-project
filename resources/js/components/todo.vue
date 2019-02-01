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

			<list v-for="(key, index) in list" 
				:todo="key.todo" 
				:done="key.done" 
				:number="index" 
				:key="index"
				v-on:edit="edit"
				v-on:remove="remove">		
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
			}
		},

		methods: {
			add() {
				if (this.todo === "") {	

					this.invalid = true

					return
				}

				this.list.push({
					todo: this.todo,
					done: false
				})

				this.todo = ""
				this.invalid = false
			},

			edit(num, val) {
				this.list[num].todo = val
			},

			remove(num) {
				this.list.splice(num, 1)
			},

			input(val) {
				this.todo = val
			}
		}
	}
</script>