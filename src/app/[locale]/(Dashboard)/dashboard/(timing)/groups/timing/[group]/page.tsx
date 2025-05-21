export default async function TimingPage({params}: {params: {group: number}}) {
    const { group } = await params;
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Timing {group}</h1>
            <p className="text-gray-500">Manage your timing here.</p>
        </div>
    );
}