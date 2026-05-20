export default function StrengthStatus({ strengthPASS }) {
  const colors = [
    'bg-red-500',
    'bg-orange-400',
    'bg-yellow-400',
    'bg-green-400',
    'bg-green-500',
  ];
  return (
    <div>
      <section className="items-center flex justify-between uppercase bg-gray-900 p-8 text-3xl">
        <p className=" font-extrabold text-gray-400 bg-ora">Strength</p>
        <p>{strengthPASS?.status}</p>
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4].map(num => (
            <div
              key={num}
              className={`h-10 w-4 ${num <= strengthPASS?.score ? colors[strengthPASS.score] : 'bg-gray-500'}`}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}
