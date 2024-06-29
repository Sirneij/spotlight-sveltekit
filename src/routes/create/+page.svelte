<script lang="ts">
	import NewPost from '$lib/components/create/NewPost.svelte';
	import Container from '$lib/components/reusable/Container.svelte';
</script>

<Container className="mt-4 sm:mt-6" datacreate={true}>
	<NewPost />
</Container>
