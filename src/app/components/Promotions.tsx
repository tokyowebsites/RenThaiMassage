import React from 'react';
import { motion } from 'motion/react';

const promotions = [
  {
    title: '新規割',
    items: [
      'もみほぐしの場合 → ヘッドマッサージ10分サービス',
      'タイ古式、アロマオイルの場合 → 会計時¥1,000引き',
    ],
    note: '新規のお客様が対象のお得なサービスです。お会計の際にスタッフへお申し付けください。',
  },
  {
    title: '平日10:00-17:00割',
    items: [
      'もみほぐしの場合 → 会計時¥200引き',
      'タイ古式、もしくはアロマオイルの場合 → 会計時¥500引き',
    ],
    note: '10:00-17:00の間の施術が対象の割引です。17:00を超えるものは対象外です。',
  },
  {
    title: '口コミ割',
    items: [
      'ホットペッパーもしくは、グーグルマップ上の本店舗に対しての口コミが対象',
      '1人1回まで',
    ],
    note: '会計時に、お客様本人が書いた口コミをスタッフに見せることでメニューから¥500引きいたします。',
  },
];

export function Promotions() {
  return (
    <section id="promotions" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl mb-4 text-[#4A4543]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>お知らせ</h2>
          <div className="w-20 h-px bg-[#C4B5A7] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F5F1ED] p-8 rounded-2xl border border-[#E8E3DD]"
            >
              <h3 className="text-2xl mb-6 text-[#4A4543] text-center pb-4 border-b border-[#C4B5A7]/30" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                {promo.title}
              </h3>
              <div className="space-y-3 mb-6">
                {promo.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-[#C4B5A7] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#4A4543] leading-relaxed text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <p className="text-xs text-[#6B6562] leading-relaxed">
                  {promo.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center bg-[#4A4543] text-white p-6 rounded-2xl"
        >
          <p className="leading-relaxed">
            ※それ以外の日時は、ヘッドorフットマッサージとのセットメニューをご予約いただきますと安くなります。
          </p>
        </motion.div>
      </div>
    </section>
  );
}