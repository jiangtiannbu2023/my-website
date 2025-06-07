# 我的AI工具箱网站

这是一个基于HTML和CSS的简单AI工具箱网站，灵感来源于 `https://gpt.candobear.com/toolbox`。

## 如何编辑网站内容

1.  **编辑工具信息**: 
    打开 `index.html` 文件。您会看到类似下面这样的代码块，代表一个工具卡片：

    ```html
    <div class="tool-card">
        <h3>工具名称A ★★★★★</h3>
        <p>这是一个关于工具A的简短描述，说明它的主要功能和用途。</p>
        <a href="#" class="tool-link" target="_blank">访问工具</a>
        <div class="tags">
            <span>标签1</span>
            <span>标签2</span>
        </div>
    </div>
    ```

    *   修改 `<h3>` 标签内的文本来改变工具名称和星级。
    *   修改 `<p>` 标签内的文本来改变工具描述。
    *   修改 `<a>` 标签的 `href` 属性来设置工具的实际链接。
    *   在 `<div class="tags">` 内修改或添加 `<span>` 标签来管理工具的标签。

2.  **添加新的工具**:
    复制一个现有的 `<div class="tool-card">...</div>` 代码块，并将其粘贴到相应的分类 `<section class="toolbox-category">` 内。然后按照上面的步骤修改新工具的信息。

3.  **添加新的分类**:
    复制一个现有的 `<section class="toolbox-category">...</section>` 代码块，并将其粘贴到 `<main>` 标签内。修改 `<h2>` 标签内的文本作为新的分类名称，然后像上面那样在新的分类中添加工具卡片。

4.  **修改样式**:
    网站的样式由 `style.css` 文件控制。您可以编辑此文件来更改颜色、字体、布局等。

## 如何发布网站

有多种方式可以发布这个静态网站：

1.  **GitHub Pages (推荐)**:
    *   将 `my-toolbox-website` 文件夹初始化为一个Git仓库。
    *   将代码推送到GitHub上的一个新仓库。
    *   在GitHub仓库的设置中，找到 GitHub Pages 部分。
    *   选择 `main` (或 `master`) 分支作为发布源。
    *   您的网站将在 `https://<你的用户名>.github.io/<仓库名>/` 上线。

2.  **Netlify / Vercel / Cloudflare Pages**:
    *   这些平台提供了非常方便的静态网站托管服务。
    *   通常，您只需要将您的GitHub仓库连接到这些平台，它们会自动构建和部署您的网站。

3.  **传统虚拟主机**:
    *   如果您有虚拟主机账户，只需将 `my-toolbox-website` 文件夹内的所有文件 (index.html, style.css等) 上传到您网站的根目录 (通常是 `public_html` 或 `www`) 即可。

## 本地预览

要查看您所做的更改，只需在您的网页浏览器中直接打开 `index.html` 文件即可。

---

祝您使用愉快！