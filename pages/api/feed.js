const rp = require('request-promise');
const cheerio = require('cheerio');
const convert = require('xml2js');
const { parse } = require('url');

const xml2js = new convert.Parser();
const js2xml = new convert.Builder();

const RSS_URL = 'https://www.mangaupdates.com/rss.php';
const LIST_URL = 'https://www.mangaupdates.com/mylist.html';

function collectListData(id, list) {
  return new Promise((resolve, reject) => {
    rp(LIST_URL + "?id=" + id + "&list=" + list)
      .then(html => {
        const $ = cheerio.load(html);
        const entries = $('table[id=ptable] > tbody > tr:not(:first-child)');
        const seriesList = [];
        entries.each((_, tr) => {
          const tds = $(tr).children();
          seriesList.push({
            seriesUrl: tds.eq(0).children().attr('href'),
          });
        });
        resolve(seriesList);
      })
      .catch(err => reject(err));
  });
}

function generateRSS(res, seriesList) {
  return new Promise((resolve, reject) => {
    rp(RSS_URL)
      .then(xml => {
        xml2js.parseString(xml, (err, result) => {
          if (err) {
            reject(err);
          } else {
            const items = result.rss.channel[0].item;
            result.rss.channel[0].item = items.filter(item =>
              seriesList.filter(i => item.link[0].includes(i.seriesUrl)).length > 0
            );

            res.setHeader('Content-Type', 'text/xml');
            resolve(js2xml.buildObject(result));
          }
        });
      })
      .catch(err => reject(err));
  });
}

module.exports = (req, res) => {
  const { query } = parse(req.url, true);
  const { id, list } = query;
  collectListData(id, list)
    .then(seriesList => generateRSS(res, seriesList))
    .then(list => res.send(list))
    .catch(err => res.send(err));
};
