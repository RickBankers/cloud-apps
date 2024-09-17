'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';

export default function EditRecord() {
  const router = useRouter();
  const { id } = useParams();

  const [form, setForm] = useState({
    app_name: '',
    app_envs: '',
    acct_string: '',
    contact_dl: '',
    az_group: '',
    gitlab_url: '',
    glgroup_ow: '',
    glgroup_mt: '',
    glgroup_dv: '',
    project_status: '',
  });

  useEffect(() => {
    const fetchRecord = async () => {
      const res = await fetch(`/api/records/read/?id=${id}`);
      const data = await res.json();
      setForm(data);
    };

    fetchRecord();
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch('/api/records/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        data: form,
      }),
    });

    router.push('/');
  };

  return (
    <div className="p-6">
      <Navbar />
      <h1 className="text-center text-3xl font-bold mb-6 text-green-400">
        Edit Record
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-md mx-auto text-black ">
        <input
          type="text"
          placeholder="App Name"
          value={form.app_name}
          onChange={(e) => setForm({ ...form, app_name: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
        />
        <input
          type="text"
          placeholder="App Envs"
          value={form.app_envs}
          onChange={(e) => setForm({ ...form, app_envs: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
        />
        <input
          type="text"
          placeholder="Account String"
          value={form.acct_string}
          onChange={(e) => setForm({ ...form, acct_string: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
        />
        <input
          type="email"
          placeholder="Contact DL"
          value={form.contact_dl}
          onChange={(e) => setForm({ ...form, contact_dl: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
        />
        <input
          type="text"
          placeholder="Azure Group"
          value={form.az_group}
          onChange={(e) => setForm({ ...form, az_group: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
        />
        <input
          type="url"
          placeholder="GitLab URL"
          value={form.gitlab_url}
          onChange={(e) => setForm({ ...form, gitlab_url: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
        />
        <input
          type="text"
          placeholder="GitLab Group OW"
          value={form.glgroup_ow}
          onChange={(e) => setForm({ ...form, glgroup_ow: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
        />
        <input
          type="text"
          placeholder="GitLab Group MT"
          value={form.glgroup_mt}
          onChange={(e) => setForm({ ...form, glgroup_mt: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
        />
        <input
          type="text"
          placeholder="GitLab Group DV"
          value={form.glgroup_dv}
          onChange={(e) => setForm({ ...form, glgroup_dv: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
        />
        <input
          type="text"
          placeholder="Project Status"
          value={form.project_status}
          onChange={(e) => setForm({ ...form, project_status: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Update Record
        </button>
        <Link className="bg-red-500 text-white p-2 rounded hover:bg-red-600" href="/"><center>Cancel</center></Link>
      </form>
    </div>
  );
}
