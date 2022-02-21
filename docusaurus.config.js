const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Llama Bot Documentation',
  tagline: '',
  url: 'https://docs.llama.developomp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  trailingSlash: false,
  organizationName: 'llama-bot',
  projectName: 'llama-bot-docs',
  themeConfig: {
    navbar: {
      title: 'Llama Bot Docs',
      logo: {
        alt: 'Llama Bot Logo',
        src: 'img/logo.png',
        href: '/docs/overview',
      },
      items: [
        {
          href: 'https://github.com/llama-bot/llama-bot-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Created by <b>developomp</b>. Built with <a href="https://github.com/facebook/docusaurus">Docusaurus</a>.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/llama-bot/llama-bot-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
