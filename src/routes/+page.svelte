<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';
	import '@fortawesome/fontawesome-free/css/all.css';
	import { onMount } from 'svelte';
	import lax from 'lax.js';

	let updateLax;

  onMount(() => {
    lax.init();

    lax.addDriver('scrollY', () => window.scrollY);

    lax.addElements('.project-card', {
      scrollY: {
        scale: [
          ["elInY", "elCenterY", "elOutY"],
          [0.5, 1, 0.5],
        ],
        opacity: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 0],
        ]
      }
    });

    const handleScroll = () => {
      lax.update(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    updateLax = () => lax.update(window.scrollY);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio of Matisse Callewaert" />
</svelte:head>

<main class="scroll-container px-8">
	<section
		class="mt-6 flex space-x-6 h-auto intro-section full-height-section items-center justify-center"
	>
		<div
			class="bg-gradient-to-br from-blue-100 to-gray-400 p-8 rounded-xl w-1/2 ml-8"
			style="height: fit-content;"
		>
			<h1 class="text-4xl font-bold text-gray-700">Hey, I’m Matisse Callewaert</h1>
			<p class="mt-4 text-gray-700">
				I am a software developer based in Belgium, holding a master's degree in Information
				Technology from the University of Ghent. Throughout my academic journey, I worked at a WaaS
				company and undertook an internship at a consultancy, gaining valuable practical experience.
				Driven by a passion for continuous learning and exploration, I thrive on delving into coding
				projects with my colleagues to unleash our creativity. Outside the world of technology, I
				find joy in sports and collaborative coding endeavors that allow us to push the boundaries
				of our imagination.
			</p>
			<div class="flex items-center space-x-2 mt-8">
				<button
					class="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 flex items-center transition duration-500 ease-in-out transform hover:scale-105"
					><a href="/contact">Contact me</a></button
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
		<div class="w-auto">
			<img
				src="/me.png"
				alt="Matisse smiling, standing next to a river with historical buildings and trees in the background"
				class="rounded-xl"
			/>
		</div>
	</section>

	<section class="mt-10 projects-section">
		<div class="grid grid-cols-2 gap-6 mt-6">
			<div class="project-card">
				<ProjectCard
					title="PS Consultancy"
					description="PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government."
					imageUrl="https://placehold.co/300x300"
					altText="PS Consultancy logo"
					colorClass="bg-blue-100"
				/>
			</div>

			<div class="project-card">
				<ProjectCard
					title="PS Consultancy"
					description="PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government."
					imageUrl="https://placehold.co/300x300"
					altText="PS Consultancy logo"
					colorClass="bg-blue-100"
				/>
			</div>
			<div class="project-card">
				<ProjectCard
					title="PS Consultancy"
					description="PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government."
					imageUrl="https://placehold.co/300x300"
					altText="PS Consultancy logo"
					colorClass="bg-blue-100"
				/>
			</div>
			<div class="project-card">
				<ProjectCard
					title="PS Consultancy"
					description="PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government."
					imageUrl="https://placehold.co/300x300"
					altText="PS Consultancy logo"
					colorClass="bg-blue-100"
				/>
			</div>
		</div>
	</section>
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.intro-section {
		height: 100vh;
	}

	.project-card {
		will-change: transform, opacity;
	}
</style>
