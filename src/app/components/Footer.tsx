import React from 'react';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#4A4543] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>
              Ren Thai Massage
            </h3>
            <p className="text-white/70 leading-relaxed">
              心と体を癒す、本格タイ古式マッサージ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>営業情報</h4>
            <div className="space-y-2 text-white/70">
              <p>営業時間: 10:00 - 22:00</p>
              <p>電話: 070-1614-1177</p>
              <p>駐車場: 2台完備</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>SNS</h4>
            <a
              href="https://www.instagram.com/ren_thai_massage/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span>@ren_thai_massage</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-white/60 text-sm">
              〒507-0038 岐阜県多治見市白山町3丁目-13−1 白山マンション2階B
            </p>
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-white/60 text-sm">
                © 2025 Ren Thai Massage. All rights reserved.
              </p>
              <a 
                href="https://tokyowebsites.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/30 text-xs hover:text-white/50 transition-colors duration-300"
              >
                Made by Tokyo Websites
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}