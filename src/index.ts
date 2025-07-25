export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response('Hola Mundo');
	},
} satisfies ExportedHandler<Env>;
