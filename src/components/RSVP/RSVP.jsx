import { Heart, Send, CheckCircle2 } from "lucide-react";

import ComponentTitle from "../ComponentTitle/ComponentTitle";

import useLanguage from "../../hooks/useLanguage";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import useRSVP from "../../hooks/useRSVP";

import styles from "./RSVP.module.css";

function RSVP() {
  const { t } = useLanguage();

  const { elementRef, isVisible } = useScrollAnimation();

  const {
    form,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  } = useRSVP();

  return (
    <section
      className={`${styles.rsvp} ${isVisible ? styles.visible : ""}`}
      id="rsvp"
      ref={elementRef}
    >
      <div className={styles.container}>
        <ComponentTitle
          eyebrow={t.rsvp.eyebrow}
          title={t.rsvp.title}
          subtitle={t.rsvp.subtitle}
        />

        <div className={styles.card}>
          <div className={styles.heart}>
            <Heart size={25} strokeWidth={1.4} />
          </div>

          {success ? (
            <div className={styles.success}>
              <CheckCircle2 size={55} />

              <h3>{t.rsvp.successTitle}</h3>

              <p>{t.rsvp.successMessage}</p>

              <button
                type="button"
                onClick={resetForm}
                className={styles.resetButton}
              >
                {t.rsvp.back}
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="fullName">{t.rsvp.name}</label>

                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder={t.rsvp.namePlaceholder}
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  required
                />
              </div>

              <fieldset className={styles.attendance}>
                <legend>{t.rsvp.attendance}</legend>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={form.attendance === "yes"}
                    onChange={handleChange}
                  />

                  <span>{t.rsvp.yes}</span>
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={form.attendance === "no"}
                    onChange={handleChange}
                  />

                  <span>{t.rsvp.no}</span>
                </label>
              </fieldset>

              {form.attendance === "yes" && (
                <div className={styles.field}>
                  <label htmlFor="guestCount">{t.rsvp.guests}</label>

                  <select
                    id="guestCount"
                    name="guestCount"
                    value={form.guestCount}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                      <option value={number} key={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className={styles.field}>
                <label htmlFor="dietaryPreferences">{t.rsvp.dietary}</label>

                <input
                  id="dietaryPreferences"
                  type="text"
                  name="dietaryPreferences"
                  value={form.dietaryPreferences}
                  onChange={handleChange}
                  placeholder={t.rsvp.dietaryPlaceholder}
                  maxLength={500}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">{t.rsvp.message}</label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.rsvp.messagePlaceholder}
                  rows={4}
                  maxLength={1000}
                />
              </div>

              {error && (
                <p className={styles.error} role="alert">
                  {t.rsvp.errors[error] || t.rsvp.errors.submitError}
                </p>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? (
                  t.rsvp.sending
                ) : (
                  <>
                    <Send size={17} />
                    {t.rsvp.submit}
                  </>
                )}
              </button>

              <p className={styles.privacy}>{t.rsvp.privacy}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default RSVP;
