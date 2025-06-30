import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
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



export const userLoginAction=createAsyncThunk('/auth/login',

  async(data)=>{
    const response =await axios.post('http://localhost:5000/api/auth/login',
      data,
      {
        withCredentials:true,
      }
    )
    return response.data
  }
)

export const authCheck=createAsyncThunk('/auth/authcheck',

  async()=>{
    const response =await axios.get('http://localhost:5000/api/auth/auth-check',
      
      {
        withCredentials:true,
       headers: {
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
}

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
      })


       .addCase(userLoginAction.pending, (state) => {
        state.isLoading = true;
      })
    .addCase(userLoginAction.fulfilled, (state, action) => {
  state.isLoading = false;
  state.user = action.payload.success ? action.payload.user : null;
  state.isAuthenticated = action.payload.success;
})
      .addCase(userLoginAction.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })


      .addCase(authCheck.pending, (state) => {
        state.isLoading = true;
      })
.addCase(authCheck.fulfilled, (state, action) => {
  console.log("AuthCheck Success:", action.payload); // 👈 Debug this
  state.isLoading = false;
  state.user = action.payload.success ? action.payload.user : null;
  state.isAuthenticated = action.payload.success;
})


      .addCase(authCheck.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});





export const { setAuthenticated, setLoading } = authSlice.actions;

export const authReducer = authSlice.reducer;
