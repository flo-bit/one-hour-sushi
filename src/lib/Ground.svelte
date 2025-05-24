<script lang="ts">
	import { T } from '@threlte/core';
	import { AutoColliders, Collider } from '@threlte/rapier';
</script>

<T.Group rotation.y={Math.PI / 2}>
	<T.Group position={[0, -1, 0]}>
		<T.Mesh receiveShadow>
			<T.BoxGeometry args={[4, 0.4, 4]} />
			<T.MeshStandardMaterial />
		</T.Mesh>

		<T.Group position={[0, -1.8, 0]}>
			<Collider shape={'cuboid'} args={[4, 2, 4]}></Collider>
		</T.Group>
	</T.Group>

	<!-- walls -->
	<T.Group position={[0, 1, 2]}>
			<T.Mesh receiveShadow>
				<T.BoxGeometry args={[4, 4, 0.4]} />
				<T.MeshStandardMaterial />
			</T.Mesh>
			
		<T.Group position={[0, -2, 1.8]}>
			<Collider shape={'cuboid'} args={[4, 4, 2]}></Collider>
		</T.Group>
	</T.Group>
	<T.Group position={[0, 1, -2]}>

			<T.Mesh receiveShadow>
				<T.BoxGeometry args={[4, 4, 0.4]} />
				<T.MeshStandardMaterial />
			</T.Mesh>

		<T.Group position={[0, -2, -1.8]}>
			<Collider shape={'cuboid'} args={[4, 4, 2]}></Collider>
		</T.Group>
	</T.Group>
</T.Group>
