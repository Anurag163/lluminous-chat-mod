import { writable } from 'svelte/store';
import { persisted } from './localstorage.js';

export const controller = writable(null);

export const params = persisted('params', {
	temperature: 1,
	maxTokens: 0,
	messagesContextLimit: 2,
});

export const config = persisted('config', {
	explicitToolView: false,
});

export const openaiAPIKey = persisted('openaiAPIKey', '');
export const openrouterAPIKey = persisted('openrouterkey', '');
export const groqAPIKey = persisted('groqAPIKey', '');
export const mistralAPIKey = persisted('mistralAPIKey', '');

export const remoteServer = persisted('remoteServer', { address: '', password: '' });
export const toolSchema = persisted('toolSchemaGroups', []);
