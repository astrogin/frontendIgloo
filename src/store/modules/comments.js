const state = {
  comments: [
    {
      id: 0,
      author: 'Jessica Liu',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscisou satwa gwa',
      date: '2 hr ago',
    },
    {
      id: 1,
      author: 'Tommy Hilley',
      text: 'Aliquip ex ea commodo consequat',
      date: '1 day ago',
    },
    {
      id: 2,
      author: 'Kel Duchadin',
      text: 'Duis aute irure dolor',
      date: 'March 31',
    },
    {
      id: 3,
      author: 'Delen McEledery',
      text: 'Lotam rem aperiam',
      date: 'March 12',
    },
  ],
};

const getters = {
  comments: (state) => {
    return state.comments;
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
