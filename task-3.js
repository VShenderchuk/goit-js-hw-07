const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  const galleryContent = document.querySelector(`#gallery`);
  console.log(galleryContent);
  const galleryItem = (options) => {
      const {url,alt} = options;
      return `<li class="gallery-item"><img src="${url}"alt="${alt}"class="image-style"></li>`;
  }
const galleryItems = images.map(galleryItem).join("");
console.log(galleryItem);
galleryContent.insertAdjacentHTML("afterbegin",galleryItems);
gallery.classList.add("gallery-list");
