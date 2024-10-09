// 定义 landmarksHTML 变量来存储所有名胜的数据
const landmarksHTML = `
<li><h2>亚洲风景名胜</h2></li>
<li>中国<i>China</i></li>
<li><a href="p.html?p=55">布达拉宫<span>Potala Palace</span></a></li>
<li><a href="p.html?p=56">丽江古城<span>Lijiang Old Town</span></a></li>
<li><a href="p.html?p=57">长城<span>The Great Wall</span></a></li>
<li>越南<i>Vietnam</i></li>
<li><a href="p.html?p=81">下龙湾<span>Halong Bay</span></a></li>
<li>约旦<i>Jordan</i></li>
<li><a href="p.html?p=80">佩特拉古城<span>Petra</span></a></li>
<li>印度尼西亚<i>Indonesia</i></li>
<li><a href="p.html?p=19">布拉坦寺<span>Pura Ulun Danu Bratan</span></a></li>
<li><a href="p.html?p=36">巴厘岛<span>Bali</span></a></li>
<li>印度<i>India</i></li>
<li><a href="p.html?p=26">泰姬陵<span>Taj Mahal</span></a></li>
<li>以色列<i>Israel</i></li>
<li><a href="p.html?p=6">死海<span>Dead Sea</span></a></li>
<li><a href="p.html?p=7">耶路撒冷<span>Jerusalem</span></a></li>
<li>新加坡<i>Singapore</i></li>
<li><a href="p.html?p=68">滨海湾<span>Bayfront Ave</span></a></li>
<li>土耳其<i>Turkey</i></li>
<li><a href="p.html?p=20">博斯普鲁斯村庄<span>Bosphorus Villages</span></a></li>
<li><a href="p.html?p=21">圣索菲亚大教堂<span>Hagia Sophia</span></a></li>
<li><a href="p.html?p=96">蓝色清真寺<span>Blue Mosque</span></a></li>
<li><a href="p.html?p=97">希拉波利斯古剧场<span>Hierapolis Ancient Theatre</span></a></li>
<li><a href="p.html?p=98">棉花堡温泉池<span>Pamukkale Thermal Pools</span></a></li>
<li><a href="p.html?p=99">卡帕多西亚<span>Cappadocia</span></a></li>
<li>泰国<i>Thailand</i></li>
<li><a href="p.html?p=70">玉佛寺<span>Wat Phra Kaew</span></a></li>
<li><a href="p.html?p=71">洛哈萨马湾<span>Loh Samah Bay</span></a></li>
<li>日本<i>Japan</i></li>
<li><a href="p.html?p=16">富士山<span>Mount Fuji</span></a></li>
<li>尼泊尔<i>Nepal</i></li>
<li><a href="p.html?p=29">喜马拉雅山<span>Himalaya Mountain</span></a></li>
<li>马尔代夫<i>Maldives</i></li>
<li><a href="p.html?p=61">库拉玛蒂岛<span>Kuramathi</span></a></li>
<li>柬埔寨<i>Cambodia</i></li>
<li><a href="p.html?p=69">吴哥窟<span>Angkor Wat</span></a></li>
<li>韩国<i>South Korea</i></li>
<li><a href="p.html?p=72">龙头岩<span>Oedolgae Rock</span></a></li>
<li>菲律宾<i>Philippines</i></li>
<li><a href="p.html?p=30">埃尔尼多<span>El Nido Palawan</span></a></li>
<li>不丹<i>Bhutan</i></li>
<li><a href="p.html?p=15">虎穴寺<span>Taktsang Goemba</span></a></li>
<li>埃及<i>Egypt</i></li>
<li><a href="p.html?p=83">红海海岸<span>The Coast Shore of Red Sea</span></a></li>
<li>阿联酋<i>United Arab Emirates</i></li>
<li><a href="p.html?p=89">阿布扎比酋长国宫酒店<span>Emirates Palace</span></a></li>

<li><h2>欧洲风景名胜</h2></li>
<!-- 欧洲数据省略，因为内容太长 -->
<li>英国<i>United Kingdom</i></li>
    <li><a href="p.html?p=22">伦敦桥<span>London Bridge</span></a></li>
    <li><a href="p.html?p=23">伦敦眼<span>London Eye</span></a></li>
    <li><a href="p.html?p=24">比奇角<span>Beachy Head</span></a></li>
    <li>意大利<i>Italy</i></li>
    <li><a href="p.html?p=12">水城威尼斯<span>The Water City of Venice</span></a></li>
    <li><a href="p.html?p=28">多洛米蒂山<span>Dolomites</span></a></li>
    <li><a href="p.html?p=37">罗马城市风光<span>Rome Cityscape</span></a></li>
    <li><a href="p.html?p=38">瓦尔加迪纳<span>Val Gardena</span></a></li>
    <li><a href="p.html?p=39">亚得里亚海<span>Adriatic Sea</span></a></li>
    <li><a href="p.html?p=40">纳沃纳广场喷泉<span>Fountain in Piazza Navona</span></a></li>
    <li><a href="p.html?p=41">罗马斗兽场<span>Colosseum</span></a></li>
    <li>匈牙利<i>Hungary</i></li>
    <li><a href="p.html?p=51">布达佩斯<span>Budapest</span></a></li>
    <li><a href="p.html?p=52">塞切尼链桥<span>Szechenyi Chain Bridge</span></a></li>
    <li>希腊<i>Greece</i></li>
    <li><a href="p.html?p=44">圣托里尼<span>Santorini</span></a></li>
    <li><a href="p.html?p=45">纳瓦吉奥海滩<span>Navagio Beach</span></a></li>
    <li><a href="p.html?p=46">阿莫迪湾<span>Ammoudi Bay</span></a></li>
    <li><a href="p.html?p=47">米克诺斯岛<span>Mykonos Island</span></a></li>
    <li><a href="p.html?p=48">帕特农神庙<span>Parthenon</span></a></li>
    <li>西班牙<i>Spain</i></li>
    <li><a href="p.html?p=17">阿尔罕布拉宫<span>Alhambra</span></a></li>
	
    <li><a href="p.html?p=65">高迪的古埃尔公园<span>Gaudi‘s Parc Guell</span></a></li>
    <li>斯洛伐克<i>Slovakia</i></li>
    <li><a href="p.html?p=31">塔特拉山国家公园<span>High Tatra National Park</span></a></li>
    <li>瑞士<i>Switzerland</i></li>
    <li><a href="p.html?p=10">因特拉肯<span>Interlaken</span></a></li>
    <li><h2>大洋洲风景名胜</h2></li>
<li>新西兰<i>New Zealand</i></li>
<li><a href="p.html?p=67">奥克兰<span>Auckland</span></a></li>
<li>法属波利尼西亚<i>French Polynesia</i></li>
<li><a href="p.html?p=88">法属波利尼西亚<span>French Polynesia</span></a></li>
<li>澳大利亚<i>Australia</i></li>
<li><a href="p.html?p=91">悉尼歌剧院<span>Sydney Opera House</span></a></li>
<li><a href="p.html?p=92">艾尔斯岩<span>Uluru</span></a></li> 
	
<li><h2>非洲风景名胜</h2></li>
<li>南非<i>South Africa</i></li>
<li><a href="p.html?p=90">好望角<span>Cape of Good Hope</span></a></li>
<li>纳米比亚<i>Namibia</i></li>
<li><a href="p.html?p=95">纳米布沙漠<span>Namib Desert</span></a></li>
<li>肯尼亚<i>Kenya</i></li>
<li><a href="p.html?p=76">马赛马拉野生动物保护区<span>Maasai Mara National Reserve</span></a></li>
<li>津巴布韦<i>Zimbabwe</i></li>
<li><a href="p.html?p=86">维多利亚瀑布<span>Victoria Falls</span></a></li>
<li>埃及<i>Egypt</i></li>
<li><a href="p.html?p=82">卡纳克神庙<span>Karnak Temple</span></a></li>
<li><a href="p.html?p=84">阿斯旺尼罗河<span>Nile River in Aswan</span></a></li>
<li><a href="p.html?p=85">金字塔<span>The Pyramids</span></a></li>

<li><h2>北美洲风景名胜</h2></li>
<li>墨西哥<i>Mexico</i></li>
<li><a href="p.html?p=93">奇琴伊察<span>Chichen Itza</span></a></li>
<li>美国<i>United States</i></li>
<li><a href="p.html?p=58">大峡谷国家公园<span>Grand Canyon National Park</span></a></li>
<li><a href="p.html?p=59">阿拉斯加北极光<span>Northern Lights in Alaska</span></a></li>
<li><a href="p.html?p=60">大棱镜温泉<span>The Grand Prismatic Spring</span></a></li>
<li>加拿大<i>Canada</i></li>
<li><a href="p.html?p=78">露易丝湖<span>Lake Louise</span></a></li>
<li><a href="p.html?p=79">尼亚加拉瀑布<span>Niagara Falls</span></a></li>
<li>巴巴多斯<i>Barbados</i></li>
<li><a href="p.html?p=74">巴瑟巴海滩<span>Bathsheba Beach</span></a></li>

<li><h2>南美洲风景名胜</h2></li>
<li>秘鲁<i>Peru</i></li>
<li><a href="p.html?p=94">马丘比丘遗迹<span>Inca Ruins</span></a></li>
<li>厄瓜多尔<i>Ecuador</i></li>
<li><a href="p.html?p=77">加拉帕戈斯群岛<span>Galapagos Islands</span></a></li>
<li>玻利维亚<i>Bolivia</i></li>
<li><a href="p.html?p=66">乌尤尼盐湖<span>Salar de Uyuni</span></a></li>
<li>巴西<i>Brazil</i></li>
<li><a href="p.html?p=73">伊瓜苏瀑布<span>Iguassu Falls</span></a></li>
<li><a href="p.html?p=75">里约热内卢<span>Rio de Janeiro</span></a></li>
`;

// 定义 populateLandmarks 函数来插入 HTML 到指定元素
function populateLandmarks() {
  const landmarksModal = document.getElementById('landmarks-modal');
  const ul = document.createElement('ul');
  ul.className = 'landmarks-list';
  ul.innerHTML = landmarksHTML; // 设置 ul 的 HTML 内容
  landmarksModal.querySelector('.modal-content').appendChild(ul);
}

// 确保 DOM 完全加载后再调用函数
document.addEventListener('DOMContentLoaded', populateLandmarks);