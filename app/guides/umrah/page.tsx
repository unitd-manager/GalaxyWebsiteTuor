import Image from 'next/image';
import React from 'react';

export default function UmrahGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Kaaba during Umrah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Umrah Guide</h1>
            <p className="text-xl text-white/90 max-w-2xl">Your spiritual journey to the House of Allah</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction to Umrah</h2>
              <p className="text-gray-600 mb-6">
                Umrah is an Islamic pilgrimage to Makkah that can be undertaken at any time of the year. While it is not mandatory like Hajj, it is highly recommended and carries great spiritual significance.
              </p>
              <p className="text-gray-600">
                Often called the 'lesser pilgrimage', Umrah is a beautiful act of worship that purifies the soul and brings one closer to Allah. It's a journey of devotion, reflection, and spiritual renewal.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1571781926295-cdf350f5f3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Masjid al-Haram"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Steps of Umrah</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1630304565761-7c5f5e6e8e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Pilgrim in Ihram"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full w-fit mb-3">Step 1</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Ihram</h3>
                    <p className="text-gray-600">Enter the sacred state of Ihram from the designated Miqat, wearing the prescribed white garments and making the intention (niyyah) for Umrah.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Tawaf around the Kaaba"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full w-fit mb-3">Step 2 & 3</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Tawaf</h3>
                    <p className="text-gray-600">Perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction, starting and ending at the Black Stone (Hajar al-Aswad).</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1571781926295-cdf350f5f3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Sa'i between Safa and Marwah"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full w-fit mb-3">Step 4 & 5</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Sa'i</h3>
                    <p className="text-gray-600">Walk seven times between the hills of Safa and Marwah, following in the footsteps of Hajar (may Allah be pleased with her) in her search for water for her son Ismail.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1630304565761-7c5f5e6e8e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Halq or Taqsir"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full w-fit mb-3">Final Step</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Halq or Taqsir</h3>
                    <p className="text-gray-600">Complete your Umrah by shaving your head (Halq) or cutting a small portion of your hair (Taqsir). Men typically shave their heads or trim their hair, while women trim a small portion of their hair.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Best Times for Umrah</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Ramadan</h3>
                <p className="text-gray-600 text-sm">The most virtuous time for Umrah, equivalent to performing Hajj with the Prophet (PBUH)</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Rajab</h3>
                <p className="text-gray-600 text-sm">A sacred month when many Muslims perform Umrah</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🕌</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Shawwal</h3>
                <p className="text-gray-600 text-sm">After Eid al-Fitr, a great time for spiritual renewal</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🕋</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Dhu al-Qi'dah</h3>
                <p className="text-gray-600 text-sm">One of the sacred months, ideal for Umrah</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Important Note:</h4>
            <p className="text-green-700">
              This guide provides a basic overview. For detailed rulings and specific situations, please consult with a knowledgeable Islamic scholar or your Umrah guide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
