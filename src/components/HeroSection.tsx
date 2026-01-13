import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;