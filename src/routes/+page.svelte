<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';
	import '@fortawesome/fontawesome-free/css/all.css';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio of Matisse Callewaert" />
</svelte:head>

<main class="px-8">
	<section class="mt-6 flex flex-col intro-section">
		<div class="order-2 lg:order-1">
			<div class="intro p-8 rounded-xl items-center justify-center">
				<h1 class="text-4xl font-bold">Hey, I’m Matisse Callewaert</h1>
				<p class="mt-8">
					I am a software developer based in Belgium, getting a master's degree in Information
					Technology from the University of Ghent. Throughout my academic journey, I worked at a
					WaaS company and undertook an internship at a consultancy, gaining valuable practical
					experience. Driven by a passion for continuous learning and exploration, I thrive on
					delving into coding projects with my peers to unleash our creativity. Outside the world of
					technology, I find joy in sports and collaborative coding endeavors that allow us to push
					the boundaries of our imagination.
				</p>
				<div class="flex items-center space-x-4 mt-8">
					<a href="mailto:matisse.callewaert@gmail.com">Contact me</a>

					<a href="https://github.com/matissecallewaert" target="_blank" rel="noopener noreferrer">
						<i class="fab fa-github" />
					</a>
					<a
						href="https://www.linkedin.com/in/matisse-callewaert-a32248269"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i class="fab fa-linkedin-in" />
					</a>
				</div>
			</div>
		</div>
		<div class="order-1 lg:order-2 image-wrapper">
			<img
				src={`${base}/me.jpg`}
				alt="Matisse smiling, standing next to a river with historical buildings and trees in the background"
				class="rounded-xl image-class"
			/>
		</div>
	</section>

	<h3 class="text-3xl font-bold mt-10" style="color: white">My Skills</h3>
	<div class="mt-6 rounded-xl skill-wrapper">
		<img
			src="https://skillicons.dev/icons?i=git,ts,react,prisma,mysql,nodejs,docker,kotlin,androidstudio,rust,bash,cs,dotnet,aws,azure,angular,postgresql,gitlab,js,py,tensorflow,cpp,postman,java,md,rabbitmq,sentry,svelte,tailwind"
			alt="skill icons"
			class="rounded-xl p-6"
		/>
	</div>

	<section class="mt-10">
		<h3 class="text-3xl font-bold" style="color: white">My Projects</h3>
		<div class="gap-6 mt-6 projects-section">
			<a href="https://github.com/matissecallewaert/RustiFlow" target="_blank">
				<div class="project-card">
					<ProjectCard
						title="RustiFlow"
						description="A tool for extracting features in network intrusion detection systems using eBPF and Rust."
						imageUrl="{base}/RustiFlow.png"
						altText="Rust and eBPF logo"
						color="#98ea8b"
						headerColor="#89d97e"
					/>
				</div>
			</a>
			<div class="project-card">
				<ProjectCard
					title="NulVision"
					description="A web app to detect and identify objects in drone images. I worked on the backend and the integration of the machine learning model."
					imageUrl="{base}/nulvision.png"
					altText="Screenshot of the NulVision web app"
					color="#f3f3f3"
					headerColor="#d9d9d9"
				/>
			</div>

			<a href="https://www.alternatiefbv.be/" target="_blank">
				<div class="project-card">
					<ProjectCard
						title="Sales2Cash"
						description="A WaaS solution enabling businesses to track invoices and optimize their cash flow managment."
						imageUrl="{base}/sales2cash.png"
						altText="Sales2Cash banner"
						color="#22577A"
						headerColor="#22577A"
					/>
				</div>
			</a>
			<a href="https://github.com/matissecallewaert/faction-game-backend" target="_blank">
				<div class="project-card">
					<ProjectCard
						title="Faction Game"
						description="A programmer-centric game where you program your custom decision logic to compete for total faction dominance."
						imageUrl="{base}/faction.png"
						altText="faction game world map"
						color="#ffd5a2"
						headerColor="#fcad76"
					/>
				</div>
			</a>
			<a href="https://matissecallewaert.github.io/ai-tetris/" target="_blank">
				<div class="project-card">
					<ProjectCard
						title="Tetris AI"
						description="A tetris AI that uses a genetic algorithm to learn how to play the game."
						imageUrl="{base}/tetris-ai.png"
						altText="tetris game"
						color="#ffd5a2"
						headerColor="#fcad76"
					/>
				</div>
			</a>
		</div>
	</section>
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.intro {
		color: #fff;
		background: linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%);

		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.55);
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: first baseline;
	}

	.intro-section {
		display: flex;
		flex-direction: row;
		align-items: stretch;
	}

	.image-class {
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 4px 8px 0 rgba(0, 0, 0, 0.2);
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.skill-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		background: linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%);
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.55);
	}

	.projects-section {
		column-count: 2;
		column-gap: 1.5rem;
	}

	.project-card {
		break-inside: avoid;
		margin-bottom: 1.5rem;
	}

	.intro-section a {
		--hover-shadows: 16px 16px 33px #121212, -16px -16px 33px #303030;
		--accent: white;
		font-weight: bold;
		letter-spacing: 0.1em;
		border: none;
		border-radius: 1.1em;
		background-color: #121212;
		cursor: pointer;
		color: white;
		padding: 0.8em 1.5em;
		transition:
			box-shadow ease-in-out 0.3s,
			background-color ease-in-out 0.1s,
			letter-spacing ease-in-out 0.1s,
			transform ease-in-out 0.1s;
		box-shadow:
			13px 13px 10px #1c1c1c,
			-13px -13px 10px #262626;
	}

	.intro-section a:hover {
		box-shadow: var(--hover-shadows);
	}

	.intro-section a:active {
		box-shadow:
			var(--hover-shadows),
			var(--accent) 0px 0px 30px 5px;
		background-color: var(--accent);
		transform: scale(0.95);
	}

	@media (min-width: 1024px) {
		.projects-section {
			column-count: 2;
			column-gap: 1.5rem;
		}
		.intro {
			margin-top: 0;
			margin-right: 1.5rem;
		}
	}

	@media (max-width: 1023px) {
		.intro {
			margin-top: 1.5rem;
		}
		.intro,
		.image-class {
			width: 80vw;
		}
		.image-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.intro-section {
			flex-direction: column;
			align-items: center;
		}
	}

	@media (max-width: 767px) {
		.projects-section {
			column-count: 1;
		}
		.project-card {
			width: 100%;
		}
		.intro {
			margin-top: 1.5rem;
		}
	}
</style>
