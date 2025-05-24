<script lang="ts">
	import { game } from '$lib/main.svelte';
	import Scene from '$lib/Scene.svelte';
	import { Canvas } from '@threlte/core';
	import { World } from '@threlte/rapier';
	import { ACESFilmicToneMapping } from 'three';

	// @ts-ignore
	import { Howl } from 'howler';
	import { onDestroy, onMount } from 'svelte';
	import { base } from '$app/paths';

	let sound: Howl;
	let popSound: Howl;
	onMount(() => {
		sound = new Howl({
			src: [base + '/audio/music.mp3'],
			loop: true,
			volume: 0.1
		});

		popSound = new Howl({
			src: [base + '/audio/pop3.mp3']
		});

		sound.play();

		setInterval(() => {
			if (game.playPop) {
				popSound.play();
				game.playPop = false;
			}
		}, 33);
	});

	onDestroy(() => {
		sound.stop();
	});
</script>

<div class="h-screen w-screen">
	<Canvas toneMapping={ACESFilmicToneMapping}>
		<World>
			<Scene />
		</World>
	</Canvas>
</div>

<svelte:window
	onpointerup={(event) => {
		// get percentage of the screen that was clicked on x
		const x = event.clientX / window.innerWidth;


		game.particles.push({
			position: [(x - 0.5) * 3.4, 2.5, 0],
			id: game.nextId,
			random: Math.random().toString()
		});

		//game.nextId++;
		//game.nextRotation = [Math.random() * 6, Math.random() * 6, Math.random() * 6];
		game.nextId = Math.floor(Math.random() * 4);
	}}
/>
