const bgImage = ["bg_01.jpg","bg_02.jpg","bg_03.jpg","bg_04.jpg","bg_05.jpeg"]

const background = bgImage[Math.floor(Math.random() * bgImage.length)]

document.body.style.backgroundImage = `url(src/${background})`
