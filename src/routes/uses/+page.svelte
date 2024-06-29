<script lang="ts">
	import SimpleLayout from '$lib/components/reusable/SimpleLayout.svelte';
	import Tool from '$lib/components/uses/Tool.svelte';
	import ToolsSection from '$lib/components/uses/ToolsSection.svelte';
</script>

<SimpleLayout
	title="Favorite Tools and Gadgets"
	intro="Here are the tools and gadgets that I use daily for work, productivity, and more. These are the items that help me stay efficient and enjoy my workflow."
>
	<div class="space-y-20">
		<ToolsSection title="Workstation">
			<Tool title="14” MacBook Pro, M3 Pro chip" href="">
				A perfect combination of power and portability for demanding tasks.
			</Tool>
			<Tool title="13” MacBook Pro, M2 chip" href="">
				An efficient and compact machine that handles daily workloads with ease.
			</Tool>
			<Tool title="Dell Inspiron 5000 2-in-1" href="">
				Featuring an 11th Gen Intel Core i5-1135G7 and 8 CPUs @ 2.40GHz, with 3.8 GB RAM, it's a
				versatile and reliable laptop.
			</Tool>
			<Tool title="HL-L5200DW printer" href="">
				A reliable printer that delivers high-quality prints efficiently.
			</Tool>
			<Tool title="iPad" href="">Ideal for note-taking, drawing, and portable productivity.</Tool>
		</ToolsSection>
	</div>
</SimpleLayout>
