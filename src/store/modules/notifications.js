const state = {
  notifications: [
    {
      id: 0,
      type: 'review',
      date: '2 hr ago',
      from: 'Jessica Liu',
      to: 'Pattaya nightlife with Local thai host: Sindy L.',
      positive: true,
    },
    {
      id: 1,
      type: 'system',
      date: '1 day ago',
      title: 'Your experience',
      to: '1 Day trip for traditional in south of Thailand',
      message: 'Has been approved',
    },
    {
      id: 2,
      type: 'request',
      date: 'March 31',
      from: 'Kel Duchadin',
      to: 'Pattaya nightlife with Local thai host: Sindy L.',
      on: 'June 14, 2018',
    },
    {
      id: 3,
      type: 'review',
      date: 'March 12',
      from: 'Delen McEledery',
      to: '1 Day trip in Bangkok',
      positive: true,
    },
    {
      id: 4,
      type: 'system',
      date: 'February 8',
      title: 'Your passport updated',
      to: null,
      message: 'is successful',
    },
    {
      id: 5,
      type: 'review',
      date: 'December 15, 2017',
      from: 'Michael Bayley',
      to: 'Nightlife in Khaosan road, Bangkok',
      positive: false,
    },
    {
      id: 6,
      type: 'review',
      date: 'December 12, 2017',
      from: 'Delen McEledery',
      to: '1 Day trip in Bangkok',
      positive: true,
    },
    {
      id: 7,
      type: 'system',
      date: 'December 11, 2017',
      title: 'Your passport updated',
      to: null,
      message: 'is successful',
    },
    {
      id: 8,
      type: 'review',
      date: 'December 10, 2017',
      from: 'Delen McEledery',
      to: '1 Day trip in Bangkok',
      positive: true,
    },
    {
      id: 9,
      type: 'review',
      date: 'December 10, 2017',
      from: 'Joel Maddenly',
      to: '1 Day trip in Bangkok',
      positive: true,
    },
  ],
};

const getters = {
  notifications: (state) => {
    return state.notifications;
  },
};

const mutations = {

};

const actions = {

};

export default {
  state,
  getters,
  actions,
  mutations,
};
