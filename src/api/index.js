import axios from '@/plugins/axios'

/**
 * 获取推荐的VPN
 */
export const getVPNs = () => axios.get('/public/client/data/vpns.json');

/**
 * 获取所有产品信息
 */
export const getProduct = () => axios.get('/public/client/data/product.json');

// 获取所有问题信息
export const getFaq = () => axios.get('/public/client/data/question.json');
// 获取博客
export const getBlog = (offset,limit) => axios.get('/articleApi/getArticle',{params: {offset,limit}})
// 查询有几篇review
export const getReview = () => axios.get('/reviewApi/selectReviewNav');

// 根据reviewid 获取review详细信息
export const getReviewInfo = (productId) => axios.post('/reviewApi/selectAllInfo',{productId});
// 发送邮件
export const sendMail = ({name,email,content}) => axios.post('/concatApi/sendMail',{name,email,content});

// 获取 
export const getArticleBanner = () => axios.get('/articlebannerApi/getArticlebanner');

// 获取文章列表
export const getArticleList = ({offset,limit}) => axios.get('/articleApi/getArticle',{params: {offset,limit}});

// 根据文章id 获取该篇文章详细信息
export const getArticleDetail = (id) => axios.post('/articleApi/getOneArticle',{id});



export const getComparisonBanner = () => axios.get('/companiesbannerApi/selectCompaniesbanner');

export const getComparison = () => axios.get('/companiesApi/selectCompaniesByOrder');

export const getTopVPNs = () => axios.get('/toptenApi/selectTopten');

export const getTopFive = () => axios.get('/productAPi/selectTopfive');

export const getAuthor = () => axios.get('/authorApi/getAuthor');