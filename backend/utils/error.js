

export const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
  };

export default createError

//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com