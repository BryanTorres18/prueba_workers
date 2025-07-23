export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response('Hola soy Bryan');
	},
} satisfies ExportedHandler<Env>;
