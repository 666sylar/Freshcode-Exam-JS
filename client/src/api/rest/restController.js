import http from '../interceptor';

//users
export const getUser = () => http.get('users/getUser');
export const registerRequest = data => http.post('users/registration', data);
export const loginRequest = data => http.post('users/login', data);
export const updateUser = data => http.patch('users/updateUser', data);
export const payment = data => http.post('users/pay', data.formData);
export const cashout = data => http.post('users/cashout', data);
export const changeMark = data => http.post('users/changeMark', data);

//contests
export const dataForContest = data =>
  http.get('contests/dataForContest', { params: data });
export const updateContest = data => http.post('contests/updateContest', data);
export const getCustomersContests = data =>
  http.get('contests/getCustomersContests', {
    params: {
      limit: data.limit,
      offset: data.offset,
      status: data.contestStatus,
    },
  });

export const getActiveContests = ({
  offset,
  limit,
  typeIndex,
  contestId,
  industry,
  awardSort,
  ownEntries,
}) =>
  http.get('contests/getAllContests', {
    params: {
      offset,
      limit,
      typeIndex,
      contestId,
      industry,
      awardSort,
      ownEntries,
    },
  });

export const getContestById = data =>
  http.get(`contests/getContestById/${data.contestId}`);
export const downloadContestFile = data =>
  http.get(`contests/downloadFile/${data.fileName}`);

//offers
export const setNewOffer = data =>
  http.post('offers/setNewOffer', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const setOfferStatus = data => http.post('offers/setOfferStatus', data);

//chats
export const getPreviewChat = () => http.get('chats/getPreview');
export const getDialog = data => http.get('chats/getChat', data);
export const newMessage = data => http.post('chats/newMessage', data);
export const changeChatFavorite = data => http.post('chats/favorite', data);
export const changeChatBlock = data => http.post('chats/blackList', data);
export const getCatalogList = data => http.get('chats/getCatalogs', data);
export const addChatToCatalog = data =>
  http.post('chats/addNewChatToCatalog', data);
export const createCatalog = data => http.post('chats/createCatalog', data);
export const deleteCatalog = data => http.delete('chats/deleteCatalog', data);
export const removeChatFromCatalog = data =>
  http.delete('chats/removeChatFromCatalog', data);
export const changeCatalogName = data =>
  http.patch('chats/updateNameCatalog', data);
