<script lang="ts">
	import { T } from '@threlte/core';
	import { AutoColliders, Collider } from '@threlte/rapier';

	let color = '#d6d3d1';
</script>

<T.Group rotation.y={Math.PI / 2} position.y={-2}>
	<T.Group position={[0, -1, 0]}>
		<T.Mesh receiveShadow>
			<T.BoxGeometry args={[4, 0.4, 4]} />
			<T.MeshStandardMaterial {color} />
		</T.Mesh>

		<T.Group position={[0, -99.8, 0]}>
			<Collider shape={'cuboid'} args={[4, 100, 4]}></Collider>
		</T.Group>
	</T.Group>


	<T.Group position={[0, 105, 0]}>
		<Collider shape={'cuboid'} args={[4, 100, 4]}></Collider>
	</T.Group>
	<!-- walls -->
	<T.Group position={[0, 2, 2]}>
		<T.Mesh receiveShadow>
			<T.BoxGeometry args={[4, 6, 0.4]} />
			<T.MeshStandardMaterial {color} />
		</T.Mesh>

		<T.Group position={[0, -1, 99.8]}>
			<Collider shape={'cuboid'} args={[4, 4, 100]}></Collider>
		</T.Group>
	</T.Group>
	<T.Group position={[0, 2, -2]}>
		<T.Mesh receiveShadow>
			<T.BoxGeometry args={[4, 6, 0.4]} />
			<T.MeshStandardMaterial {color} />
		</T.Mesh>

		<T.Group position={[0, -1, -99.8]}>
			<Collider shape={'cuboid'} args={[4, 4, 100]}></Collider>
		</T.Group>
	</T.Group>
</T.Group>
