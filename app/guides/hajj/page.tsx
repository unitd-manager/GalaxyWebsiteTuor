import Image from 'next/image';
import React from 'react';

export default function HajjGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Kaaba during Hajj"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Hajj Guide</h1>
            <p className="text-xl text-white/90 max-w-2xl">Your complete spiritual journey to the House of Allah</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction to Hajj</h2>
              <p className="text-gray-600 mb-6">
                Hajj is one of the five pillars of Islam and is a mandatory religious duty for Muslims that must be carried out at least once in their lifetime by all adult Muslims who are physically and financially capable of undertaking the journey.
              </p>
              <p className="text-gray-600">
                The annual Islamic pilgrimage to Makkah represents the spiritual peak of a Muslim's life, symbolizing unity, equality, and submission to Allah.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1571781926295-cdf350f5f3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Aerial view of pilgrims in Makkah"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🕋</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Hajj al-Tamattu'</h3>
              <p className="text-gray-600 text-center">Performing Umrah first, then Hajj with a break in between</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🕌</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Hajj al-Qiran</h3>
              <p className="text-gray-600 text-center">Combining Umrah and Hajj without a break in between</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🕋</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Hajj al-Ifrad</h3>
              <p className="text-gray-600 text-center">Performing only Hajj without Umrah</p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Key Rituals of Hajj</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1630304565761-7c5f5e6e8e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Pilgrims in Ihram"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Ihram</h3>
                <p className="text-gray-600">Entering the sacred state of ritual purity, wearing the prescribed attire and making the intention for Hajj.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Pilgrims performing Tawaf"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Tawaf</h3>
                <p className="text-gray-600">Circling the Kaaba seven times in a counter-clockwise direction, starting and ending at the Black Stone.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Safa and Marwah"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Sa'i</h3>
                <p className="text-gray-600">Walking seven times between the hills of Safa and Marwah, commemorating Hajar's search for water.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571781926295-cdf350f5f3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Pilgrims at Arafat"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Wuquf at Arafat</h3>
                <p className="text-gray-600">Standing in prayer and supplication at the plain of Arafat from noon until sunset on the 9th of Dhul-Hijjah.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Important Note:</h4>
            <p className="text-blue-700">
              This is a simplified guide. Always consult with your local Islamic scholar or Hajj guide for detailed instructions and rulings specific to your situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
