export function Table({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
return (
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
{headers.map((h) => (
<th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
))}
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
{rows.map((r, i) => (
<tr key={i}>{r.map((cell, j) => (<td key={j} className="px-4 py-3 whitespace-nowrap">{cell}</td>))}</tr>
))}
</tbody>
</table>
</div>
)
}