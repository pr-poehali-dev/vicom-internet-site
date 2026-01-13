import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  return (
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

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="glass hover-scale hidden sm:flex"
              onClick={() => window.open('http://stat.vikomtel.ru', '_blank')}
            >
              <Icon name="User" size={16} className="mr-2" />
              Личный кабинет
            </Button>
            <Button className="gradient-primary hover-scale">
              <Icon name="Phone" size={16} className="mr-2" />
              8-800-555-35-35
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;