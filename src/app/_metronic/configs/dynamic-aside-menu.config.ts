export const DynamicAsideMenuConfig = {
  items: [
    { section: 'MENU.ADMIN_DASHBOARD' },
    {
      title: 'Dashboard',
      root: true,
      icon: 'fas fa-home',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/dashboard',
      translate: 'MENU.DASHBOARD',
      bullet: 'dot',
      isActive: false
    },
    {
      title: 'Users Settings',
      root: true,
      icon: 'fas fa-user-friends',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/users-settings',
      translate: 'MENU.USERS_SETTINGS',
      bullet: 'dot',
      isActive: false
    },
    {
      title: 'Categoriess',
      root: true,
      icon: 'fas fa-grip-horizontal',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/category',
      translate: 'MENU.CATEGORIES_AND_SUB',
      bullet: 'dot',
      isActive: false
    },
    {
      title: 'Special Category Filters',
      root: true,
      icon: 'fa fa-list',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/special-category',
      translate: 'MENU.SPECIAL_CATEGORIES',
      bullet: 'dot',
      isActive: false
    },
    {
      title: 'Category Translation',
      root: true,
      icon: 'fas fa-language',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/translation-category',
      translate: 'MENU.CATEGORY_TRANSLATION',
      bullet: 'dot',
      isActive: false
    },
    {
      title: 'Filter Settings',
      root: true,
      icon: 'fas fa-cog',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/filter-settings',
      translate: 'MENU.FILTER_SETTINGS',
      bullet: 'dot',
      isActive: false
    },
    {
      title: 'Filter Options Settings',
      root: true,
      icon: 'fas fa-filter',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/filter-options',
      translate: 'MENU.FILTER_OPTIONS',
      bullet: 'dot',
      isActive: false
    },
    {
      title: 'Stores Settings',
      root: true,
      icon: 'fa fa-shopping-cart',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/stores',
      translate: 'MENU.STORES_MANAGEMENT',
      bullet: 'dot',
      isActive: false
    },
    {
      title: 'ADS Settings',
      root: true,
      icon: 'fas fa-layer-group',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/ads-settings',
      translate: 'MENU.ADS_SETTINGS',
      bullet: 'dot',
      isActive: false
    },
    // {
    //   title: 'Barters',
    //   root: true,
    //   icon: 'fas fa-exchange-alt',
    //   svg: './assets/media/svg/icons/Design/Layers.svg',
    //   page: '/barters',
    //   translate: 'MENU.BARTERS',
    //   bullet: 'dot',
    //   isActive: false
    // },
    {
      title: 'Advertisement Settings',
      root: true,
      icon: 'fas fa-envelope',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      translate: 'Advertisement Settings',
      bullet: 'dot',
      isActive: false,
      submenu: [
        {
          title: "Web Advertisements",
          page: "/web-advertisements",
          isActive: false,
        },
        {
          title: "Mobile Advertisements",
          page: "/mobile-advertisements",
          isActive: false,
        },
        {
          title: "Create A Web Advertisements",
          page: "/web-advertisement-create",
          isActive: false,
        },
        {
          title: "Create A Mobile Advertisements",
          page: "/mobile-advertisement-create",
          isActive: false,
        }
      ]
    },
    {
      title: 'Announcements',
      root: true,
      icon: 'fas fa-bell',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/announcements',
      translate: 'Announcements',
      bullet: 'dot',
      isActive: false
    },
    {
      title: 'Notifications',
      root: true,
      icon: 'far fa-bell',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      translate: 'Notifications',
      bullet: 'dot',
      isActive: false,
      submenu: [
        {
          title: "Reports",
          page: "/notifications-reports",
          isActive: false,
        }
      ]
    },
    {
      title: 'Comments Managment',
      root: true,
      icon: 'fas fa-comments',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/comments-managment',
      translate: 'Comments Managment',
      bullet: 'dot',
      isActive: false
    },
    {
      title: 'Messages Settings',
      root: true,
      icon: 'fas fa-envelope',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      translate: 'Messages Settings',
      bullet: 'dot',
      isActive: false,
      submenu: [
        {
          title: "Admin Messages",
          page: "/admin-messages",
          isActive: false,
        }
      ]
    },
    {
      title: 'App Settings',
      root: true,
      icon: 'fas fa-cog',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      translate: 'App Settings',
      bullet: 'dot',
      isActive: false,
      submenu: [
        {
          title: "Item Settings",
          page: "/item-settings",
          isActive: false,
        }
      ]
    },
    {
      title: 'Location Settings',
      root: true,
      icon: 'fas fa-map-marked-alt',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      translate: 'Location Settings',
      bullet: 'dot',
      isActive: false,
      submenu: [
        {
          title: "States",
          page: "/states",
          isActive: false,
        }
      ]
    },
    {
      title: 'Website Content',
      root: true,
      icon: 'fas fa-pen',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      translate: 'Website Content',
      bullet: 'dot',
      isActive: false,
      page: '/website-content',
    },
  ]
};
