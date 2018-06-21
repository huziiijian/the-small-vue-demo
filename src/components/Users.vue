<template>
	<div class="users">
		<h1>Users</h1>
<!--添加用户信息-->
    <form v-on:submit="addUser">
    	<input type="text" v-model="newUser.name" placeholder="Enter name">
    	<input type="text" v-model="newUser.email" placeholder="Enter email"> 
    	<input type="submit" value="Submit">
    </form>
<!--展示用户信息 -->
		<ul>
			<li v-for="user in users">
				<input type="checkbox" class="toggle" v-model="user.contacted">
				<span v-bind:class="{contacted:user.contacted}">
				{{user.name}}:{{user.email}}
				<button v-on:click="deleteUser(user)">deleteUser</button>					
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "users",
		data() {
			return {
				newUser:{},
				users: [
				{
					name:"Huzijian1",
					email:"772964145@qq.com1",
					contacted:false

				},
				{
					name:"Huzijian2",
					email:"772964145@qq.com2",
					contacted:false

				},
				{
					name:"Huzijian3",
					email:"772964145@qq.com3",
					contacted:false

				},				
				]
			}
		},
		methods: {
			addUser:function(e){
//				console.log("hello");
				this.users.push({
					name:this.newUser.name,
					email:this.newUser.email,
					contacted:false
				});
				e.preventDefault();
			},
			deleteUser:function(user){
//				console.log("hello");
            this.users.splice(this.users.indexOf(user),1)
			},
			created:function(){
				console.log("hello");
//			this.$http.get("http://jsonplaceholder.typicode.com/users")
//			.then(function(response){
//				this.users=response.data;
//			})
			}
		}
	}
</script>

<style scoped>
	.contacted{
		text-decoration: line-through;
	}
</style>