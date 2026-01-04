import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Car, Instagram } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-20 px-4 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl mb-4 text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>アクセス</h2>
          <div className="w-20 h-px bg-[#C4B5A7] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl border border-[#E8E3DD]">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-[#4A4543] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif" }}>所在地</h3>
                  <p className="text-[#6B6562] leading-relaxed">
                    〒507-0038<br />
                    岐阜県多治見市白山町3丁目-13−1<br />
                    白山マンション2階B
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-6 h-6 text-[#4A4543] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif" }}>営業時間</h3>
                  <p className="text-[#6B6562]">10:00 - 22:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Phone className="w-6 h-6 text-[#4A4543] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif" }}>電話番号</h3>
                  <a href="tel:070-1614-1177" className="text-2xl text-[#4A4543] hover:text-[#6B6562] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    070-1614-1177
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Car className="w-6 h-6 text-[#4A4543] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif" }}>駐車場</h3>
                  <p className="text-[#6B6562]">2台完備</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-6 h-6 text-[#4A4543] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif" }}>Instagram</h3>
                  <a 
                    href="https://www.instagram.com/ren_thai_massage/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#4A4543] hover:text-[#6B6562] transition-colors"
                  >
                    @ren_thai_massage
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[600px]"
          >
            <div className="bg-white p-4 rounded-2xl border border-[#E8E3DD] h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.234567890123!2d137.12556089999998!3d35.331791600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE5JzU0LjQiTiAxMzfCsDA3JzMyLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="520"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ren Thai Massage Location"
              />
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=岐阜県多治見市白山町3-13-1+白山マンション2階B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-[#4A4543] text-white rounded-full hover:bg-[#6B6562] transition-colors duration-300"
                >
                  Google Mapsで開く
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}