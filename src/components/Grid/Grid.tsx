function Grid() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-1 bg-red-600">Servidores</div>

      <div className="col-span-3 bg-orange-600">Canais</div>

      <div className="col-span-6 bg-green-600">Feed</div>

      <div className="col-span-2 bg-yellow-600">Participantes</div>
    </div>
  );
}
export default Grid;
