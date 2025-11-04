type Props = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <article className="card flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center" style={{background: 'rgba(14,165,164,0.08)'}}>
          {icon ?? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18" stroke="#0ea5a4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </article>
  );
}
