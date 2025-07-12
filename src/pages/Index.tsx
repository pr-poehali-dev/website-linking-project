import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={24} className="text-primary" />
              <span className="text-xl font-semibold text-black">
                ChatGPT API Access
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#pricing"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Тарифы
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-black transition-colors"
              >
                FAQ
              </a>
              <Button variant="outline" size="sm">
                Войти
              </Button>
              <Button size="sm">Начать</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <Icon name="Sparkles" size={14} className="mr-1" />
            Профессиональный доступ к ChatGPT API
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Мощные возможности
            <br />
            <span className="text-primary">ChatGPT API</span>
            <br />
            без ограничений
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Получите прямой доступ к ChatGPT API с гибкими тарифами, высокой
            скоростью и надежностью для ваших проектов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3">
              <Icon name="Rocket" size={16} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="Play" size={16} className="mr-2" />
              Демо
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Надежная инфраструктура и прозрачные условия для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon name="Gauge" size={32} className="text-primary mb-4" />
                <CardTitle className="text-xl">Высокая скорость</CardTitle>
                <CardDescription>
                  Минимальные задержки и максимальная производительность API
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon name="Shield" size={32} className="text-primary mb-4" />
                <CardTitle className="text-xl">Безопасность</CardTitle>
                <CardDescription>
                  Защищенные соединения и конфиденциальность ваших данных
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon
                  name="BarChart3"
                  size={32}
                  className="text-primary mb-4"
                />
                <CardTitle className="text-xl">Аналитика</CardTitle>
                <CardDescription>
                  Подробная статистика использования и мониторинг API
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Выберите тариф
            </h2>
            <p className="text-gray-600">
              Прозрачная тарификация без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">Starter</CardTitle>
                <div className="text-3xl font-bold">
                  $19
                  <span className="text-base font-normal text-gray-600">
                    /месяц
                  </span>
                </div>
                <CardDescription>Для небольших проектов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm">100,000 токенов/месяц</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm">Базовая поддержка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm">API доступ</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Professional</CardTitle>
                <div className="text-3xl font-bold">
                  $79
                  <span className="text-base font-normal text-gray-600">
                    /месяц
                  </span>
                </div>
                <CardDescription>Для растущих команд</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm">500,000 токенов/месяц</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm">Приоритетная поддержка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm">Аналитика и мониторинг</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm">Белый список IP</span>
                  </div>
                </div>
                <Button className="w-full">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">Enterprise</CardTitle>
                <div className="text-3xl font-bold">
                  $299
                  <span className="text-base font-normal text-gray-600">
                    /месяц
                  </span>
                </div>
                <CardDescription>Для крупного бизнеса</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm">Безлимитные токены</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm">24/7 поддержка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm">Кастомная интеграция</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm">SLA 99.9%</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Частые вопросы
            </h2>
            <p className="text-gray-600">Ответы на самые популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-medium">
                Как начать использовать API?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Зарегистрируйтесь, выберите тариф и получите API ключ для
                интеграции в ваше приложение.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-medium">
                Есть ли лимиты на запросы?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Лимиты зависят от выбранного тарифа. На тарифе Enterprise
                лимитов нет.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-medium">
                Можно ли изменить тариф?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Да, вы можете повысить или понизить тариф в любое время через
                личный кабинет.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-medium">
                Какая гарантия работы сервиса?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Мы гарантируем uptime 99.9% для всех тарифов и полную
                компенсацию в случае простоя.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать работу с ChatGPT API?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Получите доступ к мощному API уже сегодня
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            <Icon name="ArrowRight" size={16} className="mr-2" />
            Создать аккаунт
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={20} className="text-primary" />
                <span className="font-semibold">ChatGPT API Access</span>
              </div>
              <p className="text-sm text-gray-600">
                Надежный доступ к ChatGPT API для вашего бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Документация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Справка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Статус
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Карьера
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; 2024 ChatGPT API Access. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
