export class Renderer {
	// instance way
	// constructor(private viewTemplate: HTMLDivElement) {
	//     this.viewTemplate.innerHTML = '<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />';
	// }

	// render(html: string) {
	//     this.viewTemplate.innerHTML = html;
	// }

	/* 6ms43ss */
	private constructor() {}

	// static way, 1m12ss
	static viewTemplate: HTMLDivElement;

	static render(html: string) {
		Renderer.viewTemplate.innerHTML = html;
	}
}
