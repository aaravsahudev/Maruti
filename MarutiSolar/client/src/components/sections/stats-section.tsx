import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { target: 5000, suffix: "+", label: "Happy Customers" },
  { target: 50, suffix: "MW", label: "Installed" },
  { target: 15, suffix: "+", label: "Years Experience" },
  { target: 99, suffix: "%", label: "Satisfaction Rate" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 100;
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return Math.min(prev + increment, target);
      });
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-4xl font-bold text-solar-blue">
      {Math.ceil(count)}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-solar-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Counter target={stat.target} suffix={stat.suffix} />
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
