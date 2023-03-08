<script>
	import profilePicture from '$lib/assets/profile.jpg';
	import finland from '$lib/assets/finland-path-bold.png';
</script>

<!-- flex row with picture, contact column, etc. -->
<div class="flex flex-row w-full bg-slate-200 px-10 pt-8 pb-6 justify-between items-center">
	<!-- profile & title row -->

	<div class="flex flex-row gap-3">
		<!-- profile picture -->
		<div class="rounded-full aspect-square w-48 overflow-hidden">
			<img src={profilePicture} alt="" class="scale-150 pl-3 pt-2" />
		</div>

		<!-- title -->
		<div class="flex flex-col items-top justify-center">
			<h1 class="text-4xl bold">Johannes Petursson</h1>

			<h2 class="text-2xl italic">Software Developer</h2>

			<h3 class="text-xl italic">Data Specialist</h3>
		</div>
	</div>

	<!-- map flex row -->
	<div class="flex flex-row">
		<!-- finland map // maybe change to northern Europe map? -->
		<div class="aspect-square w-24 relative">
			<img src={finland} alt="" class="w-48 -m-10" />

			<!-- location dot -->
			<div
				class="flex flex-row items-center justify-start gap-1.5 absolute -bottom-2 left-0 whitespace-nowrap overflow-visible"
			>
				<i class="fa-solid fa-sharp fa-location-dot fa-xl py-1.5" />
				<!-- <p class="ml-4">Helsinki, Finland</p> -->
			</div>
		</div>

		<!-- location   -->
		<div class="flex flex-col -ml-6 justify-center">
			<!-- location dot row -->
			<div class="flex flex-row items-center justify-start gap-1.5">
				<i class="fa-solid fa-sharp fa-location-dot fa-lg" />
				<p class="text-xl">Helsinki, Finland</p>
			</div>

			<!-- timezone row -->
			<div class="flex flex-row items-center justify-start gap-1.5 py-2">
				<i class="fa-clock fa-solid" />
				<p class="border border-black rounded-lg px-1 text-lg">UTC+2</p>

				<!-- DST row -->
				<div class="flex flex-row border border-black rounded-lg px-1 items-center gap-1">
					<p class="text-lg">UTC+3</p>
					<p class="text-[10px] font-bold bg-black text-white rounded-md px-1">DST</p>
				</div>
			</div>

			<!-- location dot row -->
			<div class="flex flex-row items-center justify-start gap-1.5 -mx-0.5">
				<i class="fa-solid fa-wifi" />
				<p class="text-xl">Remote friendly</p>
			</div>
		</div>
	</div>

	<!-- contact column -->
	<div class="flex flex-col gap-1.5 justify-center items-start">
		<!-- email -->
		<div class="flex flex-row items-center gap-2">
			<i class="fa-envelope fa-solid fa-lg" />
			<p class="text-xl">johannes@solsten.com</p>
		</div>

		<!-- linkedin -->
		<div class="flex flex-row items-center gap-2">
			<i class="fa-brands fa-linkedin fa-xl" />
			<p class="text-xl">/johannespetursson</p>
		</div>

		<!-- website -->
		<!-- <div class="flex flex-row items-center gap-2">
      <i class="fa-solid fa-earth-americas fa-lg"></i>
      <p class="text-xl">jsfp.me</p>
    </div> -->
	</div>
</div>
