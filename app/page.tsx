export default function WeddingInvitation() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-blush-dark/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-4 py-12 sm:py-20 relative z-10 text-center flex flex-col items-center justify-center space-y-16 animate-fade-in">
        <div className="space-y-6">
          <p className="font-lato uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm text-warm-gray animate-fade-in-up-delay-1">
            You are invited to the
          </p>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-gold-dark italic animate-fade-in-up-delay-2">
            Wedding Ceremony
          </h1>

          <div className="ornament-line w-24 sm:w-32 mx-auto animate-fade-in-up-delay-2 opacity-60"></div>

          <p className="font-cormorant italic text-lg sm:text-xl text-warm-gray animate-fade-in-up-delay-3">
            joining in marriage
          </p>
        </div>

        <div className="animate-fade-in-up-delay-4 py-4 space-y-4">
          <h2 className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-deep-brown leading-tight">
            Nihma <span className="text-gold-light font-playfair italic mx-2 sm:mx-4">&amp;</span> Nihal
          </h2>

          <div className="pt-2">
            <p className="font-lato tracking-widest uppercase text-[10px] sm:text-xs text-warm-gray font-light mb-2">
              Children of
            </p>
            <p className="font-cormorant italic text-lg sm:text-xl text-deep-brown">
              Mr. &amp; Mrs. Mahroof <span className="mx-2 text-gold-light/60">|</span> Mr. &amp; Mrs. Saboora
            </p>
          </div>
        </div>

        <div className="space-y-8 w-full">
          <div className="animate-fade-in-up-delay-5 space-y-2">
            <p className="font-lato text-lg sm:text-xl md:text-2xl tracking-widest text-deep-brown font-light">
              6.27.26 &nbsp;|&nbsp; 2:00
            </p>
          </div>

          <div className="animate-fade-in-up-delay-6 space-y-1">
            <p className="font-lato uppercase tracking-wider text-xs sm:text-sm text-warm-gray font-medium">
              FIRST CHURCH SANCTUARY
            </p>
            <p className="font-lato uppercase tracking-wider text-xs sm:text-sm text-warm-gray">
              771 N MAIN CHESTERFIELD
            </p>
            <p className="font-lato uppercase tracking-wider text-xs sm:text-sm text-warm-gray">
              WISCONSIN
            </p>
          </div>

          <div className="pt-4 animate-fade-in-up-delay-7 flex flex-col items-center gap-6">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border border-gold text-gold-dark font-lato uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-gold hover:text-white transition-all duration-500 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              View Location
            </a>

            <div className="space-y-2 mt-2">
              <p className="font-cormorant italic text-xl text-warm-gray mb-3 text-gold-dark">
                reception to follow
              </p>
              <div className="space-y-1">
                <p className="font-lato uppercase tracking-wider text-xs sm:text-sm text-warm-gray font-medium">
                  The Grand Estate
                </p>
                <p className="font-lato uppercase tracking-wider text-xs sm:text-sm text-warm-gray">
                  123 Elegant Avenue
                </p>
                <p className="font-lato uppercase tracking-wider text-xs sm:text-sm text-warm-gray">
                  Chesterfield, Wisconsin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
