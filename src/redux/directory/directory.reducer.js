const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/Yth8QDq/hats2.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/MfT53Yz/jackets2.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'shoes',
          imageUrl: 'https://i.ibb.co/tpPz638/shoes5.jpg',
          id: 3,
          linkUrl: 'shop/shoes'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/KycBjyJ/womens4.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/6twQpD9/mens2.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;