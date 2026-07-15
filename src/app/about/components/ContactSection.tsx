interface ContactItemProps {
  emoji: string;
  title: string;
  value: string;
}

const ContactItem = ({ emoji, title, value }: ContactItemProps) => {
  return (
    <div>
      <div className="text-3xl mb-2">{emoji}</div>
      <div className="font-medium">{title}</div>
      <div className="opacity-90">{value}</div>
    </div>
  );
};

export const ContactSection = () => {
  const contacts = [
    { emoji: "", title: "Email", value: "info@myshop.ru" },
    { emoji: "📞", title: "Телефон", value: "8 (800) 555-35-35" },
    { emoji: "📍", title: "Адрес", value: "Москва, ул. Примерная, 1" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
        <p className="text-xl mb-8 opacity-90">
          Есть вопросы? Мы всегда рады помочь!
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <ContactItem key={contact.value} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
};
