export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
            backgroundSize: "50px 50px",
            backgroundImage: `
            linear-gradient(to right, #0b2545 1px, transparent 1px),
            linear-gradient(to bottom, #0b2545 1px, transparent 1px)
            `,
        }}
        />

      {/* Gradient blobs
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#03acf9]/20 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#0066ff]/10 blur-3xl" /> */}
    </div>
  )
}