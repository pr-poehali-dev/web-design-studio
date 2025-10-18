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
      title: "Спасибо за ваше сообщение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Icon name="Sparkles" className="text-accent-foreground" size={22} />
              </div>
              <span className="text-2xl font-bold text-foreground">DesignHub</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Портфолио</a>
              <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">Команда</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex">Начать проект</Button>
          </div>
        </nav>
      </header>

      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
                Студия веб-дизайна
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
                Создаём сайты, в которые{" "}
                <span className="text-accent">влюбляются</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Разрабатываем современные веб-интерфейсы с душой. Наша миссия — сделать интернет красивее и удобнее, а ваш бизнес — успешнее.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Eye" className="mr-2" size={20} />
                  Посмотреть работы
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-accent">150+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-accent">8 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-accent/5 rounded-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/1f71852f-6a9a-47e4-8fce-cee91aceb8a5/files/85b60a24-807f-4a44-8a85-15440fefa50d.jpg"
                alt="Команда дизайнеров за работой"
                className="rounded-2xl shadow-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/40">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Что мы делаем
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл создания веб-проектов — от идеи до запуска
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "Layout",
                title: "Дизайн сайтов",
                description: "Создаём уникальный дизайн лендингов, корпоративных сайтов и интернет-магазинов с учётом вашего бренда.",
                features: ["Адаптивный дизайн", "UI/UX проектирование", "Прототипирование"]
              },
              {
                icon: "Palette",
                title: "Фирменный стиль",
                description: "Разрабатываем визуальную айдентику: логотип, цветовую палитру, типографику и дизайн-систему.",
                features: ["Логотип и брендбук", "Цветовая палитра", "Типографика"]
              },
              {
                icon: "Code",
                title: "Разработка",
                description: "Превращаем дизайн в работающий сайт на современных технологиях с быстрой загрузкой.",
                features: ["Вёрстка и код", "Анимации", "SEO-оптимизация"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover-scale animate-fade-in border-2 group hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent flex items-center justify-center mb-6 transition-all">
                    <Icon name={service.icon as any} className="text-accent group-hover:text-accent-foreground transition-all" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" className="text-accent" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in order-2 md:order-1">
              <img
                src="https://cdn.poehali.dev/projects/1f71852f-6a9a-47e4-8fce-cee91aceb8a5/files/fb324646-0688-46c6-ad8f-77a24146d6f6.jpg"
                alt="Встреча с клиентами"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                О студии
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Мы создаём не просто сайты, а<span className="text-accent"> цифровые впечатления</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                DesignHub — это команда увлечённых профессионалов, которые живут дизайном. 
                Мы верим, что каждый проект уникален и заслуживает индивидуального подхода.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                С 2015 года мы помогаем бизнесу выделяться в интернете. Наша философия — 
                сочетание эстетики, функциональности и человечности в каждом пикселе.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Heart", text: "Работаем с душой" },
                  { icon: "Zap", text: "Быстрая разработка" },
                  { icon: "Users", text: "Личный подход" },
                  { icon: "Award", text: "Гарантия качества" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon name={item.icon as any} className="text-accent" size={20} />
                    </div>
                    <span className="font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/40">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Наши работы
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Портфолио</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Проекты, которыми мы гордимся
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: "EcoShop", category: "Интернет-магазин", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
              { title: "FitnessPro", category: "Лендинг", image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&h=400&fit=crop" },
              { title: "TechStart", category: "Корпоративный сайт", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop" },
              { title: "CafeDeluxe", category: "Ресторан", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop" },
              { title: "ArtGallery", category: "Портфолио", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop" },
              { title: "LawFirm", category: "Юридические услуги", image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop" }
            ].map((project, index) => (
              <Card key={index} className="hover-scale animate-fade-in overflow-hidden border-2 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <Button variant="secondary" size="sm">
                        <Icon name="Eye" className="mr-2" size={16} />
                        Смотреть проект
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Как мы работаем
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Процесс работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и понятный путь от идеи до результата
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", icon: "Lightbulb", title: "Обсуждение", desc: "Знакомимся, выясняем задачи и цели" },
              { step: "02", icon: "FileText", title: "Концепция", desc: "Создаём прототипы и согласовываем идею" },
              { step: "03", icon: "Paintbrush", title: "Дизайн", desc: "Разрабатываем визуальное решение" },
              { step: "04", icon: "Rocket", title: "Запуск", desc: "Тестируем и выводим проект в сеть" }
            ].map((item, index) => (
              <div key={index} className="animate-fade-in text-center">
                <div className="w-20 h-20 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-secondary/40">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Познакомьтесь
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наша команда</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Люди, которые создают красоту каждый день
            </p>
          </div>
          <div className="max-w-5xl mx-auto mb-12">
            <img
              src="https://cdn.poehali.dev/projects/1f71852f-6a9a-47e4-8fce-cee91aceb8a5/files/d6f6034e-10e6-4308-827d-aaaccc7c0d77.jpg"
              alt="Команда DesignHub"
              className="rounded-2xl shadow-2xl w-full animate-fade-in"
            />
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Анна Соколова", role: "Art Director", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
              { name: "Дмитрий Петров", role: "Lead Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
              { name: "Елена Иванова", role: "UX Designer", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
              { name: "Сергей Волков", role: "Frontend Developer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" }
            ].map((member, index) => (
              <Card key={index} className="animate-fade-in border-2 hover-scale overflow-hidden">
                <CardContent className="p-0">
                  <img src={member.avatar} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Отзывы
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "DesignHub сделали невероятный сайт для нашего ресторана! Гости постоянно делают комплименты. Заказов стало в 2 раза больше.",
                author: "Мария Кузнецова",
                position: "Владелец CafeDeluxe",
                rating: 5
              },
              {
                text: "Работать с ребятами — одно удовольствие. Всё быстро, качественно и с душой. Рекомендую!",
                author: "Алексей Морозов",
                position: "CEO TechStart",
                rating: 5
              },
              {
                text: "Наш интернет-магазин получился именно таким, как я мечтала. Спасибо за терпение и профессионализм!",
                author: "Ольга Петрова",
                position: "Основатель EcoShop",
                rating: 5
              },
              {
                text: "Лучшая студия, с которой я работал. Креативный подход, современный дизайн и отличная коммуникация.",
                author: "Игорь Семёнов",
                position: "Маркетолог FitnessPro",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="animate-fade-in border-2">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="User" className="text-accent" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{review.author}</div>
                      <div className="text-sm text-muted-foreground">{review.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary/40">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                Связаться с нами
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Давайте создадим что-то <span className="text-accent">особенное</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Напишите нам о своём проекте, и мы свяжемся с вами в течение 24 часов. 
                Первая консультация — бесплатно!
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Mail", label: "Email", value: "hello@designhub.ru" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                  { icon: "MapPin", label: "Офис", value: "Москва, ул. Креативная, 10" }
                ].map((contact, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon as any} className="text-accent" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className="font-semibold text-foreground">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="animate-fade-in border-2 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ivan@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Расскажите о проекте</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите, что вы хотите создать..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg">
                    <Icon name="Send" className="mr-2" size={20} />
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
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Icon name="Sparkles" className="text-primary-foreground" size={22} />
                </div>
                <span className="text-2xl font-bold">DesignHub</span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Создаём веб-дизайн с душой с 2015 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Дизайн сайтов</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Фирменный стиль</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Разработка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">О студии</a></li>
                <li><a href="#portfolio" className="hover:text-primary-foreground transition-colors">Портфолио</a></li>
                <li><a href="#team" className="hover:text-primary-foreground transition-colors">Команда</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "Linkedin", "Twitter"].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  >
                    <Icon name={social as any} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2024 DesignHub. Все права защищены. Создано с любовью</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
