export default function NoiseOverlay() {
    return (
        <div className="pointer-events-none fixed inset-0 z-50 h-screen w-screen">
            <div className="noise-overlay h-full w-full opacity-20" />
        </div>
    )
}

