import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
