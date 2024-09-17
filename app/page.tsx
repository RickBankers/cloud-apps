'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar } from './components/Navbar';

export default function Home() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    const res = await fetch('/api/records/read');
    const data = await res.json();
    setRecords(data);
  };

  const handleDelete = async (id: number) => {
    await fetch('/api/records/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    fetchRecords();
  };

  return (
    <div className="p-6">
          <Navbar />
      <h1 className="text-center text-3xl font-bold mb-6 text-green-400">
        Records Management
      </h1>
      {/* Button to Add New Record */}
      <div className="mb-4">
        <Link href="/add" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add New Record
        </Link>
      </div>

      {/* Table to Display Records */}
      <table className="min-w-full table-auto bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2 text-left text-green-400">App Name</th>
            <th className="px-4 py-2 text-left text-green-400">Project Status</th>
            <th className="px-4 py-2 text-left text-green-400">Contact DL</th>
            <th className="px-4 py-2 text-left text-green-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: any) => (
            <tr
              key={record.id}
              className="odd:bg-gray-800 even:bg-gray-700 hover:bg-gray-600"
            >
              <td className="px-4 py-2 border-b border-gray-700">
                {record.app_name}
              </td>
              <td className="px-4 py-2 border-b border-gray-700">
                {record.project_status}
              </td>
              <td className="px-4 py-2 border-b border-gray-700">
                {record.contact_dl}
              </td>
              <td className="px-4 py-2 border-b border-gray-700">
                <Link
                  href={`/edit/${record.id}`}
                  className="bg-yellow-500 text-white p-1 rounded mr-2 hover:bg-yellow-600"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(record.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
