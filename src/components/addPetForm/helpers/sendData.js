const sendData = async formData => {
  try {
    const response = await fetch('https://project-savepets05-be.onrender.com', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to send data to the backend');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default sendData;
