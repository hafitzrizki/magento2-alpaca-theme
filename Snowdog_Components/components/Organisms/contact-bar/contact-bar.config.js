module.exports = {
  context: {
    class: '',
    containerClass: 'container',
    attributes: '',
    phone: {
      icon: {
        class: '',
        id: 'phone',
        title: 'Phone'
      },
      text: 'Call us for free 800 - 266 - 9590',
      number: '8002669590'
    },
    email: {
      icon: {
        class: '',
        id: 'envelope',
        title: 'Email'
      },
      text: 'Email Us',
      address: 'test@test.com'
    },
    linkClass: '',
    menu: {
      items: [
        {
          text: 'Account',
          link: '#'
        },
        {
          text: 'Blog',
          link: '#'
        },
        {
          text: 'Contact',
          link: '#'
        }
      ]
    }
  },
  variants: [
    {
      name: 'vertical',
      context: {
        class: 'contact-bar--vertical',
        containerClass: ''
      }
    }
  ]
};
