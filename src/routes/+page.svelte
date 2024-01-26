<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';
	import '@fortawesome/fontawesome-free/css/all.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio of Matisse Callewaert" />
</svelte:head>

<main class="px-8">
	<section
	class="mt-6 flex space-x-6 items-center justify-center" style="align-items: stretch"
	>
		<div
			class="bg-gradient-to-br from-blue-50 to-gray-400 p-8 rounded-xl w-1/2 ml-8 h-auto items-center justify-center"
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
		<div class="w-1/3">
			<img src="/me.jpg" alt="Matisse smiling, standing next to a river with historical buildings and trees in the background" class="rounded-xl">
		</div>
	</section>

	<section class="mt-10 projects-section">
		<div class="grid grid-cols-2 gap-6 mt-6">
			<div class="project-card left">
				<ProjectCard
					title="1"
					description="PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government."
					imageUrl="https://placehold.co/300x300"
					altText="PS Consultancy logo"
					colorClass="bg-blue-100"
				/>
			</div>

			<div class="project-card right">
				<ProjectCard
					title="2"
					description="PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government."
					imageUrl="https://placehold.co/300x300"
					altText="PS Consultancy logo"
					colorClass="bg-blue-100"
				/>
			</div>
			<div class="project-card left">
				<ProjectCard
					title="3"
					description="PS Consultancy is a consultancy company that provides services to the public sector. I worked on the development of a web application for the Flemish government."
					imageUrl="https://placehold.co/300x300"
					altText="PS Consultancy logo"
					colorClass="bg-blue-100"
				/>
			</div>
			<div class="project-card right">
				<ProjectCard
					title="4"
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
</style>
