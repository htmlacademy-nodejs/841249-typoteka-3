'use strict';

module.exports = {
  main: {
    themes: [{
      sup: 88,
      title: `Автомобили`,
      href: `#`
    }, {
      sup: 13,
      title: `Удаленная работа`,
      href: `#`
    }, {
      sup: 13,
      title: `Бизнес`,
      href: `#`
    }, {
      sup: 13,
      title: `Путешествия`,
      href: `#`
    }, {
      sup: 13,
      title: `Дизайн и обустройство `,
      href: `#`
    }, {
      sup: 22,
      title: `Производство игрушек`,
      href: `#`
    }, {
      sup: 22,
      title: `UX & UI`,
      href: `#`
    }],
    popular: [{
      href: `#`,
      text: `Билл Гейтс впервые за два года возглавил рейтинг самых богатых людей мира по версии Bloomberg`,
      sup: 12
    }, {
      href: `#`,
      text: `Модель Кайли Дженнер продаст 51% своей компании Kylie Cosmetics владельцу Factor за $600 млн`,
      sup: 15
    }, {
      href: `#`,
      text: `Модель Кайли Дженнер продаст 51% своей компании Kylie Cosmetics владельцу Factor за $600 млн`,
      sup: 22
    }, {
      href: `#`,
      text: `Tesla получила 146 тысяч предзаказов на электрический пикап Cybertruck за двое суток`,
      sup: 153
    }],
    lastComments: [{
      avatarSrc: `/img/avatar-small-1.png`,
      name: `Анна Артамонова`,
      href: `#`,
      text: `Сервис аренды жилья Airbnb стал глобальным партнером Международного олимпийского комитета (МОК) на девять лет, в течение которых пройдет пять Олимпиад, в том числе в Токио в 2020 году.`
    }, {
      avatarSrc: `/img/avatar-small-2.png`,
      name: `Александр Петров`,
      href: `#`,
      text: `Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор разъяснить штрафы за ссылки на сайты с матом`
    }, {
      avatarSrc: `/img/avatar-small-3.png`,
      name: `Игорь Шманский`,
      href: `#`,
      text: `Что-то все электрокары в последнее время все на одно лицо делаются))`
    }],
    articles: [{
      breadcrumbs: [{
        title: `Дизайн`,
        link: `#`
      }, {
        title: `Удаленная работа`,
        link: `#`
      }],
      posterSrc: `/img/skyscraper`,
      date: {
        dateText: `21.03.2019, 20:33`,
        dateRaw: `2019-03-21T20:33`
      },
      title: `Я ничего не понял`,
      text: `Если вы сами пишете такие письма — почитайте Ильяхова. А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
      commentsCount: 12
    }, {
      breadcrumbs: [{
        title: `Фриланс`,
        link: `#`
      }],
      date: {
        dateText: `21.03.2019, 20:33`,
        dateRaw: `2019-03-21T20:33`
      },
      title: `Путин подписал закон о предустановке российских приложений на смартфоны и другую электронику`,
      text: `Президент России Владимир Путин подписал закон об обязательной предустановке российского программного обеспечения на электронную технику, продаваемую в России. Документ опубликован на официальном сайте правовой информации.`,
      commentsCount: 12
    }, {
      breadcrumbs: [{
        title: `Фриланс`,
        link: `#`
      }],
      posterSrc: `/img/sea`,
      date: {
        dateText: `21.03.2019, 20:33`,
        dateRaw: `2019-03-21T20:33`
      },
      title: `Путешествие в Голландию`,
      text: `Если вы сами пишете такие письма — почитайте Ильяхова. А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
      commentsCount: 12
    }, {
      breadcrumbs: [{
        title: `Дизайн`,
        link: `#`
      }, {
        title: `Удаленная работа`,
        link: `#`
      }],
      posterSrc: `/img/forest`,
      date: {
        dateText: `21.03.2019, 20:33`,
        dateRaw: `2019-03-21T20:33`
      },
      title: `Я понял, но не все`,
      text: `Если вы сами пишете такие письма — почитайте Ильяхова. А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
      commentsCount: 12
    }],
  },
  login: {
    registrationFields: [{
      type: `email`,
      placeholder: `Электронная почта`,
    },
    {
      type: `text`,
      placeholder: `Имя`,
    },
    {
      type: `text`,
      placeholder: `Фамилия`,
    },
    {
      type: `password`,
      placeholder: `Пароль`,
    },
    {
      type: `password`,
      placeholder: `Повтор пароля`,
    },
    ],
    loginFileds: [{
      type: `email`,
      placeholder: `Электронная почта`,
    },
    {
      type: `password`,
      placeholder: `Пароль`,
    },
    ]
  },
  search: {
    wrapperType: `color`,
  },
  post: {
    themes: [{
      sup: 88,
      title: `Автомобили`,
      href: `#`
    }, {
      sup: 13,
      title: `Удаленная работа`,
      href: `#`
    }, {
      sup: 13,
      title: `Бизнес`,
      href: `#`
    }],
  },
  comments:
    {
      wrapperType: `nobackground`,
      commentsList: []
    },
  my: {
    wrapperType: `nobackground`,
    publicationsList: [
      {
        date: {
          text: `21.03.2019, 20:33`,
          data: `2019-03-21T20:33`,
        },
        titleLink: {
          href: `#`,
          text: `Huawei открыла в России предзаказ на смартфон Mate 30 Pro без сервисов Google`,
        },
      },
      {
        date: {
          text: `21.03.2019, 20:33`,
          data: `2019-03-21T20:33`,
        },
        titleLink: {
          href: `#`,
          text: `Facebook разрешит пользователям копировать фотографии из соцсети в «Google Фото»`,
        },
      },
      {
        date: {
          text: `21.03.2019, 20:33`,
          data: `2019-03-21T20:33`,
        },
        titleLink: {
          href: `#`,
          text: `Huawei открыла в России предзаказ на смартфон Mate 30 Pro без сервисов Google`,
        },
      },
      {
        date: {
          text: `21.03.2019, 20:33`,
          data: `2019-03-21T20:33`,
        },
        titleLink: {
          href: `#`,
          text: `Huawei открыла в России предзаказ на смартфон Mate 30 Pro без сервисов Google`,
        },
      },
      {
        date: {
          text: `21.03.2019, 20:33`,
          data: `2019-03-21T20:33`,
        },
        titleLink: {
          href: `#`,
          text: `Huawei открыла в России предзаказ на смартфон Mate 30 Pro без сервисов Google`,
        },
      },
    ]
  }
};
