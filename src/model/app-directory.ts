import { App } from './app';

export interface AppDirectory {
  name: string;
  description: string;
  apps: App[];
}
