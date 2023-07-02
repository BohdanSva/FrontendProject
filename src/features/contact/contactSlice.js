import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  disabled: true, // Send button disabled at launch
};

// Create the "search" slice
export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setSubject: (state, action) => {
      state.subject = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setDisabled: (state, action) => {
      state.disabled = action.payload;
    },
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
    setSubcriberName: (state, action) => {
      state.subName = action.payload;
    },
    setSubcriberEmail: (state, action) => {
      state.subEmail = action.payload;
    },
  },
});

// Export of reducers
export const { 
  setName, setEmail, setSubject, setMessage, setDisabled, setAlert, setSubcriberName, setSubcriberEmail, 
} = contactSlice.actions;

// Export of selector functions // allows us to select a value from the state
export const selectName = (state) => state.contact.name;
export const selectEmail = (state) => state.contact.email;
export const selectSubject = (state) => state.contact.subject;
export const selectMessage = (state) => state.contact.message;
export const selectDisabled = (state) => state.contact.disabled;
export const selectAlert = (state) => state.contact.alert;
export const selectSubscriberName = (state) => state.contact.subName;
export const selectSubscriberEmail = (state) => state.contact.subEmail;

export default contactSlice.reducer;
