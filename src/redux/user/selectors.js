// export const selectFilter = state => state.filter;

export const selectUser = state => state.user.user;
export const selectIsLoading = state => state.user.isLoading;
export const selectError = state => state.user.error;

export const selectPets = state => state.user.user.pets;

// export const getFiltredContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
//   );
// };
