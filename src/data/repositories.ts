import img1 from "../assets/images/cover_images/blog_1.png";
import img2 from "../assets/images/cover_images/blog_2.png";
import img3 from "../assets/images/cover_images/portfolio.png";
import img4 from "../assets/images/cover_images/image_gallery.png";
import img5 from "../assets/images/cover_images/notebook_app.png";
import img6 from "../assets/images/cover_images/blog_3.png";

export const repositories = [
    {
      title: 'Blog App',
      description:
        'A React Blog App built by using libraries like ChakraUI, Formik.',
      technologies: ['react', 'chakraUi', 'formik'],
      cover: img1,
      url: 'https://github.com/MA-Ahmad/reactBlog',
      live: 'https://ma-ahmad.github.io/reactBlog',
      stars: '9',
      fork: '1',
      created: '21-4-2020'
    },
    {
      title: 'Blog App (RR)',
      description: 'React frontend of a blog app with rails on backend.',
      cover: img2,
      technologies: ['react', 'chakraUi'],
      url: 'https://github.com/MA-Ahmad/blog-app-react-frontend',
      live: 'https://blog-frontend-react.herokuapp.com',
      stars: '6',
      created: '21-4-2020'
    },
    {
      title: 'Portfolio',
      description: 'Rails backend api for blog app with react on frontend.',
      cover: img3,
      technologies: ['rails'],
      url: 'https://github.com/MA-Ahmad/blog-app-rails-backend',
      stars: '2',
      created: '21-4-2020'
    },
    {
      title: 'Image Gallery',
      description: 'Simple gallery with images from the pixabay API. Tailwind css is built into workflow with postcss and autoprefixer.',
      cover: img4,
      technologies: ['typescript', 'react', 'chakraUi'],
      url: 'https://github.com/MA-Ahmad/notebook',
      live: 'https://ma-ahmad.github.io/notebook',
      stars: '2',
      created: '21-4-2020'
    },
    {
      title: 'Notebook',
      description: 'This is a notebook app which will help you to crate notes for your daily work.',
      cover: img5,
      technologies: ['rails', 'react', 'tailwindCss'],
      url: 'https://github.com/MA-Ahmad/react_rails_blog',
      live: 'https://react-on-rails-blog.herokuapp.com',
      stars: '2',
      created: '21-4-2020'
    },
    {
      title: 'Blogify',
      description:
        'A simple react+rails(RR) CRUD app with tailwindcss.',
      cover: img6,
      technologies: ['rails'],
      url: 'https://github.com/MA-Ahmad/rails-authentication-app',
      stars: '1',
      created: '21-4-2020'
    },
    {
      title: 'Video-to-text',
      description: 'Convert a video to text using ruby.',
      cover: '',
      technologies: ['ruby'],
      url: 'https://github.com/MA-Ahmad/Video-to-text',
      stars: '1',
      created: '21-4-2020'
    }
  ];
  