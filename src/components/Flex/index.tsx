function Flex() {
  return (
    <div className="border-4 border-[#dc143c] m-8 p-8 flex items-center justify-center">
      <div className="w-[250px] p-4">
        <h1 className="text-2xl">Scarlet Witch</h1>
        <p>Mais Poderosa que o Mago Supremo</p>
      </div>

      <div className="w-[250px]">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/9/91/Feiticeira_Escarlate.jpg"
          alt="Feiticeira"
        />
      </div>
    </div>
  );
}
export default Flex;
