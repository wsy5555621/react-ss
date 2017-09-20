import { CLEAR_USERBAR_DATA, FETCHED_USERBAR_DATE } from '../actions';
 
const initialState = {
    dataReady: true,
    menuItems: [
      {
        label: 'HOME',
        link: '/',
        icon: 'http://p1.music.126.net/oSHbq-HyxDsXR9zw4hrqJA==/19008357021133313.jpg?param=32y32'
      },
      {
        label: 'PROD',
        link: '/prod',
        icon: 'http://p1.music.126.net/41iNfKY6jxszWmm5Z6U_zQ==/19122706230614675.jpg?param=32y32'
      },
      {
        label: '啥子类',
        link: '/userinfo',
        userProfile: 'http://p1.music.126.net/vreYkg3Hz5rKJpITlIHISQ==/18689498650753585.jpg'
      },
      {
        label: 'USERINFO',
        link: '/userinfo',
        icon: 'http://p1.music.126.net/Fkwt5yg53EWf79Y-VQnJSg==/18530069464921234.jpg?param=32y32'
      },
      {
        label: 'CONTACT',
        link: '/contact',
        icon: 'http://p1.music.126.net/f0-OG0ArQWe4SyDSdBr05Q==/109951162985528213.jpg?param=32y32'
      }
  ]
};

export const userBar = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_USERBAR_DATA:
      return Object.assign({}, state, {dateReady: true, menuItems: []});
    case FETCHED_USERBAR_DATE:
      return Object.assign({}, {dateReady: false, menuItems: action.data});
    default:
      return state;
  }
};
