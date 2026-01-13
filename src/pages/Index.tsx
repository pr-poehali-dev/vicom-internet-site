import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const tariffs = [
    {
      name: 'Старт',
      speed: '50 Мбит/с',
      price: 390,
      features: ['Безлимитный интернет', 'Стабильное соединение', 'Техподдержка 24/7', 'Бесплатное подключение'],
      gradient: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Оптимум',
      speed: '100 Мбит/с',
      price: 590,
      features: ['Безлимитный интернет', 'Высокая скорость', 'Приоритетная поддержка', 'Бесплатный роутер', 'Статический IP'],
      gradient: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Максимум',
      speed: '200 Мбит/с',
      price: 790,
      features: ['Безлимитный интернет', 'Максимальная скорость', 'VIP поддержка', 'Wi-Fi 6 роутер', 'Статический IP', 'Антивирус в подарок'],
      gradient: 'from-orange-500 to-red-500',
      popular: false
    },
    {
      name: 'Ультра',
      speed: '500 Мбит/с',
      price: 1190,
      features: ['Безлимитный интернет', 'Гигабитная скорость', 'Персональный менеджер', 'Mesh Wi-Fi система', 'Белый IP', 'Премиум антивирус', 'Облачное хранилище 1 ТБ'],
      gradient: 'from-violet-600 to-fuchsia-600',
      popular: false
    }
  ];

  const regions = [
    { name: 'Московская область', coverage: 95, color: 'bg-green-500', cities: ['Москва', 'Подольск', 'Химки', 'Балашиха'] },
    { name: 'Санкт-Петербург', coverage: 92, color: 'bg-blue-500', cities: ['Санкт-Петербург', 'Колпино', 'Пушкин'] },
    { name: 'Екатеринбург', coverage: 88, color: 'bg-purple-500', cities: ['Екатеринбург', 'Березовский'] },
    { name: 'Новосибирск', coverage: 85, color: 'bg-orange-500', cities: ['Новосибирск', 'Бердск'] },
    { name: 'Казань', coverage: 90, color: 'bg-pink-500', cities: ['Казань', 'Зеленодольск'] },
    { name: 'Нижний Новгород', coverage: 87, color: 'bg-cyan-500', cities: ['Нижний Новгород', 'Дзержинск'] }
  ];

  const faqItems = [
    { question: 'Как быстро можно подключить интернет?', answer: 'Подключение занимает 1-3 рабочих дня с момента оформления заявки. В некоторых районах возможно подключение в день обращения.' },
    { question: 'Нужно ли платить за оборудование?', answer: 'Роутер предоставляется бесплатно на тарифах Оптимум и выше. На тарифе Старт роутер в аренду за 50₽/мес или выкуп за 1990₽.' },
    { question: 'Что делать при проблемах с интернетом?', answer: 'Свяжитесь с нашей службой поддержки по телефону 8-800-555-35-35 (круглосуточно) или напишите в чат на сайте.' },
    { question: 'Можно ли сменить тариф?', answer: 'Да, смена тарифа производится бесплатно в любое время через личный кабинет или по звонку в поддержку.' },
    { question: 'Какие способы оплаты доступны?', answer: 'Оплата банковской картой, через СБП, автоплатеж, в отделениях банков или через мобильные приложения.' }
  ];

  const blogPosts = [
    { 
      title: 'Wi-Fi 6: что это и нужен ли он вам?', 
      date: '15 января 2026', 
      image: '📡',
      excerpt: 'Разбираемся в новом стандарте беспроводной связи и его преимуществах для домашнего интернета.'
    },
    { 
      title: 'Как защитить домашнюю сеть от взлома', 
      date: '10 января 2026', 
      image: '🔒',
      excerpt: '5 простых шагов для повышения безопасности вашего Wi-Fi и защиты личных данных.'
    },
    { 
      title: 'Оптимальная скорость интернета для семьи', 
      date: '5 января 2026', 
      image: '⚡',
      excerpt: 'Расчет необходимой скорости в зависимости от количества устройств и сценариев использования.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Icon name="Wifi" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold gradient-text">Виком</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Тарифы', 'Покрытие', 'О компании', 'Блог', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase().replace(' ', '-') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <Button className="gradient-primary hover-scale">
              <Icon name="Phone" size={16} className="mr-2" />
              8-800-555-35-35
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="главная" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 gradient-accent text-white border-0 px-4 py-2 text-sm">
              🚀 Скорость до 500 Мбит/с
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Интернет нового
              <span className="gradient-text block">поколения</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Стабильное подключение, высокая скорость и круглосуточная поддержка для вашего дома и бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary hover-scale hover-glow text-lg px-8">
                <Icon name="Zap" size={20} className="mr-2" />
                Подключить интернет
              </Button>
              <Button size="lg" variant="outline" className="glass hover-scale text-lg px-8">
                <Icon name="Calculator" size={20} className="mr-2" />
                Проверить адрес
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              {[
                { icon: 'Users', value: '250K+', label: 'Довольных клиентов' },
                { icon: 'MapPin', value: '15+', label: 'Регионов России' },
                { icon: 'Award', value: '99.9%', label: 'Время безотказной работы' }
              ].map((stat, i) => (
                <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="glass rounded-2xl p-6 hover-scale">
                    <Icon name={stat.icon as any} size={32} className="text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="тарифы" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 gradient-primary text-white border-0">Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Выберите свой <span className="gradient-text">тариф</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей. Безлимитный интернет на всех тарифах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tariffs.map((tariff, i) => (
              <Card 
                key={i} 
                className={`relative overflow-hidden glass hover-scale hover-glow animate-fade-in ${
                  tariff.popular ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tariff.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="gradient-accent text-white border-0">Популярный</Badge>
                  </div>
                )}
                
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tariff.gradient} flex items-center justify-center mb-4`}>
                    <Icon name="Wifi" className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{tariff.name}</h3>
                  <div className="text-4xl font-black mb-1">{tariff.price}₽</div>
                  <div className="text-muted-foreground mb-4">в месяц</div>
                  
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${tariff.gradient} text-white font-bold mb-6`}>
                    {tariff.speed}
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {tariff.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${tariff.gradient} hover-scale`}>
                    Подключить
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section id="покрытие" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 gradient-secondary text-white border-0">География</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Зона <span className="gradient-text">покрытия</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы работаем в крупнейших городах России. Проверьте доступность по вашему адресу
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {regions.map((region, i) => (
                <Card
                  key={i}
                  className={`glass cursor-pointer transition-all duration-300 hover-scale hover-glow animate-fade-in ${
                    selectedRegion === region.name ? 'ring-2 ring-primary' : ''
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  onClick={() => setSelectedRegion(selectedRegion === region.name ? null : region.name)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${region.color} animate-pulse`} />
                        <h3 className="font-bold">{region.name}</h3>
                      </div>
                      <Badge variant="secondary">{region.coverage}%</Badge>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Покрытие</span>
                        <span>{region.coverage}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${region.color} transition-all duration-1000`}
                          style={{ width: `${region.coverage}%` }}
                        />
                      </div>
                    </div>
                    
                    {selectedRegion === region.name && (
                      <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                        <div className="text-sm text-muted-foreground mb-2">Доступные города:</div>
                        <div className="flex flex-wrap gap-2">
                          {region.cities.map((city, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              <Icon name="MapPin" size={12} className="mr-1" />
                              {city}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <Card className="glass p-8 text-center">
              <Icon name="Search" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Проверить доступность</h3>
              <p className="text-muted-foreground mb-6">Введите ваш адрес, чтобы узнать о возможности подключения</p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input 
                  type="text" 
                  placeholder="Введите ваш адрес" 
                  className="flex-1 px-4 py-3 rounded-xl glass border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="gradient-primary px-6">
                  <Icon name="Search" size={20} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="о-компании" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <Badge className="mb-4 gradient-accent text-white border-0">О нас</Badge>
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Ваш надежный <span className="gradient-text">провайдер</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  ООО "Виком" работает на рынке телекоммуникационных услуг с 2010 года. За это время мы подключили более 250 000 абонентов и стали одним из крупнейших региональных провайдеров.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Наша миссия — предоставлять качественный интернет по доступным ценам. Мы инвестируем в современное оборудование и постоянно расширяем зону покрытия.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: 'Shield', text: 'Лицензия Роскомнадзора' },
                    { icon: 'Award', text: 'Лучший провайдер 2025 по версии Рунета' },
                    { icon: 'HeartHandshake', text: 'Более 15 лет на рынке' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} className="text-white" size={20} />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
                {[
                  { icon: 'TrendingUp', value: '15+', label: 'Лет опыта' },
                  { icon: 'Users', value: '250K+', label: 'Клиентов' },
                  { icon: 'Zap', value: '99.9%', label: 'Uptime' },
                  { icon: 'Headphones', value: '24/7', label: 'Поддержка' }
                ].map((stat, i) => (
                  <Card key={i} className="glass p-6 text-center hover-scale">
                    <Icon name={stat.icon as any} size={40} className="text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 gradient-primary text-white border-0">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Часто задаваемые <span className="gradient-text">вопросы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о подключении и использовании наших услуг
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`} 
                  className="glass rounded-2xl px-6 border-0 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-bold text-lg pr-4">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card className="glass p-8 text-center mt-8">
              <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Не нашли ответ?</h3>
              <p className="text-muted-foreground mb-6">Свяжитесь с нашей службой поддержки — мы работаем круглосуточно</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="gradient-primary hover-scale">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить
                </Button>
                <Button variant="outline" className="glass hover-scale">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Написать
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="блог" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 gradient-accent text-white border-0">Блог</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Полезные <span className="gradient-text">статьи</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Советы по настройке интернета, новости технологий и лайфхаки для пользователей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <Card 
                key={i} 
                className="glass overflow-hidden hover-scale hover-glow cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="px-0 hover:text-primary">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="поддержка" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <Card className="glass p-12 text-center">
              <div className="inline-block p-4 rounded-2xl gradient-primary mb-6">
                <Icon name="Headphones" size={48} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Служба <span className="gradient-text">поддержки</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Наши специалисты готовы помочь вам 24/7. Среднее время ответа — менее 2 минут
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: 'Phone', title: 'Телефон', value: '8-800-555-35-35', subtitle: 'Звонок бесплатный' },
                  { icon: 'Mail', title: 'Email', value: 'support@vikom.ru', subtitle: 'Ответим в течение часа' },
                  { icon: 'MessageSquare', title: 'Онлайн-чат', value: 'Написать в чат', subtitle: 'Мгновенный ответ' }
                ].map((contact, i) => (
                  <div key={i} className="glass rounded-2xl p-6 hover-scale">
                    <Icon name={contact.icon as any} size={32} className="text-primary mx-auto mb-3" />
                    <div className="font-bold mb-1">{contact.title}</div>
                    <div className="text-primary font-bold mb-1">{contact.value}</div>
                    <div className="text-sm text-muted-foreground">{contact.subtitle}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary hover-scale hover-glow">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Открыть чат
                </Button>
                <Button size="lg" variant="outline" className="glass hover-scale">
                  <Icon name="FileText" size={20} className="mr-2" />
                  База знаний
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 gradient-primary text-white border-0">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Свяжитесь <span className="gradient-text">с нами</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Офисы и точки подключения по всей России
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass p-8">
                <h3 className="text-2xl font-bold mb-6">Головной офис</h3>
                <div className="space-y-4">
                  {[
                    { icon: 'MapPin', text: 'г. Москва, ул. Тверская, д. 123' },
                    { icon: 'Phone', text: '8-800-555-35-35' },
                    { icon: 'Mail', text: 'info@vikom.ru' },
                    { icon: 'Clock', text: 'Пн-Пт: 9:00 - 21:00, Сб-Вс: 10:00 - 18:00' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} className="text-white" size={20} />
                      </div>
                      <span className="pt-2">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-bold mb-4">Социальные сети</h4>
                  <div className="flex gap-3">
                    {['MessageCircle', 'Youtube', 'Instagram', 'Twitter'].map((social, i) => (
                      <button key={i} className="w-12 h-12 rounded-xl glass hover-scale flex items-center justify-center">
                        <Icon name={social as any} size={20} className="text-primary" />
                      </button>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="glass p-8">
                <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl glass border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl glass border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl glass border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Ваше сообщение"
                    />
                  </div>
                  <Button className="w-full gradient-primary hover-scale hover-glow">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                    <Icon name="Wifi" className="text-white" size={24} />
                  </div>
                  <span className="text-2xl font-bold gradient-text">Виком</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Интернет-провайдер нового поколения. Надежность и скорость для вашего дома.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Услуги</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {['Домашний интернет', 'Интернет для бизнеса', 'Цифровое ТВ', 'Облачные решения'].map((item, i) => (
                    <div key={i} className="hover:text-primary cursor-pointer transition-colors">{item}</div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Компания</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {['О нас', 'Вакансии', 'Новости', 'Партнерам'].map((item, i) => (
                    <div key={i} className="hover:text-primary cursor-pointer transition-colors">{item}</div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Поддержка</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {['Личный кабинет', 'Помощь', 'Документы', 'Контакты'].map((item, i) => (
                    <div key={i} className="hover:text-primary cursor-pointer transition-colors">{item}</div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © 2026 ООО "Виком". Все права защищены.
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <span className="hover:text-primary cursor-pointer transition-colors">Политика конфиденциальности</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Пользовательское соглашение</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
