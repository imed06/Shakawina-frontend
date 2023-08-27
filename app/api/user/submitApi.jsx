import { redirect } from 'next/navigation'
// utils/submitApi.js
export async function submitApi(personalData, complaintData) {
  console.log(personalData)
  console.log(complaintData)

  var userId;

  /* add user */
  try {
    const response = await fetch('http://localhost:4000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(personalData),
    });

    const json = await response.json()

    console.log(json)

    userId = json.user.id;

    if (response.ok) {
      console.log('Data sent successfully');
    } else {
      console.error('Failed to send data');
    }
  } catch (error) {
    console.error('Error:', error);
  }

  complaintData.userId = userId

  console.log(complaintData)

  /* add complaint */
  try {
    const response = await fetch('http://localhost:4000/complaint/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(complaintData),
    });

    const json = await response.json()

    console.log(json)

    if (response.ok) {
      console.log('Data sent successfully');
      redirect("/user/reclamations")
    } else {
      console.error('Failed to send data');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
