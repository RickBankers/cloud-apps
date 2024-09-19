'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';

export default function AddRecord() {
  const router = useRouter();

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    const res = await fetch('/api/records/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
  
    if (res.ok) {
      const data = await res.json(); // Make sure to call res.json() on a successful response
      console.log('Record added:', data);
      router.push('/');
    } else {
      console.error('Failed to add record');
    }
  };
  
  return (
    <div className="p-6">
      <Navbar />
      <h1 className="text-center text-3xl font-bold mb-6 text-green-400">
        Application Request Form
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-screen-lg mx-auto text-black ">
        <input
          type="text"
          placeholder="App Name"
          value={form.app_name}
          onChange={(e) => setForm({ ...form, app_name: e.target.value.toUpperCase(),
                contact_dl: "DL_AZ_" + e.target.value.toUpperCase(),
                az_group: "LDAP_AZ_" + e.target.value.toUpperCase() + "_RO",
                glgroup_ow: "LDAP_GITLAB_" + e.target.value.toUpperCase() + "_OWNER",
                glgroup_mt: "LDAP_GITLAB_" + e.target.value.toUpperCase() + "_MAINTAINER",
                glgroup_dv: "LDAP_GITLAB_" + e.target.value.toUpperCase() + "_DEVELOPER",
                project_status: "submitted"
             })}
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
          disabled
        />
        <input
          type="text"
          placeholder="Azure Group"
          value={form.az_group}
          onChange={(e) => setForm({ ...form, az_group: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
          disabled
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
          disabled
        />
        <input
          type="text"
          placeholder="GitLab Group MT"
          value={form.glgroup_mt}
          onChange={(e) => setForm({ ...form, glgroup_mt: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
          disabled
        />
        <input
          type="text"
          placeholder="GitLab Group DV"
          value={form.glgroup_dv}
          onChange={(e) => setForm({ ...form, glgroup_dv: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
          disabled
        />
        <input
          type="text"
          placeholder="Project Status"
          value={form.project_status}
          onChange={(e) => setForm({ ...form, project_status: e.target.value })}
          className="p-2 border border-gray-700 rounded"
          required
          disabled
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Submit Request
        </button>
        <Link className="bg-red-500 text-white p-2 rounded hover:bg-red-600" href="/"><center>Cancel</center></Link>
      </form>

    </div>
  );
}

