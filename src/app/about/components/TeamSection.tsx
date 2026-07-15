export interface TeamMember {
  name: string;
  role: string;
  emoji: string;
}

export const TeamMemberCard = ({ name, role, emoji }: TeamMember) => {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="text-6xl mb-4">{emoji}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    { name: "Алексей Иванов", role: "CEO", emoji: "‍💼" },
    { name: "Мария Петрова", role: "Директор по маркетингу", emoji: "👩‍💼" },
    { name: "Дмитрий Сидоров", role: "Технический директор", emoji: "👨‍💻" },
    { name: "Анна Козлова", role: "Руководитель поддержки", emoji: "👩💻" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Наша команда
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};
