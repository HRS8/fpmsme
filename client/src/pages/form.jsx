import { useState } from 'react';
import { useSelector } from 'react-redux';
export default function Form() {
  const [clientName, setclientName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [amountOwed, setamountOwed] = useState(0);
  const [dateDue, setDateDue] = useState(new Date());
  const currentUser = useSelector((state) => state.user.currentUser);
  const email = currentUser ? currentUser.email : '';
  const [creditScore, setCreditScore] = useState(0);
  const calculateCreditLine = (creditScore) => {
    let creditLine = 0;
    let rating = '';
    if (800 <= creditScore && creditScore <= 850) {
      creditLine = 5000000; // 50 lakhs
      rating = 'Excellent';
    } else if (740 <= creditScore && creditScore <= 799) {
      creditLine = 3500000; // 35 lakhs
      rating = 'Very Good';
    } else if (670 <= creditScore && creditScore <= 739) {
      creditLine = 2500000; // 25 lakhs
      rating = 'Good';
    } else if (580 <= creditScore && creditScore <= 669) {
      creditLine = 1000000; // 10 lakhs
      rating = 'Fair';
    } else if (300 <= creditScore && creditScore <= 579) {
      creditLine = 500000; // 5 lakhs
      rating = 'Poor';
    } else {
      rating = 'Invalid credit score';
    }
    return { creditLine, rating };
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { creditLine, rating } = calculateCreditLine(creditScore);
    try{
        const response=await fetch('/api/user/remainder',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,clientName, phoneNumber, amountOwed, dateDue})
        });
        if (response.ok){
            console.log('success');
        }
    }catch(error){
        console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-md px-4 py-8 mx-auto bg-white rounded-lg shadow-dark border-3 border-slate-700'>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='clientName'>Client Name</label>
        <input
        type="text"
        value={clientName}
        onChange={(e) => setclientName(e.target.value)}
        placeholder="client name"
        className='block w-full px-4 py-2 text-gray-700 border-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline border-slate-700'
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='phoneNumber'>Phone Number</label>
        <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setphoneNumber(e.target.value)}
        placeholder="phone number"
        className='block w-full px-4 py-2 text-gray-700 rounded-lg shadow-sm focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='amountOwed'>Amount Owed</label>
        <input
        type="number"
        value={amountOwed}
        onChange={(e) => setamountOwed(e.target.value)}
        placeholder="amount owed"
        className='block w-full px-4 py-2 text-gray-700 rounded-lg shadow-sm focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='dateDue'>Due Date</label>
        <input
        type="date"
        value={dateDue}
        onChange={(e) => setDateDue(e.target.value)}
        className='block w-full px-4 py-2 text-gray-700 rounded-lg shadow-sm focus:outline-none focus:shadow-outline'
        />
      </div>
      <div>
        <label htmlFor='creditScore'>Credit Score</label>
        <input
          type='number'
          value={creditScore}
          onChange={(e) => setCreditScore(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'>Submit</button>
      </div>
    </form>
  );
}