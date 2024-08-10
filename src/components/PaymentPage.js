import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUndoAlt, FaExchangeAlt, FaTruck } from 'react-icons/fa';

const PaymentPage = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  if (!product) {
    return <p>No product details available.</p>;
  }

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedPayment) {
      setShowPopup(true);
    } else {
      alert('Please select a payment method');
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-wrap md:flex-nowrap">
          {/* Left side: Product details */}
          <div className="w-full md:w-1/2 p-6 bg-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-64 object-cover object-center rounded-md mb-4"
            />
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-gray-800">{product.price}</p>

            {/* Additional Information */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-lg text-gray-800">
                <FaUndoAlt className="mr-2 text-blue-500" />
                <strong>5 Days Return Policy</strong>
              </div>
              <div className="flex items-center text-lg text-gray-800">
                <FaExchangeAlt className="mr-2 text-blue-500" />
                <strong>100% Refund or Exchange Offer</strong>
              </div>
              <div className="flex items-center text-lg text-gray-800">
                <FaTruck className="mr-2 text-blue-500" />
                <strong>Delivery Assurance</strong>
              </div>
            </div>
          </div>

          {/* Right side: User information form */}
          <div className="w-full md:w-1/2 p-6 bg-white flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Payment Details</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Name</label>
                <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Door No and Street</label>
                <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">City</label>
                <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">District</label>
                <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Pin Code</label>
                <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Phone No</label>
                <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Payment Type</label>
                <select
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                  value={selectedPayment}
                  onChange={handlePaymentChange}
                >
                  <option value="">Select a payment method</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="Net Banking">Net Banking</option>
                  <option value="UPI">UPI</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Proceed to Pay
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Payment Details Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            {selectedPayment === 'Debit Card' && (
              <>
                <h4 className="text-lg font-bold mb-4">Enter Debit Card Details</h4>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Card Number</label>
                    <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Expiry Date</label>
                    <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">CVV</label>
                    <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
                  >
                    Make Payment
                  </button>
                  <button
                    type="button"
                    className="mt-2 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
                    onClick={handlePopupClose}
                  >
                    Cancel
                  </button>
                </form>
              </>
            )}

            {selectedPayment === 'Credit Card' && (
              <>
                <h4 className="text-lg font-bold mb-4">Enter Credit Card Details</h4>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Card Number</label>
                    <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Expiry Date</label>
                    <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">CVV</label>
                    <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
                  >
                    Make Payment
                  </button>
                  <button
                    type="button"
                    className="mt-2 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
                    onClick={handlePopupClose}
                  >
                    Cancel
                  </button>
                </form>
              </>
            )}

            {selectedPayment === 'Net Banking' && (
              <>
                <h4 className="text-lg font-bold mb-4">Enter Net Banking Details</h4>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Bank Name</label>
                    <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Account Number</label>
                    <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">IFSC Code</label>
                    <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
                  >
                    Make Payment
                  </button>
                  <button
                    type="button"
                    className="mt-2 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
                    onClick={handlePopupClose}
                  >
                    Cancel
                  </button>
                </form>
              </>
            )}

            {selectedPayment === 'UPI' && (
              <>
                <h4 className="text-lg font-bold mb-4">Enter UPI Details</h4>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">UPI ID</label>
                    <input type="text" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500" />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
                  >
                    Make Payment
                  </button>
                  <button
                    type="button"
                    className="mt-2 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
                    onClick={handlePopupClose}
                  >
                    Cancel
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
