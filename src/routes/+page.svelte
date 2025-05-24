<script>
	import { game } from '$lib/main.svelte';
	import Scene from '$lib/Scene.svelte';
	import { Canvas } from '@threlte/core';
	import { World } from '@threlte/rapier';
</script>

<div class="h-screen w-screen">
	<Canvas>
		<World>
			<Scene />
		</World>
	</Canvas>
</div>

<button
	class="absolute top-0 left-0"
	on:click={() => {
		game.particles.push({
			position: [Math.random() * 2 - 1, 3, 0],
			rotation: [Math.random() * 6, Math.random() * 6, Math.random() * 6],
			id: 0,
			random: Math.random().toString()
		});
	}}>Add Particle</button
>
