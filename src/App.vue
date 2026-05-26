<template>
	<div id="app">
		<header class="app-header">
			<img class="app-logo" :src="logo" alt="School logo" />
			<h1>My School — SOS Technical School</h1>
		</header>

		<main>
			<section class="school-card">
				<h2 class="school-title">About SOS Technical School</h2>
				<p class="school-desc">I attend SOS Technical School, a hands-on institution focused on engineering, information technology, and applied sciences. We combine classroom theory with laboratory work, workshops, and industry projects to prepare students for technical careers.</p>

				<ul class="school-list">
					<li><strong>Programs:</strong> Engineering, Information Technology, Electronics, Robotics.</li>
					<li><strong>Learning style:</strong> Labs, projects, internships, teamwork.</li>
					<li><strong>Highlights:</strong> Skilled instructors, modern workshops, industry partnerships.</li>
				</ul>
			</section>
		</main>
	</div>
</template>

<script>
import logo from './assets/logo.svg'

export default {
	name: 'App',
	data() {
		return {
			logo
		}
	}
}
</script>

<style scoped>
.app-header {
	background: linear-gradient(90deg,#0b6fb8 0%,#063a6b 100%);
	color: #fff;
	padding: 1.25rem 1rem;
	text-align: center;
	border-radius: 6px;
	margin-bottom: 1.25rem;
}

.app-logo {
	height: 70px;
	margin-bottom: 0.75rem;
}

.school-card {
	max-width: 800px;
	margin: 0 auto 2rem auto;
	padding: 1.25rem;
	border-radius: 8px;
	background: #f7fbff;
	box-shadow: 0 6px 18px rgba(22, 38, 61, 0.06);
}

.school-title {
	margin: 0 0 0.5rem 0;
	font-size: 1.4rem;
	color: #0b3b67;
}

.school-desc {
	margin: 0 0 0.75rem 0;
	color: #213547;
}

.school-list {
	margin: 0;
	padding-left: 1rem;
	color: #213547;
}

.school-list li {
	margin: 0.35rem 0;
}
</style>

