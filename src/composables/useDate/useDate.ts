import { useDateFormat } from '@vueuse/core';

export const useDate = () => {
  const datePlusDays = (plusDays: number) =>
    useDateFormat(new Date(Date.now() + 60 * 60 * 24 * 1000 * (plusDays + 1)), 'DD.MM').value;

  return {
    datePlusDays,
  };
};
