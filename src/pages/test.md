---
title: Grid布局文档示例
meta:
  - name: description
    content: Hello World
test: test
---

<Container class="flex flex-col">
# Grid 布局

## 介绍

CSS Grid 布局（也称为"Grid"或"CSS Grid"）是一个基于二维网格的布局系统，与过去的任何网页布局系统相比，它彻底改变了我们设计用户界面的方式。CSS 一直被用于布局我们的网页，但它在这方面的表现并不理想。最初，我们使用表格，然后是浮动、定位和内联块，但所有这些方法本质上都是一种 hack，而且缺少了许多重要的功能（例如垂直居中）。Flexbox 也是一个非常好的布局工具，但它的单向流动方式在不同的使用情况下有所不同 - 它们实际上可以很好地结合使用！Grid 是第一个专门为解决我们一直在处理的布局问题而创建的 CSS 模块。

本指南的目的是介绍最新版本规范中存在的 Grid 概念。因此，我不会涵盖过时的 Internet Explorer 语法（尽管您完全可以在 IE 11 中使用 Grid）或其他历史性的 hack。

## CSS Grid 基础

自 2017 年 3 月起，大多数浏览器已经支持原生的、无需前缀的 CSS Grid：包括 Chrome（包括 Android 版本）、Firefox、Safari（包括 iOS 版本）和 Opera。而 Internet Explorer 10 和 11 支持 Grid，但是它们采用的是旧的实现方式和过时的语法。现在是使用 Grid 构建网页的时候了！

要开始使用 Grid，您需要将一个容器元素定义为网格，使用 display: grid，使用 grid-template-columns 和 grid-template-rows 设置列和行的大小，然后使用 grid-column 和 grid-row 将子元素放入网格中。与 flexbox 类似，网格项目的源代码顺序并不重要。您的 CSS 可以以任何顺序来放置它们，这使得使用媒体查询轻松重新排列网格变得非常容易。想象一下，只需几行 CSS 代码，您就可以定义整个页面的布局，然后完全重新排列它以适应不同的屏幕宽度。Grid 是迄今为止最强大的 CSS 模块之一。

## 重要的 CSS Grid 术语

在深入探讨网格(Grid)的概念之前，了解相关术语是非常重要的。由于这里涉及的术语在概念上有些相似，如果不首先记住它们在网格规范中的含义，很容易混淆它们。但是不用担心，这些术语并不多。

在进入正题之前，先了解这些术语的定义是很重要的，因为它们会在接下来的内容中频繁出现。

### 网格容器(Grid Container)

应用了`display: grid`的元素，它是所有网格项(grid items)的直接父元素。

在这个示例中，容器是网格：

```html
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```

<div class="container">   <div class="item item-1"> </div>   <div class="item item-2"> </div>   <div class="item item-3"> </div> </div>

### 网格线(Grid Line)

构成网格结构的分隔线。它们可以是垂直的（"列网格线"）或水平的（"行网格线"），并位于行或列的两侧。在这个示例中，黄色线是列网格线的一个例子。

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/terms-grid-line-e06ab5.svg" alt="img" style="width:200px" />

### 网格轨道(Grid Track)

相邻网格线之间的空间。可以将其视为网格的列或行。

这是第二行网格线和第三行网格线之间的网格轨道。

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/terms-grid-track-09c61e.svg" alt="img" style="width:200px" />

### 网格区域(Grid Area)

由四个网格线包围的总空间。网格区域可以由任意数量的网格单元(grid cells)组成。这是位于第 1 行网格线和第 3 行网格线之间，以及第 1 列网格线和第 3 列网格线之间的网格区域。

<img src="https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-area.svg" alt="img" style="width:200px" />

### 网格项(Grid Item)

网格容器的子元素（即直接子代）。在这个例子中，item 元素是网格项，但 sub-item 不是。

```html
<div class="container">
  <div class="item"></div>
  <div class="item">
    <p class="sub-item"></p>
  </div>
  <div class="item"></div>
</div>
```

### 网格单元(Grid Cell)

相邻行和相邻列网格线之间的空间。它是网格的一个单个"单元"。这是位于第 1 行网格线和第 2 行网格线之间，以及第 2 列网格线和第 3 列网格线之间的网格单元。

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/terms-grid-cell-3f87c3.svg" alt="img" style="width:200px" />

## 特殊单位和函数

### fr

在 CSS Grid 中，您可能会经常使用许多分数单位，比如`1fr`。它们的基本意思是“剩余空间的一部分”。因此，类似于以下声明：

```css
grid-template-columns: 1fr 3fr;
```

大致上表示 25%和 75%。不过，这些百分比值要比分数单位更为固定。举个例子，如果您给这些基于百分比的列添加了内边距，那么宽度就会超过 100%（假设使用 content-box 盒模型）。与其他单位相比，分数单位在与它们的组合中更加友好，您可以想象一下：

```css
grid-template-columns: 50px min-content 1fr;
```

### Sizing 相关

在调整行和列的大小时，您可以使用您习惯使用的所有长度单位，比如 px、rem、%等，但您还可以使用关键字：

`min-content`：内容的最小大小。想象一下一行文字，比如“E pluribus unum”，min-content 可能是单词“pluribus”的宽度。

`max-content`：内容的最大大小。以上面的句子为例，max-content 是整个句子的长度。

`auto`：这个关键字与分数单位非常相似，只不过在分配剩余空间时，它们在大小方面“输给了”分数单位。

分数单位：请参考上文。

`fit-content()`函数利用可用空间，但不会小于 min-content，也不会大于 max-content。

`minmax()`函数的功能正如其名：为长度设置一个最小值和最大值，这在与相对单位结合使用时非常有用。例如，您可能希望列只能收缩到一定程度。这非常有用，很可能就是您所期望的：

```css
grid-template-columns: minmax(100px, 1fr) 3fr;
```

### repeat

repeat()函数可以节省一些输入：

```css
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

/* easier: */
grid-template-columns: repeat(8, 1fr);

/* especially when: */
grid-template-columns: repeat(8, minmax(10px, 1fr));
```

当与关键字结合使用时，repeat()函数可以变得更加灵活：

- `auto-fill`: 在一行中尽可能放置尽可能多的列，即使它们是空的。

- `auto-fit`: 将所有列适应空间。优先将列扩展以填充空间，而不是保留空列。

这是 CSS Grid 中最著名的代码片段之一，也是有史以来最伟大的 CSS 技巧之一：

```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` 是一种使用自适应网格布局的方式，它可以根据可用空间自动调整列的数量，并在每列之间保持最小和最大宽度的范围。

具体来说，这个表达式使用了 `repeat()` 函数和 `minmax()` 函数的组合：

- `repeat(auto-fit, minmax(250px, 1fr))`：这里的 `auto-fit` 表示自动调整列的数量以适应可用空间，而不会导致溢出或换行。它会根据容器的宽度自动计算可以容纳的列数。
- `minmax(250px, 1fr)`：这个函数表示列的宽度可以在 250px 和 1fr（剩余空间的等分）之间进行调整。列的最小宽度是 250px，最大宽度是剩余空间的等分，即自动平均分配剩余的可用空间。

这个表达式的效果是，网格布局会根据可用空间动态调整列的数量，并且每个列的宽度会在最小值和最大值之间自适应调整。**当容器宽度增加时，会自动添加更多的列，并且每个列会相应地变窄，以保持整体布局的平衡**。

这种技术通常用于创建响应式网格布局，使网格可以根据不同设备和屏幕尺寸自动适应，并具有灵活的列宽度调整能力。

### Masonry（实验性）

CSS Grid 的一项实验性功能是砌体布局（masonry layout）。请注意，对于 CSS 砌体布局，有很多方法可供选择（可参考链接：[CSS 砌体布局的不同方法](https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/)），但它们大多是一些技巧，要么有重大缺陷，要么与您的期望不完全一致。

[规范现在已经有了官方的实现方式](https://drafts.csswg.org/css-grid-3/#masonry-layout)，而这在 Firefox 浏览器中是通过标志开启的。

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
}
```

### Subgrid（Firefox only）

Subgrid 是网格布局中非常有用的功能，它允许网格项拥有自己的网格，并从父网格继承网格线。

```css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
}
.grid-item {
  grid-column: 2 / 7;

  display: grid;
  grid-template-columns: subgrid;
}
.child-of-grid-item {
  /* gets to participate on parent grid! */
  grid-column: 3 / 6;
}
```

目前只有 Firefox 支持这一功能，但它确实应该得到广泛应用。

另外，了解`display: contents;`也是很有用的。虽然它与 subgrid 不同，但在某些情况下可以起到类似的作用。

```html
<div class="grid-parent">
  <div class="grid-item"></div>
  <div class="grid-item"></div>

  <ul style="display: contents;">
    <!-- These grid-items get to participate on 
         the same grid!-->
    <li class="grid-item"></li>
    <li class="grid-item"></li>
  </ul>
</div>
```

## Grid Container 属性

### display:grid

```css
.container {
  display: grid | inline-grid;
}
```

可以设置最外层的 Container 为 Grid 布局或者行内 Grid 布局；

### grid-template-columns & grid-template-rows

使用以空格分隔的值来定义网格的列和行。这些值表示轨道大小，它们之间的空间表示网格线。

值:

```
<track-size> – 可以是长度、百分比或使用fr单位表示的网格中可用空闲空间的分数（有关该单位的更多信息，请参考DigitalOcean）
<line-name> – 您选择的任意名称
```

比如：

```css
.container {
  grid-template-columns: ... ...;
  /* e.g. 
      1fr 1fr
      minmax(10px, 1fr) 3fr
      repeat(5, 1fr)
      50px auto 100px 1fr
  */
  grid-template-rows: ... ...;
  /* e.g. 
      min-content 1fr min-content
      100px 1fr max-content
  */
}
```

网格线会根据这些分配自动被赋予正数（-1 代表最后一行的替代）。

![img](https://static.www.toimc.com/blog/picgo/2023/06/19/template-columns-rows-01-a0865c.svg)

但是您也可以选择显式地为网格线命名。请注意，使用方括号来表示线的名称：

```css
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```

![Grid with user named lines](https://static.www.toimc.com/blog/picgo/2023/06/19/template-column-rows-02-b3fca1.svg)

具有用户命名线的网格 请注意，一条线可以有多个名称。例如，这里的第二行将有两个名称：row1-end 和 row2-start：

```css
.container {
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
}
```

如果您的定义中包含重复的部分，可以使用 repeat()来简化：

```css
.container {
  grid-template-columns: repeat(3, 20px [col-start]);
}
```

这等效于：

```css
.container {
  grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start];
}
```

如果多个线共享相同的名称，可以通过它们的线名称和计数来引用它们。

```css
.item {
  grid-column-start: col-start 2;
}
```

`fr`单位允许您将轨道的大小设置为网格容器的可用空闲空间的一部分。例如，这将使每个项的宽度为网格容器宽度的三分之一：

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```

可用空闲空间是在任何非灵活项之后计算的。在这个例子中，`fr`单位的可用总空间不包括`50px`：

```css
.container {
  grid-template-columns: 1fr 50px 1fr 1fr;
}
```

### grid-template-areas

通过引用使用 grid-area 属性指定的网格区域的名称来定义网格模板。重复网格区域的名称会导致内容跨越这些单元格。句点（.）表示空单元格。语法本身提供了网格结构的可视化。

值:

```
<grid-area-name> - 使用grid-area指定的网格区域的名称
. - 句点表示空的网格单元格
none - 没有定义网格区域
```

示例：

```css
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
    'header header header header'
    'main main . sidebar'
    'footer footer footer footer';
}
```

这将创建一个由四列宽度和三行高度组成的网格。整个顶行将由标题区域组成。中间行将由两个主要区域、一个空单元格和一个侧边栏区域组成。最后一行则全部是页脚。

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/dddgrid-template-areas-ee2771.svg" alt="Example of grid-template-areas" style="width: 300px" />

您的声明中的每一行都需要具有相同数量的单元格。

您可以使用任意数量的相邻句点来声明一个空单元格。只要句点之间没有空格，它们就代表一个单元格。

请注意，使用此语法时，并未为行线命名，只为区域命名。使用此语法时，实际上会自动为区域两端的线条命名。如果您的网格区域名为 foo，那么该区域起始行线和起始列线的名称将是 foo-start，而最后一行线和最后一列线的名称将是 foo-end。这意味着某些线可能具有多个名称，例如上述示例中的最左侧线将有三个名称：header-start、main-start 和 footer-start。

### grid-template

一种用于在单个声明中设置`grid-template-rows`、`grid-template-columns`和`grid-template-areas`的简写方式。

取值：

```
none - 将三个属性都设置为初始值。
<grid-template-rows> / <grid-template-columns> - 分别将grid-template-columns和grid-template-rows设置为指定的值，并将grid-template-areas设置为none。
```

语法示例：

```css
.container {
  grid-template: none | <grid-template-rows> / <grid-template-columns>;
}
```

它还接受一种更复杂但非常方便的语法来指定这三个属性。以下是一个示例：

```css
.container {
  grid-template:
    [row1-start] 'header header header' 25px [row1-end]
    [row2-start] 'footer footer footer' 25px [row2-end]
    / auto 50px auto;
}
```

这等同于以下写法：

```css
.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas:
    'header header header'
    'footer footer footer';
}
```

由于 grid-template 不会重置隐式网格属性（`grid-auto-columns`、`grid-auto-rows`和`grid-auto-flow`），在大多数情况下，您可能希望重置这些属性，因此建议使用 grid 属性而不是`grid-template`。

### gap 相关

#### `column-gap` & `row-gap` & `grid-column-gap` & `grid-row-gap`

指定网格线的大小。您可以将其视为设置列/行之间间距的宽度。

取值：

```
<line-size> - 一个长度值。
```

语法示例：

```css
.container {
  /* standard */
  column-gap: <line-size>;
  row-gap: <line-size>;

  /* old */
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
```

示例：

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  column-gap: 10px;
  row-gap: 15px;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/dddgrid-gap-da9299.svg" alt="Example of grid-column-gap and grid-row-gap" style="width: 300px;" />

这些间距只会在列/行之间创建，而不会出现在外部边缘。

> 注意：grid-前缀将被移除，并且 grid-column-gap 和 grid-row-gap 将更名为 column-gap 和 row-gap。未加前缀的属性已在 Chrome 68+、Safari 11.2 Release 50+和 Opera 54+中得到支持。

#### `gap` & `grid-gap`

`row-gap`和`column-gap`的简写形式

取值：

```
<grid-row-gap> <grid-column-gap> - 长度值
```

语法示例：

```css
.container {
  /* standard */
  gap: <grid-row-gap> <grid-column-gap>;

  /* old */
  grid-gap: <grid-row-gap> <grid-column-gap>;
}
```

示例：

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  gap: 15px 10px;
}
```

如果未指定 row-gap，则将其设置为与 column-gap 相同的值。

> 注意：grid-前缀已被弃用（但是谁知道，可能实际上从浏览器中永远不会删除）。实际上，grid-gap 被重命名为 gap。未加前缀的属性已在 Chrome 68+、Safari 11.2 Release 50+和 Opera 54+中得到支持。

### 内容布局相关

#### justify-items

在网格布局中，该属性用于沿行内轴（与 align-items 属性沿列轴对齐的方式相对）对齐网格项。此值适用于容器内的所有网格项。

取值：

```
start – 将项目与其单元格的起始边对齐
end – 将项目与其单元格的结束边对齐
center – 将项目居中对齐于其单元格
stretch – 撑满整个单元格的宽度（默认值）
```

```css
container {
  justify-items: start | end | center | stretch;
}
```

Examples:

```css
.container {
  justify-items: start;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-items-start-693c7b.svg" alt="Example of justify-items set to start" style="width: 400px;" />

```css
.container {
  justify-items: end;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-items-end-c90f75.svg" alt="Example of justify-items set to end" style="width: 400px;" />

```css
.container {
  justify-items: center;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-items-center-275eb6.svg" alt="Example of justify-items set to center" style="width: 400px;" />

```css
.container {
  justify-items: stretch;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-items-stretch-fd0add.svg" alt="Example of justify-items set to stretch" style="width: 400px;" />

这种行为也可以通过 `justify-self` 属性在单个网格项上进行设置。

#### align-items

该属性用于沿块轴（与 justify-items 属性沿行内轴对齐的方式相对）对齐网格项。此值适用于容器内的所有网格项。

取值：

```
stretch – 撑满整个单元格的高度（默认值）
start – 将项目与其单元格的起始边对齐
end – 将项目与其单元格的结束边对齐
center – 将项目居中对齐于其单元格
baseline – 将项目沿文本基线对齐。对于多行文本，可以使用 first baseline 和 last baseline 修饰符，将使用第一行或最后一行的基线。
```

```css
.container {
  align-items: start | end | center | stretch;
}
```

Examples:

```css
.container {
  align-items: start;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-items-start-94aae9.svg" alt="Example of align-items set to start" style="width: 400px;" />

```css
.container {
  align-items: end;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-items-end-7e0300.svg" alt="Example of align-items set to end" style="width: 400px;" />

```css
.container {
  align-items: center;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-items-center-6bbf65.svg" alt="Example of align-items set to center" style="width: 400px;"/>

```css
.container {
  align-items: stretch;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-items-stretch-05498e.svg" alt="Example of align-items set to stretch" style="width: 400px;" />

这种行为也可以通过 `align-self` 属性在单个网格项上进行设置。

此外，还有修饰关键字 `safe` 和 `unsafe`（使用方式类似于 `align-items: safe end`）。`safe` 关键字表示“尝试按照指定方式对齐，但不要导致项目移动到不可访问的溢出区域”，而 `unsafe` 则允许将内容移动到不可访问的区域（可能会导致数据丢失）。

#### place-items

`place-items` 属性可以在一次声明中同时设置 `align-items` 和 `justify-items` 属性。

取值：

```
<align-items> / <justify-items> – 第一个值设置 `align-items`，第二个值设置 `justify-items`。如果省略第二个值，则将第一个值分配给两个属性。
```

更多详情，请参阅 `align-items` 和 `justify-items`。

这在快速进行多方向居中对齐时非常有用：

```css
.center {
  display: grid;
  place-items: center;
}
```

#### justify-content

有时候，网格的总尺寸可能小于其网格容器的尺寸。这可能发生在所有网格项都使用像像素（px）这样的非灵活单位进行尺寸设置的情况下。在这种情况下，您可以设置网格在网格容器内的对齐方式。该属性将网格沿行内轴对齐（与 align-content 属性沿列轴对齐的方式相对）。

取值：

```
start – 将网格与网格容器的起始边对齐
end – 将网格与网格容器的结束边对齐
center – 将网格居中对齐于网格容器
stretch – 调整网格项的大小，使网格填满网格容器的整个宽度
space-around – 在每个网格项之间均匀分布一定量的空白，两端空白的大小为中间空白的一半
space-between – 在每个网格项之间均匀分布一定量的空白，两端没有空白
space-evenly – 在每个网格项之间（包括两端）均匀分布一定量的空白
```

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

Examples:

```css
.container {
  justify-content: start;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-content-start-f80efd.svg" alt="Example of justify-content set to start" style="width: 400px;" />

```css
.container {
  justify-content: end;
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-end.svg" alt="Example of justify-content set to end" style="width: 400px;" />

```css
.container {
  justify-content: center;
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-center.svg" alt="Example of justify-content set to center" style="width: 400px;" />

```css
.container {
  justify-content: stretch;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-content-stretch-a3f1a1.svg" alt="Example of justify-content set to stretch" style="width: 400px;" />

```css
.container {
  justify-content: space-around;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-content-space-around-495d66.svg" alt="Example of justify-content set to space-around" style="width: 400px;" />

```css
.container {
  justify-content: space-between;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-content-space-between-faf6f2.svg" alt="Example of justify-content set to space-between" style="width: 400px;" />

```css
.container {
  justify-content: space-evenly;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-content-space-evenly-5d67fa.svg" alt="Example of justify-content set to space-evenly" style="width: 400px;" />

#### align-content

有时候，您的网格的总尺寸可能小于其网格容器的尺寸。这可能发生在所有网格项都使用非灵活单位（如像素 px）进行尺寸设置的情况下。在这种情况下，您可以设置网格在网格容器内的对齐方式。此属性沿块轴（与 `justify-content` 属性沿行内轴对齐的方式相对）对齐网格。

取值：

```
start – 将网格与网格容器的起始边对齐
end – 将网格与网格容器的结束边对齐
center – 将网格居中对齐于网格容器
stretch – 调整网格项的大小，使网格填满网格容器的整个高度
space-around – 在每个网格项之间均匀分布一定量的空白，两端空白的大小为中间空白的一半
space-between – 在每个网格项之间均匀分布一定量的空白，两端没有空白
space-evenly – 在每个网格项之间（包括两端）均匀分布一定量的空白
```

```css
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

示例:

```css
.container {
  align-content: start;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-content-start-c48fbd.svg" alt="Example of align-content set to start" style="width: 400px;" />

```css
.container {
  align-content: end;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-content-end-a30cdf.svg" alt="Example of align-content set to end" style="width: 400px;" />

```css
.container {
  align-content: center;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-content-center-961499.svg" alt="Example of align-content set to center" style="width: 400px;" />

```css
.container {
  align-content: stretch;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-content-stretch-6e2f5d.svg" alt="Example of align-content set to stretch" style="width: 400px;" />

```css
.container {
  align-content: space-around;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-content-space-around-4b631b.svg" alt="Example of align-content set to space-around" style="width: 400px;" />

```css
.container {
  align-content: space-between;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-content-space-between-25fb2b.svg" alt="Example of align-content set to space-between" style="width: 400px;" />

```css
.container {
  align-content: space-evenly;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-content-space-evenly-de44ff.svg" alt="Example of align-content set to space-evenly" style="width: 400px;" />

#### place-content

`place-content` 属性可以在一次声明中同时设置 `align-content` 和 `justify-content` 属性。

取值：

```
<align-content> / <justify-content> – 第一个值设置 align-content，第二个值设置 justify-content。如果省略第二个值，则将第一个值分配给两个属性。
```

除了 Edge 浏览器外，所有主要浏览器都支持 `place-content` 简写属性。

更多详情，请参阅 `align-content` 和 `justify-content`。

## Grid Item 属性

### `grid-column-start` & `grid-column-end` & `grid-row-start` & `grid-row-end`

通过参考特定的网格线，确定网格项在网格中的位置。`grid-column-start/grid-row-start`表示项开始的线，而`grid-column-end/grid-row-end`表示项结束的线。

数值：

```
<line> - 可以是一个数字，表示一个编号的网格线，或者是一个名称，表示一个命名的网格线。
span <number> - 项将横跨提供的网格轨道数量。
span <name> - 项将横跨直到下一个具有提供的名称的线。
auto - 表示自动布局，自动跨度，或默认跨度为1。
```

语法示例：

```
.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto;
  grid-column-end: <number> | <name> | span <number> | span <name> | auto;
  grid-row-start: <number> | <name> | span <number> | span <name> | auto;
  grid-row-end: <number> | <name> | span <number> | span <name> | auto;
}
```

示例:

```css
.item-a {
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
}
```

![Example of grid-row/column-start/end](https://static.www.toimc.com/blog/picgo/2023/06/19/grid-column-row-start-end-01-339bd0.svg)

```css
.item-b {
  grid-column-start: 1;
  grid-column-end: span col4-start;
  grid-row-start: 2;
  grid-row-end: span 2;
}
```

![Example of grid-row/column-start/end](https://static.www.toimc.com/blog/picgo/2023/06/19/grid-column-row-start-end-02-55aeff.svg)

如果没有声明`grid-column-end/grid-row-end`，项将默认跨越 1 个网格轨道，[参考链接](https://www.digitalocean.com/community/tutorials/css-css-grid-layout-span-keyword?utm_medium=content_acq&utm_source=css-tricks&utm_campaign=&utm_content=awareness_bestsellers)。

项可以相互重叠，可以使用 z-index 来控制它们的堆叠顺序。

### `grid-column` & `grid-row`

`grid-column`是如下 2 个属性的简写：`grid-column-start` & `grid-column-end`

`grid-row`是如下 2 个属性的简写： `grid-row-start` & `grid-row-end`

数值：

```
<start-line> / <end-line> - 每个值接受与长手写版本相同的所有值，包括span。
```

语法示例：

```css
.item {
  grid-column: <start-line> / <end-line> | <start-line> / span <value>;
  grid-row: <start-line> / <end-line> | <start-line> / span <value>;
}
```

示例:

```css
.item-c {
  grid-column: 3 / span 2;
  grid-row: third-line / 4;
}
```

![Example of grid-column/grid-row](https://static.www.toimc.com/blog/picgo/2023/06/19/grid-column-row-030e1d.svg)

### grid-area

给一个项赋予一个名称，以便可以通过使用 grid-template-areas 属性创建的模板进行引用。或者，该属性还可以作为`grid-row-start` + `grid-column-start` + `grid-row-end` + `grid-column-end`的更短缩写形式使用。

数值：

```
<name> - 任意您选择的名称。 <row-start> / <column-start> / <row-end> / <column-end> - 可以是数字或命名的线。
```

语法示例：

```css
.item {
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}
```

示例：

```css
.item-d {
  grid-area: header;
}
```

简写 `grid-row-start` + `grid-column-start` + `grid-row-end` + `grid-column-end`:

```css
.item-d {
  grid-area: 1 / col4-start / last-line / 6;
}
```

![Example of grid-area](https://static.www.toimc.com/blog/picgo/2023/06/19/grid-area-c03d7a.svg)

### justify-self

以一种方式来给单元格内的网格项沿着行轴（与沿着列轴对齐的 align-self 相对）分配对齐方式。此值适用于单个单元格内的网格项。

取值：

```
start - 将网格项与单元格的起始边对齐
end - 将网格项与单元格的结束边对齐
center - 将网格项居中对齐于单元格中
stretch - 填充整个单元格的宽度（默认值）
```

```css
.item {
  justify-self: start | end | center | stretch;
}
```

示例:

```css
.item-a {
  justify-self: start;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-self-start-360b51.svg" alt="Example of justify-self set to start" style="width: 400px;" />

```css
.item-a {
  justify-self: end;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-self-end-0031ed.svg" alt="alt=&quot;Example" style="width: 400px;" />

```css
.item-a {
  justify-self: center;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-self-center-d26454.svg" alt="Example of justify-self set to center" style="width: 400px;" />

```css
.item-a {
  justify-self: stretch;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/justify-self-stretch-c9d8fb.svg" alt="Example of justify-self set to stretch" style="width: 400px;" />

要为网格中的*所有*项设置对齐方式，还可以通过`justify-items`属性在网格容器上设置此行为。

### align-self

以一种方式将网格项沿着列轴（与沿着行轴对齐的 justify-self 相对）对齐于单元格内。此值适用于单个网格项内的内容。

取值：

```
start - 将网格项与单元格的起始边对齐
end - 将网格项与单元格的结束边对齐
center - 将网格项居中对齐于单元格中
stretch - 填充整个单元格的高度（默认值）
```

```css
.item {
  align-self: start | end | center | stretch;
}
```

Examples:

```css
.item-a {
  align-self: start;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-self-start-52ccfd.svg" alt="Example of align-self set to start" style="width: 400px;" />

```css
.item-a {
  align-self: end;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-self-end-90af25.svg" alt="Example of align-self set to end" style="width: 400px;" />

```css
.item-a {
  align-self: center;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-self-center-673ea0.svg" alt="Example of align-self set to center" style="width: 400px;" />

```css
.item-a {
  align-self: stretch;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/align-self-stretch-eaef9c.svg" alt="Example of align-self set to stretch" style="width: 400px;" />

要对齐网格中的*所有*项，还可以通过`align-items`属性在网格容器上设置此行为。

### place-self

place-self 在单个声明中同时设置 align-self 和 justify-self 属性。

取值：

```
auto - 布局模式的“默认”对齐方式。
<align-self> / <justify-self> - 第一个值设置align-self，第二个值设置justify-self。如果省略第二个值，则将第一个值分配给两个属性。
```

语法示例:

```css
.item-a {
  place-self: center;
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/place-self-center.svg" alt="place self set to center" style="width: 400px;" />

```css
.item-a {
  place-self: center stretch;
}
```

<img src="https://static.www.toimc.com/blog/picgo/2023/06/19/place-self-center-stretch-ce14f3.svg" alt="place set set to center stretch" style="width: 400px;" />

除了 Edge 浏览器外，所有主流浏览器都支持`place-self`简写属性。

## 浏览器支持情况

### Desktop

| Chrome | Firefox | IE   | Edge | Safari |
| :----- | :------ | :--- | :--- | :----- |
| 57     | 52      | 11\* | 16   | 10.1   |

### Mobile / Tablet

| Android Chrome | Android Firefox | Android | iOS Safari |
| :------------- | :-------------- | :------ | :--------- |
| 114            | 113             | 114     | 10.3       |

## 流式列代码片段

下面是一个用于创建流式列的 CSS 代码片段：

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

这个代码片段将一个包含列的容器元素定义为网格布局。`grid-template-columns`属性设置了列的大小和数量。在这个例子中，我们使用`repeat(auto-fit, minmax(200px, 1fr))`来创建自适应的列。它的意思是列的宽度将自动适应容器的大小，并且每列的最小宽度为 200 像素，最大宽度为 1 个单位。这使得列可以自动调整大小以填充容器。

`gap`属性定义了列之间的间隔，这里设置为 20 像素。您可以根据需要调整这个值。

您可以将这段代码应用于适当的 HTML 元素，以创建流式列布局。

## CSS Grid 动画

根据 CSS Grid 布局模块一级规范，有五个可动画化的网格属性：

1. grid-gap、grid-row-gap、grid-column-gap 可以使用长度、百分比或 calc 作为值。
2. grid-template-columns、grid-template-rows 可以作为简单的长度、百分比或 calc 组成的列表，只要列表中的长度、百分比或 calc 组件的值有所不同即可。

截至目前，已经有一些经过测试的浏览器支持对(grid-)gap、(grid-)row-gap 和(grid-)column-gap 进行动画化处理。

| Browser                                | `(grid-)gap`, `(grid-)row-gap`, `(grid-)column-gap` | `grid-template-columns` | `grid-template-rows` |
| :------------------------------------- | :-------------------------------------------------- | :---------------------- | :------------------- |
| Firefox                                | supported ✅ 53+                                    | supported ✅ 66+        | supported ✅ 66+     |
| Safari 12.0                            | not supported ❌                                    | not supported ❌        | not supported ❌     |
| Chrome                                 | supported ✅ 66+                                    | not supported ❌        | not supported ❌     |
| Chrome for Android 66+, Opera Mini 33+ | supported ✅                                        | not supported ❌        | not supported ❌     |
| Edge                                   | supported ✅ 16+                                    | not supported ❌        | not supported ❌     |

示例：

```html
<p>
  Check <a href="https://www.matuzo.at/blog/2023/100daysof-day97/">this post</a> for more details
</p>

<button class="js-button">Animate</button>

<div class="grid js-grid">
  <div class="item">
    <h2>Element 1</h2>
  </div>
  <div class="item">
    <h2>Element 2</h2>
  </div>
  <div class="item">
    <h2>Element 3</h2>
  </div>
  <div class="item">
    <h2>Element 4</h2>
  </div>
  <div class="item">
    <h2>Element 5</h2>
  </div>
  <div class="item">
    <h2>Element 6</h2>
  </div>
  <div class="item">
    <h2>Element 7</h2>
  </div>
  <div class="item">
    <h2>Element 8</h2>
  </div>
  <div class="item">
    <h2>Element 9</h2>
  </div>
  <div class="item">
    <h2>Element 10</h2>
  </div>
  <div class="item">
    <h2>Element 11</h2>
  </div>
  <div class="item">
    <h2>Element 12</h2>
  </div>
</div>
```

Css：

```css
button {
  background-color: #123456;
  color: #ffffff;
  margin: 2rem 0;
  padding: 1.4rem;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 1.2rem;
}

button:focus-visible {
  outline: 4px solid #123456;
  outline-offset: 4px;
}

dt {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
```

Js：

```javascript
document.querySelector('.js-button').addEventListener('click', function () {
  document.querySelector('.js-grid').classList.toggle('grid--full')
})
```

</Container>
