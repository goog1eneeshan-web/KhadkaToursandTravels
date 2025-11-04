import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  index?: number;
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServiceCard({ title, description, icon, index }: Props) {
  return (
    <motion.article
      variants={item}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden"
    >
      <div className="card flex flex-col gap-4 h-full transition-transform duration-300 group-hover:-translate-y-2">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110" 
               style={{background: 'rgba(14,165,164,0.08)'}}>
            {icon ?? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18" stroke="#0ea5a4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        <div className="mt-auto pt-4 flex items-center text-accent font-medium">
          Learn more
          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
            <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </motion.article>
  );
}
