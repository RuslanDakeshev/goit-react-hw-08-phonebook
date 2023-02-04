import { register, login, logout, fetchCurrentUser } from './auth-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,

  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder

      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
      })

      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
      })

      .addCase(logout.fulfilled, state => {
        state.token = null;
        state.user = { name: '', email: '' };
      })

      .addCase(fetchCurrentUser.pending, state => {
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.error = payload;
        state.isFetchingCurrentUser = false;
      })

      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          fetchCurrentUser.pending
        ),
        state => {
          state.isLoggedIn = true;
        }
      )

      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          logout.fulfilled,
          fetchCurrentUser.fulfilled
        ),
        (state, { payload }) => {
          state.isLoggedIn = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          fetchCurrentUser.rejected
        ),
        (state, { payload }) => {
          state.isLoggedIn = false;
          state.error = payload;
        }
      ),
});



// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.pending]: state => {
//       state.isLoggedIn = true;
//     },
//     [register.fulfilled]: (state, { payload: { user, token } }) => {
//       state.isLoggedIn = false;
//       state.error = null;
//       state.token = token;
//       state.user = user;
//     },
//     [register.rejected]: (state, { payload }) => {
//       state.isLoggedIn = false;
//       state.error = payload;
//     },

//     [login.pending]: state => {
//       state.isLoggedIn = true;
//     },
//     [login.fulfilled]: (state, { payload: { user, token } }) => {
//       state.isLoggedIn = false;
//       state.error = null;
//       state.token = token;
//       state.user = user;
//     },
//     [login.rejected]: (state, { payload }) => {
//       state.isLoggedIn = false;
//       state.error = payload;
//     },

//     [logout.pending]: state => {
//       state.isLoggedIn = true;
//     },
//     [logout.fulfilled]: state => {
//       state.isLoggedIn = false;
//       state.error = null;
//       state.token = null;
//       state.user = { name: '', email: '' };
//     },
//     [logout.rejected]: (state, { payload }) => {
//       state.isLoggedIn = false;
//       state.error = payload;
//     },

//     [fetchCurrentUser.pending]: state => {
//       state.isLoggedIn = true;
//       state.isFetchingCurrentUser = true;
//     },
//     [fetchCurrentUser.fulfilled]: (state, { payload }) => {
//       state.isLoggedIn = false;
//       state.error = null;
//       state.user = payload;
//       state.isFetchingCurrentUser = false;
//     },
//     [fetchCurrentUser.rejected]: (state, { payload }) => {
//       state.isLoggedIn = false;
//       state.error = payload;
//       state.isFetchingCurrentUser = false;
//     },
//   },
// });

export default authSlice.reducer;
