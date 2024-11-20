import {defineConfig} from 'vitepress'

const coreConceptsSidebar = [
    {
        text: '介绍',
        items: [
            {text: 'Pinia是什么?', link: '/introduction'},
            {text: '开始', link: '/getting-started'}
        ]
    },
    {
        text: '核心概念',
        items: [
            {text: '定义Store', link: '/core-concepts/'},
            {text: 'State', link: '/core-concepts/state'},
            {text: 'Getter', link: '/core-concepts/getters'},
            {text: 'Action', link: '/core-concepts/actions'},
            {text: '插件', link: '/core-concepts/plugins'},
            {text: '组件外的Store', link: '/core-concepts/outside-component-usage'}
        ]
    },
    {
        text: '服务端渲染(SSR)',
        items: [
            {text: 'Vue与Vite', link: '/ssr/'},
            {text: 'Nuxt.js', link: '/ssr/nuxt'}
        ]
    },
    {
        text: '手册',
        items: [
            {text: '目录', link: '/cookbook/'},
            {text: '从Vuex <=4 迁移', link: '/cookbook/migration-vuex'},
            {text: '热更新', link: '/cookbook/hot-module-replacement'},
            {text: '测试', link: '/cookbook/testing'},
            {text: '不使用setup()的用法', link: '/cookbook/options-api'},
            {text: '组合式Stores', link: '/cookbook/composing-stores'},
            {text: 'VSCode代码片段', link: '/cookbook/vscode-snippets'},
            {text: '从v0/v1迁移至v2', link: '/cookbook/migration-v1-v2'},
            {text: '处理组合式函数', link: '/cookbook/composables'}
        ]
    }
]


// @ts-ignore
export default defineConfig({
    // 配置在header中
    lang: 'zh-CN',
    title: "Pinia | The intuitive store for Vue.js",
    description: "风中追风个人网站",
    head: [['link', {rel: 'icon', href: '/logo.svg'}]],

    // 样式配置
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        // logo
        logo: '/logo.svg',

        // logo 标题
        siteTitle: 'Pinia',

        // 搜索框
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换'
                        }
                    }
                }
            }
        },

        // 导航菜单配置
        nav: [
            {text: '指南', link: '/core-concepts/'},
            {
                text: 'API',
                link: '/core-concepts'
            },
            {
                text: '手册',
                link: '/core-concepts2/'
            },
            {
                text: '相关链接',
                items: [
                    {text: '论坛',link: 'https://github.com/vuejs/pinia/discussions',target: '_blank',},
                    {text: '更新日志', link: 'https://github.com/vuejs/pinia/blob/v2/packages/pinia/CHANGELOG.md',target:'_blank'},
                    {text: 'Vue.js认证', link: 'https://certificates.dev/vuejs/?friend=VUEROUTER&utm_source=pinia_vuejs&utm_medium=link&utm_campaign=pinia_vuejs_links&utm_content=navbar',target:'_blank'},
                ]
            },
        ],

        // 侧边栏
        sidebar: {
            // 指南对应的侧边栏
            '/core-concepts/': coreConceptsSidebar,
            '/introduction': coreConceptsSidebar,
            '/getting-started': coreConceptsSidebar,
        },

        // 社交链接配置
        socialLinks: [
            {icon: 'twitter', link: 'https://twitter.com/posva'},
            {icon: 'github', link: 'https://github.com/vuejs/pinia'},
            {icon: 'discord', link: 'https://chat.vuejs.org'}
        ],

        // 概述
        outline: {label: '本页内容'},

        // 页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Eduardo San Martin Morote'
        },

        // 编辑链接配置
        editLink: {
            pattern: 'https://github.com/vuejs/pinia/edit/v2/packages/docs/zh/:path',
            text: '对本页提出修改建议'
        },

        // 自定义出现在上一页和下一页链接上方的文本
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },


    },


    // 字体配置
    transformHead({assets}) {
        // 相应地调整正则表达式以匹配字体
        // @ts-ignore
        const myFontFile = assets.find(file => /inter-\.\w+\.woff2/)

        if (myFontFile) {
            return [
                [
                    'link',
                    {
                        rel: 'preload',
                        href: myFontFile,
                        as: 'font',
                        type: 'font/woff2',
                        crossorigin: ''
                    }
                ]
            ]
        }

    },

    // 主题shiki 配置
    // https://shiki.tmrs.site/themes
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'dracula'
        }
    }


})


