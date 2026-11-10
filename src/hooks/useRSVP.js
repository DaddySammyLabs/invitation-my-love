import { useState } from "react";
import api from "../services/api";

const initialForm = {
  fullName: "",
  attendance: "yes",
  guestCount: "1",
  dietaryPreferences: "",
  message: "",
};

export default function useRSVP() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    const fullName = form.fullName.trim();
    const dietaryPreferences = form.dietaryPreferences.trim();
    const message = form.message.trim();

    if (fullName.length < 2 || fullName.length > 100) {
      setError("invalidName");
      return;
    }

    if (dietaryPreferences.length > 500 || message.length > 1000) {
      setError("invalidLength");
      return;
    }

    const guestCount = Number(form.guestCount);

    if (
      form.attendance === "yes" &&
      (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 10)
    ) {
      setError("invalidGuests");
      return;
    }

    const rsvpData = {
      fullName,
      attendance: form.attendance,
      guestCount: form.attendance === "yes" ? guestCount : 0,
      dietaryPreferences,
      message,
      createdAt: new Date().toISOString(),
    };

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await api.post("/data", rsvpData);

      console.log("RSVP saved:", response.data);

      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      console.error("RSVP error:", err);

      setError("submitError");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setError("");
    setForm(initialForm);
  };

  return {
    form,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
