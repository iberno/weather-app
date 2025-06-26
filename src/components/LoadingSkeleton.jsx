export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 animate-pulse">
      <div className="flex justify-between">
        <div>
          <div className="h-6 w-48 bg-slate-600 rounded mb-2" />
          <div className="h-4 w-32 bg-slate-700 rounded" />
        </div>
        <div className="h-10 w-10 bg-slate-600 rounded-full" />
      </div>

      <div className="my-12 text-center">
        <div className="h-20 w-20 bg-slate-600 rounded-full mx-auto mb-4" />
        <div className="h-12 w-48 bg-slate-700 rounded mx-auto mb-2" />
        <div className="h-4 w-32 bg-slate-600 rounded mx-auto" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Array(6).fill().map((_, i) => (
          <div key={i} className="h-4 w-full bg-slate-700 rounded" />
        ))}
      </div>

      <div className="mt-12 flex justify-between">
        {["Manhã", "Tarde", "Noite"].map((label, i) => (
          <div key={i} className="text-center">
            <div className="h-4 w-20 bg-slate-600 mx-auto mb-1 rounded" />
            <div className="h-4 w-12 bg-slate-700 mx-auto rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
