import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useApi } from '../../hooks/useApi';
import { LogoutButton } from '../../components/auth/LogoutButton';

export default function AdminDashboard() {
  const { user } = useAuthContext();
  const { apiCall } = useApi();
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [contactsData, statsData] = await Promise.all([
        apiCall('/admin/contacts'),
        apiCall('/admin/stats'),
      ]);

      if (contactsData.data?.contacts) {
        setContacts(contactsData.data.contacts);
      }
      if (statsData.data?.stats) {
        setStats(statsData.data.stats);
      }
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Confirmer la suppression ?')) return;

    try {
      await apiCall(`/admin/contacts/${id}`, { method: 'DELETE' });
      await loadData();
    } catch (error) {
      alert('Erreur lors de la suppression');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
            <p className="text-gray-600">Bienvenue, {user?.name || user?.email}</p>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-gray-500 text-sm">Total</p>
              <p className="text-3xl font-bold">{stats.total}</p>
            </div>
            <div className="bg-blue-50 rounded-xl shadow p-6">
              <p className="text-blue-600 text-sm">Nouveaux</p>
              <p className="text-3xl font-bold text-blue-600">{stats.new}</p>
            </div>
            <div className="bg-yellow-50 rounded-xl shadow p-6">
              <p className="text-yellow-600 text-sm">En cours</p>
              <p className="text-3xl font-bold text-yellow-600">{stats.in_progress}</p>
            </div>
            <div className="bg-green-50 rounded-xl shadow p-6">
              <p className="text-green-600 text-sm">Résolus</p>
              <p className="text-3xl font-bold text-green-600">{stats.resolved}</p>
            </div>
          </div>
        )}

        {/* Liste des contacts */}
        <div className="bg-white rounded-xl shadow">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">Tous les Contacts</h2>
          </div>
          {loading ? (
            <p className="p-6">Chargement...</p>
          ) : (
            <div className="divide-y">
              {contacts.map((contact) => (
                <div key={contact.id} className="p-6 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{contact.name}</h3>
                      <p className="text-gray-600">{contact.email}</p>
                      {contact.phone && <p className="text-gray-600">{contact.phone}</p>}
                      <p className="text-gray-700 mt-2">{contact.message}</p>
                      <p className="text-sm text-gray-400 mt-2">
                        {new Date(contact.created_at).toLocaleString('fr-FR')}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}