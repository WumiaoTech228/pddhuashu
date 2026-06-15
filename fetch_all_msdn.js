const https = require('https');
const fs = require('fs');

function getPage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        }, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Status ${res.statusCode} for ${url}`));
                return;
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function parseMsdnBoxes(html) {
    const results = [];
    const boxes = html.split('<div class="box">');
    for (let i = 1; i < boxes.length; i++) {
        const boxHtml = boxes[i].split('<div class="box">')[0]; // 限制在当前 box
        
        // 标题
        const titleMatch = boxHtml.match(/<h1>(.*?)<\/h1>/);
        const title = titleMatch ? titleMatch[1].trim() : '';
        
        // 日期
        const dateMatch = boxHtml.match(/<span class="date">(.*?)<\/span>/);
        const date = dateMatch ? dateMatch[1].trim() : '';

        // 文件大小
        const sizeMatch = boxHtml.match(/<td class="param-name">文件大小<\/td><td class="param-value">(.*?)<\/td>/);
        const size = sizeMatch ? sizeMatch[1].trim() : '';

        // ed2k
        const ed2kMatch = boxHtml.match(/value="(ed2k:\/\/.*?)"/);
        const ed2k = ed2kMatch ? ed2kMatch[1].trim() : '';
        
        // magnet
        const magnetMatch = boxHtml.match(/value="(magnet:\?.*?)"/);
        const magnet = magnetMatch ? magnetMatch[1].trim() : '';
        
        if (title && (ed2k || magnet)) {
            results.push({ title, date, size, ed2k, magnet });
        }
    }
    return results;
}

// 抽取子菜单链接
function parseSubMenu(html, baseUrl = 'https://msdn.sjjzm.com') {
    const urls = [];
    const menuMatch = html.match(/<div class="menu">([\s\S]*?)<\/div>/);
    if (!menuMatch) return urls;
    const linksRegex = /href="([^"]+)"/g;
    let match;
    while ((match = linksRegex.exec(menuMatch[1])) !== null) {
        let link = match[1];
        if (!link.startsWith('http')) {
            if (link.startsWith('/')) {
                link = baseUrl + link;
            } else {
                link = baseUrl + '/' + link;
            }
        }
        urls.push(link);
    }
    return [...new Set(urls)];
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const baseOS = {
        'Windows 11': 'https://msdn.sjjzm.com/win11.html',
        'Windows 10': 'https://msdn.sjjzm.com/win10.html',
        'Windows 8.1': 'https://msdn.sjjzm.com/win81.html',
        'Windows 8': 'https://msdn.sjjzm.com/win8.html',
        'Windows 7': 'https://msdn.sjjzm.com/win7.html',
        'Windows XP': 'https://msdn.sjjzm.com/winxp.html'
    };

    const finalData = {};

    for (const [osName, entryUrl] of Object.entries(baseOS)) {
        console.log(`\n=== Processing Top level: ${osName} ===`);
        finalData[osName] = [];
        try {
            const entryHtml = await getPage(entryUrl);
            const subUrls = parseSubMenu(entryHtml);
            
            // 如果没有子菜单（例如 Windows XP / 7 / 8 / 8.1 较简单），直接爬当前入口页
            if (subUrls.length === 0) {
                console.log(`No sub-menu found for ${osName}, scraping main page...`);
                const items = parseMsdnBoxes(entryHtml);
                if (items.length > 0) {
                    finalData[osName].push({
                        subName: '官方原版',
                        items: items
                    });
                }
            } else {
                console.log(`Found ${subUrls.length} sub pages for ${osName}. Scraping...`);
                for (const subUrl of subUrls) {
                    // 提取子版名，例如 24H2.html => 24H2
                    const subName = subUrl.split('/').pop().replace('.html', '').toUpperCase();
                    console.log(`Scraping sub-page: ${subName} (${subUrl})...`);
                    await sleep(300); // 礼貌限速
                    try {
                        const subHtml = await getPage(subUrl);
                        const items = parseMsdnBoxes(subHtml);
                        if (items.length > 0) {
                            finalData[osName].push({
                                subName: subName,
                                items: items
                            });
                        }
                    } catch (e) {
                        console.error(`Failed to scrape sub-page ${subUrl}:`, e.message);
                    }
                }
            }
        } catch (err) {
            console.error(`Failed to process ${osName}:`, err.message);
        }
    }

    // 写入 JS 文件
    const outputContent = `// MSDN Windows 镜像全量数据库 (自动抓取于 2026-06-15)
const WINDOWS_ISO_DB = ${JSON.stringify(finalData, null, 4)};

if (typeof module !== 'undefined') {
    module.exports = WINDOWS_ISO_DB;
}
`;
    fs.writeFileSync('win-data.js', outputContent, 'utf8');
    console.log(`\n🎉 Success! Scraped data written to win-data.js.`);
}

main();
