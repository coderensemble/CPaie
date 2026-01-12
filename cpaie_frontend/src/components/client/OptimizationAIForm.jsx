import React, { useState } from 'react';

export default function OptimizationAIForm({ onAnalyze, isLoading = false }) {
  const [formData, setFormData] = useState({
    ccn: '',
    effectif: '',
    secteur: '',
    typeContrats: [],
    objectifs: [],
    problemes: '',
    priorite: 'equilibre',
  });

  const OBJECTIFS = [
    { id: 'charges', label: 'Réduction des charges sociales' },
    { id: 'securite', label: 'Sécurisation juridique & sociale' },
    { id: 'temps', label: 'Gain de temps RH / Paie' },
    { id: 'externalisation', label: 'Externalisation de la paie' },
  ];

  const CONTRATS = ['CDI', 'CDD', 'Alternance', 'Intérim'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => {
      const current = prev[field];
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(formData);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-2">
        Analyse & optimisation paie (IA)
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Ces informations permettent de générer des recommandations adaptées à
        votre situation, dans le respect du cadre légal et conventionnel.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Convention collective */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Convention collective (CCN)
          </label>
          <input
            name="ccn"
            value={formData.ccn}
            onChange={handleChange}
            placeholder="Ex : Bâtiment, Syntec, HCR..."
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Secteur & effectif */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Secteur d’activité
            </label>
            <input
              name="secteur"
              value={formData.secteur}
              onChange={handleChange}
              placeholder="Ex : BTP, Informatique, Commerce"
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Effectif
            </label>
            <input
              name="effectif"
              type="number"
              min="1"
              value={formData.effectif}
              onChange={handleChange}
              placeholder="Nombre de salariés"
              className="w-full px-4 py-3 border rounded-lg"
              required
            />
          </div>
        </div>

        {/* Types de contrats */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Types de contrats présents
          </label>
          <div className="flex flex-wrap gap-4">
            {CONTRATS.map(c => (
              <label key={c} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={formData.typeContrats.includes(c)}
                  onChange={() => handleCheckboxChange('typeContrats', c)}
                />
                {c}
              </label>
            ))}
          </div>
        </div>

        {/* Objectifs */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Objectifs principaux
          </label>
          <div className="grid sm:grid-cols-2 gap-3">
            {OBJECTIFS.map(obj => (
              <label key={obj.id} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={formData.objectifs.includes(obj.id)}
                  onChange={() => handleCheckboxChange('objectifs', obj.id)}
                />
                {obj.label}
              </label>
            ))}
          </div>
        </div>

        {/* Priorité */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Priorité actuelle
          </label>
          <select
            name="priorite"
            value={formData.priorite}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          >
            <option value="economies">Économies</option>
            <option value="securite">Sécurité juridique</option>
            <option value="equilibre">Équilibre</option>
          </select>
        </div>

        {/* Problèmes rencontrés */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Difficultés ou questions actuelles
          </label>
          <textarea
            name="problemes"
            value={formData.problemes}
            onChange={handleChange}
            rows={4}
            placeholder="Ex : complexité des charges, erreurs URSSAF, manque de visibilité..."
            className="w-full px-4 py-3 border rounded-lg resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50"
        >
          {isLoading ? 'Analyse en cours...' : 'Lancer l’analyse IA'}
        </button>
      </form>
    </div>
  );
}
