import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
   user: null
};

export const userRegisterAction=createAsyncThunk('/auth/register',

  async(data)=>{
    const response =await axios.post('http://localhost:5000/api/auth/register',
      data,
      {
        withCredentials:true,
      }
    )
    return response.data
  }
)




const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegisterAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userRegisterAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = false; // ✅ Set to true if you want to consider them logged in after registration
      })
      .addCase(userRegisterAction.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});


export const { setAuthenticated, setLoading } = authSlice.actions;

export const authReducer = authSlice.reducer;
