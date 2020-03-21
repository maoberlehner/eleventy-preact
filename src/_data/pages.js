module.exports = [{
  name: `Hello World`,
  sections: [
    {
      name: `hero`,
      data: {
        image: `https://images.unsplash.com/photo-1518699705938-d9be21ec6ff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3840&h=900&q=40`,
        title: `Welcome!`,
        text: `This is a site built with Eleventy + Preact.`,
      },
    },
    {
      name: `content`,
      data: {
        html: `<h1>Lorem Ipsum</h1><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p><p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p><p>Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p><p>Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>`,
      },
    },
    {
      name: `masonry`,
      data: {
        images: [
          {
            alt: `Snowy mountains.`,
            id: 1,
            src: `https://images.unsplash.com/reserve/4JUAYmLTuS1mBvBBwe3D_St_Anton.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80`,
          },
          {
            alt: `Snowy mountains.`,
            id: 2,
            src: `https://images.unsplash.com/photo-1464277621354-a197b03f19cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80`,
          },
          {
            alt: `Snowy mountains.`,
            id: 3,
            src: `https://images.unsplash.com/photo-1467049878711-ebcf8c4b23da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80`,
          },
          {
            alt: `Snowy mountains.`,
            id: 4,
            src: `https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80`,
          },
          {
            alt: `Snowy mountains.`,
            id: 5,
            src: `https://images.unsplash.com/photo-1462351850891-7aedcb9e2450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80`,
          },
          {
            alt: `Snowy mountains.`,
            id: 6,
            src: `https://images.unsplash.com/photo-1465726208258-198e6f4402ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80`,
          },
        ],
      },
    },
    {
      name: `teaser`,
      data: [
        {
          image: `https://images.unsplash.com/photo-1569938298692-3547607c467a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=600&h=600&q=30`,
          title: `Lorem Ipsum`,
          text: `Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
          link: `https://markus.oberlehner.net`,
        },
        {
          image: `https://images.unsplash.com/photo-1562650740-ce0f04d0d73e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=30`,
          title: `Lorem Ipsum`,
          text: `Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
          link: `https://markus.oberlehner.net`,
        },
        {
          image: `https://images.unsplash.com/photo-1580565387371-f73cd4b83859?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=30`,
          title: `Lorem Ipsum`,
          text: `Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
          link: `https://markus.oberlehner.net`,
        },
      ],
    },
  ],
  slug: `/`,
}];
