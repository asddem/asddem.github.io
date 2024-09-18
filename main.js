const displayedImage = document.querySelector('.displayed-img');/*通过类选择器获取页面中类名为“displayed - img”的元素*/
const thumbBar = document.querySelector('.thumb-bar');/*获取类名为“thumb - bar”的元素*/

const btn = document.querySelector('button');/*获取页面中的按钮元素，存储在 btn 常量中*/
const overlay = document.querySelector('.overlay');/*获取类名为“overlay”的元素（可能是图像上的覆盖层），存储在 overlay 常量中*/

/* 声明一个 const 数组，用于列出每张图像的文件名*/
const images = [
	'pic1.jpg',
	'pic2.jpg',
	'pic3.jpg',
	'pic4.jpg',
	'pic5.jpg',
];

/* 迭代数组中的文件名，为每一个文件名创建一个 <img> 元素，并将其插入到 thumb-bar <div> 中，这样图片就会嵌入页面 */
for (image of images) {
	const newImage = document.createElement('img');/*创建一个新的 <img> 元素。*/
	newImage.setAttribute('src', `images/${image}`);/*为新创建的图像元素设置 src 属性，指定图像文件的路径*/
	thumbBar.appendChild(newImage);/*将新创建的图像元素添加到 thumbBar （缩略图容器）中*/

	newImage.onclick = () => {
		displayedImage.setAttribute('src', newImage.getAttribute('src'));
	};/*为每个缩略图添加点击事件监听器，当点击缩略图时，将主要显示图像的 src 属性设置为点击的缩略图的 src 属性，实现图像切换效果*/
}

/* 按钮处理*/
btn.onclick = () => {
	const schemeSwitcher = (btn.className === 'dark') ? 'light' : 'dark';
	/*为按钮添加点击事件监听器,根据按钮的类名来切换类名，如果当前类名是“dark”，则切换为“light”，反之亦然。*/
	btn.className = schemeSwitcher;/*更新按钮的类名*/
	const darkClass = (schemeSwitcher === 'dark');/*判断切换后的类名是否为“dark”。*/
	overlay.style.backgroundColor = (!darkClass) ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)';
	/*根据 darkClass 的值来设置覆盖层的背景颜色，如果不是“dark”模式，则设置为半透明黑色（ rgba(0,0,0,.5) ），如果是“dark”模式，则设置为完全透明*/
	btn.textContent = (!darkClass) ? 'Lighten' : 'Darken';
	/*根据 darkClass 的值来更新按钮上显示的文本，如果不是“dark”模式，则显示“Lighten”，如果是“dark”模式，则显示“Darken”*/
};