import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">UX Studio</div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">Процесс</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">Связаться</Button>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Проектируем интерфейсы,<br />которые <span className="text-primary">любят пользователи</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Мы создаём цифровые продукты с фокусом на пользовательский опыт. 
              Каждое решение основано на исследованиях и заботе о людях.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Посмотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                О студии
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы — команда дизайнеров и исследователей, которые верят, что хороший интерфейс — 
                это не просто красиво, но прежде всего удобно.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наш подход строится на глубоком понимании потребностей пользователей, 
                аналитике данных и постоянном тестировании гипотез.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/1f71852f-6a9a-47e4-8fce-cee91aceb8a5/files/6e7e41aa-6407-4d22-a960-fdf19b57d514.jpg" 
                alt="Команда UX студии" 
                className="rounded-2xl shadow-2xl w-full hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл работы над пользовательским опытом — от исследований до финального дизайна
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "Users",
                title: "UX-исследования",
                description: "Глубинные интервью, юзабилити-тесты, CustDev и аналитика поведения пользователей"
              },
              {
                icon: "Layers",
                title: "Проектирование интерфейсов",
                description: "Прототипирование, UI-дизайн и создание дизайн-систем для ваших продуктов"
              },
              {
                icon: "Target",
                title: "UX-аудит",
                description: "Анализ существующих интерфейсов и рекомендации по улучшению юзабилити"
              }
            ].map((service, index) => (
              <Card key={index} className="hover-scale animate-fade-in border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Процесс работы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и понятный путь от идеи до готового продукта
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Исследование",
                description: "Изучаем бизнес-цели, целевую аудиторию и анализируем конкурентов"
              },
              {
                step: "02",
                title: "Стратегия",
                description: "Формируем концепцию продукта и определяем ключевые пользовательские сценарии"
              },
              {
                step: "03",
                title: "Прототипирование",
                description: "Создаём прототипы и тестируем их на реальных пользователях"
              },
              {
                step: "04",
                title: "Дизайн",
                description: "Разрабатываем финальный UI-дизайн и дизайн-систему"
              },
              {
                step: "05",
                title: "Передача в разработку",
                description: "Готовим макеты и документацию для разработчиков, сопровождаем внедрение"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 animate-fade-in">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Наша команда
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессионалы, которые создают продукты с душой
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Анна Смирнова",
                role: "Lead UX Researcher",
                image: "https://cdn.poehali.dev/projects/1f71852f-6a9a-47e4-8fce-cee91aceb8a5/files/584e62a3-7576-46c8-8606-e6fb24dadd48.jpg"
              },
              {
                name: "Дмитрий Козлов",
                role: "Senior UI/UX Designer",
                image: "https://cdn.poehali.dev/projects/1f71852f-6a9a-47e4-8fce-cee91aceb8a5/files/584e62a3-7576-46c8-8606-e6fb24dadd48.jpg"
              },
              {
                name: "Мария Петрова",
                role: "Product Designer",
                image: "https://cdn.poehali.dev/projects/1f71852f-6a9a-47e4-8fce-cee91aceb8a5/files/584e62a3-7576-46c8-8606-e6fb24dadd48.jpg"
              }
            ].map((member, index) => (
              <Card key={index} className="hover-scale animate-fade-in overflow-hidden border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши партнёры
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "Команда UX Studio провела глубокий аудит нашего сервиса и помогла увеличить конверсию на 40%. Профессионалы своего дела!",
                author: "Алексей Иванов",
                position: "CEO, TechStart"
              },
              {
                text: "Работали над редизайном мобильного приложения. Результат превзошёл ожидания — пользователи в восторге от нового интерфейса.",
                author: "Елена Волкова",
                position: "Product Manager, FinApp"
              },
              {
                text: "Ребята не просто нарисовали красивый дизайн, они действительно погрузились в наш бизнес и помогли решить проблемы пользователей.",
                author: "Михаил Соколов",
                position: "Founder, EduTech"
              },
              {
                text: "Впечатлила системность подхода и внимание к деталям. Каждое решение было обосновано исследованиями и данными.",
                author: "Ольга Новикова",
                position: "Head of Digital, Retail Pro"
              }
            ].map((review, index) => (
              <Card key={index} className="animate-fade-in border-2 hover:border-primary/30 transition-all">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 text-lg italic">
                    "{review.text}"
                  </p>
                  <div>
                    <div className="font-bold text-foreground">{review.author}</div>
                    <div className="text-sm text-muted-foreground">{review.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Обсудим ваш проект?
              </h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в течение дня
              </p>
            </div>

            <Card className="animate-fade-in border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Имя
                    </label>
                    <Input 
                      placeholder="Как к вам обращаться?"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Расскажите о проекте
                    </label>
                    <Textarea 
                      placeholder="Опишите задачу, которую нужно решить..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
                <div className="font-medium text-foreground">Email</div>
                <div className="text-muted-foreground">hello@uxstudio.ru</div>
              </div>
              <div className="animate-fade-in">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
                <div className="font-medium text-foreground">Телефон</div>
                <div className="text-muted-foreground">+7 (495) 123-45-67</div>
              </div>
              <div className="animate-fade-in">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
                <div className="font-medium text-foreground">Адрес</div>
                <div className="text-muted-foreground">Москва, ул. Примерная, 42</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
            <div>
              <div className="text-xl font-bold text-primary mb-4">UX Studio</div>
              <p className="text-sm text-muted-foreground">
                Проектируем интерфейсы с фокусом на пользовательский опыт
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">UX-исследования</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">UI-дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">UX-аудит</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О студии</a></li>
                <li><a href="#team" className="hover:text-primary transition-colors">Команда</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@uxstudio.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
            © 2024 UX Studio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
