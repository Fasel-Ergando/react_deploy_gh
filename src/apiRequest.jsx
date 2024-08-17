const apiRequest = async (url = "", optionsObject = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObject);
    if (!response.ok) throw new Error("Please reload the app"); //the app might not be at sync with the database
  } catch (e) {
    errMsg = e.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
