
const initialState = {
    staffs:[
        {
          name: "abanga",
          contact: 1245789,
          type: 'ICT Department',
          comment: 'Please kindly improve the Internet access at the facility',
          id: "ieu787"
        },
        {
          name: "dangote",
          contact: 54872154,
          type: 'Finance Department',
          comment: 'We need increase in salary',
          id: "ncv485"
        }
      ]
}

const usersReducers = (state = initialState, action) =>{
    switch (action.type) {
        case "ADD_STAFF":
            const newStaff = {
                name: action.payload.name,
                contact: action.payload.contact,
                type: action.payload.type,
                comment: action.payload.comment
            };
            return{...state, staffs:[...state.staffs, newStaff]};
            
            case "DELETE_STAFF":
              const filteredStaffs = state.staffs.filter(staff => staff.id !==action.payload);
              return {...state, staffs:filteredStaffs};

              case "EDIT_STAFF":
                const updatedStaffsInfo = state.staffs.map(staff =>{
                  if (staff.id === action.staff_id) {
                    return {...staff, ...action.updated_Staff}
                  } else {
                    return staff;
                  }
                });
                return {...state, staffs: updatedStaffsInfo}
    
        default:
            return state;
    }
};

export default usersReducers;