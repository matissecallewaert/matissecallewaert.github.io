<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';
	import '@fortawesome/fontawesome-free/css/all.css';
	import { base } from '$app/paths';
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
			<div class="w-auto h-auto mt-8 rounded-xl skill-wrapper">
				<img
					src="https://skillicons.dev/icons?i=git,ts,react,prisma,mysql,nodejs,docker,kotlin,androidstudio,rust,bash,cs,dotnet,aws,azure,angular,postgresql,gitlab,js,py,tensorflow,cpp,postman,java,md,rabbitmq,sentry,svelte,tailwind"
					alt="skill icons"
					class="rounded-xl p-10"
				/>
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

	<section class="mt-10">
		<h3 class="text-3xl font-bold text-gray-700">My Projects</h3>
		<div class="gap-6 mt-6 projects-section">
			<div class="project-card left">
				<ProjectCard
					title="Sales2Cash"
					description="A WaaS solution enabling businesses to track invoices and optimize their cash flow managment."
					imageUrl="{base}/sales2cash.png"
					altText="Sales2Cash banner"
				/>
			</div>
			<div class="project-card right">
				<ProjectCard
					title="Faction Game"
					description="A programmer-centric game where you program your custom decision logic to compete for total faction dominance."
					imageUrl="{base}/faction.png"
					altText="faction game world map"
				/>
			</div>
			<div class="project-card right">
				<ProjectCard
					title="Simpel music player app"
					description="A straightforward music player app built with Kotlin in android studio."
					imageUrl="{base}/music_player_small.jpg"
					altText="Screenshot of the music player app"
				/>
			</div>
			<div class="project-card left">
				<ProjectCard
					title="NulVision"
					description="A web app to detect and identify objects in drone images. I worked on the backend and the integration of the machine learning model."
					imageUrl="{base}/nulvision.png"
					altText="Screenshot of the NulVision web app"
				/>
			</div>
			<div class="project-card left">
				<ProjectCard
					title="Master thesis"
					description="A tool for extracting features in network intrusion detection systems using EBPF and Rust."
					imageUrl="{base}/rust_ebpf.png"
					altText="Rust and eBPF logo"
				/>
			</div>
		</div>
	</section>
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.intro {
		background: linear-gradient(to right top, rgba(255, 165, 0, 0.3), rgba(31, 108, 120, 0.5));

		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}

	.image-class {
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}

	.skill-wrapper {
		background: linear-gradient(to right top, rgba(255, 165, 0, 0.3), rgba(31, 108, 120, 0.5));
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}

	.projects-section {
		column-count: 2;
		column-gap: 1.5rem;
	}

	.project-card {
		break-inside: avoid;
		margin-bottom: 1.5rem;
	}
</style>
