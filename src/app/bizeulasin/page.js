import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-center">
        {/* Sol Taraf: Otel Bilgileri */}
        <div className="md:w-1/2 p-4 bg-white shadow-lg rounded-lg mx-auto md:my-0 my-6">
          <h2 className="text-2xl font-bold mb-4">Otel Bilgileri</h2>
          <p className="mb-2">Adres: 123 Otel Sokağı, Tatil Kasabası, Muğla, Türkiye</p>
          <p className="mb-2">Telefon: +90 123 456 7890</p>
          <p className="mb-2">Email: info@otel.com</p>
          <p className="mb-2">Çalışma Saatleri: 7/24 Hizmet</p>
        </div>

        {/* Sağ Taraf: İletişim Formu */}
        <div className="md:w-1/2 p-4 mt-6 md:mt-0 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">İletişim Formu</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Ad</label>
              <input
                type="text"
                id="firstName"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Soyad</label>
              <input
                type="text"
                id="lastName"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Mail</label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon</label>
              <input
                type="tel"
                id="phone"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="roomPreference" className="block text-sm font-medium text-gray-700">Oda Seçimi</label>
              <select
                id="roomPreference"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              >
                <option value="guest">Misafir Odası</option>
                <option value="promotional">Kampanyalı Oda</option>
                <option value="luxury">Lux Oda</option>
              </select>
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="mt-2 w-64 bg-cyan-800 text-white p-2 rounded-md"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
