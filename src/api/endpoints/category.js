const category = `
    *[_type =='product'] | order(_createdAt desc){
      title,
      "description":description[0].children[0].text,
      "image_mobile":image.mobile.asset ->url,
      "image_tablet":image.tablet.asset ->url,
      "image_desktop":image.desktop.asset ->url,
      "category": category->title
    }
`;

export default category;
