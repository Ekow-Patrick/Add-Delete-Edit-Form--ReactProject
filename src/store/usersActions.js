
export const addStaff = (staff) =>{
    return {
        type: 'ADD_STAFF',
        payload: staff
    }
}

export const deleteStaff = (staff_id) =>{
    return {
        type: 'DELETE_STAFF',
        payload: staff_id
    }
}

export const editStaff = (staff_id, updated_Staff) =>{
    return {
        type: 'EDIT_STAFF',
        payload: staff_id,
        updated_Staff: updated_Staff
    }
}

