import React, { useState } from 'react';
import { motion } from 'motion/react';
import { createSquarespaceBooking, type BookingData } from '../../lib/squarespace';

const services = [
  { id: 'thai60', name: 'タイ古式マッサージ 60分', price: 5500, duration: 60 },
  { id: 'thai90', name: 'タイ古式マッサージ 90分', price: 7700, duration: 90 },
  { id: 'thai120', name: 'タイ古式マッサージ 120分', price: 9900, duration: 120 },
  { id: 'aroma60', name: 'アロマオイルマッサージ 60分', price: 6600, duration: 60 },
  { id: 'aroma90', name: 'アロマオイルマッサージ 90分', price: 9350, duration: 90 },
  { id: 'aroma120', name: 'アロマオイルマッサージ 120分', price: 12100, duration: 120 },
  { id: 'foot30', name: 'フットマッサージ 30分', price: 2750, duration: 30 },
  { id: 'head30', name: 'ヘッドマッサージ 30分', price: 2750, duration: 30 },
];

const staff = [
  { id: 'none', name: '指名なし', price: 0 },
  { id: 'staff1', name: 'スタッフ指名', price: 350 },
];

export function Booking() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedStaff, setSelectedStaff] = useState('none');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const service = services.find(s => s.id === selectedService);
    const staffMember = staff.find(s => s.id === selectedStaff);
    const totalPrice = (service?.price || 0) + (staffMember?.price || 0);

    // Prepare booking data for Squarespace API
    const bookingData: BookingData = {
      serviceId: selectedService,
      staffId: selectedStaff !== 'none' ? selectedStaff : undefined,
      date: selectedDate,
      time: selectedTime,
      customerName: name,
      customerPhone: phone,
    };

    try {
      // Call Squarespace API
      const response = await createSquarespaceBooking(bookingData);
      
      if (response.success) {
        alert(`${response.message}\n\nお名前: ${name}\n電話番号: ${phone}\nサービス: ${service?.name}\nスタッフ: ${staffMember?.name}\n日付: ${selectedDate}\n時間: ${selectedTime}\n合計金額: ¥${totalPrice.toLocaleString()}\n\n予約ID: ${response.bookingId}`);
        
        // Reset form
        setSelectedService('');
        setSelectedStaff('none');
        setSelectedDate('');
        setSelectedTime('');
        setName('');
        setPhone('');
      } else {
        alert(`エラー: ${response.message}`);
      }
    } catch (error) {
      alert('予約処理中にエラーが発生しました。お電話でお問い合わせください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedServiceObj = services.find(s => s.id === selectedService);
  const selectedStaffObj = staff.find(s => s.id === selectedStaff);
  const totalPrice = (selectedServiceObj?.price || 0) + (selectedStaffObj?.price || 0);

  return (
    <section id="booking" className="py-20 px-4 bg-[#F5F1ED]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl mb-4 text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>ご予約</h2>
          <div className="w-20 h-px bg-[#C4B5A7] mx-auto mb-8" />
          <a href="tel:070-1614-1177" className="text-3xl text-[#4A4543] hover:text-[#6B6562] transition-colors inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>
            070-1614-1177
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-[#4A4543]">お名前 *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-[#E8E3DD] rounded-lg focus:outline-none focus:border-[#4A4543] bg-white text-[#4A4543] transition-colors"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-[#4A4543]">電話番号 *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-[#E8E3DD] rounded-lg focus:outline-none focus:border-[#4A4543] bg-white text-[#4A4543] transition-colors"
                  placeholder="090-1234-5678"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block mb-2 text-[#4A4543]">メニュー *</label>
              <select
                id="service"
                required
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 border border-[#E8E3DD] rounded-lg focus:outline-none focus:border-[#4A4543] bg-white text-[#4A4543] transition-colors"
              >
                <option value="">選択してください</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} - ¥{service.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="staff" className="block mb-2 text-[#4A4543]">スタッフ指名</label>
              <select
                id="staff"
                value={selectedStaff}
                onChange={(e) => setSelectedStaff(e.target.value)}
                className="w-full px-4 py-3 border border-[#E8E3DD] rounded-lg focus:outline-none focus:border-[#4A4543] bg-white text-[#4A4543] transition-colors"
              >
                {staff.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} {s.price > 0 ? `+¥${s.price}` : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block mb-2 text-[#4A4543]">ご希望日 *</label>
                <input
                  type="date"
                  id="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border border-[#E8E3DD] rounded-lg focus:outline-none focus:border-[#4A4543] bg-white text-[#4A4543] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="time" className="block mb-2 text-[#4A4543]">ご希望時間 *</label>
                <select
                  id="time"
                  required
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 border border-[#E8E3DD] rounded-lg focus:outline-none focus:border-[#4A4543] bg-white text-[#4A4543] transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
            </div>

            {selectedService && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#4A4543] p-6 rounded-lg text-white"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg">合計</span>
                  <span className="text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    ¥{totalPrice.toLocaleString()}
                  </span>
                </div>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full py-4 rounded-full transition-all duration-300 text-lg ${
                isSubmitting
                  ? 'bg-[#C4B5A7] text-white cursor-not-allowed'
                  : 'bg-[#4A4543] text-white hover:bg-[#6B6562]'
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {isSubmitting ? '予約処理中...' : '予約を確定する'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}