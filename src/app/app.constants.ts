import { isDevMode } from "@angular/core";

export const BRAND = 'Iota Airlines';

export const API_URL = isDevMode() ? 'http://localhost:3000' : 'https://iota-airlines-api.vercel.app';
