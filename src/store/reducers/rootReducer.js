const initState = {
  users: [
    { id: 1, name: "Hoa Hoong" },
    { id: 2, name: "Lang la" },
    { id: 3, name: "Hoa Mai" },
    { id: 4, name: "Hoa Hue" },
  ],
  posts: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log("run into delete user", action);
      let users = state.users;
      users = users.filter((item, index) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };
      break;
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 1000);
      let user = { id: id, name: `random ${id}` };
      return {
        ...state,
        users: [...state.users, user],
      };
      break;

    default:
      return state;
  }
};

export default rootReducer;
