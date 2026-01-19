let lastScrollY = 0;

function openPopup(id, projectName) {
  lastScrollY = window.scrollY;

  const popup = document.getElementById(id);
  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  const content = popup.querySelector('.popup-content');
  content.innerHTML = '';

  const imageMap = {
    revolver: [
      '/Image/portfolio/Scrap Revolver/1.png',
      '/Image/portfolio/Scrap Revolver/2.png',
      '/Image/portfolio/Scrap Revolver/3.png',
      '/Image/portfolio/Scrap Revolver/4.png',
      '/Image/portfolio/Scrap Revolver/5.png',
      '/Image/portfolio/Scrap Revolver/6.png',
    ],
    Basement_Props: [
      '/Image/portfolio/Interrogative Basement Props/1.png',
      '/Image/portfolio/Interrogative Basement Props/2.png',
    ],
    Basement_Scene: [
      '/Image/portfolio/Interrogative Basement Scene/2.png',
      '/Image/portfolio/Interrogative Basement Scene/3.png',
      '/Image/portfolio/Interrogative Basement Scene/4.png',
    ],
    Stylize_3D_Props: ['/Image/portfolio/Stylize 3D Props/Porfolio_Frag.png'],
    printing_3D_models: [
      '/Image/portfolio/printing 3d models/1.webp',
      '/Image/portfolio/printing 3d models/2.webp',
      '/Image/portfolio/printing 3d models/3.webp',
      '/Image/portfolio/printing 3d models/4.webp',
      '/Image/portfolio/printing 3d models/5.webp',
      '/Image/portfolio/printing 3d models/6.webp',
      '/Image/portfolio/printing 3d models/7.webp',
      '/Image/portfolio/printing 3d models/8.webp',
      '/Image/portfolio/printing 3d models/9.webp',
      '/Image/portfolio/printing 3d models/10.webp',
      '/Image/portfolio/printing 3d models/11.webp',
      '/Image/portfolio/printing 3d models/12.webp',
      '/Image/portfolio/printing 3d models/13.webp',
      '/Image/portfolio/printing 3d models/14.webp',
      '/Image/portfolio/printing 3d models/15.webp',
      '/Image/portfolio/printing 3d models/16.webp',
      '/Image/portfolio/printing 3d models/17.webp',
      '/Image/portfolio/printing 3d models/18.webp',
      '/Image/portfolio/printing 3d models/19.webp',
      '/Image/portfolio/printing 3d models/20.webp',
    ],
    Packaging_Design: ['/Image/portfolio/Packaging Design_01/Packaging Design_01.png'],
    Minimal_Logo_Design: ['/Image/portfolio/Minimal Logo Design/Logo Design.jpg'],
    Social_Media: ['/Image/portfolio/Social Media/social media design_01.png'],
    Bev_Staffs: ['/Image/portfolio/web uiux/Bev-Staffs.jpg'],
    Pavilion_Realtors: ['/Image/portfolio/web uiux/Pavilion Realtors.jpg'],
    Sysilscorp: ['/Image/portfolio/web uiux/Sysilscorp Website.jpg'], 
    Get_Movers: ['/Image/portfolio/mob-uiux/Get Movers.jpg'],
    Go_Saudi_Go: ['/Image/portfolio/mob-uiux/Go Saudi Go.jpg'],
    Prismatic: ['/Image/portfolio/mob-uiux/Prismatic CRM.jpg'],
    banner_design: ['/Image/portfolio/Web Banner Design_01/web banner design_01.png'],
    Cielo: ['/Image/portfolio/Social Media Posts/Cielo Post.jpg'],
    Decora: ['/Image/portfolio/Social Media Posts/Decora Post.jpg'],
    social_media: ['/Image/portfolio/Social Media Posts/Mix Post.jpg'],
    Prismatic_Post: ['/Image/portfolio/Social Media Posts/Prismatic post.jpg'],
  };

  const images = imageMap[projectName] || [];

  if (images.length === 0) {
    content.innerHTML = '<p>No images found for this project.</p>';
    return;
  }

  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Project Image';
    img.loading = 'lazy'; // 
    content.appendChild(img);
  });
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
  document.body.style.overflow = 'auto';
  window.scrollTo(0, lastScrollY);
}
