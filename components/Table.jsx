export default function Table({ data }) {
  const group1 = data.filter(item => item.group === 1);
  const group2 = data.filter(item => item.group === 2);

  const renderTable = (groupData) => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-slate-600 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-slate-950 text-white uppercase text-sm leading-normal">
          <tr>
            <th className="py-8 px-6 text-left">ON</th>
            <th className="py-8 px-6 text-left">Nationality</th>
            <th className="py-8 px-6 text-left">AKF - ID</th>
            <th className="py-8 px-6 text-left">Referee Name</th>
            <th className="py-8 px-6 text-left">Family Name</th>
            <th className="py-8 px-6 text-left">Proper Score</th>
            <th className="py-8 px-6 text-left">C1+C2</th>
            <th className="py-8 px-6 text-left">Rules Appl</th>
            <th className="py-8 px-6 text-left">Signals</th>
            <th className="py-8 px-6 text-left">Timing</th>
            <th className="py-8 px-6 text-left">Position</th>
            <th className="py-8 px-6 text-left">Confidence</th>
            <th className="py-8 px-6 text-left">M. Control</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {groupData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
              <td className="py-8 px-6 text-left whitespace-nowrap">{item.on}</td>
              <td className="py-8 px-6 text-left">{item.nationality}</td>
              <td className="py-8 px-6 text-left">{item.akfId}</td>
              <td className="py-8 px-6 text-left">{item.refereeName}</td>
              <td className="py-8 px-6 text-left">{item.familyName}</td>
              <td className="py-8 px-6 text-left">{item.properScore}</td>
              <td className="py-8 px-6 text-left">{item.c1c2}</td>
              <td className="py-8 px-6 text-left">{item.rulesAppl}</td>
              <td className="py-8 px-6 text-left">{item.signals}</td>
              <td className="py-8 px-6 text-left">{item.timing}</td>
              <td className="py-8 px-6 text-left">{item.position}</td>
              <td className="py-8 px-6 text-left">{item.confidence}</td>
              <td className="py-8 px-6 text-left">{item.mControl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">Group 1</h2>
      {renderTable(group1)}
      <h2 className="text-2xl font-bold mt-8 mb-4 text-red-400">Group 2</h2>
      {renderTable(group2)}
    </div>
  );
}
