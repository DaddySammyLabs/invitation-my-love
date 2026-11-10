import { Clock, Users, Heart, Utensils, Music, Sparkles } from "lucide-react";

import ComponentTitle from "../ComponentTitle/ComponentTitle";

import useLanguage from "../../hooks/useLanguage";
import useScrollAnimation from "../../hooks/useScrollAnimation";

import styles from "./Program.module.css";

const programItems = [
  {
    time: "16:00",
    icon: Users,
    key: "guests",
  },
  {
    time: "16:30",
    icon: Heart,
    key: "ceremony",
  },
  {
    time: "17:00",
    icon: Sparkles,
    key: "celebration",
  },
  {
    time: "18:00",
    icon: Utensils,
    key: "dinner",
  },
  {
    time: "20:00",
    icon: Music,
    key: "dance",
  },
  {
    time: "23:00",
    icon: Clock,
    key: "ending",
  },
];

function Program() {
  const { t } = useLanguage();

  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      className={`${styles.program} ${isVisible ? styles.visible : ""}`}
      id="program"
      ref={elementRef}
    >
      <div className={styles.container}>
        <ComponentTitle
          eyebrow={t.program.eyebrow}
          title={t.program.title}
          subtitle={t.program.subtitle}
        />

        <div className={styles.timeline}>
          {programItems.map((item, index) => {
            const Icon = item.icon;
            const event = t.program.events[item.key];

            return (
              <div
                className={styles.event}
                key={item.key}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className={styles.time}>{item.time}</div>

                <div className={styles.marker}>
                  <Icon size={19} strokeWidth={1.6} />
                </div>

                <div className={styles.eventContent}>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <span>✿</span>
          <p>{t.program.footer}</p>
          <span>✿</span>
        </div>
      </div>
    </section>
  );
}

export default Program;
