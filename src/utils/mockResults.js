import dunyaRecordings from './dunya-recordings.json';

export const getResults = () => new Promise(resolve => resolve(dunyaRecordings));
