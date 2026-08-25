const e = (s) => encodeURIComponent(s).replace(/%2F/g, '/');

const PORTFOLIO_DATA = {
  logo: [
    { src: 'logo设计/11.png', title: 'Logo设计 01', tag: 'BRAND' },
    { src: 'logo设计/22.png', title: 'Logo设计 02', tag: 'BRAND' },
    { src: 'logo设计/资源 4@2x.png', title: 'Logo应用 03', tag: 'APPLICATION' },
    { src: 'logo设计/资源 5@2x.png', title: 'Logo应用 04', tag: 'APPLICATION' },
  ],
  ui: [
    { project: '官网招聘页面', images: [
      { src: '界面设计/官网招聘页面/校园招聘.png', title: '校园招聘页面' },
      { src: '界面设计/官网招聘页面/社会招聘.png', title: '社会招聘页面' },
    ]},
    { project: '智能检修管理系统', images: [
      { src: '界面设计/智能检修管理系统/画板 1.png', title: '系统界面 01' },
      { src: '界面设计/智能检修管理系统/画板 2.png', title: '系统界面 02' },
    ]},
    { project: '词元工厂界面设计', images: [
      { src: '界面设计/词元工厂界面设计/画板 1.png', title: '词元工厂 01' },
      { src: '界面设计/词元工厂界面设计/画板 3.png', title: '词元工厂 02' },
      { src: '界面设计/词元工厂界面设计/画板 4.png', title: '词元工厂 03' },
    ]},
  ],
  video: [
    { type: 'video', src: '视频制作/公司介绍（不带京能）20260814.mp4', title: '公司介绍', duration: '宣传视频' },
    { type: 'video', src: '视频制作/帮手产品介绍20260824.mp4', title: '帮手产品介绍', duration: '产品视频' },
  ],
  print: [
    { project: '品牌主视觉', images: [
      { src: '平面物料/主视觉16：9文件 拷贝.png', title: '主视觉 16:9' },
      { src: '平面物料/大厅主视觉背景 拷贝.png', title: '大厅主视觉背景' },
      { src: '平面物料/会展背景图.png', title: '会展背景图' },
      { src: '平面物料/官网banner图.png', title: '官网Banner' },
    ]},
    { project: '京能项目', images: [
      { src: '平面物料/京能项目/主视觉16：9文件.png', title: '京能主视觉' },
      { src: '平面物料/京能项目/安心·场景研判智能体-恢复的 拷贝.png', title: '场景研判智能体' },
      { src: '平面物料/京能项目/电气操作沉浸式体验站.png', title: '电气操作沉浸式体验站' },
      { src: '平面物料/京能项目/脚手架作业沉浸式体验站.png', title: '脚手架作业沉浸式体验站' },
    ]},
    { project: '企业宣传', images: [
      { src: '平面物料/天云数据公司简介对折页_印刷版_更新版_01.png', title: '公司简介折页 正面' },
      { src: '平面物料/天云数据公司简介对折页_印刷版_更新版_02.png', title: '公司简介折页 反面' },
      { src: '平面物料/数字分身平台.png', title: '数字分身平台' },
      { src: '平面物料/2023资讯快报第一期01 拷贝 2.jpg', title: '资讯快报第一期' },
      { src: '平面物料/2024科技向未来跨年晚会物料.jpg', title: '跨年晚会物料' },
    ]},
    { project: '活动物料', images: [
      { src: '平面物料/立牌1.png', title: '立牌设计 01' },
      { src: '平面物料/立牌2.png', title: '立牌设计 02' },
      { src: '平面物料/工作会议1.png', title: '工作会议 01' },
      { src: '平面物料/工作会议2.png', title: '工作会议 02' },
      { src: '平面物料/工作会议3.png', title: '工作会议 03' },
      { src: '平面物料/联欢会1.png', title: '联欢会 01' },
      { src: '平面物料/联欢会2.png', title: '联欢会 02' },
      { src: '平面物料/联欢会3.png', title: '联欢会 03' },
    ]},
    { project: '节日海报', images: [
      { src: '平面物料/节日海报/1.png', title: '节日海报 01' },
      { src: '平面物料/节日海报/1 (2).png', title: '节日海报 02' },
      { src: '平面物料/节日海报/2.png', title: '节日海报 03' },
      { src: '平面物料/节日海报/2 (2).png', title: '节日海报 04' },
      { src: '平面物料/节日海报/2 (3).png', title: '节日海报 05' },
      { src: '平面物料/节日海报/3.png', title: '节日海报 06' },
      { src: '平面物料/节日海报/6.png', title: '节日海报 07' },
      { src: '平面物料/节日海报/7.png', title: '节日海报 08' },
      { src: '平面物料/节日海报/9.png', title: '节日海报 09' },
      { src: '平面物料/节日海报/10.png', title: '节日海报 10' },
      { src: '平面物料/节日海报/11.png', title: '节日海报 11' },
      { src: '平面物料/节日海报/冬至1.png', title: '冬至海报' },
      { src: '平面物料/节日海报/圣诞2.png', title: '圣诞海报' },
      { src: '平面物料/节日海报/海报1.png', title: '节日海报 12' },
      { src: '平面物料/节日海报/立冬2.png', title: '立冬海报' },
      { src: '平面物料/节日海报/e43194e9444845c9aed62b70bf3a0ebc~tplv-tb4s082cfz-aigc_resize_2400_2400.png', title: '节日海报 13' },
      { src: '平面物料/节日海报/2024科技向未来跨年晚会物料/5.jpg', title: '跨年晚会 01' },
      { src: '平面物料/节日海报/2024科技向未来跨年晚会物料/6.jpg', title: '跨年晚会 02' },
    ]},
    { project: '流言榜项目', images: [
      { src: '平面物料/流言榜项目/流言榜漫画.png', title: '流言榜漫画 01' },
      { src: '平面物料/流言榜项目/流言榜漫画2.png', title: '流言榜漫画 02' },
    ]},
  ],
};

const CATEGORY_CONFIG = {
  video: { title: '视频制作', num: '01', accept: 'video/*,image/*', desc: '企业宣传视频与项目影像内容的创意策划与制作', icon: '▶', hint: '支持 MP4 / MOV / PNG / JPG 等格式' },
  print: { title: '平面物料', num: '02', accept: 'image/*', desc: '品牌主视觉、企业宣传、活动物料与节日海报的全品类设计输出', icon: '◆', hint: '支持 PNG / JPG / PDF 等图片格式' },
  ui:    { title: '界面设计', num: '03', accept: 'image/*', desc: '涵盖官网页面、管理系统与产品平台的界面视觉设计', icon: '▣', hint: '支持 PNG / JPG / SVG 等图片格式' },
  logo:  { title: 'Logo设计', num: '04', accept: 'image/*', desc: '品牌标识设计，涵盖标志创作与视觉应用规范', icon: '◈', hint: '支持 PNG / JPG / SVG 等图片格式' },
};

let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(src, title) {
  const idx = lightboxImages.findIndex(i => i.src === src);
  lightboxIndex = idx >= 0 ? idx : 0;
  updateLightbox();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function navLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  updateLightbox();
}

function updateLightbox() {
  const item = lightboxImages[lightboxIndex];
  document.getElementById('lbImg').src = e(item.src);
  document.getElementById('lbCaption').textContent = item.title;
  document.getElementById('lbCounter').textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

function makeCard(item) {
  const card = document.createElement('div');
  card.className = 'portfolio-card';
  card.innerHTML = `<div class="img-wrap"><img src="${e(item.src)}" alt="${item.title}" loading="lazy"></div><div class="card-info"><span class="card-title">${item.title}</span>${item.tag ? `<span class="card-tag">${item.tag}</span>` : ''}</div>`;
  card.addEventListener('click', () => openLightbox(item.src, item.title));
  return card;
}

function collectAllImages() {
  const all = [];
  PORTFOLIO_DATA.logo.forEach(i => all.push({ src: i.src, title: i.title }));
  PORTFOLIO_DATA.ui.forEach(g => g.images.forEach(i => all.push({ src: i.src, title: i.title })));
  PORTFOLIO_DATA.video.filter(i => i.type === 'image').forEach(i => all.push({ src: i.src, title: i.title }));
  PORTFOLIO_DATA.print.forEach(g => g.images.forEach(i => all.push({ src: i.src, title: i.title })));
  lightboxImages = all;
}

const DB_NAME = 'portfolio_uploads';
const DB_VERSION = 1;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (ev) => {
      const db = ev.target.result;
      ['logo','ui','video','print'].forEach(s => {
        if (!db.objectStoreNames.contains(s)) db.createObjectStore(s, { keyPath: 'id', autoIncrement: true });
      });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbSave(category, file) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(category, 'readwrite');
    const req = tx.objectStore(category).add({ file, name: file.name, type: file.type, size: file.size, date: Date.now() });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbGetAll(category) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(category, 'readonly');
    const req = tx.objectStore(category).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

async function dbDelete(category, id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(category, 'readwrite');
    const req = tx.objectStore(category).delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}

function showToast(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? '✓' : '✕';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function initSubPage(category) {
  const config = CATEGORY_CONFIG[category];
  document.title = `${config.title} | 作品集`;

  document.getElementById('pageTitle').textContent = config.title;
  document.getElementById('pageDesc').textContent = config.desc;
  document.getElementById('sectionNum').textContent = `${config.num} / WORK`;
  const hintEl = document.getElementById('uploadHint');
  if (hintEl) hintEl.textContent = config.hint;

  const fileInput = document.getElementById('fileInput');
  fileInput.accept = config.accept;

  const uploadBtn = document.getElementById('uploadBtn');
  const dropZone = document.getElementById('dropZone');

  uploadBtn.addEventListener('click', () => fileInput.click());
  dropZone.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', async (ev) => {
    const files = Array.from(ev.target.files);
    if (!files.length) return;
    let ok = 0;
    for (const f of files) {
      try { await dbSave(category, f); ok++; } catch (err) { console.error(err); }
    }
    showToast(`成功上传 ${ok} 个文件`);
    fileInput.value = '';
    await loadUploaded(category);
  });

  ['dragover','dragenter'].forEach(evt => {
    dropZone.addEventListener(evt, (ev) => { ev.preventDefault(); dropZone.classList.add('dragover'); });
  });
  ['dragleave','drop'].forEach(evt => {
    dropZone.addEventListener(evt, (ev) => { ev.preventDefault(); dropZone.classList.remove('dragover'); });
  });
  dropZone.addEventListener('drop', async (ev) => {
    const files = Array.from(ev.dataTransfer.files);
    if (!files.length) return;
    let ok = 0;
    for (const f of files) {
      try { await dbSave(category, f); ok++; } catch (err) { console.error(err); }
    }
    showToast(`成功上传 ${ok} 个文件`);
    await loadUploaded(category);
  });

  loadUploaded(category);
}

async function loadUploaded(category) {
  const items = await dbGetAll(category);
  const container = document.getElementById('uploadGrid');
  const emptyMsg = document.getElementById('uploadEmpty');
  const countBadge = document.getElementById('uploadCount');

  container.innerHTML = '';
  if (!items.length) {
    emptyMsg.style.display = 'block';
    if (countBadge) countBadge.textContent = '0';
    return;
  }
  emptyMsg.style.display = 'none';
  if (countBadge) countBadge.textContent = items.length;

  items.forEach(item => {
    const url = URL.createObjectURL(item.file);
    const isVideo = item.type && item.type.startsWith('video/');
    const div = document.createElement('div');
    div.className = 'upload-item';
    if (isVideo) {
      div.innerHTML = `<button class="delete-btn" data-id="${item.id}" title="删除">&times;</button><video src="${url}" controls preload="metadata" playsinline></video><div class="upload-item-info"><span class="upload-item-name">${item.name}</span><span class="upload-item-size">${formatSize(item.size)}</span></div>`;
    } else {
      div.innerHTML = `<button class="delete-btn" data-id="${item.id}" title="删除">&times;</button><img src="${url}" alt="${item.name}" loading="lazy"><div class="upload-item-info"><span class="upload-item-name">${item.name}</span><span class="upload-item-size">${formatSize(item.size)}</span></div>`;
      const img = div.querySelector('img');
      img.addEventListener('click', () => openLightbox(url, item.name));
    }
    div.querySelector('.delete-btn').addEventListener('click', async (ev) => {
      ev.stopPropagation();
      try {
        await dbDelete(category, item.id);
        URL.revokeObjectURL(url);
        showToast('已删除');
        await loadUploaded(category);
      } catch (err) { showToast('删除失败', 'error'); }
    });
    container.appendChild(div);
  });
}

function renderLogo() {
  const grid = document.getElementById('contentGrid');
  grid.className = 'grid-3 logo-grid';
  PORTFOLIO_DATA.logo.forEach(item => grid.appendChild(makeCard(item)));
}

function renderUI() {
  const container = document.getElementById('contentGrid');
  container.innerHTML = '';
  container.className = '';
  PORTFOLIO_DATA.ui.forEach(group => {
    const div = document.createElement('div');
    div.className = 'project-group reveal';
    div.innerHTML = `<div class="project-name">${group.project}</div>`;
    const grid = document.createElement('div');
    grid.className = 'grid-3';
    group.images.forEach(img => grid.appendChild(makeCard(img)));
    div.appendChild(grid);
    container.appendChild(div);
  });
}

function renderVideo() {
  const container = document.getElementById('contentGrid');
  container.className = 'grid-3';
  PORTFOLIO_DATA.video.forEach(item => {
    if (item.type === 'video') {
      const card = document.createElement('div');
      card.className = 'video-card';
      card.innerHTML = `<video src="${e(item.src)}" controls preload="metadata" playsinline></video><div class="video-info"><span class="video-title">${item.title}</span><span class="video-duration">${item.duration}</span></div>`;
      container.appendChild(card);
    } else {
      container.appendChild(makeCard(item));
    }
  });
}

function renderPrint() {
  const container = document.getElementById('contentGrid');
  container.innerHTML = '';
  container.className = '';
  PORTFOLIO_DATA.print.forEach(group => {
    const div = document.createElement('div');
    div.className = 'print-group reveal';
    div.innerHTML = `<div class="project-name">${group.project}</div>`;
    const masonry = document.createElement('div');
    masonry.className = 'grid-3';
    group.images.forEach(img => masonry.appendChild(makeCard(img)));
    div.appendChild(masonry);
    container.appendChild(div);
  });
}

function initCommon() {
  collectAllImages();

  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = (window.scrollY / h) * 100;
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = p + '%';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.addEventListener('keydown', (ev) => {
    if (!document.getElementById('lightbox').classList.contains('active')) return;
    if (ev.key === 'Escape') closeLightbox();
    if (ev.key === 'ArrowLeft') navLightbox(-1);
    if (ev.key === 'ArrowRight') navLightbox(1);
  });

  const lb = document.getElementById('lightbox');
  if (lb) lb.addEventListener('click', (ev) => { if (ev.target.id === 'lightbox') closeLightbox(); });

  const navToggle = document.getElementById('navToggle');
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      document.getElementById('navMenu').classList.toggle('show');
    });
  }
}
