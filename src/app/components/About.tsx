import React from 'react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section className="py-20 px-4 bg-[#4A4543] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1679685809539-52ff98163cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwbWluaW1hbHxlbnwxfHx8fDE3NjcxNDIwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="リラクゼーション"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-5xl mb-6" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              本格タイ古式マッサージで<br />心身のバランスを整える
            </h2>
            <div className="w-16 h-px bg-[#C4B5A7]" />
            <p className="text-lg leading-relaxed text-white/90">
              Ren Thai Massageでは、伝統的なタイ古式マッサージの技術を用いて、お客様の心と体を深くリラックスさせます。経験豊富なセラピストが、一人ひとりのお悩みに寄り添い、最適な施術をご提供いたします。
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              日々の疲れやストレスから解放され、本来の自分を取り戻す時間をお過ごしください。多治見駅から徒歩8分、落ち着いた空間でお待ちしております。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
