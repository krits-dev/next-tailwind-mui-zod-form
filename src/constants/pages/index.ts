import { MainPage } from './main';
import { LoginPage } from './login';

export { MainPage, LoginPage };

/* eslint-disable @typescript-eslint/no-unused-vars */
const pages = { MainPage, LoginPage } as const;

export type PageTitleType = (typeof pages)[keyof typeof pages]['title'];
