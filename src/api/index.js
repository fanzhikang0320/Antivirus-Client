import axios from '@/plugins/axios'

export const getProduct = () => axios.get('http://localhost:8080/data/product.json');

export const getFaq = () => axios.get('http://localhost:8080/data/question.json');

export const getBlog = (offset,limit) => axios.get('/articleApi/getArticle',{params: {offset,limit}})

export const getReview = () => axios.get('/reviewApi/selectReviewNav');

export const sendMail = ({name,email,content}) => axios.post('/concatApi/sendMail',{name,email,content});

export const getArticleBanner = () => axios.get('/articlebannerApi/getArticlebanner');

export const getArticleList = ({offset,limit}) => axios.get('/articleApi/getArticle',{params: {offset,limit}});

export const getArticleDetail = (id) => axios.post('/articleApi/getOneArticle',{id});

export const getReviewInfo = (productId) => axios.post('/reviewApi/selectAllInfo',{productId});