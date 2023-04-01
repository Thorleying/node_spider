let request = require('request');
let cheerio = require('cheerio');
let options = {
    'method': 'GET',
    'url': 'https://www.chinanews.com.cn/',
    'headers': {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54",
    }
};

request(options, function (error, response,body) {
    if (error) throw new Error(error);
    getDom(body)
});
let results=[]
function getDom(html){
    let $ = cheerio.load(html);
    $('.ywjx-news-list>ul>li>a').each(function () {
        let lis = $(this).html();
        results.push(lis.replace(/<[^>]+>/g, ""))
    })
    results=results.filter(item=>{
       return item.split('').length>0
    })
    for (let i = 0; i < results.length; i++) {
        console.log(`${i+1}.${results[i]}`)
    }
}