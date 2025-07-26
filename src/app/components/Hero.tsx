export default function Hero() {
  return (
    <section className="bg-cover bg-center text-white text-center py-20" style={{ backgroundImage: `url('/assets/img/slider/painting1.webp')` }}>
      <h1 className="text-4xl md:text-6xl font-bold">Your Expert Painting Partners</h1>
      <p className="mt-4 text-lg">Transforming Sydney homes for over 9 years</p>
      <a
        href="https://wa.me/614XXXXXXXX"
        className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow-lg"
      >
        Get a Quote on WhatsApp
      </a>
    </section>
  );
}

