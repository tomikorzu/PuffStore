export const getTimeByDate = (date: string) => {
  const today = new Date();
  const entryDate = new Date(date);
  const diffTime = Math.abs(today.getTime() - entryDate.getTime());

  const diffSeconds = Math.floor(diffTime / 1000);
  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffSeconds < 60) {
    return "Hace unos segundos";
  }

  if (diffMinutes < 60) {
    return `Hace ${diffMinutes} ${diffMinutes === 1 ? "minuto" : "minutos"}`;
  }

  if (diffHours < 24) {
    return `Hace ${diffHours} ${diffHours === 1 ? "hora" : "horas"}`;
  }

  if (diffDays < 30) {
    return `Hace ${diffDays} ${diffDays === 1 ? "día" : "días"}`;
  }

  if (diffMonths < 12) {
    return `Hace ${diffMonths} ${diffMonths === 1 ? "mes" : "meses"}`;
  }

  return `Hace ${diffYears} ${diffYears === 1 ? "año" : "años"}`;
};
