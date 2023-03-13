import { Theme } from './theme';

export interface GeneralSkin {
  width: string;
  backgroundColor: string;
  color: string;
  transition: string;
}

export const generalSkin = (theme: Theme): GeneralSkin => ({
  width: '100%',
  backgroundColor: theme.main.background,
  color: theme.main.textColor,
  transition:
    'background 0.3s ease-in 0.1s, color 0.4s ease-out 0s, border 0.4s ease-out 0s',
});
