export const game: {
	particles: {
		position: [number, number, number];
		rotation: [number, number, number];
		id: number;
		random: string;
	}[];
	nextId: number;
	nextRotation: [number, number, number];
} = $state({
	particles: [],
	nextId: 0,
	nextRotation: [0, 0, 0]
});

export const ids = [
	'Food_Chukaman.gltf',
	'Food_Dango.gltf',
	'Food_EbiNigiri.gltf',
	'Food_Gyoza.gltf',
	'Food_MaguroNigiri.gltf',
	'Food_OctopusNigiri.gltf',
	'Food_Onigiri.gltf',
	'Food_SalmonNigiri.gltf',
	'Food_SalmonRoll.gltf',
	'Food_Wasabi.gltf',
	'Food_Udon.gltf',
	'Food_Ramen.gltf',
	'Food_Roll.gltf',
	'Food_TamagoNigiri.gltf'
];