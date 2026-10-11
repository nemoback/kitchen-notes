import { assetPath, stripBase } from './paths';

export const languages = ['cs', 'en', 'ru'] as const;
export type Language = typeof languages[number];
export const languageNames = { cs: 'Čeština', en: 'English', ru: 'Русский' };

export function localizedPath(language: Language, path = '/') {
  return assetPath(`${language === 'cs' ? '' : `/${language}`}${path}`);
}

export function unlocalizedPath(path: string) {
  return stripBase(path).replace(/^\/(en|ru)(?=\/|$)/, '') || '/';
}

const en = {
  siteTitle: 'KitchenNotes — recipes for real life', siteDescription: 'A considered collection of recipes for the everyday table.',
  skip: 'Skip to content', homeLabel: 'KitchenNotes home', navigation: 'Main navigation', recipes: 'Recipes', kitchen: 'Our kitchen',
  search: 'Find a recipe or ingredient', menu: 'Open navigation', closeMenu: 'Close navigation', language: 'Choose language',
  footerOne: 'Good food, shared often.', footerTwo: 'A little inspiration for your everyday table.', backTop: 'Back to top ↑', footerNote: 'Made for the joy of gathering.',
  heroEyebrow: 'A little something for the table', heroOne: 'Make room', heroTwo: 'for something', heroThree: 'good.',
  heroIntro: 'Recipes worth slowing down for — and simple enough to make any day feel like an occasion.', explore: 'Explore the recipes',
  noteOne: 'Thoughtful food.', noteTwo: 'Everyday kind of magic.', weekTable: "This week’s table", caption: 'Gather, taste, repeat.',
  goodStuff: 'The good stuff', introOne: 'Not just recipes.', introTwo: 'A reason to gather.',
  favourite: 'Find your next favourite', collectionTitle: 'From our kitchen', collectionIntro: 'Season-led, full of flavour, and made to be passed around.',
  filterLabel: 'Filter recipes by category', countLabel: 'Recipes to love:', minutes: 'min', prep: 'Prep', cook: 'Cook', total: 'Total', getCooking: 'Get cooking',
  emptyTitle: 'No recipes found just yet.', emptyText: 'Try another ingredient or clear your filters.',
  quoteOne: 'The best memories are made', quoteTwo: 'around the table.', quoteCredit: 'A note from our kitchen',
  kitchenDescription: 'Meet the family kitchen behind KitchenNotes: fresh ingredients, recipes for real life, and room for everyone at the table.',
  kitchenOne: 'A family kitchen,', kitchenTwo: 'made for being together.',
  kitchenLede: 'We’re a family of four who believe everyday food is better when everyone has a place at the counter.', browseOurs: 'Browse our recipes',
  familyAlt: 'A family of four preparing dinner together around a wooden kitchen island.', familyCaption: 'Four aprons, one good meal in progress.',
  about: 'A little about us', storyOne: 'Made at home.', storyTwo: 'Shared with you.',
  storyParagraphs: [
    'KitchenNotes grew from the meals we make together: something fresh to chop, a pot bubbling away, and small helpers finding a job. Our kitchen is bright, a little busy, and always making room for one more.',
    'We share recipes with clear steps, familiar ingredients, and plenty of flavour. Some are quick enough for a weeknight; others ask you to slow down and stay at the table a little longer.',
    'However you cook, we hope you find something here that makes an ordinary day feel special.',
  ],
  wayWeCook: 'The way we cook', valuesTitle: 'Good food for real life.',
  values: [
    { title: 'Fresh and considered', text: 'Seasonal ingredients and little details that make a meal memorable.' },
    { title: 'Made for everyday', text: 'Comforting recipes with clear steps, whether dinner is quick or unhurried.' },
    { title: 'Better when shared', text: 'Room for curious cooks, little helpers, and one more place at the table.' },
  ],
  home: 'Home', madeToShare: 'Made to be shared', gather: 'Gather these', ingredients: 'Ingredients',
  ingredientTip: 'Good ingredients make good food. Choose the best you can find, and enjoy the process.',
  takeTime: 'Take your time', method: 'Let’s make it', steps: 'Steps', endnote: 'Bring it to the table, pass it around, and make it your own.',
  keepGoing: 'Keep the good things going', more: 'More from our kitchen', browseAll: 'Browse all recipes',
};

const cs: typeof en = {
  siteTitle: 'KitchenNotes — recepty pro každý den', siteDescription: 'Pečlivě vybrané recepty pro každodenní vaření.',
  skip: 'Přejít na obsah', homeLabel: 'KitchenNotes — úvodní stránka', navigation: 'Hlavní navigace', recipes: 'Recepty', kitchen: 'Naše kuchyně',
  search: 'Najít recept nebo surovinu', menu: 'Otevřít navigaci', closeMenu: 'Zavřít navigaci', language: 'Vybrat jazyk',
  footerOne: 'Dobré jídlo chutná nejlépe společně.', footerTwo: 'Trocha inspirace pro váš každodenní stůl.', backTop: 'Zpět nahoru ↑', footerNote: 'Pro radost ze společných chvil.',
  heroEyebrow: 'Něco dobrého na stůl', heroOne: 'Místo pro', heroTwo: 'něco', heroThree: 'dobrého.',
  heroIntro: 'Recepty, u kterých stojí za to zpomalit — a které promění obyčejný den v malou slavnost.', explore: 'Prohlédnout recepty',
  noteOne: 'Jídlo připravené s péčí.', noteTwo: 'Malá kouzla všedního dne.', weekTable: 'Na stole tento týden', caption: 'Sejděte se, ochutnejte, zopakujte.',
  goodStuff: 'To nejlepší', introOne: 'Více než recepty.', introTwo: 'Důvod sejít se.',
  favourite: 'Najděte si nový oblíbený recept', collectionTitle: 'Z naší kuchyně', collectionIntro: 'Sezónní recepty plné chuti, o které se budete chtít podělit.',
  filterLabel: 'Filtrovat recepty podle kategorie', countLabel: 'Recepty k zamilování:', minutes: 'min', prep: 'Příprava', cook: 'Vaření', total: 'Celkem', getCooking: 'Pustit se do vaření',
  emptyTitle: 'Žádný recept jsme nenašli.', emptyText: 'Zkuste jinou surovinu nebo zrušte filtr.',
  quoteOne: 'Nejkrásnější vzpomínky vznikají', quoteTwo: 'kolem společného stolu.', quoteCredit: 'Vzkaz z naší kuchyně',
  kitchenDescription: 'Poznejte rodinnou kuchyni KitchenNotes: čerstvé suroviny, každodenní recepty a místo u stolu pro každého.',
  kitchenOne: 'Rodinná kuchyně,', kitchenTwo: 'kde jsme rádi spolu.',
  kitchenLede: 'Jsme čtyřčlenná rodina a věříme, že jídlo chutná lépe, když má u kuchyňské linky každý své místo.', browseOurs: 'Prohlédnout naše recepty',
  familyAlt: 'Čtyřčlenná rodina společně připravuje večeři u dřevěného kuchyňského ostrůvku.', familyCaption: 'Čtyři zástěry, jedno dobré jídlo.',
  about: 'Něco málo o nás', storyOne: 'Připraveno doma.', storyTwo: 'Sdíleno s vámi.',
  storyParagraphs: [
    'KitchenNotes vznikly z jídel, která připravujeme společně: čerstvá zelenina na krájení, bublající hrnec a malí pomocníci, kteří si najdou svůj úkol. Naše kuchyně je světlá, trochu rušná a vždy se v ní najde místo pro dalšího hosta.',
    'Sdílíme recepty s jasným postupem, známými surovinami a spoustou chuti. Některé zvládnete během pracovního týdne, jiné vás pozvou zpomalit a posedět u stolu o chvíli déle.',
    'Ať už vaříte jakkoli, doufáme, že tu najdete něco, co promění obyčejný den v příjemný zážitek.',
  ],
  wayWeCook: 'Jak vaříme', valuesTitle: 'Dobré jídlo pro každý den.',
  values: [
    { title: 'Čerstvě a s péčí', text: 'Sezónní suroviny a drobnosti, díky kterým si jídlo zapamatujete.' },
    { title: 'Pro každý den', text: 'Příjemné recepty s jasným postupem pro rychlé i poklidné večeře.' },
    { title: 'Společně chutná lépe', text: 'Místo pro zvídavé kuchaře, malé pomocníky a ještě jednoho hosta.' },
  ],
  home: 'Úvod', madeToShare: 'Pro společné chvíle', gather: 'Připravte si', ingredients: 'Suroviny',
  ingredientTip: 'Dobré suroviny dělají dobré jídlo. Vyberte si ty nejlepší a užijte si vaření.',
  takeTime: 'Krok za krokem', method: 'Pojďme vařit', steps: 'Kroků', endnote: 'Přineste jídlo na stůl, podělte se a připravte si ho po svém.',
  keepGoing: 'Další chutná inspirace', more: 'Další recepty z naší kuchyně', browseAll: 'Všechny recepty',
};

const ru: typeof en = {
  siteTitle: 'KitchenNotes — рецепты на каждый день', siteDescription: 'Продуманная подборка рецептов для повседневного стола.',
  skip: 'Перейти к содержимому', homeLabel: 'KitchenNotes — главная', navigation: 'Основная навигация', recipes: 'Рецепты', kitchen: 'Наша кухня',
  search: 'Найти рецепт или ингредиент', menu: 'Открыть навигацию', closeMenu: 'Закрыть навигацию', language: 'Выбрать язык',
  footerOne: 'Хорошая еда объединяет.', footerTwo: 'Немного вдохновения для вашего стола.', backTop: 'Наверх ↑', footerNote: 'Ради радости быть вместе.',
  heroEyebrow: 'Что-нибудь вкусное к столу', heroOne: 'Место для', heroTwo: 'чего-нибудь', heroThree: 'вкусного.',
  heroIntro: 'Рецепты, ради которых хочется замедлиться — и которые легко превращают обычный день в маленький праздник.', explore: 'Посмотреть рецепты',
  noteOne: 'Еда с заботой.', noteTwo: 'Маленькие чудеса каждый день.', weekTable: 'На столе на этой неделе', caption: 'Собирайтесь, пробуйте, повторяйте.',
  goodStuff: 'Самое вкусное', introOne: 'Больше, чем рецепты.', introTwo: 'Повод собраться.',
  favourite: 'Найдите новый любимый рецепт', collectionTitle: 'Из нашей кухни', collectionIntro: 'Сезонные рецепты с ярким вкусом, которыми хочется делиться.',
  filterLabel: 'Фильтр рецептов по категории', countLabel: 'Рецепты, которые полюбите:', minutes: 'мин', prep: 'Подготовка', cook: 'Готовка', total: 'Всего', getCooking: 'Готовить',
  emptyTitle: 'Рецепты не найдены.', emptyText: 'Попробуйте другой ингредиент или сбросьте фильтр.',
  quoteOne: 'Лучшие воспоминания рождаются', quoteTwo: 'за общим столом.', quoteCredit: 'Заметка из нашей кухни',
  kitchenDescription: 'Познакомьтесь с семейной кухней KitchenNotes: свежие продукты, рецепты на каждый день и место за столом для каждого.',
  kitchenOne: 'Семейная кухня,', kitchenTwo: 'где хорошо быть вместе.',
  kitchenLede: 'Нас четверо, и мы верим, что обычная еда становится вкуснее, когда у кухонного стола есть место для каждого.', browseOurs: 'Наши рецепты',
  familyAlt: 'Семья из четырёх человек вместе готовит ужин у деревянного кухонного острова.', familyCaption: 'Четыре фартука, один вкусный ужин.',
  about: 'Немного о нас', storyOne: 'Приготовлено дома.', storyTwo: 'Делимся с вами.',
  storyParagraphs: [
    'KitchenNotes выросли из блюд, которые мы готовим вместе: свежие овощи для нарезки, кипящая кастрюля и маленькие помощники со своим заданием. Наша кухня светлая, немного шумная, и в ней всегда найдётся место ещё для одного гостя.',
    'Мы делимся рецептами с понятными шагами, знакомыми ингредиентами и насыщенным вкусом. Одни подойдут для быстрого ужина в будни, другие предлагают замедлиться и задержаться за столом.',
    'Как бы вы ни готовили, надеемся, что здесь найдётся что-то, что сделает обычный день особенным.',
  ],
  wayWeCook: 'Как мы готовим', valuesTitle: 'Хорошая еда на каждый день.',
  values: [
    { title: 'Свежо и с заботой', text: 'Сезонные продукты и небольшие детали, благодаря которым блюдо запоминается.' },
    { title: 'Для повседневной жизни', text: 'Уютные рецепты с понятными шагами для быстрых и неспешных ужинов.' },
    { title: 'Вместе вкуснее', text: 'Место для любопытных кулинаров, маленьких помощников и ещё одного гостя.' },
  ],
  home: 'Главная', madeToShare: 'К общему столу', gather: 'Подготовьте продукты', ingredients: 'Ингредиенты',
  ingredientTip: 'Выбирайте хорошие продукты и готовьте с удовольствием.',
  takeTime: 'Шаг за шагом', method: 'Приготовление', steps: 'Шагов', endnote: 'Подавайте к столу и делитесь с близкими.',
  keepGoing: 'Ещё немного вдохновения', more: 'Ещё из нашей кухни', browseAll: 'Все рецепты',
};

export const messages = { cs, en, ru };
const categoryLabels: Record<Language, Record<string, string>> = {
  cs: { 'All recipes': 'Všechny recepty', Breakfast: 'Snídaně', Lunch: 'Oběd', Dinner: 'Večeře', Dessert: 'Dezerty', Vegetarian: 'Vegetariánské', Quick: 'Rychlé', Vegan: 'Veganské', Weekend: 'Víkend', Baking: 'Pečení', 'Gluten-free': 'Bez lepku', Gathering: 'Společné stolování', 'Comfort food': 'Domácí pohoda' },
  en: { 'All recipes': 'All recipes', Breakfast: 'Breakfast', Lunch: 'Lunch', Dinner: 'Dinner', Dessert: 'Dessert', Vegetarian: 'Vegetarian', Quick: 'Quick', Vegan: 'Vegan', Weekend: 'Weekend', Baking: 'Baking', 'Gluten-free': 'Gluten-free', Gathering: 'Gathering', 'Comfort food': 'Comfort food' },
  ru: { 'All recipes': 'Все рецепты', Breakfast: 'Завтрак', Lunch: 'Обед', Dinner: 'Ужин', Dessert: 'Десерты', Vegetarian: 'Вегетарианское', Quick: 'Быстро', Vegan: 'Веганское', Weekend: 'Выходной', Baking: 'Выпечка', 'Gluten-free': 'Без глютена', Gathering: 'Для компании', 'Comfort food': 'Домашний уют' },
};
export function categoryLabel(language: Language, value: string) {
  return categoryLabels[language][value] ?? value;
}
