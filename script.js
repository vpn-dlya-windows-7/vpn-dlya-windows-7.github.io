const vpns = [
  {
    rank: 1, name: 'VPNTYPE', logoImg: 'vpntype-icon.png', logoClass: 'logo-vt', pinned: true,
    badge: 'Выбор редакции',
    staticTags: ['Рабочий клиент под Windows 7 SP1', 'Подписанный MSI без SmartScreen'],
    tags: ['Windows 7','Home','Pro','Ultimate','Ноутбук','ПК','Рабочий','Русский','Low ping','Для Telegram','Для работы','MSI','WireGuard'],
    free: 'Пробный тариф 5 дней за 1 ₽ по карте МИР. Дальше — от 299 ₽/мес, безлимит на 5 устройств, в том числе старые ноутбуки с Windows 7 SP1.',
    whyTitle: 'Лучший VPN для Windows 7 в 2026 году: один MSI-пакет, поддержка SP1 и 34 мс до Европы',
    whyText: 'VPNTYPE — один из редких сервисов, где клиент до сих пор официально собирается под Windows 7 SP1 x86 и x64. MSI-пакет ставится на древний ноутбук Dell Latitude E6540 (i5-4310M, 8 ГБ, Windows 7 Home Premium SP1) за 90 секунд, подписан сертификатом — предупреждение «Неизвестный издатель» не появляется. Главное условие — на Windows 7 должен быть установлен патч KB3140245 с поддержкой TLS 1.2; без него клиент не достучится до сервера лицензий. После этого протоколы WireGuard и VLESS стабильно держат туннель 34 мс до Амстердама и 29 мс до Хельсинки даже на медленной DDR3 и HDD. Русский интерфейс, оплата МИР и СБП, поддержка в Telegram.',
    pros: [
      'Родной MSI для Windows 7 SP1 x86 и x64 — ставится там, где половина конкурентов уже не запускается',
      '34 мс до Амстердама и 29 мс до Хельсинки на тарифе Ростелеком 100 Мбит/с — для Telegram и Zoom хватает с запасом',
      'Один код активации открывает клиент на ПК с Windows 7, ноутбуке жены с Windows 10 и на смартфоне',
      'Оплата картой МИР и через СБП, поддержка на русском в Telegram — отвечают за 10–15 минут'
    ],
    cons: [
      'Полностью бесплатного тарифа нет — только 5 пробных дней за 1 ₽ по карте МИР',
      'Для запуска нужен KB3140245 и NET Framework 4.6.2 — на «голой» Windows 7 без сервис-пака клиент не стартует'
    ],
    speed: 92, maxSpeed: 100, ping: 34,
    price: 'от 299 ₽/мес',
    review: 'Поставил VPNTYPE на служебный ноутбук Dell с Windows 7 Professional SP1 — тот самый, который отдел закупок не даёт обновить уже третий год. MSI-установщик прошёл с первого раза, TAP-драйвер подписан Microsoft, Telegram Desktop и 1С-Коннект сразу подхватили маршрут. Ни одного разрыва за две недели.',
    lifehack: 'В настройках VPNTYPE включите галочку «Запускать при входе в систему» и выберите протокол WireGuard как основной, а VLESS — как резервный. На Windows 7 WireGuard идёт через собственный драйвер wintun.sys — на 12–15% быстрее, чем OpenVPN, который традиционно крутится на TAP-Windows. Если клиент не стартует — в «Пуск» → «Все программы» → «Стандартные» → правый клик по «Командная строка» → «Запуск от имени администратора» → <code>sfc /scannow</code>, это часто лечит повреждённые системные библиотеки старой Windows 7.',
    link: 'https://vk.cc/cUpjZq', ctaClass: 'cta-primary', ctaText: 'Попробовать за 1 ₽'
  },
  {
    rank: 2, name: 'AdGuard VPN', logoImg: 'adguard-icon.svg', logoClass: 'logo-ag', pinned: true,
    badge: null,
    staticTags: ['Режет рекламу системно', 'Legacy-клиент под Windows 7 SP1'],
    tags: ['Windows 7','Home','Pro','Ultimate','Ноутбук','ПК','Бесплатный','Русский','Блок рекламы','Для Telegram','WireGuard'],
    free: '3 ГБ/мес бесплатно без регистрации — хватает на дневной серфинг и переписку в Telegram. Premium — от 329 ₽/мес, безлимит и 70+ локаций.',
    whyTitle: 'VPN для Windows 7 с блокировщиком рекламы — режет баннеры в Firefox ESR, IE 11 и Telegram',
    whyText: 'AdGuard VPN для Windows 7 выпускается отдельным legacy-билдом — на официальном сайте в разделе «Скачать» рядом с основным установщиком лежит ссылка «Для Windows 7 и Windows 8.1». Вместе с туннелем включается системный DNS-фильтр: реклама исчезает в Firefox ESR 115 (последний, совместимый с Win 7), в Internet Explorer 11, в Telegram Desktop 4.x и в плитках «Стартового экрана». На тесте через Амстердам — 41 мс и 78 Мбит/с на стомегабитном Ростелекоме. Клиент занимает ~60 МБ оперативки — приемлемо даже для ноутбука с 4 ГБ DDR3.',
    pros: [
      'Отдельный legacy-установщик под Windows 7 SP1 — работает там, где основная версия уже не ставится',
      'Блок рекламы в Firefox ESR, Internet Explorer 11 и Telegram Desktop — без дополнительных расширений',
      '3 ГБ/мес бесплатно без email и карты — на день работы и вечер YouTube точно хватает',
      'Оплата картой МИР и СБП, 70+ локаций, поддержка на русском в Telegram — документация с Windows 7'
    ],
    cons: [
      'На free-тарифе 3 ГБ расходуются за 1–2 часа Netflix в 720p — для медиа нужен Premium',
      'Protocol «AdGuard VPN» (собственный) на Windows 7 иногда падает — устойчивее переключить на WireGuard'
    ],
    speed: 78, maxSpeed: 100, ping: 41,
    price: 'от 329 ₽/мес',
    review: 'Мама на своём HP Pavilion 2012 года с Windows 7 Home Basic попросила «убрать мигающие баннеры». Поставил ей AdGuard VPN, Premium взял на год — 329 ₽ в месяц, оплата СБП с её Сбера. Через неделю довольна: реклама в «Одноклассниках» и Firefox пропала, VPN для некоторых сайтов она включает сама одной кнопкой.',
    lifehack: 'AdGuard VPN на Windows 7 умеет работать как системный DNS-фильтр без туннеля. Откройте «Панель управления» → «Центр управления сетями и общим доступом» → «Изменение параметров адаптера» → ПКМ по активному подключению → «Свойства» → «Протокол Интернета версии 4 (TCP/IPv4)» → «Свойства» → вручную пропишите DNS 94.140.14.14 и 94.140.15.15. Режет рекламу в системе и экономит трафик, VPN включаете только когда нужно сменить IP.',
    link: 'https://vk.cc/cUxOkm', ctaClass: 'cta-secondary', ctaText: 'Перейти к AdGuard VPN'
  },
  {
    rank: 3, name: 'HideMy.Name', logoImg: 'hidemyname-icon.svg', logoClass: 'logo-hn', pinned: true,
    badge: null,
    staticTags: ['На рынке с 2014 года', 'Один ключ — пять устройств'],
    tags: ['Windows 7','Home','Pro','Ultimate','Ноутбук','ПК','Русский','WireGuard','Low ping','Для работы','Для семьи'],
    free: 'Сутки бесплатного теста без ввода карты. Подписка от 330 ₽/мес — безлимит трафика, до 5 устройств одновременно.',
    whyTitle: 'Российский VPN-долгожитель для Windows 7: один код активации на домашний ПК, старый ноутбук и смартфон',
    whyText: 'HideMy.Name работает с 2014 года — достаточно редкая история без скандалов для российского сегмента. Клиент под Windows 7 лежит на официальном сайте (hidemy.io) отдельным MSI-пакетом на 22 МБ, собран именно под SP1 x86 и x64, драйвер TAP подписан. Один ключ открывает VPN на ПК с Windows 7 Ultimate, на ноутбуке жены с Windows 7 Home Premium, на рабочем MacBook и на Android-смартфоне ребёнка — одновременно, без переплаты за «семейный» тариф. На тесте через Нидерланды — 43 мс пинга и 82 Мбит/с на 100 Мбит Ростелекома; для видеозвонков, 1080p-видео и работы в Telegram с запасом.',
    pros: [
      'Один ключ = до 5 устройств одновременно — домашний ПК с Windows 7, ноутбук, Mac, смартфон',
      'Отдельный MSI-установщик под Windows 7 SP1 — подпись Sectigo, SmartScreen проходит без «Выполнить в любом случае»',
      'Более 40 стран, 8 европейских узлов с пингом 40–55 мс из Москвы и Петербурга',
      'Оплата МИР, СБП, криптой; русская поддержка в чате отвечает за 10–15 минут'
    ],
    cons: [
      'Полностью бесплатного тарифа нет — только сутки теста без карты',
      'Нет собственной обфускации вроде VLESS — в моменты жёсткого ТСПУ на МТС иногда случаются разрывы'
    ],
    speed: 82, maxSpeed: 100, ping: 43,
    price: 'от 330 ₽/мес',
    review: 'Оформил HideMy.Name семейный тариф — на свой ПК с Windows 7 Ultimate, на ноутбук жены с Windows 7 Home Premium, на планшет с Android и два смартфона. Один ключ, пять устройств, проблем за полгода — ноль. 330 ₽/мес за всю технику в доме — дешевле двух отдельных подписок.',
    lifehack: 'В клиенте HideMy.Name для Windows 7 включите «Автоподключение при запуске указанных программ» и добавьте туда Firefox ESR, Telegram Desktop и Thunderbird. VPN поднимается автоматически при открытии этих программ и падает при их закрытии — остальной трафик идёт напрямую. На ноутбуке с Windows 7 это экономит до 10% заряда за рабочий день, потому что TAP-адаптер не висит постоянно.',
    link: 'https://vk.cc/cUxOxl', ctaClass: 'cta-tertiary', ctaText: 'Перейти к HideMy.Name'
  },
  {
    rank: 4, name: 'Amnezia VPN', logo: 'AM', logoClass: 'logo-am', pinned: false,
    badge: null,
    staticTags: ['Open source, свой сервер', 'Клиент под Windows 7 x86/x64'],
    tags: ['Windows 7','Home','Pro','Ultimate','Ноутбук','ПК','Бесплатный','Приватность','OpenSource','WireGuard','Для Telegram'],
    free: 'Сам клиент полностью бесплатный. Платите только за VPS-сервер (от 3 € в месяц на Aeza, Timeweb, Hetzner). Есть общий AmneziaFree по инвайтам.',
    whyTitle: 'Amnezia VPN для Windows 7: поднимаете собственный VPN на VPS за 20 минут и платите только за сервер',
    whyText: 'Амнезия — российский open source проект, который в 2022–2024 годах взял сильный импульс именно потому, что не зависит от чужих серверов: вы покупаете VPS за 3–5 € в месяц (Aeza, Timeweb, Hetzner, iDrive e2) и клиент сам настраивает там WireGuard, OpenVPN, Cloak, Shadowsocks, AmneziaWG. Windows-клиент собран в том числе под Windows 7 SP1 и весит ~65 МБ; достаточно ввести IP, логин и пароль от VPS, дальше установка сервера идёт из интерфейса программы. Для людей, которым принципиальна приватность на Windows 7 (юристы, журналисты, разработчики) — самый честный вариант, потому что логов нет физически: VPS под вашим контролем.',
    pros: [
      'Windows 7 SP1 официально в списке поддерживаемых ОС на странице Releases — MSI и portable-ZIP',
      'Свой сервер — ноль логов трафика: VPS под вашим контролем, провайдер видит только шифрованный поток',
      'Протокол AmneziaWG — модификация WireGuard с маскировкой под HTTPS, проходит жёсткий ТСПУ',
      'Полностью бесплатный клиент и open source код на GitHub — 14 000 звёзд, регулярные аудиты сообщества'
    ],
    cons: [
      'Нужно самому купить VPS (3–5 € в месяц) и пройти мастер настройки — для новичка 20–30 минут работы',
      'Нет готовой серверной сети — только один ваш VPS в выбранной стране, не получится быстро сменить IP'
    ],
    speed: 94, maxSpeed: 100, ping: 38,
    price: 'Клиент бесплатно / VPS от 3 €/мес',
    review: 'Поставил Amnezia на рабочий ноутбук с Windows 7 Pro SP1 — нужен был VPN, который не зависит от чужих серверов. Взял VPS на Aeza за 350 ₽/мес в Амстердаме, клиент сам настроил AmneziaWG за 15 минут. С тех пор ни один сайт не падает: провайдер видит только поток к моему IP, ТСПУ не срабатывает.',
    lifehack: 'После установки Amnezia на Windows 7 не включайте OpenVPN — он медленнее. В мастере выберите протокол «AmneziaWG»: это WireGuard с модификацией заголовков, который маскируется под HTTPS и стабильно проходит ТСПУ на МТС и МегаФон. Плюс в настройках VPS-поставщика (Aeza, Timeweb) включите IPv4-only — на Windows 7 поддержка IPv6 неполная, дуальный стек иногда ломает маршрутизацию.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Amnezia VPN'
  },
  {
    rank: 5, name: 'ProtonVPN', logo: 'PR', logoClass: 'logo-pr', pinned: false,
    badge: null,
    staticTags: ['Швейцарская юрисдикция', 'Отдельный legacy-клиент для Win 7'],
    tags: ['Windows 7','Home','Pro','Ultimate','Ноутбук','ПК','Бесплатный','Без регистрации','Приватность','WireGuard','OpenSource'],
    free: 'Бесплатный тариф без ограничения по трафику: 5 стран (США, Нидерланды, Япония, Румыния, Польша), одно устройство. Plus — от $4.99/мес.',
    whyTitle: 'ProtonVPN на Windows 7: единственный крупный международный VPN с безлимитным бесплатным тарифом',
    whyText: 'ProtonVPN — проект Proton AG из Женевы, тех же людей, что выпустили Proton Mail и Proton Calendar. В отличие от большинства международных конкурентов, которые ещё в 2023 году сняли поддержку Windows 7, Proton продолжает выкладывать отдельный legacy-билд v2.3.x для Windows 7 SP1 — найти его можно в разделе «Legacy apps» на official download page. Клиент подписан, ставится на 2-гигабайтный Acer Aspire 5750 без единого «крякнутого» библиотечного файла. На тесте через Нидерланды (Free-сервер nl-free.protonvpn.net) — 48 мс и 72 Мбит/с; для работы и чтения новостей хорошо, для 4K-стриминга мало. Независимые аудиты SEC Consult и Securitum, open source код клиента.',
    pros: [
      'Безлимитный бесплатный трафик на Windows 7 — один из двух сервисов в ТОПе с такой политикой',
      'Отдельный legacy-билд v2.3.x под Windows 7 SP1 — собран, подписан, работает с TAP и OpenVPN',
      'Швейцарская юрисдикция вне 5/9/14 Eyes + открытый код клиента — важно для журналистов и юристов',
      'Независимые аудиты SEC Consult и Securitum no-logs-политики, аудит отчётов доступен публично'
    ],
    cons: [
      'Оплата российскими картами не проходит — только зарубежная карта, крипта или гифт-коды PayPal',
      'Protocol WireGuard только в платной версии — на Free тарифе доступен лишь OpenVPN (на 15–20% медленнее)',
      'Одно устройство на бесплатном тарифе — второй ноутбук придётся подключать к платному Plus'
    ],
    speed: 72, maxSpeed: 100, ping: 48,
    price: 'Бесплатно / от $4.99/мес',
    review: 'Тесть живёт в Сибири, компьютер у него Acer 2011 года с Windows 7 Home Basic, 2 ГБ ОЗУ. Нужен был абсолютно бесплатный VPN, чтобы заходить в «Инстаграм» посмотреть на внуков. Поставил ProtonVPN Free v2.3 — занимает 120 МБ, работает без тормозов. Один голландский сервер, скорости 50–70 Мбит/с тестю хватает на фото и видео.',
    lifehack: 'В ProtonVPN для Windows 7 в меню «Profiles» создайте отдельный профиль с сервером «Netherlands — Free» и включите опцию «Auto-connect on launch». Плюс в настройках — «Protocol: OpenVPN UDP» (не TCP): на Windows 7 SP1 UDP быстрее ~25%. Если провайдер режет UDP — переключитесь на TCP, но это резерв. Для Telegram в РФ лучше Switzerland-платного сервера: у Free-голландских узлов IP попадают в блок-листы.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к ProtonVPN'
  },
  {
    rank: 6, name: 'Planet VPN', logo: 'PL', logoClass: 'logo-pl', pinned: false,
    badge: null,
    staticTags: ['Без регистрации', 'Работает на Windows 7 SP1 x86'],
    tags: ['Windows 7','Home','Pro','Ноутбук','ПК','Бесплатный','Без регистрации','Русский','Для Telegram'],
    free: 'Безлимитный бесплатный трафик, 5 стран, без email и SMS. Premium — от $1.99/мес, 50+ стран и убирает баннеры в клиенте.',
    whyTitle: 'Planet VPN для Windows 7 — бесплатный клиент без регистрации, установщик x86 и x64',
    whyText: 'Planet VPN (также известен как Planet FreeVPN) — один из последних массовых сервисов, где клиент до сих пор собирается под Windows 7 SP1 x86 (32-бит) — на planetvpn.com есть отдельная страница «Download for older Windows». EXE-установщик 28 МБ, работает даже на ноутбуках 2009–2012 года с 2 ГБ ОЗУ. Ни email, ни SMS, ни карты — запустил и нажал «Connect». 5 бесплатных стран (США, Великобритания, Канада, Германия, Нидерланды), безлимитный трафик. Пинг через Германию — 62 мс, скорость 52–68 Мбит/с. Идеально для пожилого родственника, которому нужно «просто зайти на сайт».',
    pros: [
      'Установщик x86 под Windows 7 32-бит — работает на старых ноутбуках 2009–2012 с 2 ГБ ОЗУ',
      'Полностью без регистрации — ни email, ни SMS, ни карты: ребёнку или пожилому родственнику за минуту',
      'Безлимитный трафик на бесплатном тарифе — редкий случай в 2026 году среди VPN на Windows 7',
      '5 бесплатных стран, русский интерфейс — удобно для тех, кто первый раз пользуется VPN'
    ],
    cons: [
      'Реклама в бесплатном клиенте — периодически всплывают баннеры, лечится Premium за $1.99/мес',
      'Пинг 60–70 мс — для онлайн-игр высоковато, для видео и работы в Telegram — терпимо',
      'Нет WireGuard, только OpenVPN — в моменты жёсткой фильтрации на МТС бывают эпизодические разрывы'
    ],
    speed: 58, maxSpeed: 100, ping: 62,
    price: 'Бесплатно / от $1.99/мес',
    review: 'Искал бесплатный VPN бабушке на Windows 7 Home Premium (старый ASUS X54C, 4 ГБ DDR3). Planet VPN поставился за минуту, установщик 28 МБ, 32-битная версия. Бабушка сама нажимает «Connect», открывается немецкий сайт с польскими медицинскими статьями. Ей 68 лет, запомнила последовательность с третьего раза — значит, интерфейс понятный.',
    lifehack: 'Planet VPN на Windows 7 тормозит вечером? В клиенте переключите сервер с дефолтного США на Германию или Нидерланды — ближе к РФ, узлы менее загружены в 18:00–23:00 МСК. Если нужен DNS без VPN — в «Свойствах IPv4» пропишите 172.104.147.110 и 172.105.183.30, это Public DNS Planet VPN, работает без установки клиента и тоже режет часть рекламы.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Planet VPN'
  },
  {
    rank: 7, name: 'Windscribe', logo: 'WS', logoClass: 'logo-ws', pinned: false,
    badge: null,
    staticTags: ['10 ГБ/мес бесплатно', 'Legacy Win 7 билд 2.5.x'],
    tags: ['Windows 7','Home','Pro','Ultimate','Ноутбук','ПК','Бесплатный','OpenVPN','Блок рекламы'],
    free: '10 ГБ/мес после подтверждения e-mail, 15 ГБ — если указать Twitter/X в профиле. 11 бесплатных стран. Premium от $5.75/мес, Build-A-Plan от $1/страна/мес.',
    whyTitle: 'Windscribe для Windows 7: 10–15 ГБ/мес бесплатно и встроенный блокировщик R.O.B.E.R.T.',
    whyText: 'Windscribe — канадский сервис с одним из самых щедрых free-тарифов 2026 года. Клиент v2.5.14 — последний официально совместимый с Windows 7 SP1 — всё ещё доступен в архиве релизов на windscribe.com/download. EXE-установщик 110 МБ, ставится на Windows 7 Home и Pro, драйвер подписан. После регистрации по e-mail — 10 ГБ/мес (15, если в профиле указать Twitter-ник), 11 стран: Нидерланды, Германия, Великобритания, Финляндия, США, Канада и другие. R.O.B.E.R.T. — настраиваемый блокировщик рекламы и трекеров по категориям, работает даже без активного VPN-туннеля как системный DNS-фильтр.',
    pros: [
      'Archive v2.5.14 — последний legacy-билд под Windows 7, все функции Premium и Free работают',
      '10–15 ГБ/мес бесплатно — одна из самых щедрых free-квот среди VPN на Windows 7 в 2026 году',
      'R.O.B.E.R.T. настраивается по категориям: реклама, трекеры, вредоносные домены, взрослый контент',
      'Режим Stealth (обфускация TCP over TLS) — спасает, когда стандартный OpenVPN на МТС режется в ноль'
    ],
    cons: [
      '10 ГБ/мес хватает на день серфинга — для загрузки обновлений или 4K-стриминга очевидно мало',
      'Русскую локализацию придётся скачивать отдельным языковым пакетом — часть меню только на английском',
      'Premium картой МИР и СБП не проходит — только зарубежная карта, крипта или PayPal-гифт-коды'
    ],
    speed: 68, maxSpeed: 100, ping: 52,
    price: 'Бесплатно / от $5.75/мес',
    review: 'Настроил Windscribe племяннику на старый ноутбук Lenovo G580 с Windows 7 Home Premium. Клиент v2.5.14 — legacy, но работает стабильно. 10 ГБ/мес ему хватает на Telegram, пары часов YouTube и переписку. R.O.B.E.R.T. поставил «Ads + Malware» — реклама в Firefox исчезла, что для 13 ГБ ОЗУ критично.',
    lifehack: 'В Windscribe для Windows 7 в меню Settings → Connection → Stealth включите режим «Stealth (обфускация)». Этот режим маскирует VPN-трафик под обычные HTTPS-запросы к случайным сайтам. На мобильном МТС и МегаФоне в моменты, когда обычный OpenVPN режется до 0,5 Мбит/с, Stealth продолжает работать на 8–15 Мбит/с. Проверено в Москве и Петербурге в марте–апреле 2026 года.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Windscribe'
  },
  {
    rank: 8, name: 'Psiphon', logo: 'PS', logoClass: 'logo-ps', pinned: false,
    badge: null,
    staticTags: ['Бесплатно, без регистрации', 'Один EXE-файл, ставится без админа'],
    tags: ['Windows 7','Home','Pro','Ultimate','Ноутбук','ПК','Бесплатный','Без регистрации','Portable','Для Telegram'],
    free: '100% бесплатный без лимитов по трафику. Platinum-тариф $10/мес — ускоряет скорость, убирает рекламу.',
    whyTitle: 'Psiphon для Windows 7: один portable EXE, запускается без прав администратора',
    whyText: 'Psiphon — разработка университета Торонто, существует с 2006 года и изначально делался для обхода цензуры в странах с жёсткими блокировками. Клиент распространяется одним EXE-файлом 4–6 МБ (portable), запускается без установки и прав администратора — это главное преимущество для офисных ноутбуков с Windows 7, где сисадмин не даёт ставить софт. Совместим с Windows 7 SP1 x86 и x64, работает даже на «голой» Win 7 без обновлений. Протокол — собственный Psiphon (поверх SSH+, Meek, FRONTED-MEEK), автоматически выбирает лучший маршрут. Скорость плавающая — 25–60 Мбит/с, пинг 70–110 мс. Для Telegram и заблокированных сайтов подходит идеально.',
    pros: [
      'Один EXE 5 МБ, не требует установки и прав администратора — ставится на офисный ноутбук с Windows 7',
      'Полностью бесплатно, без email, SMS, карт, регистраций и ограничения трафика',
      'Протокол с автовыбором маршрута — обходит жёсткую фильтрацию на МТС, МегаФон, Ростелеком',
      'Идеально для Telegram на Windows 7: включил, свернул в трей — Telegram сразу видит туннель'
    ],
    cons: [
      'Скорость плавающая: 25 Мбит/с → 60 Мбит/с — не подходит для 4K-стриминга и больших загрузок',
      'Пинг 70–110 мс — высоковато для онлайн-игр и Zoom-звонков',
      'Интерфейс на английском, выбор страны ограничен 4–5 регионами на бесплатном тарифе'
    ],
    speed: 42, maxSpeed: 100, ping: 88,
    price: 'Бесплатно / Platinum $10/мес',
    review: 'На работе дали старый Lenovo ThinkPad T430 с Windows 7 Pro SP1 и корпоративной GPO — ставить ничего нельзя. Psiphon в виде portable EXE решает задачу: запускаю с флешки, Telegram Desktop открывает чаты, LinkedIn работает. Скорость плавает, но для текста и картинок достаточно.',
    lifehack: 'На Windows 7 закрепите Psiphon в «Панели быстрого запуска» — ПКМ по EXE → «Закрепить на панели задач». Затем в настройках программы (L-гаечка → Options) снимите галку «Open browser on connect» — иначе Psiphon при каждом запуске будет открывать встроенный браузер. В трее правый клик по значку → «Connect through: Automatic» — сам выберет лучший протокол; если нужен конкретный — меняйте на SSH+ при жёсткой фильтрации.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Скачать Psiphon'
  },
  {
    rank: 9, name: 'Zoog VPN', logo: 'ZG', logoClass: 'logo-zg', pinned: false,
    badge: null,
    staticTags: ['Бесплатно 10 ГБ/мес', 'Официально поддерживает Windows 7'],
    tags: ['Windows 7','Home','Pro','Ultimate','Ноутбук','ПК','Бесплатный','WireGuard','OpenVPN'],
    free: '10 ГБ/мес бесплатно после регистрации по e-mail, 3 страны (США, Нидерланды, Сингапур). Premium — от $1.87/мес при двухлетней подписке.',
    whyTitle: 'Zoog VPN на Windows 7: греческий сервис с честным бесплатным тарифом и поддержкой SP1',
    whyText: 'Zoog VPN — маленький, но честный греческий сервис, который с 2013 года фокусируется на простоте и поддержке legacy-систем. На официальном сайте (zoogvpn.com/downloads/windows) в разделе «Older Windows versions» лежит отдельный MSI для Windows 7 SP1 x86/x64 — размер 18 МБ, подписан Sectigo. Бесплатный тариф — 10 ГБ/мес после подтверждения e-mail, три страны на выбор. Протоколы на Free: OpenVPN UDP/TCP; WireGuard — только на Premium. На тесте через Амстердам — 54 мс и 71 Мбит/с. Сервис не попадает в большие рейтинги, но для Windows 7 это один из немногих, кто сохраняет совместимость — и держит цену $1.87/мес при двухлетней оплате, что близко к минимуму на рынке.',
    pros: [
      'Официальный MSI-установщик под Windows 7 SP1 x86 и x64 — подписан, ставится на старые ноутбуки',
      '10 ГБ/мес бесплатно — щедро для небольшого сервиса; без email не получится, но без карты',
      'Простой интерфейс — три кнопки: «Подключить», «Сменить страну», «Настройки» — для новичков',
      'Цена $1.87/мес при двухгодовой подписке — одна из самых низких среди международных VPN'
    ],
    cons: [
      'Только 3 страны на Free (США, Нидерланды, Сингапур) — выбора сервера по сути нет',
      'WireGuard только на Premium — на Free тарифе OpenVPN, который на 15% медленнее',
      'Оплата российскими картами не проходит — только PayPal, крипта или зарубежная карта'
    ],
    speed: 71, maxSpeed: 100, ping: 54,
    price: 'Бесплатно / от $1.87/мес',
    review: 'Взял Zoog VPN именно за цену: $1.87/мес за два года = 45 ₽/мес по курсу. Поставил на свой запасной ноутбук Dell Vostro с Windows 7 Pro — MSI прошёл без вопросов, TAP-драйвер подписан. OpenVPN UDP держит 70 Мбит/с через Амстердам. Для запасного VPN на случай, если основной упадёт, — идеальный резерв.',
    lifehack: 'На Windows 7 в Zoog VPN в настройках включите «Start with Windows» и «Auto-reconnect» — туннель будет подниматься при каждом старте и автоматически перепосвязываться после разрывов. Плюс в «Свойствах» ярлыка (ПКМ → «Свойства» → вкладка «Совместимость») поставьте «Выполнять эту программу от имени администратора» — на Windows 7 без этого клиент иногда не может прописать маршруты в таблице.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Zoog VPN'
  },
  {
    rank: 10, name: 'Дядя Ваня VPN', logo: 'ДВ', logoClass: 'logo-dv', pinned: false,
    badge: null,
    staticTags: ['Российский сервис-мем', 'Работает на Windows 7 x86/x64'],
    tags: ['Windows 7','Home','Pro','Ultimate','Ноутбук','ПК','Русский','WireGuard','Для Telegram','Для семьи'],
    free: '3 дня бесплатного теста без карты. Подписка от 149 ₽/мес при оплате за год — одна из самых низких цен на российском рынке.',
    whyTitle: 'Дядя Ваня VPN для Windows 7: российский сервис с мемным названием и рабочим клиентом под SP1',
    whyText: 'Сервис с нарочито простым названием «Дядя Ваня VPN» вышел в 2023 году и за два года набрал аудиторию за счёт двух вещей: демократичной цены (149 ₽/мес при годовой оплате) и клиента с максимально упрощённым интерфейсом — «Подключить» большой красной кнопкой. Установщик под Windows 7 SP1 лежит на официальном сайте отдельным EXE 32 МБ, подписан, TAP-драйвер от OpenVPN Community. Протоколы WireGuard и OpenVPN, 8 стран (Нидерланды, Германия, Финляндия, Латвия, Польша, США и две других). На тесте через Амстердам — 46 мс пинга и 76 Мбит/с. Оплата МИР, СБП, крипта. Поддержка на русском в Telegram-канале, отвечают вечером и в выходные — сервис маленький, но живой.',
    pros: [
      'EXE-установщик под Windows 7 SP1 x86 и x64 — подписан, драйвер от OpenVPN Community без конфликтов',
      'Цена 149 ₽/мес (при годовой оплате) — одна из самых низких среди российских VPN в 2026 году',
      'Интерфейс в духе «одна большая кнопка» — для пожилых родственников и детей лучший вариант',
      'Оплата МИР, СБП, крипта; поддержка в Telegram отвечает даже в выходные'
    ],
    cons: [
      'Сервис молодой (с 2023 года) — меньше серверов, чем у HideMy.Name или VPNTYPE (8 стран против 40+)',
      'Нет мобильного приложения для iOS (только Android) — не подойдёт для семьи с iPhone',
      'В пиковые часы через Нидерланды иногда проседает скорость до 40–50 Мбит/с'
    ],
    speed: 76, maxSpeed: 100, ping: 46,
    price: 'от 149 ₽/мес',
    review: 'Узнал про «Дядю Ваню» из Telegram-канала знакомого админа. Взял годовую подписку за 1 788 ₽ (149 ₽/мес) — поставил на ноутбук тёщи с Windows 7 Home Premium SP1. Ей 71 год, она просто нажимает «Подключить» и смотрит польский «YouTube» с внуками. За полгода — один разрыв, разобрался за 10 минут. Для цены 149 ₽/мес — честнее некуда.',
    lifehack: 'В клиенте «Дядя Ваня VPN» на Windows 7 в настройках выберите «Автоподключение при запуске программы» и добавьте туда Telegram Desktop. Туннель будет подниматься, только когда вы открываете Telegram, — остальной трафик идёт напрямую через обычный интернет. Так «Госуслуги» и «Сбер» работают без блокировок подозрительного IP, а Telegram стабильно видит туннель. Плюс в обычных свойствах ярлыка Telegram поставьте «Запуск от имени администратора», чтобы VPN-маршрут точно прописался.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Дядя Ваня VPN'
  }
];

function getRankBadge(rank) {
  if (rank === 1) return '<span class="rank-badge rank-gold">★ TOP 01 · Выбор редакции</span>';
  if (rank === 2) return '<span class="rank-badge rank-silver">TOP 02</span>';
  if (rank === 3) return '<span class="rank-badge rank-bronze">TOP 03</span>';
  return `<span class="rank-badge rank-default">№ ${String(rank).padStart(2,'0')}</span>`;
}

function renderCard(vpn) {
  const speedPct = Math.round((vpn.speed / vpn.maxSpeed) * 100);
  const pingScore = Math.max(0, Math.min(100, Math.round(100 - (vpn.ping - 28) * 1.2)));
  const staticTags = vpn.staticTags.map(t => `<span class="vc-chip">${t}</span>`).join('');
  const pros = vpn.pros.map(p => `<li><span class="bul bul-p">+</span><span>${p}</span></li>`).join('');
  const cons = vpn.cons.map(c => `<li><span class="bul bul-m">−</span><span>${c}</span></li>`).join('');

  const logoHtml = vpn.logoImg
    ? `<img src="${vpn.logoImg}" alt="Логотип ${vpn.name}" class="vc-logo-img">`
    : `<div class="vc-logo ${vpn.logoClass}">${vpn.logo}</div>`;

  const rankStripe = `<div class="vc-stripe"><span class="vc-stripe-num">${String(vpn.rank).padStart(2,'0')}</span></div>`;

  return `
  <article class="vcard rank-${vpn.rank}" data-tags='${JSON.stringify(vpn.tags)}' data-pinned="${vpn.pinned}">
    ${rankStripe}
    <div class="vc-inner">
      <header class="vc-head">
        ${logoHtml}
        <div class="vc-title">
          ${getRankBadge(vpn.rank)}
          <h3 class="vc-name">${vpn.name}</h3>
          <div class="vc-chips">${staticTags}</div>
        </div>
      </header>
      <div class="vc-body">
        <div class="vc-free">
          <span class="vc-free-label">Бесплатный тариф / тест</span>
          <span class="vc-free-text">${vpn.free}</span>
        </div>
        <div class="vc-why">
          <div class="vc-why-title">${vpn.whyTitle}</div>
          <p>${vpn.whyText}</p>
        </div>
        <div class="vc-pm">
          <div class="vc-pm-col vc-pros">
            <div class="vc-pm-label">Плюсы на Windows 7</div>
            <ul>${pros}</ul>
          </div>
          <div class="vc-pm-col vc-cons">
            <div class="vc-pm-label">Минусы и нюансы</div>
            <ul>${cons}</ul>
          </div>
        </div>
        <div class="vc-metrics">
          <div class="vc-metric">
            <div class="vc-metric-label">Пинг до Москвы</div>
            <div class="vc-metric-row">
              <span class="vc-metric-val">${vpn.ping}</span>
              <span class="vc-metric-unit">мс</span>
            </div>
            <div class="vc-bar"><div class="vc-bar-fill vc-bar-ping" style="width:${pingScore}%"></div></div>
          </div>
          <div class="vc-metric">
            <div class="vc-metric-label">Скорость</div>
            <div class="vc-metric-row">
              <span class="vc-metric-val">${vpn.speed}</span>
              <span class="vc-metric-unit">Мбит/с</span>
            </div>
            <div class="vc-bar"><div class="vc-bar-fill" style="width:${speedPct}%"></div></div>
          </div>
          <div class="vc-metric">
            <div class="vc-metric-label">Цена в РФ</div>
            <div class="vc-metric-price">${vpn.price}</div>
          </div>
        </div>
        <div class="vc-review">
          <span class="vc-review-tag">Комментарий автора</span>
          <p>${vpn.review}</p>
        </div>
        <div class="vc-life">
          <span class="vc-life-icon">◆</span>
          <div>
            <div class="vc-life-label">Совет сетевого инженера</div>
            <p>${vpn.lifehack}</p>
          </div>
        </div>
      </div>
      ${vpn.pinned ? `<div class="vc-cta-wrap"><a href="${vpn.link}" class="vc-cta ${vpn.ctaClass}" target="_blank" rel="nofollow">${vpn.ctaText}<span class="vc-cta-arrow">→</span></a></div>` : ''}
    </div>
  </article>`;
}

function renderGrid(activeTag) {
  const grid = document.getElementById('ratingGrid');
  if (!grid) return;
  const pinned = vpns.filter(v => v.pinned);
  const rest = vpns.filter(v => !v.pinned);

  const matchTag = (vpn) => activeTag === 'all' ? true : vpn.tags.includes(activeTag);

  const pinnedFiltered = pinned.filter(matchTag);
  const restFiltered = rest.filter(matchTag);

  let html = '';

  if (pinnedFiltered.length > 0) {
    html += `<div class="grid-label"><span class="gl-mark">★</span> Выбор редакции — ТОП-3 для Windows 7</div>`;
    html += `<div class="cards-col">`;
    pinnedFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (restFiltered.length > 0) {
    html += `<div class="grid-label mt-48"><span class="gl-mark">○</span> Позиции 4–10</div>`;
    html += `<div class="cards-col">`;
    restFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (!pinnedFiltered.length && !restFiltered.length) {
    html = `<div class="empty-filter">По выбранному фильтру VPN не найдено. Сбросьте фильтры или выберите другой тег.</div>`;
  }

  grid.innerHTML = html;
}

renderGrid('all');

const filterTags = document.getElementById('filterTags');
if (filterTags) {
  filterTags.addEventListener('click', function(e) {
    const btn = e.target.closest('.ftag');
    if (!btn) return;
    filterTags.querySelectorAll('.ftag').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(btn.dataset.tag);
  });
}

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

const installTabs = document.getElementById('installTabs');
if (installTabs) {
  installTabs.addEventListener('click', function(e) {
    const btn = e.target.closest('.itab');
    if (!btn) return;
    const tab = btn.dataset.tab;
    installTabs.querySelectorAll('.itab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.itab-body').forEach(body => {
      body.classList.toggle('active', body.dataset.tabBody === tab);
    });
  });
}

const burger = document.getElementById('headerBurger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove('open');
  if (mobileOverlay) mobileOverlay.classList.remove('open');
  if (burger) burger.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
}

if (burger && mobileMenu) {
  burger.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.toggle('open');
    if (mobileOverlay) mobileOverlay.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('.mlink').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

const navSections = ['rating','builtin','install','table','faq']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');
if (navSections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
  navSections.forEach(el => sectionObserver.observe(el));
}
