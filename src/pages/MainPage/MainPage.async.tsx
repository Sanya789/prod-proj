import React from 'react';

export const MainPageAsync = React.lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      //ЭТО ЧИСТО ДЛЯ ТЕСТА СУСПЕНСА И АСИНХРОННОЙ ПОДГРУЗКИ
      setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);
