/* ==========================================================================
   OSBox 极客技术服务站 - 共享交互逻辑与多页面鉴权脚本 (script.js)
   ========================================================================= */

// 全局状态变量
let unlockedTabs = [];
let currentPage = 'home'; // 当前所在的页面标识 ('home', 'minecraft', 'trouble', etc.)
let currentBootCategory = 'all'; // 快捷键分类筛选

document.addEventListener('DOMContentLoaded', () => {
    // 1. 定位当前页面类型
    detectCurrentPage();
    
    // 2. 检查并初始化本地激活状态
    checkUnlockStatus();
    
    // 3. 初始化导航与过滤器事件
    initNavigation();
    initBootKeySearch();
    initDownloadFilter();
    
    // 4. 初始化大厂风特性：Vercel 卡片鼠标跟踪发光效果 (如果是总主页)
    if (currentPage === 'home') {
        initCardGlowEffect();
    }
});

/**
 * 1. 定位当前页面类型
 */
function detectCurrentPage() {
    const path = window.location.pathname;
    const pageName = path.split("/").pop(); // 获取文件名，例如 "minecraft.html"
    
    if (!pageName || pageName === 'index.html') {
        currentPage = 'home';
    } else if (pageName.includes('minecraft')) {
        currentPage = 'minecraft';
    } else if (pageName.includes('trouble')) {
        currentPage = 'trouble';
    } else if (pageName.includes('linux')) {
        currentPage = 'linux';
    } else if (pageName.includes('os-install')) {
        currentPage = 'os-install';
    } else if (pageName.includes('boot-keys')) {
        currentPage = 'boot-keys';
    } else if (pageName.includes('downloads')) {
        currentPage = 'downloads';
    } else if (pageName.includes('kefu')) {
        currentPage = 'kefu';
    } else if (pageName.includes('steam')) {
        currentPage = 'steam';
    } else if (pageName.includes('custom')) {
        currentPage = 'custom';
    }
}

/**
 * 2. 检查并应用本地解锁状态 (多页面共享版)
 */
function checkUnlockStatus() {
    // 全面开放，免去验证码锁定，所有页面直接解锁
    unlockedTabs = ['minecraft', 'trouble', 'linux', 'os-install', 'boot-keys', 'downloads', 'steam', 'custom'];

    const body = document.body;
    const lockText = document.getElementById('lock-status-text');
    const lockTags = document.querySelectorAll('.lock-tag');
    const navItems = document.querySelectorAll('.nav-item');

    // 1. 更新侧边栏栏目的锁定状态与迷你锁图标 (如果在子页面)
    navItems.forEach(item => {
        const tabId = item.dataset.tab;
        if (tabId === 'home') return;
        
        if (unlockedTabs.includes(tabId)) {
            item.classList.remove('tab-locked');
        } else {
            item.classList.add('tab-locked');
        }
    });

    // 2. 如果在总主页 index.html，更新 Portal 卡片的锁定状态与锁定角标
    if (currentPage === 'home') {
        const portalCards = document.querySelectorAll('.portal-card');
        portalCards.forEach(card => {
            const targetTab = card.dataset.target;
            const lockTag = card.querySelector('.lock-tag');
            
            if (unlockedTabs.includes(targetTab)) {
                if (lockTag) {
                    lockTag.innerText = "[ 已激活 ]";
                    lockTag.style.background = "";
                    lockTag.style.borderColor = "";
                    lockTag.style.color = "";
                }
            } else {
                if (lockTag) {
                    lockTag.innerText = "[ 待激活 ]";
                    lockTag.style.background = "";
                    lockTag.style.borderColor = "";
                    lockTag.style.color = "";
                }
            }
        });

        // 更新大厅状态横幅信息
        if (lockText) {
            if (unlockedTabs.length === 0) {
                lockText.innerHTML = "服务状态：<span style='color: #ef4444; font-weight: 600;'>🔒 当前未激活任何服务</span>，请在下方点击对应服务卡片激活。";
            } else if (unlockedTabs.length < 6) {
                const activeNames = getActiveServicesChineseNames();
                lockText.innerHTML = `服务状态：已成功激活部分服务（<span style='color: #a855f7; font-weight: 600;'>${activeNames}</span>），其他服务可在激活后解锁。`;
            } else {
                lockText.innerHTML = "服务状态：<span style='color: #10b981; font-weight: 600;'>🟢 所有极客自助服务已完全解锁</span>，欢迎使用！";
            }
        }
    } else {
        // 客服快捷话术页面不需要进行锁定和验证
        if (currentPage === 'kefu') {
            body.classList.remove('is-page-locked');
            return;
        }
        // 3. 如果在独立功能页面，检查当前页面是否被激活
        if (unlockedTabs.includes(currentPage)) {
            // 当前页已激活：取消高斯模糊锁定，隐藏弹窗
            body.classList.remove('is-page-locked');
            closeUnlockModal(true); // 强行关闭弹窗且不触发返回首页
        } else {
            // 当前页未激活：添加高斯模糊锁定，动态注入并弹出解锁框
            body.classList.add('is-page-locked');
            insertUnlockModalHtml();
            openUnlockModal(currentPage);
        }
    }
}

/**
 * 辅助方法：获取已激活栏目的中文简称列表
 */
function getActiveServicesChineseNames() {
    const names = [];
    if (unlockedTabs.includes('minecraft')) names.push('Minecraft部署');
    if (unlockedTabs.includes('trouble')) names.push('系统疑难杂症');
    if (unlockedTabs.includes('linux')) names.push('Linux专业安装');
    if (unlockedTabs.includes('os-install')) names.push('Win/Linux重装');
    if (unlockedTabs.includes('boot-keys')) names.push('快捷键查询');
    if (unlockedTabs.includes('downloads')) names.push('下载中心');
    if (unlockedTabs.includes('steam')) names.push('Steam优化');
    if (unlockedTabs.includes('custom')) names.push('系统定制');
    return names.join('、');
}

/**
 * 3. 多页面跳转与导航事件逻辑
 */
function initNavigation() {
    // 侧边导航栏点击
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetTab = item.dataset.tab;

            if (targetTab === 'home') {
                window.location.href = 'index.html';
                return;
            }

            // 拦截：如果点击了未解锁的栏目，弹出验证码输入窗
            if (!unlockedTabs.includes(targetTab)) {
                e.preventDefault();
                insertUnlockModalHtml();
                openUnlockModal(targetTab);
                return;
            }

            // 已解锁，跳转到独立 HTML 页面
            window.location.href = `${targetTab}.html`;
        });
    });

    // 首页 Portal 卡片点击
    if (currentPage === 'home') {
        const portalCards = document.querySelectorAll('.portal-card');
        portalCards.forEach(card => {
            card.addEventListener('click', () => {
                const targetTab = card.dataset.target;
                
                if (!unlockedTabs.includes(targetTab)) {
                    insertUnlockModalHtml();
                    openUnlockModal(targetTab);
                    return;
                }
                
                // 跳转到独立 HTML 页面
                window.location.href = `${targetTab}.html`;
            });
        });
    }
}

/**
 * 4. 动态注入 6位数字验证码解锁弹窗 HTML 结构
 */
function insertUnlockModalHtml() {
    if (document.getElementById('unlock-modal')) return;
    
    const modalHtml = `
    <div id="unlock-modal" class="modal-overlay">
        <div class="modal-container">
            <div class="modal-header">
                <span class="modal-lock-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                <h2>极客服务安全验证</h2>
                <p>请输入拼多多客服发送给您的 <b>6位订单激活授权码</b> 以解锁本栏目高级技术服务教程与官方高速下载链接。</p>
            </div>
            
            <div class="modal-body">
                <!-- 6位分体输入框 -->
                <div class="otp-inputs">
                    <input type="text" maxlength="1" class="otp-box" data-index="0" inputmode="numeric" pattern="[0-9]*" autofocus>
                    <input type="text" maxlength="1" class="otp-box" data-index="1" inputmode="numeric" pattern="[0-9]*">
                    <input type="text" maxlength="1" class="otp-box" data-index="2" inputmode="numeric" pattern="[0-9]*">
                    <input type="text" maxlength="1" class="otp-box" data-index="3" inputmode="text">
                    <input type="text" maxlength="1" class="otp-box" data-index="4" inputmode="numeric" pattern="[0-9]*">
                    <input type="text" maxlength="1" class="otp-box" data-index="5" inputmode="numeric" pattern="[0-9]*">
                </div>
                
                <div id="error-alert" class="error-alert hidden">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="err-icon"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span id="error-alert-text">验证码输入有误，请核对后重新输入。</span>
                </div>
            </div>
            
            <div class="modal-footer">
                <button class="modal-btn submit-btn" onclick="submitVerification()">验证并解锁</button>
                <button class="modal-btn secondary-btn" onclick="closeUnlockModal()">暂不解锁</button>
            </div>

            <div class="modal-hint">
                <p>未购买？<a href="javascript:void(0)" onclick="openPddServiceAlert()">联系客服获取激活码 &gt;&gt;</a></p>
            </div>
        </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    // 重新绑定新生成输入框的监听事件
    initOtpInputs();
}

/**
 * 5. 6位验证码分体输入框交互逻辑
 */
function initOtpInputs() {
    const inputs = document.querySelectorAll('.otp-box');
    
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            
            if (index === 3) {
                // 第四位只允许输入英文字母，输入时自动转为大写
                const letterVal = val.replace(/[^a-zA-Z]/g, '').toUpperCase();
                e.target.value = letterVal;
                if (letterVal.length === 1) {
                    focusNext(index);
                }
            } else {
                // 其他位只允许输入数字
                const numVal = val.replace(/[^0-9]/g, '');
                e.target.value = numVal;
                if (numVal.length === 1) {
                    focusNext(index);
                }
            }
        });

        // 退格键回退聚焦
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                if (input.value.length === 0) {
                    const prevInput = document.querySelector(`.otp-box[data-index="${index - 1}"]`);
                    if (prevInput) {
                        prevInput.focus();
                        prevInput.value = '';
                    }
                } else {
                    input.value = '';
                }
            }
        });

        // 粘贴解析
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasteData = e.clipboardData.getData('text').trim();
            
            if (pasteData.length === 6) {
                const chars = pasteData.split('');
                chars.forEach((char, idx) => {
                    const targetInput = document.querySelector(`.otp-box[data-index="${idx}"]`);
                    if (targetInput) {
                        if (idx === 3) {
                            targetInput.value = char.toUpperCase();
                        } else if (/[0-9]/.test(char)) {
                            targetInput.value = char;
                        }
                    }
                });

                const lastInput = document.querySelector(`.otp-box[data-index="5"]`);
                if (lastInput) lastInput.focus();
            }
        });
    });

    const modal = document.getElementById('unlock-modal');
    if (modal) {
        // 防止重复绑定
        modal.removeEventListener('keydown', handleEnterKey);
        modal.addEventListener('keydown', handleEnterKey);
    }
}

function handleEnterKey(e) {
    if (e.key === 'Enter') {
        submitVerification();
    }
}

function focusNext(index) {
    const nextInput = document.querySelector(`.otp-box[data-index="${index + 1}"]`);
    if (nextInput) {
        nextInput.focus();
    }
}

/**
 * 6. 提交验证码校验 (按尾数解锁特定独立页面)
 */
function submitVerification() {
    const inputs = document.querySelectorAll('.otp-box');
    const modal = document.getElementById('unlock-modal');
    const pendingTab = modal ? modal.dataset.pendingTab : '';
    
    let code = '';
    inputs.forEach(input => {
        code += input.value.trim();
    });

    const regex = /^\d{3}H\d{2}$/;

    if (regex.test(code)) {
        const typeChar = code[5];
        let targetTabsToUnlock = [];
        let unlockedName = '';

        switch (typeChar) {
            case '1':
                targetTabsToUnlock = ['minecraft'];
                unlockedName = '我的世界 Minecraft 部署服务';
                break;
            case '2':
                targetTabsToUnlock = ['trouble'];
                unlockedName = '系统疑难杂症解决';
                break;
            case '3':
                targetTabsToUnlock = ['linux'];
                unlockedName = 'Linux 专业系统安装';
                break;
            case '4':
                targetTabsToUnlock = ['os-install'];
                unlockedName = 'Win/Linux 原版重装';
                break;
            case '5':
                targetTabsToUnlock = ['boot-keys'];
                unlockedName = '主板启动快捷键查询';
                break;
            case '6':
                targetTabsToUnlock = ['downloads'];
                unlockedName = '官方纯净下载中心';
                break;
            case '7':
                targetTabsToUnlock = ['custom'];
                unlockedName = '系统封装与定制服务';
                break;
            case '8':
                targetTabsToUnlock = ['steam'];
                unlockedName = 'Steam 安装与使用优化';
                break;
            case '9':
            case '0':
                targetTabsToUnlock = ['minecraft', 'trouble', 'linux', 'os-install', 'boot-keys', 'downloads', 'steam', 'custom'];
                unlockedName = '所有极客技术服务';
                break;
            default:
                handleVerificationError();
                return;
        }

        // 追加激活的栏目
        targetTabsToUnlock.forEach(tab => {
            if (!unlockedTabs.includes(tab)) {
                unlockedTabs.push(tab);
            }
        });
        localStorage.setItem('osbox_unlocked_tabs', JSON.stringify(unlockedTabs));
        
        // 刷新状态并关闭模态窗
        checkUnlockStatus();
        closeUnlockModal(true); // 传入 true 表示解锁成功，不需要重定向返回首页
        showToast(`🎉 成功激活：${unlockedName}！`);

        // 跳转逻辑：
        // 1. 如果在总主页解锁了 pending 栏目，直接跳转去该 HTML
        if (currentPage === 'home' && pendingTab && unlockedTabs.includes(pendingTab)) {
            window.location.href = `${pendingTab}.html`;
        } 
        // 2. 如果在当前独立功能页上进行激活并且通过了
        else if (currentPage !== 'home' && unlockedTabs.includes(currentPage)) {
            // checkUnlockStatus() 已经移除了 is-page-locked，内容已可见
        }
        // 3. 其他情况，跳转到刚刚激活的第一个页面
        else {
            const firstUnlockedTab = targetTabsToUnlock[0];
            window.location.href = `${firstUnlockedTab}.html`;
        }

    } else {
        handleVerificationError();
    }
}

/**
 * 校验失败处理
 */
function handleVerificationError() {
    const errorAlert = document.getElementById('error-alert');
    if (errorAlert) {
        errorAlert.classList.remove('hidden');
    }
    
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer) {
        modalContainer.classList.add('shake');
        setTimeout(() => {
            modalContainer.classList.remove('shake');
        }, 500);
    }

    const inputs = document.querySelectorAll('.otp-box');
    inputs.forEach(input => input.value = '');
    if (inputs[0]) inputs[0].focus();
}

/**
 * 打开/关闭解锁模态窗
 */
function openUnlockModal(pendingTab = '') {
    const modal = document.getElementById('unlock-modal');
    const firstInput = document.querySelector('.otp-box[data-index="0"]');
    
    if (modal) {
        modal.dataset.pendingTab = pendingTab;
        modal.classList.add('show');
        setTimeout(() => {
            if (firstInput) firstInput.focus();
        }, 100);
    }
}

/**
 * 关闭验证弹窗
 * @param {boolean} unlockSuccess 是否为成功解锁而关闭
 */
function closeUnlockModal(unlockSuccess = false) {
    const modal = document.getElementById('unlock-modal');
    const errorAlert = document.getElementById('error-alert');
    
    if (modal) {
        modal.classList.remove('show');
        modal.dataset.pendingTab = '';
    }
    if (errorAlert) {
        errorAlert.classList.add('hidden');
    }

    // 核心体验逻辑：
    // 如果用户是在独立子页面访问时被强行锁定的，且用户点击“暂不解锁”，
    // 为了防止其面对一片模糊的内容，我们将用户重定向回总大厅 index.html。
    if (!unlockSuccess && currentPage !== 'home' && !unlockedTabs.includes(currentPage)) {
        window.location.href = 'index.html';
    }
}

/**
 * 7. Vercel 鼠标悬停微光渲染器 (仅首页大厅适用)
 */
function initCardGlowEffect() {
    const cards = document.querySelectorAll('.portal-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
}

/**
 * 8. 主板启动快捷键实时模糊检索
 */
function initBootKeySearch() {
    const searchInput = document.getElementById('boot-key-search');
    if (!searchInput) return;

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            clearBootSearch();
        }
    });
}

function filterBootKeys() {
    const query = document.getElementById('boot-key-search').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.boot-card');
    
    cards.forEach(card => {
        const keywords = card.getAttribute('data-keywords').toLowerCase();
        const title = card.querySelector('h3').innerText.toLowerCase();
        const pElement = card.querySelector('.boot-body p');
        const bodyText = pElement ? pElement.innerText.toLowerCase() : '';
        const category = card.getAttribute('data-category') || 'all';
        
        const matchesQuery = keywords.includes(query) || title.includes(query) || bodyText.includes(query);
        const matchesCategory = currentBootCategory === 'all' || category === currentBootCategory;
        
        if (matchesQuery && matchesCategory) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function setBootCategory(category, element) {
    currentBootCategory = category;
    
    const filterButtons = document.querySelectorAll('.boot-filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }
    
    filterBootKeys();
}

function clearBootSearch() {
    const searchInput = document.getElementById('boot-key-search');
    if (searchInput) {
        searchInput.value = '';
    }
    currentBootCategory = 'all';
    const allBtn = document.querySelector('.boot-filter-btn[onclick*="all"]');
    const filterButtons = document.querySelectorAll('.boot-filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    if (allBtn) {
        allBtn.classList.add('active');
    }
    filterBootKeys();
    if (searchInput) {
        searchInput.focus();
    }
}

/**
 * 9. 官方下载中心分类过滤
 */
function initDownloadFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const downloadCards = document.querySelectorAll('.download-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.dataset.filter;

            // 切换按钮激活状态
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 筛选下载卡片
            downloadCards.forEach(card => {
                const cardCat = card.dataset.cat;
                if (filterValue === 'all' || cardCat === filterValue) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transition = 'opacity 0.25s ease';
                    }, 40);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * 10. 一键复制文本 & 全局 Toast 提示
 */
function copyText(elementId, message = '已复制到剪贴板') {
    const element = document.getElementById(elementId);
    if (!element) return;

    const textToCopy = element.innerText || element.textContent;

    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(message);
    }).catch(err => {
        console.error('无法复制代码: ', err);
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast(message);
        } catch (e) {
            showToast('复制失败，请手动选择复制');
        }
        document.body.removeChild(textarea);
    });
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.innerText = msg;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

/**
 * 11. 客服提示弹窗
 */
function openPddServiceAlert() {
    alert('【如何获取激活授权码？】\n\n1. 请打开拼多多 APP，进入您购买服务的订单。\n2. 点击“联系卖家”或“联系客服”。\n3. 发送您的订单号，客服会自动为您推送本次服务专属的 6位授权验证码（例如: 123H41）。\n4. 将验证码填入本站解锁栏即可解锁您所购买的技术服务教程。');
}
