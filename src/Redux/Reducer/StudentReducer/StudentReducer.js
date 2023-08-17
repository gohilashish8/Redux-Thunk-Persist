const initialState = {
    students: []
  };

  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_STUDENT":
          return {
            ...state,
            students: [...state.students, action.payload],
          };
        case "DELETE_STUDENT":
            const deletedStudent =  state.students.filter((val) => val.id  !== action.payload )

          return {
            ...state,
            students: deletedStudent
          };
        case "UPDATE_STUDENT":
            const update =  state.students.map((val) => val.id === action.payload.id ? action.payload : val )

          return {
            ...state,
            students: update
          };

        default:
          return state;
      }
  }

  export default  studentReducer
