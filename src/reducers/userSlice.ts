import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import userRequester from 'api/userRequester';
import { LoginType, ProfileType, SignUpType } from 'type/userType';



export interface UserSliceType {
  userProfile: ProfileType | null ;
  isLoading: boolean

}


const initialState: UserSliceType = {
  userProfile: null ,
  isLoading: false,
};


/// create async thunk

export const userLogin = createAsyncThunk(
  'user/Login',
  async (data: LoginType, thunkAPI) => {

    const dataLogin = await userRequester.userLogin(data);
    return dataLogin.data

  }
);

/// register
export const userSigUp = createAsyncThunk(
  'user/SigUp',
  async (data: SignUpType, thunkAPI) => {

    const res = await userRequester.userSigUp(data);
    console.log(res.data)

    return res

  }
)





export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(userLogin.fulfilled, (state , action) => {
      state.isLoading = false
      state.userProfile = action.payload.content

    });

    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false
    })

  }


});

export const { } = userSlice.actions;

export default userSlice.reducer;
