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
            {text: 'Getter', link: '/core-concepts/start'},
            {text: 'Action', link: '/core-concepts/start'},
            {text: '插件', link: '/core-concepts/start'},
            {text: '组件外的Store', link: '/core-concepts/start'}
        ]
    },
    {
        text: '核心概念',
        items: [
            {text: '定义Store', link: '/core-concepts/what-is-pinia'},
            {text: 'State', link: '/core-concepts/start'},
            {text: 'Getter', link: '/core-concepts/start'},
            {text: 'Action', link: '/core-concepts/start'},
            {text: '插件', link: '/core-concepts/start'},
            {text: '组件外的Store', link: '/core-concepts/start'}
        ]
    },
    {
        text: '服务端渲染(SSR)',
        items: [
            {text: 'Vue与Vite', link: '/core-concepts/what-is-pinia'},
            {text: 'Nuxt.js', link: '/core-concepts/start'}
        ]
    },
    {
        text: '手册',
        items: [
            {text: '目录', link: '/core-concepts/what-is-pinia'},
            {text: '从Vuex <=4 迁移', link: '/core-concepts/start'},
            {text: '热更新', link: '/core-concepts/start'},
            {text: '测试', link: '/core-concepts/start'},
            {text: '不使用setup()的用法', link: '/core-concepts/start'},
            {text: '组合式Stores', link: '/core-concepts/start'},
            {text: 'VSCode代码片段', link: '/core-concepts/start'},
            {text: '从v0/v1迁移至v2', link: '/core-concepts/start'},
            {text: '处理组合式函数', link: '/core-concepts/start'}
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
                    {text: '论坛', link: '/luntan'},
                    {text: '更新日志', link: '/gengxinrizhi'},
                    {text: 'Vue.js认证', link: '/vuejsrz'},
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

    }



})


