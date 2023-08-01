export const selectUser = state => state.user.user;
export const selectIsLoading = state => state.user.isLoading;
export const selectError = state => state.user.error;

export const selectPets = state => state.user.user.pets;

// export const selectPetsError = state => state.user.petError;
// export const selectUserError = state => state.user.userError;

// export const getUserError = state => {
//   const petError = selectPetsError(state.user);
//   const userError = selectUserError(state);
//   console.log('pet', petError);
//   console.log('user', userError);

//   if (!userError && petError) {
//     return 'Pets not found';
//   } else if (userError && !petError) {
//     return 'User not found';
//   } else return 'User not found';
// };
