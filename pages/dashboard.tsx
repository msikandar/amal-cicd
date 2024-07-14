import React, { useState } from 'react';
import Modal from '../components/Modal';
import Table from '../components/Table';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    // Sample data
    { group: 1, on: 1, nationality: 'USA', akfId: '001', refereeName: 'John', familyName: 'Doe', properScore: '8', c1c2: '5', rulesAppl: '4', signals: '3', timing: '2', position: '1', confidence: '3', mControl: '4' },
    { group: 2, on: 2, nationality: 'UK', akfId: '002', refereeName: 'Jane', familyName: 'Smith', properScore: '7', c1c2: '6', rulesAppl: '5', signals: '4', timing: '3', position: '2', confidence: '4', mControl: '5' },
    { group: 1, on: 1, nationality: 'USA', akfId: '001', refereeName: 'John', familyName: 'Doe', properScore: '8', c1c2: '5', rulesAppl: '4', signals: '3', timing: '2', position: '1', confidence: '3', mControl: '4' },
    { group: 2, on: 2, nationality: 'UK', akfId: '002', refereeName: 'Jane', familyName: 'Smith', properScore: '7', c1c2: '6', rulesAppl: '5', signals: '4', timing: '3', position: '2', confidence: '4', mControl: '5' },
    { group: 1, on: 1, nationality: 'USA', akfId: '001', refereeName: 'John', familyName: 'Doe', properScore: '8', c1c2: '5', rulesAppl: '4', signals: '3', timing: '2', position: '1', confidence: '3', mControl: '4' },
    { group: 2, on: 2, nationality: 'UK', akfId: '002', refereeName: 'Jane', familyName: 'Smith', properScore: '7', c1c2: '6', rulesAppl: '5', signals: '4', timing: '3', position: '2', confidence: '4', mControl: '5' },
    { group: 1, on: 1, nationality: 'USA', akfId: '001', refereeName: 'John', familyName: 'Doe', properScore: '8', c1c2: '5', rulesAppl: '4', signals: '3', timing: '2', position: '1', confidence: '3', mControl: '4' },
    { group: 2, on: 2, nationality: 'UK', akfId: '002', refereeName: 'Jane', familyName: 'Smith', properScore: '7', c1c2: '6', rulesAppl: '5', signals: '4', timing: '3', position: '2', confidence: '4', mControl: '5' },
    { group: 1, on: 1, nationality: 'USA', akfId: '001', refereeName: 'John', familyName: 'Doe', properScore: '8', c1c2: '5', rulesAppl: '4', signals: '3', timing: '2', position: '1', confidence: '3', mControl: '4' },
    { group: 2, on: 2, nationality: 'UK', akfId: '002', refereeName: 'Jane', familyName: 'Smith', properScore: '7', c1c2: '6', rulesAppl: '5', signals: '4', timing: '3', position: '2', confidence: '4', mControl: '5' }
  ]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-700 py-8 px-4 sm:px-6 lg:px-8  g-cover bg-cover bg-center bg-no-repeat">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl font-bold mb-2 mt-16 text-center text-slate-200">Karate Referee Evaluation</h1>
        <div className="flex justify-end mb-4">
          <button
            className="px-8 py-4 bg-black font-semibold text-white rounded hover:bg-slate-900"
            onClick={() => setShowModal(!showModal)}
          >
            Add New Data
          </button>
        </div>
        <div className="overflow-x-auto">
          <Table data={data} />
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} addData={addData} />}
    </div>
  );
}
