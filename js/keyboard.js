//1.初始化数据
var hashA = init()
var keys = hashA.keys
var hash = hashA.hash

//2.生成键盘
generateKeyboard(keys, hash)

//3.监听用户
listenToUser(hash)


function init() {
    var keys = {
        0: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        1: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        3: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        length: 4
    }
    var hash = {
        1: "bing.com",
        b: "www.bilibili.com",
        q: 'qq.com',
        z: 'zhihu.com',
        i: 'iciba.com',
        y: 'www.youtube.com',
        w: 'alpha.wallhaven.cc',
        v: "www.v2ex.com",
        j: "jianshu.com",
        g: "github.com"
    }
    //取出 localStorage 中的 uuu 对应的 hash，这样用户编辑的新链接就覆盖上去了
    var hashInlocalStorage = getfromlocalStorage('uuu')
    if (hashInlocalStorage) {
        hash = hashInlocalStorage
    }
    return {
        "keys": keys,
        "hash": hash
    }
}

function createButton(id) {
    var button = tag('button')
    button.textContent = 'new'
    button.id = id
    button.onclick = function (xzkjcnxlkcjlk) {
        //xzkjcnxlkcjlk.target 就是用户点击的元素 
        var button2 = xzkjcnxlkcjlk.target
        var img2 = button2.previousSibling
        var key = button2.id
        var x = prompt('给我一个网址')
        hash[key] = x // hash 变更
        img2.src = 'http://' + x + '/favicon.ico'
        img2.onerror = function (error) {
            error.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        localStorage.setItem('uuu', JSON.stringify(hash)) //缓存用户已编辑的新链接                    
    }
    return button
}

function createImage(domain) {
    var img = tag('img')
    if (domain) {
        img.src = 'http://' + domain + '/favicon.ico'
    } else
        img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    img.onerror = function (error) {
        error.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    return img
}

function getfromlocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(tagName) {
    return document.createElement(tagName)
}

function createSpan(textContent) {
    var span = tag('span')
    span.textContent = textContent
    span.className = 'text'
    return span
}

//遍历 keys，生成 kbd 标签
function generateKeyboard(keys, hash) {
    for (index = 0; index < keys.length; index++) {
        var div = tag('div')
        div.className = 'row'

        main.appendChild(div)

        var row = keys[index] //第一排数组，第二排数组，第三排数组，第四排数组
        for (index2 = 0; index2 < row.length; index2++) {
            var span = createSpan(row[index2])

            var button = createButton(row[index2])

            var img = createImage(hash[row[index2]])

            var kbd = tag('kbd')
            kbd.className = 'key'

            kbd.appendChild(span)
            kbd.appendChild(img)
            kbd.appendChild(button)

            div.appendChild(kbd)
        }
    }
}

function listenToUser(hash) {
    document.onkeypress = function (xzkjcnxlkcjlk) {
        var key = xzkjcnxlkcjlk['key']
        var website = hash[key]
        //location.href = 'https://' + website
        window.open('http://' + website, '_blank')
    }
}