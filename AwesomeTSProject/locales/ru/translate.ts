import {ITranslate} from '../types';
import {pluralRU} from '../constants';

const translates: ITranslate = {
  name: 'Имя',
  email: 'Email',
  password: 'Пароль',
  fieldPlaceholder: (value: string) => `пожалуйста, введите ваш ${value}`,
  signIn: 'ВОЙТИ',
  signUp: 'РЕГИСТРАЦИЯ',
  haveRegister: 'Уже есть регистрация? Круто, тогда жми тут:',
  notRegister: 'Еще нет регистрации? Это просто, жми тут:',
  posts: 'Посты',
  createPost: 'Создать пост',
  imageScreen: 'Картинки',
  layoutScreen: 'Верстка',
  contexScreen: 'Контекст',
  validationScreen: 'Валидация',
  webWiewScren: 'Веб Вью',
  createPostTitle: 'Экран создания поста',
  goToAllPost: 'Ты можешь перейти ко всем постам:',
  postsTitle: 'Мои посты',
  logout: 'выйти',
  viewModal: 'показать модалку',
  nativeModal: 'открыть нативную модалку',
  title: 'Экран переводов',
  button: 'Какое-то действие',
  welcome: (name: string) => `Добро пожаловать, ${name}`,
  canBuy: (value: number) =>
    `Я могу купить ${value} ${pluralRU(value, ['ящик', 'ящика', 'ящиков'])}`,
  navStack: 'Стек',
  navNativeStack: 'Нативный Стек',
  navDrawer: 'Драуер',
  navTopMatherial: 'Верх Материал',
  navBottomMatherial: 'Низ Мат.',
  imagesTitle: 'Экран Картинок',
  coontextTitle: 'Получение списка пользователей',
  clearListBtn: 'Очистить список',
  getUserBtn: 'Получить список',
  columnBtn: (value: number) =>
    `${value} - ${pluralRU(value, ['СТОЛБИК', 'СТОЛБЦА'])}`,
  nameFieldPlaceholder: 'Имя*',
  nameFieldValidMessage: 'Должно быть не менее З символов',
  emailFieldPlaceholder: 'Email*',
  emailFieldValidMessage: 'Недопустимая электронная почта',
  phoneFieldPlaceholder: 'Телефон*',
  phoneFieldValidMessage: 'Должно быть не менее 10 символов',
  passwordFieldPlaceholder: 'Пароль*',
  passwordFieldValidMessage:
    'Должно быть не менее 8 знаков (одна заглавная, одна строчная буквы и по меньшей мере одна цифра)',
  hobbySelectPlaceholder: 'Выбери свое хобби*',
  reminderTitle: 'Установить напоминание',
  changeDateBtn: 'Выбрать дату',
  setTimeBtn: 'Установить время',
  agreedTerms: 'Я согласен с правилами сервиса',
  sendBtn: 'ОТПРАВИТЬ',
  webViewTitle: 'Привет, это экран демонстрации Веб Вью',
};

export default translates;
