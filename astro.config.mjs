import db from '@astrojs/db';
import { defineConfig } from 'astro/config';
import webVitals from '@astrojs/web-vitals';

export default defineConfig({
  integrations: [db(), webVitals()],
  output: 'hybrid',
});
