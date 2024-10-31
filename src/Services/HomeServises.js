import HttpClient from "../Utils/HttpClient"
import MainStorage from "../Utils/MainStorage";

const getAccount = async () => {
    return MainStorage.get('account');
}

const setAccount = async (data) => {
    return MainStorage.set('account', data);
}
async function setToken(data) {
    return await MainStorage.set('token', data);
}
async function uploadimage(data) {
    let endpoint = '/business-account/upload-image';
    return HttpClient.upload(endpoint, 'POST', data, {});
};
const getOccupationList = async () => {
    return HttpClient.post('/occupations');
}
const getEducationList = async () => {
    return HttpClient.post('/educations');
}
const getStatusList = async () => {
    return HttpClient.post('/marital-status');
}
const getSubscriptionList = async () => {
    return HttpClient.post('/subscription-list');
}
const getSubscriptionPayment = async (data) => {
    return HttpClient.post('/subscription-purchase',data);
}


const HomeService = {
    getAccount,
    setAccount,
    setToken,
    uploadimage,
    getOccupationList,
    getEducationList,
    getStatusList,
    getSubscriptionList,
    getSubscriptionPayment
}

export default HomeService;