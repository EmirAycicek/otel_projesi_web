import React from 'react';

const Etkinlikler = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-left">Havuz</h2>
        <div className="flex flex-wrap justify-start">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <img className="w-full" src="https://media-cdn.tripadvisor.com/media/photo-s/0b/d2/5e/52/granada-luxury-resort.jpg" alt="etkinlik" />
            <h1 className="font-bold text-xl mb-2 mt-2">Havuz başı etkinliği</h1>
            <p className="text-gray-700 text-base">Akşamüstü canlı müzik eşliğinde havuz başında keyifli vakit geçirebilirsiniz.</p>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <img className="w-full" src="https://media-cdn.tripadvisor.com/media/photo-s/06/ac/77/68/granada-luxury-resort.jpg" alt="etkinlik" />
            <h1 className="font-bold text-xl mb-2 mt-2">Gün Batımı Partisi</h1>
            <p className="text-gray-700 text-base">Gün batımında DJ performansı ile havuz başında eğlence.</p>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <img className="w-full" src="https://media-cdn.tripadvisor.com/media/photo-s/08/d7/ce/ac/granada-luxury-resort.jpg" alt="etkinlik" />
            <h1 className="font-bold text-xl mb-2 mt-2">Su Sporları Şovu</h1>
            <p className="text-gray-700 text-base">Profesyonel sporcuların gösterileri ile su sporlarının keyfini çıkarın.</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-left">Dans</h2>
        <div className="flex flex-wrap justify-start">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <img className="w-full" src="https://cdnuploads.aa.com.tr/uploads/PhotoGallery/2013/04/25/thumbs_b2_ae9e60a6a43cffa6a7c807c5c440bbbc.jpg" alt="etkinlik" />
            <h1 className="font-bold text-xl mb-2 mt-2">Dans Tiyatrosu</h1>
            <p className="text-gray-700 text-base">Profesyonel dansçılar tarafından sahnelenen muhteşem dans gösterisi.</p>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <img className="w-full" src="https://www.filgezi.com/wp-content/uploads/2023/10/filgezi-istanbul-kasim-etkinlik-rehberi-tiyatro-asikshakespeare-770x513.jpg" alt="etkinlik" />
            <h1 className="font-bold text-xl mb-2 mt-2">Dans ve Tiyatro</h1>
            <p className="text-gray-700 text-base">Dans ve tiyatronun harmanlandığı unutulmaz bir performans.</p>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <img className="w-full" src="https://cdnuploads.aa.com.tr/uploads/PhotoGallery/2013/04/25/thumbs_b2_05bb4b2d9ae7b698e9fbbc34c362d676.jpg" alt="etkinlik" />
            <h1 className="font-bold text-xl mb-2 mt-2">Modern Dans</h1>
            <p className="text-gray-700 text-base">Çağdaş dans gösterileri ile sanatın farklı boyutlarını keşfedin.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-left">Gece Eğlencesi</h2>
        <div className="flex flex-wrap justify-start">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <img className="w-full" src="https://thumbs.dreamstime.com/z/modern-night-club-european-style-stylish-bright-lights-35680401.jpg?w=992" alt="etkinlik" />
            <h1 className="font-bold text-xl mb-2 mt-2">Club Etkinliği</h1>
            <p className="text-gray-700 text-base">Gece kulübünde özel DJ performansları ile sabaha kadar dans edin.</p>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <img className="w-full" src="https://www.purenightclub408.com/wp-content/uploads/2017/04/Pure-Lounge-Dec-2-2016-Artiman-Corp-9206.jpg" alt="etkinlik" />
            <h1 className="font-bold text-xl mb-2 mt-2">Lounge Partisi</h1>
            <p className="text-gray-700 text-base">Rahat bir atmosferde müzik ve içecekler eşliğinde eğlence.</p>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <img className="w-full" src="https://www.purenightclub408.com/wp-content/uploads/2017/04/Pure-Lounge-Dec-10-2016-Slalom-Corp-Event-1407.jpg" alt="etkinlik" />
            <h1 className="font-bold text-xl mb-2 mt-2">Gece Kulübü Performansı</h1>
            <p className="text-gray-700 text-base">Canlı performanslar ve DJ şovları ile unutulmaz bir gece.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etkinlikler;
