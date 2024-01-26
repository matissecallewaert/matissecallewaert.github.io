<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';
	import '@fortawesome/fontawesome-free/css/all.css';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let images: HTMLImageElement[] = []; // Array to store loaded images
	let imagePaths = [
		'github.svg',
		'linux.svg',
		'ml.svg',
		'node.svg',
		'py.svg',
		'react.svg',
		'rust.svg',
		'sql.svg',
		'ts.svg'
	]; // Replace with actual paths

	// Function to load images
	function loadImages(): Promise<HTMLImageElement[]> {
		return Promise.all(
			imagePaths.map((path) => {
				return new Promise<HTMLImageElement>((resolve, reject) => {
					let img = new Image();
					img.onload = () => resolve(img);
					img.onerror = reject;
					img.src = `${base}/${path}`;
				});
			})
		);
	}

	// Ensure this matches the ID of your canvas element
	onMount(() => {
		canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
		const ctx = canvas.getContext('2d')!;
		loadImages().then((loadedImages) => {
			images = loadedImages;
			requestAnimationFrame(() => drawInfinityCurve(ctx, images));
		});
		// Adjust these values to make the icon size smaller
		const iconWidth = 30; // Decrease icon width as needed
		const iconHeight = 30; // Decrease icon height as needed

		// Generate a random phase for each icon
		const steps = imagePaths.length; // Number of icons
		const offsetIncrement = (2 * Math.PI) / steps;

		let time = 0;

		function drawInfinityCurve(ctx: CanvasRenderingContext2D, images: HTMLImageElement[]) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Define the size and position of the curve
			const centerX = canvas.width / 2;
			const centerY = canvas.height / 2;
			const size = Math.min(canvas.width, canvas.height) / 3;

			// Draw the infinity curve using the lemniscate of Bernoulli (a figure-eight curve)
			const scale = size * 2;
			const speed = 0.0045; // Speed of the animation

			for (let i = 0; i < steps; i++) {
				const phaseOffset = offsetIncrement * i;
				const t = (time + phaseOffset) % (2 * Math.PI); // Parameter t from 0 to 2*PI
				const x = (scale * Math.sin(t)) / (1 + Math.pow(Math.cos(t), 2)) + centerX;
				const y = (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.pow(Math.cos(t), 2)) + centerY;

				const image = images[i];

				// Draw the icon at position (x, y)
				ctx.drawImage(image, x - iconWidth / 2, y - iconHeight / 2, iconWidth, iconHeight);
			}

			// Update time
			time += speed;
			requestAnimationFrame(() => drawInfinityCurve(ctx, images)); // Call the next frame in the animation
		}
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio of Matisse Callewaert" />
</svelte:head>

<main class="px-8">
	<section class="mt-6 flex space-x-6 items-center justify-center" style="align-items: stretch">
		<div class="flex-col">
			<div class="intro p-8 rounded-xl items-center justify-center">
				<h1 class="text-4xl font-bold text-gray-700">Hey, I’m Matisse Callewaert</h1>
				<p class="mt-4 text-gray-700">
					I am a software developer based in Belgium, holding a master's degree in Information
					Technology from the University of Ghent. Throughout my academic journey, I worked at a
					WaaS company and undertook an internship at a consultancy, gaining valuable practical
					experience. Driven by a passion for continuous learning and exploration, I thrive on
					delving into coding projects with my colleagues to unleash our creativity. Outside the
					world of technology, I find joy in sports and collaborative coding endeavors that allow us
					to push the boundaries of our imagination.
				</p>
				<div class="flex items-center space-x-2 mt-8">
					<a
						href="#"
						class="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 flex items-center transition duration-500 ease-in-out transform hover:scale-105"
						>Contact me</a
					>

					<a
						href="https://github.com/matissecallewaert"
						target="_blank"
						rel="noopener noreferrer"
						class="bg-gray-700 text-white rounded-full flex items-center justify-center h-10 w-10 hover:bg-gray-800 transition duration-500 ease-in-out transform hover:scale-105"
					>
						<i class="fab fa-github" />
					</a>
					<a
						href="https://www.linkedin.com/in/matisse-callewaert-a32248269"
						target="_blank"
						rel="noopener noreferrer"
						class="bg-gray-700 text-white rounded-full flex items-center justify-center h-10 w-10 hover:bg-gray-800 transition duration-500 ease-in-out transform hover:scale-105"
					>
						<i class="fab fa-linkedin-in" />
					</a>
				</div>
			</div>
			<div class="w-auto h-auto mt-8 rounded-xl canvas-wrapper">
				<canvas id="myCanvas"></canvas>
			</div>
		</div>
		<div>
			<img
				src={`${base}/me.jpg`}
				alt="Matisse smiling, standing next to a river with historical buildings and trees in the background"
				class="rounded-xl image-class"
			/>
		</div>
	</section>

	<section class="mt-10 projects-section">
		<h3 class="text-3xl font-bold text-gray-700">My Projects</h3>
		<div class="grid grid-cols-2 gap-6 mt-6">
			<div class="project-card left">
				<ProjectCard
					title="1"
					description="PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government."
					imageUrl="https://placehold.co/300x300"
					altText="PS Consultancy logo"
					colorClass="bg-purple-200"
				/>
			</div>

			<div class="project-card right">
				<ProjectCard
					title="2"
					description="PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government."
					imageUrl="https://placehold.co/300x300"
					altText="PS Consultancy logo"
					colorClass="bg-orange-200"
				/>
			</div>
			<div class="project-card left">
				<ProjectCard
					title="3"
					description="PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government."
					imageUrl="https://placehold.co/300x300"
					altText="PS Consultancy logo"
					colorClass="bg-white-200"
				/>
			</div>
			<div class="project-card right">
				<ProjectCard
					title="4"
					description="PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government."
					imageUrl="https://placehold.co/300x300"
					altText="PS Consultancy logo"
					colorClass="bg-green-200"
				/>
			</div>
		</div>
	</section>
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	canvas {
		display: block;
		width: 100%;
		height: 22vh;
	}

	.canvas-wrapper {
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 4px 8px 0 rgba(0, 0, 0, 0.2);
		background: linear-gradient(to right top, rgba(213, 213, 213, 0.2), rgba(67, 102, 108, 0.4));
	}

	.intro {
		background: linear-gradient(to right top, rgba(255, 165, 0, 0.2), rgba(31, 108, 120, 0.4));

		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}

	.image-class {
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}
</style>
