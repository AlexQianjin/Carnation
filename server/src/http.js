const axios = require('axios');
const cheerio = require('cheerio');

async function getInfo() {
	try {
		const response = await axios.get('https://www.cnblogs.com', {
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'user-agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
			}
		});
		let $ = cheerio.load(response.data);
		let posts = $('#post_list div div.post_item_body h3 > a');
		if (posts && posts.length > 0) {
			posts.each((index, html) => console.log($(html).text()));
		}
	} catch (error) {
		console.error(error);
	}
}

getInfo();
