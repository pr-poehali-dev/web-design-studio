import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">WebCraft</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#process" className="text-foreground hover:text-primary transition-colors">Процесс</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">Начать проект</Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Создаём веб-дизайн, который{" "}
                <span className="text-accent">работает</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Разрабатываем интерфейсы, которые не просто красивы, но и решают бизнес-задачи. 
                Фокусируемся на пользовательском опыте и конверсиях.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/1f71852f-6a9a-47e4-8fce-cee91aceb8a5/files/c4d8e921-6a01-42a7-b01f-386bacb18c91.jpg"
                alt="Команда дизайнеров"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/1f71852f-6a9a-47e4-8fce-cee91aceb8a5/files/7db71cb5-75ae-42a5-96ee-4b17918a5edd.jpg"
                alt="Процесс работы"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">О студии</h2>
              <p className="text-lg text-muted-foreground mb-6">
                WebCraft — это команда опытных дизайнеров и UX-специалистов, которые создают 
                цифровые продукты с 2015 года. Мы помогли более 200 компаниям улучшить их 
                онлайн-присутствие и увеличить конверсию.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Наш подход основан на глубоком исследовании пользователей, данных и 
                современных практиках UX/UI дизайна.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл разработки дизайна — от исследования до передачи в разработку
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale animate-fade-in border-2">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="Palette" className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">UI/UX дизайн</h3>
                <p className="text-muted-foreground mb-6">
                  Создаём интуитивные интерфейсы, которые повышают вовлечённость пользователей 
                  и конверсию вашего продукта.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-sm">Пользовательские исследования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-sm">Прототипирование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-sm">Визуальный дизайн</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale animate-fade-in border-2">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="Layout" className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Веб-дизайн</h3>
                <p className="text-muted-foreground mb-6">
                  Разработка дизайна сайтов любой сложности: от лендингов до 
                  корпоративных порталов и e-commerce.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-sm">Адаптивный дизайн</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-sm">Дизайн-системы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-sm">Figma файлы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale animate-fade-in border-2">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="Smartphone" className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Мобильные приложения</h3>
                <p className="text-muted-foreground mb-6">
                  Дизайн мобильных приложений для iOS и Android с фокусом на 
                  удобство использования одной рукой.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-sm">iOS & Android дизайн</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-sm">Интерактивные прототипы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span className="text-sm">UX аудит</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Процесс работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Структурированный подход к созданию дизайна
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                number: "01",
                title: "Исследование",
                description: "Анализируем вашу нишу, конкурентов и целевую аудиторию. Проводим интервью с пользователями.",
                icon: "Search"
              },
              {
                number: "02",
                title: "Стратегия",
                description: "Разрабатываем информационную архитектуру и пользовательские сценарии.",
                icon: "Target"
              },
              {
                number: "03",
                title: "Прототипирование",
                description: "Создаём интерактивные прототипы и тестируем их на реальных пользователях.",
                icon: "Box"
              },
              {
                number: "04",
                title: "Визуальный дизайн",
                description: "Разрабатываем финальный дизайн с учётом вашего бренда и современных трендов.",
                icon: "Paintbrush"
              },
              {
                number: "05",
                title: "Передача в разработку",
                description: "Готовим дизайн-систему, компоненты и документацию для разработчиков.",
                icon: "Rocket"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name={step.icon as any} className="text-accent" size={24} />
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Опытные специалисты, которые любят своё дело
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Анна Соколова", role: "Lead UX Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
              { name: "Михаил Петров", role: "UI Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
              { name: "Елена Иванова", role: "Product Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
              { name: "Дмитрий Козлов", role: "UX Researcher", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" }
            ].map((member, index) => (
              <Card key={index} className="hover-scale animate-fade-in overflow-hidden border-2">
                <CardContent className="p-0">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши партнёры
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "WebCraft полностью преобразили наш сайт. Конверсия выросла на 40% за первые два месяца после запуска.",
                author: "Александр Смирнов",
                position: "CEO, TechStart"
              },
              {
                text: "Профессиональная команда, которая действительно слушает клиента. Результат превзошёл все ожидания!",
                author: "Мария Волкова",
                position: "Marketing Director, CloudSoft"
              },
              {
                text: "Отличное понимание UX и бизнес-задач. Рекомендую всем, кто ценит качество и результат.",
                author: "Игорь Новиков",
                position: "Founder, StartupHub"
              },
              {
                text: "Работали над редизайном мобильного приложения. Отзывы пользователей улучшились с 3.2 до 4.8 звёзд!",
                author: "Ольга Морозова",
                position: "Product Manager, FinApp"
              }
            ].map((review, index) => (
              <Card key={index} className="animate-fade-in border-2">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-lg mb-6 text-muted-foreground italic">"{review.text}"</p>
                  <div>
                    <div className="font-bold">{review.author}</div>
                    <div className="text-sm text-muted-foreground">{review.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Обсудим ваш проект?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение 24 часов для обсуждения деталей.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon name="Mail" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">hello@webcraft.studio</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Офис</div>
                    <div className="text-muted-foreground">Москва, ул. Тверская, 10</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="animate-fade-in border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ivan@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Расскажите о проекте</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите ваши задачи и цели..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">WebCraft</div>
              <p className="text-primary-foreground/80">
                Создаём дизайн, который работает
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">UI/UX дизайн</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Веб-дизайн</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Мобильные приложения</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">О нас</a></li>
                <li><a href="#team" className="hover:text-primary-foreground transition-colors">Команда</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 WebCraft Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
