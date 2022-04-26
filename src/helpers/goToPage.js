import eventBus from '@/eventBus';

export const goToPage = (pageName, pageParams) => {
  eventBus.$emit('goToPage', pageName, pageParams);
};
