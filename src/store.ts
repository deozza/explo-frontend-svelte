import { writable, type Writable } from 'svelte/store';
import { readable } from 'svelte/store';

export const userToken: Writable<string|null> = writable(null);