import React, { useState } from 'react';
import { motion } from 'motion/react';
import massageImage from '@/assets/4c290200146994ab6d9c4f40b63617186b8f7042.png';
import staffImage from '@/assets/1f2a396092e8a50194aef64d979aa244e5410d0b.png';

const services = [
  { id: 'thai60', name: 'タイ古式マッサージ', thai: 'นวดไทย', price: 5500, duration: 60 },
  { id: 'thai90', name: 'タイ古式マッサージ', thai: 'นวดไทย', price: 7700, duration: 90 },
  { id: 'thai120', name: 'タイ古式マッサージ', thai: 'นวดไทย', price: 9900, duration: 120 },
  { id: 'aroma60', name: 'アロマオイルマッサージ', thai: 'นวดน้ำมันหอม', price: 6600, duration: 60 },
  { id: 'aroma90', name: 'アロマオイルマッサージ', thai: 'นวดน้ำมันหอม', price: 9350, duration: 90 },
  { id: 'aroma120', name: 'アロマオイルマッサージ', thai: 'นวดน้ำมันหอม', price: 12100, duration: 120 },
  { id: 'foot30', name: 'フットマッサージ', thai: 'นวดเท้า', price: 2750, duration: 30 },
  { id: 'head30', name: 'ヘッドマッサージ', thai: 'นวดศีรษะ', price: 2750, duration: 30 },
];

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'thai', name: 'タイ古式' },
    { id: 'aroma', name: 'アロマオイル' },
    { id: 'other', name: 'その他' },
  ];

  const filteredServices = services.filter(service => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'thai') return service.id.includes('thai');
    if (selectedCategory === 'aroma') return service.id.includes('aroma');
    if (selectedCategory === 'other') return service.id.includes('foot') || service.id.includes('head');
    return true;
  });

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl mb-4 text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>メニュー</h2>
          <div className="w-20 h-px bg-[#C4B5A7] mx-auto" />
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <img 
            src={massageImage} 
            alt="タイ古式マッサージ施術中" 
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#4A4543] text-white'
                  : 'bg-[#F5F1ED] text-[#6B6562] hover:bg-[#E8E3DD]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Services Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[#E8E3DD] rounded-2xl overflow-hidden mb-16"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex items-center justify-between p-6 ${
                index !== filteredServices.length - 1 ? 'border-b border-[#E8E3DD]' : ''
              } hover:bg-[#F5F1ED] transition-all duration-300`}
            >
              <div className="flex-1">
                <h3 className="text-xl text-[#4A4543] mb-1">{service.name}</h3>
                <p className="text-sm text-[#6B6562]">{service.thai}</p>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-[#6B6562] min-w-[60px]">{service.duration}分</span>
                <span className="text-3xl text-[#4A4543] min-w-[140px] text-right" style={{ fontFamily: "'Playfair Display', serif" }}>
                  ¥{service.price.toLocaleString()}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Staff Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F5F1ED] rounded-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="h-[400px]">
              <img 
                src={staffImage} 
                alt="セラピスト" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-4xl mb-4 text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>スタッフ指名</h3>
              <div className="w-16 h-px bg-[#C4B5A7] mb-6" />
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-[#C4B5A7]/30">
                  <div>
                    <h4 className="text-[#4A4543] mb-1">指名なし</h4>
                    <p className="text-sm text-[#6B6562]">ไม่ระบุ</p>
                  </div>
                  <span className="text-2xl text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif" }}>無料</span>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h4 className="text-[#4A4543] mb-1">スタッフ指名</h4>
                    <p className="text-sm text-[#6B6562]">ระบุพนักงาน</p>
                  </div>
                  <span className="text-2xl text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif" }}>+¥350</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}