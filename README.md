**GoIT React and Node.js Course**\
Team: **Project-F**
# Team Project Name: ***Your Pets App (Front-end part)***

## Team Members List:

Team Lead (FrontEnd)- **[Olha Munaieva](https://github.com/OlgaMunaieva)**\
Scrum Master - **[Ganna Baranenko](https://github.com/ganna1008)**


SharedLayout, MainPage, ErrorPage, ModalNotice, MainContainer, Routes, GlobalStyles, Favicon - **[Olha Munaieva](https://github.com/OlgaMunaieva)**\
Header, Navigation, Burger menu, Pagination, ModalApproveAction, Loader on NoticesPage - **[Sergii Moroz](https://github.com/MorozSerhii)**\
RegisterPage, LoginPage, AuthForm, ModalCongrats, ModalApproveAction - **[Dmytro Dobrobatko](https://github.com/Dobryotec)**\
NoticesPage, Add to Favorite, Filter by Category, Filter by Age and Gender, Deleting Notice, ModalApproveAction - **[Ivan Tolmachov](https://github.com/IvanTolmachev)**\
ModalApproveAction, ModalNotice - **[Vitalii Grytsun](https://github.com/Deus2214)**\
UserPage, Profile, UserData, UserForm, PetsCard, Action on the Avatar, Modals - **[Ganna Baranenko](https://github.com/ganna1008)**\
AddPetPage (AddPetForm) - **[Alexander Shevchenko](https://github.com/AlexanderShevchenko112)**\
OurFriendsPage - **[Demchenko Sergii](https://github.com/Demniks)**\
NewsPage, integrated Search, Pagination News - **[Kiril Polozhenets](https://github.com/polokir)**

## Materials used in the project

- [Project layout](https://www.figma.com/file/0jlTykBnzSdnXWKtRMxhSV/Your-Pet-2.0)
- [Technical task](https://docs.google.com/spreadsheets/d/1dIjUkjuaTIrfkApsZXky48ftkJ-NDMkHYSL7hPSPr0Y/edit)
- [BackEnd on render](https://project-savepets05-be.onrender.com/api-docs/)
- [BackEnd project](https://github.com/VadimVyalov/project-savePets05-BE)

## Tools

Project is built using the following tools:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [Java Script](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://react.dev/reference/react)
- [GitHub](https://github.com/)
- [Postman](https://www.postman.com/)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/ru/docs/intro)
- [Formik](https://formik.org/)
- [Lodash.debounce](https://lodash.com/docs/)
- [Styled-components](https://www.styled-components.com/)
- [yup](https://www.npmjs.com/package/yup)

## Project description

### MainPage
When you first enter the application using the link [Your Pets App](https://olgamunaieva.github.io/project-savePets05/), the user gets to the main page with a welcome message and a menu in the header (for mobile and desktop versions, this is a burger menu). By clicking on the logo, the user is taken to the main page.\
### Header
When clicking on the header menu items, an unauthorized user can get to Notices Page, NewsPage, OurFriendsPage with limited functionality (to be described below). For an authorized user, the functionality will be complete. On the right side of the window there is an authorization menu block. For an unauthorized user, this is Register and Login. For an authorized user, this is Logout and a link to UserPage.
![Open main page](./assets/main-page.png)

### Registration page
 The user can register by clicking on the register button. He gets to the registration page, where filling out the form with data in the required format (messages are displayed if the data does not match the format) and clicking the Registration button, he gets the created profile. If the user is already registered, he will receive a message about this and can follow the login link at the bottom of the registration form.
![Registration page](./assets/registration-page.png)

### Login Page
 On the login page, the user needs to correctly fill in all the form fields, the form has hints for correct input. After filling in, by clicking on the login button, authorization occurs. If the user already exists in the database, then he is redirected to his profile page. Otherwise, a message is displayed stating that the user with the corresponding data does not exist in the database. From the login page, you can go to the registration page by clicking on the appropriate link at the bottom of the form.
![Login page](./assets/login-page.png)
### Notices Page


![Notices page](./assets/notice-page.png)


P.S.: This project is a modified clone of the original OlgaMunaieva repository.
