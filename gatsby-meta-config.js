module.exports = {
  title: `woo0dev.github.io`,
  description: `woo0's Blog`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://woo0dev.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `정우영`,
    bio: {
      role: `개발자`,
      description: ['커뮤니케이션을 중요시하는', '책임감이 있는', '이로운 것을 만드는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/woo0dev`, // `https://github.com/woo0dev`,
      linkedIn: ``, // ``,
      email: ``, // `dongho9732@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '2021.09 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          github: 'https://github.com/woo0dev/woo0dev.github.io',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: 'https://woo0dev.github.io/',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '',
        activity: '',
        links: {
          post: '',
          github: 'https://github.com/woo0dev/woo0dev.github.io',
          demo: 'https://www.woo0dev.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '개인 블로그 운영',
        description: 'React에 관심을 가지게 되면서 제 이야기를 담을 수 있는 블로그를 직접 디자인하고 개발하고 싶어서 만들게 되었습니다.',
        techStack: ['react', 'gatsby'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '',
        description:
          '',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '',
          github: 'https://github.com/woo0dev/woo0dev.github.io',
          demo: 'https://www.woo0dev.com',
        },
      },
    ],
  },
};
