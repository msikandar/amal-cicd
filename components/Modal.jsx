import React, { useState } from 'react';

export default function Modal({ setShowModal, addData }) {
  const [formData, setFormData] = useState({
    group: 1,
    on: '',
    nationality: '',
    akfId: '',
    refereeName: '',
    familyName: '',
    properScore: '',
    c1c2: '',
    rulesAppl: '',
    signals: '',
    timing: '',
    position: '',
    confidence: '',
    mControl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData({ ...formData, on: parseInt(formData.on), group: parseInt(formData.group) });
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50" >
      <div className="bg-white rounded-lg p-6 w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Add New Data</h2>
        <form onSubmit={handleSubmit} className="space-y-4 overflow-scroll h-96 mx-8">
          <div>
            <label htmlFor="group" className="block text-sm font-medium text-gray-700">Group</label>
            <select id="group" name="group" value={formData.group} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </div>
          <div>
            <label htmlFor="on" className="block text-sm font-medium text-gray-700">ON</label>
            <input type="number" id="on" name="on" value={formData.on} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
            <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="akfId" className="block text-sm font-medium text-gray-700">AKF - ID</label>
            <input type="text" id="akfId" name="akfId" value={formData.akfId} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">Referee Name</label>
            <input type="text" id="refereeName" name="refereeName" value={formData.refereeName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="familyName" className="block text-sm font-medium text-gray-700">Family Name</label>
            <input type="text" id="familyName" name="familyName" value={formData.familyName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="properScore" className="block text-sm font-medium text-gray-700">Proper Score</label>
            <input type="number" id="properScore" name="properScore" value={formData.properScore} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="c1c2" className="block text-sm font-medium text-gray-700">C1+C2</label>
            <input type="number" id="c1c2" name="c1c2" value={formData.c1c2} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="rulesAppl" className="block text-sm font-medium text-gray-700">Rules Appl</label>
            <input type="number" id="rulesAppl" name="rulesAppl" value={formData.rulesAppl} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="signals" className="block text-sm font-medium text-gray-700">Signals</label>
            <input type="number" id="signals" name="signals" value={formData.signals} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="timing" className="block text-sm font-medium text-gray-700">Timing</label>
            <input type="number" id="timing" name="timing" value={formData.timing} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
            <input type="number" id="position" name="position" value={formData.position} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="confidence" className="block text-sm font-medium text-gray-700">Confidence</label>
            <input type="number" id="confidence" name="confidence" value={formData.confidence} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="mControl" className="block text-sm font-medium text-gray-700">M. Control</label>
            <input type="number" id="mControl" name="mControl" value={formData.mControl} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={() => setShowModal(false)} className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
