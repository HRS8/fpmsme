import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Remainders() {
  const [remainders, setRemainders] = useState([]);
  const currentUser = useSelector((state) => state.user.currentUser);
  const email = currentUser ? currentUser.email : '';

  useEffect(() => {
    const fetchRemainders = async () => {
      console.log(`Fetching remainders for user: ${email}`);
      const response = await fetch(`/api/user/remainders/${email}`);
      const data = await response.json();
      console.log(`Fetched remainders: ${JSON.stringify(data)}`);
      setRemainders(data);
    };

    fetchRemainders();
  }, [email]);

  return (
    <table>
      <thead>
        <tr>
          <th>Client Name</th>
          <th>Phone Number</th>
          <th>Amount Owed</th>
          <th>Date Due</th>
        </tr>
      </thead>
      <tbody>
        {remainders.map((remainder) => (
          <tr key={remainder._id}>
            <td>{remainder.clientName}</td>
            <td>{remainder.phoneNumber}</td>
            <td>{remainder.amountOwed}</td>
            <td>{remainder.dateDue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}