import axios from '@/plugins/axios'

export const getVPNs = () => axios.get('/public/client/data/vpns.json');

export const getProduct = () => axios.get('/public/client/data/product.json');

export const getFaq = () => axios.get('/public/client/data/question.json');

export const getBlog = (offset,limit) => axios.get('/articleApi/getArticle',{params: {offset,limit}})

export const getReview = () => axios.get('/reviewApi/selectReviewNav');

export const sendMail = ({name,email,content}) => axios.post('/concatApi/sendMail',{name,email,content});

export const getArticleBanner = () => axios.get('/articlebannerApi/getArticlebanner');

export const getArticleList = ({offset,limit}) => axios.get('/articleApi/getArticle',{params: {offset,limit}});

export const getArticleDetail = (id) => axios.post('/articleApi/getOneArticle',{id});

export const getReviewInfo = (productId) => axios.post('/reviewApi/selectAllInfo',{productId});

export const getComparisonBanner = () => axios.get('/companiesbannerApi/selectCompaniesbanner');

export const getComparison = () => axios.get('/companiesApi/selectCompaniesByOrder');

export const getTopVPNs = () => axios.get('/toptenApi/selectTopten');

export const getTopFive = () => axios.get('/productAPi/selectTopfive');

export const getAuthor = () => axios.get('/authorApi/getAuthor');