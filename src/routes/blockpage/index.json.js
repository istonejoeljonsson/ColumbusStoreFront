import blocks from './_blocks.js';

const contents = JSON.stringify(blocks);
export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}