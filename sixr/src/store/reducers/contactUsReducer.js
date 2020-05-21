const intialState = {
    name:"",
    email:"",
    comment:"",
    isSubmitted:false,
    isLoading:false,
    error: false,
    errorMessage:"Please Enter Your Email Address"
}

const contactUsReducer = (state = intialState, action ) => {
    switch(action.type) {
        default :
        return state
    }
}

export default contactUsReducer