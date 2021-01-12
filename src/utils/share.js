/**
 * 分享到 Twitter
 * @param {*} title 
 * @param {*} url 
 */
export const shareToTwitter = (title,url) => {

    let twTitle = title,
        twUrl = url;
    window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(twTitle)).concat(' ').concat(encodeURIComponent(twUrl)))

}
/**
 * 分享到Facebook
 * @param {*} title 
 * @param {*} url 
 */
export const shareToFacebook = (title,url) => {
    let t = title,
        u = url;
    window.open("http://www.facebook.com/sharer.php?u="+ encodeURIComponent(u) + "&t="+ encodeURIComponent(t), "sharer","toolbar=0,status=0,width=626,height=436");
}