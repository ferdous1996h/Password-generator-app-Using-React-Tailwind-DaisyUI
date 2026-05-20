
export default function SubmitButton({ isPending }) {
  return (
    <button
      type="submit"
      className="mt-4 text-4xl cursor-pointer bg-green-500 py-6 uppercase"
    >
      {isPending ? (
        <section className="flex justify-center">
          <p>Generating</p>
          <span className="loading loading-infinity loading-xl"></span>
        </section>
      ) : (
        'Generate'
      )}
    </button>
  );
}
