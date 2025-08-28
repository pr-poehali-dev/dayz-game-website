import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Index = () => {
  const donationPackages = [
    {
      id: 1,
      title: "Новичок",
      price: "299₽",
      description: "Базовый набор для выживания",
      features: [
        "Стартовый набор оружия",
        "Медицинские принадлежности", 
        "Еда на 3 дня",
        "Рюкзак 20 слотов"
      ],
      popular: false,
      color: "bg-survival-charcoal"
    },
    {
      id: 2,
      title: "Выживший",
      price: "599₽", 
      description: "Продвинутый набор для опытных игроков",
      features: [
        "Военное снаряжение",
        "Улучшенные медикаменты",
        "Неделя запаса еды",
        "Рюкзак 40 слотов",
        "Приоритет в очереди"
      ],
      popular: true,
      color: "bg-survival-steel"
    },
    {
      id: 3,
      title: "Легенда",
      price: "1299₽",
      description: "VIP статус с эксклюзивными привилегиями",
      features: [
        "Полный арсенал оружия",
        "Бессмертие на час после спавна",
        "Месячный запас ресурсов",
        "Рюкзак 80 слотов",
        "Быстрый респавн",
        "Эксклюзивный транспорт"
      ],
      popular: false,
      color: "bg-gradient-to-br from-survival-orange to-yellow-600"
    }
  ]

  return (
    <div className="min-h-screen bg-survival-dark text-white font-body">
      {/* Header */}
      <nav className="bg-survival-charcoal border-b border-survival-gray/20 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-survival font-bold text-survival-orange">
            DAYZ STORE
          </div>
          <div className="flex space-x-6">
            <a href="#main" className="text-white hover:text-survival-orange transition-colors">Главная</a>
            <a href="#shop" className="text-white hover:text-survival-orange transition-colors">Магазин</a>
            <a href="#contact" className="text-white hover:text-survival-orange transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main" className="relative h-screen bg-cover bg-center" 
               style={{backgroundImage: 'url(/img/5e6c8987-7c70-4da2-bc5d-02c3848965ff.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto h-full flex items-center justify-center text-center px-4">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-survival font-bold text-white mb-6">
              ВЫЖИВИ ЛЮБОЙ ЦЕНОЙ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Добро пожаловать на официальный сервер DayZ. Приобретайте донат-пакеты 
              и получайте преимущества в борьбе за выживание.
            </p>
            <Button size="lg" className="bg-survival-orange hover:bg-orange-600 text-black font-semibold px-8 py-3 text-lg animate-pulse-glow">
              <Icon name="ShoppingCart" className="mr-2" />
              Перейти в магазин
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-survival-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-survival font-bold text-center text-white mb-12">
            ОСОБЕННОСТИ СЕРВЕРА
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-survival-orange rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={40} className="text-survival-dark" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Высокая производительность</h3>
              <p className="text-gray-400">Стабильный FPS и минимальные лаги для комфортной игры</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-survival-steel rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Активное сообщество</h3>
              <p className="text-gray-400">Более 500 игроков онлайн ежедневно</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-survival-orange rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={40} className="text-survival-dark" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Защита от читеров</h3>
              <p className="text-gray-400">Активная модерация и античит системы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-survival-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-survival font-bold text-white mb-4">
              ДОНАТ ПАКЕТЫ
            </h2>
            <p className="text-gray-400 text-lg">
              Выберите подходящий пакет и получите преимущества в игре
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {donationPackages.map((pkg) => (
              <Card key={pkg.id} className={`${pkg.color} border-survival-gray/30 text-white relative hover:scale-105 transition-transform animate-fade-in`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-survival-orange text-survival-dark font-semibold">
                    ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-survival text-white">{pkg.title}</CardTitle>
                  <CardDescription className="text-gray-300">{pkg.description}</CardDescription>
                  <div className="text-4xl font-bold text-survival-orange mt-2">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-200">
                        <Icon name="Check" size={16} className="text-survival-orange mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-survival-orange hover:bg-orange-600 text-survival-dark font-semibold">
                    <Icon name="ShoppingBag" className="mr-2" />
                    Купить пакет
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-survival-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-survival-orange mb-2">1,247</div>
              <div className="text-gray-400 font-semibold">Активных игроков</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-survival-orange mb-2">24/7</div>
              <div className="text-gray-400 font-semibold">Время работы</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-survival-orange mb-2">50+</div>
              <div className="text-gray-400 font-semibold">Модификаций</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-survival-orange mb-2">99.9%</div>
              <div className="text-gray-400 font-semibold">Аптайм сервера</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-survival-dark border-t border-survival-gray/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-survival font-bold text-survival-orange mb-4 md:mb-0">
              DAYZ STORE
            </div>
            <div className="flex space-x-6">
              <Icon name="MessageCircle" className="text-survival-steel hover:text-survival-orange cursor-pointer" />
              <Icon name="Users" className="text-survival-steel hover:text-survival-orange cursor-pointer" />
              <Icon name="Globe" className="text-survival-steel hover:text-survival-orange cursor-pointer" />
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-survival-gray/20">
            <p className="text-gray-400">© 2024 DayZ Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;