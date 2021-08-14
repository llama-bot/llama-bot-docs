const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Llama Bot Documentation',
  tagline: '',
  url: 'https://doc.llama.developomp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'llama-bot', // Usually your GitHub org/user name.
  projectName: 'llama-bot', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Llama Bot',
      logo: {
        alt: 'Llama Bot Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'bot/overview',
          position: 'left',
          label: 'Bot',
        },
        {
          type: 'doc',
          docId: 'api/overview',
          position: 'left',
          label: 'API',
        },
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
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
