export default function strengthTest(word) {
  if (!word) return;
  const status = ['Low', 'Weak', 'Medium', 'High', 'Excellent'];
  let score = 0;
  if (word.length > 7) score++;
  if (/[A-Z]/.test(word)) score++;
  if (/[0-9]/.test(word)) score++;
  if (/[\W]/.test(word)) score++;
  return { score, status: status[score] };
}
