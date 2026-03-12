/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  TreeDeciduous, 
  Droplets, 
  Layout, 
  Scissors, 
  ArrowRight, 
  ChevronRight,
  Menu,
  X,
  FileText,
  ShieldCheck,
  Box
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white">
                <TreeDeciduous size={24} />
              </div>
              <span className="text-2xl font-serif font-bold text-brand-green tracking-tight">Ozelenitel.eu</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-slate-600 hover:text-brand-green transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('process')} className="text-sm font-medium text-slate-600 hover:text-brand-green transition-colors">Процес</button>
              <button onClick={() => scrollToSection('offer')} className="text-sm font-medium text-slate-600 hover:text-brand-green transition-colors">Защо нас?</button>
              <a href="tel:+359888000000" className="flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-light-green transition-all shadow-md shadow-brand-green/20">
                <Phone size={16} />
                <span>0888 000 000</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <button onClick={() => scrollToSection('services')} className="block w-full text-left text-lg font-medium text-slate-700">Услуги</button>
                <button onClick={() => scrollToSection('process')} className="block w-full text-left text-lg font-medium text-slate-700">Процес</button>
                <button onClick={() => scrollToSection('offer')} className="block w-full text-left text-lg font-medium text-slate-700">Защо нас?</button>
                <a href="tel:+359888000000" className="flex items-center justify-center gap-2 bg-brand-green text-white w-full py-4 rounded-xl font-bold">
                  <Phone size={20} />
                  <span>Обадете се сега</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558905619-17142497f15b?auto=format&fit=crop&q=80&w=2000" 
            alt="Beautiful garden" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 size={14} />
                <span>Лидер в озеленяването за България</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
                Превърнете двора си в <span className="text-brand-green italic">личен оазис</span> без излишни нерви.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Професионално проектиране, изграждане и автоматизирано напояване за перфектна градина целогодишно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-brand-green text-white rounded-xl font-bold text-lg hover:bg-brand-light-green transition-all shadow-xl shadow-brand-green/30 flex items-center justify-center gap-2 group"
                >
                  Вземете Безплатен План
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  Нашите Услуги
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="Customer" 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900">500+</span> доволни клиенти в цялата страна
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Landscaping work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">100% Гаранция</p>
                  <p className="text-xs text-slate-500">За прихващане на всяко засадено растение.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grand Slam Offer Section */}
      <section id="offer" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Защо да изберете нас? <span className="text-brand-green italic">(Повече от просто косене)</span>
            </h2>
            <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Box className="text-brand-green" size={32} />,
                title: "Безплатен 3D проект",
                desc: "Вижте градината си преди да започнем. Пълен одит на терена и почвата."
              },
              {
                icon: <ShieldCheck className="text-brand-green" size={32} />,
                title: "Пълна гаранция",
                desc: "Гарантираме прихващането на растителността. Ако нещо изсъхне, го сменяме."
              },
              {
                icon: <FileText className="text-brand-green" size={32} />,
                title: "Безплатен PDF наръчник",
                desc: "Получавате детайлни инструкции за поддръжка при запитване днес."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-brand-green/5 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Нашите Експертни Услуги</h2>
              <p className="text-lg text-slate-600">Всичко необходимо за Вашата градина от А до Я. Професионализъм и внимание към всеки детайл.</p>
            </div>
            <button onClick={() => scrollToSection('contact')} className="text-brand-green font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Всички услуги <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Layout size={24} />,
                title: "Проектиране",
                desc: "Индивидуални ландшафтни проекти, съобразени с Вашите желания и климата.",
                img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=600"
              },
              {
                icon: <TreeDeciduous size={24} />,
                title: "Озеленяване",
                desc: "Засаждане на декоративна растителност и изграждане на тревни площи.",
                img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=600"
              },
              {
                icon: <Droplets size={24} />,
                title: "Поливни системи",
                desc: "Автоматизирани системи за напояване, пестящи вода и време.",
                img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=600"
              },
              {
                icon: <Scissors size={24} />,
                title: "Поддръжка",
                desc: "Абонаментна грижа за перфектен вид на Вашата градина през целия сезон.",
                img: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&q=80&w=600"
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-brand-green text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white">
            <path d="M44.7,-76.4C58.1,-69.2,69.2,-56.1,77.3,-41.4C85.4,-26.7,90.5,-10.3,88.5,5.3C86.5,20.9,77.4,35.7,66.4,48.2C55.4,60.7,42.5,70.9,28.2,76.4C13.9,81.9,-1.8,82.7,-17.5,79.5C-33.2,76.3,-48.9,69.1,-61.4,57.7C-73.9,46.3,-83.2,30.7,-86.5,14.3C-89.8,-2.1,-87.1,-19.3,-79.3,-34.4C-71.5,-49.5,-58.6,-62.5,-44.1,-69.3C-29.6,-76.1,-14.8,-76.7,0.8,-78.1C16.4,-79.5,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Пътят към Вашата Зелена Градина</h2>
            <p className="text-brand-accent font-medium text-lg uppercase tracking-widest">3 лесни стъпки</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/20 z-0"></div>

            {[
              {
                step: "01",
                title: "Оглед и консултация",
                desc: "Идваме на място, за да се запознаем с терена и Вашите идеи."
              },
              {
                step: "02",
                title: "Дизайн и оферта",
                desc: "Изготвяме проект и детайлна оферта без скрити разходи."
              },
              {
                step: "03",
                title: "Прецизно изпълнение",
                desc: "Нашите екипи преобразяват двора Ви бързо и професионално."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-24 h-24 bg-white text-brand-green rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-2xl border-4 border-brand-accent">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 grid lg:grid-cols-2">
            <div className="p-10 lg:p-20 bg-slate-50">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Готови ли сте за промяна?</h2>
              <p className="text-lg text-slate-600 mb-10">
                Заявете безплатен оглед сега – местата за този месец са ограничени! Нашите експерти ще се свържат с Вас до 24 часа.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-green shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Телефон за връзка</p>
                    <p className="text-xl font-bold text-slate-900">0888 000 000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-green shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email</p>
                    <p className="text-xl font-bold text-slate-900">office@ozelenitel.eu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 lg:p-20">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Вашето Име</label>
                  <input 
                    type="text" 
                    placeholder="Иван Иванов"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    placeholder="0888 123 456"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Имейл</label>
                  <input 
                    type="email" 
                    placeholder="ivan@example.com"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  />
                </div>
                <button className="w-full py-5 bg-brand-green text-white rounded-xl font-bold text-lg hover:bg-brand-light-green transition-all shadow-xl shadow-brand-green/20">
                  Заявете Безплатен Оглед
                </button>
                <p className="text-center text-xs text-slate-400">
                  С изпращането на формата се съгласявате с обработката на личните Ви данни.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white">
                  <TreeDeciduous size={24} />
                </div>
                <span className="text-2xl font-serif font-bold tracking-tight">Ozelenitel.eu</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Вашият доверен партньор в създаването на красиви и функционални градини. Ние вярваме, че всеки заслужава собствен зелен рай.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Бързи Връзки</h4>
              <ul className="space-y-4 text-slate-400">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">Начало</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors">Процес</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Контакти</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Контакти</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3"><Phone size={18} /> 0888 000 000</li>
                <li className="flex items-center gap-3"><MessageCircle size={18} /> office@ozelenitel.eu</li>
                <li className="text-sm">гр. София, България</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Ozelenitel.eu. Всички права запазени.
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="viber://chat?number=+359888000000" 
          className="w-14 h-14 bg-[#7360f2] text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <MessageCircle size={28} />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+359888000000" 
          className="w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <Phone size={28} />
        </motion.a>
      </div>
    </div>
  );
}
