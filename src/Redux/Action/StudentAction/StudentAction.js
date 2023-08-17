export const AddStudent = (data) => {
    return {
        type : "ADD_STUDENT",
        payload : data
    }
}
export const deleteStudent = (data) => {
    return {
        type : "DELETE_STUDENT",
        payload : data
    }
}
export const updateStudent = (data) => {
    return {
        type : "UPDATE_STUDENT",
        payload : data
    }
}

