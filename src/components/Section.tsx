interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => (
  <section className="py-12">
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    {children}
  </section>
);
