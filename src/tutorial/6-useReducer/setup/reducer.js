//What is reducer function?
//It gets a specific state and an action to do (ACTION TYPE). Action describes what needs to do with a state (how to modify it).
//It should return a STATE
export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const allClients = [...state.people, action.payload];
    return {
      ...state,
      people: allClients,
      isModalOpen: true,
      modalContent: 'Client was added',
    };
  }

  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Name is empty',
    };
  }

  if (action.type === 'DELETE_CLIENT') {
    const filteredClients = state.people.filter(
      (el) => el.id !== action.payload
    );
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Client was deleted',
      people: filteredClients,
    };
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    };
  } else {
    throw new Error('Try again!');
  }
};
