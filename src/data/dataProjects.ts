import { ProjectProps } from "../widgets/model/type";

export const data: ProjectProps[] = [
    {
        id: 11,
        title: "Shoes shop",
        info: {
            description: ['Интернет-магазин обуви, в котором реализованны функции: поиск по названию товара, выбор размера, количество единиц товара и удаление из корзины',
                            'В данном проекте я использовал такие технологии как: Redux-toolkit, Redux-persist, TypeScript, сборщик Vite, axios',
                            'Так же используется архитикта feature-Sliced Design для данного проекта'],
            deploy: 'https://maxx111.github.io/shoes_shop/',
            code: 'https://github.com/MaXx111/shoes_shop'
        },
        bgImg: './shoes-shop.png',
        colorTitle: '#de6fa1',
        technologies: {
            html: true,
            css: true,
            react: true,
            js: true,
            ts: true,
            redux: true
        }
    },
    {
        id: 8,
        title: "Сервис по поиску фильмов",
        info: {
            description: ['Это был проект по взаимодействию с rest api и динамической отрисовки данных, которые приходят с сервера и их сохранения в избранном.',
                           'Был использован TypeScript, React, Axios и Redux'],
            deploy: 'https://maxx111.github.io/favorite-films/',
            code: 'https://github.com/MaXx111/favorite-films'
        },
        bgImg: './search-films.png',
        colorTitle: '#cc6633',
        technologies: {
            html: true,
            css: true,
            react: true,
            js: true,
            ts: true,
            redux: true
        }
    },
    {
        id: 9,
        title: "Cozy House",
        info: {
            description: ['Моя работа для RSS, где было необходимо сверстать сайт для приюта животных только на HTML и СSS', 
                        'Так как в ТЗ было указанно использовать только верстку и ванильный JS, то интересных технологий в данном проекте попробовать не удалось',
                        'Реализованно переключение страниц, карусель и открытие карточек с животными. Дизайн адаптивный и отображается хорошо на всех устройствах'],
            deploy: 'https://maxx111.github.io/shelter_pets-site/',
            code: 'https://github.com/MaXx111/shelter_pets-site'
        },
        bgImg: './cozy-house.png',
        colorTitle: '#7a5f0d',
        technologies: {
            html: true,
            css: true,
            react: false,
            js: true,
            ts: false,
            redux: false
        }
    },
    {
        id: 2,
        title: "Retro Game",
        info: {
            description: ['Моя работа, которую я указал в портфолио для того, что бы показать мой прогресс в программировании', 
                            'Здесь я использовал исключительно ванильный JS без ничего'],
            deploy: 'https://maxx111.github.io/js-advanced-diploma/',
            code: 'https://github.com/MaXx111/js-advanced-diploma'
        },
        bgImg: './retro-game.png',
        colorTitle: '#ff9c00',
        technologies: {
            html: true,
            css: true,
            react: false,
            js: true,
            ts: false,
            redux: false
        }
    },
    {
        id: 5,
        title: "Виртуальная клавиатура",
        info: {
            description: ['Виртуальная клавиатура реализована только на английском языке'],
            deploy: 'https://maxx111.github.io/virtual-keyboard/',
            code: 'https://github.com/MaXx111/virtual-keyboard'
        },
        bgImg: './virtual-keyboard.png',
        colorTitle: '#0085ff',
        technologies: {
            html: true,
            css: true,
            react: false,
            js: true,
            ts: false,
            redux: false
        }
    },
    {
        id: 6,
        title: "Catalog на React",
        info: {
            description: ['Моя первая работа на react'],
            deploy: 'https://maxx111.github.io/events-state__filter/',
            code: 'https://github.com/MaXx111/events-state__filter'
        },
        bgImg: './catalog-react.png',
        colorTitle: '#dfa800',
        technologies: {
            html: true,
            css: true,
            react: true,
            js: true,
            ts: false,
            redux: false
        }
    },
    {
        id: 10,
        title: "Minesweeper",
        info: {
            description: ['Последняя работа(игра)'],
            deploy: 'https://maxx111.github.io/Minesweeper/',
            code: 'https://github.com/MaXx111/Minesweeper'
        },
        bgImg: './Minesweeper.png',
        colorTitle: '#cc2400',
        technologies: {
            html: true,
            css: true,
            react: false,
            js: true,
            ts: false,
            redux: false
        }
    },
    {
        id: 1,
        title: "NOEMI",
        info: {
            description: ['Обычная верстка по макету без интерактива'],
            deploy: 'https://maxx111.github.io/mq-diplom37/?#',
            code: 'https://github.com/MaXx111/mq-diplom37'
        },
        bgImg: './mq-maket.jpg',
        colorTitle: '#9d7cff',
        technologies: {
            html: true,
            css: true,
            react: false,
            js: false,
            ts: false,
            redux: false
        }
    },
    {
        id: 3,
        title: "Plants site",
        info: {
            description: ['Обычная верстка, но и даже без адаптива'],
            deploy: 'https://maxx111.github.io/plants_site/#',
            code: 'https://github.com/MaXx111/plants_site'
        },
        bgImg: './plants-site.png',
        colorTitle: '#33a800',
        technologies: {
            html: true,
            css: true,
            react: false,
            js: false,
            ts: false,
            redux: false
        }
    },
    {
        id: 4,
        title: "Маленькая игра",
        info: {
            description: ['Обычная старая маленькая игра, где нужно попасть по цели'],
            deploy: 'https://maxx111.github.io/events-1-dz/',
            code: 'https://github.com/MaXx111/events-1-dz'
        },
        bgImg: './mini-game.png',
        colorTitle: '#a64d79',
        technologies: {
            html: true,
            css: true,
            react: false,
            js: true,
            ts: false,
            redux: false
        }
    }
]