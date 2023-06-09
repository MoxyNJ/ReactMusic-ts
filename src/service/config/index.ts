// 开发
const devBaseURL = 'https://musicapi.ninjee.top/';
// 生产
const proBaseURL = 'https://musicapi.ninjee.top/';

const TIME_OUT = 10000;
const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export { BASE_URL, TIME_OUT };
